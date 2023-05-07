'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const data_types_1 = require('./data-types')
function sqlTypeToTsType(dataType) {
  switch (dataType) {
    case data_types_1.SqlDataType.CHAR:
    case data_types_1.SqlDataType.VARCHAR:
    case data_types_1.SqlDataType.TEXT:
    case data_types_1.SqlDataType.TINYTEXT:
    case data_types_1.SqlDataType.MEDIUMTEXT:
    case data_types_1.SqlDataType.LONGTEXT:
    case data_types_1.SqlDataType.TIME:
    case data_types_1.SqlDataType.GEOMETRY:
    case data_types_1.SqlDataType.SET:
    case data_types_1.SqlDataType.TINYBLOB:
    case data_types_1.SqlDataType.MEDIUMBLOB:
    case data_types_1.SqlDataType.LONGBLOB:
    case data_types_1.SqlDataType.BLOB:
    case data_types_1.SqlDataType.BINARY:
    case data_types_1.SqlDataType.VARBINARY:
    case data_types_1.SqlDataType.BIT:
    case data_types_1.SqlDataType.JSON:
    case data_types_1.SqlDataType.ENUM:
    case data_types_1.SqlDataType.BIGINT:
      return data_types_1.TsDataType.STRING
    case data_types_1.SqlDataType.TINYINT:
    case data_types_1.SqlDataType.INTEGER:
    case data_types_1.SqlDataType.INT:
    case data_types_1.SqlDataType.SMALLINT:
    case data_types_1.SqlDataType.MEDIUMINT:
    case data_types_1.SqlDataType.DOUBLE:
    case data_types_1.SqlDataType.DECIMAL:
    case data_types_1.SqlDataType.NUMERIC:
    case data_types_1.SqlDataType.FLOAT:
    case data_types_1.SqlDataType.YEAR:
      return data_types_1.TsDataType.NUMBER
    case data_types_1.SqlDataType.DATE:
    case data_types_1.SqlDataType.DATETIME:
    case data_types_1.SqlDataType.TIMESTAMP:
      return data_types_1.TsDataType.DATE
  }
}
exports.sqlTypeToTsType = sqlTypeToTsType
//# sourceMappingURL=sql-type-to-ts-type.js.map
