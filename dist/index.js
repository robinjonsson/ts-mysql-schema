'use strict'
function __export(m) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p]
}
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const mysql2_1 = require('mysql2')
const ts_mysql_uri_1 = require('ts-mysql-uri')
const sql_type_to_ts_type_1 = require('./lib/sql-type-to-ts-type')
const sql_template_tag_1 = __importDefault(require('sql-template-tag'))
function getIndex(key) {
  switch (key) {
    case 'PRI':
      return 'primary'
    case 'UNI':
      return 'unique'
    case 'MUL':
      return 'nonunique'
  }
}
__export(require('./lib/data-types'))
__export(require('./lib/sql-type-to-ts-type'))
class MySQLSchema {
  constructor(options) {
    this.connection = mysql2_1.createConnection({ uri: options.uri })
    this.config = ts_mysql_uri_1.parse(options.uri)
  }
  async getSchema() {
    const tables = await this.queryTables()
    this.connection.end()
    return { config: this.config, tables }
  }
  async queryTables() {
    const results = await this.query(sql_template_tag_1.default`
        SELECT table_name as table_name FROM information_schema.columns
        WHERE table_schema = ${this.config.schema}
        GROUP BY table_name`)
    const names = results.map(result => result.table_name)
    const tables = names.map(async name => {
      return {
        name,
        columns: await this.queryColumns(name)
      }
    })
    return Promise.all(tables)
  }
  async queryColumns(tableName) {
    const columns = await this.query(sql_template_tag_1.default`
        SELECT column_name, data_type, is_nullable, column_default, column_key
        FROM information_schema.columns
        WHERE table_name = ${tableName}
        AND table_schema = ${this.config.schema}`)
    return columns.map(column => {
      return {
        name: column.column_name,
        sqlType: column.data_type,
        tsType: sql_type_to_ts_type_1.sqlTypeToTsType(column.data_type),
        optional: column.is_nullable === 'YES',
        default: column.column_default,
        index: column.column_key ? getIndex(column.column_key) : null
      }
    })
  }
  query(sql) {
    return new Promise((resolve, reject) => {
      var _a
      ;(_a = this.connection) === null || _a === void 0
        ? void 0
        : _a.query(sql, (error, results) => {
            if (error) {
              return reject(error)
            }
            return resolve(results)
          })
    })
  }
}
exports.MySQLSchema = MySQLSchema
//# sourceMappingURL=index.js.map
