import { MySQLConnectionConfig } from 'ts-mysql-uri'
export declare type Schema = {
  config: MySQLConnectionConfig
  tables: SchemaTables
}
export declare type SchemaTables = SchemaTable[]
export declare type SchemaColumns = SchemaColumn[]
export interface SchemaTable {
  readonly name: string
  readonly columns: SchemaColumns
}
export interface SchemaColumn {
  readonly name: string
  readonly tsType: string
  readonly sqlType: string
  readonly optional: boolean
  readonly default: string | null
  readonly index: SchemaIndexKey | null
}
export declare type SchemaIndexKey = 'primary' | 'unique' | 'nonunique'
export interface MySQLSchemaOptions {
  readonly uri: string
}
export * from './lib/data-types'
export * from './lib/sql-type-to-ts-type'
export declare class MySQLSchema {
  private readonly connection
  private readonly config
  constructor(options: MySQLSchemaOptions)
  getSchema(): Promise<Schema>
  private queryTables
  private queryColumns
  private query
}
