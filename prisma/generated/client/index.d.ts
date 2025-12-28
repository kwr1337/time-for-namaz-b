
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
 * Model FixedPrayerTime
 * 
 */
export type FixedPrayerTime = $Result.DefaultSelection<Prisma.$FixedPrayerTimePayload>
/**
 * Model FixedMosquePrayerTime
 * 
 */
export type FixedMosquePrayerTime = $Result.DefaultSelection<Prisma.$FixedMosquePrayerTimePayload>
/**
 * Model PrayerTimeChange
 * 
 */
export type PrayerTimeChange = $Result.DefaultSelection<Prisma.$PrayerTimeChangePayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model Translation
 * 
 */
export type Translation = $Result.DefaultSelection<Prisma.$TranslationPayload>
/**
 * Model MosqueLanguageSettings
 * 
 */
export type MosqueLanguageSettings = $Result.DefaultSelection<Prisma.$MosqueLanguageSettingsPayload>
/**
 * Model NameOfAllah
 * 
 */
export type NameOfAllah = $Result.DefaultSelection<Prisma.$NameOfAllahPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  CITY_ADMIN: 'CITY_ADMIN',
  MOSQUE_ADMIN: 'MOSQUE_ADMIN'
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

  /**
   * `prisma.fixedPrayerTime`: Exposes CRUD operations for the **FixedPrayerTime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FixedPrayerTimes
    * const fixedPrayerTimes = await prisma.fixedPrayerTime.findMany()
    * ```
    */
  get fixedPrayerTime(): Prisma.FixedPrayerTimeDelegate<ExtArgs>;

  /**
   * `prisma.fixedMosquePrayerTime`: Exposes CRUD operations for the **FixedMosquePrayerTime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FixedMosquePrayerTimes
    * const fixedMosquePrayerTimes = await prisma.fixedMosquePrayerTime.findMany()
    * ```
    */
  get fixedMosquePrayerTime(): Prisma.FixedMosquePrayerTimeDelegate<ExtArgs>;

  /**
   * `prisma.prayerTimeChange`: Exposes CRUD operations for the **PrayerTimeChange** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrayerTimeChanges
    * const prayerTimeChanges = await prisma.prayerTimeChange.findMany()
    * ```
    */
  get prayerTimeChange(): Prisma.PrayerTimeChangeDelegate<ExtArgs>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs>;

  /**
   * `prisma.translation`: Exposes CRUD operations for the **Translation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Translations
    * const translations = await prisma.translation.findMany()
    * ```
    */
  get translation(): Prisma.TranslationDelegate<ExtArgs>;

  /**
   * `prisma.mosqueLanguageSettings`: Exposes CRUD operations for the **MosqueLanguageSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MosqueLanguageSettings
    * const mosqueLanguageSettings = await prisma.mosqueLanguageSettings.findMany()
    * ```
    */
  get mosqueLanguageSettings(): Prisma.MosqueLanguageSettingsDelegate<ExtArgs>;

  /**
   * `prisma.nameOfAllah`: Exposes CRUD operations for the **NameOfAllah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NameOfAllahs
    * const nameOfAllahs = await prisma.nameOfAllah.findMany()
    * ```
    */
  get nameOfAllah(): Prisma.NameOfAllahDelegate<ExtArgs>;
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
    Admin: 'Admin',
    FixedPrayerTime: 'FixedPrayerTime',
    FixedMosquePrayerTime: 'FixedMosquePrayerTime',
    PrayerTimeChange: 'PrayerTimeChange',
    AuditLog: 'AuditLog',
    Translation: 'Translation',
    MosqueLanguageSettings: 'MosqueLanguageSettings',
    NameOfAllah: 'NameOfAllah'
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
      modelProps: 'city' | 'prayer' | 'mosque' | 'media' | 'qRCode' | 'errorMessage' | 'admin' | 'fixedPrayerTime' | 'fixedMosquePrayerTime' | 'prayerTimeChange' | 'auditLog' | 'translation' | 'mosqueLanguageSettings' | 'nameOfAllah'
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
      FixedPrayerTime: {
        payload: Prisma.$FixedPrayerTimePayload<ExtArgs>
        fields: Prisma.FixedPrayerTimeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FixedPrayerTimeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FixedPrayerTimePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FixedPrayerTimeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FixedPrayerTimePayload>
          }
          findFirst: {
            args: Prisma.FixedPrayerTimeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FixedPrayerTimePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FixedPrayerTimeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FixedPrayerTimePayload>
          }
          findMany: {
            args: Prisma.FixedPrayerTimeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FixedPrayerTimePayload>[]
          }
          create: {
            args: Prisma.FixedPrayerTimeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FixedPrayerTimePayload>
          }
          createMany: {
            args: Prisma.FixedPrayerTimeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FixedPrayerTimeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FixedPrayerTimePayload>
          }
          update: {
            args: Prisma.FixedPrayerTimeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FixedPrayerTimePayload>
          }
          deleteMany: {
            args: Prisma.FixedPrayerTimeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FixedPrayerTimeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FixedPrayerTimeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FixedPrayerTimePayload>
          }
          aggregate: {
            args: Prisma.FixedPrayerTimeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFixedPrayerTime>
          }
          groupBy: {
            args: Prisma.FixedPrayerTimeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FixedPrayerTimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FixedPrayerTimeCountArgs<ExtArgs>,
            result: $Utils.Optional<FixedPrayerTimeCountAggregateOutputType> | number
          }
        }
      }
      FixedMosquePrayerTime: {
        payload: Prisma.$FixedMosquePrayerTimePayload<ExtArgs>
        fields: Prisma.FixedMosquePrayerTimeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FixedMosquePrayerTimeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FixedMosquePrayerTimePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FixedMosquePrayerTimeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FixedMosquePrayerTimePayload>
          }
          findFirst: {
            args: Prisma.FixedMosquePrayerTimeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FixedMosquePrayerTimePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FixedMosquePrayerTimeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FixedMosquePrayerTimePayload>
          }
          findMany: {
            args: Prisma.FixedMosquePrayerTimeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FixedMosquePrayerTimePayload>[]
          }
          create: {
            args: Prisma.FixedMosquePrayerTimeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FixedMosquePrayerTimePayload>
          }
          createMany: {
            args: Prisma.FixedMosquePrayerTimeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FixedMosquePrayerTimeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FixedMosquePrayerTimePayload>
          }
          update: {
            args: Prisma.FixedMosquePrayerTimeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FixedMosquePrayerTimePayload>
          }
          deleteMany: {
            args: Prisma.FixedMosquePrayerTimeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FixedMosquePrayerTimeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FixedMosquePrayerTimeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FixedMosquePrayerTimePayload>
          }
          aggregate: {
            args: Prisma.FixedMosquePrayerTimeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFixedMosquePrayerTime>
          }
          groupBy: {
            args: Prisma.FixedMosquePrayerTimeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FixedMosquePrayerTimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FixedMosquePrayerTimeCountArgs<ExtArgs>,
            result: $Utils.Optional<FixedMosquePrayerTimeCountAggregateOutputType> | number
          }
        }
      }
      PrayerTimeChange: {
        payload: Prisma.$PrayerTimeChangePayload<ExtArgs>
        fields: Prisma.PrayerTimeChangeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrayerTimeChangeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrayerTimeChangePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrayerTimeChangeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrayerTimeChangePayload>
          }
          findFirst: {
            args: Prisma.PrayerTimeChangeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrayerTimeChangePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrayerTimeChangeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrayerTimeChangePayload>
          }
          findMany: {
            args: Prisma.PrayerTimeChangeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrayerTimeChangePayload>[]
          }
          create: {
            args: Prisma.PrayerTimeChangeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrayerTimeChangePayload>
          }
          createMany: {
            args: Prisma.PrayerTimeChangeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PrayerTimeChangeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrayerTimeChangePayload>
          }
          update: {
            args: Prisma.PrayerTimeChangeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrayerTimeChangePayload>
          }
          deleteMany: {
            args: Prisma.PrayerTimeChangeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PrayerTimeChangeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PrayerTimeChangeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrayerTimeChangePayload>
          }
          aggregate: {
            args: Prisma.PrayerTimeChangeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePrayerTimeChange>
          }
          groupBy: {
            args: Prisma.PrayerTimeChangeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PrayerTimeChangeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrayerTimeChangeCountArgs<ExtArgs>,
            result: $Utils.Optional<PrayerTimeChangeCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>,
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      Translation: {
        payload: Prisma.$TranslationPayload<ExtArgs>
        fields: Prisma.TranslationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TranslationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TranslationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          findFirst: {
            args: Prisma.TranslationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TranslationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          findMany: {
            args: Prisma.TranslationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>[]
          }
          create: {
            args: Prisma.TranslationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          createMany: {
            args: Prisma.TranslationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TranslationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          update: {
            args: Prisma.TranslationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          deleteMany: {
            args: Prisma.TranslationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TranslationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TranslationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          aggregate: {
            args: Prisma.TranslationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTranslation>
          }
          groupBy: {
            args: Prisma.TranslationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TranslationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TranslationCountArgs<ExtArgs>,
            result: $Utils.Optional<TranslationCountAggregateOutputType> | number
          }
        }
      }
      MosqueLanguageSettings: {
        payload: Prisma.$MosqueLanguageSettingsPayload<ExtArgs>
        fields: Prisma.MosqueLanguageSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MosqueLanguageSettingsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MosqueLanguageSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MosqueLanguageSettingsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MosqueLanguageSettingsPayload>
          }
          findFirst: {
            args: Prisma.MosqueLanguageSettingsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MosqueLanguageSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MosqueLanguageSettingsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MosqueLanguageSettingsPayload>
          }
          findMany: {
            args: Prisma.MosqueLanguageSettingsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MosqueLanguageSettingsPayload>[]
          }
          create: {
            args: Prisma.MosqueLanguageSettingsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MosqueLanguageSettingsPayload>
          }
          createMany: {
            args: Prisma.MosqueLanguageSettingsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MosqueLanguageSettingsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MosqueLanguageSettingsPayload>
          }
          update: {
            args: Prisma.MosqueLanguageSettingsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MosqueLanguageSettingsPayload>
          }
          deleteMany: {
            args: Prisma.MosqueLanguageSettingsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MosqueLanguageSettingsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MosqueLanguageSettingsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MosqueLanguageSettingsPayload>
          }
          aggregate: {
            args: Prisma.MosqueLanguageSettingsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMosqueLanguageSettings>
          }
          groupBy: {
            args: Prisma.MosqueLanguageSettingsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MosqueLanguageSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MosqueLanguageSettingsCountArgs<ExtArgs>,
            result: $Utils.Optional<MosqueLanguageSettingsCountAggregateOutputType> | number
          }
        }
      }
      NameOfAllah: {
        payload: Prisma.$NameOfAllahPayload<ExtArgs>
        fields: Prisma.NameOfAllahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NameOfAllahFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NameOfAllahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NameOfAllahFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NameOfAllahPayload>
          }
          findFirst: {
            args: Prisma.NameOfAllahFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NameOfAllahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NameOfAllahFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NameOfAllahPayload>
          }
          findMany: {
            args: Prisma.NameOfAllahFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NameOfAllahPayload>[]
          }
          create: {
            args: Prisma.NameOfAllahCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NameOfAllahPayload>
          }
          createMany: {
            args: Prisma.NameOfAllahCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NameOfAllahDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NameOfAllahPayload>
          }
          update: {
            args: Prisma.NameOfAllahUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NameOfAllahPayload>
          }
          deleteMany: {
            args: Prisma.NameOfAllahDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NameOfAllahUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NameOfAllahUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NameOfAllahPayload>
          }
          aggregate: {
            args: Prisma.NameOfAllahAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNameOfAllah>
          }
          groupBy: {
            args: Prisma.NameOfAllahGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NameOfAllahGroupByOutputType>[]
          }
          count: {
            args: Prisma.NameOfAllahCountArgs<ExtArgs>,
            result: $Utils.Optional<NameOfAllahCountAggregateOutputType> | number
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
    Mosque: number
    prayers: number
  }

  export type CityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Mosque?: boolean | CityCountOutputTypeCountMosqueArgs
    prayers?: boolean | CityCountOutputTypeCountPrayersArgs
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
  export type CityCountOutputTypeCountMosqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MosqueWhereInput
  }


  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountPrayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrayerWhereInput
  }



  /**
   * Count Type PrayerCountOutputType
   */

  export type PrayerCountOutputType = {
    changes: number
  }

  export type PrayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    changes?: boolean | PrayerCountOutputTypeCountChangesArgs
  }

  // Custom InputTypes

  /**
   * PrayerCountOutputType without action
   */
  export type PrayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerCountOutputType
     */
    select?: PrayerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PrayerCountOutputType without action
   */
  export type PrayerCountOutputTypeCountChangesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrayerTimeChangeWhereInput
  }



  /**
   * Count Type MosqueCountOutputType
   */

  export type MosqueCountOutputType = {
    namesOfAllah: number
    media: number
    prayers: number
    qrCodes: number
  }

  export type MosqueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    namesOfAllah?: boolean | MosqueCountOutputTypeCountNamesOfAllahArgs
    media?: boolean | MosqueCountOutputTypeCountMediaArgs
    prayers?: boolean | MosqueCountOutputTypeCountPrayersArgs
    qrCodes?: boolean | MosqueCountOutputTypeCountQrCodesArgs
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
  export type MosqueCountOutputTypeCountNamesOfAllahArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NameOfAllahWhereInput
  }


  /**
   * MosqueCountOutputType without action
   */
  export type MosqueCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }


  /**
   * MosqueCountOutputType without action
   */
  export type MosqueCountOutputTypeCountPrayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrayerWhereInput
  }


  /**
   * MosqueCountOutputType without action
   */
  export type MosqueCountOutputTypeCountQrCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QRCodeWhereInput
  }



  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    prayerChanges: number
    auditLogs: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prayerChanges?: boolean | AdminCountOutputTypeCountPrayerChangesArgs
    auditLogs?: boolean | AdminCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountPrayerChangesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrayerTimeChangeWhereInput
  }


  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
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
    admin?: boolean | City$adminArgs<ExtArgs>
    fixedPrayerTime?: boolean | City$fixedPrayerTimeArgs<ExtArgs>
    Mosque?: boolean | City$MosqueArgs<ExtArgs>
    prayers?: boolean | City$prayersArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectScalar = {
    id?: boolean
    name?: boolean
    logoUrl?: boolean
  }

  export type CityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | City$adminArgs<ExtArgs>
    fixedPrayerTime?: boolean | City$fixedPrayerTimeArgs<ExtArgs>
    Mosque?: boolean | City$MosqueArgs<ExtArgs>
    prayers?: boolean | City$prayersArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "City"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs> | null
      fixedPrayerTime: Prisma.$FixedPrayerTimePayload<ExtArgs> | null
      Mosque: Prisma.$MosquePayload<ExtArgs>[]
      prayers: Prisma.$PrayerPayload<ExtArgs>[]
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

    admin<T extends City$adminArgs<ExtArgs> = {}>(args?: Subset<T, City$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    fixedPrayerTime<T extends City$fixedPrayerTimeArgs<ExtArgs> = {}>(args?: Subset<T, City$fixedPrayerTimeArgs<ExtArgs>>): Prisma__FixedPrayerTimeClient<$Result.GetResult<Prisma.$FixedPrayerTimePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Mosque<T extends City$MosqueArgs<ExtArgs> = {}>(args?: Subset<T, City$MosqueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, 'findMany'> | Null>;

    prayers<T extends City$prayersArgs<ExtArgs> = {}>(args?: Subset<T, City$prayersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * City.fixedPrayerTime
   */
  export type City$fixedPrayerTimeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixedPrayerTime
     */
    select?: FixedPrayerTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FixedPrayerTimeInclude<ExtArgs> | null
    where?: FixedPrayerTimeWhereInput
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
    mosqueId: number | null
  }

  export type PrayerSumAggregateOutputType = {
    id: number | null
    cityId: number | null
    mosqueId: number | null
  }

  export type PrayerMinAggregateOutputType = {
    id: number | null
    cityId: number | null
    mosqueId: number | null
    date: string | null
    fajr: string | null
    shuruk: string | null
    zuhr: string | null
    asr: string | null
    maghrib: string | null
    isha: string | null
    mechet: string | null
  }

  export type PrayerMaxAggregateOutputType = {
    id: number | null
    cityId: number | null
    mosqueId: number | null
    date: string | null
    fajr: string | null
    shuruk: string | null
    zuhr: string | null
    asr: string | null
    maghrib: string | null
    isha: string | null
    mechet: string | null
  }

  export type PrayerCountAggregateOutputType = {
    id: number
    cityId: number
    mosqueId: number
    date: number
    fajr: number
    shuruk: number
    zuhr: number
    asr: number
    maghrib: number
    isha: number
    mechet: number
    _all: number
  }


  export type PrayerAvgAggregateInputType = {
    id?: true
    cityId?: true
    mosqueId?: true
  }

  export type PrayerSumAggregateInputType = {
    id?: true
    cityId?: true
    mosqueId?: true
  }

  export type PrayerMinAggregateInputType = {
    id?: true
    cityId?: true
    mosqueId?: true
    date?: true
    fajr?: true
    shuruk?: true
    zuhr?: true
    asr?: true
    maghrib?: true
    isha?: true
    mechet?: true
  }

  export type PrayerMaxAggregateInputType = {
    id?: true
    cityId?: true
    mosqueId?: true
    date?: true
    fajr?: true
    shuruk?: true
    zuhr?: true
    asr?: true
    maghrib?: true
    isha?: true
    mechet?: true
  }

  export type PrayerCountAggregateInputType = {
    id?: true
    cityId?: true
    mosqueId?: true
    date?: true
    fajr?: true
    shuruk?: true
    zuhr?: true
    asr?: true
    maghrib?: true
    isha?: true
    mechet?: true
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
    mosqueId: number | null
    date: string | null
    fajr: string | null
    shuruk: string | null
    zuhr: string | null
    asr: string | null
    maghrib: string | null
    isha: string | null
    mechet: string | null
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
    mosqueId?: boolean
    date?: boolean
    fajr?: boolean
    shuruk?: boolean
    zuhr?: boolean
    asr?: boolean
    maghrib?: boolean
    isha?: boolean
    mechet?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
    mosque?: boolean | Prayer$mosqueArgs<ExtArgs>
    changes?: boolean | Prayer$changesArgs<ExtArgs>
    _count?: boolean | PrayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prayer"]>

  export type PrayerSelectScalar = {
    id?: boolean
    cityId?: boolean
    mosqueId?: boolean
    date?: boolean
    fajr?: boolean
    shuruk?: boolean
    zuhr?: boolean
    asr?: boolean
    maghrib?: boolean
    isha?: boolean
    mechet?: boolean
  }

  export type PrayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
    mosque?: boolean | Prayer$mosqueArgs<ExtArgs>
    changes?: boolean | Prayer$changesArgs<ExtArgs>
    _count?: boolean | PrayerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PrayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prayer"
    objects: {
      city: Prisma.$CityPayload<ExtArgs>
      mosque: Prisma.$MosquePayload<ExtArgs> | null
      changes: Prisma.$PrayerTimeChangePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cityId: number
      mosqueId: number | null
      date: string | null
      fajr: string | null
      shuruk: string | null
      zuhr: string | null
      asr: string | null
      maghrib: string | null
      isha: string | null
      mechet: string | null
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

    mosque<T extends Prayer$mosqueArgs<ExtArgs> = {}>(args?: Subset<T, Prayer$mosqueArgs<ExtArgs>>): Prisma__MosqueClient<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    changes<T extends Prayer$changesArgs<ExtArgs> = {}>(args?: Subset<T, Prayer$changesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrayerTimeChangePayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly mosqueId: FieldRef<"Prayer", 'Int'>
    readonly date: FieldRef<"Prayer", 'String'>
    readonly fajr: FieldRef<"Prayer", 'String'>
    readonly shuruk: FieldRef<"Prayer", 'String'>
    readonly zuhr: FieldRef<"Prayer", 'String'>
    readonly asr: FieldRef<"Prayer", 'String'>
    readonly maghrib: FieldRef<"Prayer", 'String'>
    readonly isha: FieldRef<"Prayer", 'String'>
    readonly mechet: FieldRef<"Prayer", 'String'>
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
   * Prayer.mosque
   */
  export type Prayer$mosqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mosque
     */
    select?: MosqueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MosqueInclude<ExtArgs> | null
    where?: MosqueWhereInput
  }


  /**
   * Prayer.changes
   */
  export type Prayer$changesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerTimeChange
     */
    select?: PrayerTimeChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrayerTimeChangeInclude<ExtArgs> | null
    where?: PrayerTimeChangeWhereInput
    orderBy?: PrayerTimeChangeOrderByWithRelationInput | PrayerTimeChangeOrderByWithRelationInput[]
    cursor?: PrayerTimeChangeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrayerTimeChangeScalarFieldEnum | PrayerTimeChangeScalarFieldEnum[]
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
    admin?: boolean | Mosque$adminArgs<ExtArgs>
    fixedPrayerTime?: boolean | Mosque$fixedPrayerTimeArgs<ExtArgs>
    languageSettings?: boolean | Mosque$languageSettingsArgs<ExtArgs>
    namesOfAllah?: boolean | Mosque$namesOfAllahArgs<ExtArgs>
    media?: boolean | Mosque$mediaArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    prayers?: boolean | Mosque$prayersArgs<ExtArgs>
    qrCodes?: boolean | Mosque$qrCodesArgs<ExtArgs>
    _count?: boolean | MosqueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mosque"]>

  export type MosqueSelectScalar = {
    id?: boolean
    cityId?: boolean
    name?: boolean
    logoUrl?: boolean
  }

  export type MosqueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | Mosque$adminArgs<ExtArgs>
    fixedPrayerTime?: boolean | Mosque$fixedPrayerTimeArgs<ExtArgs>
    languageSettings?: boolean | Mosque$languageSettingsArgs<ExtArgs>
    namesOfAllah?: boolean | Mosque$namesOfAllahArgs<ExtArgs>
    media?: boolean | Mosque$mediaArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    prayers?: boolean | Mosque$prayersArgs<ExtArgs>
    qrCodes?: boolean | Mosque$qrCodesArgs<ExtArgs>
    _count?: boolean | MosqueCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MosquePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mosque"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs> | null
      fixedPrayerTime: Prisma.$FixedMosquePrayerTimePayload<ExtArgs> | null
      languageSettings: Prisma.$MosqueLanguageSettingsPayload<ExtArgs> | null
      namesOfAllah: Prisma.$NameOfAllahPayload<ExtArgs>[]
      media: Prisma.$MediaPayload<ExtArgs>[]
      city: Prisma.$CityPayload<ExtArgs>
      prayers: Prisma.$PrayerPayload<ExtArgs>[]
      qrCodes: Prisma.$QRCodePayload<ExtArgs>[]
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

    admin<T extends Mosque$adminArgs<ExtArgs> = {}>(args?: Subset<T, Mosque$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    fixedPrayerTime<T extends Mosque$fixedPrayerTimeArgs<ExtArgs> = {}>(args?: Subset<T, Mosque$fixedPrayerTimeArgs<ExtArgs>>): Prisma__FixedMosquePrayerTimeClient<$Result.GetResult<Prisma.$FixedMosquePrayerTimePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    languageSettings<T extends Mosque$languageSettingsArgs<ExtArgs> = {}>(args?: Subset<T, Mosque$languageSettingsArgs<ExtArgs>>): Prisma__MosqueLanguageSettingsClient<$Result.GetResult<Prisma.$MosqueLanguageSettingsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    namesOfAllah<T extends Mosque$namesOfAllahArgs<ExtArgs> = {}>(args?: Subset<T, Mosque$namesOfAllahArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NameOfAllahPayload<ExtArgs>, T, 'findMany'> | Null>;

    media<T extends Mosque$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Mosque$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, 'findMany'> | Null>;

    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    prayers<T extends Mosque$prayersArgs<ExtArgs> = {}>(args?: Subset<T, Mosque$prayersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, 'findMany'> | Null>;

    qrCodes<T extends Mosque$qrCodesArgs<ExtArgs> = {}>(args?: Subset<T, Mosque$qrCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Mosque.admin
   */
  export type Mosque$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Mosque.fixedPrayerTime
   */
  export type Mosque$fixedPrayerTimeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixedMosquePrayerTime
     */
    select?: FixedMosquePrayerTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FixedMosquePrayerTimeInclude<ExtArgs> | null
    where?: FixedMosquePrayerTimeWhereInput
  }


  /**
   * Mosque.languageSettings
   */
  export type Mosque$languageSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MosqueLanguageSettings
     */
    select?: MosqueLanguageSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MosqueLanguageSettingsInclude<ExtArgs> | null
    where?: MosqueLanguageSettingsWhereInput
  }


  /**
   * Mosque.namesOfAllah
   */
  export type Mosque$namesOfAllahArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NameOfAllah
     */
    select?: NameOfAllahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NameOfAllahInclude<ExtArgs> | null
    where?: NameOfAllahWhereInput
    orderBy?: NameOfAllahOrderByWithRelationInput | NameOfAllahOrderByWithRelationInput[]
    cursor?: NameOfAllahWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NameOfAllahScalarFieldEnum | NameOfAllahScalarFieldEnum[]
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
   * Mosque.prayers
   */
  export type Mosque$prayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Mosque.qrCodes
   */
  export type Mosque$qrCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QRCodeInclude<ExtArgs> | null
    where?: QRCodeWhereInput
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    cursor?: QRCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QRCodeScalarFieldEnum | QRCodeScalarFieldEnum[]
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
    isPrimary: boolean | null
    projectName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    imageUrl: string | null
  }

  export type QRCodeMaxAggregateOutputType = {
    id: number | null
    mosqueId: number | null
    isPrimary: boolean | null
    projectName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    imageUrl: string | null
  }

  export type QRCodeCountAggregateOutputType = {
    id: number
    mosqueId: number
    isPrimary: number
    projectName: number
    createdAt: number
    updatedAt: number
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
    isPrimary?: true
    projectName?: true
    createdAt?: true
    updatedAt?: true
    imageUrl?: true
  }

  export type QRCodeMaxAggregateInputType = {
    id?: true
    mosqueId?: true
    isPrimary?: true
    projectName?: true
    createdAt?: true
    updatedAt?: true
    imageUrl?: true
  }

  export type QRCodeCountAggregateInputType = {
    id?: true
    mosqueId?: true
    isPrimary?: true
    projectName?: true
    createdAt?: true
    updatedAt?: true
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
    isPrimary: boolean
    projectName: string | null
    createdAt: Date
    updatedAt: Date
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
    isPrimary?: boolean
    projectName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageUrl?: boolean
    mosque?: boolean | MosqueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qRCode"]>

  export type QRCodeSelectScalar = {
    id?: boolean
    mosqueId?: boolean
    isPrimary?: boolean
    projectName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
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
      isPrimary: boolean
      projectName: string | null
      createdAt: Date
      updatedAt: Date
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
    readonly isPrimary: FieldRef<"QRCode", 'Boolean'>
    readonly projectName: FieldRef<"QRCode", 'String'>
    readonly createdAt: FieldRef<"QRCode", 'DateTime'>
    readonly updatedAt: FieldRef<"QRCode", 'DateTime'>
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
    mosqueId: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
    cityId: number | null
    mosqueId: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
    role: $Enums.Role | null
    cityId: number | null
    mosqueId: number | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
    role: $Enums.Role | null
    cityId: number | null
    mosqueId: number | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    role: number
    cityId: number
    mosqueId: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
    cityId?: true
    mosqueId?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
    cityId?: true
    mosqueId?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    role?: true
    cityId?: true
    mosqueId?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    role?: true
    cityId?: true
    mosqueId?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    role?: true
    cityId?: true
    mosqueId?: true
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
    mosqueId: number | null
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
    mosqueId?: boolean
    city?: boolean | Admin$cityArgs<ExtArgs>
    mosque?: boolean | Admin$mosqueArgs<ExtArgs>
    prayerChanges?: boolean | Admin$prayerChangesArgs<ExtArgs>
    auditLogs?: boolean | Admin$auditLogsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    role?: boolean
    cityId?: boolean
    mosqueId?: boolean
  }

  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | Admin$cityArgs<ExtArgs>
    mosque?: boolean | Admin$mosqueArgs<ExtArgs>
    prayerChanges?: boolean | Admin$prayerChangesArgs<ExtArgs>
    auditLogs?: boolean | Admin$auditLogsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      city: Prisma.$CityPayload<ExtArgs> | null
      mosque: Prisma.$MosquePayload<ExtArgs> | null
      prayerChanges: Prisma.$PrayerTimeChangePayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      createdAt: Date
      role: $Enums.Role
      cityId: number | null
      mosqueId: number | null
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

    mosque<T extends Admin$mosqueArgs<ExtArgs> = {}>(args?: Subset<T, Admin$mosqueArgs<ExtArgs>>): Prisma__MosqueClient<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    prayerChanges<T extends Admin$prayerChangesArgs<ExtArgs> = {}>(args?: Subset<T, Admin$prayerChangesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrayerTimeChangePayload<ExtArgs>, T, 'findMany'> | Null>;

    auditLogs<T extends Admin$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly mosqueId: FieldRef<"Admin", 'Int'>
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
   * Admin.mosque
   */
  export type Admin$mosqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mosque
     */
    select?: MosqueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MosqueInclude<ExtArgs> | null
    where?: MosqueWhereInput
  }


  /**
   * Admin.prayerChanges
   */
  export type Admin$prayerChangesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerTimeChange
     */
    select?: PrayerTimeChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrayerTimeChangeInclude<ExtArgs> | null
    where?: PrayerTimeChangeWhereInput
    orderBy?: PrayerTimeChangeOrderByWithRelationInput | PrayerTimeChangeOrderByWithRelationInput[]
    cursor?: PrayerTimeChangeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrayerTimeChangeScalarFieldEnum | PrayerTimeChangeScalarFieldEnum[]
  }


  /**
   * Admin.auditLogs
   */
  export type Admin$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
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
   * Model FixedPrayerTime
   */

  export type AggregateFixedPrayerTime = {
    _count: FixedPrayerTimeCountAggregateOutputType | null
    _avg: FixedPrayerTimeAvgAggregateOutputType | null
    _sum: FixedPrayerTimeSumAggregateOutputType | null
    _min: FixedPrayerTimeMinAggregateOutputType | null
    _max: FixedPrayerTimeMaxAggregateOutputType | null
  }

  export type FixedPrayerTimeAvgAggregateOutputType = {
    id: number | null
    cityId: number | null
  }

  export type FixedPrayerTimeSumAggregateOutputType = {
    id: number | null
    cityId: number | null
  }

  export type FixedPrayerTimeMinAggregateOutputType = {
    id: number | null
    cityId: number | null
    fajr: string | null
    shuruk: string | null
    zuhr: string | null
    asr: string | null
    maghrib: string | null
    isha: string | null
    mechet: string | null
    createdAt: Date | null
    updatedAt: Date | null
    fajrActive: boolean | null
    shurukActive: boolean | null
    zuhrActive: boolean | null
    asrActive: boolean | null
    maghribActive: boolean | null
    ishaActive: boolean | null
    mechetActive: boolean | null
  }

  export type FixedPrayerTimeMaxAggregateOutputType = {
    id: number | null
    cityId: number | null
    fajr: string | null
    shuruk: string | null
    zuhr: string | null
    asr: string | null
    maghrib: string | null
    isha: string | null
    mechet: string | null
    createdAt: Date | null
    updatedAt: Date | null
    fajrActive: boolean | null
    shurukActive: boolean | null
    zuhrActive: boolean | null
    asrActive: boolean | null
    maghribActive: boolean | null
    ishaActive: boolean | null
    mechetActive: boolean | null
  }

  export type FixedPrayerTimeCountAggregateOutputType = {
    id: number
    cityId: number
    fajr: number
    shuruk: number
    zuhr: number
    asr: number
    maghrib: number
    isha: number
    mechet: number
    createdAt: number
    updatedAt: number
    fajrActive: number
    shurukActive: number
    zuhrActive: number
    asrActive: number
    maghribActive: number
    ishaActive: number
    mechetActive: number
    _all: number
  }


  export type FixedPrayerTimeAvgAggregateInputType = {
    id?: true
    cityId?: true
  }

  export type FixedPrayerTimeSumAggregateInputType = {
    id?: true
    cityId?: true
  }

  export type FixedPrayerTimeMinAggregateInputType = {
    id?: true
    cityId?: true
    fajr?: true
    shuruk?: true
    zuhr?: true
    asr?: true
    maghrib?: true
    isha?: true
    mechet?: true
    createdAt?: true
    updatedAt?: true
    fajrActive?: true
    shurukActive?: true
    zuhrActive?: true
    asrActive?: true
    maghribActive?: true
    ishaActive?: true
    mechetActive?: true
  }

  export type FixedPrayerTimeMaxAggregateInputType = {
    id?: true
    cityId?: true
    fajr?: true
    shuruk?: true
    zuhr?: true
    asr?: true
    maghrib?: true
    isha?: true
    mechet?: true
    createdAt?: true
    updatedAt?: true
    fajrActive?: true
    shurukActive?: true
    zuhrActive?: true
    asrActive?: true
    maghribActive?: true
    ishaActive?: true
    mechetActive?: true
  }

  export type FixedPrayerTimeCountAggregateInputType = {
    id?: true
    cityId?: true
    fajr?: true
    shuruk?: true
    zuhr?: true
    asr?: true
    maghrib?: true
    isha?: true
    mechet?: true
    createdAt?: true
    updatedAt?: true
    fajrActive?: true
    shurukActive?: true
    zuhrActive?: true
    asrActive?: true
    maghribActive?: true
    ishaActive?: true
    mechetActive?: true
    _all?: true
  }

  export type FixedPrayerTimeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FixedPrayerTime to aggregate.
     */
    where?: FixedPrayerTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FixedPrayerTimes to fetch.
     */
    orderBy?: FixedPrayerTimeOrderByWithRelationInput | FixedPrayerTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FixedPrayerTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FixedPrayerTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FixedPrayerTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FixedPrayerTimes
    **/
    _count?: true | FixedPrayerTimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FixedPrayerTimeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FixedPrayerTimeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FixedPrayerTimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FixedPrayerTimeMaxAggregateInputType
  }

  export type GetFixedPrayerTimeAggregateType<T extends FixedPrayerTimeAggregateArgs> = {
        [P in keyof T & keyof AggregateFixedPrayerTime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFixedPrayerTime[P]>
      : GetScalarType<T[P], AggregateFixedPrayerTime[P]>
  }




  export type FixedPrayerTimeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FixedPrayerTimeWhereInput
    orderBy?: FixedPrayerTimeOrderByWithAggregationInput | FixedPrayerTimeOrderByWithAggregationInput[]
    by: FixedPrayerTimeScalarFieldEnum[] | FixedPrayerTimeScalarFieldEnum
    having?: FixedPrayerTimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FixedPrayerTimeCountAggregateInputType | true
    _avg?: FixedPrayerTimeAvgAggregateInputType
    _sum?: FixedPrayerTimeSumAggregateInputType
    _min?: FixedPrayerTimeMinAggregateInputType
    _max?: FixedPrayerTimeMaxAggregateInputType
  }

  export type FixedPrayerTimeGroupByOutputType = {
    id: number
    cityId: number
    fajr: string
    shuruk: string
    zuhr: string
    asr: string
    maghrib: string
    isha: string
    mechet: string | null
    createdAt: Date
    updatedAt: Date
    fajrActive: boolean
    shurukActive: boolean
    zuhrActive: boolean
    asrActive: boolean
    maghribActive: boolean
    ishaActive: boolean
    mechetActive: boolean
    _count: FixedPrayerTimeCountAggregateOutputType | null
    _avg: FixedPrayerTimeAvgAggregateOutputType | null
    _sum: FixedPrayerTimeSumAggregateOutputType | null
    _min: FixedPrayerTimeMinAggregateOutputType | null
    _max: FixedPrayerTimeMaxAggregateOutputType | null
  }

  type GetFixedPrayerTimeGroupByPayload<T extends FixedPrayerTimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FixedPrayerTimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FixedPrayerTimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FixedPrayerTimeGroupByOutputType[P]>
            : GetScalarType<T[P], FixedPrayerTimeGroupByOutputType[P]>
        }
      >
    >


  export type FixedPrayerTimeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cityId?: boolean
    fajr?: boolean
    shuruk?: boolean
    zuhr?: boolean
    asr?: boolean
    maghrib?: boolean
    isha?: boolean
    mechet?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fajrActive?: boolean
    shurukActive?: boolean
    zuhrActive?: boolean
    asrActive?: boolean
    maghribActive?: boolean
    ishaActive?: boolean
    mechetActive?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fixedPrayerTime"]>

  export type FixedPrayerTimeSelectScalar = {
    id?: boolean
    cityId?: boolean
    fajr?: boolean
    shuruk?: boolean
    zuhr?: boolean
    asr?: boolean
    maghrib?: boolean
    isha?: boolean
    mechet?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fajrActive?: boolean
    shurukActive?: boolean
    zuhrActive?: boolean
    asrActive?: boolean
    maghribActive?: boolean
    ishaActive?: boolean
    mechetActive?: boolean
  }

  export type FixedPrayerTimeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
  }


  export type $FixedPrayerTimePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FixedPrayerTime"
    objects: {
      city: Prisma.$CityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cityId: number
      fajr: string
      shuruk: string
      zuhr: string
      asr: string
      maghrib: string
      isha: string
      mechet: string | null
      createdAt: Date
      updatedAt: Date
      fajrActive: boolean
      shurukActive: boolean
      zuhrActive: boolean
      asrActive: boolean
      maghribActive: boolean
      ishaActive: boolean
      mechetActive: boolean
    }, ExtArgs["result"]["fixedPrayerTime"]>
    composites: {}
  }


  type FixedPrayerTimeGetPayload<S extends boolean | null | undefined | FixedPrayerTimeDefaultArgs> = $Result.GetResult<Prisma.$FixedPrayerTimePayload, S>

  type FixedPrayerTimeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FixedPrayerTimeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FixedPrayerTimeCountAggregateInputType | true
    }

  export interface FixedPrayerTimeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FixedPrayerTime'], meta: { name: 'FixedPrayerTime' } }
    /**
     * Find zero or one FixedPrayerTime that matches the filter.
     * @param {FixedPrayerTimeFindUniqueArgs} args - Arguments to find a FixedPrayerTime
     * @example
     * // Get one FixedPrayerTime
     * const fixedPrayerTime = await prisma.fixedPrayerTime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FixedPrayerTimeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FixedPrayerTimeFindUniqueArgs<ExtArgs>>
    ): Prisma__FixedPrayerTimeClient<$Result.GetResult<Prisma.$FixedPrayerTimePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FixedPrayerTime that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FixedPrayerTimeFindUniqueOrThrowArgs} args - Arguments to find a FixedPrayerTime
     * @example
     * // Get one FixedPrayerTime
     * const fixedPrayerTime = await prisma.fixedPrayerTime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FixedPrayerTimeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FixedPrayerTimeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FixedPrayerTimeClient<$Result.GetResult<Prisma.$FixedPrayerTimePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FixedPrayerTime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixedPrayerTimeFindFirstArgs} args - Arguments to find a FixedPrayerTime
     * @example
     * // Get one FixedPrayerTime
     * const fixedPrayerTime = await prisma.fixedPrayerTime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FixedPrayerTimeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FixedPrayerTimeFindFirstArgs<ExtArgs>>
    ): Prisma__FixedPrayerTimeClient<$Result.GetResult<Prisma.$FixedPrayerTimePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FixedPrayerTime that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixedPrayerTimeFindFirstOrThrowArgs} args - Arguments to find a FixedPrayerTime
     * @example
     * // Get one FixedPrayerTime
     * const fixedPrayerTime = await prisma.fixedPrayerTime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FixedPrayerTimeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FixedPrayerTimeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FixedPrayerTimeClient<$Result.GetResult<Prisma.$FixedPrayerTimePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FixedPrayerTimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixedPrayerTimeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FixedPrayerTimes
     * const fixedPrayerTimes = await prisma.fixedPrayerTime.findMany()
     * 
     * // Get first 10 FixedPrayerTimes
     * const fixedPrayerTimes = await prisma.fixedPrayerTime.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fixedPrayerTimeWithIdOnly = await prisma.fixedPrayerTime.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FixedPrayerTimeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FixedPrayerTimeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FixedPrayerTimePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FixedPrayerTime.
     * @param {FixedPrayerTimeCreateArgs} args - Arguments to create a FixedPrayerTime.
     * @example
     * // Create one FixedPrayerTime
     * const FixedPrayerTime = await prisma.fixedPrayerTime.create({
     *   data: {
     *     // ... data to create a FixedPrayerTime
     *   }
     * })
     * 
    **/
    create<T extends FixedPrayerTimeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FixedPrayerTimeCreateArgs<ExtArgs>>
    ): Prisma__FixedPrayerTimeClient<$Result.GetResult<Prisma.$FixedPrayerTimePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FixedPrayerTimes.
     *     @param {FixedPrayerTimeCreateManyArgs} args - Arguments to create many FixedPrayerTimes.
     *     @example
     *     // Create many FixedPrayerTimes
     *     const fixedPrayerTime = await prisma.fixedPrayerTime.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FixedPrayerTimeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FixedPrayerTimeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FixedPrayerTime.
     * @param {FixedPrayerTimeDeleteArgs} args - Arguments to delete one FixedPrayerTime.
     * @example
     * // Delete one FixedPrayerTime
     * const FixedPrayerTime = await prisma.fixedPrayerTime.delete({
     *   where: {
     *     // ... filter to delete one FixedPrayerTime
     *   }
     * })
     * 
    **/
    delete<T extends FixedPrayerTimeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FixedPrayerTimeDeleteArgs<ExtArgs>>
    ): Prisma__FixedPrayerTimeClient<$Result.GetResult<Prisma.$FixedPrayerTimePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FixedPrayerTime.
     * @param {FixedPrayerTimeUpdateArgs} args - Arguments to update one FixedPrayerTime.
     * @example
     * // Update one FixedPrayerTime
     * const fixedPrayerTime = await prisma.fixedPrayerTime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FixedPrayerTimeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FixedPrayerTimeUpdateArgs<ExtArgs>>
    ): Prisma__FixedPrayerTimeClient<$Result.GetResult<Prisma.$FixedPrayerTimePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FixedPrayerTimes.
     * @param {FixedPrayerTimeDeleteManyArgs} args - Arguments to filter FixedPrayerTimes to delete.
     * @example
     * // Delete a few FixedPrayerTimes
     * const { count } = await prisma.fixedPrayerTime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FixedPrayerTimeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FixedPrayerTimeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FixedPrayerTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixedPrayerTimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FixedPrayerTimes
     * const fixedPrayerTime = await prisma.fixedPrayerTime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FixedPrayerTimeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FixedPrayerTimeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FixedPrayerTime.
     * @param {FixedPrayerTimeUpsertArgs} args - Arguments to update or create a FixedPrayerTime.
     * @example
     * // Update or create a FixedPrayerTime
     * const fixedPrayerTime = await prisma.fixedPrayerTime.upsert({
     *   create: {
     *     // ... data to create a FixedPrayerTime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FixedPrayerTime we want to update
     *   }
     * })
    **/
    upsert<T extends FixedPrayerTimeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FixedPrayerTimeUpsertArgs<ExtArgs>>
    ): Prisma__FixedPrayerTimeClient<$Result.GetResult<Prisma.$FixedPrayerTimePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FixedPrayerTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixedPrayerTimeCountArgs} args - Arguments to filter FixedPrayerTimes to count.
     * @example
     * // Count the number of FixedPrayerTimes
     * const count = await prisma.fixedPrayerTime.count({
     *   where: {
     *     // ... the filter for the FixedPrayerTimes we want to count
     *   }
     * })
    **/
    count<T extends FixedPrayerTimeCountArgs>(
      args?: Subset<T, FixedPrayerTimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FixedPrayerTimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FixedPrayerTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixedPrayerTimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FixedPrayerTimeAggregateArgs>(args: Subset<T, FixedPrayerTimeAggregateArgs>): Prisma.PrismaPromise<GetFixedPrayerTimeAggregateType<T>>

    /**
     * Group by FixedPrayerTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixedPrayerTimeGroupByArgs} args - Group by arguments.
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
      T extends FixedPrayerTimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FixedPrayerTimeGroupByArgs['orderBy'] }
        : { orderBy?: FixedPrayerTimeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FixedPrayerTimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFixedPrayerTimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FixedPrayerTime model
   */
  readonly fields: FixedPrayerTimeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FixedPrayerTime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FixedPrayerTimeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FixedPrayerTime model
   */ 
  interface FixedPrayerTimeFieldRefs {
    readonly id: FieldRef<"FixedPrayerTime", 'Int'>
    readonly cityId: FieldRef<"FixedPrayerTime", 'Int'>
    readonly fajr: FieldRef<"FixedPrayerTime", 'String'>
    readonly shuruk: FieldRef<"FixedPrayerTime", 'String'>
    readonly zuhr: FieldRef<"FixedPrayerTime", 'String'>
    readonly asr: FieldRef<"FixedPrayerTime", 'String'>
    readonly maghrib: FieldRef<"FixedPrayerTime", 'String'>
    readonly isha: FieldRef<"FixedPrayerTime", 'String'>
    readonly mechet: FieldRef<"FixedPrayerTime", 'String'>
    readonly createdAt: FieldRef<"FixedPrayerTime", 'DateTime'>
    readonly updatedAt: FieldRef<"FixedPrayerTime", 'DateTime'>
    readonly fajrActive: FieldRef<"FixedPrayerTime", 'Boolean'>
    readonly shurukActive: FieldRef<"FixedPrayerTime", 'Boolean'>
    readonly zuhrActive: FieldRef<"FixedPrayerTime", 'Boolean'>
    readonly asrActive: FieldRef<"FixedPrayerTime", 'Boolean'>
    readonly maghribActive: FieldRef<"FixedPrayerTime", 'Boolean'>
    readonly ishaActive: FieldRef<"FixedPrayerTime", 'Boolean'>
    readonly mechetActive: FieldRef<"FixedPrayerTime", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * FixedPrayerTime findUnique
   */
  export type FixedPrayerTimeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixedPrayerTime
     */
    select?: FixedPrayerTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FixedPrayerTimeInclude<ExtArgs> | null
    /**
     * Filter, which FixedPrayerTime to fetch.
     */
    where: FixedPrayerTimeWhereUniqueInput
  }


  /**
   * FixedPrayerTime findUniqueOrThrow
   */
  export type FixedPrayerTimeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixedPrayerTime
     */
    select?: FixedPrayerTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FixedPrayerTimeInclude<ExtArgs> | null
    /**
     * Filter, which FixedPrayerTime to fetch.
     */
    where: FixedPrayerTimeWhereUniqueInput
  }


  /**
   * FixedPrayerTime findFirst
   */
  export type FixedPrayerTimeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixedPrayerTime
     */
    select?: FixedPrayerTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FixedPrayerTimeInclude<ExtArgs> | null
    /**
     * Filter, which FixedPrayerTime to fetch.
     */
    where?: FixedPrayerTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FixedPrayerTimes to fetch.
     */
    orderBy?: FixedPrayerTimeOrderByWithRelationInput | FixedPrayerTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FixedPrayerTimes.
     */
    cursor?: FixedPrayerTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FixedPrayerTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FixedPrayerTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FixedPrayerTimes.
     */
    distinct?: FixedPrayerTimeScalarFieldEnum | FixedPrayerTimeScalarFieldEnum[]
  }


  /**
   * FixedPrayerTime findFirstOrThrow
   */
  export type FixedPrayerTimeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixedPrayerTime
     */
    select?: FixedPrayerTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FixedPrayerTimeInclude<ExtArgs> | null
    /**
     * Filter, which FixedPrayerTime to fetch.
     */
    where?: FixedPrayerTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FixedPrayerTimes to fetch.
     */
    orderBy?: FixedPrayerTimeOrderByWithRelationInput | FixedPrayerTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FixedPrayerTimes.
     */
    cursor?: FixedPrayerTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FixedPrayerTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FixedPrayerTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FixedPrayerTimes.
     */
    distinct?: FixedPrayerTimeScalarFieldEnum | FixedPrayerTimeScalarFieldEnum[]
  }


  /**
   * FixedPrayerTime findMany
   */
  export type FixedPrayerTimeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixedPrayerTime
     */
    select?: FixedPrayerTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FixedPrayerTimeInclude<ExtArgs> | null
    /**
     * Filter, which FixedPrayerTimes to fetch.
     */
    where?: FixedPrayerTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FixedPrayerTimes to fetch.
     */
    orderBy?: FixedPrayerTimeOrderByWithRelationInput | FixedPrayerTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FixedPrayerTimes.
     */
    cursor?: FixedPrayerTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FixedPrayerTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FixedPrayerTimes.
     */
    skip?: number
    distinct?: FixedPrayerTimeScalarFieldEnum | FixedPrayerTimeScalarFieldEnum[]
  }


  /**
   * FixedPrayerTime create
   */
  export type FixedPrayerTimeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixedPrayerTime
     */
    select?: FixedPrayerTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FixedPrayerTimeInclude<ExtArgs> | null
    /**
     * The data needed to create a FixedPrayerTime.
     */
    data: XOR<FixedPrayerTimeCreateInput, FixedPrayerTimeUncheckedCreateInput>
  }


  /**
   * FixedPrayerTime createMany
   */
  export type FixedPrayerTimeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FixedPrayerTimes.
     */
    data: FixedPrayerTimeCreateManyInput | FixedPrayerTimeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * FixedPrayerTime update
   */
  export type FixedPrayerTimeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixedPrayerTime
     */
    select?: FixedPrayerTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FixedPrayerTimeInclude<ExtArgs> | null
    /**
     * The data needed to update a FixedPrayerTime.
     */
    data: XOR<FixedPrayerTimeUpdateInput, FixedPrayerTimeUncheckedUpdateInput>
    /**
     * Choose, which FixedPrayerTime to update.
     */
    where: FixedPrayerTimeWhereUniqueInput
  }


  /**
   * FixedPrayerTime updateMany
   */
  export type FixedPrayerTimeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FixedPrayerTimes.
     */
    data: XOR<FixedPrayerTimeUpdateManyMutationInput, FixedPrayerTimeUncheckedUpdateManyInput>
    /**
     * Filter which FixedPrayerTimes to update
     */
    where?: FixedPrayerTimeWhereInput
  }


  /**
   * FixedPrayerTime upsert
   */
  export type FixedPrayerTimeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixedPrayerTime
     */
    select?: FixedPrayerTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FixedPrayerTimeInclude<ExtArgs> | null
    /**
     * The filter to search for the FixedPrayerTime to update in case it exists.
     */
    where: FixedPrayerTimeWhereUniqueInput
    /**
     * In case the FixedPrayerTime found by the `where` argument doesn't exist, create a new FixedPrayerTime with this data.
     */
    create: XOR<FixedPrayerTimeCreateInput, FixedPrayerTimeUncheckedCreateInput>
    /**
     * In case the FixedPrayerTime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FixedPrayerTimeUpdateInput, FixedPrayerTimeUncheckedUpdateInput>
  }


  /**
   * FixedPrayerTime delete
   */
  export type FixedPrayerTimeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixedPrayerTime
     */
    select?: FixedPrayerTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FixedPrayerTimeInclude<ExtArgs> | null
    /**
     * Filter which FixedPrayerTime to delete.
     */
    where: FixedPrayerTimeWhereUniqueInput
  }


  /**
   * FixedPrayerTime deleteMany
   */
  export type FixedPrayerTimeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FixedPrayerTimes to delete
     */
    where?: FixedPrayerTimeWhereInput
  }


  /**
   * FixedPrayerTime without action
   */
  export type FixedPrayerTimeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixedPrayerTime
     */
    select?: FixedPrayerTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FixedPrayerTimeInclude<ExtArgs> | null
  }



  /**
   * Model FixedMosquePrayerTime
   */

  export type AggregateFixedMosquePrayerTime = {
    _count: FixedMosquePrayerTimeCountAggregateOutputType | null
    _avg: FixedMosquePrayerTimeAvgAggregateOutputType | null
    _sum: FixedMosquePrayerTimeSumAggregateOutputType | null
    _min: FixedMosquePrayerTimeMinAggregateOutputType | null
    _max: FixedMosquePrayerTimeMaxAggregateOutputType | null
  }

  export type FixedMosquePrayerTimeAvgAggregateOutputType = {
    id: number | null
    mosqueId: number | null
    fajrIqamaMinutes: number | null
    shurukIqamaMinutes: number | null
    zuhrIqamaMinutes: number | null
    asrIqamaMinutes: number | null
    maghribIqamaMinutes: number | null
    ishaIqamaMinutes: number | null
    mechetIqamaMinutes: number | null
  }

  export type FixedMosquePrayerTimeSumAggregateOutputType = {
    id: number | null
    mosqueId: number | null
    fajrIqamaMinutes: number | null
    shurukIqamaMinutes: number | null
    zuhrIqamaMinutes: number | null
    asrIqamaMinutes: number | null
    maghribIqamaMinutes: number | null
    ishaIqamaMinutes: number | null
    mechetIqamaMinutes: number | null
  }

  export type FixedMosquePrayerTimeMinAggregateOutputType = {
    id: number | null
    mosqueId: number | null
    fajr: string | null
    shuruk: string | null
    zuhr: string | null
    asr: string | null
    maghrib: string | null
    isha: string | null
    mechet: string | null
    createdAt: Date | null
    updatedAt: Date | null
    fajrActive: boolean | null
    shurukActive: boolean | null
    zuhrActive: boolean | null
    asrActive: boolean | null
    maghribActive: boolean | null
    ishaActive: boolean | null
    mechetActive: boolean | null
    fajrIqamaEnabled: boolean | null
    fajrIqamaMinutes: number | null
    shurukIqamaEnabled: boolean | null
    shurukIqamaMinutes: number | null
    zuhrIqamaEnabled: boolean | null
    zuhrIqamaMinutes: number | null
    asrIqamaEnabled: boolean | null
    asrIqamaMinutes: number | null
    maghribIqamaEnabled: boolean | null
    maghribIqamaMinutes: number | null
    ishaIqamaEnabled: boolean | null
    ishaIqamaMinutes: number | null
    mechetIqamaEnabled: boolean | null
    mechetIqamaMinutes: number | null
  }

  export type FixedMosquePrayerTimeMaxAggregateOutputType = {
    id: number | null
    mosqueId: number | null
    fajr: string | null
    shuruk: string | null
    zuhr: string | null
    asr: string | null
    maghrib: string | null
    isha: string | null
    mechet: string | null
    createdAt: Date | null
    updatedAt: Date | null
    fajrActive: boolean | null
    shurukActive: boolean | null
    zuhrActive: boolean | null
    asrActive: boolean | null
    maghribActive: boolean | null
    ishaActive: boolean | null
    mechetActive: boolean | null
    fajrIqamaEnabled: boolean | null
    fajrIqamaMinutes: number | null
    shurukIqamaEnabled: boolean | null
    shurukIqamaMinutes: number | null
    zuhrIqamaEnabled: boolean | null
    zuhrIqamaMinutes: number | null
    asrIqamaEnabled: boolean | null
    asrIqamaMinutes: number | null
    maghribIqamaEnabled: boolean | null
    maghribIqamaMinutes: number | null
    ishaIqamaEnabled: boolean | null
    ishaIqamaMinutes: number | null
    mechetIqamaEnabled: boolean | null
    mechetIqamaMinutes: number | null
  }

  export type FixedMosquePrayerTimeCountAggregateOutputType = {
    id: number
    mosqueId: number
    fajr: number
    shuruk: number
    zuhr: number
    asr: number
    maghrib: number
    isha: number
    mechet: number
    createdAt: number
    updatedAt: number
    fajrActive: number
    shurukActive: number
    zuhrActive: number
    asrActive: number
    maghribActive: number
    ishaActive: number
    mechetActive: number
    fajrIqamaEnabled: number
    fajrIqamaMinutes: number
    shurukIqamaEnabled: number
    shurukIqamaMinutes: number
    zuhrIqamaEnabled: number
    zuhrIqamaMinutes: number
    asrIqamaEnabled: number
    asrIqamaMinutes: number
    maghribIqamaEnabled: number
    maghribIqamaMinutes: number
    ishaIqamaEnabled: number
    ishaIqamaMinutes: number
    mechetIqamaEnabled: number
    mechetIqamaMinutes: number
    _all: number
  }


  export type FixedMosquePrayerTimeAvgAggregateInputType = {
    id?: true
    mosqueId?: true
    fajrIqamaMinutes?: true
    shurukIqamaMinutes?: true
    zuhrIqamaMinutes?: true
    asrIqamaMinutes?: true
    maghribIqamaMinutes?: true
    ishaIqamaMinutes?: true
    mechetIqamaMinutes?: true
  }

  export type FixedMosquePrayerTimeSumAggregateInputType = {
    id?: true
    mosqueId?: true
    fajrIqamaMinutes?: true
    shurukIqamaMinutes?: true
    zuhrIqamaMinutes?: true
    asrIqamaMinutes?: true
    maghribIqamaMinutes?: true
    ishaIqamaMinutes?: true
    mechetIqamaMinutes?: true
  }

  export type FixedMosquePrayerTimeMinAggregateInputType = {
    id?: true
    mosqueId?: true
    fajr?: true
    shuruk?: true
    zuhr?: true
    asr?: true
    maghrib?: true
    isha?: true
    mechet?: true
    createdAt?: true
    updatedAt?: true
    fajrActive?: true
    shurukActive?: true
    zuhrActive?: true
    asrActive?: true
    maghribActive?: true
    ishaActive?: true
    mechetActive?: true
    fajrIqamaEnabled?: true
    fajrIqamaMinutes?: true
    shurukIqamaEnabled?: true
    shurukIqamaMinutes?: true
    zuhrIqamaEnabled?: true
    zuhrIqamaMinutes?: true
    asrIqamaEnabled?: true
    asrIqamaMinutes?: true
    maghribIqamaEnabled?: true
    maghribIqamaMinutes?: true
    ishaIqamaEnabled?: true
    ishaIqamaMinutes?: true
    mechetIqamaEnabled?: true
    mechetIqamaMinutes?: true
  }

  export type FixedMosquePrayerTimeMaxAggregateInputType = {
    id?: true
    mosqueId?: true
    fajr?: true
    shuruk?: true
    zuhr?: true
    asr?: true
    maghrib?: true
    isha?: true
    mechet?: true
    createdAt?: true
    updatedAt?: true
    fajrActive?: true
    shurukActive?: true
    zuhrActive?: true
    asrActive?: true
    maghribActive?: true
    ishaActive?: true
    mechetActive?: true
    fajrIqamaEnabled?: true
    fajrIqamaMinutes?: true
    shurukIqamaEnabled?: true
    shurukIqamaMinutes?: true
    zuhrIqamaEnabled?: true
    zuhrIqamaMinutes?: true
    asrIqamaEnabled?: true
    asrIqamaMinutes?: true
    maghribIqamaEnabled?: true
    maghribIqamaMinutes?: true
    ishaIqamaEnabled?: true
    ishaIqamaMinutes?: true
    mechetIqamaEnabled?: true
    mechetIqamaMinutes?: true
  }

  export type FixedMosquePrayerTimeCountAggregateInputType = {
    id?: true
    mosqueId?: true
    fajr?: true
    shuruk?: true
    zuhr?: true
    asr?: true
    maghrib?: true
    isha?: true
    mechet?: true
    createdAt?: true
    updatedAt?: true
    fajrActive?: true
    shurukActive?: true
    zuhrActive?: true
    asrActive?: true
    maghribActive?: true
    ishaActive?: true
    mechetActive?: true
    fajrIqamaEnabled?: true
    fajrIqamaMinutes?: true
    shurukIqamaEnabled?: true
    shurukIqamaMinutes?: true
    zuhrIqamaEnabled?: true
    zuhrIqamaMinutes?: true
    asrIqamaEnabled?: true
    asrIqamaMinutes?: true
    maghribIqamaEnabled?: true
    maghribIqamaMinutes?: true
    ishaIqamaEnabled?: true
    ishaIqamaMinutes?: true
    mechetIqamaEnabled?: true
    mechetIqamaMinutes?: true
    _all?: true
  }

  export type FixedMosquePrayerTimeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FixedMosquePrayerTime to aggregate.
     */
    where?: FixedMosquePrayerTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FixedMosquePrayerTimes to fetch.
     */
    orderBy?: FixedMosquePrayerTimeOrderByWithRelationInput | FixedMosquePrayerTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FixedMosquePrayerTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FixedMosquePrayerTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FixedMosquePrayerTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FixedMosquePrayerTimes
    **/
    _count?: true | FixedMosquePrayerTimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FixedMosquePrayerTimeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FixedMosquePrayerTimeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FixedMosquePrayerTimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FixedMosquePrayerTimeMaxAggregateInputType
  }

  export type GetFixedMosquePrayerTimeAggregateType<T extends FixedMosquePrayerTimeAggregateArgs> = {
        [P in keyof T & keyof AggregateFixedMosquePrayerTime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFixedMosquePrayerTime[P]>
      : GetScalarType<T[P], AggregateFixedMosquePrayerTime[P]>
  }




  export type FixedMosquePrayerTimeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FixedMosquePrayerTimeWhereInput
    orderBy?: FixedMosquePrayerTimeOrderByWithAggregationInput | FixedMosquePrayerTimeOrderByWithAggregationInput[]
    by: FixedMosquePrayerTimeScalarFieldEnum[] | FixedMosquePrayerTimeScalarFieldEnum
    having?: FixedMosquePrayerTimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FixedMosquePrayerTimeCountAggregateInputType | true
    _avg?: FixedMosquePrayerTimeAvgAggregateInputType
    _sum?: FixedMosquePrayerTimeSumAggregateInputType
    _min?: FixedMosquePrayerTimeMinAggregateInputType
    _max?: FixedMosquePrayerTimeMaxAggregateInputType
  }

  export type FixedMosquePrayerTimeGroupByOutputType = {
    id: number
    mosqueId: number
    fajr: string
    shuruk: string
    zuhr: string
    asr: string
    maghrib: string
    isha: string
    mechet: string | null
    createdAt: Date
    updatedAt: Date
    fajrActive: boolean
    shurukActive: boolean
    zuhrActive: boolean
    asrActive: boolean
    maghribActive: boolean
    ishaActive: boolean
    mechetActive: boolean
    fajrIqamaEnabled: boolean
    fajrIqamaMinutes: number
    shurukIqamaEnabled: boolean
    shurukIqamaMinutes: number
    zuhrIqamaEnabled: boolean
    zuhrIqamaMinutes: number
    asrIqamaEnabled: boolean
    asrIqamaMinutes: number
    maghribIqamaEnabled: boolean
    maghribIqamaMinutes: number
    ishaIqamaEnabled: boolean
    ishaIqamaMinutes: number
    mechetIqamaEnabled: boolean
    mechetIqamaMinutes: number
    _count: FixedMosquePrayerTimeCountAggregateOutputType | null
    _avg: FixedMosquePrayerTimeAvgAggregateOutputType | null
    _sum: FixedMosquePrayerTimeSumAggregateOutputType | null
    _min: FixedMosquePrayerTimeMinAggregateOutputType | null
    _max: FixedMosquePrayerTimeMaxAggregateOutputType | null
  }

  type GetFixedMosquePrayerTimeGroupByPayload<T extends FixedMosquePrayerTimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FixedMosquePrayerTimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FixedMosquePrayerTimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FixedMosquePrayerTimeGroupByOutputType[P]>
            : GetScalarType<T[P], FixedMosquePrayerTimeGroupByOutputType[P]>
        }
      >
    >


  export type FixedMosquePrayerTimeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mosqueId?: boolean
    fajr?: boolean
    shuruk?: boolean
    zuhr?: boolean
    asr?: boolean
    maghrib?: boolean
    isha?: boolean
    mechet?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fajrActive?: boolean
    shurukActive?: boolean
    zuhrActive?: boolean
    asrActive?: boolean
    maghribActive?: boolean
    ishaActive?: boolean
    mechetActive?: boolean
    fajrIqamaEnabled?: boolean
    fajrIqamaMinutes?: boolean
    shurukIqamaEnabled?: boolean
    shurukIqamaMinutes?: boolean
    zuhrIqamaEnabled?: boolean
    zuhrIqamaMinutes?: boolean
    asrIqamaEnabled?: boolean
    asrIqamaMinutes?: boolean
    maghribIqamaEnabled?: boolean
    maghribIqamaMinutes?: boolean
    ishaIqamaEnabled?: boolean
    ishaIqamaMinutes?: boolean
    mechetIqamaEnabled?: boolean
    mechetIqamaMinutes?: boolean
    mosque?: boolean | MosqueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fixedMosquePrayerTime"]>

  export type FixedMosquePrayerTimeSelectScalar = {
    id?: boolean
    mosqueId?: boolean
    fajr?: boolean
    shuruk?: boolean
    zuhr?: boolean
    asr?: boolean
    maghrib?: boolean
    isha?: boolean
    mechet?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fajrActive?: boolean
    shurukActive?: boolean
    zuhrActive?: boolean
    asrActive?: boolean
    maghribActive?: boolean
    ishaActive?: boolean
    mechetActive?: boolean
    fajrIqamaEnabled?: boolean
    fajrIqamaMinutes?: boolean
    shurukIqamaEnabled?: boolean
    shurukIqamaMinutes?: boolean
    zuhrIqamaEnabled?: boolean
    zuhrIqamaMinutes?: boolean
    asrIqamaEnabled?: boolean
    asrIqamaMinutes?: boolean
    maghribIqamaEnabled?: boolean
    maghribIqamaMinutes?: boolean
    ishaIqamaEnabled?: boolean
    ishaIqamaMinutes?: boolean
    mechetIqamaEnabled?: boolean
    mechetIqamaMinutes?: boolean
  }

  export type FixedMosquePrayerTimeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mosque?: boolean | MosqueDefaultArgs<ExtArgs>
  }


  export type $FixedMosquePrayerTimePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FixedMosquePrayerTime"
    objects: {
      mosque: Prisma.$MosquePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mosqueId: number
      fajr: string
      shuruk: string
      zuhr: string
      asr: string
      maghrib: string
      isha: string
      mechet: string | null
      createdAt: Date
      updatedAt: Date
      fajrActive: boolean
      shurukActive: boolean
      zuhrActive: boolean
      asrActive: boolean
      maghribActive: boolean
      ishaActive: boolean
      mechetActive: boolean
      fajrIqamaEnabled: boolean
      fajrIqamaMinutes: number
      shurukIqamaEnabled: boolean
      shurukIqamaMinutes: number
      zuhrIqamaEnabled: boolean
      zuhrIqamaMinutes: number
      asrIqamaEnabled: boolean
      asrIqamaMinutes: number
      maghribIqamaEnabled: boolean
      maghribIqamaMinutes: number
      ishaIqamaEnabled: boolean
      ishaIqamaMinutes: number
      mechetIqamaEnabled: boolean
      mechetIqamaMinutes: number
    }, ExtArgs["result"]["fixedMosquePrayerTime"]>
    composites: {}
  }


  type FixedMosquePrayerTimeGetPayload<S extends boolean | null | undefined | FixedMosquePrayerTimeDefaultArgs> = $Result.GetResult<Prisma.$FixedMosquePrayerTimePayload, S>

  type FixedMosquePrayerTimeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FixedMosquePrayerTimeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FixedMosquePrayerTimeCountAggregateInputType | true
    }

  export interface FixedMosquePrayerTimeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FixedMosquePrayerTime'], meta: { name: 'FixedMosquePrayerTime' } }
    /**
     * Find zero or one FixedMosquePrayerTime that matches the filter.
     * @param {FixedMosquePrayerTimeFindUniqueArgs} args - Arguments to find a FixedMosquePrayerTime
     * @example
     * // Get one FixedMosquePrayerTime
     * const fixedMosquePrayerTime = await prisma.fixedMosquePrayerTime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FixedMosquePrayerTimeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FixedMosquePrayerTimeFindUniqueArgs<ExtArgs>>
    ): Prisma__FixedMosquePrayerTimeClient<$Result.GetResult<Prisma.$FixedMosquePrayerTimePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FixedMosquePrayerTime that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FixedMosquePrayerTimeFindUniqueOrThrowArgs} args - Arguments to find a FixedMosquePrayerTime
     * @example
     * // Get one FixedMosquePrayerTime
     * const fixedMosquePrayerTime = await prisma.fixedMosquePrayerTime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FixedMosquePrayerTimeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FixedMosquePrayerTimeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FixedMosquePrayerTimeClient<$Result.GetResult<Prisma.$FixedMosquePrayerTimePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FixedMosquePrayerTime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixedMosquePrayerTimeFindFirstArgs} args - Arguments to find a FixedMosquePrayerTime
     * @example
     * // Get one FixedMosquePrayerTime
     * const fixedMosquePrayerTime = await prisma.fixedMosquePrayerTime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FixedMosquePrayerTimeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FixedMosquePrayerTimeFindFirstArgs<ExtArgs>>
    ): Prisma__FixedMosquePrayerTimeClient<$Result.GetResult<Prisma.$FixedMosquePrayerTimePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FixedMosquePrayerTime that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixedMosquePrayerTimeFindFirstOrThrowArgs} args - Arguments to find a FixedMosquePrayerTime
     * @example
     * // Get one FixedMosquePrayerTime
     * const fixedMosquePrayerTime = await prisma.fixedMosquePrayerTime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FixedMosquePrayerTimeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FixedMosquePrayerTimeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FixedMosquePrayerTimeClient<$Result.GetResult<Prisma.$FixedMosquePrayerTimePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FixedMosquePrayerTimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixedMosquePrayerTimeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FixedMosquePrayerTimes
     * const fixedMosquePrayerTimes = await prisma.fixedMosquePrayerTime.findMany()
     * 
     * // Get first 10 FixedMosquePrayerTimes
     * const fixedMosquePrayerTimes = await prisma.fixedMosquePrayerTime.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fixedMosquePrayerTimeWithIdOnly = await prisma.fixedMosquePrayerTime.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FixedMosquePrayerTimeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FixedMosquePrayerTimeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FixedMosquePrayerTimePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FixedMosquePrayerTime.
     * @param {FixedMosquePrayerTimeCreateArgs} args - Arguments to create a FixedMosquePrayerTime.
     * @example
     * // Create one FixedMosquePrayerTime
     * const FixedMosquePrayerTime = await prisma.fixedMosquePrayerTime.create({
     *   data: {
     *     // ... data to create a FixedMosquePrayerTime
     *   }
     * })
     * 
    **/
    create<T extends FixedMosquePrayerTimeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FixedMosquePrayerTimeCreateArgs<ExtArgs>>
    ): Prisma__FixedMosquePrayerTimeClient<$Result.GetResult<Prisma.$FixedMosquePrayerTimePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FixedMosquePrayerTimes.
     *     @param {FixedMosquePrayerTimeCreateManyArgs} args - Arguments to create many FixedMosquePrayerTimes.
     *     @example
     *     // Create many FixedMosquePrayerTimes
     *     const fixedMosquePrayerTime = await prisma.fixedMosquePrayerTime.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FixedMosquePrayerTimeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FixedMosquePrayerTimeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FixedMosquePrayerTime.
     * @param {FixedMosquePrayerTimeDeleteArgs} args - Arguments to delete one FixedMosquePrayerTime.
     * @example
     * // Delete one FixedMosquePrayerTime
     * const FixedMosquePrayerTime = await prisma.fixedMosquePrayerTime.delete({
     *   where: {
     *     // ... filter to delete one FixedMosquePrayerTime
     *   }
     * })
     * 
    **/
    delete<T extends FixedMosquePrayerTimeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FixedMosquePrayerTimeDeleteArgs<ExtArgs>>
    ): Prisma__FixedMosquePrayerTimeClient<$Result.GetResult<Prisma.$FixedMosquePrayerTimePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FixedMosquePrayerTime.
     * @param {FixedMosquePrayerTimeUpdateArgs} args - Arguments to update one FixedMosquePrayerTime.
     * @example
     * // Update one FixedMosquePrayerTime
     * const fixedMosquePrayerTime = await prisma.fixedMosquePrayerTime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FixedMosquePrayerTimeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FixedMosquePrayerTimeUpdateArgs<ExtArgs>>
    ): Prisma__FixedMosquePrayerTimeClient<$Result.GetResult<Prisma.$FixedMosquePrayerTimePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FixedMosquePrayerTimes.
     * @param {FixedMosquePrayerTimeDeleteManyArgs} args - Arguments to filter FixedMosquePrayerTimes to delete.
     * @example
     * // Delete a few FixedMosquePrayerTimes
     * const { count } = await prisma.fixedMosquePrayerTime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FixedMosquePrayerTimeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FixedMosquePrayerTimeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FixedMosquePrayerTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixedMosquePrayerTimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FixedMosquePrayerTimes
     * const fixedMosquePrayerTime = await prisma.fixedMosquePrayerTime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FixedMosquePrayerTimeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FixedMosquePrayerTimeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FixedMosquePrayerTime.
     * @param {FixedMosquePrayerTimeUpsertArgs} args - Arguments to update or create a FixedMosquePrayerTime.
     * @example
     * // Update or create a FixedMosquePrayerTime
     * const fixedMosquePrayerTime = await prisma.fixedMosquePrayerTime.upsert({
     *   create: {
     *     // ... data to create a FixedMosquePrayerTime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FixedMosquePrayerTime we want to update
     *   }
     * })
    **/
    upsert<T extends FixedMosquePrayerTimeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FixedMosquePrayerTimeUpsertArgs<ExtArgs>>
    ): Prisma__FixedMosquePrayerTimeClient<$Result.GetResult<Prisma.$FixedMosquePrayerTimePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FixedMosquePrayerTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixedMosquePrayerTimeCountArgs} args - Arguments to filter FixedMosquePrayerTimes to count.
     * @example
     * // Count the number of FixedMosquePrayerTimes
     * const count = await prisma.fixedMosquePrayerTime.count({
     *   where: {
     *     // ... the filter for the FixedMosquePrayerTimes we want to count
     *   }
     * })
    **/
    count<T extends FixedMosquePrayerTimeCountArgs>(
      args?: Subset<T, FixedMosquePrayerTimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FixedMosquePrayerTimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FixedMosquePrayerTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixedMosquePrayerTimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FixedMosquePrayerTimeAggregateArgs>(args: Subset<T, FixedMosquePrayerTimeAggregateArgs>): Prisma.PrismaPromise<GetFixedMosquePrayerTimeAggregateType<T>>

    /**
     * Group by FixedMosquePrayerTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixedMosquePrayerTimeGroupByArgs} args - Group by arguments.
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
      T extends FixedMosquePrayerTimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FixedMosquePrayerTimeGroupByArgs['orderBy'] }
        : { orderBy?: FixedMosquePrayerTimeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FixedMosquePrayerTimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFixedMosquePrayerTimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FixedMosquePrayerTime model
   */
  readonly fields: FixedMosquePrayerTimeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FixedMosquePrayerTime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FixedMosquePrayerTimeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FixedMosquePrayerTime model
   */ 
  interface FixedMosquePrayerTimeFieldRefs {
    readonly id: FieldRef<"FixedMosquePrayerTime", 'Int'>
    readonly mosqueId: FieldRef<"FixedMosquePrayerTime", 'Int'>
    readonly fajr: FieldRef<"FixedMosquePrayerTime", 'String'>
    readonly shuruk: FieldRef<"FixedMosquePrayerTime", 'String'>
    readonly zuhr: FieldRef<"FixedMosquePrayerTime", 'String'>
    readonly asr: FieldRef<"FixedMosquePrayerTime", 'String'>
    readonly maghrib: FieldRef<"FixedMosquePrayerTime", 'String'>
    readonly isha: FieldRef<"FixedMosquePrayerTime", 'String'>
    readonly mechet: FieldRef<"FixedMosquePrayerTime", 'String'>
    readonly createdAt: FieldRef<"FixedMosquePrayerTime", 'DateTime'>
    readonly updatedAt: FieldRef<"FixedMosquePrayerTime", 'DateTime'>
    readonly fajrActive: FieldRef<"FixedMosquePrayerTime", 'Boolean'>
    readonly shurukActive: FieldRef<"FixedMosquePrayerTime", 'Boolean'>
    readonly zuhrActive: FieldRef<"FixedMosquePrayerTime", 'Boolean'>
    readonly asrActive: FieldRef<"FixedMosquePrayerTime", 'Boolean'>
    readonly maghribActive: FieldRef<"FixedMosquePrayerTime", 'Boolean'>
    readonly ishaActive: FieldRef<"FixedMosquePrayerTime", 'Boolean'>
    readonly mechetActive: FieldRef<"FixedMosquePrayerTime", 'Boolean'>
    readonly fajrIqamaEnabled: FieldRef<"FixedMosquePrayerTime", 'Boolean'>
    readonly fajrIqamaMinutes: FieldRef<"FixedMosquePrayerTime", 'Int'>
    readonly shurukIqamaEnabled: FieldRef<"FixedMosquePrayerTime", 'Boolean'>
    readonly shurukIqamaMinutes: FieldRef<"FixedMosquePrayerTime", 'Int'>
    readonly zuhrIqamaEnabled: FieldRef<"FixedMosquePrayerTime", 'Boolean'>
    readonly zuhrIqamaMinutes: FieldRef<"FixedMosquePrayerTime", 'Int'>
    readonly asrIqamaEnabled: FieldRef<"FixedMosquePrayerTime", 'Boolean'>
    readonly asrIqamaMinutes: FieldRef<"FixedMosquePrayerTime", 'Int'>
    readonly maghribIqamaEnabled: FieldRef<"FixedMosquePrayerTime", 'Boolean'>
    readonly maghribIqamaMinutes: FieldRef<"FixedMosquePrayerTime", 'Int'>
    readonly ishaIqamaEnabled: FieldRef<"FixedMosquePrayerTime", 'Boolean'>
    readonly ishaIqamaMinutes: FieldRef<"FixedMosquePrayerTime", 'Int'>
    readonly mechetIqamaEnabled: FieldRef<"FixedMosquePrayerTime", 'Boolean'>
    readonly mechetIqamaMinutes: FieldRef<"FixedMosquePrayerTime", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * FixedMosquePrayerTime findUnique
   */
  export type FixedMosquePrayerTimeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixedMosquePrayerTime
     */
    select?: FixedMosquePrayerTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FixedMosquePrayerTimeInclude<ExtArgs> | null
    /**
     * Filter, which FixedMosquePrayerTime to fetch.
     */
    where: FixedMosquePrayerTimeWhereUniqueInput
  }


  /**
   * FixedMosquePrayerTime findUniqueOrThrow
   */
  export type FixedMosquePrayerTimeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixedMosquePrayerTime
     */
    select?: FixedMosquePrayerTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FixedMosquePrayerTimeInclude<ExtArgs> | null
    /**
     * Filter, which FixedMosquePrayerTime to fetch.
     */
    where: FixedMosquePrayerTimeWhereUniqueInput
  }


  /**
   * FixedMosquePrayerTime findFirst
   */
  export type FixedMosquePrayerTimeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixedMosquePrayerTime
     */
    select?: FixedMosquePrayerTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FixedMosquePrayerTimeInclude<ExtArgs> | null
    /**
     * Filter, which FixedMosquePrayerTime to fetch.
     */
    where?: FixedMosquePrayerTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FixedMosquePrayerTimes to fetch.
     */
    orderBy?: FixedMosquePrayerTimeOrderByWithRelationInput | FixedMosquePrayerTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FixedMosquePrayerTimes.
     */
    cursor?: FixedMosquePrayerTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FixedMosquePrayerTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FixedMosquePrayerTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FixedMosquePrayerTimes.
     */
    distinct?: FixedMosquePrayerTimeScalarFieldEnum | FixedMosquePrayerTimeScalarFieldEnum[]
  }


  /**
   * FixedMosquePrayerTime findFirstOrThrow
   */
  export type FixedMosquePrayerTimeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixedMosquePrayerTime
     */
    select?: FixedMosquePrayerTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FixedMosquePrayerTimeInclude<ExtArgs> | null
    /**
     * Filter, which FixedMosquePrayerTime to fetch.
     */
    where?: FixedMosquePrayerTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FixedMosquePrayerTimes to fetch.
     */
    orderBy?: FixedMosquePrayerTimeOrderByWithRelationInput | FixedMosquePrayerTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FixedMosquePrayerTimes.
     */
    cursor?: FixedMosquePrayerTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FixedMosquePrayerTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FixedMosquePrayerTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FixedMosquePrayerTimes.
     */
    distinct?: FixedMosquePrayerTimeScalarFieldEnum | FixedMosquePrayerTimeScalarFieldEnum[]
  }


  /**
   * FixedMosquePrayerTime findMany
   */
  export type FixedMosquePrayerTimeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixedMosquePrayerTime
     */
    select?: FixedMosquePrayerTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FixedMosquePrayerTimeInclude<ExtArgs> | null
    /**
     * Filter, which FixedMosquePrayerTimes to fetch.
     */
    where?: FixedMosquePrayerTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FixedMosquePrayerTimes to fetch.
     */
    orderBy?: FixedMosquePrayerTimeOrderByWithRelationInput | FixedMosquePrayerTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FixedMosquePrayerTimes.
     */
    cursor?: FixedMosquePrayerTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FixedMosquePrayerTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FixedMosquePrayerTimes.
     */
    skip?: number
    distinct?: FixedMosquePrayerTimeScalarFieldEnum | FixedMosquePrayerTimeScalarFieldEnum[]
  }


  /**
   * FixedMosquePrayerTime create
   */
  export type FixedMosquePrayerTimeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixedMosquePrayerTime
     */
    select?: FixedMosquePrayerTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FixedMosquePrayerTimeInclude<ExtArgs> | null
    /**
     * The data needed to create a FixedMosquePrayerTime.
     */
    data: XOR<FixedMosquePrayerTimeCreateInput, FixedMosquePrayerTimeUncheckedCreateInput>
  }


  /**
   * FixedMosquePrayerTime createMany
   */
  export type FixedMosquePrayerTimeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FixedMosquePrayerTimes.
     */
    data: FixedMosquePrayerTimeCreateManyInput | FixedMosquePrayerTimeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * FixedMosquePrayerTime update
   */
  export type FixedMosquePrayerTimeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixedMosquePrayerTime
     */
    select?: FixedMosquePrayerTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FixedMosquePrayerTimeInclude<ExtArgs> | null
    /**
     * The data needed to update a FixedMosquePrayerTime.
     */
    data: XOR<FixedMosquePrayerTimeUpdateInput, FixedMosquePrayerTimeUncheckedUpdateInput>
    /**
     * Choose, which FixedMosquePrayerTime to update.
     */
    where: FixedMosquePrayerTimeWhereUniqueInput
  }


  /**
   * FixedMosquePrayerTime updateMany
   */
  export type FixedMosquePrayerTimeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FixedMosquePrayerTimes.
     */
    data: XOR<FixedMosquePrayerTimeUpdateManyMutationInput, FixedMosquePrayerTimeUncheckedUpdateManyInput>
    /**
     * Filter which FixedMosquePrayerTimes to update
     */
    where?: FixedMosquePrayerTimeWhereInput
  }


  /**
   * FixedMosquePrayerTime upsert
   */
  export type FixedMosquePrayerTimeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixedMosquePrayerTime
     */
    select?: FixedMosquePrayerTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FixedMosquePrayerTimeInclude<ExtArgs> | null
    /**
     * The filter to search for the FixedMosquePrayerTime to update in case it exists.
     */
    where: FixedMosquePrayerTimeWhereUniqueInput
    /**
     * In case the FixedMosquePrayerTime found by the `where` argument doesn't exist, create a new FixedMosquePrayerTime with this data.
     */
    create: XOR<FixedMosquePrayerTimeCreateInput, FixedMosquePrayerTimeUncheckedCreateInput>
    /**
     * In case the FixedMosquePrayerTime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FixedMosquePrayerTimeUpdateInput, FixedMosquePrayerTimeUncheckedUpdateInput>
  }


  /**
   * FixedMosquePrayerTime delete
   */
  export type FixedMosquePrayerTimeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixedMosquePrayerTime
     */
    select?: FixedMosquePrayerTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FixedMosquePrayerTimeInclude<ExtArgs> | null
    /**
     * Filter which FixedMosquePrayerTime to delete.
     */
    where: FixedMosquePrayerTimeWhereUniqueInput
  }


  /**
   * FixedMosquePrayerTime deleteMany
   */
  export type FixedMosquePrayerTimeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FixedMosquePrayerTimes to delete
     */
    where?: FixedMosquePrayerTimeWhereInput
  }


  /**
   * FixedMosquePrayerTime without action
   */
  export type FixedMosquePrayerTimeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixedMosquePrayerTime
     */
    select?: FixedMosquePrayerTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FixedMosquePrayerTimeInclude<ExtArgs> | null
  }



  /**
   * Model PrayerTimeChange
   */

  export type AggregatePrayerTimeChange = {
    _count: PrayerTimeChangeCountAggregateOutputType | null
    _avg: PrayerTimeChangeAvgAggregateOutputType | null
    _sum: PrayerTimeChangeSumAggregateOutputType | null
    _min: PrayerTimeChangeMinAggregateOutputType | null
    _max: PrayerTimeChangeMaxAggregateOutputType | null
  }

  export type PrayerTimeChangeAvgAggregateOutputType = {
    id: number | null
    prayerId: number | null
    shiftMinutes: number | null
    changedBy: number | null
  }

  export type PrayerTimeChangeSumAggregateOutputType = {
    id: number | null
    prayerId: number | null
    shiftMinutes: number | null
    changedBy: number | null
  }

  export type PrayerTimeChangeMinAggregateOutputType = {
    id: number | null
    prayerId: number | null
    prayerType: string | null
    oldTime: string | null
    newTime: string | null
    shiftMinutes: number | null
    changedAt: Date | null
    changedBy: number | null
  }

  export type PrayerTimeChangeMaxAggregateOutputType = {
    id: number | null
    prayerId: number | null
    prayerType: string | null
    oldTime: string | null
    newTime: string | null
    shiftMinutes: number | null
    changedAt: Date | null
    changedBy: number | null
  }

  export type PrayerTimeChangeCountAggregateOutputType = {
    id: number
    prayerId: number
    prayerType: number
    oldTime: number
    newTime: number
    shiftMinutes: number
    changedAt: number
    changedBy: number
    _all: number
  }


  export type PrayerTimeChangeAvgAggregateInputType = {
    id?: true
    prayerId?: true
    shiftMinutes?: true
    changedBy?: true
  }

  export type PrayerTimeChangeSumAggregateInputType = {
    id?: true
    prayerId?: true
    shiftMinutes?: true
    changedBy?: true
  }

  export type PrayerTimeChangeMinAggregateInputType = {
    id?: true
    prayerId?: true
    prayerType?: true
    oldTime?: true
    newTime?: true
    shiftMinutes?: true
    changedAt?: true
    changedBy?: true
  }

  export type PrayerTimeChangeMaxAggregateInputType = {
    id?: true
    prayerId?: true
    prayerType?: true
    oldTime?: true
    newTime?: true
    shiftMinutes?: true
    changedAt?: true
    changedBy?: true
  }

  export type PrayerTimeChangeCountAggregateInputType = {
    id?: true
    prayerId?: true
    prayerType?: true
    oldTime?: true
    newTime?: true
    shiftMinutes?: true
    changedAt?: true
    changedBy?: true
    _all?: true
  }

  export type PrayerTimeChangeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrayerTimeChange to aggregate.
     */
    where?: PrayerTimeChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrayerTimeChanges to fetch.
     */
    orderBy?: PrayerTimeChangeOrderByWithRelationInput | PrayerTimeChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrayerTimeChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrayerTimeChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrayerTimeChanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrayerTimeChanges
    **/
    _count?: true | PrayerTimeChangeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrayerTimeChangeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrayerTimeChangeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrayerTimeChangeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrayerTimeChangeMaxAggregateInputType
  }

  export type GetPrayerTimeChangeAggregateType<T extends PrayerTimeChangeAggregateArgs> = {
        [P in keyof T & keyof AggregatePrayerTimeChange]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrayerTimeChange[P]>
      : GetScalarType<T[P], AggregatePrayerTimeChange[P]>
  }




  export type PrayerTimeChangeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrayerTimeChangeWhereInput
    orderBy?: PrayerTimeChangeOrderByWithAggregationInput | PrayerTimeChangeOrderByWithAggregationInput[]
    by: PrayerTimeChangeScalarFieldEnum[] | PrayerTimeChangeScalarFieldEnum
    having?: PrayerTimeChangeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrayerTimeChangeCountAggregateInputType | true
    _avg?: PrayerTimeChangeAvgAggregateInputType
    _sum?: PrayerTimeChangeSumAggregateInputType
    _min?: PrayerTimeChangeMinAggregateInputType
    _max?: PrayerTimeChangeMaxAggregateInputType
  }

  export type PrayerTimeChangeGroupByOutputType = {
    id: number
    prayerId: number
    prayerType: string
    oldTime: string
    newTime: string
    shiftMinutes: number
    changedAt: Date
    changedBy: number
    _count: PrayerTimeChangeCountAggregateOutputType | null
    _avg: PrayerTimeChangeAvgAggregateOutputType | null
    _sum: PrayerTimeChangeSumAggregateOutputType | null
    _min: PrayerTimeChangeMinAggregateOutputType | null
    _max: PrayerTimeChangeMaxAggregateOutputType | null
  }

  type GetPrayerTimeChangeGroupByPayload<T extends PrayerTimeChangeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrayerTimeChangeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrayerTimeChangeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrayerTimeChangeGroupByOutputType[P]>
            : GetScalarType<T[P], PrayerTimeChangeGroupByOutputType[P]>
        }
      >
    >


  export type PrayerTimeChangeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prayerId?: boolean
    prayerType?: boolean
    oldTime?: boolean
    newTime?: boolean
    shiftMinutes?: boolean
    changedAt?: boolean
    changedBy?: boolean
    prayer?: boolean | PrayerDefaultArgs<ExtArgs>
    user?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prayerTimeChange"]>

  export type PrayerTimeChangeSelectScalar = {
    id?: boolean
    prayerId?: boolean
    prayerType?: boolean
    oldTime?: boolean
    newTime?: boolean
    shiftMinutes?: boolean
    changedAt?: boolean
    changedBy?: boolean
  }

  export type PrayerTimeChangeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prayer?: boolean | PrayerDefaultArgs<ExtArgs>
    user?: boolean | AdminDefaultArgs<ExtArgs>
  }


  export type $PrayerTimeChangePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrayerTimeChange"
    objects: {
      prayer: Prisma.$PrayerPayload<ExtArgs>
      user: Prisma.$AdminPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      prayerId: number
      prayerType: string
      oldTime: string
      newTime: string
      shiftMinutes: number
      changedAt: Date
      changedBy: number
    }, ExtArgs["result"]["prayerTimeChange"]>
    composites: {}
  }


  type PrayerTimeChangeGetPayload<S extends boolean | null | undefined | PrayerTimeChangeDefaultArgs> = $Result.GetResult<Prisma.$PrayerTimeChangePayload, S>

  type PrayerTimeChangeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PrayerTimeChangeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PrayerTimeChangeCountAggregateInputType | true
    }

  export interface PrayerTimeChangeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrayerTimeChange'], meta: { name: 'PrayerTimeChange' } }
    /**
     * Find zero or one PrayerTimeChange that matches the filter.
     * @param {PrayerTimeChangeFindUniqueArgs} args - Arguments to find a PrayerTimeChange
     * @example
     * // Get one PrayerTimeChange
     * const prayerTimeChange = await prisma.prayerTimeChange.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PrayerTimeChangeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PrayerTimeChangeFindUniqueArgs<ExtArgs>>
    ): Prisma__PrayerTimeChangeClient<$Result.GetResult<Prisma.$PrayerTimeChangePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PrayerTimeChange that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PrayerTimeChangeFindUniqueOrThrowArgs} args - Arguments to find a PrayerTimeChange
     * @example
     * // Get one PrayerTimeChange
     * const prayerTimeChange = await prisma.prayerTimeChange.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PrayerTimeChangeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PrayerTimeChangeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PrayerTimeChangeClient<$Result.GetResult<Prisma.$PrayerTimeChangePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PrayerTimeChange that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerTimeChangeFindFirstArgs} args - Arguments to find a PrayerTimeChange
     * @example
     * // Get one PrayerTimeChange
     * const prayerTimeChange = await prisma.prayerTimeChange.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PrayerTimeChangeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PrayerTimeChangeFindFirstArgs<ExtArgs>>
    ): Prisma__PrayerTimeChangeClient<$Result.GetResult<Prisma.$PrayerTimeChangePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PrayerTimeChange that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerTimeChangeFindFirstOrThrowArgs} args - Arguments to find a PrayerTimeChange
     * @example
     * // Get one PrayerTimeChange
     * const prayerTimeChange = await prisma.prayerTimeChange.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PrayerTimeChangeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PrayerTimeChangeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PrayerTimeChangeClient<$Result.GetResult<Prisma.$PrayerTimeChangePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PrayerTimeChanges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerTimeChangeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrayerTimeChanges
     * const prayerTimeChanges = await prisma.prayerTimeChange.findMany()
     * 
     * // Get first 10 PrayerTimeChanges
     * const prayerTimeChanges = await prisma.prayerTimeChange.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prayerTimeChangeWithIdOnly = await prisma.prayerTimeChange.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PrayerTimeChangeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PrayerTimeChangeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrayerTimeChangePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PrayerTimeChange.
     * @param {PrayerTimeChangeCreateArgs} args - Arguments to create a PrayerTimeChange.
     * @example
     * // Create one PrayerTimeChange
     * const PrayerTimeChange = await prisma.prayerTimeChange.create({
     *   data: {
     *     // ... data to create a PrayerTimeChange
     *   }
     * })
     * 
    **/
    create<T extends PrayerTimeChangeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PrayerTimeChangeCreateArgs<ExtArgs>>
    ): Prisma__PrayerTimeChangeClient<$Result.GetResult<Prisma.$PrayerTimeChangePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PrayerTimeChanges.
     *     @param {PrayerTimeChangeCreateManyArgs} args - Arguments to create many PrayerTimeChanges.
     *     @example
     *     // Create many PrayerTimeChanges
     *     const prayerTimeChange = await prisma.prayerTimeChange.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PrayerTimeChangeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PrayerTimeChangeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PrayerTimeChange.
     * @param {PrayerTimeChangeDeleteArgs} args - Arguments to delete one PrayerTimeChange.
     * @example
     * // Delete one PrayerTimeChange
     * const PrayerTimeChange = await prisma.prayerTimeChange.delete({
     *   where: {
     *     // ... filter to delete one PrayerTimeChange
     *   }
     * })
     * 
    **/
    delete<T extends PrayerTimeChangeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PrayerTimeChangeDeleteArgs<ExtArgs>>
    ): Prisma__PrayerTimeChangeClient<$Result.GetResult<Prisma.$PrayerTimeChangePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PrayerTimeChange.
     * @param {PrayerTimeChangeUpdateArgs} args - Arguments to update one PrayerTimeChange.
     * @example
     * // Update one PrayerTimeChange
     * const prayerTimeChange = await prisma.prayerTimeChange.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PrayerTimeChangeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PrayerTimeChangeUpdateArgs<ExtArgs>>
    ): Prisma__PrayerTimeChangeClient<$Result.GetResult<Prisma.$PrayerTimeChangePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PrayerTimeChanges.
     * @param {PrayerTimeChangeDeleteManyArgs} args - Arguments to filter PrayerTimeChanges to delete.
     * @example
     * // Delete a few PrayerTimeChanges
     * const { count } = await prisma.prayerTimeChange.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PrayerTimeChangeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PrayerTimeChangeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrayerTimeChanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerTimeChangeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrayerTimeChanges
     * const prayerTimeChange = await prisma.prayerTimeChange.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PrayerTimeChangeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PrayerTimeChangeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PrayerTimeChange.
     * @param {PrayerTimeChangeUpsertArgs} args - Arguments to update or create a PrayerTimeChange.
     * @example
     * // Update or create a PrayerTimeChange
     * const prayerTimeChange = await prisma.prayerTimeChange.upsert({
     *   create: {
     *     // ... data to create a PrayerTimeChange
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrayerTimeChange we want to update
     *   }
     * })
    **/
    upsert<T extends PrayerTimeChangeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PrayerTimeChangeUpsertArgs<ExtArgs>>
    ): Prisma__PrayerTimeChangeClient<$Result.GetResult<Prisma.$PrayerTimeChangePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PrayerTimeChanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerTimeChangeCountArgs} args - Arguments to filter PrayerTimeChanges to count.
     * @example
     * // Count the number of PrayerTimeChanges
     * const count = await prisma.prayerTimeChange.count({
     *   where: {
     *     // ... the filter for the PrayerTimeChanges we want to count
     *   }
     * })
    **/
    count<T extends PrayerTimeChangeCountArgs>(
      args?: Subset<T, PrayerTimeChangeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrayerTimeChangeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrayerTimeChange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerTimeChangeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrayerTimeChangeAggregateArgs>(args: Subset<T, PrayerTimeChangeAggregateArgs>): Prisma.PrismaPromise<GetPrayerTimeChangeAggregateType<T>>

    /**
     * Group by PrayerTimeChange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerTimeChangeGroupByArgs} args - Group by arguments.
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
      T extends PrayerTimeChangeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrayerTimeChangeGroupByArgs['orderBy'] }
        : { orderBy?: PrayerTimeChangeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrayerTimeChangeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrayerTimeChangeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrayerTimeChange model
   */
  readonly fields: PrayerTimeChangeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrayerTimeChange.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrayerTimeChangeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    prayer<T extends PrayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrayerDefaultArgs<ExtArgs>>): Prisma__PrayerClient<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the PrayerTimeChange model
   */ 
  interface PrayerTimeChangeFieldRefs {
    readonly id: FieldRef<"PrayerTimeChange", 'Int'>
    readonly prayerId: FieldRef<"PrayerTimeChange", 'Int'>
    readonly prayerType: FieldRef<"PrayerTimeChange", 'String'>
    readonly oldTime: FieldRef<"PrayerTimeChange", 'String'>
    readonly newTime: FieldRef<"PrayerTimeChange", 'String'>
    readonly shiftMinutes: FieldRef<"PrayerTimeChange", 'Int'>
    readonly changedAt: FieldRef<"PrayerTimeChange", 'DateTime'>
    readonly changedBy: FieldRef<"PrayerTimeChange", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * PrayerTimeChange findUnique
   */
  export type PrayerTimeChangeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerTimeChange
     */
    select?: PrayerTimeChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrayerTimeChangeInclude<ExtArgs> | null
    /**
     * Filter, which PrayerTimeChange to fetch.
     */
    where: PrayerTimeChangeWhereUniqueInput
  }


  /**
   * PrayerTimeChange findUniqueOrThrow
   */
  export type PrayerTimeChangeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerTimeChange
     */
    select?: PrayerTimeChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrayerTimeChangeInclude<ExtArgs> | null
    /**
     * Filter, which PrayerTimeChange to fetch.
     */
    where: PrayerTimeChangeWhereUniqueInput
  }


  /**
   * PrayerTimeChange findFirst
   */
  export type PrayerTimeChangeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerTimeChange
     */
    select?: PrayerTimeChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrayerTimeChangeInclude<ExtArgs> | null
    /**
     * Filter, which PrayerTimeChange to fetch.
     */
    where?: PrayerTimeChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrayerTimeChanges to fetch.
     */
    orderBy?: PrayerTimeChangeOrderByWithRelationInput | PrayerTimeChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrayerTimeChanges.
     */
    cursor?: PrayerTimeChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrayerTimeChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrayerTimeChanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrayerTimeChanges.
     */
    distinct?: PrayerTimeChangeScalarFieldEnum | PrayerTimeChangeScalarFieldEnum[]
  }


  /**
   * PrayerTimeChange findFirstOrThrow
   */
  export type PrayerTimeChangeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerTimeChange
     */
    select?: PrayerTimeChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrayerTimeChangeInclude<ExtArgs> | null
    /**
     * Filter, which PrayerTimeChange to fetch.
     */
    where?: PrayerTimeChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrayerTimeChanges to fetch.
     */
    orderBy?: PrayerTimeChangeOrderByWithRelationInput | PrayerTimeChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrayerTimeChanges.
     */
    cursor?: PrayerTimeChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrayerTimeChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrayerTimeChanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrayerTimeChanges.
     */
    distinct?: PrayerTimeChangeScalarFieldEnum | PrayerTimeChangeScalarFieldEnum[]
  }


  /**
   * PrayerTimeChange findMany
   */
  export type PrayerTimeChangeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerTimeChange
     */
    select?: PrayerTimeChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrayerTimeChangeInclude<ExtArgs> | null
    /**
     * Filter, which PrayerTimeChanges to fetch.
     */
    where?: PrayerTimeChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrayerTimeChanges to fetch.
     */
    orderBy?: PrayerTimeChangeOrderByWithRelationInput | PrayerTimeChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrayerTimeChanges.
     */
    cursor?: PrayerTimeChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrayerTimeChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrayerTimeChanges.
     */
    skip?: number
    distinct?: PrayerTimeChangeScalarFieldEnum | PrayerTimeChangeScalarFieldEnum[]
  }


  /**
   * PrayerTimeChange create
   */
  export type PrayerTimeChangeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerTimeChange
     */
    select?: PrayerTimeChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrayerTimeChangeInclude<ExtArgs> | null
    /**
     * The data needed to create a PrayerTimeChange.
     */
    data: XOR<PrayerTimeChangeCreateInput, PrayerTimeChangeUncheckedCreateInput>
  }


  /**
   * PrayerTimeChange createMany
   */
  export type PrayerTimeChangeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrayerTimeChanges.
     */
    data: PrayerTimeChangeCreateManyInput | PrayerTimeChangeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PrayerTimeChange update
   */
  export type PrayerTimeChangeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerTimeChange
     */
    select?: PrayerTimeChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrayerTimeChangeInclude<ExtArgs> | null
    /**
     * The data needed to update a PrayerTimeChange.
     */
    data: XOR<PrayerTimeChangeUpdateInput, PrayerTimeChangeUncheckedUpdateInput>
    /**
     * Choose, which PrayerTimeChange to update.
     */
    where: PrayerTimeChangeWhereUniqueInput
  }


  /**
   * PrayerTimeChange updateMany
   */
  export type PrayerTimeChangeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrayerTimeChanges.
     */
    data: XOR<PrayerTimeChangeUpdateManyMutationInput, PrayerTimeChangeUncheckedUpdateManyInput>
    /**
     * Filter which PrayerTimeChanges to update
     */
    where?: PrayerTimeChangeWhereInput
  }


  /**
   * PrayerTimeChange upsert
   */
  export type PrayerTimeChangeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerTimeChange
     */
    select?: PrayerTimeChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrayerTimeChangeInclude<ExtArgs> | null
    /**
     * The filter to search for the PrayerTimeChange to update in case it exists.
     */
    where: PrayerTimeChangeWhereUniqueInput
    /**
     * In case the PrayerTimeChange found by the `where` argument doesn't exist, create a new PrayerTimeChange with this data.
     */
    create: XOR<PrayerTimeChangeCreateInput, PrayerTimeChangeUncheckedCreateInput>
    /**
     * In case the PrayerTimeChange was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrayerTimeChangeUpdateInput, PrayerTimeChangeUncheckedUpdateInput>
  }


  /**
   * PrayerTimeChange delete
   */
  export type PrayerTimeChangeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerTimeChange
     */
    select?: PrayerTimeChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrayerTimeChangeInclude<ExtArgs> | null
    /**
     * Filter which PrayerTimeChange to delete.
     */
    where: PrayerTimeChangeWhereUniqueInput
  }


  /**
   * PrayerTimeChange deleteMany
   */
  export type PrayerTimeChangeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrayerTimeChanges to delete
     */
    where?: PrayerTimeChangeWhereInput
  }


  /**
   * PrayerTimeChange without action
   */
  export type PrayerTimeChangeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerTimeChange
     */
    select?: PrayerTimeChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrayerTimeChangeInclude<ExtArgs> | null
  }



  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    entityId: number | null
  }

  export type AuditLogSumAggregateOutputType = {
    id: number | null
    userId: number | null
    entityId: number | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: number | null
    userId: number | null
    action: string | null
    entity: string | null
    entityId: number | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    action: string | null
    entity: string | null
    entityId: number | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    entity: number
    entityId: number
    oldValue: number
    newValue: number
    createdAt: number
    _all: number
  }


  export type AuditLogAvgAggregateInputType = {
    id?: true
    userId?: true
    entityId?: true
  }

  export type AuditLogSumAggregateInputType = {
    id?: true
    userId?: true
    entityId?: true
  }

  export type AuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    oldValue?: true
    newValue?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _avg?: AuditLogAvgAggregateInputType
    _sum?: AuditLogSumAggregateInputType
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: number
    userId: number
    action: string
    entity: string
    entityId: number
    oldValue: JsonValue | null
    newValue: JsonValue | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    oldValue?: boolean
    newValue?: boolean
    createdAt?: boolean
    user?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    oldValue?: boolean
    newValue?: boolean
    createdAt?: boolean
  }

  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AdminDefaultArgs<ExtArgs>
  }


  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      user: Prisma.$AdminPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      action: string
      entity: string
      entityId: number
      oldValue: Prisma.JsonValue | null
      newValue: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }


  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AuditLogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>
    ): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AuditLog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AuditLogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>
    ): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AuditLogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
    **/
    create<T extends AuditLogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>
    ): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AuditLogs.
     *     @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     *     @example
     *     // Create many AuditLogs
     *     const auditLog = await prisma.auditLog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AuditLogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
    **/
    delete<T extends AuditLogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>
    ): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AuditLogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>
    ): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AuditLogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AuditLogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
    **/
    upsert<T extends AuditLogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>
    ): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the AuditLog model
   */ 
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'Int'>
    readonly userId: FieldRef<"AuditLog", 'Int'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entity: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'Int'>
    readonly oldValue: FieldRef<"AuditLog", 'Json'>
    readonly newValue: FieldRef<"AuditLog", 'Json'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }


  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }


  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }


  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }


  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }


  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }


  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }


  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
  }


  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }


  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }


  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
  }


  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditLogInclude<ExtArgs> | null
  }



  /**
   * Model Translation
   */

  export type AggregateTranslation = {
    _count: TranslationCountAggregateOutputType | null
    _avg: TranslationAvgAggregateOutputType | null
    _sum: TranslationSumAggregateOutputType | null
    _min: TranslationMinAggregateOutputType | null
    _max: TranslationMaxAggregateOutputType | null
  }

  export type TranslationAvgAggregateOutputType = {
    id: number | null
  }

  export type TranslationSumAggregateOutputType = {
    id: number | null
  }

  export type TranslationMinAggregateOutputType = {
    id: number | null
    key: string | null
    ru: string | null
    tt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TranslationMaxAggregateOutputType = {
    id: number | null
    key: string | null
    ru: string | null
    tt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TranslationCountAggregateOutputType = {
    id: number
    key: number
    ru: number
    tt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TranslationAvgAggregateInputType = {
    id?: true
  }

  export type TranslationSumAggregateInputType = {
    id?: true
  }

  export type TranslationMinAggregateInputType = {
    id?: true
    key?: true
    ru?: true
    tt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TranslationMaxAggregateInputType = {
    id?: true
    key?: true
    ru?: true
    tt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TranslationCountAggregateInputType = {
    id?: true
    key?: true
    ru?: true
    tt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TranslationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Translation to aggregate.
     */
    where?: TranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Translations to fetch.
     */
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Translations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Translations
    **/
    _count?: true | TranslationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TranslationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TranslationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TranslationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TranslationMaxAggregateInputType
  }

  export type GetTranslationAggregateType<T extends TranslationAggregateArgs> = {
        [P in keyof T & keyof AggregateTranslation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTranslation[P]>
      : GetScalarType<T[P], AggregateTranslation[P]>
  }




  export type TranslationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranslationWhereInput
    orderBy?: TranslationOrderByWithAggregationInput | TranslationOrderByWithAggregationInput[]
    by: TranslationScalarFieldEnum[] | TranslationScalarFieldEnum
    having?: TranslationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TranslationCountAggregateInputType | true
    _avg?: TranslationAvgAggregateInputType
    _sum?: TranslationSumAggregateInputType
    _min?: TranslationMinAggregateInputType
    _max?: TranslationMaxAggregateInputType
  }

  export type TranslationGroupByOutputType = {
    id: number
    key: string
    ru: string
    tt: string
    createdAt: Date
    updatedAt: Date
    _count: TranslationCountAggregateOutputType | null
    _avg: TranslationAvgAggregateOutputType | null
    _sum: TranslationSumAggregateOutputType | null
    _min: TranslationMinAggregateOutputType | null
    _max: TranslationMaxAggregateOutputType | null
  }

  type GetTranslationGroupByPayload<T extends TranslationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TranslationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TranslationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TranslationGroupByOutputType[P]>
            : GetScalarType<T[P], TranslationGroupByOutputType[P]>
        }
      >
    >


  export type TranslationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    ru?: boolean
    tt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["translation"]>

  export type TranslationSelectScalar = {
    id?: boolean
    key?: boolean
    ru?: boolean
    tt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $TranslationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Translation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key: string
      ru: string
      tt: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["translation"]>
    composites: {}
  }


  type TranslationGetPayload<S extends boolean | null | undefined | TranslationDefaultArgs> = $Result.GetResult<Prisma.$TranslationPayload, S>

  type TranslationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TranslationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TranslationCountAggregateInputType | true
    }

  export interface TranslationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Translation'], meta: { name: 'Translation' } }
    /**
     * Find zero or one Translation that matches the filter.
     * @param {TranslationFindUniqueArgs} args - Arguments to find a Translation
     * @example
     * // Get one Translation
     * const translation = await prisma.translation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TranslationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TranslationFindUniqueArgs<ExtArgs>>
    ): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Translation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TranslationFindUniqueOrThrowArgs} args - Arguments to find a Translation
     * @example
     * // Get one Translation
     * const translation = await prisma.translation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TranslationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TranslationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Translation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationFindFirstArgs} args - Arguments to find a Translation
     * @example
     * // Get one Translation
     * const translation = await prisma.translation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TranslationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TranslationFindFirstArgs<ExtArgs>>
    ): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Translation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationFindFirstOrThrowArgs} args - Arguments to find a Translation
     * @example
     * // Get one Translation
     * const translation = await prisma.translation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TranslationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TranslationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Translations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Translations
     * const translations = await prisma.translation.findMany()
     * 
     * // Get first 10 Translations
     * const translations = await prisma.translation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const translationWithIdOnly = await prisma.translation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TranslationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TranslationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Translation.
     * @param {TranslationCreateArgs} args - Arguments to create a Translation.
     * @example
     * // Create one Translation
     * const Translation = await prisma.translation.create({
     *   data: {
     *     // ... data to create a Translation
     *   }
     * })
     * 
    **/
    create<T extends TranslationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TranslationCreateArgs<ExtArgs>>
    ): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Translations.
     *     @param {TranslationCreateManyArgs} args - Arguments to create many Translations.
     *     @example
     *     // Create many Translations
     *     const translation = await prisma.translation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TranslationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TranslationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Translation.
     * @param {TranslationDeleteArgs} args - Arguments to delete one Translation.
     * @example
     * // Delete one Translation
     * const Translation = await prisma.translation.delete({
     *   where: {
     *     // ... filter to delete one Translation
     *   }
     * })
     * 
    **/
    delete<T extends TranslationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TranslationDeleteArgs<ExtArgs>>
    ): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Translation.
     * @param {TranslationUpdateArgs} args - Arguments to update one Translation.
     * @example
     * // Update one Translation
     * const translation = await prisma.translation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TranslationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TranslationUpdateArgs<ExtArgs>>
    ): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Translations.
     * @param {TranslationDeleteManyArgs} args - Arguments to filter Translations to delete.
     * @example
     * // Delete a few Translations
     * const { count } = await prisma.translation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TranslationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TranslationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Translations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Translations
     * const translation = await prisma.translation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TranslationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TranslationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Translation.
     * @param {TranslationUpsertArgs} args - Arguments to update or create a Translation.
     * @example
     * // Update or create a Translation
     * const translation = await prisma.translation.upsert({
     *   create: {
     *     // ... data to create a Translation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Translation we want to update
     *   }
     * })
    **/
    upsert<T extends TranslationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TranslationUpsertArgs<ExtArgs>>
    ): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Translations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationCountArgs} args - Arguments to filter Translations to count.
     * @example
     * // Count the number of Translations
     * const count = await prisma.translation.count({
     *   where: {
     *     // ... the filter for the Translations we want to count
     *   }
     * })
    **/
    count<T extends TranslationCountArgs>(
      args?: Subset<T, TranslationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TranslationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Translation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TranslationAggregateArgs>(args: Subset<T, TranslationAggregateArgs>): Prisma.PrismaPromise<GetTranslationAggregateType<T>>

    /**
     * Group by Translation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationGroupByArgs} args - Group by arguments.
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
      T extends TranslationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TranslationGroupByArgs['orderBy'] }
        : { orderBy?: TranslationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Translation model
   */
  readonly fields: TranslationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Translation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TranslationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Translation model
   */ 
  interface TranslationFieldRefs {
    readonly id: FieldRef<"Translation", 'Int'>
    readonly key: FieldRef<"Translation", 'String'>
    readonly ru: FieldRef<"Translation", 'String'>
    readonly tt: FieldRef<"Translation", 'String'>
    readonly createdAt: FieldRef<"Translation", 'DateTime'>
    readonly updatedAt: FieldRef<"Translation", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Translation findUnique
   */
  export type TranslationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Filter, which Translation to fetch.
     */
    where: TranslationWhereUniqueInput
  }


  /**
   * Translation findUniqueOrThrow
   */
  export type TranslationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Filter, which Translation to fetch.
     */
    where: TranslationWhereUniqueInput
  }


  /**
   * Translation findFirst
   */
  export type TranslationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Filter, which Translation to fetch.
     */
    where?: TranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Translations to fetch.
     */
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Translations.
     */
    cursor?: TranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Translations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Translations.
     */
    distinct?: TranslationScalarFieldEnum | TranslationScalarFieldEnum[]
  }


  /**
   * Translation findFirstOrThrow
   */
  export type TranslationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Filter, which Translation to fetch.
     */
    where?: TranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Translations to fetch.
     */
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Translations.
     */
    cursor?: TranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Translations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Translations.
     */
    distinct?: TranslationScalarFieldEnum | TranslationScalarFieldEnum[]
  }


  /**
   * Translation findMany
   */
  export type TranslationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Filter, which Translations to fetch.
     */
    where?: TranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Translations to fetch.
     */
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Translations.
     */
    cursor?: TranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Translations.
     */
    skip?: number
    distinct?: TranslationScalarFieldEnum | TranslationScalarFieldEnum[]
  }


  /**
   * Translation create
   */
  export type TranslationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * The data needed to create a Translation.
     */
    data: XOR<TranslationCreateInput, TranslationUncheckedCreateInput>
  }


  /**
   * Translation createMany
   */
  export type TranslationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Translations.
     */
    data: TranslationCreateManyInput | TranslationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Translation update
   */
  export type TranslationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * The data needed to update a Translation.
     */
    data: XOR<TranslationUpdateInput, TranslationUncheckedUpdateInput>
    /**
     * Choose, which Translation to update.
     */
    where: TranslationWhereUniqueInput
  }


  /**
   * Translation updateMany
   */
  export type TranslationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Translations.
     */
    data: XOR<TranslationUpdateManyMutationInput, TranslationUncheckedUpdateManyInput>
    /**
     * Filter which Translations to update
     */
    where?: TranslationWhereInput
  }


  /**
   * Translation upsert
   */
  export type TranslationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * The filter to search for the Translation to update in case it exists.
     */
    where: TranslationWhereUniqueInput
    /**
     * In case the Translation found by the `where` argument doesn't exist, create a new Translation with this data.
     */
    create: XOR<TranslationCreateInput, TranslationUncheckedCreateInput>
    /**
     * In case the Translation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TranslationUpdateInput, TranslationUncheckedUpdateInput>
  }


  /**
   * Translation delete
   */
  export type TranslationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Filter which Translation to delete.
     */
    where: TranslationWhereUniqueInput
  }


  /**
   * Translation deleteMany
   */
  export type TranslationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Translations to delete
     */
    where?: TranslationWhereInput
  }


  /**
   * Translation without action
   */
  export type TranslationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
  }



  /**
   * Model MosqueLanguageSettings
   */

  export type AggregateMosqueLanguageSettings = {
    _count: MosqueLanguageSettingsCountAggregateOutputType | null
    _avg: MosqueLanguageSettingsAvgAggregateOutputType | null
    _sum: MosqueLanguageSettingsSumAggregateOutputType | null
    _min: MosqueLanguageSettingsMinAggregateOutputType | null
    _max: MosqueLanguageSettingsMaxAggregateOutputType | null
  }

  export type MosqueLanguageSettingsAvgAggregateOutputType = {
    id: number | null
    mosqueId: number | null
    languageToggleIntervalSeconds: number | null
  }

  export type MosqueLanguageSettingsSumAggregateOutputType = {
    id: number | null
    mosqueId: number | null
    languageToggleIntervalSeconds: number | null
  }

  export type MosqueLanguageSettingsMinAggregateOutputType = {
    id: number | null
    mosqueId: number | null
    translationsEnabled: boolean | null
    languageToggleEnabled: boolean | null
    languageToggleIntervalSeconds: number | null
    fridayZuhrAsJomgaEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MosqueLanguageSettingsMaxAggregateOutputType = {
    id: number | null
    mosqueId: number | null
    translationsEnabled: boolean | null
    languageToggleEnabled: boolean | null
    languageToggleIntervalSeconds: number | null
    fridayZuhrAsJomgaEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MosqueLanguageSettingsCountAggregateOutputType = {
    id: number
    mosqueId: number
    translationsEnabled: number
    languageToggleEnabled: number
    languageToggleIntervalSeconds: number
    fridayZuhrAsJomgaEnabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MosqueLanguageSettingsAvgAggregateInputType = {
    id?: true
    mosqueId?: true
    languageToggleIntervalSeconds?: true
  }

  export type MosqueLanguageSettingsSumAggregateInputType = {
    id?: true
    mosqueId?: true
    languageToggleIntervalSeconds?: true
  }

  export type MosqueLanguageSettingsMinAggregateInputType = {
    id?: true
    mosqueId?: true
    translationsEnabled?: true
    languageToggleEnabled?: true
    languageToggleIntervalSeconds?: true
    fridayZuhrAsJomgaEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MosqueLanguageSettingsMaxAggregateInputType = {
    id?: true
    mosqueId?: true
    translationsEnabled?: true
    languageToggleEnabled?: true
    languageToggleIntervalSeconds?: true
    fridayZuhrAsJomgaEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MosqueLanguageSettingsCountAggregateInputType = {
    id?: true
    mosqueId?: true
    translationsEnabled?: true
    languageToggleEnabled?: true
    languageToggleIntervalSeconds?: true
    fridayZuhrAsJomgaEnabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MosqueLanguageSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MosqueLanguageSettings to aggregate.
     */
    where?: MosqueLanguageSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MosqueLanguageSettings to fetch.
     */
    orderBy?: MosqueLanguageSettingsOrderByWithRelationInput | MosqueLanguageSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MosqueLanguageSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MosqueLanguageSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MosqueLanguageSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MosqueLanguageSettings
    **/
    _count?: true | MosqueLanguageSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MosqueLanguageSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MosqueLanguageSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MosqueLanguageSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MosqueLanguageSettingsMaxAggregateInputType
  }

  export type GetMosqueLanguageSettingsAggregateType<T extends MosqueLanguageSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateMosqueLanguageSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMosqueLanguageSettings[P]>
      : GetScalarType<T[P], AggregateMosqueLanguageSettings[P]>
  }




  export type MosqueLanguageSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MosqueLanguageSettingsWhereInput
    orderBy?: MosqueLanguageSettingsOrderByWithAggregationInput | MosqueLanguageSettingsOrderByWithAggregationInput[]
    by: MosqueLanguageSettingsScalarFieldEnum[] | MosqueLanguageSettingsScalarFieldEnum
    having?: MosqueLanguageSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MosqueLanguageSettingsCountAggregateInputType | true
    _avg?: MosqueLanguageSettingsAvgAggregateInputType
    _sum?: MosqueLanguageSettingsSumAggregateInputType
    _min?: MosqueLanguageSettingsMinAggregateInputType
    _max?: MosqueLanguageSettingsMaxAggregateInputType
  }

  export type MosqueLanguageSettingsGroupByOutputType = {
    id: number
    mosqueId: number
    translationsEnabled: boolean
    languageToggleEnabled: boolean
    languageToggleIntervalSeconds: number
    fridayZuhrAsJomgaEnabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: MosqueLanguageSettingsCountAggregateOutputType | null
    _avg: MosqueLanguageSettingsAvgAggregateOutputType | null
    _sum: MosqueLanguageSettingsSumAggregateOutputType | null
    _min: MosqueLanguageSettingsMinAggregateOutputType | null
    _max: MosqueLanguageSettingsMaxAggregateOutputType | null
  }

  type GetMosqueLanguageSettingsGroupByPayload<T extends MosqueLanguageSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MosqueLanguageSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MosqueLanguageSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MosqueLanguageSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], MosqueLanguageSettingsGroupByOutputType[P]>
        }
      >
    >


  export type MosqueLanguageSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mosqueId?: boolean
    translationsEnabled?: boolean
    languageToggleEnabled?: boolean
    languageToggleIntervalSeconds?: boolean
    fridayZuhrAsJomgaEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mosque?: boolean | MosqueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mosqueLanguageSettings"]>

  export type MosqueLanguageSettingsSelectScalar = {
    id?: boolean
    mosqueId?: boolean
    translationsEnabled?: boolean
    languageToggleEnabled?: boolean
    languageToggleIntervalSeconds?: boolean
    fridayZuhrAsJomgaEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MosqueLanguageSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mosque?: boolean | MosqueDefaultArgs<ExtArgs>
  }


  export type $MosqueLanguageSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MosqueLanguageSettings"
    objects: {
      mosque: Prisma.$MosquePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mosqueId: number
      translationsEnabled: boolean
      languageToggleEnabled: boolean
      languageToggleIntervalSeconds: number
      fridayZuhrAsJomgaEnabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mosqueLanguageSettings"]>
    composites: {}
  }


  type MosqueLanguageSettingsGetPayload<S extends boolean | null | undefined | MosqueLanguageSettingsDefaultArgs> = $Result.GetResult<Prisma.$MosqueLanguageSettingsPayload, S>

  type MosqueLanguageSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MosqueLanguageSettingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MosqueLanguageSettingsCountAggregateInputType | true
    }

  export interface MosqueLanguageSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MosqueLanguageSettings'], meta: { name: 'MosqueLanguageSettings' } }
    /**
     * Find zero or one MosqueLanguageSettings that matches the filter.
     * @param {MosqueLanguageSettingsFindUniqueArgs} args - Arguments to find a MosqueLanguageSettings
     * @example
     * // Get one MosqueLanguageSettings
     * const mosqueLanguageSettings = await prisma.mosqueLanguageSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MosqueLanguageSettingsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MosqueLanguageSettingsFindUniqueArgs<ExtArgs>>
    ): Prisma__MosqueLanguageSettingsClient<$Result.GetResult<Prisma.$MosqueLanguageSettingsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MosqueLanguageSettings that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MosqueLanguageSettingsFindUniqueOrThrowArgs} args - Arguments to find a MosqueLanguageSettings
     * @example
     * // Get one MosqueLanguageSettings
     * const mosqueLanguageSettings = await prisma.mosqueLanguageSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MosqueLanguageSettingsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MosqueLanguageSettingsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MosqueLanguageSettingsClient<$Result.GetResult<Prisma.$MosqueLanguageSettingsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MosqueLanguageSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueLanguageSettingsFindFirstArgs} args - Arguments to find a MosqueLanguageSettings
     * @example
     * // Get one MosqueLanguageSettings
     * const mosqueLanguageSettings = await prisma.mosqueLanguageSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MosqueLanguageSettingsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MosqueLanguageSettingsFindFirstArgs<ExtArgs>>
    ): Prisma__MosqueLanguageSettingsClient<$Result.GetResult<Prisma.$MosqueLanguageSettingsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MosqueLanguageSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueLanguageSettingsFindFirstOrThrowArgs} args - Arguments to find a MosqueLanguageSettings
     * @example
     * // Get one MosqueLanguageSettings
     * const mosqueLanguageSettings = await prisma.mosqueLanguageSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MosqueLanguageSettingsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MosqueLanguageSettingsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MosqueLanguageSettingsClient<$Result.GetResult<Prisma.$MosqueLanguageSettingsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MosqueLanguageSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueLanguageSettingsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MosqueLanguageSettings
     * const mosqueLanguageSettings = await prisma.mosqueLanguageSettings.findMany()
     * 
     * // Get first 10 MosqueLanguageSettings
     * const mosqueLanguageSettings = await prisma.mosqueLanguageSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mosqueLanguageSettingsWithIdOnly = await prisma.mosqueLanguageSettings.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MosqueLanguageSettingsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MosqueLanguageSettingsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MosqueLanguageSettingsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MosqueLanguageSettings.
     * @param {MosqueLanguageSettingsCreateArgs} args - Arguments to create a MosqueLanguageSettings.
     * @example
     * // Create one MosqueLanguageSettings
     * const MosqueLanguageSettings = await prisma.mosqueLanguageSettings.create({
     *   data: {
     *     // ... data to create a MosqueLanguageSettings
     *   }
     * })
     * 
    **/
    create<T extends MosqueLanguageSettingsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MosqueLanguageSettingsCreateArgs<ExtArgs>>
    ): Prisma__MosqueLanguageSettingsClient<$Result.GetResult<Prisma.$MosqueLanguageSettingsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MosqueLanguageSettings.
     *     @param {MosqueLanguageSettingsCreateManyArgs} args - Arguments to create many MosqueLanguageSettings.
     *     @example
     *     // Create many MosqueLanguageSettings
     *     const mosqueLanguageSettings = await prisma.mosqueLanguageSettings.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MosqueLanguageSettingsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MosqueLanguageSettingsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MosqueLanguageSettings.
     * @param {MosqueLanguageSettingsDeleteArgs} args - Arguments to delete one MosqueLanguageSettings.
     * @example
     * // Delete one MosqueLanguageSettings
     * const MosqueLanguageSettings = await prisma.mosqueLanguageSettings.delete({
     *   where: {
     *     // ... filter to delete one MosqueLanguageSettings
     *   }
     * })
     * 
    **/
    delete<T extends MosqueLanguageSettingsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MosqueLanguageSettingsDeleteArgs<ExtArgs>>
    ): Prisma__MosqueLanguageSettingsClient<$Result.GetResult<Prisma.$MosqueLanguageSettingsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MosqueLanguageSettings.
     * @param {MosqueLanguageSettingsUpdateArgs} args - Arguments to update one MosqueLanguageSettings.
     * @example
     * // Update one MosqueLanguageSettings
     * const mosqueLanguageSettings = await prisma.mosqueLanguageSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MosqueLanguageSettingsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MosqueLanguageSettingsUpdateArgs<ExtArgs>>
    ): Prisma__MosqueLanguageSettingsClient<$Result.GetResult<Prisma.$MosqueLanguageSettingsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MosqueLanguageSettings.
     * @param {MosqueLanguageSettingsDeleteManyArgs} args - Arguments to filter MosqueLanguageSettings to delete.
     * @example
     * // Delete a few MosqueLanguageSettings
     * const { count } = await prisma.mosqueLanguageSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MosqueLanguageSettingsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MosqueLanguageSettingsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MosqueLanguageSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueLanguageSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MosqueLanguageSettings
     * const mosqueLanguageSettings = await prisma.mosqueLanguageSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MosqueLanguageSettingsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MosqueLanguageSettingsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MosqueLanguageSettings.
     * @param {MosqueLanguageSettingsUpsertArgs} args - Arguments to update or create a MosqueLanguageSettings.
     * @example
     * // Update or create a MosqueLanguageSettings
     * const mosqueLanguageSettings = await prisma.mosqueLanguageSettings.upsert({
     *   create: {
     *     // ... data to create a MosqueLanguageSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MosqueLanguageSettings we want to update
     *   }
     * })
    **/
    upsert<T extends MosqueLanguageSettingsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MosqueLanguageSettingsUpsertArgs<ExtArgs>>
    ): Prisma__MosqueLanguageSettingsClient<$Result.GetResult<Prisma.$MosqueLanguageSettingsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MosqueLanguageSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueLanguageSettingsCountArgs} args - Arguments to filter MosqueLanguageSettings to count.
     * @example
     * // Count the number of MosqueLanguageSettings
     * const count = await prisma.mosqueLanguageSettings.count({
     *   where: {
     *     // ... the filter for the MosqueLanguageSettings we want to count
     *   }
     * })
    **/
    count<T extends MosqueLanguageSettingsCountArgs>(
      args?: Subset<T, MosqueLanguageSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MosqueLanguageSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MosqueLanguageSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueLanguageSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MosqueLanguageSettingsAggregateArgs>(args: Subset<T, MosqueLanguageSettingsAggregateArgs>): Prisma.PrismaPromise<GetMosqueLanguageSettingsAggregateType<T>>

    /**
     * Group by MosqueLanguageSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueLanguageSettingsGroupByArgs} args - Group by arguments.
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
      T extends MosqueLanguageSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MosqueLanguageSettingsGroupByArgs['orderBy'] }
        : { orderBy?: MosqueLanguageSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MosqueLanguageSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMosqueLanguageSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MosqueLanguageSettings model
   */
  readonly fields: MosqueLanguageSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MosqueLanguageSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MosqueLanguageSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MosqueLanguageSettings model
   */ 
  interface MosqueLanguageSettingsFieldRefs {
    readonly id: FieldRef<"MosqueLanguageSettings", 'Int'>
    readonly mosqueId: FieldRef<"MosqueLanguageSettings", 'Int'>
    readonly translationsEnabled: FieldRef<"MosqueLanguageSettings", 'Boolean'>
    readonly languageToggleEnabled: FieldRef<"MosqueLanguageSettings", 'Boolean'>
    readonly languageToggleIntervalSeconds: FieldRef<"MosqueLanguageSettings", 'Int'>
    readonly fridayZuhrAsJomgaEnabled: FieldRef<"MosqueLanguageSettings", 'Boolean'>
    readonly createdAt: FieldRef<"MosqueLanguageSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"MosqueLanguageSettings", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * MosqueLanguageSettings findUnique
   */
  export type MosqueLanguageSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MosqueLanguageSettings
     */
    select?: MosqueLanguageSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MosqueLanguageSettingsInclude<ExtArgs> | null
    /**
     * Filter, which MosqueLanguageSettings to fetch.
     */
    where: MosqueLanguageSettingsWhereUniqueInput
  }


  /**
   * MosqueLanguageSettings findUniqueOrThrow
   */
  export type MosqueLanguageSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MosqueLanguageSettings
     */
    select?: MosqueLanguageSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MosqueLanguageSettingsInclude<ExtArgs> | null
    /**
     * Filter, which MosqueLanguageSettings to fetch.
     */
    where: MosqueLanguageSettingsWhereUniqueInput
  }


  /**
   * MosqueLanguageSettings findFirst
   */
  export type MosqueLanguageSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MosqueLanguageSettings
     */
    select?: MosqueLanguageSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MosqueLanguageSettingsInclude<ExtArgs> | null
    /**
     * Filter, which MosqueLanguageSettings to fetch.
     */
    where?: MosqueLanguageSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MosqueLanguageSettings to fetch.
     */
    orderBy?: MosqueLanguageSettingsOrderByWithRelationInput | MosqueLanguageSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MosqueLanguageSettings.
     */
    cursor?: MosqueLanguageSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MosqueLanguageSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MosqueLanguageSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MosqueLanguageSettings.
     */
    distinct?: MosqueLanguageSettingsScalarFieldEnum | MosqueLanguageSettingsScalarFieldEnum[]
  }


  /**
   * MosqueLanguageSettings findFirstOrThrow
   */
  export type MosqueLanguageSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MosqueLanguageSettings
     */
    select?: MosqueLanguageSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MosqueLanguageSettingsInclude<ExtArgs> | null
    /**
     * Filter, which MosqueLanguageSettings to fetch.
     */
    where?: MosqueLanguageSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MosqueLanguageSettings to fetch.
     */
    orderBy?: MosqueLanguageSettingsOrderByWithRelationInput | MosqueLanguageSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MosqueLanguageSettings.
     */
    cursor?: MosqueLanguageSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MosqueLanguageSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MosqueLanguageSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MosqueLanguageSettings.
     */
    distinct?: MosqueLanguageSettingsScalarFieldEnum | MosqueLanguageSettingsScalarFieldEnum[]
  }


  /**
   * MosqueLanguageSettings findMany
   */
  export type MosqueLanguageSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MosqueLanguageSettings
     */
    select?: MosqueLanguageSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MosqueLanguageSettingsInclude<ExtArgs> | null
    /**
     * Filter, which MosqueLanguageSettings to fetch.
     */
    where?: MosqueLanguageSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MosqueLanguageSettings to fetch.
     */
    orderBy?: MosqueLanguageSettingsOrderByWithRelationInput | MosqueLanguageSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MosqueLanguageSettings.
     */
    cursor?: MosqueLanguageSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MosqueLanguageSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MosqueLanguageSettings.
     */
    skip?: number
    distinct?: MosqueLanguageSettingsScalarFieldEnum | MosqueLanguageSettingsScalarFieldEnum[]
  }


  /**
   * MosqueLanguageSettings create
   */
  export type MosqueLanguageSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MosqueLanguageSettings
     */
    select?: MosqueLanguageSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MosqueLanguageSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a MosqueLanguageSettings.
     */
    data: XOR<MosqueLanguageSettingsCreateInput, MosqueLanguageSettingsUncheckedCreateInput>
  }


  /**
   * MosqueLanguageSettings createMany
   */
  export type MosqueLanguageSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MosqueLanguageSettings.
     */
    data: MosqueLanguageSettingsCreateManyInput | MosqueLanguageSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * MosqueLanguageSettings update
   */
  export type MosqueLanguageSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MosqueLanguageSettings
     */
    select?: MosqueLanguageSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MosqueLanguageSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a MosqueLanguageSettings.
     */
    data: XOR<MosqueLanguageSettingsUpdateInput, MosqueLanguageSettingsUncheckedUpdateInput>
    /**
     * Choose, which MosqueLanguageSettings to update.
     */
    where: MosqueLanguageSettingsWhereUniqueInput
  }


  /**
   * MosqueLanguageSettings updateMany
   */
  export type MosqueLanguageSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MosqueLanguageSettings.
     */
    data: XOR<MosqueLanguageSettingsUpdateManyMutationInput, MosqueLanguageSettingsUncheckedUpdateManyInput>
    /**
     * Filter which MosqueLanguageSettings to update
     */
    where?: MosqueLanguageSettingsWhereInput
  }


  /**
   * MosqueLanguageSettings upsert
   */
  export type MosqueLanguageSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MosqueLanguageSettings
     */
    select?: MosqueLanguageSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MosqueLanguageSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the MosqueLanguageSettings to update in case it exists.
     */
    where: MosqueLanguageSettingsWhereUniqueInput
    /**
     * In case the MosqueLanguageSettings found by the `where` argument doesn't exist, create a new MosqueLanguageSettings with this data.
     */
    create: XOR<MosqueLanguageSettingsCreateInput, MosqueLanguageSettingsUncheckedCreateInput>
    /**
     * In case the MosqueLanguageSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MosqueLanguageSettingsUpdateInput, MosqueLanguageSettingsUncheckedUpdateInput>
  }


  /**
   * MosqueLanguageSettings delete
   */
  export type MosqueLanguageSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MosqueLanguageSettings
     */
    select?: MosqueLanguageSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MosqueLanguageSettingsInclude<ExtArgs> | null
    /**
     * Filter which MosqueLanguageSettings to delete.
     */
    where: MosqueLanguageSettingsWhereUniqueInput
  }


  /**
   * MosqueLanguageSettings deleteMany
   */
  export type MosqueLanguageSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MosqueLanguageSettings to delete
     */
    where?: MosqueLanguageSettingsWhereInput
  }


  /**
   * MosqueLanguageSettings without action
   */
  export type MosqueLanguageSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MosqueLanguageSettings
     */
    select?: MosqueLanguageSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MosqueLanguageSettingsInclude<ExtArgs> | null
  }



  /**
   * Model NameOfAllah
   */

  export type AggregateNameOfAllah = {
    _count: NameOfAllahCountAggregateOutputType | null
    _avg: NameOfAllahAvgAggregateOutputType | null
    _sum: NameOfAllahSumAggregateOutputType | null
    _min: NameOfAllahMinAggregateOutputType | null
    _max: NameOfAllahMaxAggregateOutputType | null
  }

  export type NameOfAllahAvgAggregateOutputType = {
    id: number | null
    mosqueId: number | null
  }

  export type NameOfAllahSumAggregateOutputType = {
    id: number | null
    mosqueId: number | null
  }

  export type NameOfAllahMinAggregateOutputType = {
    id: number | null
    mosqueId: number | null
    arabic: string | null
    transcription: string | null
    meaning: string | null
    transcriptionTatar: string | null
    meaningTatar: string | null
    isEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NameOfAllahMaxAggregateOutputType = {
    id: number | null
    mosqueId: number | null
    arabic: string | null
    transcription: string | null
    meaning: string | null
    transcriptionTatar: string | null
    meaningTatar: string | null
    isEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NameOfAllahCountAggregateOutputType = {
    id: number
    mosqueId: number
    arabic: number
    transcription: number
    meaning: number
    transcriptionTatar: number
    meaningTatar: number
    isEnabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NameOfAllahAvgAggregateInputType = {
    id?: true
    mosqueId?: true
  }

  export type NameOfAllahSumAggregateInputType = {
    id?: true
    mosqueId?: true
  }

  export type NameOfAllahMinAggregateInputType = {
    id?: true
    mosqueId?: true
    arabic?: true
    transcription?: true
    meaning?: true
    transcriptionTatar?: true
    meaningTatar?: true
    isEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NameOfAllahMaxAggregateInputType = {
    id?: true
    mosqueId?: true
    arabic?: true
    transcription?: true
    meaning?: true
    transcriptionTatar?: true
    meaningTatar?: true
    isEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NameOfAllahCountAggregateInputType = {
    id?: true
    mosqueId?: true
    arabic?: true
    transcription?: true
    meaning?: true
    transcriptionTatar?: true
    meaningTatar?: true
    isEnabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NameOfAllahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NameOfAllah to aggregate.
     */
    where?: NameOfAllahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NameOfAllahs to fetch.
     */
    orderBy?: NameOfAllahOrderByWithRelationInput | NameOfAllahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NameOfAllahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NameOfAllahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NameOfAllahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NameOfAllahs
    **/
    _count?: true | NameOfAllahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NameOfAllahAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NameOfAllahSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NameOfAllahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NameOfAllahMaxAggregateInputType
  }

  export type GetNameOfAllahAggregateType<T extends NameOfAllahAggregateArgs> = {
        [P in keyof T & keyof AggregateNameOfAllah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNameOfAllah[P]>
      : GetScalarType<T[P], AggregateNameOfAllah[P]>
  }




  export type NameOfAllahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NameOfAllahWhereInput
    orderBy?: NameOfAllahOrderByWithAggregationInput | NameOfAllahOrderByWithAggregationInput[]
    by: NameOfAllahScalarFieldEnum[] | NameOfAllahScalarFieldEnum
    having?: NameOfAllahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NameOfAllahCountAggregateInputType | true
    _avg?: NameOfAllahAvgAggregateInputType
    _sum?: NameOfAllahSumAggregateInputType
    _min?: NameOfAllahMinAggregateInputType
    _max?: NameOfAllahMaxAggregateInputType
  }

  export type NameOfAllahGroupByOutputType = {
    id: number
    mosqueId: number
    arabic: string
    transcription: string
    meaning: string
    transcriptionTatar: string | null
    meaningTatar: string | null
    isEnabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: NameOfAllahCountAggregateOutputType | null
    _avg: NameOfAllahAvgAggregateOutputType | null
    _sum: NameOfAllahSumAggregateOutputType | null
    _min: NameOfAllahMinAggregateOutputType | null
    _max: NameOfAllahMaxAggregateOutputType | null
  }

  type GetNameOfAllahGroupByPayload<T extends NameOfAllahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NameOfAllahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NameOfAllahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NameOfAllahGroupByOutputType[P]>
            : GetScalarType<T[P], NameOfAllahGroupByOutputType[P]>
        }
      >
    >


  export type NameOfAllahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mosqueId?: boolean
    arabic?: boolean
    transcription?: boolean
    meaning?: boolean
    transcriptionTatar?: boolean
    meaningTatar?: boolean
    isEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mosque?: boolean | MosqueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nameOfAllah"]>

  export type NameOfAllahSelectScalar = {
    id?: boolean
    mosqueId?: boolean
    arabic?: boolean
    transcription?: boolean
    meaning?: boolean
    transcriptionTatar?: boolean
    meaningTatar?: boolean
    isEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NameOfAllahInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mosque?: boolean | MosqueDefaultArgs<ExtArgs>
  }


  export type $NameOfAllahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NameOfAllah"
    objects: {
      mosque: Prisma.$MosquePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mosqueId: number
      arabic: string
      transcription: string
      meaning: string
      transcriptionTatar: string | null
      meaningTatar: string | null
      isEnabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["nameOfAllah"]>
    composites: {}
  }


  type NameOfAllahGetPayload<S extends boolean | null | undefined | NameOfAllahDefaultArgs> = $Result.GetResult<Prisma.$NameOfAllahPayload, S>

  type NameOfAllahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NameOfAllahFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NameOfAllahCountAggregateInputType | true
    }

  export interface NameOfAllahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NameOfAllah'], meta: { name: 'NameOfAllah' } }
    /**
     * Find zero or one NameOfAllah that matches the filter.
     * @param {NameOfAllahFindUniqueArgs} args - Arguments to find a NameOfAllah
     * @example
     * // Get one NameOfAllah
     * const nameOfAllah = await prisma.nameOfAllah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NameOfAllahFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NameOfAllahFindUniqueArgs<ExtArgs>>
    ): Prisma__NameOfAllahClient<$Result.GetResult<Prisma.$NameOfAllahPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one NameOfAllah that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NameOfAllahFindUniqueOrThrowArgs} args - Arguments to find a NameOfAllah
     * @example
     * // Get one NameOfAllah
     * const nameOfAllah = await prisma.nameOfAllah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NameOfAllahFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NameOfAllahFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NameOfAllahClient<$Result.GetResult<Prisma.$NameOfAllahPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first NameOfAllah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NameOfAllahFindFirstArgs} args - Arguments to find a NameOfAllah
     * @example
     * // Get one NameOfAllah
     * const nameOfAllah = await prisma.nameOfAllah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NameOfAllahFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NameOfAllahFindFirstArgs<ExtArgs>>
    ): Prisma__NameOfAllahClient<$Result.GetResult<Prisma.$NameOfAllahPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first NameOfAllah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NameOfAllahFindFirstOrThrowArgs} args - Arguments to find a NameOfAllah
     * @example
     * // Get one NameOfAllah
     * const nameOfAllah = await prisma.nameOfAllah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NameOfAllahFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NameOfAllahFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NameOfAllahClient<$Result.GetResult<Prisma.$NameOfAllahPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more NameOfAllahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NameOfAllahFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NameOfAllahs
     * const nameOfAllahs = await prisma.nameOfAllah.findMany()
     * 
     * // Get first 10 NameOfAllahs
     * const nameOfAllahs = await prisma.nameOfAllah.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nameOfAllahWithIdOnly = await prisma.nameOfAllah.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NameOfAllahFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NameOfAllahFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NameOfAllahPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a NameOfAllah.
     * @param {NameOfAllahCreateArgs} args - Arguments to create a NameOfAllah.
     * @example
     * // Create one NameOfAllah
     * const NameOfAllah = await prisma.nameOfAllah.create({
     *   data: {
     *     // ... data to create a NameOfAllah
     *   }
     * })
     * 
    **/
    create<T extends NameOfAllahCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NameOfAllahCreateArgs<ExtArgs>>
    ): Prisma__NameOfAllahClient<$Result.GetResult<Prisma.$NameOfAllahPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many NameOfAllahs.
     *     @param {NameOfAllahCreateManyArgs} args - Arguments to create many NameOfAllahs.
     *     @example
     *     // Create many NameOfAllahs
     *     const nameOfAllah = await prisma.nameOfAllah.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NameOfAllahCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NameOfAllahCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NameOfAllah.
     * @param {NameOfAllahDeleteArgs} args - Arguments to delete one NameOfAllah.
     * @example
     * // Delete one NameOfAllah
     * const NameOfAllah = await prisma.nameOfAllah.delete({
     *   where: {
     *     // ... filter to delete one NameOfAllah
     *   }
     * })
     * 
    **/
    delete<T extends NameOfAllahDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NameOfAllahDeleteArgs<ExtArgs>>
    ): Prisma__NameOfAllahClient<$Result.GetResult<Prisma.$NameOfAllahPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one NameOfAllah.
     * @param {NameOfAllahUpdateArgs} args - Arguments to update one NameOfAllah.
     * @example
     * // Update one NameOfAllah
     * const nameOfAllah = await prisma.nameOfAllah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NameOfAllahUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NameOfAllahUpdateArgs<ExtArgs>>
    ): Prisma__NameOfAllahClient<$Result.GetResult<Prisma.$NameOfAllahPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more NameOfAllahs.
     * @param {NameOfAllahDeleteManyArgs} args - Arguments to filter NameOfAllahs to delete.
     * @example
     * // Delete a few NameOfAllahs
     * const { count } = await prisma.nameOfAllah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NameOfAllahDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NameOfAllahDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NameOfAllahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NameOfAllahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NameOfAllahs
     * const nameOfAllah = await prisma.nameOfAllah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NameOfAllahUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NameOfAllahUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NameOfAllah.
     * @param {NameOfAllahUpsertArgs} args - Arguments to update or create a NameOfAllah.
     * @example
     * // Update or create a NameOfAllah
     * const nameOfAllah = await prisma.nameOfAllah.upsert({
     *   create: {
     *     // ... data to create a NameOfAllah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NameOfAllah we want to update
     *   }
     * })
    **/
    upsert<T extends NameOfAllahUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NameOfAllahUpsertArgs<ExtArgs>>
    ): Prisma__NameOfAllahClient<$Result.GetResult<Prisma.$NameOfAllahPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of NameOfAllahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NameOfAllahCountArgs} args - Arguments to filter NameOfAllahs to count.
     * @example
     * // Count the number of NameOfAllahs
     * const count = await prisma.nameOfAllah.count({
     *   where: {
     *     // ... the filter for the NameOfAllahs we want to count
     *   }
     * })
    **/
    count<T extends NameOfAllahCountArgs>(
      args?: Subset<T, NameOfAllahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NameOfAllahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NameOfAllah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NameOfAllahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NameOfAllahAggregateArgs>(args: Subset<T, NameOfAllahAggregateArgs>): Prisma.PrismaPromise<GetNameOfAllahAggregateType<T>>

    /**
     * Group by NameOfAllah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NameOfAllahGroupByArgs} args - Group by arguments.
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
      T extends NameOfAllahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NameOfAllahGroupByArgs['orderBy'] }
        : { orderBy?: NameOfAllahGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NameOfAllahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNameOfAllahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NameOfAllah model
   */
  readonly fields: NameOfAllahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NameOfAllah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NameOfAllahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the NameOfAllah model
   */ 
  interface NameOfAllahFieldRefs {
    readonly id: FieldRef<"NameOfAllah", 'Int'>
    readonly mosqueId: FieldRef<"NameOfAllah", 'Int'>
    readonly arabic: FieldRef<"NameOfAllah", 'String'>
    readonly transcription: FieldRef<"NameOfAllah", 'String'>
    readonly meaning: FieldRef<"NameOfAllah", 'String'>
    readonly transcriptionTatar: FieldRef<"NameOfAllah", 'String'>
    readonly meaningTatar: FieldRef<"NameOfAllah", 'String'>
    readonly isEnabled: FieldRef<"NameOfAllah", 'Boolean'>
    readonly createdAt: FieldRef<"NameOfAllah", 'DateTime'>
    readonly updatedAt: FieldRef<"NameOfAllah", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * NameOfAllah findUnique
   */
  export type NameOfAllahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NameOfAllah
     */
    select?: NameOfAllahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NameOfAllahInclude<ExtArgs> | null
    /**
     * Filter, which NameOfAllah to fetch.
     */
    where: NameOfAllahWhereUniqueInput
  }


  /**
   * NameOfAllah findUniqueOrThrow
   */
  export type NameOfAllahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NameOfAllah
     */
    select?: NameOfAllahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NameOfAllahInclude<ExtArgs> | null
    /**
     * Filter, which NameOfAllah to fetch.
     */
    where: NameOfAllahWhereUniqueInput
  }


  /**
   * NameOfAllah findFirst
   */
  export type NameOfAllahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NameOfAllah
     */
    select?: NameOfAllahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NameOfAllahInclude<ExtArgs> | null
    /**
     * Filter, which NameOfAllah to fetch.
     */
    where?: NameOfAllahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NameOfAllahs to fetch.
     */
    orderBy?: NameOfAllahOrderByWithRelationInput | NameOfAllahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NameOfAllahs.
     */
    cursor?: NameOfAllahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NameOfAllahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NameOfAllahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NameOfAllahs.
     */
    distinct?: NameOfAllahScalarFieldEnum | NameOfAllahScalarFieldEnum[]
  }


  /**
   * NameOfAllah findFirstOrThrow
   */
  export type NameOfAllahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NameOfAllah
     */
    select?: NameOfAllahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NameOfAllahInclude<ExtArgs> | null
    /**
     * Filter, which NameOfAllah to fetch.
     */
    where?: NameOfAllahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NameOfAllahs to fetch.
     */
    orderBy?: NameOfAllahOrderByWithRelationInput | NameOfAllahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NameOfAllahs.
     */
    cursor?: NameOfAllahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NameOfAllahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NameOfAllahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NameOfAllahs.
     */
    distinct?: NameOfAllahScalarFieldEnum | NameOfAllahScalarFieldEnum[]
  }


  /**
   * NameOfAllah findMany
   */
  export type NameOfAllahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NameOfAllah
     */
    select?: NameOfAllahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NameOfAllahInclude<ExtArgs> | null
    /**
     * Filter, which NameOfAllahs to fetch.
     */
    where?: NameOfAllahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NameOfAllahs to fetch.
     */
    orderBy?: NameOfAllahOrderByWithRelationInput | NameOfAllahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NameOfAllahs.
     */
    cursor?: NameOfAllahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NameOfAllahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NameOfAllahs.
     */
    skip?: number
    distinct?: NameOfAllahScalarFieldEnum | NameOfAllahScalarFieldEnum[]
  }


  /**
   * NameOfAllah create
   */
  export type NameOfAllahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NameOfAllah
     */
    select?: NameOfAllahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NameOfAllahInclude<ExtArgs> | null
    /**
     * The data needed to create a NameOfAllah.
     */
    data: XOR<NameOfAllahCreateInput, NameOfAllahUncheckedCreateInput>
  }


  /**
   * NameOfAllah createMany
   */
  export type NameOfAllahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NameOfAllahs.
     */
    data: NameOfAllahCreateManyInput | NameOfAllahCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * NameOfAllah update
   */
  export type NameOfAllahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NameOfAllah
     */
    select?: NameOfAllahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NameOfAllahInclude<ExtArgs> | null
    /**
     * The data needed to update a NameOfAllah.
     */
    data: XOR<NameOfAllahUpdateInput, NameOfAllahUncheckedUpdateInput>
    /**
     * Choose, which NameOfAllah to update.
     */
    where: NameOfAllahWhereUniqueInput
  }


  /**
   * NameOfAllah updateMany
   */
  export type NameOfAllahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NameOfAllahs.
     */
    data: XOR<NameOfAllahUpdateManyMutationInput, NameOfAllahUncheckedUpdateManyInput>
    /**
     * Filter which NameOfAllahs to update
     */
    where?: NameOfAllahWhereInput
  }


  /**
   * NameOfAllah upsert
   */
  export type NameOfAllahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NameOfAllah
     */
    select?: NameOfAllahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NameOfAllahInclude<ExtArgs> | null
    /**
     * The filter to search for the NameOfAllah to update in case it exists.
     */
    where: NameOfAllahWhereUniqueInput
    /**
     * In case the NameOfAllah found by the `where` argument doesn't exist, create a new NameOfAllah with this data.
     */
    create: XOR<NameOfAllahCreateInput, NameOfAllahUncheckedCreateInput>
    /**
     * In case the NameOfAllah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NameOfAllahUpdateInput, NameOfAllahUncheckedUpdateInput>
  }


  /**
   * NameOfAllah delete
   */
  export type NameOfAllahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NameOfAllah
     */
    select?: NameOfAllahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NameOfAllahInclude<ExtArgs> | null
    /**
     * Filter which NameOfAllah to delete.
     */
    where: NameOfAllahWhereUniqueInput
  }


  /**
   * NameOfAllah deleteMany
   */
  export type NameOfAllahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NameOfAllahs to delete
     */
    where?: NameOfAllahWhereInput
  }


  /**
   * NameOfAllah without action
   */
  export type NameOfAllahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NameOfAllah
     */
    select?: NameOfAllahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NameOfAllahInclude<ExtArgs> | null
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
    mosqueId: 'mosqueId',
    date: 'date',
    fajr: 'fajr',
    shuruk: 'shuruk',
    zuhr: 'zuhr',
    asr: 'asr',
    maghrib: 'maghrib',
    isha: 'isha',
    mechet: 'mechet'
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
    isPrimary: 'isPrimary',
    projectName: 'projectName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
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
    cityId: 'cityId',
    mosqueId: 'mosqueId'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const FixedPrayerTimeScalarFieldEnum: {
    id: 'id',
    cityId: 'cityId',
    fajr: 'fajr',
    shuruk: 'shuruk',
    zuhr: 'zuhr',
    asr: 'asr',
    maghrib: 'maghrib',
    isha: 'isha',
    mechet: 'mechet',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    fajrActive: 'fajrActive',
    shurukActive: 'shurukActive',
    zuhrActive: 'zuhrActive',
    asrActive: 'asrActive',
    maghribActive: 'maghribActive',
    ishaActive: 'ishaActive',
    mechetActive: 'mechetActive'
  };

  export type FixedPrayerTimeScalarFieldEnum = (typeof FixedPrayerTimeScalarFieldEnum)[keyof typeof FixedPrayerTimeScalarFieldEnum]


  export const FixedMosquePrayerTimeScalarFieldEnum: {
    id: 'id',
    mosqueId: 'mosqueId',
    fajr: 'fajr',
    shuruk: 'shuruk',
    zuhr: 'zuhr',
    asr: 'asr',
    maghrib: 'maghrib',
    isha: 'isha',
    mechet: 'mechet',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    fajrActive: 'fajrActive',
    shurukActive: 'shurukActive',
    zuhrActive: 'zuhrActive',
    asrActive: 'asrActive',
    maghribActive: 'maghribActive',
    ishaActive: 'ishaActive',
    mechetActive: 'mechetActive',
    fajrIqamaEnabled: 'fajrIqamaEnabled',
    fajrIqamaMinutes: 'fajrIqamaMinutes',
    shurukIqamaEnabled: 'shurukIqamaEnabled',
    shurukIqamaMinutes: 'shurukIqamaMinutes',
    zuhrIqamaEnabled: 'zuhrIqamaEnabled',
    zuhrIqamaMinutes: 'zuhrIqamaMinutes',
    asrIqamaEnabled: 'asrIqamaEnabled',
    asrIqamaMinutes: 'asrIqamaMinutes',
    maghribIqamaEnabled: 'maghribIqamaEnabled',
    maghribIqamaMinutes: 'maghribIqamaMinutes',
    ishaIqamaEnabled: 'ishaIqamaEnabled',
    ishaIqamaMinutes: 'ishaIqamaMinutes',
    mechetIqamaEnabled: 'mechetIqamaEnabled',
    mechetIqamaMinutes: 'mechetIqamaMinutes'
  };

  export type FixedMosquePrayerTimeScalarFieldEnum = (typeof FixedMosquePrayerTimeScalarFieldEnum)[keyof typeof FixedMosquePrayerTimeScalarFieldEnum]


  export const PrayerTimeChangeScalarFieldEnum: {
    id: 'id',
    prayerId: 'prayerId',
    prayerType: 'prayerType',
    oldTime: 'oldTime',
    newTime: 'newTime',
    shiftMinutes: 'shiftMinutes',
    changedAt: 'changedAt',
    changedBy: 'changedBy'
  };

  export type PrayerTimeChangeScalarFieldEnum = (typeof PrayerTimeChangeScalarFieldEnum)[keyof typeof PrayerTimeChangeScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    oldValue: 'oldValue',
    newValue: 'newValue',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const TranslationScalarFieldEnum: {
    id: 'id',
    key: 'key',
    ru: 'ru',
    tt: 'tt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TranslationScalarFieldEnum = (typeof TranslationScalarFieldEnum)[keyof typeof TranslationScalarFieldEnum]


  export const MosqueLanguageSettingsScalarFieldEnum: {
    id: 'id',
    mosqueId: 'mosqueId',
    translationsEnabled: 'translationsEnabled',
    languageToggleEnabled: 'languageToggleEnabled',
    languageToggleIntervalSeconds: 'languageToggleIntervalSeconds',
    fridayZuhrAsJomgaEnabled: 'fridayZuhrAsJomgaEnabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MosqueLanguageSettingsScalarFieldEnum = (typeof MosqueLanguageSettingsScalarFieldEnum)[keyof typeof MosqueLanguageSettingsScalarFieldEnum]


  export const NameOfAllahScalarFieldEnum: {
    id: 'id',
    mosqueId: 'mosqueId',
    arabic: 'arabic',
    transcription: 'transcription',
    meaning: 'meaning',
    transcriptionTatar: 'transcriptionTatar',
    meaningTatar: 'meaningTatar',
    isEnabled: 'isEnabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NameOfAllahScalarFieldEnum = (typeof NameOfAllahScalarFieldEnum)[keyof typeof NameOfAllahScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


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
    admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
    fixedPrayerTime?: XOR<FixedPrayerTimeNullableRelationFilter, FixedPrayerTimeWhereInput> | null
    Mosque?: MosqueListRelationFilter
    prayers?: PrayerListRelationFilter
  }

  export type CityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    admin?: AdminOrderByWithRelationInput
    fixedPrayerTime?: FixedPrayerTimeOrderByWithRelationInput
    Mosque?: MosqueOrderByRelationAggregateInput
    prayers?: PrayerOrderByRelationAggregateInput
  }

  export type CityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    name?: StringFilter<"City"> | string
    logoUrl?: StringNullableFilter<"City"> | string | null
    admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
    fixedPrayerTime?: XOR<FixedPrayerTimeNullableRelationFilter, FixedPrayerTimeWhereInput> | null
    Mosque?: MosqueListRelationFilter
    prayers?: PrayerListRelationFilter
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
    mosqueId?: IntNullableFilter<"Prayer"> | number | null
    date?: StringNullableFilter<"Prayer"> | string | null
    fajr?: StringNullableFilter<"Prayer"> | string | null
    shuruk?: StringNullableFilter<"Prayer"> | string | null
    zuhr?: StringNullableFilter<"Prayer"> | string | null
    asr?: StringNullableFilter<"Prayer"> | string | null
    maghrib?: StringNullableFilter<"Prayer"> | string | null
    isha?: StringNullableFilter<"Prayer"> | string | null
    mechet?: StringNullableFilter<"Prayer"> | string | null
    city?: XOR<CityRelationFilter, CityWhereInput>
    mosque?: XOR<MosqueNullableRelationFilter, MosqueWhereInput> | null
    changes?: PrayerTimeChangeListRelationFilter
  }

  export type PrayerOrderByWithRelationInput = {
    id?: SortOrder
    cityId?: SortOrder
    mosqueId?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    fajr?: SortOrderInput | SortOrder
    shuruk?: SortOrderInput | SortOrder
    zuhr?: SortOrderInput | SortOrder
    asr?: SortOrderInput | SortOrder
    maghrib?: SortOrderInput | SortOrder
    isha?: SortOrderInput | SortOrder
    mechet?: SortOrderInput | SortOrder
    city?: CityOrderByWithRelationInput
    mosque?: MosqueOrderByWithRelationInput
    changes?: PrayerTimeChangeOrderByRelationAggregateInput
  }

  export type PrayerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PrayerWhereInput | PrayerWhereInput[]
    OR?: PrayerWhereInput[]
    NOT?: PrayerWhereInput | PrayerWhereInput[]
    cityId?: IntFilter<"Prayer"> | number
    mosqueId?: IntNullableFilter<"Prayer"> | number | null
    date?: StringNullableFilter<"Prayer"> | string | null
    fajr?: StringNullableFilter<"Prayer"> | string | null
    shuruk?: StringNullableFilter<"Prayer"> | string | null
    zuhr?: StringNullableFilter<"Prayer"> | string | null
    asr?: StringNullableFilter<"Prayer"> | string | null
    maghrib?: StringNullableFilter<"Prayer"> | string | null
    isha?: StringNullableFilter<"Prayer"> | string | null
    mechet?: StringNullableFilter<"Prayer"> | string | null
    city?: XOR<CityRelationFilter, CityWhereInput>
    mosque?: XOR<MosqueNullableRelationFilter, MosqueWhereInput> | null
    changes?: PrayerTimeChangeListRelationFilter
  }, "id">

  export type PrayerOrderByWithAggregationInput = {
    id?: SortOrder
    cityId?: SortOrder
    mosqueId?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    fajr?: SortOrderInput | SortOrder
    shuruk?: SortOrderInput | SortOrder
    zuhr?: SortOrderInput | SortOrder
    asr?: SortOrderInput | SortOrder
    maghrib?: SortOrderInput | SortOrder
    isha?: SortOrderInput | SortOrder
    mechet?: SortOrderInput | SortOrder
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
    mosqueId?: IntNullableWithAggregatesFilter<"Prayer"> | number | null
    date?: StringNullableWithAggregatesFilter<"Prayer"> | string | null
    fajr?: StringNullableWithAggregatesFilter<"Prayer"> | string | null
    shuruk?: StringNullableWithAggregatesFilter<"Prayer"> | string | null
    zuhr?: StringNullableWithAggregatesFilter<"Prayer"> | string | null
    asr?: StringNullableWithAggregatesFilter<"Prayer"> | string | null
    maghrib?: StringNullableWithAggregatesFilter<"Prayer"> | string | null
    isha?: StringNullableWithAggregatesFilter<"Prayer"> | string | null
    mechet?: StringNullableWithAggregatesFilter<"Prayer"> | string | null
  }

  export type MosqueWhereInput = {
    AND?: MosqueWhereInput | MosqueWhereInput[]
    OR?: MosqueWhereInput[]
    NOT?: MosqueWhereInput | MosqueWhereInput[]
    id?: IntFilter<"Mosque"> | number
    cityId?: IntFilter<"Mosque"> | number
    name?: StringFilter<"Mosque"> | string
    logoUrl?: StringNullableFilter<"Mosque"> | string | null
    admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
    fixedPrayerTime?: XOR<FixedMosquePrayerTimeNullableRelationFilter, FixedMosquePrayerTimeWhereInput> | null
    languageSettings?: XOR<MosqueLanguageSettingsNullableRelationFilter, MosqueLanguageSettingsWhereInput> | null
    namesOfAllah?: NameOfAllahListRelationFilter
    media?: MediaListRelationFilter
    city?: XOR<CityRelationFilter, CityWhereInput>
    prayers?: PrayerListRelationFilter
    qrCodes?: QRCodeListRelationFilter
  }

  export type MosqueOrderByWithRelationInput = {
    id?: SortOrder
    cityId?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    admin?: AdminOrderByWithRelationInput
    fixedPrayerTime?: FixedMosquePrayerTimeOrderByWithRelationInput
    languageSettings?: MosqueLanguageSettingsOrderByWithRelationInput
    namesOfAllah?: NameOfAllahOrderByRelationAggregateInput
    media?: MediaOrderByRelationAggregateInput
    city?: CityOrderByWithRelationInput
    prayers?: PrayerOrderByRelationAggregateInput
    qrCodes?: QRCodeOrderByRelationAggregateInput
  }

  export type MosqueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MosqueWhereInput | MosqueWhereInput[]
    OR?: MosqueWhereInput[]
    NOT?: MosqueWhereInput | MosqueWhereInput[]
    cityId?: IntFilter<"Mosque"> | number
    name?: StringFilter<"Mosque"> | string
    logoUrl?: StringNullableFilter<"Mosque"> | string | null
    admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
    fixedPrayerTime?: XOR<FixedMosquePrayerTimeNullableRelationFilter, FixedMosquePrayerTimeWhereInput> | null
    languageSettings?: XOR<MosqueLanguageSettingsNullableRelationFilter, MosqueLanguageSettingsWhereInput> | null
    namesOfAllah?: NameOfAllahListRelationFilter
    media?: MediaListRelationFilter
    city?: XOR<CityRelationFilter, CityWhereInput>
    prayers?: PrayerListRelationFilter
    qrCodes?: QRCodeListRelationFilter
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
    isPrimary?: BoolFilter<"QRCode"> | boolean
    projectName?: StringNullableFilter<"QRCode"> | string | null
    createdAt?: DateTimeFilter<"QRCode"> | Date | string
    updatedAt?: DateTimeFilter<"QRCode"> | Date | string
    imageUrl?: StringFilter<"QRCode"> | string
    mosque?: XOR<MosqueRelationFilter, MosqueWhereInput>
  }

  export type QRCodeOrderByWithRelationInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    isPrimary?: SortOrder
    projectName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrder
    mosque?: MosqueOrderByWithRelationInput
  }

  export type QRCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QRCodeWhereInput | QRCodeWhereInput[]
    OR?: QRCodeWhereInput[]
    NOT?: QRCodeWhereInput | QRCodeWhereInput[]
    mosqueId?: IntFilter<"QRCode"> | number
    isPrimary?: BoolFilter<"QRCode"> | boolean
    projectName?: StringNullableFilter<"QRCode"> | string | null
    createdAt?: DateTimeFilter<"QRCode"> | Date | string
    updatedAt?: DateTimeFilter<"QRCode"> | Date | string
    imageUrl?: StringFilter<"QRCode"> | string
    mosque?: XOR<MosqueRelationFilter, MosqueWhereInput>
  }, "id">

  export type QRCodeOrderByWithAggregationInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    isPrimary?: SortOrder
    projectName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    isPrimary?: BoolWithAggregatesFilter<"QRCode"> | boolean
    projectName?: StringNullableWithAggregatesFilter<"QRCode"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"QRCode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QRCode"> | Date | string
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
    mosqueId?: IntNullableFilter<"Admin"> | number | null
    city?: XOR<CityNullableRelationFilter, CityWhereInput> | null
    mosque?: XOR<MosqueNullableRelationFilter, MosqueWhereInput> | null
    prayerChanges?: PrayerTimeChangeListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    cityId?: SortOrderInput | SortOrder
    mosqueId?: SortOrderInput | SortOrder
    city?: CityOrderByWithRelationInput
    mosque?: MosqueOrderByWithRelationInput
    prayerChanges?: PrayerTimeChangeOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cityId?: number
    mosqueId?: number
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    city?: XOR<CityNullableRelationFilter, CityWhereInput> | null
    mosque?: XOR<MosqueNullableRelationFilter, MosqueWhereInput> | null
    prayerChanges?: PrayerTimeChangeListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "email" | "cityId" | "mosqueId">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    cityId?: SortOrderInput | SortOrder
    mosqueId?: SortOrderInput | SortOrder
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
    mosqueId?: IntNullableWithAggregatesFilter<"Admin"> | number | null
  }

  export type FixedPrayerTimeWhereInput = {
    AND?: FixedPrayerTimeWhereInput | FixedPrayerTimeWhereInput[]
    OR?: FixedPrayerTimeWhereInput[]
    NOT?: FixedPrayerTimeWhereInput | FixedPrayerTimeWhereInput[]
    id?: IntFilter<"FixedPrayerTime"> | number
    cityId?: IntFilter<"FixedPrayerTime"> | number
    fajr?: StringFilter<"FixedPrayerTime"> | string
    shuruk?: StringFilter<"FixedPrayerTime"> | string
    zuhr?: StringFilter<"FixedPrayerTime"> | string
    asr?: StringFilter<"FixedPrayerTime"> | string
    maghrib?: StringFilter<"FixedPrayerTime"> | string
    isha?: StringFilter<"FixedPrayerTime"> | string
    mechet?: StringNullableFilter<"FixedPrayerTime"> | string | null
    createdAt?: DateTimeFilter<"FixedPrayerTime"> | Date | string
    updatedAt?: DateTimeFilter<"FixedPrayerTime"> | Date | string
    fajrActive?: BoolFilter<"FixedPrayerTime"> | boolean
    shurukActive?: BoolFilter<"FixedPrayerTime"> | boolean
    zuhrActive?: BoolFilter<"FixedPrayerTime"> | boolean
    asrActive?: BoolFilter<"FixedPrayerTime"> | boolean
    maghribActive?: BoolFilter<"FixedPrayerTime"> | boolean
    ishaActive?: BoolFilter<"FixedPrayerTime"> | boolean
    mechetActive?: BoolFilter<"FixedPrayerTime"> | boolean
    city?: XOR<CityRelationFilter, CityWhereInput>
  }

  export type FixedPrayerTimeOrderByWithRelationInput = {
    id?: SortOrder
    cityId?: SortOrder
    fajr?: SortOrder
    shuruk?: SortOrder
    zuhr?: SortOrder
    asr?: SortOrder
    maghrib?: SortOrder
    isha?: SortOrder
    mechet?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fajrActive?: SortOrder
    shurukActive?: SortOrder
    zuhrActive?: SortOrder
    asrActive?: SortOrder
    maghribActive?: SortOrder
    ishaActive?: SortOrder
    mechetActive?: SortOrder
    city?: CityOrderByWithRelationInput
  }

  export type FixedPrayerTimeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cityId?: number
    AND?: FixedPrayerTimeWhereInput | FixedPrayerTimeWhereInput[]
    OR?: FixedPrayerTimeWhereInput[]
    NOT?: FixedPrayerTimeWhereInput | FixedPrayerTimeWhereInput[]
    fajr?: StringFilter<"FixedPrayerTime"> | string
    shuruk?: StringFilter<"FixedPrayerTime"> | string
    zuhr?: StringFilter<"FixedPrayerTime"> | string
    asr?: StringFilter<"FixedPrayerTime"> | string
    maghrib?: StringFilter<"FixedPrayerTime"> | string
    isha?: StringFilter<"FixedPrayerTime"> | string
    mechet?: StringNullableFilter<"FixedPrayerTime"> | string | null
    createdAt?: DateTimeFilter<"FixedPrayerTime"> | Date | string
    updatedAt?: DateTimeFilter<"FixedPrayerTime"> | Date | string
    fajrActive?: BoolFilter<"FixedPrayerTime"> | boolean
    shurukActive?: BoolFilter<"FixedPrayerTime"> | boolean
    zuhrActive?: BoolFilter<"FixedPrayerTime"> | boolean
    asrActive?: BoolFilter<"FixedPrayerTime"> | boolean
    maghribActive?: BoolFilter<"FixedPrayerTime"> | boolean
    ishaActive?: BoolFilter<"FixedPrayerTime"> | boolean
    mechetActive?: BoolFilter<"FixedPrayerTime"> | boolean
    city?: XOR<CityRelationFilter, CityWhereInput>
  }, "id" | "cityId">

  export type FixedPrayerTimeOrderByWithAggregationInput = {
    id?: SortOrder
    cityId?: SortOrder
    fajr?: SortOrder
    shuruk?: SortOrder
    zuhr?: SortOrder
    asr?: SortOrder
    maghrib?: SortOrder
    isha?: SortOrder
    mechet?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fajrActive?: SortOrder
    shurukActive?: SortOrder
    zuhrActive?: SortOrder
    asrActive?: SortOrder
    maghribActive?: SortOrder
    ishaActive?: SortOrder
    mechetActive?: SortOrder
    _count?: FixedPrayerTimeCountOrderByAggregateInput
    _avg?: FixedPrayerTimeAvgOrderByAggregateInput
    _max?: FixedPrayerTimeMaxOrderByAggregateInput
    _min?: FixedPrayerTimeMinOrderByAggregateInput
    _sum?: FixedPrayerTimeSumOrderByAggregateInput
  }

  export type FixedPrayerTimeScalarWhereWithAggregatesInput = {
    AND?: FixedPrayerTimeScalarWhereWithAggregatesInput | FixedPrayerTimeScalarWhereWithAggregatesInput[]
    OR?: FixedPrayerTimeScalarWhereWithAggregatesInput[]
    NOT?: FixedPrayerTimeScalarWhereWithAggregatesInput | FixedPrayerTimeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FixedPrayerTime"> | number
    cityId?: IntWithAggregatesFilter<"FixedPrayerTime"> | number
    fajr?: StringWithAggregatesFilter<"FixedPrayerTime"> | string
    shuruk?: StringWithAggregatesFilter<"FixedPrayerTime"> | string
    zuhr?: StringWithAggregatesFilter<"FixedPrayerTime"> | string
    asr?: StringWithAggregatesFilter<"FixedPrayerTime"> | string
    maghrib?: StringWithAggregatesFilter<"FixedPrayerTime"> | string
    isha?: StringWithAggregatesFilter<"FixedPrayerTime"> | string
    mechet?: StringNullableWithAggregatesFilter<"FixedPrayerTime"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FixedPrayerTime"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FixedPrayerTime"> | Date | string
    fajrActive?: BoolWithAggregatesFilter<"FixedPrayerTime"> | boolean
    shurukActive?: BoolWithAggregatesFilter<"FixedPrayerTime"> | boolean
    zuhrActive?: BoolWithAggregatesFilter<"FixedPrayerTime"> | boolean
    asrActive?: BoolWithAggregatesFilter<"FixedPrayerTime"> | boolean
    maghribActive?: BoolWithAggregatesFilter<"FixedPrayerTime"> | boolean
    ishaActive?: BoolWithAggregatesFilter<"FixedPrayerTime"> | boolean
    mechetActive?: BoolWithAggregatesFilter<"FixedPrayerTime"> | boolean
  }

  export type FixedMosquePrayerTimeWhereInput = {
    AND?: FixedMosquePrayerTimeWhereInput | FixedMosquePrayerTimeWhereInput[]
    OR?: FixedMosquePrayerTimeWhereInput[]
    NOT?: FixedMosquePrayerTimeWhereInput | FixedMosquePrayerTimeWhereInput[]
    id?: IntFilter<"FixedMosquePrayerTime"> | number
    mosqueId?: IntFilter<"FixedMosquePrayerTime"> | number
    fajr?: StringFilter<"FixedMosquePrayerTime"> | string
    shuruk?: StringFilter<"FixedMosquePrayerTime"> | string
    zuhr?: StringFilter<"FixedMosquePrayerTime"> | string
    asr?: StringFilter<"FixedMosquePrayerTime"> | string
    maghrib?: StringFilter<"FixedMosquePrayerTime"> | string
    isha?: StringFilter<"FixedMosquePrayerTime"> | string
    mechet?: StringNullableFilter<"FixedMosquePrayerTime"> | string | null
    createdAt?: DateTimeFilter<"FixedMosquePrayerTime"> | Date | string
    updatedAt?: DateTimeFilter<"FixedMosquePrayerTime"> | Date | string
    fajrActive?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    shurukActive?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    zuhrActive?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    asrActive?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    maghribActive?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    ishaActive?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    mechetActive?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    fajrIqamaEnabled?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    fajrIqamaMinutes?: IntFilter<"FixedMosquePrayerTime"> | number
    shurukIqamaEnabled?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    shurukIqamaMinutes?: IntFilter<"FixedMosquePrayerTime"> | number
    zuhrIqamaEnabled?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    zuhrIqamaMinutes?: IntFilter<"FixedMosquePrayerTime"> | number
    asrIqamaEnabled?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    asrIqamaMinutes?: IntFilter<"FixedMosquePrayerTime"> | number
    maghribIqamaEnabled?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    maghribIqamaMinutes?: IntFilter<"FixedMosquePrayerTime"> | number
    ishaIqamaEnabled?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    ishaIqamaMinutes?: IntFilter<"FixedMosquePrayerTime"> | number
    mechetIqamaEnabled?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    mechetIqamaMinutes?: IntFilter<"FixedMosquePrayerTime"> | number
    mosque?: XOR<MosqueRelationFilter, MosqueWhereInput>
  }

  export type FixedMosquePrayerTimeOrderByWithRelationInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    fajr?: SortOrder
    shuruk?: SortOrder
    zuhr?: SortOrder
    asr?: SortOrder
    maghrib?: SortOrder
    isha?: SortOrder
    mechet?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fajrActive?: SortOrder
    shurukActive?: SortOrder
    zuhrActive?: SortOrder
    asrActive?: SortOrder
    maghribActive?: SortOrder
    ishaActive?: SortOrder
    mechetActive?: SortOrder
    fajrIqamaEnabled?: SortOrder
    fajrIqamaMinutes?: SortOrder
    shurukIqamaEnabled?: SortOrder
    shurukIqamaMinutes?: SortOrder
    zuhrIqamaEnabled?: SortOrder
    zuhrIqamaMinutes?: SortOrder
    asrIqamaEnabled?: SortOrder
    asrIqamaMinutes?: SortOrder
    maghribIqamaEnabled?: SortOrder
    maghribIqamaMinutes?: SortOrder
    ishaIqamaEnabled?: SortOrder
    ishaIqamaMinutes?: SortOrder
    mechetIqamaEnabled?: SortOrder
    mechetIqamaMinutes?: SortOrder
    mosque?: MosqueOrderByWithRelationInput
  }

  export type FixedMosquePrayerTimeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mosqueId?: number
    AND?: FixedMosquePrayerTimeWhereInput | FixedMosquePrayerTimeWhereInput[]
    OR?: FixedMosquePrayerTimeWhereInput[]
    NOT?: FixedMosquePrayerTimeWhereInput | FixedMosquePrayerTimeWhereInput[]
    fajr?: StringFilter<"FixedMosquePrayerTime"> | string
    shuruk?: StringFilter<"FixedMosquePrayerTime"> | string
    zuhr?: StringFilter<"FixedMosquePrayerTime"> | string
    asr?: StringFilter<"FixedMosquePrayerTime"> | string
    maghrib?: StringFilter<"FixedMosquePrayerTime"> | string
    isha?: StringFilter<"FixedMosquePrayerTime"> | string
    mechet?: StringNullableFilter<"FixedMosquePrayerTime"> | string | null
    createdAt?: DateTimeFilter<"FixedMosquePrayerTime"> | Date | string
    updatedAt?: DateTimeFilter<"FixedMosquePrayerTime"> | Date | string
    fajrActive?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    shurukActive?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    zuhrActive?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    asrActive?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    maghribActive?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    ishaActive?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    mechetActive?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    fajrIqamaEnabled?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    fajrIqamaMinutes?: IntFilter<"FixedMosquePrayerTime"> | number
    shurukIqamaEnabled?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    shurukIqamaMinutes?: IntFilter<"FixedMosquePrayerTime"> | number
    zuhrIqamaEnabled?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    zuhrIqamaMinutes?: IntFilter<"FixedMosquePrayerTime"> | number
    asrIqamaEnabled?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    asrIqamaMinutes?: IntFilter<"FixedMosquePrayerTime"> | number
    maghribIqamaEnabled?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    maghribIqamaMinutes?: IntFilter<"FixedMosquePrayerTime"> | number
    ishaIqamaEnabled?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    ishaIqamaMinutes?: IntFilter<"FixedMosquePrayerTime"> | number
    mechetIqamaEnabled?: BoolFilter<"FixedMosquePrayerTime"> | boolean
    mechetIqamaMinutes?: IntFilter<"FixedMosquePrayerTime"> | number
    mosque?: XOR<MosqueRelationFilter, MosqueWhereInput>
  }, "id" | "mosqueId">

  export type FixedMosquePrayerTimeOrderByWithAggregationInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    fajr?: SortOrder
    shuruk?: SortOrder
    zuhr?: SortOrder
    asr?: SortOrder
    maghrib?: SortOrder
    isha?: SortOrder
    mechet?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fajrActive?: SortOrder
    shurukActive?: SortOrder
    zuhrActive?: SortOrder
    asrActive?: SortOrder
    maghribActive?: SortOrder
    ishaActive?: SortOrder
    mechetActive?: SortOrder
    fajrIqamaEnabled?: SortOrder
    fajrIqamaMinutes?: SortOrder
    shurukIqamaEnabled?: SortOrder
    shurukIqamaMinutes?: SortOrder
    zuhrIqamaEnabled?: SortOrder
    zuhrIqamaMinutes?: SortOrder
    asrIqamaEnabled?: SortOrder
    asrIqamaMinutes?: SortOrder
    maghribIqamaEnabled?: SortOrder
    maghribIqamaMinutes?: SortOrder
    ishaIqamaEnabled?: SortOrder
    ishaIqamaMinutes?: SortOrder
    mechetIqamaEnabled?: SortOrder
    mechetIqamaMinutes?: SortOrder
    _count?: FixedMosquePrayerTimeCountOrderByAggregateInput
    _avg?: FixedMosquePrayerTimeAvgOrderByAggregateInput
    _max?: FixedMosquePrayerTimeMaxOrderByAggregateInput
    _min?: FixedMosquePrayerTimeMinOrderByAggregateInput
    _sum?: FixedMosquePrayerTimeSumOrderByAggregateInput
  }

  export type FixedMosquePrayerTimeScalarWhereWithAggregatesInput = {
    AND?: FixedMosquePrayerTimeScalarWhereWithAggregatesInput | FixedMosquePrayerTimeScalarWhereWithAggregatesInput[]
    OR?: FixedMosquePrayerTimeScalarWhereWithAggregatesInput[]
    NOT?: FixedMosquePrayerTimeScalarWhereWithAggregatesInput | FixedMosquePrayerTimeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FixedMosquePrayerTime"> | number
    mosqueId?: IntWithAggregatesFilter<"FixedMosquePrayerTime"> | number
    fajr?: StringWithAggregatesFilter<"FixedMosquePrayerTime"> | string
    shuruk?: StringWithAggregatesFilter<"FixedMosquePrayerTime"> | string
    zuhr?: StringWithAggregatesFilter<"FixedMosquePrayerTime"> | string
    asr?: StringWithAggregatesFilter<"FixedMosquePrayerTime"> | string
    maghrib?: StringWithAggregatesFilter<"FixedMosquePrayerTime"> | string
    isha?: StringWithAggregatesFilter<"FixedMosquePrayerTime"> | string
    mechet?: StringNullableWithAggregatesFilter<"FixedMosquePrayerTime"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FixedMosquePrayerTime"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FixedMosquePrayerTime"> | Date | string
    fajrActive?: BoolWithAggregatesFilter<"FixedMosquePrayerTime"> | boolean
    shurukActive?: BoolWithAggregatesFilter<"FixedMosquePrayerTime"> | boolean
    zuhrActive?: BoolWithAggregatesFilter<"FixedMosquePrayerTime"> | boolean
    asrActive?: BoolWithAggregatesFilter<"FixedMosquePrayerTime"> | boolean
    maghribActive?: BoolWithAggregatesFilter<"FixedMosquePrayerTime"> | boolean
    ishaActive?: BoolWithAggregatesFilter<"FixedMosquePrayerTime"> | boolean
    mechetActive?: BoolWithAggregatesFilter<"FixedMosquePrayerTime"> | boolean
    fajrIqamaEnabled?: BoolWithAggregatesFilter<"FixedMosquePrayerTime"> | boolean
    fajrIqamaMinutes?: IntWithAggregatesFilter<"FixedMosquePrayerTime"> | number
    shurukIqamaEnabled?: BoolWithAggregatesFilter<"FixedMosquePrayerTime"> | boolean
    shurukIqamaMinutes?: IntWithAggregatesFilter<"FixedMosquePrayerTime"> | number
    zuhrIqamaEnabled?: BoolWithAggregatesFilter<"FixedMosquePrayerTime"> | boolean
    zuhrIqamaMinutes?: IntWithAggregatesFilter<"FixedMosquePrayerTime"> | number
    asrIqamaEnabled?: BoolWithAggregatesFilter<"FixedMosquePrayerTime"> | boolean
    asrIqamaMinutes?: IntWithAggregatesFilter<"FixedMosquePrayerTime"> | number
    maghribIqamaEnabled?: BoolWithAggregatesFilter<"FixedMosquePrayerTime"> | boolean
    maghribIqamaMinutes?: IntWithAggregatesFilter<"FixedMosquePrayerTime"> | number
    ishaIqamaEnabled?: BoolWithAggregatesFilter<"FixedMosquePrayerTime"> | boolean
    ishaIqamaMinutes?: IntWithAggregatesFilter<"FixedMosquePrayerTime"> | number
    mechetIqamaEnabled?: BoolWithAggregatesFilter<"FixedMosquePrayerTime"> | boolean
    mechetIqamaMinutes?: IntWithAggregatesFilter<"FixedMosquePrayerTime"> | number
  }

  export type PrayerTimeChangeWhereInput = {
    AND?: PrayerTimeChangeWhereInput | PrayerTimeChangeWhereInput[]
    OR?: PrayerTimeChangeWhereInput[]
    NOT?: PrayerTimeChangeWhereInput | PrayerTimeChangeWhereInput[]
    id?: IntFilter<"PrayerTimeChange"> | number
    prayerId?: IntFilter<"PrayerTimeChange"> | number
    prayerType?: StringFilter<"PrayerTimeChange"> | string
    oldTime?: StringFilter<"PrayerTimeChange"> | string
    newTime?: StringFilter<"PrayerTimeChange"> | string
    shiftMinutes?: IntFilter<"PrayerTimeChange"> | number
    changedAt?: DateTimeFilter<"PrayerTimeChange"> | Date | string
    changedBy?: IntFilter<"PrayerTimeChange"> | number
    prayer?: XOR<PrayerRelationFilter, PrayerWhereInput>
    user?: XOR<AdminRelationFilter, AdminWhereInput>
  }

  export type PrayerTimeChangeOrderByWithRelationInput = {
    id?: SortOrder
    prayerId?: SortOrder
    prayerType?: SortOrder
    oldTime?: SortOrder
    newTime?: SortOrder
    shiftMinutes?: SortOrder
    changedAt?: SortOrder
    changedBy?: SortOrder
    prayer?: PrayerOrderByWithRelationInput
    user?: AdminOrderByWithRelationInput
  }

  export type PrayerTimeChangeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PrayerTimeChangeWhereInput | PrayerTimeChangeWhereInput[]
    OR?: PrayerTimeChangeWhereInput[]
    NOT?: PrayerTimeChangeWhereInput | PrayerTimeChangeWhereInput[]
    prayerId?: IntFilter<"PrayerTimeChange"> | number
    prayerType?: StringFilter<"PrayerTimeChange"> | string
    oldTime?: StringFilter<"PrayerTimeChange"> | string
    newTime?: StringFilter<"PrayerTimeChange"> | string
    shiftMinutes?: IntFilter<"PrayerTimeChange"> | number
    changedAt?: DateTimeFilter<"PrayerTimeChange"> | Date | string
    changedBy?: IntFilter<"PrayerTimeChange"> | number
    prayer?: XOR<PrayerRelationFilter, PrayerWhereInput>
    user?: XOR<AdminRelationFilter, AdminWhereInput>
  }, "id">

  export type PrayerTimeChangeOrderByWithAggregationInput = {
    id?: SortOrder
    prayerId?: SortOrder
    prayerType?: SortOrder
    oldTime?: SortOrder
    newTime?: SortOrder
    shiftMinutes?: SortOrder
    changedAt?: SortOrder
    changedBy?: SortOrder
    _count?: PrayerTimeChangeCountOrderByAggregateInput
    _avg?: PrayerTimeChangeAvgOrderByAggregateInput
    _max?: PrayerTimeChangeMaxOrderByAggregateInput
    _min?: PrayerTimeChangeMinOrderByAggregateInput
    _sum?: PrayerTimeChangeSumOrderByAggregateInput
  }

  export type PrayerTimeChangeScalarWhereWithAggregatesInput = {
    AND?: PrayerTimeChangeScalarWhereWithAggregatesInput | PrayerTimeChangeScalarWhereWithAggregatesInput[]
    OR?: PrayerTimeChangeScalarWhereWithAggregatesInput[]
    NOT?: PrayerTimeChangeScalarWhereWithAggregatesInput | PrayerTimeChangeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PrayerTimeChange"> | number
    prayerId?: IntWithAggregatesFilter<"PrayerTimeChange"> | number
    prayerType?: StringWithAggregatesFilter<"PrayerTimeChange"> | string
    oldTime?: StringWithAggregatesFilter<"PrayerTimeChange"> | string
    newTime?: StringWithAggregatesFilter<"PrayerTimeChange"> | string
    shiftMinutes?: IntWithAggregatesFilter<"PrayerTimeChange"> | number
    changedAt?: DateTimeWithAggregatesFilter<"PrayerTimeChange"> | Date | string
    changedBy?: IntWithAggregatesFilter<"PrayerTimeChange"> | number
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: IntFilter<"AuditLog"> | number
    userId?: IntFilter<"AuditLog"> | number
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: IntFilter<"AuditLog"> | number
    oldValue?: JsonNullableFilter<"AuditLog">
    newValue?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<AdminRelationFilter, AdminWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: AdminOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    userId?: IntFilter<"AuditLog"> | number
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: IntFilter<"AuditLog"> | number
    oldValue?: JsonNullableFilter<"AuditLog">
    newValue?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<AdminRelationFilter, AdminWhereInput>
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _avg?: AuditLogAvgOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
    _sum?: AuditLogSumOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AuditLog"> | number
    userId?: IntWithAggregatesFilter<"AuditLog"> | number
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entity?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: IntWithAggregatesFilter<"AuditLog"> | number
    oldValue?: JsonNullableWithAggregatesFilter<"AuditLog">
    newValue?: JsonNullableWithAggregatesFilter<"AuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type TranslationWhereInput = {
    AND?: TranslationWhereInput | TranslationWhereInput[]
    OR?: TranslationWhereInput[]
    NOT?: TranslationWhereInput | TranslationWhereInput[]
    id?: IntFilter<"Translation"> | number
    key?: StringFilter<"Translation"> | string
    ru?: StringFilter<"Translation"> | string
    tt?: StringFilter<"Translation"> | string
    createdAt?: DateTimeFilter<"Translation"> | Date | string
    updatedAt?: DateTimeFilter<"Translation"> | Date | string
  }

  export type TranslationOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    ru?: SortOrder
    tt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TranslationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    key?: string
    AND?: TranslationWhereInput | TranslationWhereInput[]
    OR?: TranslationWhereInput[]
    NOT?: TranslationWhereInput | TranslationWhereInput[]
    ru?: StringFilter<"Translation"> | string
    tt?: StringFilter<"Translation"> | string
    createdAt?: DateTimeFilter<"Translation"> | Date | string
    updatedAt?: DateTimeFilter<"Translation"> | Date | string
  }, "id" | "key">

  export type TranslationOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    ru?: SortOrder
    tt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TranslationCountOrderByAggregateInput
    _avg?: TranslationAvgOrderByAggregateInput
    _max?: TranslationMaxOrderByAggregateInput
    _min?: TranslationMinOrderByAggregateInput
    _sum?: TranslationSumOrderByAggregateInput
  }

  export type TranslationScalarWhereWithAggregatesInput = {
    AND?: TranslationScalarWhereWithAggregatesInput | TranslationScalarWhereWithAggregatesInput[]
    OR?: TranslationScalarWhereWithAggregatesInput[]
    NOT?: TranslationScalarWhereWithAggregatesInput | TranslationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Translation"> | number
    key?: StringWithAggregatesFilter<"Translation"> | string
    ru?: StringWithAggregatesFilter<"Translation"> | string
    tt?: StringWithAggregatesFilter<"Translation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Translation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Translation"> | Date | string
  }

  export type MosqueLanguageSettingsWhereInput = {
    AND?: MosqueLanguageSettingsWhereInput | MosqueLanguageSettingsWhereInput[]
    OR?: MosqueLanguageSettingsWhereInput[]
    NOT?: MosqueLanguageSettingsWhereInput | MosqueLanguageSettingsWhereInput[]
    id?: IntFilter<"MosqueLanguageSettings"> | number
    mosqueId?: IntFilter<"MosqueLanguageSettings"> | number
    translationsEnabled?: BoolFilter<"MosqueLanguageSettings"> | boolean
    languageToggleEnabled?: BoolFilter<"MosqueLanguageSettings"> | boolean
    languageToggleIntervalSeconds?: IntFilter<"MosqueLanguageSettings"> | number
    fridayZuhrAsJomgaEnabled?: BoolFilter<"MosqueLanguageSettings"> | boolean
    createdAt?: DateTimeFilter<"MosqueLanguageSettings"> | Date | string
    updatedAt?: DateTimeFilter<"MosqueLanguageSettings"> | Date | string
    mosque?: XOR<MosqueRelationFilter, MosqueWhereInput>
  }

  export type MosqueLanguageSettingsOrderByWithRelationInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    translationsEnabled?: SortOrder
    languageToggleEnabled?: SortOrder
    languageToggleIntervalSeconds?: SortOrder
    fridayZuhrAsJomgaEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mosque?: MosqueOrderByWithRelationInput
  }

  export type MosqueLanguageSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mosqueId?: number
    AND?: MosqueLanguageSettingsWhereInput | MosqueLanguageSettingsWhereInput[]
    OR?: MosqueLanguageSettingsWhereInput[]
    NOT?: MosqueLanguageSettingsWhereInput | MosqueLanguageSettingsWhereInput[]
    translationsEnabled?: BoolFilter<"MosqueLanguageSettings"> | boolean
    languageToggleEnabled?: BoolFilter<"MosqueLanguageSettings"> | boolean
    languageToggleIntervalSeconds?: IntFilter<"MosqueLanguageSettings"> | number
    fridayZuhrAsJomgaEnabled?: BoolFilter<"MosqueLanguageSettings"> | boolean
    createdAt?: DateTimeFilter<"MosqueLanguageSettings"> | Date | string
    updatedAt?: DateTimeFilter<"MosqueLanguageSettings"> | Date | string
    mosque?: XOR<MosqueRelationFilter, MosqueWhereInput>
  }, "id" | "mosqueId">

  export type MosqueLanguageSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    translationsEnabled?: SortOrder
    languageToggleEnabled?: SortOrder
    languageToggleIntervalSeconds?: SortOrder
    fridayZuhrAsJomgaEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MosqueLanguageSettingsCountOrderByAggregateInput
    _avg?: MosqueLanguageSettingsAvgOrderByAggregateInput
    _max?: MosqueLanguageSettingsMaxOrderByAggregateInput
    _min?: MosqueLanguageSettingsMinOrderByAggregateInput
    _sum?: MosqueLanguageSettingsSumOrderByAggregateInput
  }

  export type MosqueLanguageSettingsScalarWhereWithAggregatesInput = {
    AND?: MosqueLanguageSettingsScalarWhereWithAggregatesInput | MosqueLanguageSettingsScalarWhereWithAggregatesInput[]
    OR?: MosqueLanguageSettingsScalarWhereWithAggregatesInput[]
    NOT?: MosqueLanguageSettingsScalarWhereWithAggregatesInput | MosqueLanguageSettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MosqueLanguageSettings"> | number
    mosqueId?: IntWithAggregatesFilter<"MosqueLanguageSettings"> | number
    translationsEnabled?: BoolWithAggregatesFilter<"MosqueLanguageSettings"> | boolean
    languageToggleEnabled?: BoolWithAggregatesFilter<"MosqueLanguageSettings"> | boolean
    languageToggleIntervalSeconds?: IntWithAggregatesFilter<"MosqueLanguageSettings"> | number
    fridayZuhrAsJomgaEnabled?: BoolWithAggregatesFilter<"MosqueLanguageSettings"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MosqueLanguageSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MosqueLanguageSettings"> | Date | string
  }

  export type NameOfAllahWhereInput = {
    AND?: NameOfAllahWhereInput | NameOfAllahWhereInput[]
    OR?: NameOfAllahWhereInput[]
    NOT?: NameOfAllahWhereInput | NameOfAllahWhereInput[]
    id?: IntFilter<"NameOfAllah"> | number
    mosqueId?: IntFilter<"NameOfAllah"> | number
    arabic?: StringFilter<"NameOfAllah"> | string
    transcription?: StringFilter<"NameOfAllah"> | string
    meaning?: StringFilter<"NameOfAllah"> | string
    transcriptionTatar?: StringNullableFilter<"NameOfAllah"> | string | null
    meaningTatar?: StringNullableFilter<"NameOfAllah"> | string | null
    isEnabled?: BoolFilter<"NameOfAllah"> | boolean
    createdAt?: DateTimeFilter<"NameOfAllah"> | Date | string
    updatedAt?: DateTimeFilter<"NameOfAllah"> | Date | string
    mosque?: XOR<MosqueRelationFilter, MosqueWhereInput>
  }

  export type NameOfAllahOrderByWithRelationInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    arabic?: SortOrder
    transcription?: SortOrder
    meaning?: SortOrder
    transcriptionTatar?: SortOrderInput | SortOrder
    meaningTatar?: SortOrderInput | SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mosque?: MosqueOrderByWithRelationInput
  }

  export type NameOfAllahWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mosqueId_arabic?: NameOfAllahMosqueIdArabicCompoundUniqueInput
    AND?: NameOfAllahWhereInput | NameOfAllahWhereInput[]
    OR?: NameOfAllahWhereInput[]
    NOT?: NameOfAllahWhereInput | NameOfAllahWhereInput[]
    mosqueId?: IntFilter<"NameOfAllah"> | number
    arabic?: StringFilter<"NameOfAllah"> | string
    transcription?: StringFilter<"NameOfAllah"> | string
    meaning?: StringFilter<"NameOfAllah"> | string
    transcriptionTatar?: StringNullableFilter<"NameOfAllah"> | string | null
    meaningTatar?: StringNullableFilter<"NameOfAllah"> | string | null
    isEnabled?: BoolFilter<"NameOfAllah"> | boolean
    createdAt?: DateTimeFilter<"NameOfAllah"> | Date | string
    updatedAt?: DateTimeFilter<"NameOfAllah"> | Date | string
    mosque?: XOR<MosqueRelationFilter, MosqueWhereInput>
  }, "id" | "mosqueId_arabic">

  export type NameOfAllahOrderByWithAggregationInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    arabic?: SortOrder
    transcription?: SortOrder
    meaning?: SortOrder
    transcriptionTatar?: SortOrderInput | SortOrder
    meaningTatar?: SortOrderInput | SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NameOfAllahCountOrderByAggregateInput
    _avg?: NameOfAllahAvgOrderByAggregateInput
    _max?: NameOfAllahMaxOrderByAggregateInput
    _min?: NameOfAllahMinOrderByAggregateInput
    _sum?: NameOfAllahSumOrderByAggregateInput
  }

  export type NameOfAllahScalarWhereWithAggregatesInput = {
    AND?: NameOfAllahScalarWhereWithAggregatesInput | NameOfAllahScalarWhereWithAggregatesInput[]
    OR?: NameOfAllahScalarWhereWithAggregatesInput[]
    NOT?: NameOfAllahScalarWhereWithAggregatesInput | NameOfAllahScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NameOfAllah"> | number
    mosqueId?: IntWithAggregatesFilter<"NameOfAllah"> | number
    arabic?: StringWithAggregatesFilter<"NameOfAllah"> | string
    transcription?: StringWithAggregatesFilter<"NameOfAllah"> | string
    meaning?: StringWithAggregatesFilter<"NameOfAllah"> | string
    transcriptionTatar?: StringNullableWithAggregatesFilter<"NameOfAllah"> | string | null
    meaningTatar?: StringNullableWithAggregatesFilter<"NameOfAllah"> | string | null
    isEnabled?: BoolWithAggregatesFilter<"NameOfAllah"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"NameOfAllah"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NameOfAllah"> | Date | string
  }

  export type CityCreateInput = {
    name: string
    logoUrl?: string | null
    admin?: AdminCreateNestedOneWithoutCityInput
    fixedPrayerTime?: FixedPrayerTimeCreateNestedOneWithoutCityInput
    Mosque?: MosqueCreateNestedManyWithoutCityInput
    prayers?: PrayerCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateInput = {
    id?: number
    name: string
    logoUrl?: string | null
    admin?: AdminUncheckedCreateNestedOneWithoutCityInput
    fixedPrayerTime?: FixedPrayerTimeUncheckedCreateNestedOneWithoutCityInput
    Mosque?: MosqueUncheckedCreateNestedManyWithoutCityInput
    prayers?: PrayerUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUpdateOneWithoutCityNestedInput
    fixedPrayerTime?: FixedPrayerTimeUpdateOneWithoutCityNestedInput
    Mosque?: MosqueUpdateManyWithoutCityNestedInput
    prayers?: PrayerUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUncheckedUpdateOneWithoutCityNestedInput
    fixedPrayerTime?: FixedPrayerTimeUncheckedUpdateOneWithoutCityNestedInput
    Mosque?: MosqueUncheckedUpdateManyWithoutCityNestedInput
    prayers?: PrayerUncheckedUpdateManyWithoutCityNestedInput
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
    mechet?: string | null
    city: CityCreateNestedOneWithoutPrayersInput
    mosque?: MosqueCreateNestedOneWithoutPrayersInput
    changes?: PrayerTimeChangeCreateNestedManyWithoutPrayerInput
  }

  export type PrayerUncheckedCreateInput = {
    id?: number
    cityId: number
    mosqueId?: number | null
    date?: string | null
    fajr?: string | null
    shuruk?: string | null
    zuhr?: string | null
    asr?: string | null
    maghrib?: string | null
    isha?: string | null
    mechet?: string | null
    changes?: PrayerTimeChangeUncheckedCreateNestedManyWithoutPrayerInput
  }

  export type PrayerUpdateInput = {
    date?: NullableStringFieldUpdateOperationsInput | string | null
    fajr?: NullableStringFieldUpdateOperationsInput | string | null
    shuruk?: NullableStringFieldUpdateOperationsInput | string | null
    zuhr?: NullableStringFieldUpdateOperationsInput | string | null
    asr?: NullableStringFieldUpdateOperationsInput | string | null
    maghrib?: NullableStringFieldUpdateOperationsInput | string | null
    isha?: NullableStringFieldUpdateOperationsInput | string | null
    mechet?: NullableStringFieldUpdateOperationsInput | string | null
    city?: CityUpdateOneRequiredWithoutPrayersNestedInput
    mosque?: MosqueUpdateOneWithoutPrayersNestedInput
    changes?: PrayerTimeChangeUpdateManyWithoutPrayerNestedInput
  }

  export type PrayerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    mosqueId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    fajr?: NullableStringFieldUpdateOperationsInput | string | null
    shuruk?: NullableStringFieldUpdateOperationsInput | string | null
    zuhr?: NullableStringFieldUpdateOperationsInput | string | null
    asr?: NullableStringFieldUpdateOperationsInput | string | null
    maghrib?: NullableStringFieldUpdateOperationsInput | string | null
    isha?: NullableStringFieldUpdateOperationsInput | string | null
    mechet?: NullableStringFieldUpdateOperationsInput | string | null
    changes?: PrayerTimeChangeUncheckedUpdateManyWithoutPrayerNestedInput
  }

  export type PrayerCreateManyInput = {
    id?: number
    cityId: number
    mosqueId?: number | null
    date?: string | null
    fajr?: string | null
    shuruk?: string | null
    zuhr?: string | null
    asr?: string | null
    maghrib?: string | null
    isha?: string | null
    mechet?: string | null
  }

  export type PrayerUpdateManyMutationInput = {
    date?: NullableStringFieldUpdateOperationsInput | string | null
    fajr?: NullableStringFieldUpdateOperationsInput | string | null
    shuruk?: NullableStringFieldUpdateOperationsInput | string | null
    zuhr?: NullableStringFieldUpdateOperationsInput | string | null
    asr?: NullableStringFieldUpdateOperationsInput | string | null
    maghrib?: NullableStringFieldUpdateOperationsInput | string | null
    isha?: NullableStringFieldUpdateOperationsInput | string | null
    mechet?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrayerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    mosqueId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    fajr?: NullableStringFieldUpdateOperationsInput | string | null
    shuruk?: NullableStringFieldUpdateOperationsInput | string | null
    zuhr?: NullableStringFieldUpdateOperationsInput | string | null
    asr?: NullableStringFieldUpdateOperationsInput | string | null
    maghrib?: NullableStringFieldUpdateOperationsInput | string | null
    isha?: NullableStringFieldUpdateOperationsInput | string | null
    mechet?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MosqueCreateInput = {
    name: string
    logoUrl?: string | null
    admin?: AdminCreateNestedOneWithoutMosqueInput
    fixedPrayerTime?: FixedMosquePrayerTimeCreateNestedOneWithoutMosqueInput
    languageSettings?: MosqueLanguageSettingsCreateNestedOneWithoutMosqueInput
    namesOfAllah?: NameOfAllahCreateNestedManyWithoutMosqueInput
    media?: MediaCreateNestedManyWithoutMosqueInput
    city: CityCreateNestedOneWithoutMosqueInput
    prayers?: PrayerCreateNestedManyWithoutMosqueInput
    qrCodes?: QRCodeCreateNestedManyWithoutMosqueInput
  }

  export type MosqueUncheckedCreateInput = {
    id?: number
    cityId: number
    name: string
    logoUrl?: string | null
    admin?: AdminUncheckedCreateNestedOneWithoutMosqueInput
    fixedPrayerTime?: FixedMosquePrayerTimeUncheckedCreateNestedOneWithoutMosqueInput
    languageSettings?: MosqueLanguageSettingsUncheckedCreateNestedOneWithoutMosqueInput
    namesOfAllah?: NameOfAllahUncheckedCreateNestedManyWithoutMosqueInput
    media?: MediaUncheckedCreateNestedManyWithoutMosqueInput
    prayers?: PrayerUncheckedCreateNestedManyWithoutMosqueInput
    qrCodes?: QRCodeUncheckedCreateNestedManyWithoutMosqueInput
  }

  export type MosqueUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUpdateOneWithoutMosqueNestedInput
    fixedPrayerTime?: FixedMosquePrayerTimeUpdateOneWithoutMosqueNestedInput
    languageSettings?: MosqueLanguageSettingsUpdateOneWithoutMosqueNestedInput
    namesOfAllah?: NameOfAllahUpdateManyWithoutMosqueNestedInput
    media?: MediaUpdateManyWithoutMosqueNestedInput
    city?: CityUpdateOneRequiredWithoutMosqueNestedInput
    prayers?: PrayerUpdateManyWithoutMosqueNestedInput
    qrCodes?: QRCodeUpdateManyWithoutMosqueNestedInput
  }

  export type MosqueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUncheckedUpdateOneWithoutMosqueNestedInput
    fixedPrayerTime?: FixedMosquePrayerTimeUncheckedUpdateOneWithoutMosqueNestedInput
    languageSettings?: MosqueLanguageSettingsUncheckedUpdateOneWithoutMosqueNestedInput
    namesOfAllah?: NameOfAllahUncheckedUpdateManyWithoutMosqueNestedInput
    media?: MediaUncheckedUpdateManyWithoutMosqueNestedInput
    prayers?: PrayerUncheckedUpdateManyWithoutMosqueNestedInput
    qrCodes?: QRCodeUncheckedUpdateManyWithoutMosqueNestedInput
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
    isPrimary?: boolean
    projectName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    mosque: MosqueCreateNestedOneWithoutQrCodesInput
  }

  export type QRCodeUncheckedCreateInput = {
    id?: number
    mosqueId: number
    isPrimary?: boolean
    projectName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
  }

  export type QRCodeUpdateInput = {
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    mosque?: MosqueUpdateOneRequiredWithoutQrCodesNestedInput
  }

  export type QRCodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mosqueId?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type QRCodeCreateManyInput = {
    id?: number
    mosqueId: number
    isPrimary?: boolean
    projectName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
  }

  export type QRCodeUpdateManyMutationInput = {
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type QRCodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mosqueId?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    mosque?: MosqueCreateNestedOneWithoutAdminInput
    prayerChanges?: PrayerTimeChangeCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    role: $Enums.Role
    cityId?: number | null
    mosqueId?: number | null
    prayerChanges?: PrayerTimeChangeUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type AdminUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: CityUpdateOneWithoutAdminNestedInput
    mosque?: MosqueUpdateOneWithoutAdminNestedInput
    prayerChanges?: PrayerTimeChangeUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    mosqueId?: NullableIntFieldUpdateOperationsInput | number | null
    prayerChanges?: PrayerTimeChangeUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AdminCreateManyInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    role: $Enums.Role
    cityId?: number | null
    mosqueId?: number | null
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
    mosqueId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FixedPrayerTimeCreateInput = {
    fajr: string
    shuruk: string
    zuhr: string
    asr: string
    maghrib: string
    isha: string
    mechet?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fajrActive?: boolean
    shurukActive?: boolean
    zuhrActive?: boolean
    asrActive?: boolean
    maghribActive?: boolean
    ishaActive?: boolean
    mechetActive?: boolean
    city: CityCreateNestedOneWithoutFixedPrayerTimeInput
  }

  export type FixedPrayerTimeUncheckedCreateInput = {
    id?: number
    cityId: number
    fajr: string
    shuruk: string
    zuhr: string
    asr: string
    maghrib: string
    isha: string
    mechet?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fajrActive?: boolean
    shurukActive?: boolean
    zuhrActive?: boolean
    asrActive?: boolean
    maghribActive?: boolean
    ishaActive?: boolean
    mechetActive?: boolean
  }

  export type FixedPrayerTimeUpdateInput = {
    fajr?: StringFieldUpdateOperationsInput | string
    shuruk?: StringFieldUpdateOperationsInput | string
    zuhr?: StringFieldUpdateOperationsInput | string
    asr?: StringFieldUpdateOperationsInput | string
    maghrib?: StringFieldUpdateOperationsInput | string
    isha?: StringFieldUpdateOperationsInput | string
    mechet?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fajrActive?: BoolFieldUpdateOperationsInput | boolean
    shurukActive?: BoolFieldUpdateOperationsInput | boolean
    zuhrActive?: BoolFieldUpdateOperationsInput | boolean
    asrActive?: BoolFieldUpdateOperationsInput | boolean
    maghribActive?: BoolFieldUpdateOperationsInput | boolean
    ishaActive?: BoolFieldUpdateOperationsInput | boolean
    mechetActive?: BoolFieldUpdateOperationsInput | boolean
    city?: CityUpdateOneRequiredWithoutFixedPrayerTimeNestedInput
  }

  export type FixedPrayerTimeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    fajr?: StringFieldUpdateOperationsInput | string
    shuruk?: StringFieldUpdateOperationsInput | string
    zuhr?: StringFieldUpdateOperationsInput | string
    asr?: StringFieldUpdateOperationsInput | string
    maghrib?: StringFieldUpdateOperationsInput | string
    isha?: StringFieldUpdateOperationsInput | string
    mechet?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fajrActive?: BoolFieldUpdateOperationsInput | boolean
    shurukActive?: BoolFieldUpdateOperationsInput | boolean
    zuhrActive?: BoolFieldUpdateOperationsInput | boolean
    asrActive?: BoolFieldUpdateOperationsInput | boolean
    maghribActive?: BoolFieldUpdateOperationsInput | boolean
    ishaActive?: BoolFieldUpdateOperationsInput | boolean
    mechetActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FixedPrayerTimeCreateManyInput = {
    id?: number
    cityId: number
    fajr: string
    shuruk: string
    zuhr: string
    asr: string
    maghrib: string
    isha: string
    mechet?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fajrActive?: boolean
    shurukActive?: boolean
    zuhrActive?: boolean
    asrActive?: boolean
    maghribActive?: boolean
    ishaActive?: boolean
    mechetActive?: boolean
  }

  export type FixedPrayerTimeUpdateManyMutationInput = {
    fajr?: StringFieldUpdateOperationsInput | string
    shuruk?: StringFieldUpdateOperationsInput | string
    zuhr?: StringFieldUpdateOperationsInput | string
    asr?: StringFieldUpdateOperationsInput | string
    maghrib?: StringFieldUpdateOperationsInput | string
    isha?: StringFieldUpdateOperationsInput | string
    mechet?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fajrActive?: BoolFieldUpdateOperationsInput | boolean
    shurukActive?: BoolFieldUpdateOperationsInput | boolean
    zuhrActive?: BoolFieldUpdateOperationsInput | boolean
    asrActive?: BoolFieldUpdateOperationsInput | boolean
    maghribActive?: BoolFieldUpdateOperationsInput | boolean
    ishaActive?: BoolFieldUpdateOperationsInput | boolean
    mechetActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FixedPrayerTimeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    fajr?: StringFieldUpdateOperationsInput | string
    shuruk?: StringFieldUpdateOperationsInput | string
    zuhr?: StringFieldUpdateOperationsInput | string
    asr?: StringFieldUpdateOperationsInput | string
    maghrib?: StringFieldUpdateOperationsInput | string
    isha?: StringFieldUpdateOperationsInput | string
    mechet?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fajrActive?: BoolFieldUpdateOperationsInput | boolean
    shurukActive?: BoolFieldUpdateOperationsInput | boolean
    zuhrActive?: BoolFieldUpdateOperationsInput | boolean
    asrActive?: BoolFieldUpdateOperationsInput | boolean
    maghribActive?: BoolFieldUpdateOperationsInput | boolean
    ishaActive?: BoolFieldUpdateOperationsInput | boolean
    mechetActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FixedMosquePrayerTimeCreateInput = {
    fajr: string
    shuruk: string
    zuhr: string
    asr: string
    maghrib: string
    isha: string
    mechet?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fajrActive?: boolean
    shurukActive?: boolean
    zuhrActive?: boolean
    asrActive?: boolean
    maghribActive?: boolean
    ishaActive?: boolean
    mechetActive?: boolean
    fajrIqamaEnabled?: boolean
    fajrIqamaMinutes?: number
    shurukIqamaEnabled?: boolean
    shurukIqamaMinutes?: number
    zuhrIqamaEnabled?: boolean
    zuhrIqamaMinutes?: number
    asrIqamaEnabled?: boolean
    asrIqamaMinutes?: number
    maghribIqamaEnabled?: boolean
    maghribIqamaMinutes?: number
    ishaIqamaEnabled?: boolean
    ishaIqamaMinutes?: number
    mechetIqamaEnabled?: boolean
    mechetIqamaMinutes?: number
    mosque: MosqueCreateNestedOneWithoutFixedPrayerTimeInput
  }

  export type FixedMosquePrayerTimeUncheckedCreateInput = {
    id?: number
    mosqueId: number
    fajr: string
    shuruk: string
    zuhr: string
    asr: string
    maghrib: string
    isha: string
    mechet?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fajrActive?: boolean
    shurukActive?: boolean
    zuhrActive?: boolean
    asrActive?: boolean
    maghribActive?: boolean
    ishaActive?: boolean
    mechetActive?: boolean
    fajrIqamaEnabled?: boolean
    fajrIqamaMinutes?: number
    shurukIqamaEnabled?: boolean
    shurukIqamaMinutes?: number
    zuhrIqamaEnabled?: boolean
    zuhrIqamaMinutes?: number
    asrIqamaEnabled?: boolean
    asrIqamaMinutes?: number
    maghribIqamaEnabled?: boolean
    maghribIqamaMinutes?: number
    ishaIqamaEnabled?: boolean
    ishaIqamaMinutes?: number
    mechetIqamaEnabled?: boolean
    mechetIqamaMinutes?: number
  }

  export type FixedMosquePrayerTimeUpdateInput = {
    fajr?: StringFieldUpdateOperationsInput | string
    shuruk?: StringFieldUpdateOperationsInput | string
    zuhr?: StringFieldUpdateOperationsInput | string
    asr?: StringFieldUpdateOperationsInput | string
    maghrib?: StringFieldUpdateOperationsInput | string
    isha?: StringFieldUpdateOperationsInput | string
    mechet?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fajrActive?: BoolFieldUpdateOperationsInput | boolean
    shurukActive?: BoolFieldUpdateOperationsInput | boolean
    zuhrActive?: BoolFieldUpdateOperationsInput | boolean
    asrActive?: BoolFieldUpdateOperationsInput | boolean
    maghribActive?: BoolFieldUpdateOperationsInput | boolean
    ishaActive?: BoolFieldUpdateOperationsInput | boolean
    mechetActive?: BoolFieldUpdateOperationsInput | boolean
    fajrIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    fajrIqamaMinutes?: IntFieldUpdateOperationsInput | number
    shurukIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    shurukIqamaMinutes?: IntFieldUpdateOperationsInput | number
    zuhrIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    zuhrIqamaMinutes?: IntFieldUpdateOperationsInput | number
    asrIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    asrIqamaMinutes?: IntFieldUpdateOperationsInput | number
    maghribIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    maghribIqamaMinutes?: IntFieldUpdateOperationsInput | number
    ishaIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    ishaIqamaMinutes?: IntFieldUpdateOperationsInput | number
    mechetIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mechetIqamaMinutes?: IntFieldUpdateOperationsInput | number
    mosque?: MosqueUpdateOneRequiredWithoutFixedPrayerTimeNestedInput
  }

  export type FixedMosquePrayerTimeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mosqueId?: IntFieldUpdateOperationsInput | number
    fajr?: StringFieldUpdateOperationsInput | string
    shuruk?: StringFieldUpdateOperationsInput | string
    zuhr?: StringFieldUpdateOperationsInput | string
    asr?: StringFieldUpdateOperationsInput | string
    maghrib?: StringFieldUpdateOperationsInput | string
    isha?: StringFieldUpdateOperationsInput | string
    mechet?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fajrActive?: BoolFieldUpdateOperationsInput | boolean
    shurukActive?: BoolFieldUpdateOperationsInput | boolean
    zuhrActive?: BoolFieldUpdateOperationsInput | boolean
    asrActive?: BoolFieldUpdateOperationsInput | boolean
    maghribActive?: BoolFieldUpdateOperationsInput | boolean
    ishaActive?: BoolFieldUpdateOperationsInput | boolean
    mechetActive?: BoolFieldUpdateOperationsInput | boolean
    fajrIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    fajrIqamaMinutes?: IntFieldUpdateOperationsInput | number
    shurukIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    shurukIqamaMinutes?: IntFieldUpdateOperationsInput | number
    zuhrIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    zuhrIqamaMinutes?: IntFieldUpdateOperationsInput | number
    asrIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    asrIqamaMinutes?: IntFieldUpdateOperationsInput | number
    maghribIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    maghribIqamaMinutes?: IntFieldUpdateOperationsInput | number
    ishaIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    ishaIqamaMinutes?: IntFieldUpdateOperationsInput | number
    mechetIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mechetIqamaMinutes?: IntFieldUpdateOperationsInput | number
  }

  export type FixedMosquePrayerTimeCreateManyInput = {
    id?: number
    mosqueId: number
    fajr: string
    shuruk: string
    zuhr: string
    asr: string
    maghrib: string
    isha: string
    mechet?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fajrActive?: boolean
    shurukActive?: boolean
    zuhrActive?: boolean
    asrActive?: boolean
    maghribActive?: boolean
    ishaActive?: boolean
    mechetActive?: boolean
    fajrIqamaEnabled?: boolean
    fajrIqamaMinutes?: number
    shurukIqamaEnabled?: boolean
    shurukIqamaMinutes?: number
    zuhrIqamaEnabled?: boolean
    zuhrIqamaMinutes?: number
    asrIqamaEnabled?: boolean
    asrIqamaMinutes?: number
    maghribIqamaEnabled?: boolean
    maghribIqamaMinutes?: number
    ishaIqamaEnabled?: boolean
    ishaIqamaMinutes?: number
    mechetIqamaEnabled?: boolean
    mechetIqamaMinutes?: number
  }

  export type FixedMosquePrayerTimeUpdateManyMutationInput = {
    fajr?: StringFieldUpdateOperationsInput | string
    shuruk?: StringFieldUpdateOperationsInput | string
    zuhr?: StringFieldUpdateOperationsInput | string
    asr?: StringFieldUpdateOperationsInput | string
    maghrib?: StringFieldUpdateOperationsInput | string
    isha?: StringFieldUpdateOperationsInput | string
    mechet?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fajrActive?: BoolFieldUpdateOperationsInput | boolean
    shurukActive?: BoolFieldUpdateOperationsInput | boolean
    zuhrActive?: BoolFieldUpdateOperationsInput | boolean
    asrActive?: BoolFieldUpdateOperationsInput | boolean
    maghribActive?: BoolFieldUpdateOperationsInput | boolean
    ishaActive?: BoolFieldUpdateOperationsInput | boolean
    mechetActive?: BoolFieldUpdateOperationsInput | boolean
    fajrIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    fajrIqamaMinutes?: IntFieldUpdateOperationsInput | number
    shurukIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    shurukIqamaMinutes?: IntFieldUpdateOperationsInput | number
    zuhrIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    zuhrIqamaMinutes?: IntFieldUpdateOperationsInput | number
    asrIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    asrIqamaMinutes?: IntFieldUpdateOperationsInput | number
    maghribIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    maghribIqamaMinutes?: IntFieldUpdateOperationsInput | number
    ishaIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    ishaIqamaMinutes?: IntFieldUpdateOperationsInput | number
    mechetIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mechetIqamaMinutes?: IntFieldUpdateOperationsInput | number
  }

  export type FixedMosquePrayerTimeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mosqueId?: IntFieldUpdateOperationsInput | number
    fajr?: StringFieldUpdateOperationsInput | string
    shuruk?: StringFieldUpdateOperationsInput | string
    zuhr?: StringFieldUpdateOperationsInput | string
    asr?: StringFieldUpdateOperationsInput | string
    maghrib?: StringFieldUpdateOperationsInput | string
    isha?: StringFieldUpdateOperationsInput | string
    mechet?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fajrActive?: BoolFieldUpdateOperationsInput | boolean
    shurukActive?: BoolFieldUpdateOperationsInput | boolean
    zuhrActive?: BoolFieldUpdateOperationsInput | boolean
    asrActive?: BoolFieldUpdateOperationsInput | boolean
    maghribActive?: BoolFieldUpdateOperationsInput | boolean
    ishaActive?: BoolFieldUpdateOperationsInput | boolean
    mechetActive?: BoolFieldUpdateOperationsInput | boolean
    fajrIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    fajrIqamaMinutes?: IntFieldUpdateOperationsInput | number
    shurukIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    shurukIqamaMinutes?: IntFieldUpdateOperationsInput | number
    zuhrIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    zuhrIqamaMinutes?: IntFieldUpdateOperationsInput | number
    asrIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    asrIqamaMinutes?: IntFieldUpdateOperationsInput | number
    maghribIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    maghribIqamaMinutes?: IntFieldUpdateOperationsInput | number
    ishaIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    ishaIqamaMinutes?: IntFieldUpdateOperationsInput | number
    mechetIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mechetIqamaMinutes?: IntFieldUpdateOperationsInput | number
  }

  export type PrayerTimeChangeCreateInput = {
    prayerType: string
    oldTime: string
    newTime: string
    shiftMinutes: number
    changedAt?: Date | string
    prayer: PrayerCreateNestedOneWithoutChangesInput
    user: AdminCreateNestedOneWithoutPrayerChangesInput
  }

  export type PrayerTimeChangeUncheckedCreateInput = {
    id?: number
    prayerId: number
    prayerType: string
    oldTime: string
    newTime: string
    shiftMinutes: number
    changedAt?: Date | string
    changedBy: number
  }

  export type PrayerTimeChangeUpdateInput = {
    prayerType?: StringFieldUpdateOperationsInput | string
    oldTime?: StringFieldUpdateOperationsInput | string
    newTime?: StringFieldUpdateOperationsInput | string
    shiftMinutes?: IntFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prayer?: PrayerUpdateOneRequiredWithoutChangesNestedInput
    user?: AdminUpdateOneRequiredWithoutPrayerChangesNestedInput
  }

  export type PrayerTimeChangeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    prayerId?: IntFieldUpdateOperationsInput | number
    prayerType?: StringFieldUpdateOperationsInput | string
    oldTime?: StringFieldUpdateOperationsInput | string
    newTime?: StringFieldUpdateOperationsInput | string
    shiftMinutes?: IntFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedBy?: IntFieldUpdateOperationsInput | number
  }

  export type PrayerTimeChangeCreateManyInput = {
    id?: number
    prayerId: number
    prayerType: string
    oldTime: string
    newTime: string
    shiftMinutes: number
    changedAt?: Date | string
    changedBy: number
  }

  export type PrayerTimeChangeUpdateManyMutationInput = {
    prayerType?: StringFieldUpdateOperationsInput | string
    oldTime?: StringFieldUpdateOperationsInput | string
    newTime?: StringFieldUpdateOperationsInput | string
    shiftMinutes?: IntFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrayerTimeChangeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    prayerId?: IntFieldUpdateOperationsInput | number
    prayerType?: StringFieldUpdateOperationsInput | string
    oldTime?: StringFieldUpdateOperationsInput | string
    newTime?: StringFieldUpdateOperationsInput | string
    shiftMinutes?: IntFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedBy?: IntFieldUpdateOperationsInput | number
  }

  export type AuditLogCreateInput = {
    action: string
    entity: string
    entityId: number
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: AdminCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: number
    userId: number
    action: string
    entity: string
    entityId: number
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: AdminUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: number
    userId: number
    action: string
    entity: string
    entityId: number
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationCreateInput = {
    key: string
    ru: string
    tt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TranslationUncheckedCreateInput = {
    id?: number
    key: string
    ru: string
    tt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TranslationUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    ru?: StringFieldUpdateOperationsInput | string
    tt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    ru?: StringFieldUpdateOperationsInput | string
    tt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationCreateManyInput = {
    id?: number
    key: string
    ru: string
    tt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TranslationUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    ru?: StringFieldUpdateOperationsInput | string
    tt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    ru?: StringFieldUpdateOperationsInput | string
    tt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MosqueLanguageSettingsCreateInput = {
    translationsEnabled?: boolean
    languageToggleEnabled?: boolean
    languageToggleIntervalSeconds?: number
    fridayZuhrAsJomgaEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    mosque: MosqueCreateNestedOneWithoutLanguageSettingsInput
  }

  export type MosqueLanguageSettingsUncheckedCreateInput = {
    id?: number
    mosqueId: number
    translationsEnabled?: boolean
    languageToggleEnabled?: boolean
    languageToggleIntervalSeconds?: number
    fridayZuhrAsJomgaEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MosqueLanguageSettingsUpdateInput = {
    translationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    languageToggleEnabled?: BoolFieldUpdateOperationsInput | boolean
    languageToggleIntervalSeconds?: IntFieldUpdateOperationsInput | number
    fridayZuhrAsJomgaEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mosque?: MosqueUpdateOneRequiredWithoutLanguageSettingsNestedInput
  }

  export type MosqueLanguageSettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mosqueId?: IntFieldUpdateOperationsInput | number
    translationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    languageToggleEnabled?: BoolFieldUpdateOperationsInput | boolean
    languageToggleIntervalSeconds?: IntFieldUpdateOperationsInput | number
    fridayZuhrAsJomgaEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MosqueLanguageSettingsCreateManyInput = {
    id?: number
    mosqueId: number
    translationsEnabled?: boolean
    languageToggleEnabled?: boolean
    languageToggleIntervalSeconds?: number
    fridayZuhrAsJomgaEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MosqueLanguageSettingsUpdateManyMutationInput = {
    translationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    languageToggleEnabled?: BoolFieldUpdateOperationsInput | boolean
    languageToggleIntervalSeconds?: IntFieldUpdateOperationsInput | number
    fridayZuhrAsJomgaEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MosqueLanguageSettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mosqueId?: IntFieldUpdateOperationsInput | number
    translationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    languageToggleEnabled?: BoolFieldUpdateOperationsInput | boolean
    languageToggleIntervalSeconds?: IntFieldUpdateOperationsInput | number
    fridayZuhrAsJomgaEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NameOfAllahCreateInput = {
    arabic: string
    transcription: string
    meaning: string
    transcriptionTatar?: string | null
    meaningTatar?: string | null
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    mosque: MosqueCreateNestedOneWithoutNamesOfAllahInput
  }

  export type NameOfAllahUncheckedCreateInput = {
    id?: number
    mosqueId: number
    arabic: string
    transcription: string
    meaning: string
    transcriptionTatar?: string | null
    meaningTatar?: string | null
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NameOfAllahUpdateInput = {
    arabic?: StringFieldUpdateOperationsInput | string
    transcription?: StringFieldUpdateOperationsInput | string
    meaning?: StringFieldUpdateOperationsInput | string
    transcriptionTatar?: NullableStringFieldUpdateOperationsInput | string | null
    meaningTatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mosque?: MosqueUpdateOneRequiredWithoutNamesOfAllahNestedInput
  }

  export type NameOfAllahUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mosqueId?: IntFieldUpdateOperationsInput | number
    arabic?: StringFieldUpdateOperationsInput | string
    transcription?: StringFieldUpdateOperationsInput | string
    meaning?: StringFieldUpdateOperationsInput | string
    transcriptionTatar?: NullableStringFieldUpdateOperationsInput | string | null
    meaningTatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NameOfAllahCreateManyInput = {
    id?: number
    mosqueId: number
    arabic: string
    transcription: string
    meaning: string
    transcriptionTatar?: string | null
    meaningTatar?: string | null
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NameOfAllahUpdateManyMutationInput = {
    arabic?: StringFieldUpdateOperationsInput | string
    transcription?: StringFieldUpdateOperationsInput | string
    meaning?: StringFieldUpdateOperationsInput | string
    transcriptionTatar?: NullableStringFieldUpdateOperationsInput | string | null
    meaningTatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NameOfAllahUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mosqueId?: IntFieldUpdateOperationsInput | number
    arabic?: StringFieldUpdateOperationsInput | string
    transcription?: StringFieldUpdateOperationsInput | string
    meaning?: StringFieldUpdateOperationsInput | string
    transcriptionTatar?: NullableStringFieldUpdateOperationsInput | string | null
    meaningTatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type AdminNullableRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type FixedPrayerTimeNullableRelationFilter = {
    is?: FixedPrayerTimeWhereInput | null
    isNot?: FixedPrayerTimeWhereInput | null
  }

  export type MosqueListRelationFilter = {
    every?: MosqueWhereInput
    some?: MosqueWhereInput
    none?: MosqueWhereInput
  }

  export type PrayerListRelationFilter = {
    every?: PrayerWhereInput
    some?: PrayerWhereInput
    none?: PrayerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MosqueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrayerOrderByRelationAggregateInput = {
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

  export type CityRelationFilter = {
    is?: CityWhereInput
    isNot?: CityWhereInput
  }

  export type MosqueNullableRelationFilter = {
    is?: MosqueWhereInput | null
    isNot?: MosqueWhereInput | null
  }

  export type PrayerTimeChangeListRelationFilter = {
    every?: PrayerTimeChangeWhereInput
    some?: PrayerTimeChangeWhereInput
    none?: PrayerTimeChangeWhereInput
  }

  export type PrayerTimeChangeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrayerCountOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    mosqueId?: SortOrder
    date?: SortOrder
    fajr?: SortOrder
    shuruk?: SortOrder
    zuhr?: SortOrder
    asr?: SortOrder
    maghrib?: SortOrder
    isha?: SortOrder
    mechet?: SortOrder
  }

  export type PrayerAvgOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    mosqueId?: SortOrder
  }

  export type PrayerMaxOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    mosqueId?: SortOrder
    date?: SortOrder
    fajr?: SortOrder
    shuruk?: SortOrder
    zuhr?: SortOrder
    asr?: SortOrder
    maghrib?: SortOrder
    isha?: SortOrder
    mechet?: SortOrder
  }

  export type PrayerMinOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    mosqueId?: SortOrder
    date?: SortOrder
    fajr?: SortOrder
    shuruk?: SortOrder
    zuhr?: SortOrder
    asr?: SortOrder
    maghrib?: SortOrder
    isha?: SortOrder
    mechet?: SortOrder
  }

  export type PrayerSumOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    mosqueId?: SortOrder
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

  export type FixedMosquePrayerTimeNullableRelationFilter = {
    is?: FixedMosquePrayerTimeWhereInput | null
    isNot?: FixedMosquePrayerTimeWhereInput | null
  }

  export type MosqueLanguageSettingsNullableRelationFilter = {
    is?: MosqueLanguageSettingsWhereInput | null
    isNot?: MosqueLanguageSettingsWhereInput | null
  }

  export type NameOfAllahListRelationFilter = {
    every?: NameOfAllahWhereInput
    some?: NameOfAllahWhereInput
    none?: NameOfAllahWhereInput
  }

  export type MediaListRelationFilter = {
    every?: MediaWhereInput
    some?: MediaWhereInput
    none?: MediaWhereInput
  }

  export type QRCodeListRelationFilter = {
    every?: QRCodeWhereInput
    some?: QRCodeWhereInput
    none?: QRCodeWhereInput
  }

  export type NameOfAllahOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QRCodeOrderByRelationAggregateInput = {
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type QRCodeCountOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    isPrimary?: SortOrder
    projectName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrder
  }

  export type QRCodeAvgOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
  }

  export type QRCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    isPrimary?: SortOrder
    projectName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrder
  }

  export type QRCodeMinOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    isPrimary?: SortOrder
    projectName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrder
  }

  export type QRCodeSumOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type CityNullableRelationFilter = {
    is?: CityWhereInput | null
    isNot?: CityWhereInput | null
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    cityId?: SortOrder
    mosqueId?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    mosqueId?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    cityId?: SortOrder
    mosqueId?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    cityId?: SortOrder
    mosqueId?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    mosqueId?: SortOrder
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

  export type FixedPrayerTimeCountOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    fajr?: SortOrder
    shuruk?: SortOrder
    zuhr?: SortOrder
    asr?: SortOrder
    maghrib?: SortOrder
    isha?: SortOrder
    mechet?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fajrActive?: SortOrder
    shurukActive?: SortOrder
    zuhrActive?: SortOrder
    asrActive?: SortOrder
    maghribActive?: SortOrder
    ishaActive?: SortOrder
    mechetActive?: SortOrder
  }

  export type FixedPrayerTimeAvgOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
  }

  export type FixedPrayerTimeMaxOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    fajr?: SortOrder
    shuruk?: SortOrder
    zuhr?: SortOrder
    asr?: SortOrder
    maghrib?: SortOrder
    isha?: SortOrder
    mechet?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fajrActive?: SortOrder
    shurukActive?: SortOrder
    zuhrActive?: SortOrder
    asrActive?: SortOrder
    maghribActive?: SortOrder
    ishaActive?: SortOrder
    mechetActive?: SortOrder
  }

  export type FixedPrayerTimeMinOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    fajr?: SortOrder
    shuruk?: SortOrder
    zuhr?: SortOrder
    asr?: SortOrder
    maghrib?: SortOrder
    isha?: SortOrder
    mechet?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fajrActive?: SortOrder
    shurukActive?: SortOrder
    zuhrActive?: SortOrder
    asrActive?: SortOrder
    maghribActive?: SortOrder
    ishaActive?: SortOrder
    mechetActive?: SortOrder
  }

  export type FixedPrayerTimeSumOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
  }

  export type FixedMosquePrayerTimeCountOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    fajr?: SortOrder
    shuruk?: SortOrder
    zuhr?: SortOrder
    asr?: SortOrder
    maghrib?: SortOrder
    isha?: SortOrder
    mechet?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fajrActive?: SortOrder
    shurukActive?: SortOrder
    zuhrActive?: SortOrder
    asrActive?: SortOrder
    maghribActive?: SortOrder
    ishaActive?: SortOrder
    mechetActive?: SortOrder
    fajrIqamaEnabled?: SortOrder
    fajrIqamaMinutes?: SortOrder
    shurukIqamaEnabled?: SortOrder
    shurukIqamaMinutes?: SortOrder
    zuhrIqamaEnabled?: SortOrder
    zuhrIqamaMinutes?: SortOrder
    asrIqamaEnabled?: SortOrder
    asrIqamaMinutes?: SortOrder
    maghribIqamaEnabled?: SortOrder
    maghribIqamaMinutes?: SortOrder
    ishaIqamaEnabled?: SortOrder
    ishaIqamaMinutes?: SortOrder
    mechetIqamaEnabled?: SortOrder
    mechetIqamaMinutes?: SortOrder
  }

  export type FixedMosquePrayerTimeAvgOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    fajrIqamaMinutes?: SortOrder
    shurukIqamaMinutes?: SortOrder
    zuhrIqamaMinutes?: SortOrder
    asrIqamaMinutes?: SortOrder
    maghribIqamaMinutes?: SortOrder
    ishaIqamaMinutes?: SortOrder
    mechetIqamaMinutes?: SortOrder
  }

  export type FixedMosquePrayerTimeMaxOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    fajr?: SortOrder
    shuruk?: SortOrder
    zuhr?: SortOrder
    asr?: SortOrder
    maghrib?: SortOrder
    isha?: SortOrder
    mechet?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fajrActive?: SortOrder
    shurukActive?: SortOrder
    zuhrActive?: SortOrder
    asrActive?: SortOrder
    maghribActive?: SortOrder
    ishaActive?: SortOrder
    mechetActive?: SortOrder
    fajrIqamaEnabled?: SortOrder
    fajrIqamaMinutes?: SortOrder
    shurukIqamaEnabled?: SortOrder
    shurukIqamaMinutes?: SortOrder
    zuhrIqamaEnabled?: SortOrder
    zuhrIqamaMinutes?: SortOrder
    asrIqamaEnabled?: SortOrder
    asrIqamaMinutes?: SortOrder
    maghribIqamaEnabled?: SortOrder
    maghribIqamaMinutes?: SortOrder
    ishaIqamaEnabled?: SortOrder
    ishaIqamaMinutes?: SortOrder
    mechetIqamaEnabled?: SortOrder
    mechetIqamaMinutes?: SortOrder
  }

  export type FixedMosquePrayerTimeMinOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    fajr?: SortOrder
    shuruk?: SortOrder
    zuhr?: SortOrder
    asr?: SortOrder
    maghrib?: SortOrder
    isha?: SortOrder
    mechet?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fajrActive?: SortOrder
    shurukActive?: SortOrder
    zuhrActive?: SortOrder
    asrActive?: SortOrder
    maghribActive?: SortOrder
    ishaActive?: SortOrder
    mechetActive?: SortOrder
    fajrIqamaEnabled?: SortOrder
    fajrIqamaMinutes?: SortOrder
    shurukIqamaEnabled?: SortOrder
    shurukIqamaMinutes?: SortOrder
    zuhrIqamaEnabled?: SortOrder
    zuhrIqamaMinutes?: SortOrder
    asrIqamaEnabled?: SortOrder
    asrIqamaMinutes?: SortOrder
    maghribIqamaEnabled?: SortOrder
    maghribIqamaMinutes?: SortOrder
    ishaIqamaEnabled?: SortOrder
    ishaIqamaMinutes?: SortOrder
    mechetIqamaEnabled?: SortOrder
    mechetIqamaMinutes?: SortOrder
  }

  export type FixedMosquePrayerTimeSumOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    fajrIqamaMinutes?: SortOrder
    shurukIqamaMinutes?: SortOrder
    zuhrIqamaMinutes?: SortOrder
    asrIqamaMinutes?: SortOrder
    maghribIqamaMinutes?: SortOrder
    ishaIqamaMinutes?: SortOrder
    mechetIqamaMinutes?: SortOrder
  }

  export type PrayerRelationFilter = {
    is?: PrayerWhereInput
    isNot?: PrayerWhereInput
  }

  export type AdminRelationFilter = {
    is?: AdminWhereInput
    isNot?: AdminWhereInput
  }

  export type PrayerTimeChangeCountOrderByAggregateInput = {
    id?: SortOrder
    prayerId?: SortOrder
    prayerType?: SortOrder
    oldTime?: SortOrder
    newTime?: SortOrder
    shiftMinutes?: SortOrder
    changedAt?: SortOrder
    changedBy?: SortOrder
  }

  export type PrayerTimeChangeAvgOrderByAggregateInput = {
    id?: SortOrder
    prayerId?: SortOrder
    shiftMinutes?: SortOrder
    changedBy?: SortOrder
  }

  export type PrayerTimeChangeMaxOrderByAggregateInput = {
    id?: SortOrder
    prayerId?: SortOrder
    prayerType?: SortOrder
    oldTime?: SortOrder
    newTime?: SortOrder
    shiftMinutes?: SortOrder
    changedAt?: SortOrder
    changedBy?: SortOrder
  }

  export type PrayerTimeChangeMinOrderByAggregateInput = {
    id?: SortOrder
    prayerId?: SortOrder
    prayerType?: SortOrder
    oldTime?: SortOrder
    newTime?: SortOrder
    shiftMinutes?: SortOrder
    changedAt?: SortOrder
    changedBy?: SortOrder
  }

  export type PrayerTimeChangeSumOrderByAggregateInput = {
    id?: SortOrder
    prayerId?: SortOrder
    shiftMinutes?: SortOrder
    changedBy?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entityId?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entityId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type TranslationCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    ru?: SortOrder
    tt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TranslationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TranslationMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    ru?: SortOrder
    tt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TranslationMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    ru?: SortOrder
    tt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TranslationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MosqueLanguageSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    translationsEnabled?: SortOrder
    languageToggleEnabled?: SortOrder
    languageToggleIntervalSeconds?: SortOrder
    fridayZuhrAsJomgaEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MosqueLanguageSettingsAvgOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    languageToggleIntervalSeconds?: SortOrder
  }

  export type MosqueLanguageSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    translationsEnabled?: SortOrder
    languageToggleEnabled?: SortOrder
    languageToggleIntervalSeconds?: SortOrder
    fridayZuhrAsJomgaEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MosqueLanguageSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    translationsEnabled?: SortOrder
    languageToggleEnabled?: SortOrder
    languageToggleIntervalSeconds?: SortOrder
    fridayZuhrAsJomgaEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MosqueLanguageSettingsSumOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    languageToggleIntervalSeconds?: SortOrder
  }

  export type NameOfAllahMosqueIdArabicCompoundUniqueInput = {
    mosqueId: number
    arabic: string
  }

  export type NameOfAllahCountOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    arabic?: SortOrder
    transcription?: SortOrder
    meaning?: SortOrder
    transcriptionTatar?: SortOrder
    meaningTatar?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NameOfAllahAvgOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
  }

  export type NameOfAllahMaxOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    arabic?: SortOrder
    transcription?: SortOrder
    meaning?: SortOrder
    transcriptionTatar?: SortOrder
    meaningTatar?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NameOfAllahMinOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    arabic?: SortOrder
    transcription?: SortOrder
    meaning?: SortOrder
    transcriptionTatar?: SortOrder
    meaningTatar?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NameOfAllahSumOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
  }

  export type AdminCreateNestedOneWithoutCityInput = {
    create?: XOR<AdminCreateWithoutCityInput, AdminUncheckedCreateWithoutCityInput>
    connectOrCreate?: AdminCreateOrConnectWithoutCityInput
    connect?: AdminWhereUniqueInput
  }

  export type FixedPrayerTimeCreateNestedOneWithoutCityInput = {
    create?: XOR<FixedPrayerTimeCreateWithoutCityInput, FixedPrayerTimeUncheckedCreateWithoutCityInput>
    connectOrCreate?: FixedPrayerTimeCreateOrConnectWithoutCityInput
    connect?: FixedPrayerTimeWhereUniqueInput
  }

  export type MosqueCreateNestedManyWithoutCityInput = {
    create?: XOR<MosqueCreateWithoutCityInput, MosqueUncheckedCreateWithoutCityInput> | MosqueCreateWithoutCityInput[] | MosqueUncheckedCreateWithoutCityInput[]
    connectOrCreate?: MosqueCreateOrConnectWithoutCityInput | MosqueCreateOrConnectWithoutCityInput[]
    createMany?: MosqueCreateManyCityInputEnvelope
    connect?: MosqueWhereUniqueInput | MosqueWhereUniqueInput[]
  }

  export type PrayerCreateNestedManyWithoutCityInput = {
    create?: XOR<PrayerCreateWithoutCityInput, PrayerUncheckedCreateWithoutCityInput> | PrayerCreateWithoutCityInput[] | PrayerUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PrayerCreateOrConnectWithoutCityInput | PrayerCreateOrConnectWithoutCityInput[]
    createMany?: PrayerCreateManyCityInputEnvelope
    connect?: PrayerWhereUniqueInput | PrayerWhereUniqueInput[]
  }

  export type AdminUncheckedCreateNestedOneWithoutCityInput = {
    create?: XOR<AdminCreateWithoutCityInput, AdminUncheckedCreateWithoutCityInput>
    connectOrCreate?: AdminCreateOrConnectWithoutCityInput
    connect?: AdminWhereUniqueInput
  }

  export type FixedPrayerTimeUncheckedCreateNestedOneWithoutCityInput = {
    create?: XOR<FixedPrayerTimeCreateWithoutCityInput, FixedPrayerTimeUncheckedCreateWithoutCityInput>
    connectOrCreate?: FixedPrayerTimeCreateOrConnectWithoutCityInput
    connect?: FixedPrayerTimeWhereUniqueInput
  }

  export type MosqueUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<MosqueCreateWithoutCityInput, MosqueUncheckedCreateWithoutCityInput> | MosqueCreateWithoutCityInput[] | MosqueUncheckedCreateWithoutCityInput[]
    connectOrCreate?: MosqueCreateOrConnectWithoutCityInput | MosqueCreateOrConnectWithoutCityInput[]
    createMany?: MosqueCreateManyCityInputEnvelope
    connect?: MosqueWhereUniqueInput | MosqueWhereUniqueInput[]
  }

  export type PrayerUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<PrayerCreateWithoutCityInput, PrayerUncheckedCreateWithoutCityInput> | PrayerCreateWithoutCityInput[] | PrayerUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PrayerCreateOrConnectWithoutCityInput | PrayerCreateOrConnectWithoutCityInput[]
    createMany?: PrayerCreateManyCityInputEnvelope
    connect?: PrayerWhereUniqueInput | PrayerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type FixedPrayerTimeUpdateOneWithoutCityNestedInput = {
    create?: XOR<FixedPrayerTimeCreateWithoutCityInput, FixedPrayerTimeUncheckedCreateWithoutCityInput>
    connectOrCreate?: FixedPrayerTimeCreateOrConnectWithoutCityInput
    upsert?: FixedPrayerTimeUpsertWithoutCityInput
    disconnect?: FixedPrayerTimeWhereInput | boolean
    delete?: FixedPrayerTimeWhereInput | boolean
    connect?: FixedPrayerTimeWhereUniqueInput
    update?: XOR<XOR<FixedPrayerTimeUpdateToOneWithWhereWithoutCityInput, FixedPrayerTimeUpdateWithoutCityInput>, FixedPrayerTimeUncheckedUpdateWithoutCityInput>
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type FixedPrayerTimeUncheckedUpdateOneWithoutCityNestedInput = {
    create?: XOR<FixedPrayerTimeCreateWithoutCityInput, FixedPrayerTimeUncheckedCreateWithoutCityInput>
    connectOrCreate?: FixedPrayerTimeCreateOrConnectWithoutCityInput
    upsert?: FixedPrayerTimeUpsertWithoutCityInput
    disconnect?: FixedPrayerTimeWhereInput | boolean
    delete?: FixedPrayerTimeWhereInput | boolean
    connect?: FixedPrayerTimeWhereUniqueInput
    update?: XOR<XOR<FixedPrayerTimeUpdateToOneWithWhereWithoutCityInput, FixedPrayerTimeUpdateWithoutCityInput>, FixedPrayerTimeUncheckedUpdateWithoutCityInput>
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

  export type CityCreateNestedOneWithoutPrayersInput = {
    create?: XOR<CityCreateWithoutPrayersInput, CityUncheckedCreateWithoutPrayersInput>
    connectOrCreate?: CityCreateOrConnectWithoutPrayersInput
    connect?: CityWhereUniqueInput
  }

  export type MosqueCreateNestedOneWithoutPrayersInput = {
    create?: XOR<MosqueCreateWithoutPrayersInput, MosqueUncheckedCreateWithoutPrayersInput>
    connectOrCreate?: MosqueCreateOrConnectWithoutPrayersInput
    connect?: MosqueWhereUniqueInput
  }

  export type PrayerTimeChangeCreateNestedManyWithoutPrayerInput = {
    create?: XOR<PrayerTimeChangeCreateWithoutPrayerInput, PrayerTimeChangeUncheckedCreateWithoutPrayerInput> | PrayerTimeChangeCreateWithoutPrayerInput[] | PrayerTimeChangeUncheckedCreateWithoutPrayerInput[]
    connectOrCreate?: PrayerTimeChangeCreateOrConnectWithoutPrayerInput | PrayerTimeChangeCreateOrConnectWithoutPrayerInput[]
    createMany?: PrayerTimeChangeCreateManyPrayerInputEnvelope
    connect?: PrayerTimeChangeWhereUniqueInput | PrayerTimeChangeWhereUniqueInput[]
  }

  export type PrayerTimeChangeUncheckedCreateNestedManyWithoutPrayerInput = {
    create?: XOR<PrayerTimeChangeCreateWithoutPrayerInput, PrayerTimeChangeUncheckedCreateWithoutPrayerInput> | PrayerTimeChangeCreateWithoutPrayerInput[] | PrayerTimeChangeUncheckedCreateWithoutPrayerInput[]
    connectOrCreate?: PrayerTimeChangeCreateOrConnectWithoutPrayerInput | PrayerTimeChangeCreateOrConnectWithoutPrayerInput[]
    createMany?: PrayerTimeChangeCreateManyPrayerInputEnvelope
    connect?: PrayerTimeChangeWhereUniqueInput | PrayerTimeChangeWhereUniqueInput[]
  }

  export type CityUpdateOneRequiredWithoutPrayersNestedInput = {
    create?: XOR<CityCreateWithoutPrayersInput, CityUncheckedCreateWithoutPrayersInput>
    connectOrCreate?: CityCreateOrConnectWithoutPrayersInput
    upsert?: CityUpsertWithoutPrayersInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutPrayersInput, CityUpdateWithoutPrayersInput>, CityUncheckedUpdateWithoutPrayersInput>
  }

  export type MosqueUpdateOneWithoutPrayersNestedInput = {
    create?: XOR<MosqueCreateWithoutPrayersInput, MosqueUncheckedCreateWithoutPrayersInput>
    connectOrCreate?: MosqueCreateOrConnectWithoutPrayersInput
    upsert?: MosqueUpsertWithoutPrayersInput
    disconnect?: MosqueWhereInput | boolean
    delete?: MosqueWhereInput | boolean
    connect?: MosqueWhereUniqueInput
    update?: XOR<XOR<MosqueUpdateToOneWithWhereWithoutPrayersInput, MosqueUpdateWithoutPrayersInput>, MosqueUncheckedUpdateWithoutPrayersInput>
  }

  export type PrayerTimeChangeUpdateManyWithoutPrayerNestedInput = {
    create?: XOR<PrayerTimeChangeCreateWithoutPrayerInput, PrayerTimeChangeUncheckedCreateWithoutPrayerInput> | PrayerTimeChangeCreateWithoutPrayerInput[] | PrayerTimeChangeUncheckedCreateWithoutPrayerInput[]
    connectOrCreate?: PrayerTimeChangeCreateOrConnectWithoutPrayerInput | PrayerTimeChangeCreateOrConnectWithoutPrayerInput[]
    upsert?: PrayerTimeChangeUpsertWithWhereUniqueWithoutPrayerInput | PrayerTimeChangeUpsertWithWhereUniqueWithoutPrayerInput[]
    createMany?: PrayerTimeChangeCreateManyPrayerInputEnvelope
    set?: PrayerTimeChangeWhereUniqueInput | PrayerTimeChangeWhereUniqueInput[]
    disconnect?: PrayerTimeChangeWhereUniqueInput | PrayerTimeChangeWhereUniqueInput[]
    delete?: PrayerTimeChangeWhereUniqueInput | PrayerTimeChangeWhereUniqueInput[]
    connect?: PrayerTimeChangeWhereUniqueInput | PrayerTimeChangeWhereUniqueInput[]
    update?: PrayerTimeChangeUpdateWithWhereUniqueWithoutPrayerInput | PrayerTimeChangeUpdateWithWhereUniqueWithoutPrayerInput[]
    updateMany?: PrayerTimeChangeUpdateManyWithWhereWithoutPrayerInput | PrayerTimeChangeUpdateManyWithWhereWithoutPrayerInput[]
    deleteMany?: PrayerTimeChangeScalarWhereInput | PrayerTimeChangeScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PrayerTimeChangeUncheckedUpdateManyWithoutPrayerNestedInput = {
    create?: XOR<PrayerTimeChangeCreateWithoutPrayerInput, PrayerTimeChangeUncheckedCreateWithoutPrayerInput> | PrayerTimeChangeCreateWithoutPrayerInput[] | PrayerTimeChangeUncheckedCreateWithoutPrayerInput[]
    connectOrCreate?: PrayerTimeChangeCreateOrConnectWithoutPrayerInput | PrayerTimeChangeCreateOrConnectWithoutPrayerInput[]
    upsert?: PrayerTimeChangeUpsertWithWhereUniqueWithoutPrayerInput | PrayerTimeChangeUpsertWithWhereUniqueWithoutPrayerInput[]
    createMany?: PrayerTimeChangeCreateManyPrayerInputEnvelope
    set?: PrayerTimeChangeWhereUniqueInput | PrayerTimeChangeWhereUniqueInput[]
    disconnect?: PrayerTimeChangeWhereUniqueInput | PrayerTimeChangeWhereUniqueInput[]
    delete?: PrayerTimeChangeWhereUniqueInput | PrayerTimeChangeWhereUniqueInput[]
    connect?: PrayerTimeChangeWhereUniqueInput | PrayerTimeChangeWhereUniqueInput[]
    update?: PrayerTimeChangeUpdateWithWhereUniqueWithoutPrayerInput | PrayerTimeChangeUpdateWithWhereUniqueWithoutPrayerInput[]
    updateMany?: PrayerTimeChangeUpdateManyWithWhereWithoutPrayerInput | PrayerTimeChangeUpdateManyWithWhereWithoutPrayerInput[]
    deleteMany?: PrayerTimeChangeScalarWhereInput | PrayerTimeChangeScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutMosqueInput = {
    create?: XOR<AdminCreateWithoutMosqueInput, AdminUncheckedCreateWithoutMosqueInput>
    connectOrCreate?: AdminCreateOrConnectWithoutMosqueInput
    connect?: AdminWhereUniqueInput
  }

  export type FixedMosquePrayerTimeCreateNestedOneWithoutMosqueInput = {
    create?: XOR<FixedMosquePrayerTimeCreateWithoutMosqueInput, FixedMosquePrayerTimeUncheckedCreateWithoutMosqueInput>
    connectOrCreate?: FixedMosquePrayerTimeCreateOrConnectWithoutMosqueInput
    connect?: FixedMosquePrayerTimeWhereUniqueInput
  }

  export type MosqueLanguageSettingsCreateNestedOneWithoutMosqueInput = {
    create?: XOR<MosqueLanguageSettingsCreateWithoutMosqueInput, MosqueLanguageSettingsUncheckedCreateWithoutMosqueInput>
    connectOrCreate?: MosqueLanguageSettingsCreateOrConnectWithoutMosqueInput
    connect?: MosqueLanguageSettingsWhereUniqueInput
  }

  export type NameOfAllahCreateNestedManyWithoutMosqueInput = {
    create?: XOR<NameOfAllahCreateWithoutMosqueInput, NameOfAllahUncheckedCreateWithoutMosqueInput> | NameOfAllahCreateWithoutMosqueInput[] | NameOfAllahUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: NameOfAllahCreateOrConnectWithoutMosqueInput | NameOfAllahCreateOrConnectWithoutMosqueInput[]
    createMany?: NameOfAllahCreateManyMosqueInputEnvelope
    connect?: NameOfAllahWhereUniqueInput | NameOfAllahWhereUniqueInput[]
  }

  export type MediaCreateNestedManyWithoutMosqueInput = {
    create?: XOR<MediaCreateWithoutMosqueInput, MediaUncheckedCreateWithoutMosqueInput> | MediaCreateWithoutMosqueInput[] | MediaUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutMosqueInput | MediaCreateOrConnectWithoutMosqueInput[]
    createMany?: MediaCreateManyMosqueInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type CityCreateNestedOneWithoutMosqueInput = {
    create?: XOR<CityCreateWithoutMosqueInput, CityUncheckedCreateWithoutMosqueInput>
    connectOrCreate?: CityCreateOrConnectWithoutMosqueInput
    connect?: CityWhereUniqueInput
  }

  export type PrayerCreateNestedManyWithoutMosqueInput = {
    create?: XOR<PrayerCreateWithoutMosqueInput, PrayerUncheckedCreateWithoutMosqueInput> | PrayerCreateWithoutMosqueInput[] | PrayerUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: PrayerCreateOrConnectWithoutMosqueInput | PrayerCreateOrConnectWithoutMosqueInput[]
    createMany?: PrayerCreateManyMosqueInputEnvelope
    connect?: PrayerWhereUniqueInput | PrayerWhereUniqueInput[]
  }

  export type QRCodeCreateNestedManyWithoutMosqueInput = {
    create?: XOR<QRCodeCreateWithoutMosqueInput, QRCodeUncheckedCreateWithoutMosqueInput> | QRCodeCreateWithoutMosqueInput[] | QRCodeUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: QRCodeCreateOrConnectWithoutMosqueInput | QRCodeCreateOrConnectWithoutMosqueInput[]
    createMany?: QRCodeCreateManyMosqueInputEnvelope
    connect?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
  }

  export type AdminUncheckedCreateNestedOneWithoutMosqueInput = {
    create?: XOR<AdminCreateWithoutMosqueInput, AdminUncheckedCreateWithoutMosqueInput>
    connectOrCreate?: AdminCreateOrConnectWithoutMosqueInput
    connect?: AdminWhereUniqueInput
  }

  export type FixedMosquePrayerTimeUncheckedCreateNestedOneWithoutMosqueInput = {
    create?: XOR<FixedMosquePrayerTimeCreateWithoutMosqueInput, FixedMosquePrayerTimeUncheckedCreateWithoutMosqueInput>
    connectOrCreate?: FixedMosquePrayerTimeCreateOrConnectWithoutMosqueInput
    connect?: FixedMosquePrayerTimeWhereUniqueInput
  }

  export type MosqueLanguageSettingsUncheckedCreateNestedOneWithoutMosqueInput = {
    create?: XOR<MosqueLanguageSettingsCreateWithoutMosqueInput, MosqueLanguageSettingsUncheckedCreateWithoutMosqueInput>
    connectOrCreate?: MosqueLanguageSettingsCreateOrConnectWithoutMosqueInput
    connect?: MosqueLanguageSettingsWhereUniqueInput
  }

  export type NameOfAllahUncheckedCreateNestedManyWithoutMosqueInput = {
    create?: XOR<NameOfAllahCreateWithoutMosqueInput, NameOfAllahUncheckedCreateWithoutMosqueInput> | NameOfAllahCreateWithoutMosqueInput[] | NameOfAllahUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: NameOfAllahCreateOrConnectWithoutMosqueInput | NameOfAllahCreateOrConnectWithoutMosqueInput[]
    createMany?: NameOfAllahCreateManyMosqueInputEnvelope
    connect?: NameOfAllahWhereUniqueInput | NameOfAllahWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutMosqueInput = {
    create?: XOR<MediaCreateWithoutMosqueInput, MediaUncheckedCreateWithoutMosqueInput> | MediaCreateWithoutMosqueInput[] | MediaUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutMosqueInput | MediaCreateOrConnectWithoutMosqueInput[]
    createMany?: MediaCreateManyMosqueInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type PrayerUncheckedCreateNestedManyWithoutMosqueInput = {
    create?: XOR<PrayerCreateWithoutMosqueInput, PrayerUncheckedCreateWithoutMosqueInput> | PrayerCreateWithoutMosqueInput[] | PrayerUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: PrayerCreateOrConnectWithoutMosqueInput | PrayerCreateOrConnectWithoutMosqueInput[]
    createMany?: PrayerCreateManyMosqueInputEnvelope
    connect?: PrayerWhereUniqueInput | PrayerWhereUniqueInput[]
  }

  export type QRCodeUncheckedCreateNestedManyWithoutMosqueInput = {
    create?: XOR<QRCodeCreateWithoutMosqueInput, QRCodeUncheckedCreateWithoutMosqueInput> | QRCodeCreateWithoutMosqueInput[] | QRCodeUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: QRCodeCreateOrConnectWithoutMosqueInput | QRCodeCreateOrConnectWithoutMosqueInput[]
    createMany?: QRCodeCreateManyMosqueInputEnvelope
    connect?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
  }

  export type AdminUpdateOneWithoutMosqueNestedInput = {
    create?: XOR<AdminCreateWithoutMosqueInput, AdminUncheckedCreateWithoutMosqueInput>
    connectOrCreate?: AdminCreateOrConnectWithoutMosqueInput
    upsert?: AdminUpsertWithoutMosqueInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutMosqueInput, AdminUpdateWithoutMosqueInput>, AdminUncheckedUpdateWithoutMosqueInput>
  }

  export type FixedMosquePrayerTimeUpdateOneWithoutMosqueNestedInput = {
    create?: XOR<FixedMosquePrayerTimeCreateWithoutMosqueInput, FixedMosquePrayerTimeUncheckedCreateWithoutMosqueInput>
    connectOrCreate?: FixedMosquePrayerTimeCreateOrConnectWithoutMosqueInput
    upsert?: FixedMosquePrayerTimeUpsertWithoutMosqueInput
    disconnect?: FixedMosquePrayerTimeWhereInput | boolean
    delete?: FixedMosquePrayerTimeWhereInput | boolean
    connect?: FixedMosquePrayerTimeWhereUniqueInput
    update?: XOR<XOR<FixedMosquePrayerTimeUpdateToOneWithWhereWithoutMosqueInput, FixedMosquePrayerTimeUpdateWithoutMosqueInput>, FixedMosquePrayerTimeUncheckedUpdateWithoutMosqueInput>
  }

  export type MosqueLanguageSettingsUpdateOneWithoutMosqueNestedInput = {
    create?: XOR<MosqueLanguageSettingsCreateWithoutMosqueInput, MosqueLanguageSettingsUncheckedCreateWithoutMosqueInput>
    connectOrCreate?: MosqueLanguageSettingsCreateOrConnectWithoutMosqueInput
    upsert?: MosqueLanguageSettingsUpsertWithoutMosqueInput
    disconnect?: MosqueLanguageSettingsWhereInput | boolean
    delete?: MosqueLanguageSettingsWhereInput | boolean
    connect?: MosqueLanguageSettingsWhereUniqueInput
    update?: XOR<XOR<MosqueLanguageSettingsUpdateToOneWithWhereWithoutMosqueInput, MosqueLanguageSettingsUpdateWithoutMosqueInput>, MosqueLanguageSettingsUncheckedUpdateWithoutMosqueInput>
  }

  export type NameOfAllahUpdateManyWithoutMosqueNestedInput = {
    create?: XOR<NameOfAllahCreateWithoutMosqueInput, NameOfAllahUncheckedCreateWithoutMosqueInput> | NameOfAllahCreateWithoutMosqueInput[] | NameOfAllahUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: NameOfAllahCreateOrConnectWithoutMosqueInput | NameOfAllahCreateOrConnectWithoutMosqueInput[]
    upsert?: NameOfAllahUpsertWithWhereUniqueWithoutMosqueInput | NameOfAllahUpsertWithWhereUniqueWithoutMosqueInput[]
    createMany?: NameOfAllahCreateManyMosqueInputEnvelope
    set?: NameOfAllahWhereUniqueInput | NameOfAllahWhereUniqueInput[]
    disconnect?: NameOfAllahWhereUniqueInput | NameOfAllahWhereUniqueInput[]
    delete?: NameOfAllahWhereUniqueInput | NameOfAllahWhereUniqueInput[]
    connect?: NameOfAllahWhereUniqueInput | NameOfAllahWhereUniqueInput[]
    update?: NameOfAllahUpdateWithWhereUniqueWithoutMosqueInput | NameOfAllahUpdateWithWhereUniqueWithoutMosqueInput[]
    updateMany?: NameOfAllahUpdateManyWithWhereWithoutMosqueInput | NameOfAllahUpdateManyWithWhereWithoutMosqueInput[]
    deleteMany?: NameOfAllahScalarWhereInput | NameOfAllahScalarWhereInput[]
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

  export type CityUpdateOneRequiredWithoutMosqueNestedInput = {
    create?: XOR<CityCreateWithoutMosqueInput, CityUncheckedCreateWithoutMosqueInput>
    connectOrCreate?: CityCreateOrConnectWithoutMosqueInput
    upsert?: CityUpsertWithoutMosqueInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutMosqueInput, CityUpdateWithoutMosqueInput>, CityUncheckedUpdateWithoutMosqueInput>
  }

  export type PrayerUpdateManyWithoutMosqueNestedInput = {
    create?: XOR<PrayerCreateWithoutMosqueInput, PrayerUncheckedCreateWithoutMosqueInput> | PrayerCreateWithoutMosqueInput[] | PrayerUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: PrayerCreateOrConnectWithoutMosqueInput | PrayerCreateOrConnectWithoutMosqueInput[]
    upsert?: PrayerUpsertWithWhereUniqueWithoutMosqueInput | PrayerUpsertWithWhereUniqueWithoutMosqueInput[]
    createMany?: PrayerCreateManyMosqueInputEnvelope
    set?: PrayerWhereUniqueInput | PrayerWhereUniqueInput[]
    disconnect?: PrayerWhereUniqueInput | PrayerWhereUniqueInput[]
    delete?: PrayerWhereUniqueInput | PrayerWhereUniqueInput[]
    connect?: PrayerWhereUniqueInput | PrayerWhereUniqueInput[]
    update?: PrayerUpdateWithWhereUniqueWithoutMosqueInput | PrayerUpdateWithWhereUniqueWithoutMosqueInput[]
    updateMany?: PrayerUpdateManyWithWhereWithoutMosqueInput | PrayerUpdateManyWithWhereWithoutMosqueInput[]
    deleteMany?: PrayerScalarWhereInput | PrayerScalarWhereInput[]
  }

  export type QRCodeUpdateManyWithoutMosqueNestedInput = {
    create?: XOR<QRCodeCreateWithoutMosqueInput, QRCodeUncheckedCreateWithoutMosqueInput> | QRCodeCreateWithoutMosqueInput[] | QRCodeUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: QRCodeCreateOrConnectWithoutMosqueInput | QRCodeCreateOrConnectWithoutMosqueInput[]
    upsert?: QRCodeUpsertWithWhereUniqueWithoutMosqueInput | QRCodeUpsertWithWhereUniqueWithoutMosqueInput[]
    createMany?: QRCodeCreateManyMosqueInputEnvelope
    set?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    disconnect?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    delete?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    connect?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    update?: QRCodeUpdateWithWhereUniqueWithoutMosqueInput | QRCodeUpdateWithWhereUniqueWithoutMosqueInput[]
    updateMany?: QRCodeUpdateManyWithWhereWithoutMosqueInput | QRCodeUpdateManyWithWhereWithoutMosqueInput[]
    deleteMany?: QRCodeScalarWhereInput | QRCodeScalarWhereInput[]
  }

  export type AdminUncheckedUpdateOneWithoutMosqueNestedInput = {
    create?: XOR<AdminCreateWithoutMosqueInput, AdminUncheckedCreateWithoutMosqueInput>
    connectOrCreate?: AdminCreateOrConnectWithoutMosqueInput
    upsert?: AdminUpsertWithoutMosqueInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutMosqueInput, AdminUpdateWithoutMosqueInput>, AdminUncheckedUpdateWithoutMosqueInput>
  }

  export type FixedMosquePrayerTimeUncheckedUpdateOneWithoutMosqueNestedInput = {
    create?: XOR<FixedMosquePrayerTimeCreateWithoutMosqueInput, FixedMosquePrayerTimeUncheckedCreateWithoutMosqueInput>
    connectOrCreate?: FixedMosquePrayerTimeCreateOrConnectWithoutMosqueInput
    upsert?: FixedMosquePrayerTimeUpsertWithoutMosqueInput
    disconnect?: FixedMosquePrayerTimeWhereInput | boolean
    delete?: FixedMosquePrayerTimeWhereInput | boolean
    connect?: FixedMosquePrayerTimeWhereUniqueInput
    update?: XOR<XOR<FixedMosquePrayerTimeUpdateToOneWithWhereWithoutMosqueInput, FixedMosquePrayerTimeUpdateWithoutMosqueInput>, FixedMosquePrayerTimeUncheckedUpdateWithoutMosqueInput>
  }

  export type MosqueLanguageSettingsUncheckedUpdateOneWithoutMosqueNestedInput = {
    create?: XOR<MosqueLanguageSettingsCreateWithoutMosqueInput, MosqueLanguageSettingsUncheckedCreateWithoutMosqueInput>
    connectOrCreate?: MosqueLanguageSettingsCreateOrConnectWithoutMosqueInput
    upsert?: MosqueLanguageSettingsUpsertWithoutMosqueInput
    disconnect?: MosqueLanguageSettingsWhereInput | boolean
    delete?: MosqueLanguageSettingsWhereInput | boolean
    connect?: MosqueLanguageSettingsWhereUniqueInput
    update?: XOR<XOR<MosqueLanguageSettingsUpdateToOneWithWhereWithoutMosqueInput, MosqueLanguageSettingsUpdateWithoutMosqueInput>, MosqueLanguageSettingsUncheckedUpdateWithoutMosqueInput>
  }

  export type NameOfAllahUncheckedUpdateManyWithoutMosqueNestedInput = {
    create?: XOR<NameOfAllahCreateWithoutMosqueInput, NameOfAllahUncheckedCreateWithoutMosqueInput> | NameOfAllahCreateWithoutMosqueInput[] | NameOfAllahUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: NameOfAllahCreateOrConnectWithoutMosqueInput | NameOfAllahCreateOrConnectWithoutMosqueInput[]
    upsert?: NameOfAllahUpsertWithWhereUniqueWithoutMosqueInput | NameOfAllahUpsertWithWhereUniqueWithoutMosqueInput[]
    createMany?: NameOfAllahCreateManyMosqueInputEnvelope
    set?: NameOfAllahWhereUniqueInput | NameOfAllahWhereUniqueInput[]
    disconnect?: NameOfAllahWhereUniqueInput | NameOfAllahWhereUniqueInput[]
    delete?: NameOfAllahWhereUniqueInput | NameOfAllahWhereUniqueInput[]
    connect?: NameOfAllahWhereUniqueInput | NameOfAllahWhereUniqueInput[]
    update?: NameOfAllahUpdateWithWhereUniqueWithoutMosqueInput | NameOfAllahUpdateWithWhereUniqueWithoutMosqueInput[]
    updateMany?: NameOfAllahUpdateManyWithWhereWithoutMosqueInput | NameOfAllahUpdateManyWithWhereWithoutMosqueInput[]
    deleteMany?: NameOfAllahScalarWhereInput | NameOfAllahScalarWhereInput[]
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

  export type PrayerUncheckedUpdateManyWithoutMosqueNestedInput = {
    create?: XOR<PrayerCreateWithoutMosqueInput, PrayerUncheckedCreateWithoutMosqueInput> | PrayerCreateWithoutMosqueInput[] | PrayerUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: PrayerCreateOrConnectWithoutMosqueInput | PrayerCreateOrConnectWithoutMosqueInput[]
    upsert?: PrayerUpsertWithWhereUniqueWithoutMosqueInput | PrayerUpsertWithWhereUniqueWithoutMosqueInput[]
    createMany?: PrayerCreateManyMosqueInputEnvelope
    set?: PrayerWhereUniqueInput | PrayerWhereUniqueInput[]
    disconnect?: PrayerWhereUniqueInput | PrayerWhereUniqueInput[]
    delete?: PrayerWhereUniqueInput | PrayerWhereUniqueInput[]
    connect?: PrayerWhereUniqueInput | PrayerWhereUniqueInput[]
    update?: PrayerUpdateWithWhereUniqueWithoutMosqueInput | PrayerUpdateWithWhereUniqueWithoutMosqueInput[]
    updateMany?: PrayerUpdateManyWithWhereWithoutMosqueInput | PrayerUpdateManyWithWhereWithoutMosqueInput[]
    deleteMany?: PrayerScalarWhereInput | PrayerScalarWhereInput[]
  }

  export type QRCodeUncheckedUpdateManyWithoutMosqueNestedInput = {
    create?: XOR<QRCodeCreateWithoutMosqueInput, QRCodeUncheckedCreateWithoutMosqueInput> | QRCodeCreateWithoutMosqueInput[] | QRCodeUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: QRCodeCreateOrConnectWithoutMosqueInput | QRCodeCreateOrConnectWithoutMosqueInput[]
    upsert?: QRCodeUpsertWithWhereUniqueWithoutMosqueInput | QRCodeUpsertWithWhereUniqueWithoutMosqueInput[]
    createMany?: QRCodeCreateManyMosqueInputEnvelope
    set?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    disconnect?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    delete?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    connect?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    update?: QRCodeUpdateWithWhereUniqueWithoutMosqueInput | QRCodeUpdateWithWhereUniqueWithoutMosqueInput[]
    updateMany?: QRCodeUpdateManyWithWhereWithoutMosqueInput | QRCodeUpdateManyWithWhereWithoutMosqueInput[]
    deleteMany?: QRCodeScalarWhereInput | QRCodeScalarWhereInput[]
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

  export type MosqueCreateNestedOneWithoutQrCodesInput = {
    create?: XOR<MosqueCreateWithoutQrCodesInput, MosqueUncheckedCreateWithoutQrCodesInput>
    connectOrCreate?: MosqueCreateOrConnectWithoutQrCodesInput
    connect?: MosqueWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MosqueUpdateOneRequiredWithoutQrCodesNestedInput = {
    create?: XOR<MosqueCreateWithoutQrCodesInput, MosqueUncheckedCreateWithoutQrCodesInput>
    connectOrCreate?: MosqueCreateOrConnectWithoutQrCodesInput
    upsert?: MosqueUpsertWithoutQrCodesInput
    connect?: MosqueWhereUniqueInput
    update?: XOR<XOR<MosqueUpdateToOneWithWhereWithoutQrCodesInput, MosqueUpdateWithoutQrCodesInput>, MosqueUncheckedUpdateWithoutQrCodesInput>
  }

  export type CityCreateNestedOneWithoutAdminInput = {
    create?: XOR<CityCreateWithoutAdminInput, CityUncheckedCreateWithoutAdminInput>
    connectOrCreate?: CityCreateOrConnectWithoutAdminInput
    connect?: CityWhereUniqueInput
  }

  export type MosqueCreateNestedOneWithoutAdminInput = {
    create?: XOR<MosqueCreateWithoutAdminInput, MosqueUncheckedCreateWithoutAdminInput>
    connectOrCreate?: MosqueCreateOrConnectWithoutAdminInput
    connect?: MosqueWhereUniqueInput
  }

  export type PrayerTimeChangeCreateNestedManyWithoutUserInput = {
    create?: XOR<PrayerTimeChangeCreateWithoutUserInput, PrayerTimeChangeUncheckedCreateWithoutUserInput> | PrayerTimeChangeCreateWithoutUserInput[] | PrayerTimeChangeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PrayerTimeChangeCreateOrConnectWithoutUserInput | PrayerTimeChangeCreateOrConnectWithoutUserInput[]
    createMany?: PrayerTimeChangeCreateManyUserInputEnvelope
    connect?: PrayerTimeChangeWhereUniqueInput | PrayerTimeChangeWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type PrayerTimeChangeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PrayerTimeChangeCreateWithoutUserInput, PrayerTimeChangeUncheckedCreateWithoutUserInput> | PrayerTimeChangeCreateWithoutUserInput[] | PrayerTimeChangeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PrayerTimeChangeCreateOrConnectWithoutUserInput | PrayerTimeChangeCreateOrConnectWithoutUserInput[]
    createMany?: PrayerTimeChangeCreateManyUserInputEnvelope
    connect?: PrayerTimeChangeWhereUniqueInput | PrayerTimeChangeWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
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

  export type MosqueUpdateOneWithoutAdminNestedInput = {
    create?: XOR<MosqueCreateWithoutAdminInput, MosqueUncheckedCreateWithoutAdminInput>
    connectOrCreate?: MosqueCreateOrConnectWithoutAdminInput
    upsert?: MosqueUpsertWithoutAdminInput
    disconnect?: MosqueWhereInput | boolean
    delete?: MosqueWhereInput | boolean
    connect?: MosqueWhereUniqueInput
    update?: XOR<XOR<MosqueUpdateToOneWithWhereWithoutAdminInput, MosqueUpdateWithoutAdminInput>, MosqueUncheckedUpdateWithoutAdminInput>
  }

  export type PrayerTimeChangeUpdateManyWithoutUserNestedInput = {
    create?: XOR<PrayerTimeChangeCreateWithoutUserInput, PrayerTimeChangeUncheckedCreateWithoutUserInput> | PrayerTimeChangeCreateWithoutUserInput[] | PrayerTimeChangeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PrayerTimeChangeCreateOrConnectWithoutUserInput | PrayerTimeChangeCreateOrConnectWithoutUserInput[]
    upsert?: PrayerTimeChangeUpsertWithWhereUniqueWithoutUserInput | PrayerTimeChangeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PrayerTimeChangeCreateManyUserInputEnvelope
    set?: PrayerTimeChangeWhereUniqueInput | PrayerTimeChangeWhereUniqueInput[]
    disconnect?: PrayerTimeChangeWhereUniqueInput | PrayerTimeChangeWhereUniqueInput[]
    delete?: PrayerTimeChangeWhereUniqueInput | PrayerTimeChangeWhereUniqueInput[]
    connect?: PrayerTimeChangeWhereUniqueInput | PrayerTimeChangeWhereUniqueInput[]
    update?: PrayerTimeChangeUpdateWithWhereUniqueWithoutUserInput | PrayerTimeChangeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PrayerTimeChangeUpdateManyWithWhereWithoutUserInput | PrayerTimeChangeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PrayerTimeChangeScalarWhereInput | PrayerTimeChangeScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type PrayerTimeChangeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PrayerTimeChangeCreateWithoutUserInput, PrayerTimeChangeUncheckedCreateWithoutUserInput> | PrayerTimeChangeCreateWithoutUserInput[] | PrayerTimeChangeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PrayerTimeChangeCreateOrConnectWithoutUserInput | PrayerTimeChangeCreateOrConnectWithoutUserInput[]
    upsert?: PrayerTimeChangeUpsertWithWhereUniqueWithoutUserInput | PrayerTimeChangeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PrayerTimeChangeCreateManyUserInputEnvelope
    set?: PrayerTimeChangeWhereUniqueInput | PrayerTimeChangeWhereUniqueInput[]
    disconnect?: PrayerTimeChangeWhereUniqueInput | PrayerTimeChangeWhereUniqueInput[]
    delete?: PrayerTimeChangeWhereUniqueInput | PrayerTimeChangeWhereUniqueInput[]
    connect?: PrayerTimeChangeWhereUniqueInput | PrayerTimeChangeWhereUniqueInput[]
    update?: PrayerTimeChangeUpdateWithWhereUniqueWithoutUserInput | PrayerTimeChangeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PrayerTimeChangeUpdateManyWithWhereWithoutUserInput | PrayerTimeChangeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PrayerTimeChangeScalarWhereInput | PrayerTimeChangeScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type CityCreateNestedOneWithoutFixedPrayerTimeInput = {
    create?: XOR<CityCreateWithoutFixedPrayerTimeInput, CityUncheckedCreateWithoutFixedPrayerTimeInput>
    connectOrCreate?: CityCreateOrConnectWithoutFixedPrayerTimeInput
    connect?: CityWhereUniqueInput
  }

  export type CityUpdateOneRequiredWithoutFixedPrayerTimeNestedInput = {
    create?: XOR<CityCreateWithoutFixedPrayerTimeInput, CityUncheckedCreateWithoutFixedPrayerTimeInput>
    connectOrCreate?: CityCreateOrConnectWithoutFixedPrayerTimeInput
    upsert?: CityUpsertWithoutFixedPrayerTimeInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutFixedPrayerTimeInput, CityUpdateWithoutFixedPrayerTimeInput>, CityUncheckedUpdateWithoutFixedPrayerTimeInput>
  }

  export type MosqueCreateNestedOneWithoutFixedPrayerTimeInput = {
    create?: XOR<MosqueCreateWithoutFixedPrayerTimeInput, MosqueUncheckedCreateWithoutFixedPrayerTimeInput>
    connectOrCreate?: MosqueCreateOrConnectWithoutFixedPrayerTimeInput
    connect?: MosqueWhereUniqueInput
  }

  export type MosqueUpdateOneRequiredWithoutFixedPrayerTimeNestedInput = {
    create?: XOR<MosqueCreateWithoutFixedPrayerTimeInput, MosqueUncheckedCreateWithoutFixedPrayerTimeInput>
    connectOrCreate?: MosqueCreateOrConnectWithoutFixedPrayerTimeInput
    upsert?: MosqueUpsertWithoutFixedPrayerTimeInput
    connect?: MosqueWhereUniqueInput
    update?: XOR<XOR<MosqueUpdateToOneWithWhereWithoutFixedPrayerTimeInput, MosqueUpdateWithoutFixedPrayerTimeInput>, MosqueUncheckedUpdateWithoutFixedPrayerTimeInput>
  }

  export type PrayerCreateNestedOneWithoutChangesInput = {
    create?: XOR<PrayerCreateWithoutChangesInput, PrayerUncheckedCreateWithoutChangesInput>
    connectOrCreate?: PrayerCreateOrConnectWithoutChangesInput
    connect?: PrayerWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutPrayerChangesInput = {
    create?: XOR<AdminCreateWithoutPrayerChangesInput, AdminUncheckedCreateWithoutPrayerChangesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutPrayerChangesInput
    connect?: AdminWhereUniqueInput
  }

  export type PrayerUpdateOneRequiredWithoutChangesNestedInput = {
    create?: XOR<PrayerCreateWithoutChangesInput, PrayerUncheckedCreateWithoutChangesInput>
    connectOrCreate?: PrayerCreateOrConnectWithoutChangesInput
    upsert?: PrayerUpsertWithoutChangesInput
    connect?: PrayerWhereUniqueInput
    update?: XOR<XOR<PrayerUpdateToOneWithWhereWithoutChangesInput, PrayerUpdateWithoutChangesInput>, PrayerUncheckedUpdateWithoutChangesInput>
  }

  export type AdminUpdateOneRequiredWithoutPrayerChangesNestedInput = {
    create?: XOR<AdminCreateWithoutPrayerChangesInput, AdminUncheckedCreateWithoutPrayerChangesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutPrayerChangesInput
    upsert?: AdminUpsertWithoutPrayerChangesInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutPrayerChangesInput, AdminUpdateWithoutPrayerChangesInput>, AdminUncheckedUpdateWithoutPrayerChangesInput>
  }

  export type AdminCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<AdminCreateWithoutAuditLogsInput, AdminUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutAuditLogsInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<AdminCreateWithoutAuditLogsInput, AdminUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutAuditLogsInput
    upsert?: AdminUpsertWithoutAuditLogsInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutAuditLogsInput, AdminUpdateWithoutAuditLogsInput>, AdminUncheckedUpdateWithoutAuditLogsInput>
  }

  export type MosqueCreateNestedOneWithoutLanguageSettingsInput = {
    create?: XOR<MosqueCreateWithoutLanguageSettingsInput, MosqueUncheckedCreateWithoutLanguageSettingsInput>
    connectOrCreate?: MosqueCreateOrConnectWithoutLanguageSettingsInput
    connect?: MosqueWhereUniqueInput
  }

  export type MosqueUpdateOneRequiredWithoutLanguageSettingsNestedInput = {
    create?: XOR<MosqueCreateWithoutLanguageSettingsInput, MosqueUncheckedCreateWithoutLanguageSettingsInput>
    connectOrCreate?: MosqueCreateOrConnectWithoutLanguageSettingsInput
    upsert?: MosqueUpsertWithoutLanguageSettingsInput
    connect?: MosqueWhereUniqueInput
    update?: XOR<XOR<MosqueUpdateToOneWithWhereWithoutLanguageSettingsInput, MosqueUpdateWithoutLanguageSettingsInput>, MosqueUncheckedUpdateWithoutLanguageSettingsInput>
  }

  export type MosqueCreateNestedOneWithoutNamesOfAllahInput = {
    create?: XOR<MosqueCreateWithoutNamesOfAllahInput, MosqueUncheckedCreateWithoutNamesOfAllahInput>
    connectOrCreate?: MosqueCreateOrConnectWithoutNamesOfAllahInput
    connect?: MosqueWhereUniqueInput
  }

  export type MosqueUpdateOneRequiredWithoutNamesOfAllahNestedInput = {
    create?: XOR<MosqueCreateWithoutNamesOfAllahInput, MosqueUncheckedCreateWithoutNamesOfAllahInput>
    connectOrCreate?: MosqueCreateOrConnectWithoutNamesOfAllahInput
    upsert?: MosqueUpsertWithoutNamesOfAllahInput
    connect?: MosqueWhereUniqueInput
    update?: XOR<XOR<MosqueUpdateToOneWithWhereWithoutNamesOfAllahInput, MosqueUpdateWithoutNamesOfAllahInput>, MosqueUncheckedUpdateWithoutNamesOfAllahInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AdminCreateWithoutCityInput = {
    email: string
    password: string
    createdAt?: Date | string
    role: $Enums.Role
    mosque?: MosqueCreateNestedOneWithoutAdminInput
    prayerChanges?: PrayerTimeChangeCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type AdminUncheckedCreateWithoutCityInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    role: $Enums.Role
    mosqueId?: number | null
    prayerChanges?: PrayerTimeChangeUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type AdminCreateOrConnectWithoutCityInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutCityInput, AdminUncheckedCreateWithoutCityInput>
  }

  export type FixedPrayerTimeCreateWithoutCityInput = {
    fajr: string
    shuruk: string
    zuhr: string
    asr: string
    maghrib: string
    isha: string
    mechet?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fajrActive?: boolean
    shurukActive?: boolean
    zuhrActive?: boolean
    asrActive?: boolean
    maghribActive?: boolean
    ishaActive?: boolean
    mechetActive?: boolean
  }

  export type FixedPrayerTimeUncheckedCreateWithoutCityInput = {
    id?: number
    fajr: string
    shuruk: string
    zuhr: string
    asr: string
    maghrib: string
    isha: string
    mechet?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fajrActive?: boolean
    shurukActive?: boolean
    zuhrActive?: boolean
    asrActive?: boolean
    maghribActive?: boolean
    ishaActive?: boolean
    mechetActive?: boolean
  }

  export type FixedPrayerTimeCreateOrConnectWithoutCityInput = {
    where: FixedPrayerTimeWhereUniqueInput
    create: XOR<FixedPrayerTimeCreateWithoutCityInput, FixedPrayerTimeUncheckedCreateWithoutCityInput>
  }

  export type MosqueCreateWithoutCityInput = {
    name: string
    logoUrl?: string | null
    admin?: AdminCreateNestedOneWithoutMosqueInput
    fixedPrayerTime?: FixedMosquePrayerTimeCreateNestedOneWithoutMosqueInput
    languageSettings?: MosqueLanguageSettingsCreateNestedOneWithoutMosqueInput
    namesOfAllah?: NameOfAllahCreateNestedManyWithoutMosqueInput
    media?: MediaCreateNestedManyWithoutMosqueInput
    prayers?: PrayerCreateNestedManyWithoutMosqueInput
    qrCodes?: QRCodeCreateNestedManyWithoutMosqueInput
  }

  export type MosqueUncheckedCreateWithoutCityInput = {
    id?: number
    name: string
    logoUrl?: string | null
    admin?: AdminUncheckedCreateNestedOneWithoutMosqueInput
    fixedPrayerTime?: FixedMosquePrayerTimeUncheckedCreateNestedOneWithoutMosqueInput
    languageSettings?: MosqueLanguageSettingsUncheckedCreateNestedOneWithoutMosqueInput
    namesOfAllah?: NameOfAllahUncheckedCreateNestedManyWithoutMosqueInput
    media?: MediaUncheckedCreateNestedManyWithoutMosqueInput
    prayers?: PrayerUncheckedCreateNestedManyWithoutMosqueInput
    qrCodes?: QRCodeUncheckedCreateNestedManyWithoutMosqueInput
  }

  export type MosqueCreateOrConnectWithoutCityInput = {
    where: MosqueWhereUniqueInput
    create: XOR<MosqueCreateWithoutCityInput, MosqueUncheckedCreateWithoutCityInput>
  }

  export type MosqueCreateManyCityInputEnvelope = {
    data: MosqueCreateManyCityInput | MosqueCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type PrayerCreateWithoutCityInput = {
    date?: string | null
    fajr?: string | null
    shuruk?: string | null
    zuhr?: string | null
    asr?: string | null
    maghrib?: string | null
    isha?: string | null
    mechet?: string | null
    mosque?: MosqueCreateNestedOneWithoutPrayersInput
    changes?: PrayerTimeChangeCreateNestedManyWithoutPrayerInput
  }

  export type PrayerUncheckedCreateWithoutCityInput = {
    id?: number
    mosqueId?: number | null
    date?: string | null
    fajr?: string | null
    shuruk?: string | null
    zuhr?: string | null
    asr?: string | null
    maghrib?: string | null
    isha?: string | null
    mechet?: string | null
    changes?: PrayerTimeChangeUncheckedCreateNestedManyWithoutPrayerInput
  }

  export type PrayerCreateOrConnectWithoutCityInput = {
    where: PrayerWhereUniqueInput
    create: XOR<PrayerCreateWithoutCityInput, PrayerUncheckedCreateWithoutCityInput>
  }

  export type PrayerCreateManyCityInputEnvelope = {
    data: PrayerCreateManyCityInput | PrayerCreateManyCityInput[]
    skipDuplicates?: boolean
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
    mosque?: MosqueUpdateOneWithoutAdminNestedInput
    prayerChanges?: PrayerTimeChangeUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type AdminUncheckedUpdateWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    mosqueId?: NullableIntFieldUpdateOperationsInput | number | null
    prayerChanges?: PrayerTimeChangeUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FixedPrayerTimeUpsertWithoutCityInput = {
    update: XOR<FixedPrayerTimeUpdateWithoutCityInput, FixedPrayerTimeUncheckedUpdateWithoutCityInput>
    create: XOR<FixedPrayerTimeCreateWithoutCityInput, FixedPrayerTimeUncheckedCreateWithoutCityInput>
    where?: FixedPrayerTimeWhereInput
  }

  export type FixedPrayerTimeUpdateToOneWithWhereWithoutCityInput = {
    where?: FixedPrayerTimeWhereInput
    data: XOR<FixedPrayerTimeUpdateWithoutCityInput, FixedPrayerTimeUncheckedUpdateWithoutCityInput>
  }

  export type FixedPrayerTimeUpdateWithoutCityInput = {
    fajr?: StringFieldUpdateOperationsInput | string
    shuruk?: StringFieldUpdateOperationsInput | string
    zuhr?: StringFieldUpdateOperationsInput | string
    asr?: StringFieldUpdateOperationsInput | string
    maghrib?: StringFieldUpdateOperationsInput | string
    isha?: StringFieldUpdateOperationsInput | string
    mechet?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fajrActive?: BoolFieldUpdateOperationsInput | boolean
    shurukActive?: BoolFieldUpdateOperationsInput | boolean
    zuhrActive?: BoolFieldUpdateOperationsInput | boolean
    asrActive?: BoolFieldUpdateOperationsInput | boolean
    maghribActive?: BoolFieldUpdateOperationsInput | boolean
    ishaActive?: BoolFieldUpdateOperationsInput | boolean
    mechetActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FixedPrayerTimeUncheckedUpdateWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    fajr?: StringFieldUpdateOperationsInput | string
    shuruk?: StringFieldUpdateOperationsInput | string
    zuhr?: StringFieldUpdateOperationsInput | string
    asr?: StringFieldUpdateOperationsInput | string
    maghrib?: StringFieldUpdateOperationsInput | string
    isha?: StringFieldUpdateOperationsInput | string
    mechet?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fajrActive?: BoolFieldUpdateOperationsInput | boolean
    shurukActive?: BoolFieldUpdateOperationsInput | boolean
    zuhrActive?: BoolFieldUpdateOperationsInput | boolean
    asrActive?: BoolFieldUpdateOperationsInput | boolean
    maghribActive?: BoolFieldUpdateOperationsInput | boolean
    ishaActive?: BoolFieldUpdateOperationsInput | boolean
    mechetActive?: BoolFieldUpdateOperationsInput | boolean
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
    mosqueId?: IntNullableFilter<"Prayer"> | number | null
    date?: StringNullableFilter<"Prayer"> | string | null
    fajr?: StringNullableFilter<"Prayer"> | string | null
    shuruk?: StringNullableFilter<"Prayer"> | string | null
    zuhr?: StringNullableFilter<"Prayer"> | string | null
    asr?: StringNullableFilter<"Prayer"> | string | null
    maghrib?: StringNullableFilter<"Prayer"> | string | null
    isha?: StringNullableFilter<"Prayer"> | string | null
    mechet?: StringNullableFilter<"Prayer"> | string | null
  }

  export type CityCreateWithoutPrayersInput = {
    name: string
    logoUrl?: string | null
    admin?: AdminCreateNestedOneWithoutCityInput
    fixedPrayerTime?: FixedPrayerTimeCreateNestedOneWithoutCityInput
    Mosque?: MosqueCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutPrayersInput = {
    id?: number
    name: string
    logoUrl?: string | null
    admin?: AdminUncheckedCreateNestedOneWithoutCityInput
    fixedPrayerTime?: FixedPrayerTimeUncheckedCreateNestedOneWithoutCityInput
    Mosque?: MosqueUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutPrayersInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutPrayersInput, CityUncheckedCreateWithoutPrayersInput>
  }

  export type MosqueCreateWithoutPrayersInput = {
    name: string
    logoUrl?: string | null
    admin?: AdminCreateNestedOneWithoutMosqueInput
    fixedPrayerTime?: FixedMosquePrayerTimeCreateNestedOneWithoutMosqueInput
    languageSettings?: MosqueLanguageSettingsCreateNestedOneWithoutMosqueInput
    namesOfAllah?: NameOfAllahCreateNestedManyWithoutMosqueInput
    media?: MediaCreateNestedManyWithoutMosqueInput
    city: CityCreateNestedOneWithoutMosqueInput
    qrCodes?: QRCodeCreateNestedManyWithoutMosqueInput
  }

  export type MosqueUncheckedCreateWithoutPrayersInput = {
    id?: number
    cityId: number
    name: string
    logoUrl?: string | null
    admin?: AdminUncheckedCreateNestedOneWithoutMosqueInput
    fixedPrayerTime?: FixedMosquePrayerTimeUncheckedCreateNestedOneWithoutMosqueInput
    languageSettings?: MosqueLanguageSettingsUncheckedCreateNestedOneWithoutMosqueInput
    namesOfAllah?: NameOfAllahUncheckedCreateNestedManyWithoutMosqueInput
    media?: MediaUncheckedCreateNestedManyWithoutMosqueInput
    qrCodes?: QRCodeUncheckedCreateNestedManyWithoutMosqueInput
  }

  export type MosqueCreateOrConnectWithoutPrayersInput = {
    where: MosqueWhereUniqueInput
    create: XOR<MosqueCreateWithoutPrayersInput, MosqueUncheckedCreateWithoutPrayersInput>
  }

  export type PrayerTimeChangeCreateWithoutPrayerInput = {
    prayerType: string
    oldTime: string
    newTime: string
    shiftMinutes: number
    changedAt?: Date | string
    user: AdminCreateNestedOneWithoutPrayerChangesInput
  }

  export type PrayerTimeChangeUncheckedCreateWithoutPrayerInput = {
    id?: number
    prayerType: string
    oldTime: string
    newTime: string
    shiftMinutes: number
    changedAt?: Date | string
    changedBy: number
  }

  export type PrayerTimeChangeCreateOrConnectWithoutPrayerInput = {
    where: PrayerTimeChangeWhereUniqueInput
    create: XOR<PrayerTimeChangeCreateWithoutPrayerInput, PrayerTimeChangeUncheckedCreateWithoutPrayerInput>
  }

  export type PrayerTimeChangeCreateManyPrayerInputEnvelope = {
    data: PrayerTimeChangeCreateManyPrayerInput | PrayerTimeChangeCreateManyPrayerInput[]
    skipDuplicates?: boolean
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
    admin?: AdminUpdateOneWithoutCityNestedInput
    fixedPrayerTime?: FixedPrayerTimeUpdateOneWithoutCityNestedInput
    Mosque?: MosqueUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutPrayersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUncheckedUpdateOneWithoutCityNestedInput
    fixedPrayerTime?: FixedPrayerTimeUncheckedUpdateOneWithoutCityNestedInput
    Mosque?: MosqueUncheckedUpdateManyWithoutCityNestedInput
  }

  export type MosqueUpsertWithoutPrayersInput = {
    update: XOR<MosqueUpdateWithoutPrayersInput, MosqueUncheckedUpdateWithoutPrayersInput>
    create: XOR<MosqueCreateWithoutPrayersInput, MosqueUncheckedCreateWithoutPrayersInput>
    where?: MosqueWhereInput
  }

  export type MosqueUpdateToOneWithWhereWithoutPrayersInput = {
    where?: MosqueWhereInput
    data: XOR<MosqueUpdateWithoutPrayersInput, MosqueUncheckedUpdateWithoutPrayersInput>
  }

  export type MosqueUpdateWithoutPrayersInput = {
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUpdateOneWithoutMosqueNestedInput
    fixedPrayerTime?: FixedMosquePrayerTimeUpdateOneWithoutMosqueNestedInput
    languageSettings?: MosqueLanguageSettingsUpdateOneWithoutMosqueNestedInput
    namesOfAllah?: NameOfAllahUpdateManyWithoutMosqueNestedInput
    media?: MediaUpdateManyWithoutMosqueNestedInput
    city?: CityUpdateOneRequiredWithoutMosqueNestedInput
    qrCodes?: QRCodeUpdateManyWithoutMosqueNestedInput
  }

  export type MosqueUncheckedUpdateWithoutPrayersInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUncheckedUpdateOneWithoutMosqueNestedInput
    fixedPrayerTime?: FixedMosquePrayerTimeUncheckedUpdateOneWithoutMosqueNestedInput
    languageSettings?: MosqueLanguageSettingsUncheckedUpdateOneWithoutMosqueNestedInput
    namesOfAllah?: NameOfAllahUncheckedUpdateManyWithoutMosqueNestedInput
    media?: MediaUncheckedUpdateManyWithoutMosqueNestedInput
    qrCodes?: QRCodeUncheckedUpdateManyWithoutMosqueNestedInput
  }

  export type PrayerTimeChangeUpsertWithWhereUniqueWithoutPrayerInput = {
    where: PrayerTimeChangeWhereUniqueInput
    update: XOR<PrayerTimeChangeUpdateWithoutPrayerInput, PrayerTimeChangeUncheckedUpdateWithoutPrayerInput>
    create: XOR<PrayerTimeChangeCreateWithoutPrayerInput, PrayerTimeChangeUncheckedCreateWithoutPrayerInput>
  }

  export type PrayerTimeChangeUpdateWithWhereUniqueWithoutPrayerInput = {
    where: PrayerTimeChangeWhereUniqueInput
    data: XOR<PrayerTimeChangeUpdateWithoutPrayerInput, PrayerTimeChangeUncheckedUpdateWithoutPrayerInput>
  }

  export type PrayerTimeChangeUpdateManyWithWhereWithoutPrayerInput = {
    where: PrayerTimeChangeScalarWhereInput
    data: XOR<PrayerTimeChangeUpdateManyMutationInput, PrayerTimeChangeUncheckedUpdateManyWithoutPrayerInput>
  }

  export type PrayerTimeChangeScalarWhereInput = {
    AND?: PrayerTimeChangeScalarWhereInput | PrayerTimeChangeScalarWhereInput[]
    OR?: PrayerTimeChangeScalarWhereInput[]
    NOT?: PrayerTimeChangeScalarWhereInput | PrayerTimeChangeScalarWhereInput[]
    id?: IntFilter<"PrayerTimeChange"> | number
    prayerId?: IntFilter<"PrayerTimeChange"> | number
    prayerType?: StringFilter<"PrayerTimeChange"> | string
    oldTime?: StringFilter<"PrayerTimeChange"> | string
    newTime?: StringFilter<"PrayerTimeChange"> | string
    shiftMinutes?: IntFilter<"PrayerTimeChange"> | number
    changedAt?: DateTimeFilter<"PrayerTimeChange"> | Date | string
    changedBy?: IntFilter<"PrayerTimeChange"> | number
  }

  export type AdminCreateWithoutMosqueInput = {
    email: string
    password: string
    createdAt?: Date | string
    role: $Enums.Role
    city?: CityCreateNestedOneWithoutAdminInput
    prayerChanges?: PrayerTimeChangeCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type AdminUncheckedCreateWithoutMosqueInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    role: $Enums.Role
    cityId?: number | null
    prayerChanges?: PrayerTimeChangeUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type AdminCreateOrConnectWithoutMosqueInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutMosqueInput, AdminUncheckedCreateWithoutMosqueInput>
  }

  export type FixedMosquePrayerTimeCreateWithoutMosqueInput = {
    fajr: string
    shuruk: string
    zuhr: string
    asr: string
    maghrib: string
    isha: string
    mechet?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fajrActive?: boolean
    shurukActive?: boolean
    zuhrActive?: boolean
    asrActive?: boolean
    maghribActive?: boolean
    ishaActive?: boolean
    mechetActive?: boolean
    fajrIqamaEnabled?: boolean
    fajrIqamaMinutes?: number
    shurukIqamaEnabled?: boolean
    shurukIqamaMinutes?: number
    zuhrIqamaEnabled?: boolean
    zuhrIqamaMinutes?: number
    asrIqamaEnabled?: boolean
    asrIqamaMinutes?: number
    maghribIqamaEnabled?: boolean
    maghribIqamaMinutes?: number
    ishaIqamaEnabled?: boolean
    ishaIqamaMinutes?: number
    mechetIqamaEnabled?: boolean
    mechetIqamaMinutes?: number
  }

  export type FixedMosquePrayerTimeUncheckedCreateWithoutMosqueInput = {
    id?: number
    fajr: string
    shuruk: string
    zuhr: string
    asr: string
    maghrib: string
    isha: string
    mechet?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fajrActive?: boolean
    shurukActive?: boolean
    zuhrActive?: boolean
    asrActive?: boolean
    maghribActive?: boolean
    ishaActive?: boolean
    mechetActive?: boolean
    fajrIqamaEnabled?: boolean
    fajrIqamaMinutes?: number
    shurukIqamaEnabled?: boolean
    shurukIqamaMinutes?: number
    zuhrIqamaEnabled?: boolean
    zuhrIqamaMinutes?: number
    asrIqamaEnabled?: boolean
    asrIqamaMinutes?: number
    maghribIqamaEnabled?: boolean
    maghribIqamaMinutes?: number
    ishaIqamaEnabled?: boolean
    ishaIqamaMinutes?: number
    mechetIqamaEnabled?: boolean
    mechetIqamaMinutes?: number
  }

  export type FixedMosquePrayerTimeCreateOrConnectWithoutMosqueInput = {
    where: FixedMosquePrayerTimeWhereUniqueInput
    create: XOR<FixedMosquePrayerTimeCreateWithoutMosqueInput, FixedMosquePrayerTimeUncheckedCreateWithoutMosqueInput>
  }

  export type MosqueLanguageSettingsCreateWithoutMosqueInput = {
    translationsEnabled?: boolean
    languageToggleEnabled?: boolean
    languageToggleIntervalSeconds?: number
    fridayZuhrAsJomgaEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MosqueLanguageSettingsUncheckedCreateWithoutMosqueInput = {
    id?: number
    translationsEnabled?: boolean
    languageToggleEnabled?: boolean
    languageToggleIntervalSeconds?: number
    fridayZuhrAsJomgaEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MosqueLanguageSettingsCreateOrConnectWithoutMosqueInput = {
    where: MosqueLanguageSettingsWhereUniqueInput
    create: XOR<MosqueLanguageSettingsCreateWithoutMosqueInput, MosqueLanguageSettingsUncheckedCreateWithoutMosqueInput>
  }

  export type NameOfAllahCreateWithoutMosqueInput = {
    arabic: string
    transcription: string
    meaning: string
    transcriptionTatar?: string | null
    meaningTatar?: string | null
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NameOfAllahUncheckedCreateWithoutMosqueInput = {
    id?: number
    arabic: string
    transcription: string
    meaning: string
    transcriptionTatar?: string | null
    meaningTatar?: string | null
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NameOfAllahCreateOrConnectWithoutMosqueInput = {
    where: NameOfAllahWhereUniqueInput
    create: XOR<NameOfAllahCreateWithoutMosqueInput, NameOfAllahUncheckedCreateWithoutMosqueInput>
  }

  export type NameOfAllahCreateManyMosqueInputEnvelope = {
    data: NameOfAllahCreateManyMosqueInput | NameOfAllahCreateManyMosqueInput[]
    skipDuplicates?: boolean
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

  export type CityCreateWithoutMosqueInput = {
    name: string
    logoUrl?: string | null
    admin?: AdminCreateNestedOneWithoutCityInput
    fixedPrayerTime?: FixedPrayerTimeCreateNestedOneWithoutCityInput
    prayers?: PrayerCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutMosqueInput = {
    id?: number
    name: string
    logoUrl?: string | null
    admin?: AdminUncheckedCreateNestedOneWithoutCityInput
    fixedPrayerTime?: FixedPrayerTimeUncheckedCreateNestedOneWithoutCityInput
    prayers?: PrayerUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutMosqueInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutMosqueInput, CityUncheckedCreateWithoutMosqueInput>
  }

  export type PrayerCreateWithoutMosqueInput = {
    date?: string | null
    fajr?: string | null
    shuruk?: string | null
    zuhr?: string | null
    asr?: string | null
    maghrib?: string | null
    isha?: string | null
    mechet?: string | null
    city: CityCreateNestedOneWithoutPrayersInput
    changes?: PrayerTimeChangeCreateNestedManyWithoutPrayerInput
  }

  export type PrayerUncheckedCreateWithoutMosqueInput = {
    id?: number
    cityId: number
    date?: string | null
    fajr?: string | null
    shuruk?: string | null
    zuhr?: string | null
    asr?: string | null
    maghrib?: string | null
    isha?: string | null
    mechet?: string | null
    changes?: PrayerTimeChangeUncheckedCreateNestedManyWithoutPrayerInput
  }

  export type PrayerCreateOrConnectWithoutMosqueInput = {
    where: PrayerWhereUniqueInput
    create: XOR<PrayerCreateWithoutMosqueInput, PrayerUncheckedCreateWithoutMosqueInput>
  }

  export type PrayerCreateManyMosqueInputEnvelope = {
    data: PrayerCreateManyMosqueInput | PrayerCreateManyMosqueInput[]
    skipDuplicates?: boolean
  }

  export type QRCodeCreateWithoutMosqueInput = {
    isPrimary?: boolean
    projectName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
  }

  export type QRCodeUncheckedCreateWithoutMosqueInput = {
    id?: number
    isPrimary?: boolean
    projectName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
  }

  export type QRCodeCreateOrConnectWithoutMosqueInput = {
    where: QRCodeWhereUniqueInput
    create: XOR<QRCodeCreateWithoutMosqueInput, QRCodeUncheckedCreateWithoutMosqueInput>
  }

  export type QRCodeCreateManyMosqueInputEnvelope = {
    data: QRCodeCreateManyMosqueInput | QRCodeCreateManyMosqueInput[]
    skipDuplicates?: boolean
  }

  export type AdminUpsertWithoutMosqueInput = {
    update: XOR<AdminUpdateWithoutMosqueInput, AdminUncheckedUpdateWithoutMosqueInput>
    create: XOR<AdminCreateWithoutMosqueInput, AdminUncheckedCreateWithoutMosqueInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutMosqueInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutMosqueInput, AdminUncheckedUpdateWithoutMosqueInput>
  }

  export type AdminUpdateWithoutMosqueInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: CityUpdateOneWithoutAdminNestedInput
    prayerChanges?: PrayerTimeChangeUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type AdminUncheckedUpdateWithoutMosqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    prayerChanges?: PrayerTimeChangeUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FixedMosquePrayerTimeUpsertWithoutMosqueInput = {
    update: XOR<FixedMosquePrayerTimeUpdateWithoutMosqueInput, FixedMosquePrayerTimeUncheckedUpdateWithoutMosqueInput>
    create: XOR<FixedMosquePrayerTimeCreateWithoutMosqueInput, FixedMosquePrayerTimeUncheckedCreateWithoutMosqueInput>
    where?: FixedMosquePrayerTimeWhereInput
  }

  export type FixedMosquePrayerTimeUpdateToOneWithWhereWithoutMosqueInput = {
    where?: FixedMosquePrayerTimeWhereInput
    data: XOR<FixedMosquePrayerTimeUpdateWithoutMosqueInput, FixedMosquePrayerTimeUncheckedUpdateWithoutMosqueInput>
  }

  export type FixedMosquePrayerTimeUpdateWithoutMosqueInput = {
    fajr?: StringFieldUpdateOperationsInput | string
    shuruk?: StringFieldUpdateOperationsInput | string
    zuhr?: StringFieldUpdateOperationsInput | string
    asr?: StringFieldUpdateOperationsInput | string
    maghrib?: StringFieldUpdateOperationsInput | string
    isha?: StringFieldUpdateOperationsInput | string
    mechet?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fajrActive?: BoolFieldUpdateOperationsInput | boolean
    shurukActive?: BoolFieldUpdateOperationsInput | boolean
    zuhrActive?: BoolFieldUpdateOperationsInput | boolean
    asrActive?: BoolFieldUpdateOperationsInput | boolean
    maghribActive?: BoolFieldUpdateOperationsInput | boolean
    ishaActive?: BoolFieldUpdateOperationsInput | boolean
    mechetActive?: BoolFieldUpdateOperationsInput | boolean
    fajrIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    fajrIqamaMinutes?: IntFieldUpdateOperationsInput | number
    shurukIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    shurukIqamaMinutes?: IntFieldUpdateOperationsInput | number
    zuhrIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    zuhrIqamaMinutes?: IntFieldUpdateOperationsInput | number
    asrIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    asrIqamaMinutes?: IntFieldUpdateOperationsInput | number
    maghribIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    maghribIqamaMinutes?: IntFieldUpdateOperationsInput | number
    ishaIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    ishaIqamaMinutes?: IntFieldUpdateOperationsInput | number
    mechetIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mechetIqamaMinutes?: IntFieldUpdateOperationsInput | number
  }

  export type FixedMosquePrayerTimeUncheckedUpdateWithoutMosqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    fajr?: StringFieldUpdateOperationsInput | string
    shuruk?: StringFieldUpdateOperationsInput | string
    zuhr?: StringFieldUpdateOperationsInput | string
    asr?: StringFieldUpdateOperationsInput | string
    maghrib?: StringFieldUpdateOperationsInput | string
    isha?: StringFieldUpdateOperationsInput | string
    mechet?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fajrActive?: BoolFieldUpdateOperationsInput | boolean
    shurukActive?: BoolFieldUpdateOperationsInput | boolean
    zuhrActive?: BoolFieldUpdateOperationsInput | boolean
    asrActive?: BoolFieldUpdateOperationsInput | boolean
    maghribActive?: BoolFieldUpdateOperationsInput | boolean
    ishaActive?: BoolFieldUpdateOperationsInput | boolean
    mechetActive?: BoolFieldUpdateOperationsInput | boolean
    fajrIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    fajrIqamaMinutes?: IntFieldUpdateOperationsInput | number
    shurukIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    shurukIqamaMinutes?: IntFieldUpdateOperationsInput | number
    zuhrIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    zuhrIqamaMinutes?: IntFieldUpdateOperationsInput | number
    asrIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    asrIqamaMinutes?: IntFieldUpdateOperationsInput | number
    maghribIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    maghribIqamaMinutes?: IntFieldUpdateOperationsInput | number
    ishaIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    ishaIqamaMinutes?: IntFieldUpdateOperationsInput | number
    mechetIqamaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mechetIqamaMinutes?: IntFieldUpdateOperationsInput | number
  }

  export type MosqueLanguageSettingsUpsertWithoutMosqueInput = {
    update: XOR<MosqueLanguageSettingsUpdateWithoutMosqueInput, MosqueLanguageSettingsUncheckedUpdateWithoutMosqueInput>
    create: XOR<MosqueLanguageSettingsCreateWithoutMosqueInput, MosqueLanguageSettingsUncheckedCreateWithoutMosqueInput>
    where?: MosqueLanguageSettingsWhereInput
  }

  export type MosqueLanguageSettingsUpdateToOneWithWhereWithoutMosqueInput = {
    where?: MosqueLanguageSettingsWhereInput
    data: XOR<MosqueLanguageSettingsUpdateWithoutMosqueInput, MosqueLanguageSettingsUncheckedUpdateWithoutMosqueInput>
  }

  export type MosqueLanguageSettingsUpdateWithoutMosqueInput = {
    translationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    languageToggleEnabled?: BoolFieldUpdateOperationsInput | boolean
    languageToggleIntervalSeconds?: IntFieldUpdateOperationsInput | number
    fridayZuhrAsJomgaEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MosqueLanguageSettingsUncheckedUpdateWithoutMosqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    translationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    languageToggleEnabled?: BoolFieldUpdateOperationsInput | boolean
    languageToggleIntervalSeconds?: IntFieldUpdateOperationsInput | number
    fridayZuhrAsJomgaEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NameOfAllahUpsertWithWhereUniqueWithoutMosqueInput = {
    where: NameOfAllahWhereUniqueInput
    update: XOR<NameOfAllahUpdateWithoutMosqueInput, NameOfAllahUncheckedUpdateWithoutMosqueInput>
    create: XOR<NameOfAllahCreateWithoutMosqueInput, NameOfAllahUncheckedCreateWithoutMosqueInput>
  }

  export type NameOfAllahUpdateWithWhereUniqueWithoutMosqueInput = {
    where: NameOfAllahWhereUniqueInput
    data: XOR<NameOfAllahUpdateWithoutMosqueInput, NameOfAllahUncheckedUpdateWithoutMosqueInput>
  }

  export type NameOfAllahUpdateManyWithWhereWithoutMosqueInput = {
    where: NameOfAllahScalarWhereInput
    data: XOR<NameOfAllahUpdateManyMutationInput, NameOfAllahUncheckedUpdateManyWithoutMosqueInput>
  }

  export type NameOfAllahScalarWhereInput = {
    AND?: NameOfAllahScalarWhereInput | NameOfAllahScalarWhereInput[]
    OR?: NameOfAllahScalarWhereInput[]
    NOT?: NameOfAllahScalarWhereInput | NameOfAllahScalarWhereInput[]
    id?: IntFilter<"NameOfAllah"> | number
    mosqueId?: IntFilter<"NameOfAllah"> | number
    arabic?: StringFilter<"NameOfAllah"> | string
    transcription?: StringFilter<"NameOfAllah"> | string
    meaning?: StringFilter<"NameOfAllah"> | string
    transcriptionTatar?: StringNullableFilter<"NameOfAllah"> | string | null
    meaningTatar?: StringNullableFilter<"NameOfAllah"> | string | null
    isEnabled?: BoolFilter<"NameOfAllah"> | boolean
    createdAt?: DateTimeFilter<"NameOfAllah"> | Date | string
    updatedAt?: DateTimeFilter<"NameOfAllah"> | Date | string
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
    admin?: AdminUpdateOneWithoutCityNestedInput
    fixedPrayerTime?: FixedPrayerTimeUpdateOneWithoutCityNestedInput
    prayers?: PrayerUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutMosqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUncheckedUpdateOneWithoutCityNestedInput
    fixedPrayerTime?: FixedPrayerTimeUncheckedUpdateOneWithoutCityNestedInput
    prayers?: PrayerUncheckedUpdateManyWithoutCityNestedInput
  }

  export type PrayerUpsertWithWhereUniqueWithoutMosqueInput = {
    where: PrayerWhereUniqueInput
    update: XOR<PrayerUpdateWithoutMosqueInput, PrayerUncheckedUpdateWithoutMosqueInput>
    create: XOR<PrayerCreateWithoutMosqueInput, PrayerUncheckedCreateWithoutMosqueInput>
  }

  export type PrayerUpdateWithWhereUniqueWithoutMosqueInput = {
    where: PrayerWhereUniqueInput
    data: XOR<PrayerUpdateWithoutMosqueInput, PrayerUncheckedUpdateWithoutMosqueInput>
  }

  export type PrayerUpdateManyWithWhereWithoutMosqueInput = {
    where: PrayerScalarWhereInput
    data: XOR<PrayerUpdateManyMutationInput, PrayerUncheckedUpdateManyWithoutMosqueInput>
  }

  export type QRCodeUpsertWithWhereUniqueWithoutMosqueInput = {
    where: QRCodeWhereUniqueInput
    update: XOR<QRCodeUpdateWithoutMosqueInput, QRCodeUncheckedUpdateWithoutMosqueInput>
    create: XOR<QRCodeCreateWithoutMosqueInput, QRCodeUncheckedCreateWithoutMosqueInput>
  }

  export type QRCodeUpdateWithWhereUniqueWithoutMosqueInput = {
    where: QRCodeWhereUniqueInput
    data: XOR<QRCodeUpdateWithoutMosqueInput, QRCodeUncheckedUpdateWithoutMosqueInput>
  }

  export type QRCodeUpdateManyWithWhereWithoutMosqueInput = {
    where: QRCodeScalarWhereInput
    data: XOR<QRCodeUpdateManyMutationInput, QRCodeUncheckedUpdateManyWithoutMosqueInput>
  }

  export type QRCodeScalarWhereInput = {
    AND?: QRCodeScalarWhereInput | QRCodeScalarWhereInput[]
    OR?: QRCodeScalarWhereInput[]
    NOT?: QRCodeScalarWhereInput | QRCodeScalarWhereInput[]
    id?: IntFilter<"QRCode"> | number
    mosqueId?: IntFilter<"QRCode"> | number
    isPrimary?: BoolFilter<"QRCode"> | boolean
    projectName?: StringNullableFilter<"QRCode"> | string | null
    createdAt?: DateTimeFilter<"QRCode"> | Date | string
    updatedAt?: DateTimeFilter<"QRCode"> | Date | string
    imageUrl?: StringFilter<"QRCode"> | string
  }

  export type MosqueCreateWithoutMediaInput = {
    name: string
    logoUrl?: string | null
    admin?: AdminCreateNestedOneWithoutMosqueInput
    fixedPrayerTime?: FixedMosquePrayerTimeCreateNestedOneWithoutMosqueInput
    languageSettings?: MosqueLanguageSettingsCreateNestedOneWithoutMosqueInput
    namesOfAllah?: NameOfAllahCreateNestedManyWithoutMosqueInput
    city: CityCreateNestedOneWithoutMosqueInput
    prayers?: PrayerCreateNestedManyWithoutMosqueInput
    qrCodes?: QRCodeCreateNestedManyWithoutMosqueInput
  }

  export type MosqueUncheckedCreateWithoutMediaInput = {
    id?: number
    cityId: number
    name: string
    logoUrl?: string | null
    admin?: AdminUncheckedCreateNestedOneWithoutMosqueInput
    fixedPrayerTime?: FixedMosquePrayerTimeUncheckedCreateNestedOneWithoutMosqueInput
    languageSettings?: MosqueLanguageSettingsUncheckedCreateNestedOneWithoutMosqueInput
    namesOfAllah?: NameOfAllahUncheckedCreateNestedManyWithoutMosqueInput
    prayers?: PrayerUncheckedCreateNestedManyWithoutMosqueInput
    qrCodes?: QRCodeUncheckedCreateNestedManyWithoutMosqueInput
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
    admin?: AdminUpdateOneWithoutMosqueNestedInput
    fixedPrayerTime?: FixedMosquePrayerTimeUpdateOneWithoutMosqueNestedInput
    languageSettings?: MosqueLanguageSettingsUpdateOneWithoutMosqueNestedInput
    namesOfAllah?: NameOfAllahUpdateManyWithoutMosqueNestedInput
    city?: CityUpdateOneRequiredWithoutMosqueNestedInput
    prayers?: PrayerUpdateManyWithoutMosqueNestedInput
    qrCodes?: QRCodeUpdateManyWithoutMosqueNestedInput
  }

  export type MosqueUncheckedUpdateWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUncheckedUpdateOneWithoutMosqueNestedInput
    fixedPrayerTime?: FixedMosquePrayerTimeUncheckedUpdateOneWithoutMosqueNestedInput
    languageSettings?: MosqueLanguageSettingsUncheckedUpdateOneWithoutMosqueNestedInput
    namesOfAllah?: NameOfAllahUncheckedUpdateManyWithoutMosqueNestedInput
    prayers?: PrayerUncheckedUpdateManyWithoutMosqueNestedInput
    qrCodes?: QRCodeUncheckedUpdateManyWithoutMosqueNestedInput
  }

  export type MosqueCreateWithoutQrCodesInput = {
    name: string
    logoUrl?: string | null
    admin?: AdminCreateNestedOneWithoutMosqueInput
    fixedPrayerTime?: FixedMosquePrayerTimeCreateNestedOneWithoutMosqueInput
    languageSettings?: MosqueLanguageSettingsCreateNestedOneWithoutMosqueInput
    namesOfAllah?: NameOfAllahCreateNestedManyWithoutMosqueInput
    media?: MediaCreateNestedManyWithoutMosqueInput
    city: CityCreateNestedOneWithoutMosqueInput
    prayers?: PrayerCreateNestedManyWithoutMosqueInput
  }

  export type MosqueUncheckedCreateWithoutQrCodesInput = {
    id?: number
    cityId: number
    name: string
    logoUrl?: string | null
    admin?: AdminUncheckedCreateNestedOneWithoutMosqueInput
    fixedPrayerTime?: FixedMosquePrayerTimeUncheckedCreateNestedOneWithoutMosqueInput
    languageSettings?: MosqueLanguageSettingsUncheckedCreateNestedOneWithoutMosqueInput
    namesOfAllah?: NameOfAllahUncheckedCreateNestedManyWithoutMosqueInput
    media?: MediaUncheckedCreateNestedManyWithoutMosqueInput
    prayers?: PrayerUncheckedCreateNestedManyWithoutMosqueInput
  }

  export type MosqueCreateOrConnectWithoutQrCodesInput = {
    where: MosqueWhereUniqueInput
    create: XOR<MosqueCreateWithoutQrCodesInput, MosqueUncheckedCreateWithoutQrCodesInput>
  }

  export type MosqueUpsertWithoutQrCodesInput = {
    update: XOR<MosqueUpdateWithoutQrCodesInput, MosqueUncheckedUpdateWithoutQrCodesInput>
    create: XOR<MosqueCreateWithoutQrCodesInput, MosqueUncheckedCreateWithoutQrCodesInput>
    where?: MosqueWhereInput
  }

  export type MosqueUpdateToOneWithWhereWithoutQrCodesInput = {
    where?: MosqueWhereInput
    data: XOR<MosqueUpdateWithoutQrCodesInput, MosqueUncheckedUpdateWithoutQrCodesInput>
  }

  export type MosqueUpdateWithoutQrCodesInput = {
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUpdateOneWithoutMosqueNestedInput
    fixedPrayerTime?: FixedMosquePrayerTimeUpdateOneWithoutMosqueNestedInput
    languageSettings?: MosqueLanguageSettingsUpdateOneWithoutMosqueNestedInput
    namesOfAllah?: NameOfAllahUpdateManyWithoutMosqueNestedInput
    media?: MediaUpdateManyWithoutMosqueNestedInput
    city?: CityUpdateOneRequiredWithoutMosqueNestedInput
    prayers?: PrayerUpdateManyWithoutMosqueNestedInput
  }

  export type MosqueUncheckedUpdateWithoutQrCodesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUncheckedUpdateOneWithoutMosqueNestedInput
    fixedPrayerTime?: FixedMosquePrayerTimeUncheckedUpdateOneWithoutMosqueNestedInput
    languageSettings?: MosqueLanguageSettingsUncheckedUpdateOneWithoutMosqueNestedInput
    namesOfAllah?: NameOfAllahUncheckedUpdateManyWithoutMosqueNestedInput
    media?: MediaUncheckedUpdateManyWithoutMosqueNestedInput
    prayers?: PrayerUncheckedUpdateManyWithoutMosqueNestedInput
  }

  export type CityCreateWithoutAdminInput = {
    name: string
    logoUrl?: string | null
    fixedPrayerTime?: FixedPrayerTimeCreateNestedOneWithoutCityInput
    Mosque?: MosqueCreateNestedManyWithoutCityInput
    prayers?: PrayerCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutAdminInput = {
    id?: number
    name: string
    logoUrl?: string | null
    fixedPrayerTime?: FixedPrayerTimeUncheckedCreateNestedOneWithoutCityInput
    Mosque?: MosqueUncheckedCreateNestedManyWithoutCityInput
    prayers?: PrayerUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutAdminInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutAdminInput, CityUncheckedCreateWithoutAdminInput>
  }

  export type MosqueCreateWithoutAdminInput = {
    name: string
    logoUrl?: string | null
    fixedPrayerTime?: FixedMosquePrayerTimeCreateNestedOneWithoutMosqueInput
    languageSettings?: MosqueLanguageSettingsCreateNestedOneWithoutMosqueInput
    namesOfAllah?: NameOfAllahCreateNestedManyWithoutMosqueInput
    media?: MediaCreateNestedManyWithoutMosqueInput
    city: CityCreateNestedOneWithoutMosqueInput
    prayers?: PrayerCreateNestedManyWithoutMosqueInput
    qrCodes?: QRCodeCreateNestedManyWithoutMosqueInput
  }

  export type MosqueUncheckedCreateWithoutAdminInput = {
    id?: number
    cityId: number
    name: string
    logoUrl?: string | null
    fixedPrayerTime?: FixedMosquePrayerTimeUncheckedCreateNestedOneWithoutMosqueInput
    languageSettings?: MosqueLanguageSettingsUncheckedCreateNestedOneWithoutMosqueInput
    namesOfAllah?: NameOfAllahUncheckedCreateNestedManyWithoutMosqueInput
    media?: MediaUncheckedCreateNestedManyWithoutMosqueInput
    prayers?: PrayerUncheckedCreateNestedManyWithoutMosqueInput
    qrCodes?: QRCodeUncheckedCreateNestedManyWithoutMosqueInput
  }

  export type MosqueCreateOrConnectWithoutAdminInput = {
    where: MosqueWhereUniqueInput
    create: XOR<MosqueCreateWithoutAdminInput, MosqueUncheckedCreateWithoutAdminInput>
  }

  export type PrayerTimeChangeCreateWithoutUserInput = {
    prayerType: string
    oldTime: string
    newTime: string
    shiftMinutes: number
    changedAt?: Date | string
    prayer: PrayerCreateNestedOneWithoutChangesInput
  }

  export type PrayerTimeChangeUncheckedCreateWithoutUserInput = {
    id?: number
    prayerId: number
    prayerType: string
    oldTime: string
    newTime: string
    shiftMinutes: number
    changedAt?: Date | string
  }

  export type PrayerTimeChangeCreateOrConnectWithoutUserInput = {
    where: PrayerTimeChangeWhereUniqueInput
    create: XOR<PrayerTimeChangeCreateWithoutUserInput, PrayerTimeChangeUncheckedCreateWithoutUserInput>
  }

  export type PrayerTimeChangeCreateManyUserInputEnvelope = {
    data: PrayerTimeChangeCreateManyUserInput | PrayerTimeChangeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutUserInput = {
    action: string
    entity: string
    entityId: number
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: number
    action: string
    entity: string
    entityId: number
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
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
    fixedPrayerTime?: FixedPrayerTimeUpdateOneWithoutCityNestedInput
    Mosque?: MosqueUpdateManyWithoutCityNestedInput
    prayers?: PrayerUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fixedPrayerTime?: FixedPrayerTimeUncheckedUpdateOneWithoutCityNestedInput
    Mosque?: MosqueUncheckedUpdateManyWithoutCityNestedInput
    prayers?: PrayerUncheckedUpdateManyWithoutCityNestedInput
  }

  export type MosqueUpsertWithoutAdminInput = {
    update: XOR<MosqueUpdateWithoutAdminInput, MosqueUncheckedUpdateWithoutAdminInput>
    create: XOR<MosqueCreateWithoutAdminInput, MosqueUncheckedCreateWithoutAdminInput>
    where?: MosqueWhereInput
  }

  export type MosqueUpdateToOneWithWhereWithoutAdminInput = {
    where?: MosqueWhereInput
    data: XOR<MosqueUpdateWithoutAdminInput, MosqueUncheckedUpdateWithoutAdminInput>
  }

  export type MosqueUpdateWithoutAdminInput = {
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fixedPrayerTime?: FixedMosquePrayerTimeUpdateOneWithoutMosqueNestedInput
    languageSettings?: MosqueLanguageSettingsUpdateOneWithoutMosqueNestedInput
    namesOfAllah?: NameOfAllahUpdateManyWithoutMosqueNestedInput
    media?: MediaUpdateManyWithoutMosqueNestedInput
    city?: CityUpdateOneRequiredWithoutMosqueNestedInput
    prayers?: PrayerUpdateManyWithoutMosqueNestedInput
    qrCodes?: QRCodeUpdateManyWithoutMosqueNestedInput
  }

  export type MosqueUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fixedPrayerTime?: FixedMosquePrayerTimeUncheckedUpdateOneWithoutMosqueNestedInput
    languageSettings?: MosqueLanguageSettingsUncheckedUpdateOneWithoutMosqueNestedInput
    namesOfAllah?: NameOfAllahUncheckedUpdateManyWithoutMosqueNestedInput
    media?: MediaUncheckedUpdateManyWithoutMosqueNestedInput
    prayers?: PrayerUncheckedUpdateManyWithoutMosqueNestedInput
    qrCodes?: QRCodeUncheckedUpdateManyWithoutMosqueNestedInput
  }

  export type PrayerTimeChangeUpsertWithWhereUniqueWithoutUserInput = {
    where: PrayerTimeChangeWhereUniqueInput
    update: XOR<PrayerTimeChangeUpdateWithoutUserInput, PrayerTimeChangeUncheckedUpdateWithoutUserInput>
    create: XOR<PrayerTimeChangeCreateWithoutUserInput, PrayerTimeChangeUncheckedCreateWithoutUserInput>
  }

  export type PrayerTimeChangeUpdateWithWhereUniqueWithoutUserInput = {
    where: PrayerTimeChangeWhereUniqueInput
    data: XOR<PrayerTimeChangeUpdateWithoutUserInput, PrayerTimeChangeUncheckedUpdateWithoutUserInput>
  }

  export type PrayerTimeChangeUpdateManyWithWhereWithoutUserInput = {
    where: PrayerTimeChangeScalarWhereInput
    data: XOR<PrayerTimeChangeUpdateManyMutationInput, PrayerTimeChangeUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: IntFilter<"AuditLog"> | number
    userId?: IntFilter<"AuditLog"> | number
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: IntFilter<"AuditLog"> | number
    oldValue?: JsonNullableFilter<"AuditLog">
    newValue?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type CityCreateWithoutFixedPrayerTimeInput = {
    name: string
    logoUrl?: string | null
    admin?: AdminCreateNestedOneWithoutCityInput
    Mosque?: MosqueCreateNestedManyWithoutCityInput
    prayers?: PrayerCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutFixedPrayerTimeInput = {
    id?: number
    name: string
    logoUrl?: string | null
    admin?: AdminUncheckedCreateNestedOneWithoutCityInput
    Mosque?: MosqueUncheckedCreateNestedManyWithoutCityInput
    prayers?: PrayerUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutFixedPrayerTimeInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutFixedPrayerTimeInput, CityUncheckedCreateWithoutFixedPrayerTimeInput>
  }

  export type CityUpsertWithoutFixedPrayerTimeInput = {
    update: XOR<CityUpdateWithoutFixedPrayerTimeInput, CityUncheckedUpdateWithoutFixedPrayerTimeInput>
    create: XOR<CityCreateWithoutFixedPrayerTimeInput, CityUncheckedCreateWithoutFixedPrayerTimeInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutFixedPrayerTimeInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutFixedPrayerTimeInput, CityUncheckedUpdateWithoutFixedPrayerTimeInput>
  }

  export type CityUpdateWithoutFixedPrayerTimeInput = {
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUpdateOneWithoutCityNestedInput
    Mosque?: MosqueUpdateManyWithoutCityNestedInput
    prayers?: PrayerUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutFixedPrayerTimeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUncheckedUpdateOneWithoutCityNestedInput
    Mosque?: MosqueUncheckedUpdateManyWithoutCityNestedInput
    prayers?: PrayerUncheckedUpdateManyWithoutCityNestedInput
  }

  export type MosqueCreateWithoutFixedPrayerTimeInput = {
    name: string
    logoUrl?: string | null
    admin?: AdminCreateNestedOneWithoutMosqueInput
    languageSettings?: MosqueLanguageSettingsCreateNestedOneWithoutMosqueInput
    namesOfAllah?: NameOfAllahCreateNestedManyWithoutMosqueInput
    media?: MediaCreateNestedManyWithoutMosqueInput
    city: CityCreateNestedOneWithoutMosqueInput
    prayers?: PrayerCreateNestedManyWithoutMosqueInput
    qrCodes?: QRCodeCreateNestedManyWithoutMosqueInput
  }

  export type MosqueUncheckedCreateWithoutFixedPrayerTimeInput = {
    id?: number
    cityId: number
    name: string
    logoUrl?: string | null
    admin?: AdminUncheckedCreateNestedOneWithoutMosqueInput
    languageSettings?: MosqueLanguageSettingsUncheckedCreateNestedOneWithoutMosqueInput
    namesOfAllah?: NameOfAllahUncheckedCreateNestedManyWithoutMosqueInput
    media?: MediaUncheckedCreateNestedManyWithoutMosqueInput
    prayers?: PrayerUncheckedCreateNestedManyWithoutMosqueInput
    qrCodes?: QRCodeUncheckedCreateNestedManyWithoutMosqueInput
  }

  export type MosqueCreateOrConnectWithoutFixedPrayerTimeInput = {
    where: MosqueWhereUniqueInput
    create: XOR<MosqueCreateWithoutFixedPrayerTimeInput, MosqueUncheckedCreateWithoutFixedPrayerTimeInput>
  }

  export type MosqueUpsertWithoutFixedPrayerTimeInput = {
    update: XOR<MosqueUpdateWithoutFixedPrayerTimeInput, MosqueUncheckedUpdateWithoutFixedPrayerTimeInput>
    create: XOR<MosqueCreateWithoutFixedPrayerTimeInput, MosqueUncheckedCreateWithoutFixedPrayerTimeInput>
    where?: MosqueWhereInput
  }

  export type MosqueUpdateToOneWithWhereWithoutFixedPrayerTimeInput = {
    where?: MosqueWhereInput
    data: XOR<MosqueUpdateWithoutFixedPrayerTimeInput, MosqueUncheckedUpdateWithoutFixedPrayerTimeInput>
  }

  export type MosqueUpdateWithoutFixedPrayerTimeInput = {
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUpdateOneWithoutMosqueNestedInput
    languageSettings?: MosqueLanguageSettingsUpdateOneWithoutMosqueNestedInput
    namesOfAllah?: NameOfAllahUpdateManyWithoutMosqueNestedInput
    media?: MediaUpdateManyWithoutMosqueNestedInput
    city?: CityUpdateOneRequiredWithoutMosqueNestedInput
    prayers?: PrayerUpdateManyWithoutMosqueNestedInput
    qrCodes?: QRCodeUpdateManyWithoutMosqueNestedInput
  }

  export type MosqueUncheckedUpdateWithoutFixedPrayerTimeInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUncheckedUpdateOneWithoutMosqueNestedInput
    languageSettings?: MosqueLanguageSettingsUncheckedUpdateOneWithoutMosqueNestedInput
    namesOfAllah?: NameOfAllahUncheckedUpdateManyWithoutMosqueNestedInput
    media?: MediaUncheckedUpdateManyWithoutMosqueNestedInput
    prayers?: PrayerUncheckedUpdateManyWithoutMosqueNestedInput
    qrCodes?: QRCodeUncheckedUpdateManyWithoutMosqueNestedInput
  }

  export type PrayerCreateWithoutChangesInput = {
    date?: string | null
    fajr?: string | null
    shuruk?: string | null
    zuhr?: string | null
    asr?: string | null
    maghrib?: string | null
    isha?: string | null
    mechet?: string | null
    city: CityCreateNestedOneWithoutPrayersInput
    mosque?: MosqueCreateNestedOneWithoutPrayersInput
  }

  export type PrayerUncheckedCreateWithoutChangesInput = {
    id?: number
    cityId: number
    mosqueId?: number | null
    date?: string | null
    fajr?: string | null
    shuruk?: string | null
    zuhr?: string | null
    asr?: string | null
    maghrib?: string | null
    isha?: string | null
    mechet?: string | null
  }

  export type PrayerCreateOrConnectWithoutChangesInput = {
    where: PrayerWhereUniqueInput
    create: XOR<PrayerCreateWithoutChangesInput, PrayerUncheckedCreateWithoutChangesInput>
  }

  export type AdminCreateWithoutPrayerChangesInput = {
    email: string
    password: string
    createdAt?: Date | string
    role: $Enums.Role
    city?: CityCreateNestedOneWithoutAdminInput
    mosque?: MosqueCreateNestedOneWithoutAdminInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type AdminUncheckedCreateWithoutPrayerChangesInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    role: $Enums.Role
    cityId?: number | null
    mosqueId?: number | null
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type AdminCreateOrConnectWithoutPrayerChangesInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutPrayerChangesInput, AdminUncheckedCreateWithoutPrayerChangesInput>
  }

  export type PrayerUpsertWithoutChangesInput = {
    update: XOR<PrayerUpdateWithoutChangesInput, PrayerUncheckedUpdateWithoutChangesInput>
    create: XOR<PrayerCreateWithoutChangesInput, PrayerUncheckedCreateWithoutChangesInput>
    where?: PrayerWhereInput
  }

  export type PrayerUpdateToOneWithWhereWithoutChangesInput = {
    where?: PrayerWhereInput
    data: XOR<PrayerUpdateWithoutChangesInput, PrayerUncheckedUpdateWithoutChangesInput>
  }

  export type PrayerUpdateWithoutChangesInput = {
    date?: NullableStringFieldUpdateOperationsInput | string | null
    fajr?: NullableStringFieldUpdateOperationsInput | string | null
    shuruk?: NullableStringFieldUpdateOperationsInput | string | null
    zuhr?: NullableStringFieldUpdateOperationsInput | string | null
    asr?: NullableStringFieldUpdateOperationsInput | string | null
    maghrib?: NullableStringFieldUpdateOperationsInput | string | null
    isha?: NullableStringFieldUpdateOperationsInput | string | null
    mechet?: NullableStringFieldUpdateOperationsInput | string | null
    city?: CityUpdateOneRequiredWithoutPrayersNestedInput
    mosque?: MosqueUpdateOneWithoutPrayersNestedInput
  }

  export type PrayerUncheckedUpdateWithoutChangesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    mosqueId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    fajr?: NullableStringFieldUpdateOperationsInput | string | null
    shuruk?: NullableStringFieldUpdateOperationsInput | string | null
    zuhr?: NullableStringFieldUpdateOperationsInput | string | null
    asr?: NullableStringFieldUpdateOperationsInput | string | null
    maghrib?: NullableStringFieldUpdateOperationsInput | string | null
    isha?: NullableStringFieldUpdateOperationsInput | string | null
    mechet?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminUpsertWithoutPrayerChangesInput = {
    update: XOR<AdminUpdateWithoutPrayerChangesInput, AdminUncheckedUpdateWithoutPrayerChangesInput>
    create: XOR<AdminCreateWithoutPrayerChangesInput, AdminUncheckedCreateWithoutPrayerChangesInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutPrayerChangesInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutPrayerChangesInput, AdminUncheckedUpdateWithoutPrayerChangesInput>
  }

  export type AdminUpdateWithoutPrayerChangesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: CityUpdateOneWithoutAdminNestedInput
    mosque?: MosqueUpdateOneWithoutAdminNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type AdminUncheckedUpdateWithoutPrayerChangesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    mosqueId?: NullableIntFieldUpdateOperationsInput | number | null
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AdminCreateWithoutAuditLogsInput = {
    email: string
    password: string
    createdAt?: Date | string
    role: $Enums.Role
    city?: CityCreateNestedOneWithoutAdminInput
    mosque?: MosqueCreateNestedOneWithoutAdminInput
    prayerChanges?: PrayerTimeChangeCreateNestedManyWithoutUserInput
  }

  export type AdminUncheckedCreateWithoutAuditLogsInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    role: $Enums.Role
    cityId?: number | null
    mosqueId?: number | null
    prayerChanges?: PrayerTimeChangeUncheckedCreateNestedManyWithoutUserInput
  }

  export type AdminCreateOrConnectWithoutAuditLogsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutAuditLogsInput, AdminUncheckedCreateWithoutAuditLogsInput>
  }

  export type AdminUpsertWithoutAuditLogsInput = {
    update: XOR<AdminUpdateWithoutAuditLogsInput, AdminUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<AdminCreateWithoutAuditLogsInput, AdminUncheckedCreateWithoutAuditLogsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutAuditLogsInput, AdminUncheckedUpdateWithoutAuditLogsInput>
  }

  export type AdminUpdateWithoutAuditLogsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: CityUpdateOneWithoutAdminNestedInput
    mosque?: MosqueUpdateOneWithoutAdminNestedInput
    prayerChanges?: PrayerTimeChangeUpdateManyWithoutUserNestedInput
  }

  export type AdminUncheckedUpdateWithoutAuditLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    mosqueId?: NullableIntFieldUpdateOperationsInput | number | null
    prayerChanges?: PrayerTimeChangeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MosqueCreateWithoutLanguageSettingsInput = {
    name: string
    logoUrl?: string | null
    admin?: AdminCreateNestedOneWithoutMosqueInput
    fixedPrayerTime?: FixedMosquePrayerTimeCreateNestedOneWithoutMosqueInput
    namesOfAllah?: NameOfAllahCreateNestedManyWithoutMosqueInput
    media?: MediaCreateNestedManyWithoutMosqueInput
    city: CityCreateNestedOneWithoutMosqueInput
    prayers?: PrayerCreateNestedManyWithoutMosqueInput
    qrCodes?: QRCodeCreateNestedManyWithoutMosqueInput
  }

  export type MosqueUncheckedCreateWithoutLanguageSettingsInput = {
    id?: number
    cityId: number
    name: string
    logoUrl?: string | null
    admin?: AdminUncheckedCreateNestedOneWithoutMosqueInput
    fixedPrayerTime?: FixedMosquePrayerTimeUncheckedCreateNestedOneWithoutMosqueInput
    namesOfAllah?: NameOfAllahUncheckedCreateNestedManyWithoutMosqueInput
    media?: MediaUncheckedCreateNestedManyWithoutMosqueInput
    prayers?: PrayerUncheckedCreateNestedManyWithoutMosqueInput
    qrCodes?: QRCodeUncheckedCreateNestedManyWithoutMosqueInput
  }

  export type MosqueCreateOrConnectWithoutLanguageSettingsInput = {
    where: MosqueWhereUniqueInput
    create: XOR<MosqueCreateWithoutLanguageSettingsInput, MosqueUncheckedCreateWithoutLanguageSettingsInput>
  }

  export type MosqueUpsertWithoutLanguageSettingsInput = {
    update: XOR<MosqueUpdateWithoutLanguageSettingsInput, MosqueUncheckedUpdateWithoutLanguageSettingsInput>
    create: XOR<MosqueCreateWithoutLanguageSettingsInput, MosqueUncheckedCreateWithoutLanguageSettingsInput>
    where?: MosqueWhereInput
  }

  export type MosqueUpdateToOneWithWhereWithoutLanguageSettingsInput = {
    where?: MosqueWhereInput
    data: XOR<MosqueUpdateWithoutLanguageSettingsInput, MosqueUncheckedUpdateWithoutLanguageSettingsInput>
  }

  export type MosqueUpdateWithoutLanguageSettingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUpdateOneWithoutMosqueNestedInput
    fixedPrayerTime?: FixedMosquePrayerTimeUpdateOneWithoutMosqueNestedInput
    namesOfAllah?: NameOfAllahUpdateManyWithoutMosqueNestedInput
    media?: MediaUpdateManyWithoutMosqueNestedInput
    city?: CityUpdateOneRequiredWithoutMosqueNestedInput
    prayers?: PrayerUpdateManyWithoutMosqueNestedInput
    qrCodes?: QRCodeUpdateManyWithoutMosqueNestedInput
  }

  export type MosqueUncheckedUpdateWithoutLanguageSettingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUncheckedUpdateOneWithoutMosqueNestedInput
    fixedPrayerTime?: FixedMosquePrayerTimeUncheckedUpdateOneWithoutMosqueNestedInput
    namesOfAllah?: NameOfAllahUncheckedUpdateManyWithoutMosqueNestedInput
    media?: MediaUncheckedUpdateManyWithoutMosqueNestedInput
    prayers?: PrayerUncheckedUpdateManyWithoutMosqueNestedInput
    qrCodes?: QRCodeUncheckedUpdateManyWithoutMosqueNestedInput
  }

  export type MosqueCreateWithoutNamesOfAllahInput = {
    name: string
    logoUrl?: string | null
    admin?: AdminCreateNestedOneWithoutMosqueInput
    fixedPrayerTime?: FixedMosquePrayerTimeCreateNestedOneWithoutMosqueInput
    languageSettings?: MosqueLanguageSettingsCreateNestedOneWithoutMosqueInput
    media?: MediaCreateNestedManyWithoutMosqueInput
    city: CityCreateNestedOneWithoutMosqueInput
    prayers?: PrayerCreateNestedManyWithoutMosqueInput
    qrCodes?: QRCodeCreateNestedManyWithoutMosqueInput
  }

  export type MosqueUncheckedCreateWithoutNamesOfAllahInput = {
    id?: number
    cityId: number
    name: string
    logoUrl?: string | null
    admin?: AdminUncheckedCreateNestedOneWithoutMosqueInput
    fixedPrayerTime?: FixedMosquePrayerTimeUncheckedCreateNestedOneWithoutMosqueInput
    languageSettings?: MosqueLanguageSettingsUncheckedCreateNestedOneWithoutMosqueInput
    media?: MediaUncheckedCreateNestedManyWithoutMosqueInput
    prayers?: PrayerUncheckedCreateNestedManyWithoutMosqueInput
    qrCodes?: QRCodeUncheckedCreateNestedManyWithoutMosqueInput
  }

  export type MosqueCreateOrConnectWithoutNamesOfAllahInput = {
    where: MosqueWhereUniqueInput
    create: XOR<MosqueCreateWithoutNamesOfAllahInput, MosqueUncheckedCreateWithoutNamesOfAllahInput>
  }

  export type MosqueUpsertWithoutNamesOfAllahInput = {
    update: XOR<MosqueUpdateWithoutNamesOfAllahInput, MosqueUncheckedUpdateWithoutNamesOfAllahInput>
    create: XOR<MosqueCreateWithoutNamesOfAllahInput, MosqueUncheckedCreateWithoutNamesOfAllahInput>
    where?: MosqueWhereInput
  }

  export type MosqueUpdateToOneWithWhereWithoutNamesOfAllahInput = {
    where?: MosqueWhereInput
    data: XOR<MosqueUpdateWithoutNamesOfAllahInput, MosqueUncheckedUpdateWithoutNamesOfAllahInput>
  }

  export type MosqueUpdateWithoutNamesOfAllahInput = {
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUpdateOneWithoutMosqueNestedInput
    fixedPrayerTime?: FixedMosquePrayerTimeUpdateOneWithoutMosqueNestedInput
    languageSettings?: MosqueLanguageSettingsUpdateOneWithoutMosqueNestedInput
    media?: MediaUpdateManyWithoutMosqueNestedInput
    city?: CityUpdateOneRequiredWithoutMosqueNestedInput
    prayers?: PrayerUpdateManyWithoutMosqueNestedInput
    qrCodes?: QRCodeUpdateManyWithoutMosqueNestedInput
  }

  export type MosqueUncheckedUpdateWithoutNamesOfAllahInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUncheckedUpdateOneWithoutMosqueNestedInput
    fixedPrayerTime?: FixedMosquePrayerTimeUncheckedUpdateOneWithoutMosqueNestedInput
    languageSettings?: MosqueLanguageSettingsUncheckedUpdateOneWithoutMosqueNestedInput
    media?: MediaUncheckedUpdateManyWithoutMosqueNestedInput
    prayers?: PrayerUncheckedUpdateManyWithoutMosqueNestedInput
    qrCodes?: QRCodeUncheckedUpdateManyWithoutMosqueNestedInput
  }

  export type MosqueCreateManyCityInput = {
    id?: number
    name: string
    logoUrl?: string | null
  }

  export type PrayerCreateManyCityInput = {
    id?: number
    mosqueId?: number | null
    date?: string | null
    fajr?: string | null
    shuruk?: string | null
    zuhr?: string | null
    asr?: string | null
    maghrib?: string | null
    isha?: string | null
    mechet?: string | null
  }

  export type MosqueUpdateWithoutCityInput = {
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUpdateOneWithoutMosqueNestedInput
    fixedPrayerTime?: FixedMosquePrayerTimeUpdateOneWithoutMosqueNestedInput
    languageSettings?: MosqueLanguageSettingsUpdateOneWithoutMosqueNestedInput
    namesOfAllah?: NameOfAllahUpdateManyWithoutMosqueNestedInput
    media?: MediaUpdateManyWithoutMosqueNestedInput
    prayers?: PrayerUpdateManyWithoutMosqueNestedInput
    qrCodes?: QRCodeUpdateManyWithoutMosqueNestedInput
  }

  export type MosqueUncheckedUpdateWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUncheckedUpdateOneWithoutMosqueNestedInput
    fixedPrayerTime?: FixedMosquePrayerTimeUncheckedUpdateOneWithoutMosqueNestedInput
    languageSettings?: MosqueLanguageSettingsUncheckedUpdateOneWithoutMosqueNestedInput
    namesOfAllah?: NameOfAllahUncheckedUpdateManyWithoutMosqueNestedInput
    media?: MediaUncheckedUpdateManyWithoutMosqueNestedInput
    prayers?: PrayerUncheckedUpdateManyWithoutMosqueNestedInput
    qrCodes?: QRCodeUncheckedUpdateManyWithoutMosqueNestedInput
  }

  export type MosqueUncheckedUpdateManyWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrayerUpdateWithoutCityInput = {
    date?: NullableStringFieldUpdateOperationsInput | string | null
    fajr?: NullableStringFieldUpdateOperationsInput | string | null
    shuruk?: NullableStringFieldUpdateOperationsInput | string | null
    zuhr?: NullableStringFieldUpdateOperationsInput | string | null
    asr?: NullableStringFieldUpdateOperationsInput | string | null
    maghrib?: NullableStringFieldUpdateOperationsInput | string | null
    isha?: NullableStringFieldUpdateOperationsInput | string | null
    mechet?: NullableStringFieldUpdateOperationsInput | string | null
    mosque?: MosqueUpdateOneWithoutPrayersNestedInput
    changes?: PrayerTimeChangeUpdateManyWithoutPrayerNestedInput
  }

  export type PrayerUncheckedUpdateWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    mosqueId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    fajr?: NullableStringFieldUpdateOperationsInput | string | null
    shuruk?: NullableStringFieldUpdateOperationsInput | string | null
    zuhr?: NullableStringFieldUpdateOperationsInput | string | null
    asr?: NullableStringFieldUpdateOperationsInput | string | null
    maghrib?: NullableStringFieldUpdateOperationsInput | string | null
    isha?: NullableStringFieldUpdateOperationsInput | string | null
    mechet?: NullableStringFieldUpdateOperationsInput | string | null
    changes?: PrayerTimeChangeUncheckedUpdateManyWithoutPrayerNestedInput
  }

  export type PrayerUncheckedUpdateManyWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    mosqueId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    fajr?: NullableStringFieldUpdateOperationsInput | string | null
    shuruk?: NullableStringFieldUpdateOperationsInput | string | null
    zuhr?: NullableStringFieldUpdateOperationsInput | string | null
    asr?: NullableStringFieldUpdateOperationsInput | string | null
    maghrib?: NullableStringFieldUpdateOperationsInput | string | null
    isha?: NullableStringFieldUpdateOperationsInput | string | null
    mechet?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrayerTimeChangeCreateManyPrayerInput = {
    id?: number
    prayerType: string
    oldTime: string
    newTime: string
    shiftMinutes: number
    changedAt?: Date | string
    changedBy: number
  }

  export type PrayerTimeChangeUpdateWithoutPrayerInput = {
    prayerType?: StringFieldUpdateOperationsInput | string
    oldTime?: StringFieldUpdateOperationsInput | string
    newTime?: StringFieldUpdateOperationsInput | string
    shiftMinutes?: IntFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: AdminUpdateOneRequiredWithoutPrayerChangesNestedInput
  }

  export type PrayerTimeChangeUncheckedUpdateWithoutPrayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    prayerType?: StringFieldUpdateOperationsInput | string
    oldTime?: StringFieldUpdateOperationsInput | string
    newTime?: StringFieldUpdateOperationsInput | string
    shiftMinutes?: IntFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedBy?: IntFieldUpdateOperationsInput | number
  }

  export type PrayerTimeChangeUncheckedUpdateManyWithoutPrayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    prayerType?: StringFieldUpdateOperationsInput | string
    oldTime?: StringFieldUpdateOperationsInput | string
    newTime?: StringFieldUpdateOperationsInput | string
    shiftMinutes?: IntFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedBy?: IntFieldUpdateOperationsInput | number
  }

  export type NameOfAllahCreateManyMosqueInput = {
    id?: number
    arabic: string
    transcription: string
    meaning: string
    transcriptionTatar?: string | null
    meaningTatar?: string | null
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaCreateManyMosqueInput = {
    id?: number
    videoUrl?: string | null
  }

  export type PrayerCreateManyMosqueInput = {
    id?: number
    cityId: number
    date?: string | null
    fajr?: string | null
    shuruk?: string | null
    zuhr?: string | null
    asr?: string | null
    maghrib?: string | null
    isha?: string | null
    mechet?: string | null
  }

  export type QRCodeCreateManyMosqueInput = {
    id?: number
    isPrimary?: boolean
    projectName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
  }

  export type NameOfAllahUpdateWithoutMosqueInput = {
    arabic?: StringFieldUpdateOperationsInput | string
    transcription?: StringFieldUpdateOperationsInput | string
    meaning?: StringFieldUpdateOperationsInput | string
    transcriptionTatar?: NullableStringFieldUpdateOperationsInput | string | null
    meaningTatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NameOfAllahUncheckedUpdateWithoutMosqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    arabic?: StringFieldUpdateOperationsInput | string
    transcription?: StringFieldUpdateOperationsInput | string
    meaning?: StringFieldUpdateOperationsInput | string
    transcriptionTatar?: NullableStringFieldUpdateOperationsInput | string | null
    meaningTatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NameOfAllahUncheckedUpdateManyWithoutMosqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    arabic?: StringFieldUpdateOperationsInput | string
    transcription?: StringFieldUpdateOperationsInput | string
    meaning?: StringFieldUpdateOperationsInput | string
    transcriptionTatar?: NullableStringFieldUpdateOperationsInput | string | null
    meaningTatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type PrayerUpdateWithoutMosqueInput = {
    date?: NullableStringFieldUpdateOperationsInput | string | null
    fajr?: NullableStringFieldUpdateOperationsInput | string | null
    shuruk?: NullableStringFieldUpdateOperationsInput | string | null
    zuhr?: NullableStringFieldUpdateOperationsInput | string | null
    asr?: NullableStringFieldUpdateOperationsInput | string | null
    maghrib?: NullableStringFieldUpdateOperationsInput | string | null
    isha?: NullableStringFieldUpdateOperationsInput | string | null
    mechet?: NullableStringFieldUpdateOperationsInput | string | null
    city?: CityUpdateOneRequiredWithoutPrayersNestedInput
    changes?: PrayerTimeChangeUpdateManyWithoutPrayerNestedInput
  }

  export type PrayerUncheckedUpdateWithoutMosqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
    fajr?: NullableStringFieldUpdateOperationsInput | string | null
    shuruk?: NullableStringFieldUpdateOperationsInput | string | null
    zuhr?: NullableStringFieldUpdateOperationsInput | string | null
    asr?: NullableStringFieldUpdateOperationsInput | string | null
    maghrib?: NullableStringFieldUpdateOperationsInput | string | null
    isha?: NullableStringFieldUpdateOperationsInput | string | null
    mechet?: NullableStringFieldUpdateOperationsInput | string | null
    changes?: PrayerTimeChangeUncheckedUpdateManyWithoutPrayerNestedInput
  }

  export type PrayerUncheckedUpdateManyWithoutMosqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
    fajr?: NullableStringFieldUpdateOperationsInput | string | null
    shuruk?: NullableStringFieldUpdateOperationsInput | string | null
    zuhr?: NullableStringFieldUpdateOperationsInput | string | null
    asr?: NullableStringFieldUpdateOperationsInput | string | null
    maghrib?: NullableStringFieldUpdateOperationsInput | string | null
    isha?: NullableStringFieldUpdateOperationsInput | string | null
    mechet?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QRCodeUpdateWithoutMosqueInput = {
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type QRCodeUncheckedUpdateWithoutMosqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type QRCodeUncheckedUpdateManyWithoutMosqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type PrayerTimeChangeCreateManyUserInput = {
    id?: number
    prayerId: number
    prayerType: string
    oldTime: string
    newTime: string
    shiftMinutes: number
    changedAt?: Date | string
  }

  export type AuditLogCreateManyUserInput = {
    id?: number
    action: string
    entity: string
    entityId: number
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PrayerTimeChangeUpdateWithoutUserInput = {
    prayerType?: StringFieldUpdateOperationsInput | string
    oldTime?: StringFieldUpdateOperationsInput | string
    newTime?: StringFieldUpdateOperationsInput | string
    shiftMinutes?: IntFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prayer?: PrayerUpdateOneRequiredWithoutChangesNestedInput
  }

  export type PrayerTimeChangeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    prayerId?: IntFieldUpdateOperationsInput | number
    prayerType?: StringFieldUpdateOperationsInput | string
    oldTime?: StringFieldUpdateOperationsInput | string
    newTime?: StringFieldUpdateOperationsInput | string
    shiftMinutes?: IntFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrayerTimeChangeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    prayerId?: IntFieldUpdateOperationsInput | number
    prayerType?: StringFieldUpdateOperationsInput | string
    oldTime?: StringFieldUpdateOperationsInput | string
    newTime?: StringFieldUpdateOperationsInput | string
    shiftMinutes?: IntFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CityCountOutputTypeDefaultArgs instead
     */
    export type CityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PrayerCountOutputTypeDefaultArgs instead
     */
    export type PrayerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PrayerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MosqueCountOutputTypeDefaultArgs instead
     */
    export type MosqueCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MosqueCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminCountOutputTypeDefaultArgs instead
     */
    export type AdminCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminCountOutputTypeDefaultArgs<ExtArgs>
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
     * @deprecated Use FixedPrayerTimeDefaultArgs instead
     */
    export type FixedPrayerTimeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FixedPrayerTimeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FixedMosquePrayerTimeDefaultArgs instead
     */
    export type FixedMosquePrayerTimeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FixedMosquePrayerTimeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PrayerTimeChangeDefaultArgs instead
     */
    export type PrayerTimeChangeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PrayerTimeChangeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditLogDefaultArgs instead
     */
    export type AuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TranslationDefaultArgs instead
     */
    export type TranslationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TranslationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MosqueLanguageSettingsDefaultArgs instead
     */
    export type MosqueLanguageSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MosqueLanguageSettingsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NameOfAllahDefaultArgs instead
     */
    export type NameOfAllahArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NameOfAllahDefaultArgs<ExtArgs>

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