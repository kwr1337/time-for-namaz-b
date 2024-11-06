
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model City
 * 
 */
export type City = $Result.DefaultSelection<Prisma.$CityPayload>
/**
 * Model Prayer
 * 
 */
export type Prayer = $Result.DefaultSelection<Prisma.$PrayerPayload>
/**
 * Model Mosque
 * 
 */
export type Mosque = $Result.DefaultSelection<Prisma.$MosquePayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>
/**
 * Model QRCode
 * 
 */
export type QRCode = $Result.DefaultSelection<Prisma.$QRCodePayload>
/**
 * Model ErrorMessage
 * 
 */
export type ErrorMessage = $Result.DefaultSelection<Prisma.$ErrorMessagePayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  CITY_ADMIN: 'CITY_ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cities
 * const cities = await prisma.city.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cities
   * const cities = await prisma.city.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.city`: Exposes CRUD operations for the **City** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.CityDelegate<ExtArgs>;

  /**
   * `prisma.prayer`: Exposes CRUD operations for the **Prayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prayers
    * const prayers = await prisma.prayer.findMany()
    * ```
    */
  get prayer(): Prisma.PrayerDelegate<ExtArgs>;

  /**
   * `prisma.mosque`: Exposes CRUD operations for the **Mosque** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mosques
    * const mosques = await prisma.mosque.findMany()
    * ```
    */
  get mosque(): Prisma.MosqueDelegate<ExtArgs>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs>;

  /**
   * `prisma.qRCode`: Exposes CRUD operations for the **QRCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QRCodes
    * const qRCodes = await prisma.qRCode.findMany()
    * ```
    */
  get qRCode(): Prisma.QRCodeDelegate<ExtArgs>;

  /**
   * `prisma.errorMessage`: Exposes CRUD operations for the **ErrorMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ErrorMessages
    * const errorMessages = await prisma.errorMessage.findMany()
    * ```
    */
  get errorMessage(): Prisma.ErrorMessageDelegate<ExtArgs>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    City: 'City',
    Prayer: 'Prayer',
    Mosque: 'Mosque',
    Media: 'Media',
    QRCode: 'QRCode',
    ErrorMessage: 'ErrorMessage',
    Admin: 'Admin'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'city' | 'prayer' | 'mosque' | 'media' | 'qRCode' | 'errorMessage' | 'admin'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      City: {
        payload: Prisma.$CityPayload<ExtArgs>
        fields: Prisma.CityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findFirst: {
            args: Prisma.CityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findMany: {
            args: Prisma.CityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          create: {
            args: Prisma.CityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          createMany: {
            args: Prisma.CityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          update: {
            args: Prisma.CityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          deleteMany: {
            args: Prisma.CityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          aggregate: {
            args: Prisma.CityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCity>
          }
          groupBy: {
            args: Prisma.CityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CityCountArgs<ExtArgs>,
            result: $Utils.Optional<CityCountAggregateOutputType> | number
          }
        }
      }
      Prayer: {
        payload: Prisma.$PrayerPayload<ExtArgs>
        fields: Prisma.PrayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrayerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrayerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrayerPayload>
          }
          findFirst: {
            args: Prisma.PrayerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrayerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrayerPayload>
          }
          findMany: {
            args: Prisma.PrayerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrayerPayload>[]
          }
          create: {
            args: Prisma.PrayerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrayerPayload>
          }
          createMany: {
            args: Prisma.PrayerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PrayerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrayerPayload>
          }
          update: {
            args: Prisma.PrayerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrayerPayload>
          }
          deleteMany: {
            args: Prisma.PrayerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PrayerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PrayerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrayerPayload>
          }
          aggregate: {
            args: Prisma.PrayerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePrayer>
          }
          groupBy: {
            args: Prisma.PrayerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PrayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrayerCountArgs<ExtArgs>,
            result: $Utils.Optional<PrayerCountAggregateOutputType> | number
          }
        }
      }
      Mosque: {
        payload: Prisma.$MosquePayload<ExtArgs>
        fields: Prisma.MosqueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MosqueFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MosquePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MosqueFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MosquePayload>
          }
          findFirst: {
            args: Prisma.MosqueFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MosquePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MosqueFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MosquePayload>
          }
          findMany: {
            args: Prisma.MosqueFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MosquePayload>[]
          }
          create: {
            args: Prisma.MosqueCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MosquePayload>
          }
          createMany: {
            args: Prisma.MosqueCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MosqueDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MosquePayload>
          }
          update: {
            args: Prisma.MosqueUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MosquePayload>
          }
          deleteMany: {
            args: Prisma.MosqueDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MosqueUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MosqueUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MosquePayload>
          }
          aggregate: {
            args: Prisma.MosqueAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMosque>
          }
          groupBy: {
            args: Prisma.MosqueGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MosqueGroupByOutputType>[]
          }
          count: {
            args: Prisma.MosqueCountArgs<ExtArgs>,
            result: $Utils.Optional<MosqueCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>,
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      QRCode: {
        payload: Prisma.$QRCodePayload<ExtArgs>
        fields: Prisma.QRCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QRCodeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QRCodeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          findFirst: {
            args: Prisma.QRCodeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QRCodeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          findMany: {
            args: Prisma.QRCodeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>[]
          }
          create: {
            args: Prisma.QRCodeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          createMany: {
            args: Prisma.QRCodeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.QRCodeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          update: {
            args: Prisma.QRCodeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          deleteMany: {
            args: Prisma.QRCodeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.QRCodeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.QRCodeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          aggregate: {
            args: Prisma.QRCodeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateQRCode>
          }
          groupBy: {
            args: Prisma.QRCodeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<QRCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.QRCodeCountArgs<ExtArgs>,
            result: $Utils.Optional<QRCodeCountAggregateOutputType> | number
          }
        }
      }
      ErrorMessage: {
        payload: Prisma.$ErrorMessagePayload<ExtArgs>
        fields: Prisma.ErrorMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ErrorMessageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ErrorMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ErrorMessageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ErrorMessagePayload>
          }
          findFirst: {
            args: Prisma.ErrorMessageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ErrorMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ErrorMessageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ErrorMessagePayload>
          }
          findMany: {
            args: Prisma.ErrorMessageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ErrorMessagePayload>[]
          }
          create: {
            args: Prisma.ErrorMessageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ErrorMessagePayload>
          }
          createMany: {
            args: Prisma.ErrorMessageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ErrorMessageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ErrorMessagePayload>
          }
          update: {
            args: Prisma.ErrorMessageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ErrorMessagePayload>
          }
          deleteMany: {
            args: Prisma.ErrorMessageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ErrorMessageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ErrorMessageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ErrorMessagePayload>
          }
          aggregate: {
            args: Prisma.ErrorMessageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateErrorMessage>
          }
          groupBy: {
            args: Prisma.ErrorMessageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ErrorMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ErrorMessageCountArgs<ExtArgs>,
            result: $Utils.Optional<ErrorMessageCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>,
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CityCountOutputType
   */

  export type CityCountOutputType = {
    prayers: number
    Mosque: number
  }

  export type CityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prayers?: boolean | CityCountOutputTypeCountPrayersArgs
    Mosque?: boolean | CityCountOutputTypeCountMosqueArgs
  }

  // Custom InputTypes

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountPrayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrayerWhereInput
  }


  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountMosqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MosqueWhereInput
  }



  /**
   * Count Type MosqueCountOutputType
   */

  export type MosqueCountOutputType = {
    media: number
  }

  export type MosqueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | MosqueCountOutputTypeCountMediaArgs
  }

  // Custom InputTypes

  /**
   * MosqueCountOutputType without action
   */
  export type MosqueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MosqueCountOutputType
     */
    select?: MosqueCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MosqueCountOutputType without action
   */
  export type MosqueCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }



  /**
   * Models
   */

  /**
   * Model City
   */

  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityAvgAggregateOutputType = {
    id: number | null
  }

  export type CitySumAggregateOutputType = {
    id: number | null
  }

  export type CityMinAggregateOutputType = {
    id: number | null
    name: string | null
    logoUrl: string | null
  }

  export type CityMaxAggregateOutputType = {
    id: number | null
    name: string | null
    logoUrl: string | null
  }

  export type CityCountAggregateOutputType = {
    id: number
    name: number
    logoUrl: number
    _all: number
  }


  export type CityAvgAggregateInputType = {
    id?: true
  }

  export type CitySumAggregateInputType = {
    id?: true
  }

  export type CityMinAggregateInputType = {
    id?: true
    name?: true
    logoUrl?: true
  }

  export type CityMaxAggregateInputType = {
    id?: true
    name?: true
    logoUrl?: true
  }

  export type CityCountAggregateInputType = {
    id?: true
    name?: true
    logoUrl?: true
    _all?: true
  }

  export type CityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which City to aggregate.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
    orderBy?: CityOrderByWithAggregationInput | CityOrderByWithAggregationInput[]
    by: CityScalarFieldEnum[] | CityScalarFieldEnum
    having?: CityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _avg?: CityAvgAggregateInputType
    _sum?: CitySumAggregateInputType
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }

  export type CityGroupByOutputType = {
    id: number
    name: string
    logoUrl: string | null
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type CitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logoUrl?: boolean
    prayers?: boolean | City$prayersArgs<ExtArgs>
    Mosque?: boolean | City$MosqueArgs<ExtArgs>
    admin?: boolean | City$adminArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectScalar = {
    id?: boolean
    name?: boolean
    logoUrl?: boolean
  }

  export type CityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prayers?: boolean | City$prayersArgs<ExtArgs>
    Mosque?: boolean | City$MosqueArgs<ExtArgs>
    admin?: boolean | City$adminArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "City"
    objects: {
      prayers: Prisma.$PrayerPayload<ExtArgs>[]
      Mosque: Prisma.$MosquePayload<ExtArgs>[]
      admin: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      logoUrl: string | null
    }, ExtArgs["result"]["city"]>
    composites: {}
  }


  type CityGetPayload<S extends boolean | null | undefined | CityDefaultArgs> = $Result.GetResult<Prisma.$CityPayload, S>

  type CityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface CityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['City'], meta: { name: 'City' } }
    /**
     * Find zero or one City that matches the filter.
     * @param {CityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CityFindUniqueArgs<ExtArgs>>
    ): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one City that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CityFindFirstArgs<ExtArgs>>
    ): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first City that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a City.
     * @param {CityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
    **/
    create<T extends CityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CityCreateArgs<ExtArgs>>
    ): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Cities.
     *     @param {CityCreateManyArgs} args - Arguments to create many Cities.
     *     @example
     *     // Create many Cities
     *     const city = await prisma.city.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a City.
     * @param {CityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
    **/
    delete<T extends CityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CityDeleteArgs<ExtArgs>>
    ): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one City.
     * @param {CityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CityUpdateArgs<ExtArgs>>
    ): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cities.
     * @param {CityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one City.
     * @param {CityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
    **/
    upsert<T extends CityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CityUpsertArgs<ExtArgs>>
    ): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends CityCountArgs>(
      args?: Subset<T, CityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the City model
   */
  readonly fields: CityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for City.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    prayers<T extends City$prayersArgs<ExtArgs> = {}>(args?: Subset<T, City$prayersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, 'findMany'> | Null>;

    Mosque<T extends City$MosqueArgs<ExtArgs> = {}>(args?: Subset<T, City$MosqueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, 'findMany'> | Null>;

    admin<T extends City$adminArgs<ExtArgs> = {}>(args?: Subset<T, City$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the City model
   */ 
  interface CityFieldRefs {
    readonly id: FieldRef<"City", 'Int'>
    readonly name: FieldRef<"City", 'String'>
    readonly logoUrl: FieldRef<"City", 'String'>
  }
    

  // Custom InputTypes

  /**
   * City findUnique
   */
  export type CityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }


  /**
   * City findUniqueOrThrow
   */
  export type CityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }


  /**
   * City findFirst
   */
  export type CityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }


  /**
   * City findFirstOrThrow
   */
  export type CityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }


  /**
   * City findMany
   */
  export type CityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }


  /**
   * City create
   */
  export type CityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to create a City.
     */
    data: XOR<CityCreateInput, CityUncheckedCreateInput>
  }


  /**
   * City createMany
   */
  export type CityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * City update
   */
  export type CityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to update a City.
     */
    data: XOR<CityUpdateInput, CityUncheckedUpdateInput>
    /**
     * Choose, which City to update.
     */
    where: CityWhereUniqueInput
  }


  /**
   * City updateMany
   */
  export type CityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
  }


  /**
   * City upsert
   */
  export type CityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The filter to search for the City to update in case it exists.
     */
    where: CityWhereUniqueInput
    /**
     * In case the City found by the `where` argument doesn't exist, create a new City with this data.
     */
    create: XOR<CityCreateInput, CityUncheckedCreateInput>
    /**
     * In case the City was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityUpdateInput, CityUncheckedUpdateInput>
  }


  /**
   * City delete
   */
  export type CityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter which City to delete.
     */
    where: CityWhereUniqueInput
  }


  /**
   * City deleteMany
   */
  export type CityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cities to delete
     */
    where?: CityWhereInput
  }


  /**
   * City.prayers
   */
  export type City$prayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: PrayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrayerInclude<ExtArgs> | null
    where?: PrayerWhereInput
    orderBy?: PrayerOrderByWithRelationInput | PrayerOrderByWithRelationInput[]
    cursor?: PrayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrayerScalarFieldEnum | PrayerScalarFieldEnum[]
  }


  /**
   * City.Mosque
   */
  export type City$MosqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mosque
     */
    select?: MosqueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MosqueInclude<ExtArgs> | null
    where?: MosqueWhereInput
    orderBy?: MosqueOrderByWithRelationInput | MosqueOrderByWithRelationInput[]
    cursor?: MosqueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MosqueScalarFieldEnum | MosqueScalarFieldEnum[]
  }


  /**
   * City.admin
   */
  export type City$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }


  /**
   * City without action
   */
  export type CityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude<ExtArgs> | null
  }



  /**
   * Model Prayer
   */

  export type AggregatePrayer = {
    _count: PrayerCountAggregateOutputType | null
    _avg: PrayerAvgAggregateOutputType | null
    _sum: PrayerSumAggregateOutputType | null
    _min: PrayerMinAggregateOutputType | null
    _max: PrayerMaxAggregateOutputType | null
  }

  export type PrayerAvgAggregateOutputType = {
    id: number | null
    cityId: number | null
  }

  export type PrayerSumAggregateOutputType = {
    id: number | null
    cityId: number | null
  }

  export type PrayerMinAggregateOutputType = {
    id: number | null
    cityId: number | null
    date: string | null
    fajr: string | null
    shuruk: string | null
    zuhr: string | null
    asr: string | null
    maghrib: string | null
    isha: string | null
  }

  export type PrayerMaxAggregateOutputType = {
    id: number | null
    cityId: number | null
    date: string | null
    fajr: string | null
    shuruk: string | null
    zuhr: string | null
    asr: string | null
    maghrib: string | null
    isha: string | null
  }

  export type PrayerCountAggregateOutputType = {
    id: number
    cityId: number
    date: number
    fajr: number
    shuruk: number
    zuhr: number
    asr: number
    maghrib: number
    isha: number
    _all: number
  }


  export type PrayerAvgAggregateInputType = {
    id?: true
    cityId?: true
  }

  export type PrayerSumAggregateInputType = {
    id?: true
    cityId?: true
  }

  export type PrayerMinAggregateInputType = {
    id?: true
    cityId?: true
    date?: true
    fajr?: true
    shuruk?: true
    zuhr?: true
    asr?: true
    maghrib?: true
    isha?: true
  }

  export type PrayerMaxAggregateInputType = {
    id?: true
    cityId?: true
    date?: true
    fajr?: true
    shuruk?: true
    zuhr?: true
    asr?: true
    maghrib?: true
    isha?: true
  }

  export type PrayerCountAggregateInputType = {
    id?: true
    cityId?: true
    date?: true
    fajr?: true
    shuruk?: true
    zuhr?: true
    asr?: true
    maghrib?: true
    isha?: true
    _all?: true
  }

  export type PrayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prayer to aggregate.
     */
    where?: PrayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prayers to fetch.
     */
    orderBy?: PrayerOrderByWithRelationInput | PrayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prayers
    **/
    _count?: true | PrayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrayerMaxAggregateInputType
  }

  export type GetPrayerAggregateType<T extends PrayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePrayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrayer[P]>
      : GetScalarType<T[P], AggregatePrayer[P]>
  }




  export type PrayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrayerWhereInput
    orderBy?: PrayerOrderByWithAggregationInput | PrayerOrderByWithAggregationInput[]
    by: PrayerScalarFieldEnum[] | PrayerScalarFieldEnum
    having?: PrayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrayerCountAggregateInputType | true
    _avg?: PrayerAvgAggregateInputType
    _sum?: PrayerSumAggregateInputType
    _min?: PrayerMinAggregateInputType
    _max?: PrayerMaxAggregateInputType
  }

  export type PrayerGroupByOutputType = {
    id: number
    cityId: number
    date: string | null
    fajr: string | null
    shuruk: string | null
    zuhr: string | null
    asr: string | null
    maghrib: string | null
    isha: string | null
    _count: PrayerCountAggregateOutputType | null
    _avg: PrayerAvgAggregateOutputType | null
    _sum: PrayerSumAggregateOutputType | null
    _min: PrayerMinAggregateOutputType | null
    _max: PrayerMaxAggregateOutputType | null
  }

  type GetPrayerGroupByPayload<T extends PrayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrayerGroupByOutputType[P]>
            : GetScalarType<T[P], PrayerGroupByOutputType[P]>
        }
      >
    >


  export type PrayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cityId?: boolean
    date?: boolean
    fajr?: boolean
    shuruk?: boolean
    zuhr?: boolean
    asr?: boolean
    maghrib?: boolean
    isha?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prayer"]>

  export type PrayerSelectScalar = {
    id?: boolean
    cityId?: boolean
    date?: boolean
    fajr?: boolean
    shuruk?: boolean
    zuhr?: boolean
    asr?: boolean
    maghrib?: boolean
    isha?: boolean
  }

  export type PrayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
  }


  export type $PrayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prayer"
    objects: {
      city: Prisma.$CityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cityId: number
      date: string | null
      fajr: string | null
      shuruk: string | null
      zuhr: string | null
      asr: string | null
      maghrib: string | null
      isha: string | null
    }, ExtArgs["result"]["prayer"]>
    composites: {}
  }


  type PrayerGetPayload<S extends boolean | null | undefined | PrayerDefaultArgs> = $Result.GetResult<Prisma.$PrayerPayload, S>

  type PrayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PrayerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PrayerCountAggregateInputType | true
    }

  export interface PrayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prayer'], meta: { name: 'Prayer' } }
    /**
     * Find zero or one Prayer that matches the filter.
     * @param {PrayerFindUniqueArgs} args - Arguments to find a Prayer
     * @example
     * // Get one Prayer
     * const prayer = await prisma.prayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PrayerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PrayerFindUniqueArgs<ExtArgs>>
    ): Prisma__PrayerClient<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Prayer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PrayerFindUniqueOrThrowArgs} args - Arguments to find a Prayer
     * @example
     * // Get one Prayer
     * const prayer = await prisma.prayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PrayerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PrayerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PrayerClient<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Prayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerFindFirstArgs} args - Arguments to find a Prayer
     * @example
     * // Get one Prayer
     * const prayer = await prisma.prayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PrayerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PrayerFindFirstArgs<ExtArgs>>
    ): Prisma__PrayerClient<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Prayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerFindFirstOrThrowArgs} args - Arguments to find a Prayer
     * @example
     * // Get one Prayer
     * const prayer = await prisma.prayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PrayerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PrayerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PrayerClient<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Prayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prayers
     * const prayers = await prisma.prayer.findMany()
     * 
     * // Get first 10 Prayers
     * const prayers = await prisma.prayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prayerWithIdOnly = await prisma.prayer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PrayerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PrayerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Prayer.
     * @param {PrayerCreateArgs} args - Arguments to create a Prayer.
     * @example
     * // Create one Prayer
     * const Prayer = await prisma.prayer.create({
     *   data: {
     *     // ... data to create a Prayer
     *   }
     * })
     * 
    **/
    create<T extends PrayerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PrayerCreateArgs<ExtArgs>>
    ): Prisma__PrayerClient<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Prayers.
     *     @param {PrayerCreateManyArgs} args - Arguments to create many Prayers.
     *     @example
     *     // Create many Prayers
     *     const prayer = await prisma.prayer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PrayerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PrayerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Prayer.
     * @param {PrayerDeleteArgs} args - Arguments to delete one Prayer.
     * @example
     * // Delete one Prayer
     * const Prayer = await prisma.prayer.delete({
     *   where: {
     *     // ... filter to delete one Prayer
     *   }
     * })
     * 
    **/
    delete<T extends PrayerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PrayerDeleteArgs<ExtArgs>>
    ): Prisma__PrayerClient<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Prayer.
     * @param {PrayerUpdateArgs} args - Arguments to update one Prayer.
     * @example
     * // Update one Prayer
     * const prayer = await prisma.prayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PrayerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PrayerUpdateArgs<ExtArgs>>
    ): Prisma__PrayerClient<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Prayers.
     * @param {PrayerDeleteManyArgs} args - Arguments to filter Prayers to delete.
     * @example
     * // Delete a few Prayers
     * const { count } = await prisma.prayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PrayerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PrayerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prayers
     * const prayer = await prisma.prayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PrayerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PrayerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Prayer.
     * @param {PrayerUpsertArgs} args - Arguments to update or create a Prayer.
     * @example
     * // Update or create a Prayer
     * const prayer = await prisma.prayer.upsert({
     *   create: {
     *     // ... data to create a Prayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prayer we want to update
     *   }
     * })
    **/
    upsert<T extends PrayerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PrayerUpsertArgs<ExtArgs>>
    ): Prisma__PrayerClient<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Prayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerCountArgs} args - Arguments to filter Prayers to count.
     * @example
     * // Count the number of Prayers
     * const count = await prisma.prayer.count({
     *   where: {
     *     // ... the filter for the Prayers we want to count
     *   }
     * })
    **/
    count<T extends PrayerCountArgs>(
      args?: Subset<T, PrayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrayerAggregateArgs>(args: Subset<T, PrayerAggregateArgs>): Prisma.PrismaPromise<GetPrayerAggregateType<T>>

    /**
     * Group by Prayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrayerGroupByArgs['orderBy'] }
        : { orderBy?: PrayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prayer model
   */
  readonly fields: PrayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Prayer model
   */ 
  interface PrayerFieldRefs {
    readonly id: FieldRef<"Prayer", 'Int'>
    readonly cityId: FieldRef<"Prayer", 'Int'>
    readonly date: FieldRef<"Prayer", 'String'>
    readonly fajr: FieldRef<"Prayer", 'String'>
    readonly shuruk: FieldRef<"Prayer", 'String'>
    readonly zuhr: FieldRef<"Prayer", 'String'>
    readonly asr: FieldRef<"Prayer", 'String'>
    readonly maghrib: FieldRef<"Prayer", 'String'>
    readonly isha: FieldRef<"Prayer", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Prayer findUnique
   */
  export type PrayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: PrayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrayerInclude<ExtArgs> | null
    /**
     * Filter, which Prayer to fetch.
     */
    where: PrayerWhereUniqueInput
  }


  /**
   * Prayer findUniqueOrThrow
   */
  export type PrayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: PrayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrayerInclude<ExtArgs> | null
    /**
     * Filter, which Prayer to fetch.
     */
    where: PrayerWhereUniqueInput
  }


  /**
   * Prayer findFirst
   */
  export type PrayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: PrayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrayerInclude<ExtArgs> | null
    /**
     * Filter, which Prayer to fetch.
     */
    where?: PrayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prayers to fetch.
     */
    orderBy?: PrayerOrderByWithRelationInput | PrayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prayers.
     */
    cursor?: PrayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prayers.
     */
    distinct?: PrayerScalarFieldEnum | PrayerScalarFieldEnum[]
  }


  /**
   * Prayer findFirstOrThrow
   */
  export type PrayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: PrayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrayerInclude<ExtArgs> | null
    /**
     * Filter, which Prayer to fetch.
     */
    where?: PrayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prayers to fetch.
     */
    orderBy?: PrayerOrderByWithRelationInput | PrayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prayers.
     */
    cursor?: PrayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prayers.
     */
    distinct?: PrayerScalarFieldEnum | PrayerScalarFieldEnum[]
  }


  /**
   * Prayer findMany
   */
  export type PrayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: PrayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrayerInclude<ExtArgs> | null
    /**
     * Filter, which Prayers to fetch.
     */
    where?: PrayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prayers to fetch.
     */
    orderBy?: PrayerOrderByWithRelationInput | PrayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prayers.
     */
    cursor?: PrayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prayers.
     */
    skip?: number
    distinct?: PrayerScalarFieldEnum | PrayerScalarFieldEnum[]
  }


  /**
   * Prayer create
   */
  export type PrayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: PrayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Prayer.
     */
    data: XOR<PrayerCreateInput, PrayerUncheckedCreateInput>
  }


  /**
   * Prayer createMany
   */
  export type PrayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prayers.
     */
    data: PrayerCreateManyInput | PrayerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Prayer update
   */
  export type PrayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: PrayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Prayer.
     */
    data: XOR<PrayerUpdateInput, PrayerUncheckedUpdateInput>
    /**
     * Choose, which Prayer to update.
     */
    where: PrayerWhereUniqueInput
  }


  /**
   * Prayer updateMany
   */
  export type PrayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prayers.
     */
    data: XOR<PrayerUpdateManyMutationInput, PrayerUncheckedUpdateManyInput>
    /**
     * Filter which Prayers to update
     */
    where?: PrayerWhereInput
  }


  /**
   * Prayer upsert
   */
  export type PrayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: PrayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Prayer to update in case it exists.
     */
    where: PrayerWhereUniqueInput
    /**
     * In case the Prayer found by the `where` argument doesn't exist, create a new Prayer with this data.
     */
    create: XOR<PrayerCreateInput, PrayerUncheckedCreateInput>
    /**
     * In case the Prayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrayerUpdateInput, PrayerUncheckedUpdateInput>
  }


  /**
   * Prayer delete
   */
  export type PrayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: PrayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrayerInclude<ExtArgs> | null
    /**
     * Filter which Prayer to delete.
     */
    where: PrayerWhereUniqueInput
  }


  /**
   * Prayer deleteMany
   */
  export type PrayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prayers to delete
     */
    where?: PrayerWhereInput
  }


  /**
   * Prayer without action
   */
  export type PrayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: PrayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrayerInclude<ExtArgs> | null
  }



  /**
   * Model Mosque
   */

  export type AggregateMosque = {
    _count: MosqueCountAggregateOutputType | null
    _avg: MosqueAvgAggregateOutputType | null
    _sum: MosqueSumAggregateOutputType | null
    _min: MosqueMinAggregateOutputType | null
    _max: MosqueMaxAggregateOutputType | null
  }

  export type MosqueAvgAggregateOutputType = {
    id: number | null
    cityId: number | null
  }

  export type MosqueSumAggregateOutputType = {
    id: number | null
    cityId: number | null
  }

  export type MosqueMinAggregateOutputType = {
    id: number | null
    cityId: number | null
    name: string | null
    logoUrl: string | null
  }

  export type MosqueMaxAggregateOutputType = {
    id: number | null
    cityId: number | null
    name: string | null
    logoUrl: string | null
  }

  export type MosqueCountAggregateOutputType = {
    id: number
    cityId: number
    name: number
    logoUrl: number
    _all: number
  }


  export type MosqueAvgAggregateInputType = {
    id?: true
    cityId?: true
  }

  export type MosqueSumAggregateInputType = {
    id?: true
    cityId?: true
  }

  export type MosqueMinAggregateInputType = {
    id?: true
    cityId?: true
    name?: true
    logoUrl?: true
  }

  export type MosqueMaxAggregateInputType = {
    id?: true
    cityId?: true
    name?: true
    logoUrl?: true
  }

  export type MosqueCountAggregateInputType = {
    id?: true
    cityId?: true
    name?: true
    logoUrl?: true
    _all?: true
  }

  export type MosqueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mosque to aggregate.
     */
    where?: MosqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mosques to fetch.
     */
    orderBy?: MosqueOrderByWithRelationInput | MosqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MosqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mosques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mosques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mosques
    **/
    _count?: true | MosqueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MosqueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MosqueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MosqueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MosqueMaxAggregateInputType
  }

  export type GetMosqueAggregateType<T extends MosqueAggregateArgs> = {
        [P in keyof T & keyof AggregateMosque]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMosque[P]>
      : GetScalarType<T[P], AggregateMosque[P]>
  }




  export type MosqueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MosqueWhereInput
    orderBy?: MosqueOrderByWithAggregationInput | MosqueOrderByWithAggregationInput[]
    by: MosqueScalarFieldEnum[] | MosqueScalarFieldEnum
    having?: MosqueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MosqueCountAggregateInputType | true
    _avg?: MosqueAvgAggregateInputType
    _sum?: MosqueSumAggregateInputType
    _min?: MosqueMinAggregateInputType
    _max?: MosqueMaxAggregateInputType
  }

  export type MosqueGroupByOutputType = {
    id: number
    cityId: number
    name: string
    logoUrl: string | null
    _count: MosqueCountAggregateOutputType | null
    _avg: MosqueAvgAggregateOutputType | null
    _sum: MosqueSumAggregateOutputType | null
    _min: MosqueMinAggregateOutputType | null
    _max: MosqueMaxAggregateOutputType | null
  }

  type GetMosqueGroupByPayload<T extends MosqueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MosqueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MosqueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MosqueGroupByOutputType[P]>
            : GetScalarType<T[P], MosqueGroupByOutputType[P]>
        }
      >
    >


  export type MosqueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cityId?: boolean
    name?: boolean
    logoUrl?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
    media?: boolean | Mosque$mediaArgs<ExtArgs>
    qrCode?: boolean | Mosque$qrCodeArgs<ExtArgs>
    _count?: boolean | MosqueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mosque"]>

  export type MosqueSelectScalar = {
    id?: boolean
    cityId?: boolean
    name?: boolean
    logoUrl?: boolean
  }

  export type MosqueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
    media?: boolean | Mosque$mediaArgs<ExtArgs>
    qrCode?: boolean | Mosque$qrCodeArgs<ExtArgs>
    _count?: boolean | MosqueCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MosquePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mosque"
    objects: {
      city: Prisma.$CityPayload<ExtArgs>
      media: Prisma.$MediaPayload<ExtArgs>[]
      qrCode: Prisma.$QRCodePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cityId: number
      name: string
      logoUrl: string | null
    }, ExtArgs["result"]["mosque"]>
    composites: {}
  }


  type MosqueGetPayload<S extends boolean | null | undefined | MosqueDefaultArgs> = $Result.GetResult<Prisma.$MosquePayload, S>

  type MosqueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MosqueFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MosqueCountAggregateInputType | true
    }

  export interface MosqueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mosque'], meta: { name: 'Mosque' } }
    /**
     * Find zero or one Mosque that matches the filter.
     * @param {MosqueFindUniqueArgs} args - Arguments to find a Mosque
     * @example
     * // Get one Mosque
     * const mosque = await prisma.mosque.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MosqueFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MosqueFindUniqueArgs<ExtArgs>>
    ): Prisma__MosqueClient<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Mosque that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MosqueFindUniqueOrThrowArgs} args - Arguments to find a Mosque
     * @example
     * // Get one Mosque
     * const mosque = await prisma.mosque.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MosqueFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MosqueFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MosqueClient<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Mosque that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueFindFirstArgs} args - Arguments to find a Mosque
     * @example
     * // Get one Mosque
     * const mosque = await prisma.mosque.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MosqueFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MosqueFindFirstArgs<ExtArgs>>
    ): Prisma__MosqueClient<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Mosque that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueFindFirstOrThrowArgs} args - Arguments to find a Mosque
     * @example
     * // Get one Mosque
     * const mosque = await prisma.mosque.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MosqueFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MosqueFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MosqueClient<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Mosques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mosques
     * const mosques = await prisma.mosque.findMany()
     * 
     * // Get first 10 Mosques
     * const mosques = await prisma.mosque.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mosqueWithIdOnly = await prisma.mosque.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MosqueFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MosqueFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Mosque.
     * @param {MosqueCreateArgs} args - Arguments to create a Mosque.
     * @example
     * // Create one Mosque
     * const Mosque = await prisma.mosque.create({
     *   data: {
     *     // ... data to create a Mosque
     *   }
     * })
     * 
    **/
    create<T extends MosqueCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MosqueCreateArgs<ExtArgs>>
    ): Prisma__MosqueClient<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Mosques.
     *     @param {MosqueCreateManyArgs} args - Arguments to create many Mosques.
     *     @example
     *     // Create many Mosques
     *     const mosque = await prisma.mosque.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MosqueCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MosqueCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mosque.
     * @param {MosqueDeleteArgs} args - Arguments to delete one Mosque.
     * @example
     * // Delete one Mosque
     * const Mosque = await prisma.mosque.delete({
     *   where: {
     *     // ... filter to delete one Mosque
     *   }
     * })
     * 
    **/
    delete<T extends MosqueDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MosqueDeleteArgs<ExtArgs>>
    ): Prisma__MosqueClient<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Mosque.
     * @param {MosqueUpdateArgs} args - Arguments to update one Mosque.
     * @example
     * // Update one Mosque
     * const mosque = await prisma.mosque.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MosqueUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MosqueUpdateArgs<ExtArgs>>
    ): Prisma__MosqueClient<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Mosques.
     * @param {MosqueDeleteManyArgs} args - Arguments to filter Mosques to delete.
     * @example
     * // Delete a few Mosques
     * const { count } = await prisma.mosque.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MosqueDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MosqueDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mosques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mosques
     * const mosque = await prisma.mosque.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MosqueUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MosqueUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mosque.
     * @param {MosqueUpsertArgs} args - Arguments to update or create a Mosque.
     * @example
     * // Update or create a Mosque
     * const mosque = await prisma.mosque.upsert({
     *   create: {
     *     // ... data to create a Mosque
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mosque we want to update
     *   }
     * })
    **/
    upsert<T extends MosqueUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MosqueUpsertArgs<ExtArgs>>
    ): Prisma__MosqueClient<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Mosques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueCountArgs} args - Arguments to filter Mosques to count.
     * @example
     * // Count the number of Mosques
     * const count = await prisma.mosque.count({
     *   where: {
     *     // ... the filter for the Mosques we want to count
     *   }
     * })
    **/
    count<T extends MosqueCountArgs>(
      args?: Subset<T, MosqueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MosqueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mosque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MosqueAggregateArgs>(args: Subset<T, MosqueAggregateArgs>): Prisma.PrismaPromise<GetMosqueAggregateType<T>>

    /**
     * Group by Mosque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MosqueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MosqueGroupByArgs['orderBy'] }
        : { orderBy?: MosqueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MosqueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMosqueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mosque model
   */
  readonly fields: MosqueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mosque.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MosqueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    media<T extends Mosque$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Mosque$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, 'findMany'> | Null>;

    qrCode<T extends Mosque$qrCodeArgs<ExtArgs> = {}>(args?: Subset<T, Mosque$qrCodeArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Mosque model
   */ 
  interface MosqueFieldRefs {
    readonly id: FieldRef<"Mosque", 'Int'>
    readonly cityId: FieldRef<"Mosque", 'Int'>
    readonly name: FieldRef<"Mosque", 'String'>
    readonly logoUrl: FieldRef<"Mosque", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Mosque findUnique
   */
  export type MosqueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mosque
     */
    select?: MosqueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MosqueInclude<ExtArgs> | null
    /**
     * Filter, which Mosque to fetch.
     */
    where: MosqueWhereUniqueInput
  }


  /**
   * Mosque findUniqueOrThrow
   */
  export type MosqueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mosque
     */
    select?: MosqueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MosqueInclude<ExtArgs> | null
    /**
     * Filter, which Mosque to fetch.
     */
    where: MosqueWhereUniqueInput
  }


  /**
   * Mosque findFirst
   */
  export type MosqueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mosque
     */
    select?: MosqueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MosqueInclude<ExtArgs> | null
    /**
     * Filter, which Mosque to fetch.
     */
    where?: MosqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mosques to fetch.
     */
    orderBy?: MosqueOrderByWithRelationInput | MosqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mosques.
     */
    cursor?: MosqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mosques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mosques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mosques.
     */
    distinct?: MosqueScalarFieldEnum | MosqueScalarFieldEnum[]
  }


  /**
   * Mosque findFirstOrThrow
   */
  export type MosqueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mosque
     */
    select?: MosqueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MosqueInclude<ExtArgs> | null
    /**
     * Filter, which Mosque to fetch.
     */
    where?: MosqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mosques to fetch.
     */
    orderBy?: MosqueOrderByWithRelationInput | MosqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mosques.
     */
    cursor?: MosqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mosques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mosques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mosques.
     */
    distinct?: MosqueScalarFieldEnum | MosqueScalarFieldEnum[]
  }


  /**
   * Mosque findMany
   */
  export type MosqueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mosque
     */
    select?: MosqueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MosqueInclude<ExtArgs> | null
    /**
     * Filter, which Mosques to fetch.
     */
    where?: MosqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mosques to fetch.
     */
    orderBy?: MosqueOrderByWithRelationInput | MosqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mosques.
     */
    cursor?: MosqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mosques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mosques.
     */
    skip?: number
    distinct?: MosqueScalarFieldEnum | MosqueScalarFieldEnum[]
  }


  /**
   * Mosque create
   */
  export type MosqueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mosque
     */
    select?: MosqueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MosqueInclude<ExtArgs> | null
    /**
     * The data needed to create a Mosque.
     */
    data: XOR<MosqueCreateInput, MosqueUncheckedCreateInput>
  }


  /**
   * Mosque createMany
   */
  export type MosqueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mosques.
     */
    data: MosqueCreateManyInput | MosqueCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Mosque update
   */
  export type MosqueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mosque
     */
    select?: MosqueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MosqueInclude<ExtArgs> | null
    /**
     * The data needed to update a Mosque.
     */
    data: XOR<MosqueUpdateInput, MosqueUncheckedUpdateInput>
    /**
     * Choose, which Mosque to update.
     */
    where: MosqueWhereUniqueInput
  }


  /**
   * Mosque updateMany
   */
  export type MosqueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mosques.
     */
    data: XOR<MosqueUpdateManyMutationInput, MosqueUncheckedUpdateManyInput>
    /**
     * Filter which Mosques to update
     */
    where?: MosqueWhereInput
  }


  /**
   * Mosque upsert
   */
  export type MosqueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mosque
     */
    select?: MosqueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MosqueInclude<ExtArgs> | null
    /**
     * The filter to search for the Mosque to update in case it exists.
     */
    where: MosqueWhereUniqueInput
    /**
     * In case the Mosque found by the `where` argument doesn't exist, create a new Mosque with this data.
     */
    create: XOR<MosqueCreateInput, MosqueUncheckedCreateInput>
    /**
     * In case the Mosque was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MosqueUpdateInput, MosqueUncheckedUpdateInput>
  }


  /**
   * Mosque delete
   */
  export type MosqueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mosque
     */
    select?: MosqueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MosqueInclude<ExtArgs> | null
    /**
     * Filter which Mosque to delete.
     */
    where: MosqueWhereUniqueInput
  }


  /**
   * Mosque deleteMany
   */
  export type MosqueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mosques to delete
     */
    where?: MosqueWhereInput
  }


  /**
   * Mosque.media
   */
  export type Mosque$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    cursor?: MediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }


  /**
   * Mosque.qrCode
   */
  export type Mosque$qrCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QRCodeInclude<ExtArgs> | null
    where?: QRCodeWhereInput
  }


  /**
   * Mosque without action
   */
  export type MosqueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mosque
     */
    select?: MosqueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MosqueInclude<ExtArgs> | null
  }



  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaAvgAggregateOutputType = {
    id: number | null
    mosqueId: number | null
  }

  export type MediaSumAggregateOutputType = {
    id: number | null
    mosqueId: number | null
  }

  export type MediaMinAggregateOutputType = {
    id: number | null
    mosqueId: number | null
    videoUrl: string | null
  }

  export type MediaMaxAggregateOutputType = {
    id: number | null
    mosqueId: number | null
    videoUrl: string | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    mosqueId: number
    videoUrl: number
    _all: number
  }


  export type MediaAvgAggregateInputType = {
    id?: true
    mosqueId?: true
  }

  export type MediaSumAggregateInputType = {
    id?: true
    mosqueId?: true
  }

  export type MediaMinAggregateInputType = {
    id?: true
    mosqueId?: true
    videoUrl?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    mosqueId?: true
    videoUrl?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    mosqueId?: true
    videoUrl?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _avg?: MediaAvgAggregateInputType
    _sum?: MediaSumAggregateInputType
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: number
    mosqueId: number
    videoUrl: string | null
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mosqueId?: boolean
    videoUrl?: boolean
    mosque?: boolean | MosqueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectScalar = {
    id?: boolean
    mosqueId?: boolean
    videoUrl?: boolean
  }

  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mosque?: boolean | MosqueDefaultArgs<ExtArgs>
  }


  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      mosque: Prisma.$MosquePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mosqueId: number
      videoUrl: string | null
    }, ExtArgs["result"]["media"]>
    composites: {}
  }


  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MediaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>
    ): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Media that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MediaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>
    ): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MediaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
    **/
    create<T extends MediaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MediaCreateArgs<ExtArgs>>
    ): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Media.
     *     @param {MediaCreateManyArgs} args - Arguments to create many Media.
     *     @example
     *     // Create many Media
     *     const media = await prisma.media.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MediaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
    **/
    delete<T extends MediaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>
    ): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MediaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>
    ): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MediaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MediaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
    **/
    upsert<T extends MediaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>
    ): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    mosque<T extends MosqueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MosqueDefaultArgs<ExtArgs>>): Prisma__MosqueClient<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Media model
   */ 
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'Int'>
    readonly mosqueId: FieldRef<"Media", 'Int'>
    readonly videoUrl: FieldRef<"Media", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }


  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }


  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }


  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }


  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }


  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }


  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }


  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
  }


  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }


  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }


  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
  }


  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaInclude<ExtArgs> | null
  }



  /**
   * Model QRCode
   */

  export type AggregateQRCode = {
    _count: QRCodeCountAggregateOutputType | null
    _avg: QRCodeAvgAggregateOutputType | null
    _sum: QRCodeSumAggregateOutputType | null
    _min: QRCodeMinAggregateOutputType | null
    _max: QRCodeMaxAggregateOutputType | null
  }

  export type QRCodeAvgAggregateOutputType = {
    id: number | null
    mosqueId: number | null
  }

  export type QRCodeSumAggregateOutputType = {
    id: number | null
    mosqueId: number | null
  }

  export type QRCodeMinAggregateOutputType = {
    id: number | null
    mosqueId: number | null
    imageUrl: string | null
  }

  export type QRCodeMaxAggregateOutputType = {
    id: number | null
    mosqueId: number | null
    imageUrl: string | null
  }

  export type QRCodeCountAggregateOutputType = {
    id: number
    mosqueId: number
    imageUrl: number
    _all: number
  }


  export type QRCodeAvgAggregateInputType = {
    id?: true
    mosqueId?: true
  }

  export type QRCodeSumAggregateInputType = {
    id?: true
    mosqueId?: true
  }

  export type QRCodeMinAggregateInputType = {
    id?: true
    mosqueId?: true
    imageUrl?: true
  }

  export type QRCodeMaxAggregateInputType = {
    id?: true
    mosqueId?: true
    imageUrl?: true
  }

  export type QRCodeCountAggregateInputType = {
    id?: true
    mosqueId?: true
    imageUrl?: true
    _all?: true
  }

  export type QRCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QRCode to aggregate.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QRCodes
    **/
    _count?: true | QRCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QRCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QRCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QRCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QRCodeMaxAggregateInputType
  }

  export type GetQRCodeAggregateType<T extends QRCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateQRCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQRCode[P]>
      : GetScalarType<T[P], AggregateQRCode[P]>
  }




  export type QRCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QRCodeWhereInput
    orderBy?: QRCodeOrderByWithAggregationInput | QRCodeOrderByWithAggregationInput[]
    by: QRCodeScalarFieldEnum[] | QRCodeScalarFieldEnum
    having?: QRCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QRCodeCountAggregateInputType | true
    _avg?: QRCodeAvgAggregateInputType
    _sum?: QRCodeSumAggregateInputType
    _min?: QRCodeMinAggregateInputType
    _max?: QRCodeMaxAggregateInputType
  }

  export type QRCodeGroupByOutputType = {
    id: number
    mosqueId: number
    imageUrl: string
    _count: QRCodeCountAggregateOutputType | null
    _avg: QRCodeAvgAggregateOutputType | null
    _sum: QRCodeSumAggregateOutputType | null
    _min: QRCodeMinAggregateOutputType | null
    _max: QRCodeMaxAggregateOutputType | null
  }

  type GetQRCodeGroupByPayload<T extends QRCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QRCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QRCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QRCodeGroupByOutputType[P]>
            : GetScalarType<T[P], QRCodeGroupByOutputType[P]>
        }
      >
    >


  export type QRCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mosqueId?: boolean
    imageUrl?: boolean
    mosque?: boolean | MosqueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qRCode"]>

  export type QRCodeSelectScalar = {
    id?: boolean
    mosqueId?: boolean
    imageUrl?: boolean
  }

  export type QRCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mosque?: boolean | MosqueDefaultArgs<ExtArgs>
  }


  export type $QRCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QRCode"
    objects: {
      mosque: Prisma.$MosquePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mosqueId: number
      imageUrl: string
    }, ExtArgs["result"]["qRCode"]>
    composites: {}
  }


  type QRCodeGetPayload<S extends boolean | null | undefined | QRCodeDefaultArgs> = $Result.GetResult<Prisma.$QRCodePayload, S>

  type QRCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QRCodeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QRCodeCountAggregateInputType | true
    }

  export interface QRCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QRCode'], meta: { name: 'QRCode' } }
    /**
     * Find zero or one QRCode that matches the filter.
     * @param {QRCodeFindUniqueArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QRCodeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, QRCodeFindUniqueArgs<ExtArgs>>
    ): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one QRCode that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {QRCodeFindUniqueOrThrowArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QRCodeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QRCodeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first QRCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeFindFirstArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QRCodeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, QRCodeFindFirstArgs<ExtArgs>>
    ): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first QRCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeFindFirstOrThrowArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QRCodeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QRCodeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more QRCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QRCodes
     * const qRCodes = await prisma.qRCode.findMany()
     * 
     * // Get first 10 QRCodes
     * const qRCodes = await prisma.qRCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qRCodeWithIdOnly = await prisma.qRCode.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QRCodeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QRCodeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a QRCode.
     * @param {QRCodeCreateArgs} args - Arguments to create a QRCode.
     * @example
     * // Create one QRCode
     * const QRCode = await prisma.qRCode.create({
     *   data: {
     *     // ... data to create a QRCode
     *   }
     * })
     * 
    **/
    create<T extends QRCodeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, QRCodeCreateArgs<ExtArgs>>
    ): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many QRCodes.
     *     @param {QRCodeCreateManyArgs} args - Arguments to create many QRCodes.
     *     @example
     *     // Create many QRCodes
     *     const qRCode = await prisma.qRCode.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QRCodeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QRCodeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QRCode.
     * @param {QRCodeDeleteArgs} args - Arguments to delete one QRCode.
     * @example
     * // Delete one QRCode
     * const QRCode = await prisma.qRCode.delete({
     *   where: {
     *     // ... filter to delete one QRCode
     *   }
     * })
     * 
    **/
    delete<T extends QRCodeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, QRCodeDeleteArgs<ExtArgs>>
    ): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one QRCode.
     * @param {QRCodeUpdateArgs} args - Arguments to update one QRCode.
     * @example
     * // Update one QRCode
     * const qRCode = await prisma.qRCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QRCodeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, QRCodeUpdateArgs<ExtArgs>>
    ): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more QRCodes.
     * @param {QRCodeDeleteManyArgs} args - Arguments to filter QRCodes to delete.
     * @example
     * // Delete a few QRCodes
     * const { count } = await prisma.qRCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QRCodeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QRCodeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QRCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QRCodes
     * const qRCode = await prisma.qRCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QRCodeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, QRCodeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QRCode.
     * @param {QRCodeUpsertArgs} args - Arguments to update or create a QRCode.
     * @example
     * // Update or create a QRCode
     * const qRCode = await prisma.qRCode.upsert({
     *   create: {
     *     // ... data to create a QRCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QRCode we want to update
     *   }
     * })
    **/
    upsert<T extends QRCodeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, QRCodeUpsertArgs<ExtArgs>>
    ): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of QRCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeCountArgs} args - Arguments to filter QRCodes to count.
     * @example
     * // Count the number of QRCodes
     * const count = await prisma.qRCode.count({
     *   where: {
     *     // ... the filter for the QRCodes we want to count
     *   }
     * })
    **/
    count<T extends QRCodeCountArgs>(
      args?: Subset<T, QRCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QRCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QRCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QRCodeAggregateArgs>(args: Subset<T, QRCodeAggregateArgs>): Prisma.PrismaPromise<GetQRCodeAggregateType<T>>

    /**
     * Group by QRCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QRCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QRCodeGroupByArgs['orderBy'] }
        : { orderBy?: QRCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QRCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQRCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QRCode model
   */
  readonly fields: QRCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QRCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QRCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    mosque<T extends MosqueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MosqueDefaultArgs<ExtArgs>>): Prisma__MosqueClient<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the QRCode model
   */ 
  interface QRCodeFieldRefs {
    readonly id: FieldRef<"QRCode", 'Int'>
    readonly mosqueId: FieldRef<"QRCode", 'Int'>
    readonly imageUrl: FieldRef<"QRCode", 'String'>
  }
    

  // Custom InputTypes

  /**
   * QRCode findUnique
   */
  export type QRCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where: QRCodeWhereUniqueInput
  }


  /**
   * QRCode findUniqueOrThrow
   */
  export type QRCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where: QRCodeWhereUniqueInput
  }


  /**
   * QRCode findFirst
   */
  export type QRCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QRCodes.
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QRCodes.
     */
    distinct?: QRCodeScalarFieldEnum | QRCodeScalarFieldEnum[]
  }


  /**
   * QRCode findFirstOrThrow
   */
  export type QRCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QRCodes.
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QRCodes.
     */
    distinct?: QRCodeScalarFieldEnum | QRCodeScalarFieldEnum[]
  }


  /**
   * QRCode findMany
   */
  export type QRCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCodes to fetch.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QRCodes.
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    distinct?: QRCodeScalarFieldEnum | QRCodeScalarFieldEnum[]
  }


  /**
   * QRCode create
   */
  export type QRCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a QRCode.
     */
    data: XOR<QRCodeCreateInput, QRCodeUncheckedCreateInput>
  }


  /**
   * QRCode createMany
   */
  export type QRCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QRCodes.
     */
    data: QRCodeCreateManyInput | QRCodeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * QRCode update
   */
  export type QRCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a QRCode.
     */
    data: XOR<QRCodeUpdateInput, QRCodeUncheckedUpdateInput>
    /**
     * Choose, which QRCode to update.
     */
    where: QRCodeWhereUniqueInput
  }


  /**
   * QRCode updateMany
   */
  export type QRCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QRCodes.
     */
    data: XOR<QRCodeUpdateManyMutationInput, QRCodeUncheckedUpdateManyInput>
    /**
     * Filter which QRCodes to update
     */
    where?: QRCodeWhereInput
  }


  /**
   * QRCode upsert
   */
  export type QRCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the QRCode to update in case it exists.
     */
    where: QRCodeWhereUniqueInput
    /**
     * In case the QRCode found by the `where` argument doesn't exist, create a new QRCode with this data.
     */
    create: XOR<QRCodeCreateInput, QRCodeUncheckedCreateInput>
    /**
     * In case the QRCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QRCodeUpdateInput, QRCodeUncheckedUpdateInput>
  }


  /**
   * QRCode delete
   */
  export type QRCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter which QRCode to delete.
     */
    where: QRCodeWhereUniqueInput
  }


  /**
   * QRCode deleteMany
   */
  export type QRCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QRCodes to delete
     */
    where?: QRCodeWhereInput
  }


  /**
   * QRCode without action
   */
  export type QRCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QRCodeInclude<ExtArgs> | null
  }



  /**
   * Model ErrorMessage
   */

  export type AggregateErrorMessage = {
    _count: ErrorMessageCountAggregateOutputType | null
    _avg: ErrorMessageAvgAggregateOutputType | null
    _sum: ErrorMessageSumAggregateOutputType | null
    _min: ErrorMessageMinAggregateOutputType | null
    _max: ErrorMessageMaxAggregateOutputType | null
  }

  export type ErrorMessageAvgAggregateOutputType = {
    id: number | null
  }

  export type ErrorMessageSumAggregateOutputType = {
    id: number | null
  }

  export type ErrorMessageMinAggregateOutputType = {
    id: number | null
    message: string | null
  }

  export type ErrorMessageMaxAggregateOutputType = {
    id: number | null
    message: string | null
  }

  export type ErrorMessageCountAggregateOutputType = {
    id: number
    message: number
    _all: number
  }


  export type ErrorMessageAvgAggregateInputType = {
    id?: true
  }

  export type ErrorMessageSumAggregateInputType = {
    id?: true
  }

  export type ErrorMessageMinAggregateInputType = {
    id?: true
    message?: true
  }

  export type ErrorMessageMaxAggregateInputType = {
    id?: true
    message?: true
  }

  export type ErrorMessageCountAggregateInputType = {
    id?: true
    message?: true
    _all?: true
  }

  export type ErrorMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ErrorMessage to aggregate.
     */
    where?: ErrorMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorMessages to fetch.
     */
    orderBy?: ErrorMessageOrderByWithRelationInput | ErrorMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ErrorMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ErrorMessages
    **/
    _count?: true | ErrorMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ErrorMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ErrorMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ErrorMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ErrorMessageMaxAggregateInputType
  }

  export type GetErrorMessageAggregateType<T extends ErrorMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateErrorMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateErrorMessage[P]>
      : GetScalarType<T[P], AggregateErrorMessage[P]>
  }




  export type ErrorMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ErrorMessageWhereInput
    orderBy?: ErrorMessageOrderByWithAggregationInput | ErrorMessageOrderByWithAggregationInput[]
    by: ErrorMessageScalarFieldEnum[] | ErrorMessageScalarFieldEnum
    having?: ErrorMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ErrorMessageCountAggregateInputType | true
    _avg?: ErrorMessageAvgAggregateInputType
    _sum?: ErrorMessageSumAggregateInputType
    _min?: ErrorMessageMinAggregateInputType
    _max?: ErrorMessageMaxAggregateInputType
  }

  export type ErrorMessageGroupByOutputType = {
    id: number
    message: string
    _count: ErrorMessageCountAggregateOutputType | null
    _avg: ErrorMessageAvgAggregateOutputType | null
    _sum: ErrorMessageSumAggregateOutputType | null
    _min: ErrorMessageMinAggregateOutputType | null
    _max: ErrorMessageMaxAggregateOutputType | null
  }

  type GetErrorMessageGroupByPayload<T extends ErrorMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ErrorMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ErrorMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ErrorMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ErrorMessageGroupByOutputType[P]>
        }
      >
    >


  export type ErrorMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
  }, ExtArgs["result"]["errorMessage"]>

  export type ErrorMessageSelectScalar = {
    id?: boolean
    message?: boolean
  }


  export type $ErrorMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ErrorMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message: string
    }, ExtArgs["result"]["errorMessage"]>
    composites: {}
  }


  type ErrorMessageGetPayload<S extends boolean | null | undefined | ErrorMessageDefaultArgs> = $Result.GetResult<Prisma.$ErrorMessagePayload, S>

  type ErrorMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ErrorMessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ErrorMessageCountAggregateInputType | true
    }

  export interface ErrorMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ErrorMessage'], meta: { name: 'ErrorMessage' } }
    /**
     * Find zero or one ErrorMessage that matches the filter.
     * @param {ErrorMessageFindUniqueArgs} args - Arguments to find a ErrorMessage
     * @example
     * // Get one ErrorMessage
     * const errorMessage = await prisma.errorMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ErrorMessageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ErrorMessageFindUniqueArgs<ExtArgs>>
    ): Prisma__ErrorMessageClient<$Result.GetResult<Prisma.$ErrorMessagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ErrorMessage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ErrorMessageFindUniqueOrThrowArgs} args - Arguments to find a ErrorMessage
     * @example
     * // Get one ErrorMessage
     * const errorMessage = await prisma.errorMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ErrorMessageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ErrorMessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ErrorMessageClient<$Result.GetResult<Prisma.$ErrorMessagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ErrorMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorMessageFindFirstArgs} args - Arguments to find a ErrorMessage
     * @example
     * // Get one ErrorMessage
     * const errorMessage = await prisma.errorMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ErrorMessageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ErrorMessageFindFirstArgs<ExtArgs>>
    ): Prisma__ErrorMessageClient<$Result.GetResult<Prisma.$ErrorMessagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ErrorMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorMessageFindFirstOrThrowArgs} args - Arguments to find a ErrorMessage
     * @example
     * // Get one ErrorMessage
     * const errorMessage = await prisma.errorMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ErrorMessageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ErrorMessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ErrorMessageClient<$Result.GetResult<Prisma.$ErrorMessagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ErrorMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorMessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ErrorMessages
     * const errorMessages = await prisma.errorMessage.findMany()
     * 
     * // Get first 10 ErrorMessages
     * const errorMessages = await prisma.errorMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const errorMessageWithIdOnly = await prisma.errorMessage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ErrorMessageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ErrorMessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorMessagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ErrorMessage.
     * @param {ErrorMessageCreateArgs} args - Arguments to create a ErrorMessage.
     * @example
     * // Create one ErrorMessage
     * const ErrorMessage = await prisma.errorMessage.create({
     *   data: {
     *     // ... data to create a ErrorMessage
     *   }
     * })
     * 
    **/
    create<T extends ErrorMessageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ErrorMessageCreateArgs<ExtArgs>>
    ): Prisma__ErrorMessageClient<$Result.GetResult<Prisma.$ErrorMessagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ErrorMessages.
     *     @param {ErrorMessageCreateManyArgs} args - Arguments to create many ErrorMessages.
     *     @example
     *     // Create many ErrorMessages
     *     const errorMessage = await prisma.errorMessage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ErrorMessageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ErrorMessageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ErrorMessage.
     * @param {ErrorMessageDeleteArgs} args - Arguments to delete one ErrorMessage.
     * @example
     * // Delete one ErrorMessage
     * const ErrorMessage = await prisma.errorMessage.delete({
     *   where: {
     *     // ... filter to delete one ErrorMessage
     *   }
     * })
     * 
    **/
    delete<T extends ErrorMessageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ErrorMessageDeleteArgs<ExtArgs>>
    ): Prisma__ErrorMessageClient<$Result.GetResult<Prisma.$ErrorMessagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ErrorMessage.
     * @param {ErrorMessageUpdateArgs} args - Arguments to update one ErrorMessage.
     * @example
     * // Update one ErrorMessage
     * const errorMessage = await prisma.errorMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ErrorMessageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ErrorMessageUpdateArgs<ExtArgs>>
    ): Prisma__ErrorMessageClient<$Result.GetResult<Prisma.$ErrorMessagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ErrorMessages.
     * @param {ErrorMessageDeleteManyArgs} args - Arguments to filter ErrorMessages to delete.
     * @example
     * // Delete a few ErrorMessages
     * const { count } = await prisma.errorMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ErrorMessageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ErrorMessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ErrorMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ErrorMessages
     * const errorMessage = await prisma.errorMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ErrorMessageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ErrorMessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ErrorMessage.
     * @param {ErrorMessageUpsertArgs} args - Arguments to update or create a ErrorMessage.
     * @example
     * // Update or create a ErrorMessage
     * const errorMessage = await prisma.errorMessage.upsert({
     *   create: {
     *     // ... data to create a ErrorMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ErrorMessage we want to update
     *   }
     * })
    **/
    upsert<T extends ErrorMessageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ErrorMessageUpsertArgs<ExtArgs>>
    ): Prisma__ErrorMessageClient<$Result.GetResult<Prisma.$ErrorMessagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ErrorMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorMessageCountArgs} args - Arguments to filter ErrorMessages to count.
     * @example
     * // Count the number of ErrorMessages
     * const count = await prisma.errorMessage.count({
     *   where: {
     *     // ... the filter for the ErrorMessages we want to count
     *   }
     * })
    **/
    count<T extends ErrorMessageCountArgs>(
      args?: Subset<T, ErrorMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ErrorMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ErrorMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ErrorMessageAggregateArgs>(args: Subset<T, ErrorMessageAggregateArgs>): Prisma.PrismaPromise<GetErrorMessageAggregateType<T>>

    /**
     * Group by ErrorMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ErrorMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ErrorMessageGroupByArgs['orderBy'] }
        : { orderBy?: ErrorMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ErrorMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetErrorMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ErrorMessage model
   */
  readonly fields: ErrorMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ErrorMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ErrorMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ErrorMessage model
   */ 
  interface ErrorMessageFieldRefs {
    readonly id: FieldRef<"ErrorMessage", 'Int'>
    readonly message: FieldRef<"ErrorMessage", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ErrorMessage findUnique
   */
  export type ErrorMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorMessage
     */
    select?: ErrorMessageSelect<ExtArgs> | null
    /**
     * Filter, which ErrorMessage to fetch.
     */
    where: ErrorMessageWhereUniqueInput
  }


  /**
   * ErrorMessage findUniqueOrThrow
   */
  export type ErrorMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorMessage
     */
    select?: ErrorMessageSelect<ExtArgs> | null
    /**
     * Filter, which ErrorMessage to fetch.
     */
    where: ErrorMessageWhereUniqueInput
  }


  /**
   * ErrorMessage findFirst
   */
  export type ErrorMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorMessage
     */
    select?: ErrorMessageSelect<ExtArgs> | null
    /**
     * Filter, which ErrorMessage to fetch.
     */
    where?: ErrorMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorMessages to fetch.
     */
    orderBy?: ErrorMessageOrderByWithRelationInput | ErrorMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ErrorMessages.
     */
    cursor?: ErrorMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ErrorMessages.
     */
    distinct?: ErrorMessageScalarFieldEnum | ErrorMessageScalarFieldEnum[]
  }


  /**
   * ErrorMessage findFirstOrThrow
   */
  export type ErrorMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorMessage
     */
    select?: ErrorMessageSelect<ExtArgs> | null
    /**
     * Filter, which ErrorMessage to fetch.
     */
    where?: ErrorMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorMessages to fetch.
     */
    orderBy?: ErrorMessageOrderByWithRelationInput | ErrorMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ErrorMessages.
     */
    cursor?: ErrorMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ErrorMessages.
     */
    distinct?: ErrorMessageScalarFieldEnum | ErrorMessageScalarFieldEnum[]
  }


  /**
   * ErrorMessage findMany
   */
  export type ErrorMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorMessage
     */
    select?: ErrorMessageSelect<ExtArgs> | null
    /**
     * Filter, which ErrorMessages to fetch.
     */
    where?: ErrorMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorMessages to fetch.
     */
    orderBy?: ErrorMessageOrderByWithRelationInput | ErrorMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ErrorMessages.
     */
    cursor?: ErrorMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorMessages.
     */
    skip?: number
    distinct?: ErrorMessageScalarFieldEnum | ErrorMessageScalarFieldEnum[]
  }


  /**
   * ErrorMessage create
   */
  export type ErrorMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorMessage
     */
    select?: ErrorMessageSelect<ExtArgs> | null
    /**
     * The data needed to create a ErrorMessage.
     */
    data: XOR<ErrorMessageCreateInput, ErrorMessageUncheckedCreateInput>
  }


  /**
   * ErrorMessage createMany
   */
  export type ErrorMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ErrorMessages.
     */
    data: ErrorMessageCreateManyInput | ErrorMessageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ErrorMessage update
   */
  export type ErrorMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorMessage
     */
    select?: ErrorMessageSelect<ExtArgs> | null
    /**
     * The data needed to update a ErrorMessage.
     */
    data: XOR<ErrorMessageUpdateInput, ErrorMessageUncheckedUpdateInput>
    /**
     * Choose, which ErrorMessage to update.
     */
    where: ErrorMessageWhereUniqueInput
  }


  /**
   * ErrorMessage updateMany
   */
  export type ErrorMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ErrorMessages.
     */
    data: XOR<ErrorMessageUpdateManyMutationInput, ErrorMessageUncheckedUpdateManyInput>
    /**
     * Filter which ErrorMessages to update
     */
    where?: ErrorMessageWhereInput
  }


  /**
   * ErrorMessage upsert
   */
  export type ErrorMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorMessage
     */
    select?: ErrorMessageSelect<ExtArgs> | null
    /**
     * The filter to search for the ErrorMessage to update in case it exists.
     */
    where: ErrorMessageWhereUniqueInput
    /**
     * In case the ErrorMessage found by the `where` argument doesn't exist, create a new ErrorMessage with this data.
     */
    create: XOR<ErrorMessageCreateInput, ErrorMessageUncheckedCreateInput>
    /**
     * In case the ErrorMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ErrorMessageUpdateInput, ErrorMessageUncheckedUpdateInput>
  }


  /**
   * ErrorMessage delete
   */
  export type ErrorMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorMessage
     */
    select?: ErrorMessageSelect<ExtArgs> | null
    /**
     * Filter which ErrorMessage to delete.
     */
    where: ErrorMessageWhereUniqueInput
  }


  /**
   * ErrorMessage deleteMany
   */
  export type ErrorMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ErrorMessages to delete
     */
    where?: ErrorMessageWhereInput
  }


  /**
   * ErrorMessage without action
   */
  export type ErrorMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorMessage
     */
    select?: ErrorMessageSelect<ExtArgs> | null
  }



  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
    cityId: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
    cityId: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
    role: $Enums.Role | null
    cityId: number | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
    role: $Enums.Role | null
    cityId: number | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    role: number
    cityId: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
    cityId?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
    cityId?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    role?: true
    cityId?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    role?: true
    cityId?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    role?: true
    cityId?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    email: string
    password: string
    createdAt: Date
    role: $Enums.Role
    cityId: number | null
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    role?: boolean
    cityId?: boolean
    city?: boolean | Admin$cityArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    role?: boolean
    cityId?: boolean
  }

  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | Admin$cityArgs<ExtArgs>
  }


  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      city: Prisma.$CityPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      createdAt: Date
      role: $Enums.Role
      cityId: number | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }


  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AdminFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends AdminCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminCreateArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Admins.
     *     @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdminCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends AdminDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends AdminUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    city<T extends Admin$cityArgs<ExtArgs> = {}>(args?: Subset<T, Admin$cityArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly role: FieldRef<"Admin", 'Role'>
    readonly cityId: FieldRef<"Admin", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }


  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }


  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }


  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }


  /**
   * Admin.city
   */
  export type Admin$cityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude<ExtArgs> | null
    where?: CityWhereInput
  }


  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    logoUrl: 'logoUrl'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const PrayerScalarFieldEnum: {
    id: 'id',
    cityId: 'cityId',
    date: 'date',
    fajr: 'fajr',
    shuruk: 'shuruk',
    zuhr: 'zuhr',
    asr: 'asr',
    maghrib: 'maghrib',
    isha: 'isha'
  };

  export type PrayerScalarFieldEnum = (typeof PrayerScalarFieldEnum)[keyof typeof PrayerScalarFieldEnum]


  export const MosqueScalarFieldEnum: {
    id: 'id',
    cityId: 'cityId',
    name: 'name',
    logoUrl: 'logoUrl'
  };

  export type MosqueScalarFieldEnum = (typeof MosqueScalarFieldEnum)[keyof typeof MosqueScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    mosqueId: 'mosqueId',
    videoUrl: 'videoUrl'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const QRCodeScalarFieldEnum: {
    id: 'id',
    mosqueId: 'mosqueId',
    imageUrl: 'imageUrl'
  };

  export type QRCodeScalarFieldEnum = (typeof QRCodeScalarFieldEnum)[keyof typeof QRCodeScalarFieldEnum]


  export const ErrorMessageScalarFieldEnum: {
    id: 'id',
    message: 'message'
  };

  export type ErrorMessageScalarFieldEnum = (typeof ErrorMessageScalarFieldEnum)[keyof typeof ErrorMessageScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    role: 'role',
    cityId: 'cityId'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CityWhereInput = {
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    id?: IntFilter<"City"> | number
    name?: StringFilter<"City"> | string
    logoUrl?: StringNullableFilter<"City"> | string | null
    prayers?: PrayerListRelationFilter
    Mosque?: MosqueListRelationFilter
    admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
  }

  export type CityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    prayers?: PrayerOrderByRelationAggregateInput
    Mosque?: MosqueOrderByRelationAggregateInput
    admin?: AdminOrderByWithRelationInput
  }

  export type CityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    name?: StringFilter<"City"> | string
    logoUrl?: StringNullableFilter<"City"> | string | null
    prayers?: PrayerListRelationFilter
    Mosque?: MosqueListRelationFilter
    admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
  }, "id">

  export type CityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    _count?: CityCountOrderByAggregateInput
    _avg?: CityAvgOrderByAggregateInput
    _max?: CityMaxOrderByAggregateInput
    _min?: CityMinOrderByAggregateInput
    _sum?: CitySumOrderByAggregateInput
  }

  export type CityScalarWhereWithAggregatesInput = {
    AND?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    OR?: CityScalarWhereWithAggregatesInput[]
    NOT?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"City"> | number
    name?: StringWithAggregatesFilter<"City"> | string
    logoUrl?: StringNullableWithAggregatesFilter<"City"> | string | null
  }

  export type PrayerWhereInput = {
    AND?: PrayerWhereInput | PrayerWhereInput[]
    OR?: PrayerWhereInput[]
    NOT?: PrayerWhereInput | PrayerWhereInput[]
    id?: IntFilter<"Prayer"> | number
    cityId?: IntFilter<"Prayer"> | number
    date?: StringNullableFilter<"Prayer"> | string | null
    fajr?: StringNullableFilter<"Prayer"> | string | null
    shuruk?: StringNullableFilter<"Prayer"> | string | null
    zuhr?: StringNullableFilter<"Prayer"> | string | null
    asr?: StringNullableFilter<"Prayer"> | string | null
    maghrib?: StringNullableFilter<"Prayer"> | string | null
    isha?: StringNullableFilter<"Prayer"> | string | null
    city?: XOR<CityRelationFilter, CityWhereInput>
  }

  export type PrayerOrderByWithRelationInput = {
    id?: SortOrder
    cityId?: SortOrder
    date?: SortOrderInput | SortOrder
    fajr?: SortOrderInput | SortOrder
    shuruk?: SortOrderInput | SortOrder
    zuhr?: SortOrderInput | SortOrder
    asr?: SortOrderInput | SortOrder
    maghrib?: SortOrderInput | SortOrder
    isha?: SortOrderInput | SortOrder
    city?: CityOrderByWithRelationInput
  }

  export type PrayerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PrayerWhereInput | PrayerWhereInput[]
    OR?: PrayerWhereInput[]
    NOT?: PrayerWhereInput | PrayerWhereInput[]
    cityId?: IntFilter<"Prayer"> | number
    date?: StringNullableFilter<"Prayer"> | string | null
    fajr?: StringNullableFilter<"Prayer"> | string | null
    shuruk?: StringNullableFilter<"Prayer"> | string | null
    zuhr?: StringNullableFilter<"Prayer"> | string | null
    asr?: StringNullableFilter<"Prayer"> | string | null
    maghrib?: StringNullableFilter<"Prayer"> | string | null
    isha?: StringNullableFilter<"Prayer"> | string | null
    city?: XOR<CityRelationFilter, CityWhereInput>
  }, "id">

  export type PrayerOrderByWithAggregationInput = {
    id?: SortOrder
    cityId?: SortOrder
    date?: SortOrderInput | SortOrder
    fajr?: SortOrderInput | SortOrder
    shuruk?: SortOrderInput | SortOrder
    zuhr?: SortOrderInput | SortOrder
    asr?: SortOrderInput | SortOrder
    maghrib?: SortOrderInput | SortOrder
    isha?: SortOrderInput | SortOrder
    _count?: PrayerCountOrderByAggregateInput
    _avg?: PrayerAvgOrderByAggregateInput
    _max?: PrayerMaxOrderByAggregateInput
    _min?: PrayerMinOrderByAggregateInput
    _sum?: PrayerSumOrderByAggregateInput
  }

  export type PrayerScalarWhereWithAggregatesInput = {
    AND?: PrayerScalarWhereWithAggregatesInput | PrayerScalarWhereWithAggregatesInput[]
    OR?: PrayerScalarWhereWithAggregatesInput[]
    NOT?: PrayerScalarWhereWithAggregatesInput | PrayerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Prayer"> | number
    cityId?: IntWithAggregatesFilter<"Prayer"> | number
    date?: StringNullableWithAggregatesFilter<"Prayer"> | string | null
    fajr?: StringNullableWithAggregatesFilter<"Prayer"> | string | null
    shuruk?: StringNullableWithAggregatesFilter<"Prayer"> | string | null
    zuhr?: StringNullableWithAggregatesFilter<"Prayer"> | string | null
    asr?: StringNullableWithAggregatesFilter<"Prayer"> | string | null
    maghrib?: StringNullableWithAggregatesFilter<"Prayer"> | string | null
    isha?: StringNullableWithAggregatesFilter<"Prayer"> | string | null
  }

  export type MosqueWhereInput = {
    AND?: MosqueWhereInput | MosqueWhereInput[]
    OR?: MosqueWhereInput[]
    NOT?: MosqueWhereInput | MosqueWhereInput[]
    id?: IntFilter<"Mosque"> | number
    cityId?: IntFilter<"Mosque"> | number
    name?: StringFilter<"Mosque"> | string
    logoUrl?: StringNullableFilter<"Mosque"> | string | null
    city?: XOR<CityRelationFilter, CityWhereInput>
    media?: MediaListRelationFilter
    qrCode?: XOR<QRCodeNullableRelationFilter, QRCodeWhereInput> | null
  }

  export type MosqueOrderByWithRelationInput = {
    id?: SortOrder
    cityId?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    city?: CityOrderByWithRelationInput
    media?: MediaOrderByRelationAggregateInput
    qrCode?: QRCodeOrderByWithRelationInput
  }

  export type MosqueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MosqueWhereInput | MosqueWhereInput[]
    OR?: MosqueWhereInput[]
    NOT?: MosqueWhereInput | MosqueWhereInput[]
    cityId?: IntFilter<"Mosque"> | number
    name?: StringFilter<"Mosque"> | string
    logoUrl?: StringNullableFilter<"Mosque"> | string | null
    city?: XOR<CityRelationFilter, CityWhereInput>
    media?: MediaListRelationFilter
    qrCode?: XOR<QRCodeNullableRelationFilter, QRCodeWhereInput> | null
  }, "id">

  export type MosqueOrderByWithAggregationInput = {
    id?: SortOrder
    cityId?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    _count?: MosqueCountOrderByAggregateInput
    _avg?: MosqueAvgOrderByAggregateInput
    _max?: MosqueMaxOrderByAggregateInput
    _min?: MosqueMinOrderByAggregateInput
    _sum?: MosqueSumOrderByAggregateInput
  }

  export type MosqueScalarWhereWithAggregatesInput = {
    AND?: MosqueScalarWhereWithAggregatesInput | MosqueScalarWhereWithAggregatesInput[]
    OR?: MosqueScalarWhereWithAggregatesInput[]
    NOT?: MosqueScalarWhereWithAggregatesInput | MosqueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mosque"> | number
    cityId?: IntWithAggregatesFilter<"Mosque"> | number
    name?: StringWithAggregatesFilter<"Mosque"> | string
    logoUrl?: StringNullableWithAggregatesFilter<"Mosque"> | string | null
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: IntFilter<"Media"> | number
    mosqueId?: IntFilter<"Media"> | number
    videoUrl?: StringNullableFilter<"Media"> | string | null
    mosque?: XOR<MosqueRelationFilter, MosqueWhereInput>
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    mosque?: MosqueOrderByWithRelationInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    mosqueId?: IntFilter<"Media"> | number
    videoUrl?: StringNullableFilter<"Media"> | string | null
    mosque?: XOR<MosqueRelationFilter, MosqueWhereInput>
  }, "id">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    _count?: MediaCountOrderByAggregateInput
    _avg?: MediaAvgOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
    _sum?: MediaSumOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Media"> | number
    mosqueId?: IntWithAggregatesFilter<"Media"> | number
    videoUrl?: StringNullableWithAggregatesFilter<"Media"> | string | null
  }

  export type QRCodeWhereInput = {
    AND?: QRCodeWhereInput | QRCodeWhereInput[]
    OR?: QRCodeWhereInput[]
    NOT?: QRCodeWhereInput | QRCodeWhereInput[]
    id?: IntFilter<"QRCode"> | number
    mosqueId?: IntFilter<"QRCode"> | number
    imageUrl?: StringFilter<"QRCode"> | string
    mosque?: XOR<MosqueRelationFilter, MosqueWhereInput>
  }

  export type QRCodeOrderByWithRelationInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    imageUrl?: SortOrder
    mosque?: MosqueOrderByWithRelationInput
  }

  export type QRCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mosqueId?: number
    AND?: QRCodeWhereInput | QRCodeWhereInput[]
    OR?: QRCodeWhereInput[]
    NOT?: QRCodeWhereInput | QRCodeWhereInput[]
    imageUrl?: StringFilter<"QRCode"> | string
    mosque?: XOR<MosqueRelationFilter, MosqueWhereInput>
  }, "id" | "mosqueId">

  export type QRCodeOrderByWithAggregationInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    imageUrl?: SortOrder
    _count?: QRCodeCountOrderByAggregateInput
    _avg?: QRCodeAvgOrderByAggregateInput
    _max?: QRCodeMaxOrderByAggregateInput
    _min?: QRCodeMinOrderByAggregateInput
    _sum?: QRCodeSumOrderByAggregateInput
  }

  export type QRCodeScalarWhereWithAggregatesInput = {
    AND?: QRCodeScalarWhereWithAggregatesInput | QRCodeScalarWhereWithAggregatesInput[]
    OR?: QRCodeScalarWhereWithAggregatesInput[]
    NOT?: QRCodeScalarWhereWithAggregatesInput | QRCodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QRCode"> | number
    mosqueId?: IntWithAggregatesFilter<"QRCode"> | number
    imageUrl?: StringWithAggregatesFilter<"QRCode"> | string
  }

  export type ErrorMessageWhereInput = {
    AND?: ErrorMessageWhereInput | ErrorMessageWhereInput[]
    OR?: ErrorMessageWhereInput[]
    NOT?: ErrorMessageWhereInput | ErrorMessageWhereInput[]
    id?: IntFilter<"ErrorMessage"> | number
    message?: StringFilter<"ErrorMessage"> | string
  }

  export type ErrorMessageOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
  }

  export type ErrorMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ErrorMessageWhereInput | ErrorMessageWhereInput[]
    OR?: ErrorMessageWhereInput[]
    NOT?: ErrorMessageWhereInput | ErrorMessageWhereInput[]
    message?: StringFilter<"ErrorMessage"> | string
  }, "id">

  export type ErrorMessageOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    _count?: ErrorMessageCountOrderByAggregateInput
    _avg?: ErrorMessageAvgOrderByAggregateInput
    _max?: ErrorMessageMaxOrderByAggregateInput
    _min?: ErrorMessageMinOrderByAggregateInput
    _sum?: ErrorMessageSumOrderByAggregateInput
  }

  export type ErrorMessageScalarWhereWithAggregatesInput = {
    AND?: ErrorMessageScalarWhereWithAggregatesInput | ErrorMessageScalarWhereWithAggregatesInput[]
    OR?: ErrorMessageScalarWhereWithAggregatesInput[]
    NOT?: ErrorMessageScalarWhereWithAggregatesInput | ErrorMessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ErrorMessage"> | number
    message?: StringWithAggregatesFilter<"ErrorMessage"> | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    cityId?: IntNullableFilter<"Admin"> | number | null
    city?: XOR<CityNullableRelationFilter, CityWhereInput> | null
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    cityId?: SortOrderInput | SortOrder
    city?: CityOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cityId?: number
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    city?: XOR<CityNullableRelationFilter, CityWhereInput> | null
  }, "id" | "email" | "cityId">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    cityId?: SortOrderInput | SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"Admin"> | $Enums.Role
    cityId?: IntNullableWithAggregatesFilter<"Admin"> | number | null
  }

  export type CityCreateInput = {
    name: string
    logoUrl?: string | null
    prayers?: PrayerCreateNestedManyWithoutCityInput
    Mosque?: MosqueCreateNestedManyWithoutCityInput
    admin?: AdminCreateNestedOneWithoutCityInput
  }

  export type CityUncheckedCreateInput = {
    id?: number
    name: string
    logoUrl?: string | null
    prayers?: PrayerUncheckedCreateNestedManyWithoutCityInput
    Mosque?: MosqueUncheckedCreateNestedManyWithoutCityInput
    admin?: AdminUncheckedCreateNestedOneWithoutCityInput
  }

  export type CityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    prayers?: PrayerUpdateManyWithoutCityNestedInput
    Mosque?: MosqueUpdateManyWithoutCityNestedInput
    admin?: AdminUpdateOneWithoutCityNestedInput
  }

  export type CityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    prayers?: PrayerUncheckedUpdateManyWithoutCityNestedInput
    Mosque?: MosqueUncheckedUpdateManyWithoutCityNestedInput
    admin?: AdminUncheckedUpdateOneWithoutCityNestedInput
  }

  export type CityCreateManyInput = {
    id?: number
    name: string
    logoUrl?: string | null
  }

  export type CityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrayerCreateInput = {
    date?: string | null
    fajr?: string | null
    shuruk?: string | null
    zuhr?: string | null
    asr?: string | null
    maghrib?: string | null
    isha?: string | null
    city: CityCreateNestedOneWithoutPrayersInput
  }

  export type PrayerUncheckedCreateInput = {
    id?: number
    cityId: number
    date?: string | null
    fajr?: string | null
    shuruk?: string | null
    zuhr?: string | null
    asr?: string | null
    maghrib?: string | null
    isha?: string | null
  }

  export type PrayerUpdateInput = {
    date?: NullableStringFieldUpdateOperationsInput | string | null
    fajr?: NullableStringFieldUpdateOperationsInput | string | null
    shuruk?: NullableStringFieldUpdateOperationsInput | string | null
    zuhr?: NullableStringFieldUpdateOperationsInput | string | null
    asr?: NullableStringFieldUpdateOperationsInput | string | null
    maghrib?: NullableStringFieldUpdateOperationsInput | string | null
    isha?: NullableStringFieldUpdateOperationsInput | string | null
    city?: CityUpdateOneRequiredWithoutPrayersNestedInput
  }

  export type PrayerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
    fajr?: NullableStringFieldUpdateOperationsInput | string | null
    shuruk?: NullableStringFieldUpdateOperationsInput | string | null
    zuhr?: NullableStringFieldUpdateOperationsInput | string | null
    asr?: NullableStringFieldUpdateOperationsInput | string | null
    maghrib?: NullableStringFieldUpdateOperationsInput | string | null
    isha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrayerCreateManyInput = {
    id?: number
    cityId: number
    date?: string | null
    fajr?: string | null
    shuruk?: string | null
    zuhr?: string | null
    asr?: string | null
    maghrib?: string | null
    isha?: string | null
  }

  export type PrayerUpdateManyMutationInput = {
    date?: NullableStringFieldUpdateOperationsInput | string | null
    fajr?: NullableStringFieldUpdateOperationsInput | string | null
    shuruk?: NullableStringFieldUpdateOperationsInput | string | null
    zuhr?: NullableStringFieldUpdateOperationsInput | string | null
    asr?: NullableStringFieldUpdateOperationsInput | string | null
    maghrib?: NullableStringFieldUpdateOperationsInput | string | null
    isha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrayerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
    fajr?: NullableStringFieldUpdateOperationsInput | string | null
    shuruk?: NullableStringFieldUpdateOperationsInput | string | null
    zuhr?: NullableStringFieldUpdateOperationsInput | string | null
    asr?: NullableStringFieldUpdateOperationsInput | string | null
    maghrib?: NullableStringFieldUpdateOperationsInput | string | null
    isha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MosqueCreateInput = {
    name: string
    logoUrl?: string | null
    city: CityCreateNestedOneWithoutMosqueInput
    media?: MediaCreateNestedManyWithoutMosqueInput
    qrCode?: QRCodeCreateNestedOneWithoutMosqueInput
  }

  export type MosqueUncheckedCreateInput = {
    id?: number
    cityId: number
    name: string
    logoUrl?: string | null
    media?: MediaUncheckedCreateNestedManyWithoutMosqueInput
    qrCode?: QRCodeUncheckedCreateNestedOneWithoutMosqueInput
  }

  export type MosqueUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    city?: CityUpdateOneRequiredWithoutMosqueNestedInput
    media?: MediaUpdateManyWithoutMosqueNestedInput
    qrCode?: QRCodeUpdateOneWithoutMosqueNestedInput
  }

  export type MosqueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    media?: MediaUncheckedUpdateManyWithoutMosqueNestedInput
    qrCode?: QRCodeUncheckedUpdateOneWithoutMosqueNestedInput
  }

  export type MosqueCreateManyInput = {
    id?: number
    cityId: number
    name: string
    logoUrl?: string | null
  }

  export type MosqueUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MosqueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaCreateInput = {
    videoUrl?: string | null
    mosque: MosqueCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id?: number
    mosqueId: number
    videoUrl?: string | null
  }

  export type MediaUpdateInput = {
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mosque?: MosqueUpdateOneRequiredWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mosqueId?: IntFieldUpdateOperationsInput | number
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaCreateManyInput = {
    id?: number
    mosqueId: number
    videoUrl?: string | null
  }

  export type MediaUpdateManyMutationInput = {
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mosqueId?: IntFieldUpdateOperationsInput | number
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QRCodeCreateInput = {
    imageUrl: string
    mosque: MosqueCreateNestedOneWithoutQrCodeInput
  }

  export type QRCodeUncheckedCreateInput = {
    id?: number
    mosqueId: number
    imageUrl: string
  }

  export type QRCodeUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    mosque?: MosqueUpdateOneRequiredWithoutQrCodeNestedInput
  }

  export type QRCodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mosqueId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type QRCodeCreateManyInput = {
    id?: number
    mosqueId: number
    imageUrl: string
  }

  export type QRCodeUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type QRCodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mosqueId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ErrorMessageCreateInput = {
    message: string
  }

  export type ErrorMessageUncheckedCreateInput = {
    id?: number
    message: string
  }

  export type ErrorMessageUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ErrorMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ErrorMessageCreateManyInput = {
    id?: number
    message: string
  }

  export type ErrorMessageUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ErrorMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateInput = {
    email: string
    password: string
    createdAt?: Date | string
    role: $Enums.Role
    city?: CityCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    role: $Enums.Role
    cityId?: number | null
  }

  export type AdminUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: CityUpdateOneWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AdminCreateManyInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    role: $Enums.Role
    cityId?: number | null
  }

  export type AdminUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PrayerListRelationFilter = {
    every?: PrayerWhereInput
    some?: PrayerWhereInput
    none?: PrayerWhereInput
  }

  export type MosqueListRelationFilter = {
    every?: MosqueWhereInput
    some?: MosqueWhereInput
    none?: MosqueWhereInput
  }

  export type AdminNullableRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PrayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MosqueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrder
  }

  export type CityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrder
  }

  export type CityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrder
  }

  export type CitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CityRelationFilter = {
    is?: CityWhereInput
    isNot?: CityWhereInput
  }

  export type PrayerCountOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    date?: SortOrder
    fajr?: SortOrder
    shuruk?: SortOrder
    zuhr?: SortOrder
    asr?: SortOrder
    maghrib?: SortOrder
    isha?: SortOrder
  }

  export type PrayerAvgOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
  }

  export type PrayerMaxOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    date?: SortOrder
    fajr?: SortOrder
    shuruk?: SortOrder
    zuhr?: SortOrder
    asr?: SortOrder
    maghrib?: SortOrder
    isha?: SortOrder
  }

  export type PrayerMinOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    date?: SortOrder
    fajr?: SortOrder
    shuruk?: SortOrder
    zuhr?: SortOrder
    asr?: SortOrder
    maghrib?: SortOrder
    isha?: SortOrder
  }

  export type PrayerSumOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
  }

  export type MediaListRelationFilter = {
    every?: MediaWhereInput
    some?: MediaWhereInput
    none?: MediaWhereInput
  }

  export type QRCodeNullableRelationFilter = {
    is?: QRCodeWhereInput | null
    isNot?: QRCodeWhereInput | null
  }

  export type MediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MosqueCountOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrder
  }

  export type MosqueAvgOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
  }

  export type MosqueMaxOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrder
  }

  export type MosqueMinOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrder
  }

  export type MosqueSumOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
  }

  export type MosqueRelationFilter = {
    is?: MosqueWhereInput
    isNot?: MosqueWhereInput
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    videoUrl?: SortOrder
  }

  export type MediaAvgOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    videoUrl?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    videoUrl?: SortOrder
  }

  export type MediaSumOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
  }

  export type QRCodeCountOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    imageUrl?: SortOrder
  }

  export type QRCodeAvgOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
  }

  export type QRCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    imageUrl?: SortOrder
  }

  export type QRCodeMinOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    imageUrl?: SortOrder
  }

  export type QRCodeSumOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
  }

  export type ErrorMessageCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
  }

  export type ErrorMessageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ErrorMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
  }

  export type ErrorMessageMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
  }

  export type ErrorMessageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CityNullableRelationFilter = {
    is?: CityWhereInput | null
    isNot?: CityWhereInput | null
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    cityId?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    cityId?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    cityId?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PrayerCreateNestedManyWithoutCityInput = {
    create?: XOR<PrayerCreateWithoutCityInput, PrayerUncheckedCreateWithoutCityInput> | PrayerCreateWithoutCityInput[] | PrayerUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PrayerCreateOrConnectWithoutCityInput | PrayerCreateOrConnectWithoutCityInput[]
    createMany?: PrayerCreateManyCityInputEnvelope
    connect?: PrayerWhereUniqueInput | PrayerWhereUniqueInput[]
  }

  export type MosqueCreateNestedManyWithoutCityInput = {
    create?: XOR<MosqueCreateWithoutCityInput, MosqueUncheckedCreateWithoutCityInput> | MosqueCreateWithoutCityInput[] | MosqueUncheckedCreateWithoutCityInput[]
    connectOrCreate?: MosqueCreateOrConnectWithoutCityInput | MosqueCreateOrConnectWithoutCityInput[]
    createMany?: MosqueCreateManyCityInputEnvelope
    connect?: MosqueWhereUniqueInput | MosqueWhereUniqueInput[]
  }

  export type AdminCreateNestedOneWithoutCityInput = {
    create?: XOR<AdminCreateWithoutCityInput, AdminUncheckedCreateWithoutCityInput>
    connectOrCreate?: AdminCreateOrConnectWithoutCityInput
    connect?: AdminWhereUniqueInput
  }

  export type PrayerUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<PrayerCreateWithoutCityInput, PrayerUncheckedCreateWithoutCityInput> | PrayerCreateWithoutCityInput[] | PrayerUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PrayerCreateOrConnectWithoutCityInput | PrayerCreateOrConnectWithoutCityInput[]
    createMany?: PrayerCreateManyCityInputEnvelope
    connect?: PrayerWhereUniqueInput | PrayerWhereUniqueInput[]
  }

  export type MosqueUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<MosqueCreateWithoutCityInput, MosqueUncheckedCreateWithoutCityInput> | MosqueCreateWithoutCityInput[] | MosqueUncheckedCreateWithoutCityInput[]
    connectOrCreate?: MosqueCreateOrConnectWithoutCityInput | MosqueCreateOrConnectWithoutCityInput[]
    createMany?: MosqueCreateManyCityInputEnvelope
    connect?: MosqueWhereUniqueInput | MosqueWhereUniqueInput[]
  }

  export type AdminUncheckedCreateNestedOneWithoutCityInput = {
    create?: XOR<AdminCreateWithoutCityInput, AdminUncheckedCreateWithoutCityInput>
    connectOrCreate?: AdminCreateOrConnectWithoutCityInput
    connect?: AdminWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PrayerUpdateManyWithoutCityNestedInput = {
    create?: XOR<PrayerCreateWithoutCityInput, PrayerUncheckedCreateWithoutCityInput> | PrayerCreateWithoutCityInput[] | PrayerUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PrayerCreateOrConnectWithoutCityInput | PrayerCreateOrConnectWithoutCityInput[]
    upsert?: PrayerUpsertWithWhereUniqueWithoutCityInput | PrayerUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: PrayerCreateManyCityInputEnvelope
    set?: PrayerWhereUniqueInput | PrayerWhereUniqueInput[]
    disconnect?: PrayerWhereUniqueInput | PrayerWhereUniqueInput[]
    delete?: PrayerWhereUniqueInput | PrayerWhereUniqueInput[]
    connect?: PrayerWhereUniqueInput | PrayerWhereUniqueInput[]
    update?: PrayerUpdateWithWhereUniqueWithoutCityInput | PrayerUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: PrayerUpdateManyWithWhereWithoutCityInput | PrayerUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: PrayerScalarWhereInput | PrayerScalarWhereInput[]
  }

  export type MosqueUpdateManyWithoutCityNestedInput = {
    create?: XOR<MosqueCreateWithoutCityInput, MosqueUncheckedCreateWithoutCityInput> | MosqueCreateWithoutCityInput[] | MosqueUncheckedCreateWithoutCityInput[]
    connectOrCreate?: MosqueCreateOrConnectWithoutCityInput | MosqueCreateOrConnectWithoutCityInput[]
    upsert?: MosqueUpsertWithWhereUniqueWithoutCityInput | MosqueUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: MosqueCreateManyCityInputEnvelope
    set?: MosqueWhereUniqueInput | MosqueWhereUniqueInput[]
    disconnect?: MosqueWhereUniqueInput | MosqueWhereUniqueInput[]
    delete?: MosqueWhereUniqueInput | MosqueWhereUniqueInput[]
    connect?: MosqueWhereUniqueInput | MosqueWhereUniqueInput[]
    update?: MosqueUpdateWithWhereUniqueWithoutCityInput | MosqueUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: MosqueUpdateManyWithWhereWithoutCityInput | MosqueUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: MosqueScalarWhereInput | MosqueScalarWhereInput[]
  }

  export type AdminUpdateOneWithoutCityNestedInput = {
    create?: XOR<AdminCreateWithoutCityInput, AdminUncheckedCreateWithoutCityInput>
    connectOrCreate?: AdminCreateOrConnectWithoutCityInput
    upsert?: AdminUpsertWithoutCityInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutCityInput, AdminUpdateWithoutCityInput>, AdminUncheckedUpdateWithoutCityInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PrayerUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<PrayerCreateWithoutCityInput, PrayerUncheckedCreateWithoutCityInput> | PrayerCreateWithoutCityInput[] | PrayerUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PrayerCreateOrConnectWithoutCityInput | PrayerCreateOrConnectWithoutCityInput[]
    upsert?: PrayerUpsertWithWhereUniqueWithoutCityInput | PrayerUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: PrayerCreateManyCityInputEnvelope
    set?: PrayerWhereUniqueInput | PrayerWhereUniqueInput[]
    disconnect?: PrayerWhereUniqueInput | PrayerWhereUniqueInput[]
    delete?: PrayerWhereUniqueInput | PrayerWhereUniqueInput[]
    connect?: PrayerWhereUniqueInput | PrayerWhereUniqueInput[]
    update?: PrayerUpdateWithWhereUniqueWithoutCityInput | PrayerUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: PrayerUpdateManyWithWhereWithoutCityInput | PrayerUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: PrayerScalarWhereInput | PrayerScalarWhereInput[]
  }

  export type MosqueUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<MosqueCreateWithoutCityInput, MosqueUncheckedCreateWithoutCityInput> | MosqueCreateWithoutCityInput[] | MosqueUncheckedCreateWithoutCityInput[]
    connectOrCreate?: MosqueCreateOrConnectWithoutCityInput | MosqueCreateOrConnectWithoutCityInput[]
    upsert?: MosqueUpsertWithWhereUniqueWithoutCityInput | MosqueUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: MosqueCreateManyCityInputEnvelope
    set?: MosqueWhereUniqueInput | MosqueWhereUniqueInput[]
    disconnect?: MosqueWhereUniqueInput | MosqueWhereUniqueInput[]
    delete?: MosqueWhereUniqueInput | MosqueWhereUniqueInput[]
    connect?: MosqueWhereUniqueInput | MosqueWhereUniqueInput[]
    update?: MosqueUpdateWithWhereUniqueWithoutCityInput | MosqueUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: MosqueUpdateManyWithWhereWithoutCityInput | MosqueUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: MosqueScalarWhereInput | MosqueScalarWhereInput[]
  }

  export type AdminUncheckedUpdateOneWithoutCityNestedInput = {
    create?: XOR<AdminCreateWithoutCityInput, AdminUncheckedCreateWithoutCityInput>
    connectOrCreate?: AdminCreateOrConnectWithoutCityInput
    upsert?: AdminUpsertWithoutCityInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutCityInput, AdminUpdateWithoutCityInput>, AdminUncheckedUpdateWithoutCityInput>
  }

  export type CityCreateNestedOneWithoutPrayersInput = {
    create?: XOR<CityCreateWithoutPrayersInput, CityUncheckedCreateWithoutPrayersInput>
    connectOrCreate?: CityCreateOrConnectWithoutPrayersInput
    connect?: CityWhereUniqueInput
  }

  export type CityUpdateOneRequiredWithoutPrayersNestedInput = {
    create?: XOR<CityCreateWithoutPrayersInput, CityUncheckedCreateWithoutPrayersInput>
    connectOrCreate?: CityCreateOrConnectWithoutPrayersInput
    upsert?: CityUpsertWithoutPrayersInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutPrayersInput, CityUpdateWithoutPrayersInput>, CityUncheckedUpdateWithoutPrayersInput>
  }

  export type CityCreateNestedOneWithoutMosqueInput = {
    create?: XOR<CityCreateWithoutMosqueInput, CityUncheckedCreateWithoutMosqueInput>
    connectOrCreate?: CityCreateOrConnectWithoutMosqueInput
    connect?: CityWhereUniqueInput
  }

  export type MediaCreateNestedManyWithoutMosqueInput = {
    create?: XOR<MediaCreateWithoutMosqueInput, MediaUncheckedCreateWithoutMosqueInput> | MediaCreateWithoutMosqueInput[] | MediaUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutMosqueInput | MediaCreateOrConnectWithoutMosqueInput[]
    createMany?: MediaCreateManyMosqueInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type QRCodeCreateNestedOneWithoutMosqueInput = {
    create?: XOR<QRCodeCreateWithoutMosqueInput, QRCodeUncheckedCreateWithoutMosqueInput>
    connectOrCreate?: QRCodeCreateOrConnectWithoutMosqueInput
    connect?: QRCodeWhereUniqueInput
  }

  export type MediaUncheckedCreateNestedManyWithoutMosqueInput = {
    create?: XOR<MediaCreateWithoutMosqueInput, MediaUncheckedCreateWithoutMosqueInput> | MediaCreateWithoutMosqueInput[] | MediaUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutMosqueInput | MediaCreateOrConnectWithoutMosqueInput[]
    createMany?: MediaCreateManyMosqueInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type QRCodeUncheckedCreateNestedOneWithoutMosqueInput = {
    create?: XOR<QRCodeCreateWithoutMosqueInput, QRCodeUncheckedCreateWithoutMosqueInput>
    connectOrCreate?: QRCodeCreateOrConnectWithoutMosqueInput
    connect?: QRCodeWhereUniqueInput
  }

  export type CityUpdateOneRequiredWithoutMosqueNestedInput = {
    create?: XOR<CityCreateWithoutMosqueInput, CityUncheckedCreateWithoutMosqueInput>
    connectOrCreate?: CityCreateOrConnectWithoutMosqueInput
    upsert?: CityUpsertWithoutMosqueInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutMosqueInput, CityUpdateWithoutMosqueInput>, CityUncheckedUpdateWithoutMosqueInput>
  }

  export type MediaUpdateManyWithoutMosqueNestedInput = {
    create?: XOR<MediaCreateWithoutMosqueInput, MediaUncheckedCreateWithoutMosqueInput> | MediaCreateWithoutMosqueInput[] | MediaUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutMosqueInput | MediaCreateOrConnectWithoutMosqueInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutMosqueInput | MediaUpsertWithWhereUniqueWithoutMosqueInput[]
    createMany?: MediaCreateManyMosqueInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutMosqueInput | MediaUpdateWithWhereUniqueWithoutMosqueInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutMosqueInput | MediaUpdateManyWithWhereWithoutMosqueInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type QRCodeUpdateOneWithoutMosqueNestedInput = {
    create?: XOR<QRCodeCreateWithoutMosqueInput, QRCodeUncheckedCreateWithoutMosqueInput>
    connectOrCreate?: QRCodeCreateOrConnectWithoutMosqueInput
    upsert?: QRCodeUpsertWithoutMosqueInput
    disconnect?: QRCodeWhereInput | boolean
    delete?: QRCodeWhereInput | boolean
    connect?: QRCodeWhereUniqueInput
    update?: XOR<XOR<QRCodeUpdateToOneWithWhereWithoutMosqueInput, QRCodeUpdateWithoutMosqueInput>, QRCodeUncheckedUpdateWithoutMosqueInput>
  }

  export type MediaUncheckedUpdateManyWithoutMosqueNestedInput = {
    create?: XOR<MediaCreateWithoutMosqueInput, MediaUncheckedCreateWithoutMosqueInput> | MediaCreateWithoutMosqueInput[] | MediaUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutMosqueInput | MediaCreateOrConnectWithoutMosqueInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutMosqueInput | MediaUpsertWithWhereUniqueWithoutMosqueInput[]
    createMany?: MediaCreateManyMosqueInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutMosqueInput | MediaUpdateWithWhereUniqueWithoutMosqueInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutMosqueInput | MediaUpdateManyWithWhereWithoutMosqueInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type QRCodeUncheckedUpdateOneWithoutMosqueNestedInput = {
    create?: XOR<QRCodeCreateWithoutMosqueInput, QRCodeUncheckedCreateWithoutMosqueInput>
    connectOrCreate?: QRCodeCreateOrConnectWithoutMosqueInput
    upsert?: QRCodeUpsertWithoutMosqueInput
    disconnect?: QRCodeWhereInput | boolean
    delete?: QRCodeWhereInput | boolean
    connect?: QRCodeWhereUniqueInput
    update?: XOR<XOR<QRCodeUpdateToOneWithWhereWithoutMosqueInput, QRCodeUpdateWithoutMosqueInput>, QRCodeUncheckedUpdateWithoutMosqueInput>
  }

  export type MosqueCreateNestedOneWithoutMediaInput = {
    create?: XOR<MosqueCreateWithoutMediaInput, MosqueUncheckedCreateWithoutMediaInput>
    connectOrCreate?: MosqueCreateOrConnectWithoutMediaInput
    connect?: MosqueWhereUniqueInput
  }

  export type MosqueUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<MosqueCreateWithoutMediaInput, MosqueUncheckedCreateWithoutMediaInput>
    connectOrCreate?: MosqueCreateOrConnectWithoutMediaInput
    upsert?: MosqueUpsertWithoutMediaInput
    connect?: MosqueWhereUniqueInput
    update?: XOR<XOR<MosqueUpdateToOneWithWhereWithoutMediaInput, MosqueUpdateWithoutMediaInput>, MosqueUncheckedUpdateWithoutMediaInput>
  }

  export type MosqueCreateNestedOneWithoutQrCodeInput = {
    create?: XOR<MosqueCreateWithoutQrCodeInput, MosqueUncheckedCreateWithoutQrCodeInput>
    connectOrCreate?: MosqueCreateOrConnectWithoutQrCodeInput
    connect?: MosqueWhereUniqueInput
  }

  export type MosqueUpdateOneRequiredWithoutQrCodeNestedInput = {
    create?: XOR<MosqueCreateWithoutQrCodeInput, MosqueUncheckedCreateWithoutQrCodeInput>
    connectOrCreate?: MosqueCreateOrConnectWithoutQrCodeInput
    upsert?: MosqueUpsertWithoutQrCodeInput
    connect?: MosqueWhereUniqueInput
    update?: XOR<XOR<MosqueUpdateToOneWithWhereWithoutQrCodeInput, MosqueUpdateWithoutQrCodeInput>, MosqueUncheckedUpdateWithoutQrCodeInput>
  }

  export type CityCreateNestedOneWithoutAdminInput = {
    create?: XOR<CityCreateWithoutAdminInput, CityUncheckedCreateWithoutAdminInput>
    connectOrCreate?: CityCreateOrConnectWithoutAdminInput
    connect?: CityWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type CityUpdateOneWithoutAdminNestedInput = {
    create?: XOR<CityCreateWithoutAdminInput, CityUncheckedCreateWithoutAdminInput>
    connectOrCreate?: CityCreateOrConnectWithoutAdminInput
    upsert?: CityUpsertWithoutAdminInput
    disconnect?: CityWhereInput | boolean
    delete?: CityWhereInput | boolean
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutAdminInput, CityUpdateWithoutAdminInput>, CityUncheckedUpdateWithoutAdminInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PrayerCreateWithoutCityInput = {
    date?: string | null
    fajr?: string | null
    shuruk?: string | null
    zuhr?: string | null
    asr?: string | null
    maghrib?: string | null
    isha?: string | null
  }

  export type PrayerUncheckedCreateWithoutCityInput = {
    id?: number
    date?: string | null
    fajr?: string | null
    shuruk?: string | null
    zuhr?: string | null
    asr?: string | null
    maghrib?: string | null
    isha?: string | null
  }

  export type PrayerCreateOrConnectWithoutCityInput = {
    where: PrayerWhereUniqueInput
    create: XOR<PrayerCreateWithoutCityInput, PrayerUncheckedCreateWithoutCityInput>
  }

  export type PrayerCreateManyCityInputEnvelope = {
    data: PrayerCreateManyCityInput | PrayerCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type MosqueCreateWithoutCityInput = {
    name: string
    logoUrl?: string | null
    media?: MediaCreateNestedManyWithoutMosqueInput
    qrCode?: QRCodeCreateNestedOneWithoutMosqueInput
  }

  export type MosqueUncheckedCreateWithoutCityInput = {
    id?: number
    name: string
    logoUrl?: string | null
    media?: MediaUncheckedCreateNestedManyWithoutMosqueInput
    qrCode?: QRCodeUncheckedCreateNestedOneWithoutMosqueInput
  }

  export type MosqueCreateOrConnectWithoutCityInput = {
    where: MosqueWhereUniqueInput
    create: XOR<MosqueCreateWithoutCityInput, MosqueUncheckedCreateWithoutCityInput>
  }

  export type MosqueCreateManyCityInputEnvelope = {
    data: MosqueCreateManyCityInput | MosqueCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type AdminCreateWithoutCityInput = {
    email: string
    password: string
    createdAt?: Date | string
    role: $Enums.Role
  }

  export type AdminUncheckedCreateWithoutCityInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    role: $Enums.Role
  }

  export type AdminCreateOrConnectWithoutCityInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutCityInput, AdminUncheckedCreateWithoutCityInput>
  }

  export type PrayerUpsertWithWhereUniqueWithoutCityInput = {
    where: PrayerWhereUniqueInput
    update: XOR<PrayerUpdateWithoutCityInput, PrayerUncheckedUpdateWithoutCityInput>
    create: XOR<PrayerCreateWithoutCityInput, PrayerUncheckedCreateWithoutCityInput>
  }

  export type PrayerUpdateWithWhereUniqueWithoutCityInput = {
    where: PrayerWhereUniqueInput
    data: XOR<PrayerUpdateWithoutCityInput, PrayerUncheckedUpdateWithoutCityInput>
  }

  export type PrayerUpdateManyWithWhereWithoutCityInput = {
    where: PrayerScalarWhereInput
    data: XOR<PrayerUpdateManyMutationInput, PrayerUncheckedUpdateManyWithoutCityInput>
  }

  export type PrayerScalarWhereInput = {
    AND?: PrayerScalarWhereInput | PrayerScalarWhereInput[]
    OR?: PrayerScalarWhereInput[]
    NOT?: PrayerScalarWhereInput | PrayerScalarWhereInput[]
    id?: IntFilter<"Prayer"> | number
    cityId?: IntFilter<"Prayer"> | number
    date?: StringNullableFilter<"Prayer"> | string | null
    fajr?: StringNullableFilter<"Prayer"> | string | null
    shuruk?: StringNullableFilter<"Prayer"> | string | null
    zuhr?: StringNullableFilter<"Prayer"> | string | null
    asr?: StringNullableFilter<"Prayer"> | string | null
    maghrib?: StringNullableFilter<"Prayer"> | string | null
    isha?: StringNullableFilter<"Prayer"> | string | null
  }

  export type MosqueUpsertWithWhereUniqueWithoutCityInput = {
    where: MosqueWhereUniqueInput
    update: XOR<MosqueUpdateWithoutCityInput, MosqueUncheckedUpdateWithoutCityInput>
    create: XOR<MosqueCreateWithoutCityInput, MosqueUncheckedCreateWithoutCityInput>
  }

  export type MosqueUpdateWithWhereUniqueWithoutCityInput = {
    where: MosqueWhereUniqueInput
    data: XOR<MosqueUpdateWithoutCityInput, MosqueUncheckedUpdateWithoutCityInput>
  }

  export type MosqueUpdateManyWithWhereWithoutCityInput = {
    where: MosqueScalarWhereInput
    data: XOR<MosqueUpdateManyMutationInput, MosqueUncheckedUpdateManyWithoutCityInput>
  }

  export type MosqueScalarWhereInput = {
    AND?: MosqueScalarWhereInput | MosqueScalarWhereInput[]
    OR?: MosqueScalarWhereInput[]
    NOT?: MosqueScalarWhereInput | MosqueScalarWhereInput[]
    id?: IntFilter<"Mosque"> | number
    cityId?: IntFilter<"Mosque"> | number
    name?: StringFilter<"Mosque"> | string
    logoUrl?: StringNullableFilter<"Mosque"> | string | null
  }

  export type AdminUpsertWithoutCityInput = {
    update: XOR<AdminUpdateWithoutCityInput, AdminUncheckedUpdateWithoutCityInput>
    create: XOR<AdminCreateWithoutCityInput, AdminUncheckedCreateWithoutCityInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutCityInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutCityInput, AdminUncheckedUpdateWithoutCityInput>
  }

  export type AdminUpdateWithoutCityInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type AdminUncheckedUpdateWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type CityCreateWithoutPrayersInput = {
    name: string
    logoUrl?: string | null
    Mosque?: MosqueCreateNestedManyWithoutCityInput
    admin?: AdminCreateNestedOneWithoutCityInput
  }

  export type CityUncheckedCreateWithoutPrayersInput = {
    id?: number
    name: string
    logoUrl?: string | null
    Mosque?: MosqueUncheckedCreateNestedManyWithoutCityInput
    admin?: AdminUncheckedCreateNestedOneWithoutCityInput
  }

  export type CityCreateOrConnectWithoutPrayersInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutPrayersInput, CityUncheckedCreateWithoutPrayersInput>
  }

  export type CityUpsertWithoutPrayersInput = {
    update: XOR<CityUpdateWithoutPrayersInput, CityUncheckedUpdateWithoutPrayersInput>
    create: XOR<CityCreateWithoutPrayersInput, CityUncheckedCreateWithoutPrayersInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutPrayersInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutPrayersInput, CityUncheckedUpdateWithoutPrayersInput>
  }

  export type CityUpdateWithoutPrayersInput = {
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Mosque?: MosqueUpdateManyWithoutCityNestedInput
    admin?: AdminUpdateOneWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutPrayersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Mosque?: MosqueUncheckedUpdateManyWithoutCityNestedInput
    admin?: AdminUncheckedUpdateOneWithoutCityNestedInput
  }

  export type CityCreateWithoutMosqueInput = {
    name: string
    logoUrl?: string | null
    prayers?: PrayerCreateNestedManyWithoutCityInput
    admin?: AdminCreateNestedOneWithoutCityInput
  }

  export type CityUncheckedCreateWithoutMosqueInput = {
    id?: number
    name: string
    logoUrl?: string | null
    prayers?: PrayerUncheckedCreateNestedManyWithoutCityInput
    admin?: AdminUncheckedCreateNestedOneWithoutCityInput
  }

  export type CityCreateOrConnectWithoutMosqueInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutMosqueInput, CityUncheckedCreateWithoutMosqueInput>
  }

  export type MediaCreateWithoutMosqueInput = {
    videoUrl?: string | null
  }

  export type MediaUncheckedCreateWithoutMosqueInput = {
    id?: number
    videoUrl?: string | null
  }

  export type MediaCreateOrConnectWithoutMosqueInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutMosqueInput, MediaUncheckedCreateWithoutMosqueInput>
  }

  export type MediaCreateManyMosqueInputEnvelope = {
    data: MediaCreateManyMosqueInput | MediaCreateManyMosqueInput[]
    skipDuplicates?: boolean
  }

  export type QRCodeCreateWithoutMosqueInput = {
    imageUrl: string
  }

  export type QRCodeUncheckedCreateWithoutMosqueInput = {
    id?: number
    imageUrl: string
  }

  export type QRCodeCreateOrConnectWithoutMosqueInput = {
    where: QRCodeWhereUniqueInput
    create: XOR<QRCodeCreateWithoutMosqueInput, QRCodeUncheckedCreateWithoutMosqueInput>
  }

  export type CityUpsertWithoutMosqueInput = {
    update: XOR<CityUpdateWithoutMosqueInput, CityUncheckedUpdateWithoutMosqueInput>
    create: XOR<CityCreateWithoutMosqueInput, CityUncheckedCreateWithoutMosqueInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutMosqueInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutMosqueInput, CityUncheckedUpdateWithoutMosqueInput>
  }

  export type CityUpdateWithoutMosqueInput = {
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    prayers?: PrayerUpdateManyWithoutCityNestedInput
    admin?: AdminUpdateOneWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutMosqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    prayers?: PrayerUncheckedUpdateManyWithoutCityNestedInput
    admin?: AdminUncheckedUpdateOneWithoutCityNestedInput
  }

  export type MediaUpsertWithWhereUniqueWithoutMosqueInput = {
    where: MediaWhereUniqueInput
    update: XOR<MediaUpdateWithoutMosqueInput, MediaUncheckedUpdateWithoutMosqueInput>
    create: XOR<MediaCreateWithoutMosqueInput, MediaUncheckedCreateWithoutMosqueInput>
  }

  export type MediaUpdateWithWhereUniqueWithoutMosqueInput = {
    where: MediaWhereUniqueInput
    data: XOR<MediaUpdateWithoutMosqueInput, MediaUncheckedUpdateWithoutMosqueInput>
  }

  export type MediaUpdateManyWithWhereWithoutMosqueInput = {
    where: MediaScalarWhereInput
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyWithoutMosqueInput>
  }

  export type MediaScalarWhereInput = {
    AND?: MediaScalarWhereInput | MediaScalarWhereInput[]
    OR?: MediaScalarWhereInput[]
    NOT?: MediaScalarWhereInput | MediaScalarWhereInput[]
    id?: IntFilter<"Media"> | number
    mosqueId?: IntFilter<"Media"> | number
    videoUrl?: StringNullableFilter<"Media"> | string | null
  }

  export type QRCodeUpsertWithoutMosqueInput = {
    update: XOR<QRCodeUpdateWithoutMosqueInput, QRCodeUncheckedUpdateWithoutMosqueInput>
    create: XOR<QRCodeCreateWithoutMosqueInput, QRCodeUncheckedCreateWithoutMosqueInput>
    where?: QRCodeWhereInput
  }

  export type QRCodeUpdateToOneWithWhereWithoutMosqueInput = {
    where?: QRCodeWhereInput
    data: XOR<QRCodeUpdateWithoutMosqueInput, QRCodeUncheckedUpdateWithoutMosqueInput>
  }

  export type QRCodeUpdateWithoutMosqueInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type QRCodeUncheckedUpdateWithoutMosqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type MosqueCreateWithoutMediaInput = {
    name: string
    logoUrl?: string | null
    city: CityCreateNestedOneWithoutMosqueInput
    qrCode?: QRCodeCreateNestedOneWithoutMosqueInput
  }

  export type MosqueUncheckedCreateWithoutMediaInput = {
    id?: number
    cityId: number
    name: string
    logoUrl?: string | null
    qrCode?: QRCodeUncheckedCreateNestedOneWithoutMosqueInput
  }

  export type MosqueCreateOrConnectWithoutMediaInput = {
    where: MosqueWhereUniqueInput
    create: XOR<MosqueCreateWithoutMediaInput, MosqueUncheckedCreateWithoutMediaInput>
  }

  export type MosqueUpsertWithoutMediaInput = {
    update: XOR<MosqueUpdateWithoutMediaInput, MosqueUncheckedUpdateWithoutMediaInput>
    create: XOR<MosqueCreateWithoutMediaInput, MosqueUncheckedCreateWithoutMediaInput>
    where?: MosqueWhereInput
  }

  export type MosqueUpdateToOneWithWhereWithoutMediaInput = {
    where?: MosqueWhereInput
    data: XOR<MosqueUpdateWithoutMediaInput, MosqueUncheckedUpdateWithoutMediaInput>
  }

  export type MosqueUpdateWithoutMediaInput = {
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    city?: CityUpdateOneRequiredWithoutMosqueNestedInput
    qrCode?: QRCodeUpdateOneWithoutMosqueNestedInput
  }

  export type MosqueUncheckedUpdateWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: QRCodeUncheckedUpdateOneWithoutMosqueNestedInput
  }

  export type MosqueCreateWithoutQrCodeInput = {
    name: string
    logoUrl?: string | null
    city: CityCreateNestedOneWithoutMosqueInput
    media?: MediaCreateNestedManyWithoutMosqueInput
  }

  export type MosqueUncheckedCreateWithoutQrCodeInput = {
    id?: number
    cityId: number
    name: string
    logoUrl?: string | null
    media?: MediaUncheckedCreateNestedManyWithoutMosqueInput
  }

  export type MosqueCreateOrConnectWithoutQrCodeInput = {
    where: MosqueWhereUniqueInput
    create: XOR<MosqueCreateWithoutQrCodeInput, MosqueUncheckedCreateWithoutQrCodeInput>
  }

  export type MosqueUpsertWithoutQrCodeInput = {
    update: XOR<MosqueUpdateWithoutQrCodeInput, MosqueUncheckedUpdateWithoutQrCodeInput>
    create: XOR<MosqueCreateWithoutQrCodeInput, MosqueUncheckedCreateWithoutQrCodeInput>
    where?: MosqueWhereInput
  }

  export type MosqueUpdateToOneWithWhereWithoutQrCodeInput = {
    where?: MosqueWhereInput
    data: XOR<MosqueUpdateWithoutQrCodeInput, MosqueUncheckedUpdateWithoutQrCodeInput>
  }

  export type MosqueUpdateWithoutQrCodeInput = {
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    city?: CityUpdateOneRequiredWithoutMosqueNestedInput
    media?: MediaUpdateManyWithoutMosqueNestedInput
  }

  export type MosqueUncheckedUpdateWithoutQrCodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    media?: MediaUncheckedUpdateManyWithoutMosqueNestedInput
  }

  export type CityCreateWithoutAdminInput = {
    name: string
    logoUrl?: string | null
    prayers?: PrayerCreateNestedManyWithoutCityInput
    Mosque?: MosqueCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutAdminInput = {
    id?: number
    name: string
    logoUrl?: string | null
    prayers?: PrayerUncheckedCreateNestedManyWithoutCityInput
    Mosque?: MosqueUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutAdminInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutAdminInput, CityUncheckedCreateWithoutAdminInput>
  }

  export type CityUpsertWithoutAdminInput = {
    update: XOR<CityUpdateWithoutAdminInput, CityUncheckedUpdateWithoutAdminInput>
    create: XOR<CityCreateWithoutAdminInput, CityUncheckedCreateWithoutAdminInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutAdminInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutAdminInput, CityUncheckedUpdateWithoutAdminInput>
  }

  export type CityUpdateWithoutAdminInput = {
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    prayers?: PrayerUpdateManyWithoutCityNestedInput
    Mosque?: MosqueUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    prayers?: PrayerUncheckedUpdateManyWithoutCityNestedInput
    Mosque?: MosqueUncheckedUpdateManyWithoutCityNestedInput
  }

  export type PrayerCreateManyCityInput = {
    id?: number
    date?: string | null
    fajr?: string | null
    shuruk?: string | null
    zuhr?: string | null
    asr?: string | null
    maghrib?: string | null
    isha?: string | null
  }

  export type MosqueCreateManyCityInput = {
    id?: number
    name: string
    logoUrl?: string | null
  }

  export type PrayerUpdateWithoutCityInput = {
    date?: NullableStringFieldUpdateOperationsInput | string | null
    fajr?: NullableStringFieldUpdateOperationsInput | string | null
    shuruk?: NullableStringFieldUpdateOperationsInput | string | null
    zuhr?: NullableStringFieldUpdateOperationsInput | string | null
    asr?: NullableStringFieldUpdateOperationsInput | string | null
    maghrib?: NullableStringFieldUpdateOperationsInput | string | null
    isha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrayerUncheckedUpdateWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
    fajr?: NullableStringFieldUpdateOperationsInput | string | null
    shuruk?: NullableStringFieldUpdateOperationsInput | string | null
    zuhr?: NullableStringFieldUpdateOperationsInput | string | null
    asr?: NullableStringFieldUpdateOperationsInput | string | null
    maghrib?: NullableStringFieldUpdateOperationsInput | string | null
    isha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrayerUncheckedUpdateManyWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
    fajr?: NullableStringFieldUpdateOperationsInput | string | null
    shuruk?: NullableStringFieldUpdateOperationsInput | string | null
    zuhr?: NullableStringFieldUpdateOperationsInput | string | null
    asr?: NullableStringFieldUpdateOperationsInput | string | null
    maghrib?: NullableStringFieldUpdateOperationsInput | string | null
    isha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MosqueUpdateWithoutCityInput = {
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    media?: MediaUpdateManyWithoutMosqueNestedInput
    qrCode?: QRCodeUpdateOneWithoutMosqueNestedInput
  }

  export type MosqueUncheckedUpdateWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    media?: MediaUncheckedUpdateManyWithoutMosqueNestedInput
    qrCode?: QRCodeUncheckedUpdateOneWithoutMosqueNestedInput
  }

  export type MosqueUncheckedUpdateManyWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaCreateManyMosqueInput = {
    id?: number
    videoUrl?: string | null
  }

  export type MediaUpdateWithoutMosqueInput = {
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaUncheckedUpdateWithoutMosqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaUncheckedUpdateManyWithoutMosqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CityCountOutputTypeDefaultArgs instead
     */
    export type CityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MosqueCountOutputTypeDefaultArgs instead
     */
    export type MosqueCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MosqueCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CityDefaultArgs instead
     */
    export type CityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PrayerDefaultArgs instead
     */
    export type PrayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PrayerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MosqueDefaultArgs instead
     */
    export type MosqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MosqueDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MediaDefaultArgs instead
     */
    export type MediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MediaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QRCodeDefaultArgs instead
     */
    export type QRCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QRCodeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ErrorMessageDefaultArgs instead
     */
    export type ErrorMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ErrorMessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}