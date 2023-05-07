import { SqlDataType, TsDataType } from './data-types'

export function sqlTypeToTsType(dataType: SqlDataType): TsDataType {
  switch (dataType) {
    case SqlDataType.CHAR:
    case SqlDataType.VARCHAR:
    case SqlDataType.TEXT:
    case SqlDataType.TINYTEXT:
    case SqlDataType.MEDIUMTEXT:
    case SqlDataType.LONGTEXT:
    case SqlDataType.TIME:
    case SqlDataType.GEOMETRY:
    case SqlDataType.SET:
    case SqlDataType.TINYBLOB:
    case SqlDataType.MEDIUMBLOB:
    case SqlDataType.LONGBLOB:
    case SqlDataType.BLOB:
    case SqlDataType.BINARY:
    case SqlDataType.VARBINARY:
    case SqlDataType.BIT:
    case SqlDataType.JSON:
    case SqlDataType.ENUM:
    case SqlDataType.BIGINT:
      return TsDataType.STRING
    case SqlDataType.TINYINT:
    case SqlDataType.INTEGER:
    case SqlDataType.INT:
    case SqlDataType.SMALLINT:
    case SqlDataType.MEDIUMINT:
    case SqlDataType.DOUBLE:
    case SqlDataType.DECIMAL:
    case SqlDataType.NUMERIC:
    case SqlDataType.FLOAT:
    case SqlDataType.YEAR:
      return TsDataType.NUMBER
    case SqlDataType.DATE:
    case SqlDataType.DATETIME:
    case SqlDataType.TIMESTAMP:
      return TsDataType.DATE
  }
}
