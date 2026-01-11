// src/types/sqljs.d.ts
declare module 'sql.js' {
  export interface Database {
    exec(sql: string, params?: any[]): any[];
    run(sql: string, params?: any[]): void;
    close(): void;
    // Add more methods as needed
  }

  export interface SqlJsStatic {
    new (options?: { locateFile?: (file: string) => string }): Promise<SqlJsStatic>;
    Database: {
      new (data?: Uint8Array): Database;
    };
  }

  const initSqlJs: (options?: { locateFile?: (file: string) => string }) => Promise<SqlJsStatic>;
  export default initSqlJs;
}