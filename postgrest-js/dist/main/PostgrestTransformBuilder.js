"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PostgrestBuilder_1 = __importDefault(require("./PostgrestBuilder"));
class PostgrestTransformBuilder extends PostgrestBuilder_1.default {
    /**
     * Perform a SELECT on the query result.
     *
     * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
     * return modified rows. By calling this method, modified rows are returned in
     * `data`.
     *
     * @param columns - The columns to retrieve, separated by commas
     */
    select(columns) {
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = (columns !== null && columns !== void 0 ? columns : '*')
            .split('')
            .map((c) => {
            if (/\s/.test(c) && !quoted) {
                return '';
            }
            if (c === '"') {
                quoted = !quoted;
            }
            return c;
        })
            .join('');
        this.url.searchParams.set('select', cleanedColumns);
        if (this.headers['Prefer']) {
            this.headers['Prefer'] += ',';
        }
        this.headers['Prefer'] += 'return=representation';
        return this;
    }
    /**
     * Order the query result by `column`.
     *
     * You can call this method multiple times to order by multiple columns.
     *
     * You can order foreign tables, but it doesn't affect the ordering of the
     * current table.
     *
     * @param column - The column to order by
     * @param options - Named parameters
     * @param options.ascending - If `true`, the result will be in ascending order
     * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
     * `null`s appear last.
     * @param options.foreignTable - Set this to order a foreign table by foreign
     * columns
     */
    order(column, { ascending = true, nullsFirst, foreignTable, } = {}) {
        const key = foreignTable ? `${foreignTable}.order` : 'order';
        const existingOrder = this.url.searchParams.get(key);
        this.url.searchParams.set(key, `${existingOrder ? `${existingOrder},` : ''}${column}.${ascending ? 'asc' : 'desc'}${nullsFirst === undefined ? '' : nullsFirst ? '.nullsfirst' : '.nullslast'}`);
        return this;
    }
    /**
     * Limit the query result by `count`.
     *
     * @param count - The maximum number of rows to return
     * @param options - Named parameters
     * @param options.foreignTable - Set this to limit rows of foreign tables
     * instead of the current table
     */
    limit(count, { foreignTable } = {}) {
        const key = typeof foreignTable === 'undefined' ? 'limit' : `${foreignTable}.limit`;
        this.url.searchParams.set(key, `${count}`);
        return this;
    }
    /**
     * Limit the query result by `from` and `to` inclusively.
     *
     * @param from - The starting index from which to limit the result
     * @param to - The last index to which to limit the result
     * @param options - Named parameters
     * @param options.foreignTable - Set this to limit rows of foreign tables
     * instead of the current table
     */
    range(from, to, { foreignTable } = {}) {
        const keyOffset = typeof foreignTable === 'undefined' ? 'offset' : `${foreignTable}.offset`;
        const keyLimit = typeof foreignTable === 'undefined' ? 'limit' : `${foreignTable}.limit`;
        this.url.searchParams.set(keyOffset, `${from}`);
        // Range is inclusive, so add 1
        this.url.searchParams.set(keyLimit, `${to - from + 1}`);
        return this;
    }
    /**
     * Set the AbortSignal for the fetch request.
     *
     * @param signal - The AbortSignal to use for the fetch request
     */
    abortSignal(signal) {
        this.signal = signal;
        return this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be one row (e.g. using `.limit(1)`), otherwise this
     * returns an error.
     */
    single() {
        this.headers['Accept'] = 'application/vnd.pgrst.object+json';
        return this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
     * this returns an error.
     */
    maybeSingle() {
        this.headers['Accept'] = 'application/vnd.pgrst.object+json';
        this.allowEmpty = true;
        return this;
    }
    /**
     * Return `data` as a string in CSV format.
     */
    csv() {
        this.headers['Accept'] = 'text/csv';
        return this;
    }
    /**
     * Return `data` as an object in [GeoJSON](https://geojson.org) format.
     */
    geojson() {
        this.headers['Accept'] = 'application/geo+json';
        return this;
    }
    /**
     * Return `data` as the EXPLAIN plan for the query.
     *
     * @param options - Named parameters
     *
     * @param options.analyze - If `true`, the query will be executed and the
     * actual run time will be returned
     *
     * @param options.verbose - If `true`, the query identifier will be returned
     * and `data` will include the output columns of the query
     *
     * @param options.settings - If `true`, include information on configuration
     * parameters that affect query planning
     *
     * @param options.buffers - If `true`, include information on buffer usage
     *
     * @param options.wal - If `true`, include information on WAL record generation
     *
     * @param options.format - The format of the output, can be `"text"` (default)
     * or `"json"`
     */
    explain({ analyze = false, verbose = false, settings = false, buffers = false, wal = false, format = 'text', } = {}) {
        const options = [
            analyze ? 'analyze' : null,
            verbose ? 'verbose' : null,
            settings ? 'settings' : null,
            buffers ? 'buffers' : null,
            wal ? 'wal' : null,
        ]
            .filter(Boolean)
            .join('|');
        // An Accept header can carry multiple media types but postgrest-js always sends one
        const forMediatype = this.headers['Accept'];
        this.headers['Accept'] = `application/vnd.pgrst.plan+${format}; for="${forMediatype}"; options=${options};`;
        if (format === 'json')
            return this;
        else
            return this;
    }
    /**
     * Rollback the query.
     *
     * `data` will still be returned, but the query is not committed.
     */
    rollback() {
        var _a;
        if (((_a = this.headers['Prefer']) !== null && _a !== void 0 ? _a : '').trim().length > 0) {
            this.headers['Prefer'] += ',tx=rollback';
        }
        else {
            this.headers['Prefer'] = 'tx=rollback';
        }
        return this;
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     */
    returns() {
        return this;
    }
}
exports.default = PostgrestTransformBuilder;
//# sourceMappingURL=PostgrestTransformBuilder.js.map