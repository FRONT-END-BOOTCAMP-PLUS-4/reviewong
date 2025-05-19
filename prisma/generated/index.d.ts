
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Grade
 * 
 */
export type Grade = $Result.DefaultSelection<Prisma.$GradePayload>
/**
 * Model CodeSnippet
 * 
 */
export type CodeSnippet = $Result.DefaultSelection<Prisma.$CodeSnippetPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model CodeSnippetCategory
 * 
 */
export type CodeSnippetCategory = $Result.DefaultSelection<Prisma.$CodeSnippetCategoryPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model ReviewLike
 * 
 */
export type ReviewLike = $Result.DefaultSelection<Prisma.$ReviewLikePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.grade`: Exposes CRUD operations for the **Grade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grades
    * const grades = await prisma.grade.findMany()
    * ```
    */
  get grade(): Prisma.GradeDelegate<ExtArgs>;

  /**
   * `prisma.codeSnippet`: Exposes CRUD operations for the **CodeSnippet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CodeSnippets
    * const codeSnippets = await prisma.codeSnippet.findMany()
    * ```
    */
  get codeSnippet(): Prisma.CodeSnippetDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.codeSnippetCategory`: Exposes CRUD operations for the **CodeSnippetCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CodeSnippetCategories
    * const codeSnippetCategories = await prisma.codeSnippetCategory.findMany()
    * ```
    */
  get codeSnippetCategory(): Prisma.CodeSnippetCategoryDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs>;

  /**
   * `prisma.reviewLike`: Exposes CRUD operations for the **ReviewLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewLikes
    * const reviewLikes = await prisma.reviewLike.findMany()
    * ```
    */
  get reviewLike(): Prisma.ReviewLikeDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
    User: 'User',
    Grade: 'Grade',
    CodeSnippet: 'CodeSnippet',
    Category: 'Category',
    CodeSnippetCategory: 'CodeSnippetCategory',
    Review: 'Review',
    ReviewLike: 'ReviewLike'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "grade" | "codeSnippet" | "category" | "codeSnippetCategory" | "review" | "reviewLike"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Grade: {
        payload: Prisma.$GradePayload<ExtArgs>
        fields: Prisma.GradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          findFirst: {
            args: Prisma.GradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          findMany: {
            args: Prisma.GradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>[]
          }
          create: {
            args: Prisma.GradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          createMany: {
            args: Prisma.GradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>[]
          }
          delete: {
            args: Prisma.GradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          update: {
            args: Prisma.GradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          deleteMany: {
            args: Prisma.GradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          aggregate: {
            args: Prisma.GradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrade>
          }
          groupBy: {
            args: Prisma.GradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<GradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.GradeCountArgs<ExtArgs>
            result: $Utils.Optional<GradeCountAggregateOutputType> | number
          }
        }
      }
      CodeSnippet: {
        payload: Prisma.$CodeSnippetPayload<ExtArgs>
        fields: Prisma.CodeSnippetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CodeSnippetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeSnippetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CodeSnippetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeSnippetPayload>
          }
          findFirst: {
            args: Prisma.CodeSnippetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeSnippetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CodeSnippetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeSnippetPayload>
          }
          findMany: {
            args: Prisma.CodeSnippetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeSnippetPayload>[]
          }
          create: {
            args: Prisma.CodeSnippetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeSnippetPayload>
          }
          createMany: {
            args: Prisma.CodeSnippetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CodeSnippetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeSnippetPayload>[]
          }
          delete: {
            args: Prisma.CodeSnippetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeSnippetPayload>
          }
          update: {
            args: Prisma.CodeSnippetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeSnippetPayload>
          }
          deleteMany: {
            args: Prisma.CodeSnippetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CodeSnippetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CodeSnippetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeSnippetPayload>
          }
          aggregate: {
            args: Prisma.CodeSnippetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCodeSnippet>
          }
          groupBy: {
            args: Prisma.CodeSnippetGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodeSnippetGroupByOutputType>[]
          }
          count: {
            args: Prisma.CodeSnippetCountArgs<ExtArgs>
            result: $Utils.Optional<CodeSnippetCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      CodeSnippetCategory: {
        payload: Prisma.$CodeSnippetCategoryPayload<ExtArgs>
        fields: Prisma.CodeSnippetCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CodeSnippetCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeSnippetCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CodeSnippetCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeSnippetCategoryPayload>
          }
          findFirst: {
            args: Prisma.CodeSnippetCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeSnippetCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CodeSnippetCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeSnippetCategoryPayload>
          }
          findMany: {
            args: Prisma.CodeSnippetCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeSnippetCategoryPayload>[]
          }
          create: {
            args: Prisma.CodeSnippetCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeSnippetCategoryPayload>
          }
          createMany: {
            args: Prisma.CodeSnippetCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CodeSnippetCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeSnippetCategoryPayload>[]
          }
          delete: {
            args: Prisma.CodeSnippetCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeSnippetCategoryPayload>
          }
          update: {
            args: Prisma.CodeSnippetCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeSnippetCategoryPayload>
          }
          deleteMany: {
            args: Prisma.CodeSnippetCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CodeSnippetCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CodeSnippetCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeSnippetCategoryPayload>
          }
          aggregate: {
            args: Prisma.CodeSnippetCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCodeSnippetCategory>
          }
          groupBy: {
            args: Prisma.CodeSnippetCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodeSnippetCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CodeSnippetCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CodeSnippetCategoryCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      ReviewLike: {
        payload: Prisma.$ReviewLikePayload<ExtArgs>
        fields: Prisma.ReviewLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload>
          }
          findFirst: {
            args: Prisma.ReviewLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload>
          }
          findMany: {
            args: Prisma.ReviewLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload>[]
          }
          create: {
            args: Prisma.ReviewLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload>
          }
          createMany: {
            args: Prisma.ReviewLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload>[]
          }
          delete: {
            args: Prisma.ReviewLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload>
          }
          update: {
            args: Prisma.ReviewLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload>
          }
          deleteMany: {
            args: Prisma.ReviewLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload>
          }
          aggregate: {
            args: Prisma.ReviewLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewLike>
          }
          groupBy: {
            args: Prisma.ReviewLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewLikeCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewLikeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    | 'createManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    codeSnippets: number
    reviewLikes: number
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    codeSnippets?: boolean | UserCountOutputTypeCountCodeSnippetsArgs
    reviewLikes?: boolean | UserCountOutputTypeCountReviewLikesArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCodeSnippetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodeSnippetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewLikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type GradeCountOutputType
   */

  export type GradeCountOutputType = {
    users: number
  }

  export type GradeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | GradeCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * GradeCountOutputType without action
   */
  export type GradeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeCountOutputType
     */
    select?: GradeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GradeCountOutputType without action
   */
  export type GradeCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type CodeSnippetCountOutputType
   */

  export type CodeSnippetCountOutputType = {
    categories: number
    reviews: number
  }

  export type CodeSnippetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | CodeSnippetCountOutputTypeCountCategoriesArgs
    reviews?: boolean | CodeSnippetCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * CodeSnippetCountOutputType without action
   */
  export type CodeSnippetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippetCountOutputType
     */
    select?: CodeSnippetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CodeSnippetCountOutputType without action
   */
  export type CodeSnippetCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodeSnippetCategoryWhereInput
  }

  /**
   * CodeSnippetCountOutputType without action
   */
  export type CodeSnippetCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    codeSnippetCategories: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    codeSnippetCategories?: boolean | CategoryCountOutputTypeCountCodeSnippetCategoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountCodeSnippetCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodeSnippetCategoryWhereInput
  }


  /**
   * Count Type ReviewCountOutputType
   */

  export type ReviewCountOutputType = {
    likes: number
    replies: number
  }

  export type ReviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | ReviewCountOutputTypeCountLikesArgs
    replies?: boolean | ReviewCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes
  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCountOutputType
     */
    select?: ReviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewLikeWhereInput
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    gradeId: number | null
    likeCount: number | null
    reviewCount: number | null
  }

  export type UserSumAggregateOutputType = {
    gradeId: number | null
    likeCount: number | null
    reviewCount: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    password: string | null
    gradeId: number | null
    imageUrl: string | null
    likeCount: number | null
    nickname: string | null
    reviewCount: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    password: string | null
    gradeId: number | null
    imageUrl: string | null
    likeCount: number | null
    nickname: string | null
    reviewCount: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    password: number
    gradeId: number
    imageUrl: number
    likeCount: number
    nickname: number
    reviewCount: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    gradeId?: true
    likeCount?: true
    reviewCount?: true
  }

  export type UserSumAggregateInputType = {
    gradeId?: true
    likeCount?: true
    reviewCount?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    password?: true
    gradeId?: true
    imageUrl?: true
    likeCount?: true
    nickname?: true
    reviewCount?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    password?: true
    gradeId?: true
    imageUrl?: true
    likeCount?: true
    nickname?: true
    reviewCount?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    password?: true
    gradeId?: true
    imageUrl?: true
    likeCount?: true
    nickname?: true
    reviewCount?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    password: string
    gradeId: number | null
    imageUrl: string | null
    likeCount: number
    nickname: string
    reviewCount: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    password?: boolean
    gradeId?: boolean
    imageUrl?: boolean
    likeCount?: boolean
    nickname?: boolean
    reviewCount?: boolean
    codeSnippets?: boolean | User$codeSnippetsArgs<ExtArgs>
    reviewLikes?: boolean | User$reviewLikesArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    grade?: boolean | User$gradeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    password?: boolean
    gradeId?: boolean
    imageUrl?: boolean
    likeCount?: boolean
    nickname?: boolean
    reviewCount?: boolean
    grade?: boolean | User$gradeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    password?: boolean
    gradeId?: boolean
    imageUrl?: boolean
    likeCount?: boolean
    nickname?: boolean
    reviewCount?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    codeSnippets?: boolean | User$codeSnippetsArgs<ExtArgs>
    reviewLikes?: boolean | User$reviewLikesArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    grade?: boolean | User$gradeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grade?: boolean | User$gradeArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      codeSnippets: Prisma.$CodeSnippetPayload<ExtArgs>[]
      reviewLikes: Prisma.$ReviewLikePayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      grade: Prisma.$GradePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      password: string
      gradeId: number | null
      imageUrl: string | null
      likeCount: number
      nickname: string
      reviewCount: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    codeSnippets<T extends User$codeSnippetsArgs<ExtArgs> = {}>(args?: Subset<T, User$codeSnippetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeSnippetPayload<ExtArgs>, T, "findMany"> | Null>
    reviewLikes<T extends User$reviewLikesArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "findMany"> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    grade<T extends User$gradeArgs<ExtArgs> = {}>(args?: Subset<T, User$gradeArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly gradeId: FieldRef<"User", 'Int'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly likeCount: FieldRef<"User", 'Int'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly reviewCount: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.codeSnippets
   */
  export type User$codeSnippetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippet
     */
    select?: CodeSnippetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeSnippetInclude<ExtArgs> | null
    where?: CodeSnippetWhereInput
    orderBy?: CodeSnippetOrderByWithRelationInput | CodeSnippetOrderByWithRelationInput[]
    cursor?: CodeSnippetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CodeSnippetScalarFieldEnum | CodeSnippetScalarFieldEnum[]
  }

  /**
   * User.reviewLikes
   */
  export type User$reviewLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    where?: ReviewLikeWhereInput
    orderBy?: ReviewLikeOrderByWithRelationInput | ReviewLikeOrderByWithRelationInput[]
    cursor?: ReviewLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewLikeScalarFieldEnum | ReviewLikeScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.grade
   */
  export type User$gradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    where?: GradeWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Grade
   */

  export type AggregateGrade = {
    _count: GradeCountAggregateOutputType | null
    _avg: GradeAvgAggregateOutputType | null
    _sum: GradeSumAggregateOutputType | null
    _min: GradeMinAggregateOutputType | null
    _max: GradeMaxAggregateOutputType | null
  }

  export type GradeAvgAggregateOutputType = {
    id: number | null
  }

  export type GradeSumAggregateOutputType = {
    id: number | null
  }

  export type GradeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GradeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GradeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GradeAvgAggregateInputType = {
    id?: true
  }

  export type GradeSumAggregateInputType = {
    id?: true
  }

  export type GradeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GradeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GradeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grade to aggregate.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Grades
    **/
    _count?: true | GradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GradeMaxAggregateInputType
  }

  export type GetGradeAggregateType<T extends GradeAggregateArgs> = {
        [P in keyof T & keyof AggregateGrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrade[P]>
      : GetScalarType<T[P], AggregateGrade[P]>
  }




  export type GradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradeWhereInput
    orderBy?: GradeOrderByWithAggregationInput | GradeOrderByWithAggregationInput[]
    by: GradeScalarFieldEnum[] | GradeScalarFieldEnum
    having?: GradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GradeCountAggregateInputType | true
    _avg?: GradeAvgAggregateInputType
    _sum?: GradeSumAggregateInputType
    _min?: GradeMinAggregateInputType
    _max?: GradeMaxAggregateInputType
  }

  export type GradeGroupByOutputType = {
    id: number
    name: string
    _count: GradeCountAggregateOutputType | null
    _avg: GradeAvgAggregateOutputType | null
    _sum: GradeSumAggregateOutputType | null
    _min: GradeMinAggregateOutputType | null
    _max: GradeMaxAggregateOutputType | null
  }

  type GetGradeGroupByPayload<T extends GradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GradeGroupByOutputType[P]>
            : GetScalarType<T[P], GradeGroupByOutputType[P]>
        }
      >
    >


  export type GradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Grade$usersArgs<ExtArgs>
    _count?: boolean | GradeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grade"]>

  export type GradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["grade"]>

  export type GradeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type GradeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Grade$usersArgs<ExtArgs>
    _count?: boolean | GradeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GradeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Grade"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["grade"]>
    composites: {}
  }

  type GradeGetPayload<S extends boolean | null | undefined | GradeDefaultArgs> = $Result.GetResult<Prisma.$GradePayload, S>

  type GradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GradeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GradeCountAggregateInputType | true
    }

  export interface GradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Grade'], meta: { name: 'Grade' } }
    /**
     * Find zero or one Grade that matches the filter.
     * @param {GradeFindUniqueArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GradeFindUniqueArgs>(args: SelectSubset<T, GradeFindUniqueArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Grade that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GradeFindUniqueOrThrowArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GradeFindUniqueOrThrowArgs>(args: SelectSubset<T, GradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Grade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeFindFirstArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GradeFindFirstArgs>(args?: SelectSubset<T, GradeFindFirstArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Grade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeFindFirstOrThrowArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GradeFindFirstOrThrowArgs>(args?: SelectSubset<T, GradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Grades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grades
     * const grades = await prisma.grade.findMany()
     * 
     * // Get first 10 Grades
     * const grades = await prisma.grade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gradeWithIdOnly = await prisma.grade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GradeFindManyArgs>(args?: SelectSubset<T, GradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Grade.
     * @param {GradeCreateArgs} args - Arguments to create a Grade.
     * @example
     * // Create one Grade
     * const Grade = await prisma.grade.create({
     *   data: {
     *     // ... data to create a Grade
     *   }
     * })
     * 
     */
    create<T extends GradeCreateArgs>(args: SelectSubset<T, GradeCreateArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Grades.
     * @param {GradeCreateManyArgs} args - Arguments to create many Grades.
     * @example
     * // Create many Grades
     * const grade = await prisma.grade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GradeCreateManyArgs>(args?: SelectSubset<T, GradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Grades and returns the data saved in the database.
     * @param {GradeCreateManyAndReturnArgs} args - Arguments to create many Grades.
     * @example
     * // Create many Grades
     * const grade = await prisma.grade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Grades and only return the `id`
     * const gradeWithIdOnly = await prisma.grade.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GradeCreateManyAndReturnArgs>(args?: SelectSubset<T, GradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Grade.
     * @param {GradeDeleteArgs} args - Arguments to delete one Grade.
     * @example
     * // Delete one Grade
     * const Grade = await prisma.grade.delete({
     *   where: {
     *     // ... filter to delete one Grade
     *   }
     * })
     * 
     */
    delete<T extends GradeDeleteArgs>(args: SelectSubset<T, GradeDeleteArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Grade.
     * @param {GradeUpdateArgs} args - Arguments to update one Grade.
     * @example
     * // Update one Grade
     * const grade = await prisma.grade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GradeUpdateArgs>(args: SelectSubset<T, GradeUpdateArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Grades.
     * @param {GradeDeleteManyArgs} args - Arguments to filter Grades to delete.
     * @example
     * // Delete a few Grades
     * const { count } = await prisma.grade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GradeDeleteManyArgs>(args?: SelectSubset<T, GradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grades
     * const grade = await prisma.grade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GradeUpdateManyArgs>(args: SelectSubset<T, GradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Grade.
     * @param {GradeUpsertArgs} args - Arguments to update or create a Grade.
     * @example
     * // Update or create a Grade
     * const grade = await prisma.grade.upsert({
     *   create: {
     *     // ... data to create a Grade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grade we want to update
     *   }
     * })
     */
    upsert<T extends GradeUpsertArgs>(args: SelectSubset<T, GradeUpsertArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Grades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeCountArgs} args - Arguments to filter Grades to count.
     * @example
     * // Count the number of Grades
     * const count = await prisma.grade.count({
     *   where: {
     *     // ... the filter for the Grades we want to count
     *   }
     * })
    **/
    count<T extends GradeCountArgs>(
      args?: Subset<T, GradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GradeAggregateArgs>(args: Subset<T, GradeAggregateArgs>): Prisma.PrismaPromise<GetGradeAggregateType<T>>

    /**
     * Group by Grade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeGroupByArgs} args - Group by arguments.
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
      T extends GradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GradeGroupByArgs['orderBy'] }
        : { orderBy?: GradeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Grade model
   */
  readonly fields: GradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Grade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Grade$usersArgs<ExtArgs> = {}>(args?: Subset<T, Grade$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Grade model
   */ 
  interface GradeFieldRefs {
    readonly id: FieldRef<"Grade", 'Int'>
    readonly name: FieldRef<"Grade", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Grade findUnique
   */
  export type GradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade findUniqueOrThrow
   */
  export type GradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade findFirst
   */
  export type GradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grades.
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grades.
     */
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Grade findFirstOrThrow
   */
  export type GradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grades.
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grades.
     */
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Grade findMany
   */
  export type GradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grades to fetch.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Grades.
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Grade create
   */
  export type GradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * The data needed to create a Grade.
     */
    data: XOR<GradeCreateInput, GradeUncheckedCreateInput>
  }

  /**
   * Grade createMany
   */
  export type GradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Grades.
     */
    data: GradeCreateManyInput | GradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Grade createManyAndReturn
   */
  export type GradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Grades.
     */
    data: GradeCreateManyInput | GradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Grade update
   */
  export type GradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * The data needed to update a Grade.
     */
    data: XOR<GradeUpdateInput, GradeUncheckedUpdateInput>
    /**
     * Choose, which Grade to update.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade updateMany
   */
  export type GradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Grades.
     */
    data: XOR<GradeUpdateManyMutationInput, GradeUncheckedUpdateManyInput>
    /**
     * Filter which Grades to update
     */
    where?: GradeWhereInput
  }

  /**
   * Grade upsert
   */
  export type GradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * The filter to search for the Grade to update in case it exists.
     */
    where: GradeWhereUniqueInput
    /**
     * In case the Grade found by the `where` argument doesn't exist, create a new Grade with this data.
     */
    create: XOR<GradeCreateInput, GradeUncheckedCreateInput>
    /**
     * In case the Grade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GradeUpdateInput, GradeUncheckedUpdateInput>
  }

  /**
   * Grade delete
   */
  export type GradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter which Grade to delete.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade deleteMany
   */
  export type GradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grades to delete
     */
    where?: GradeWhereInput
  }

  /**
   * Grade.users
   */
  export type Grade$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Grade without action
   */
  export type GradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
  }


  /**
   * Model CodeSnippet
   */

  export type AggregateCodeSnippet = {
    _count: CodeSnippetCountAggregateOutputType | null
    _avg: CodeSnippetAvgAggregateOutputType | null
    _sum: CodeSnippetSumAggregateOutputType | null
    _min: CodeSnippetMinAggregateOutputType | null
    _max: CodeSnippetMaxAggregateOutputType | null
  }

  export type CodeSnippetAvgAggregateOutputType = {
    id: number | null
  }

  export type CodeSnippetSumAggregateOutputType = {
    id: number | null
  }

  export type CodeSnippetMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type CodeSnippetMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type CodeSnippetCountAggregateOutputType = {
    id: number
    title: number
    content: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type CodeSnippetAvgAggregateInputType = {
    id?: true
  }

  export type CodeSnippetSumAggregateInputType = {
    id?: true
  }

  export type CodeSnippetMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type CodeSnippetMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type CodeSnippetCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type CodeSnippetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeSnippet to aggregate.
     */
    where?: CodeSnippetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeSnippets to fetch.
     */
    orderBy?: CodeSnippetOrderByWithRelationInput | CodeSnippetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodeSnippetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeSnippets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeSnippets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CodeSnippets
    **/
    _count?: true | CodeSnippetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CodeSnippetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CodeSnippetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodeSnippetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodeSnippetMaxAggregateInputType
  }

  export type GetCodeSnippetAggregateType<T extends CodeSnippetAggregateArgs> = {
        [P in keyof T & keyof AggregateCodeSnippet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCodeSnippet[P]>
      : GetScalarType<T[P], AggregateCodeSnippet[P]>
  }




  export type CodeSnippetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodeSnippetWhereInput
    orderBy?: CodeSnippetOrderByWithAggregationInput | CodeSnippetOrderByWithAggregationInput[]
    by: CodeSnippetScalarFieldEnum[] | CodeSnippetScalarFieldEnum
    having?: CodeSnippetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodeSnippetCountAggregateInputType | true
    _avg?: CodeSnippetAvgAggregateInputType
    _sum?: CodeSnippetSumAggregateInputType
    _min?: CodeSnippetMinAggregateInputType
    _max?: CodeSnippetMaxAggregateInputType
  }

  export type CodeSnippetGroupByOutputType = {
    id: number
    title: string
    content: string
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: CodeSnippetCountAggregateOutputType | null
    _avg: CodeSnippetAvgAggregateOutputType | null
    _sum: CodeSnippetSumAggregateOutputType | null
    _min: CodeSnippetMinAggregateOutputType | null
    _max: CodeSnippetMaxAggregateOutputType | null
  }

  type GetCodeSnippetGroupByPayload<T extends CodeSnippetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodeSnippetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodeSnippetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodeSnippetGroupByOutputType[P]>
            : GetScalarType<T[P], CodeSnippetGroupByOutputType[P]>
        }
      >
    >


  export type CodeSnippetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categories?: boolean | CodeSnippet$categoriesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | CodeSnippet$reviewsArgs<ExtArgs>
    _count?: boolean | CodeSnippetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codeSnippet"]>

  export type CodeSnippetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codeSnippet"]>

  export type CodeSnippetSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type CodeSnippetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | CodeSnippet$categoriesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | CodeSnippet$reviewsArgs<ExtArgs>
    _count?: boolean | CodeSnippetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CodeSnippetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CodeSnippetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CodeSnippet"
    objects: {
      categories: Prisma.$CodeSnippetCategoryPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["codeSnippet"]>
    composites: {}
  }

  type CodeSnippetGetPayload<S extends boolean | null | undefined | CodeSnippetDefaultArgs> = $Result.GetResult<Prisma.$CodeSnippetPayload, S>

  type CodeSnippetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CodeSnippetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CodeSnippetCountAggregateInputType | true
    }

  export interface CodeSnippetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CodeSnippet'], meta: { name: 'CodeSnippet' } }
    /**
     * Find zero or one CodeSnippet that matches the filter.
     * @param {CodeSnippetFindUniqueArgs} args - Arguments to find a CodeSnippet
     * @example
     * // Get one CodeSnippet
     * const codeSnippet = await prisma.codeSnippet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CodeSnippetFindUniqueArgs>(args: SelectSubset<T, CodeSnippetFindUniqueArgs<ExtArgs>>): Prisma__CodeSnippetClient<$Result.GetResult<Prisma.$CodeSnippetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CodeSnippet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CodeSnippetFindUniqueOrThrowArgs} args - Arguments to find a CodeSnippet
     * @example
     * // Get one CodeSnippet
     * const codeSnippet = await prisma.codeSnippet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CodeSnippetFindUniqueOrThrowArgs>(args: SelectSubset<T, CodeSnippetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CodeSnippetClient<$Result.GetResult<Prisma.$CodeSnippetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CodeSnippet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSnippetFindFirstArgs} args - Arguments to find a CodeSnippet
     * @example
     * // Get one CodeSnippet
     * const codeSnippet = await prisma.codeSnippet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CodeSnippetFindFirstArgs>(args?: SelectSubset<T, CodeSnippetFindFirstArgs<ExtArgs>>): Prisma__CodeSnippetClient<$Result.GetResult<Prisma.$CodeSnippetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CodeSnippet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSnippetFindFirstOrThrowArgs} args - Arguments to find a CodeSnippet
     * @example
     * // Get one CodeSnippet
     * const codeSnippet = await prisma.codeSnippet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CodeSnippetFindFirstOrThrowArgs>(args?: SelectSubset<T, CodeSnippetFindFirstOrThrowArgs<ExtArgs>>): Prisma__CodeSnippetClient<$Result.GetResult<Prisma.$CodeSnippetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CodeSnippets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSnippetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CodeSnippets
     * const codeSnippets = await prisma.codeSnippet.findMany()
     * 
     * // Get first 10 CodeSnippets
     * const codeSnippets = await prisma.codeSnippet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const codeSnippetWithIdOnly = await prisma.codeSnippet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CodeSnippetFindManyArgs>(args?: SelectSubset<T, CodeSnippetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeSnippetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CodeSnippet.
     * @param {CodeSnippetCreateArgs} args - Arguments to create a CodeSnippet.
     * @example
     * // Create one CodeSnippet
     * const CodeSnippet = await prisma.codeSnippet.create({
     *   data: {
     *     // ... data to create a CodeSnippet
     *   }
     * })
     * 
     */
    create<T extends CodeSnippetCreateArgs>(args: SelectSubset<T, CodeSnippetCreateArgs<ExtArgs>>): Prisma__CodeSnippetClient<$Result.GetResult<Prisma.$CodeSnippetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CodeSnippets.
     * @param {CodeSnippetCreateManyArgs} args - Arguments to create many CodeSnippets.
     * @example
     * // Create many CodeSnippets
     * const codeSnippet = await prisma.codeSnippet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CodeSnippetCreateManyArgs>(args?: SelectSubset<T, CodeSnippetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CodeSnippets and returns the data saved in the database.
     * @param {CodeSnippetCreateManyAndReturnArgs} args - Arguments to create many CodeSnippets.
     * @example
     * // Create many CodeSnippets
     * const codeSnippet = await prisma.codeSnippet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CodeSnippets and only return the `id`
     * const codeSnippetWithIdOnly = await prisma.codeSnippet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CodeSnippetCreateManyAndReturnArgs>(args?: SelectSubset<T, CodeSnippetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeSnippetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CodeSnippet.
     * @param {CodeSnippetDeleteArgs} args - Arguments to delete one CodeSnippet.
     * @example
     * // Delete one CodeSnippet
     * const CodeSnippet = await prisma.codeSnippet.delete({
     *   where: {
     *     // ... filter to delete one CodeSnippet
     *   }
     * })
     * 
     */
    delete<T extends CodeSnippetDeleteArgs>(args: SelectSubset<T, CodeSnippetDeleteArgs<ExtArgs>>): Prisma__CodeSnippetClient<$Result.GetResult<Prisma.$CodeSnippetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CodeSnippet.
     * @param {CodeSnippetUpdateArgs} args - Arguments to update one CodeSnippet.
     * @example
     * // Update one CodeSnippet
     * const codeSnippet = await prisma.codeSnippet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CodeSnippetUpdateArgs>(args: SelectSubset<T, CodeSnippetUpdateArgs<ExtArgs>>): Prisma__CodeSnippetClient<$Result.GetResult<Prisma.$CodeSnippetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CodeSnippets.
     * @param {CodeSnippetDeleteManyArgs} args - Arguments to filter CodeSnippets to delete.
     * @example
     * // Delete a few CodeSnippets
     * const { count } = await prisma.codeSnippet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CodeSnippetDeleteManyArgs>(args?: SelectSubset<T, CodeSnippetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodeSnippets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSnippetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CodeSnippets
     * const codeSnippet = await prisma.codeSnippet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CodeSnippetUpdateManyArgs>(args: SelectSubset<T, CodeSnippetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CodeSnippet.
     * @param {CodeSnippetUpsertArgs} args - Arguments to update or create a CodeSnippet.
     * @example
     * // Update or create a CodeSnippet
     * const codeSnippet = await prisma.codeSnippet.upsert({
     *   create: {
     *     // ... data to create a CodeSnippet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CodeSnippet we want to update
     *   }
     * })
     */
    upsert<T extends CodeSnippetUpsertArgs>(args: SelectSubset<T, CodeSnippetUpsertArgs<ExtArgs>>): Prisma__CodeSnippetClient<$Result.GetResult<Prisma.$CodeSnippetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CodeSnippets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSnippetCountArgs} args - Arguments to filter CodeSnippets to count.
     * @example
     * // Count the number of CodeSnippets
     * const count = await prisma.codeSnippet.count({
     *   where: {
     *     // ... the filter for the CodeSnippets we want to count
     *   }
     * })
    **/
    count<T extends CodeSnippetCountArgs>(
      args?: Subset<T, CodeSnippetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodeSnippetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CodeSnippet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSnippetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CodeSnippetAggregateArgs>(args: Subset<T, CodeSnippetAggregateArgs>): Prisma.PrismaPromise<GetCodeSnippetAggregateType<T>>

    /**
     * Group by CodeSnippet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSnippetGroupByArgs} args - Group by arguments.
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
      T extends CodeSnippetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodeSnippetGroupByArgs['orderBy'] }
        : { orderBy?: CodeSnippetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CodeSnippetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodeSnippetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CodeSnippet model
   */
  readonly fields: CodeSnippetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CodeSnippet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CodeSnippetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends CodeSnippet$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, CodeSnippet$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeSnippetCategoryPayload<ExtArgs>, T, "findMany"> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    reviews<T extends CodeSnippet$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, CodeSnippet$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CodeSnippet model
   */ 
  interface CodeSnippetFieldRefs {
    readonly id: FieldRef<"CodeSnippet", 'Int'>
    readonly title: FieldRef<"CodeSnippet", 'String'>
    readonly content: FieldRef<"CodeSnippet", 'String'>
    readonly createdAt: FieldRef<"CodeSnippet", 'DateTime'>
    readonly updatedAt: FieldRef<"CodeSnippet", 'DateTime'>
    readonly userId: FieldRef<"CodeSnippet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CodeSnippet findUnique
   */
  export type CodeSnippetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippet
     */
    select?: CodeSnippetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeSnippetInclude<ExtArgs> | null
    /**
     * Filter, which CodeSnippet to fetch.
     */
    where: CodeSnippetWhereUniqueInput
  }

  /**
   * CodeSnippet findUniqueOrThrow
   */
  export type CodeSnippetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippet
     */
    select?: CodeSnippetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeSnippetInclude<ExtArgs> | null
    /**
     * Filter, which CodeSnippet to fetch.
     */
    where: CodeSnippetWhereUniqueInput
  }

  /**
   * CodeSnippet findFirst
   */
  export type CodeSnippetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippet
     */
    select?: CodeSnippetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeSnippetInclude<ExtArgs> | null
    /**
     * Filter, which CodeSnippet to fetch.
     */
    where?: CodeSnippetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeSnippets to fetch.
     */
    orderBy?: CodeSnippetOrderByWithRelationInput | CodeSnippetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeSnippets.
     */
    cursor?: CodeSnippetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeSnippets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeSnippets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeSnippets.
     */
    distinct?: CodeSnippetScalarFieldEnum | CodeSnippetScalarFieldEnum[]
  }

  /**
   * CodeSnippet findFirstOrThrow
   */
  export type CodeSnippetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippet
     */
    select?: CodeSnippetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeSnippetInclude<ExtArgs> | null
    /**
     * Filter, which CodeSnippet to fetch.
     */
    where?: CodeSnippetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeSnippets to fetch.
     */
    orderBy?: CodeSnippetOrderByWithRelationInput | CodeSnippetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeSnippets.
     */
    cursor?: CodeSnippetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeSnippets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeSnippets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeSnippets.
     */
    distinct?: CodeSnippetScalarFieldEnum | CodeSnippetScalarFieldEnum[]
  }

  /**
   * CodeSnippet findMany
   */
  export type CodeSnippetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippet
     */
    select?: CodeSnippetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeSnippetInclude<ExtArgs> | null
    /**
     * Filter, which CodeSnippets to fetch.
     */
    where?: CodeSnippetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeSnippets to fetch.
     */
    orderBy?: CodeSnippetOrderByWithRelationInput | CodeSnippetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CodeSnippets.
     */
    cursor?: CodeSnippetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeSnippets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeSnippets.
     */
    skip?: number
    distinct?: CodeSnippetScalarFieldEnum | CodeSnippetScalarFieldEnum[]
  }

  /**
   * CodeSnippet create
   */
  export type CodeSnippetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippet
     */
    select?: CodeSnippetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeSnippetInclude<ExtArgs> | null
    /**
     * The data needed to create a CodeSnippet.
     */
    data: XOR<CodeSnippetCreateInput, CodeSnippetUncheckedCreateInput>
  }

  /**
   * CodeSnippet createMany
   */
  export type CodeSnippetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CodeSnippets.
     */
    data: CodeSnippetCreateManyInput | CodeSnippetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CodeSnippet createManyAndReturn
   */
  export type CodeSnippetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippet
     */
    select?: CodeSnippetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CodeSnippets.
     */
    data: CodeSnippetCreateManyInput | CodeSnippetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeSnippetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CodeSnippet update
   */
  export type CodeSnippetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippet
     */
    select?: CodeSnippetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeSnippetInclude<ExtArgs> | null
    /**
     * The data needed to update a CodeSnippet.
     */
    data: XOR<CodeSnippetUpdateInput, CodeSnippetUncheckedUpdateInput>
    /**
     * Choose, which CodeSnippet to update.
     */
    where: CodeSnippetWhereUniqueInput
  }

  /**
   * CodeSnippet updateMany
   */
  export type CodeSnippetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CodeSnippets.
     */
    data: XOR<CodeSnippetUpdateManyMutationInput, CodeSnippetUncheckedUpdateManyInput>
    /**
     * Filter which CodeSnippets to update
     */
    where?: CodeSnippetWhereInput
  }

  /**
   * CodeSnippet upsert
   */
  export type CodeSnippetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippet
     */
    select?: CodeSnippetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeSnippetInclude<ExtArgs> | null
    /**
     * The filter to search for the CodeSnippet to update in case it exists.
     */
    where: CodeSnippetWhereUniqueInput
    /**
     * In case the CodeSnippet found by the `where` argument doesn't exist, create a new CodeSnippet with this data.
     */
    create: XOR<CodeSnippetCreateInput, CodeSnippetUncheckedCreateInput>
    /**
     * In case the CodeSnippet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodeSnippetUpdateInput, CodeSnippetUncheckedUpdateInput>
  }

  /**
   * CodeSnippet delete
   */
  export type CodeSnippetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippet
     */
    select?: CodeSnippetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeSnippetInclude<ExtArgs> | null
    /**
     * Filter which CodeSnippet to delete.
     */
    where: CodeSnippetWhereUniqueInput
  }

  /**
   * CodeSnippet deleteMany
   */
  export type CodeSnippetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeSnippets to delete
     */
    where?: CodeSnippetWhereInput
  }

  /**
   * CodeSnippet.categories
   */
  export type CodeSnippet$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippetCategory
     */
    select?: CodeSnippetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeSnippetCategoryInclude<ExtArgs> | null
    where?: CodeSnippetCategoryWhereInput
    orderBy?: CodeSnippetCategoryOrderByWithRelationInput | CodeSnippetCategoryOrderByWithRelationInput[]
    cursor?: CodeSnippetCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CodeSnippetCategoryScalarFieldEnum | CodeSnippetCategoryScalarFieldEnum[]
  }

  /**
   * CodeSnippet.reviews
   */
  export type CodeSnippet$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * CodeSnippet without action
   */
  export type CodeSnippetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippet
     */
    select?: CodeSnippetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeSnippetInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    codeSnippetCategories?: boolean | Category$codeSnippetCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    codeSnippetCategories?: boolean | Category$codeSnippetCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      codeSnippetCategories: Prisma.$CodeSnippetCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    codeSnippetCategories<T extends Category$codeSnippetCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Category$codeSnippetCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeSnippetCategoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.codeSnippetCategories
   */
  export type Category$codeSnippetCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippetCategory
     */
    select?: CodeSnippetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeSnippetCategoryInclude<ExtArgs> | null
    where?: CodeSnippetCategoryWhereInput
    orderBy?: CodeSnippetCategoryOrderByWithRelationInput | CodeSnippetCategoryOrderByWithRelationInput[]
    cursor?: CodeSnippetCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CodeSnippetCategoryScalarFieldEnum | CodeSnippetCategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model CodeSnippetCategory
   */

  export type AggregateCodeSnippetCategory = {
    _count: CodeSnippetCategoryCountAggregateOutputType | null
    _avg: CodeSnippetCategoryAvgAggregateOutputType | null
    _sum: CodeSnippetCategorySumAggregateOutputType | null
    _min: CodeSnippetCategoryMinAggregateOutputType | null
    _max: CodeSnippetCategoryMaxAggregateOutputType | null
  }

  export type CodeSnippetCategoryAvgAggregateOutputType = {
    codeId: number | null
    categoryId: number | null
  }

  export type CodeSnippetCategorySumAggregateOutputType = {
    codeId: number | null
    categoryId: number | null
  }

  export type CodeSnippetCategoryMinAggregateOutputType = {
    codeId: number | null
    categoryId: number | null
  }

  export type CodeSnippetCategoryMaxAggregateOutputType = {
    codeId: number | null
    categoryId: number | null
  }

  export type CodeSnippetCategoryCountAggregateOutputType = {
    codeId: number
    categoryId: number
    _all: number
  }


  export type CodeSnippetCategoryAvgAggregateInputType = {
    codeId?: true
    categoryId?: true
  }

  export type CodeSnippetCategorySumAggregateInputType = {
    codeId?: true
    categoryId?: true
  }

  export type CodeSnippetCategoryMinAggregateInputType = {
    codeId?: true
    categoryId?: true
  }

  export type CodeSnippetCategoryMaxAggregateInputType = {
    codeId?: true
    categoryId?: true
  }

  export type CodeSnippetCategoryCountAggregateInputType = {
    codeId?: true
    categoryId?: true
    _all?: true
  }

  export type CodeSnippetCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeSnippetCategory to aggregate.
     */
    where?: CodeSnippetCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeSnippetCategories to fetch.
     */
    orderBy?: CodeSnippetCategoryOrderByWithRelationInput | CodeSnippetCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodeSnippetCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeSnippetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeSnippetCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CodeSnippetCategories
    **/
    _count?: true | CodeSnippetCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CodeSnippetCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CodeSnippetCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodeSnippetCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodeSnippetCategoryMaxAggregateInputType
  }

  export type GetCodeSnippetCategoryAggregateType<T extends CodeSnippetCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCodeSnippetCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCodeSnippetCategory[P]>
      : GetScalarType<T[P], AggregateCodeSnippetCategory[P]>
  }




  export type CodeSnippetCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodeSnippetCategoryWhereInput
    orderBy?: CodeSnippetCategoryOrderByWithAggregationInput | CodeSnippetCategoryOrderByWithAggregationInput[]
    by: CodeSnippetCategoryScalarFieldEnum[] | CodeSnippetCategoryScalarFieldEnum
    having?: CodeSnippetCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodeSnippetCategoryCountAggregateInputType | true
    _avg?: CodeSnippetCategoryAvgAggregateInputType
    _sum?: CodeSnippetCategorySumAggregateInputType
    _min?: CodeSnippetCategoryMinAggregateInputType
    _max?: CodeSnippetCategoryMaxAggregateInputType
  }

  export type CodeSnippetCategoryGroupByOutputType = {
    codeId: number
    categoryId: number
    _count: CodeSnippetCategoryCountAggregateOutputType | null
    _avg: CodeSnippetCategoryAvgAggregateOutputType | null
    _sum: CodeSnippetCategorySumAggregateOutputType | null
    _min: CodeSnippetCategoryMinAggregateOutputType | null
    _max: CodeSnippetCategoryMaxAggregateOutputType | null
  }

  type GetCodeSnippetCategoryGroupByPayload<T extends CodeSnippetCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodeSnippetCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodeSnippetCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodeSnippetCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CodeSnippetCategoryGroupByOutputType[P]>
        }
      >
    >


  export type CodeSnippetCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codeId?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    codeSnippet?: boolean | CodeSnippetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codeSnippetCategory"]>

  export type CodeSnippetCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codeId?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    codeSnippet?: boolean | CodeSnippetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codeSnippetCategory"]>

  export type CodeSnippetCategorySelectScalar = {
    codeId?: boolean
    categoryId?: boolean
  }

  export type CodeSnippetCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    codeSnippet?: boolean | CodeSnippetDefaultArgs<ExtArgs>
  }
  export type CodeSnippetCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    codeSnippet?: boolean | CodeSnippetDefaultArgs<ExtArgs>
  }

  export type $CodeSnippetCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CodeSnippetCategory"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      codeSnippet: Prisma.$CodeSnippetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      codeId: number
      categoryId: number
    }, ExtArgs["result"]["codeSnippetCategory"]>
    composites: {}
  }

  type CodeSnippetCategoryGetPayload<S extends boolean | null | undefined | CodeSnippetCategoryDefaultArgs> = $Result.GetResult<Prisma.$CodeSnippetCategoryPayload, S>

  type CodeSnippetCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CodeSnippetCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CodeSnippetCategoryCountAggregateInputType | true
    }

  export interface CodeSnippetCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CodeSnippetCategory'], meta: { name: 'CodeSnippetCategory' } }
    /**
     * Find zero or one CodeSnippetCategory that matches the filter.
     * @param {CodeSnippetCategoryFindUniqueArgs} args - Arguments to find a CodeSnippetCategory
     * @example
     * // Get one CodeSnippetCategory
     * const codeSnippetCategory = await prisma.codeSnippetCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CodeSnippetCategoryFindUniqueArgs>(args: SelectSubset<T, CodeSnippetCategoryFindUniqueArgs<ExtArgs>>): Prisma__CodeSnippetCategoryClient<$Result.GetResult<Prisma.$CodeSnippetCategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CodeSnippetCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CodeSnippetCategoryFindUniqueOrThrowArgs} args - Arguments to find a CodeSnippetCategory
     * @example
     * // Get one CodeSnippetCategory
     * const codeSnippetCategory = await prisma.codeSnippetCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CodeSnippetCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CodeSnippetCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CodeSnippetCategoryClient<$Result.GetResult<Prisma.$CodeSnippetCategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CodeSnippetCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSnippetCategoryFindFirstArgs} args - Arguments to find a CodeSnippetCategory
     * @example
     * // Get one CodeSnippetCategory
     * const codeSnippetCategory = await prisma.codeSnippetCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CodeSnippetCategoryFindFirstArgs>(args?: SelectSubset<T, CodeSnippetCategoryFindFirstArgs<ExtArgs>>): Prisma__CodeSnippetCategoryClient<$Result.GetResult<Prisma.$CodeSnippetCategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CodeSnippetCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSnippetCategoryFindFirstOrThrowArgs} args - Arguments to find a CodeSnippetCategory
     * @example
     * // Get one CodeSnippetCategory
     * const codeSnippetCategory = await prisma.codeSnippetCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CodeSnippetCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CodeSnippetCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CodeSnippetCategoryClient<$Result.GetResult<Prisma.$CodeSnippetCategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CodeSnippetCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSnippetCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CodeSnippetCategories
     * const codeSnippetCategories = await prisma.codeSnippetCategory.findMany()
     * 
     * // Get first 10 CodeSnippetCategories
     * const codeSnippetCategories = await prisma.codeSnippetCategory.findMany({ take: 10 })
     * 
     * // Only select the `codeId`
     * const codeSnippetCategoryWithCodeIdOnly = await prisma.codeSnippetCategory.findMany({ select: { codeId: true } })
     * 
     */
    findMany<T extends CodeSnippetCategoryFindManyArgs>(args?: SelectSubset<T, CodeSnippetCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeSnippetCategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CodeSnippetCategory.
     * @param {CodeSnippetCategoryCreateArgs} args - Arguments to create a CodeSnippetCategory.
     * @example
     * // Create one CodeSnippetCategory
     * const CodeSnippetCategory = await prisma.codeSnippetCategory.create({
     *   data: {
     *     // ... data to create a CodeSnippetCategory
     *   }
     * })
     * 
     */
    create<T extends CodeSnippetCategoryCreateArgs>(args: SelectSubset<T, CodeSnippetCategoryCreateArgs<ExtArgs>>): Prisma__CodeSnippetCategoryClient<$Result.GetResult<Prisma.$CodeSnippetCategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CodeSnippetCategories.
     * @param {CodeSnippetCategoryCreateManyArgs} args - Arguments to create many CodeSnippetCategories.
     * @example
     * // Create many CodeSnippetCategories
     * const codeSnippetCategory = await prisma.codeSnippetCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CodeSnippetCategoryCreateManyArgs>(args?: SelectSubset<T, CodeSnippetCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CodeSnippetCategories and returns the data saved in the database.
     * @param {CodeSnippetCategoryCreateManyAndReturnArgs} args - Arguments to create many CodeSnippetCategories.
     * @example
     * // Create many CodeSnippetCategories
     * const codeSnippetCategory = await prisma.codeSnippetCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CodeSnippetCategories and only return the `codeId`
     * const codeSnippetCategoryWithCodeIdOnly = await prisma.codeSnippetCategory.createManyAndReturn({ 
     *   select: { codeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CodeSnippetCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CodeSnippetCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeSnippetCategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CodeSnippetCategory.
     * @param {CodeSnippetCategoryDeleteArgs} args - Arguments to delete one CodeSnippetCategory.
     * @example
     * // Delete one CodeSnippetCategory
     * const CodeSnippetCategory = await prisma.codeSnippetCategory.delete({
     *   where: {
     *     // ... filter to delete one CodeSnippetCategory
     *   }
     * })
     * 
     */
    delete<T extends CodeSnippetCategoryDeleteArgs>(args: SelectSubset<T, CodeSnippetCategoryDeleteArgs<ExtArgs>>): Prisma__CodeSnippetCategoryClient<$Result.GetResult<Prisma.$CodeSnippetCategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CodeSnippetCategory.
     * @param {CodeSnippetCategoryUpdateArgs} args - Arguments to update one CodeSnippetCategory.
     * @example
     * // Update one CodeSnippetCategory
     * const codeSnippetCategory = await prisma.codeSnippetCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CodeSnippetCategoryUpdateArgs>(args: SelectSubset<T, CodeSnippetCategoryUpdateArgs<ExtArgs>>): Prisma__CodeSnippetCategoryClient<$Result.GetResult<Prisma.$CodeSnippetCategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CodeSnippetCategories.
     * @param {CodeSnippetCategoryDeleteManyArgs} args - Arguments to filter CodeSnippetCategories to delete.
     * @example
     * // Delete a few CodeSnippetCategories
     * const { count } = await prisma.codeSnippetCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CodeSnippetCategoryDeleteManyArgs>(args?: SelectSubset<T, CodeSnippetCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodeSnippetCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSnippetCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CodeSnippetCategories
     * const codeSnippetCategory = await prisma.codeSnippetCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CodeSnippetCategoryUpdateManyArgs>(args: SelectSubset<T, CodeSnippetCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CodeSnippetCategory.
     * @param {CodeSnippetCategoryUpsertArgs} args - Arguments to update or create a CodeSnippetCategory.
     * @example
     * // Update or create a CodeSnippetCategory
     * const codeSnippetCategory = await prisma.codeSnippetCategory.upsert({
     *   create: {
     *     // ... data to create a CodeSnippetCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CodeSnippetCategory we want to update
     *   }
     * })
     */
    upsert<T extends CodeSnippetCategoryUpsertArgs>(args: SelectSubset<T, CodeSnippetCategoryUpsertArgs<ExtArgs>>): Prisma__CodeSnippetCategoryClient<$Result.GetResult<Prisma.$CodeSnippetCategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CodeSnippetCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSnippetCategoryCountArgs} args - Arguments to filter CodeSnippetCategories to count.
     * @example
     * // Count the number of CodeSnippetCategories
     * const count = await prisma.codeSnippetCategory.count({
     *   where: {
     *     // ... the filter for the CodeSnippetCategories we want to count
     *   }
     * })
    **/
    count<T extends CodeSnippetCategoryCountArgs>(
      args?: Subset<T, CodeSnippetCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodeSnippetCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CodeSnippetCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSnippetCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CodeSnippetCategoryAggregateArgs>(args: Subset<T, CodeSnippetCategoryAggregateArgs>): Prisma.PrismaPromise<GetCodeSnippetCategoryAggregateType<T>>

    /**
     * Group by CodeSnippetCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSnippetCategoryGroupByArgs} args - Group by arguments.
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
      T extends CodeSnippetCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodeSnippetCategoryGroupByArgs['orderBy'] }
        : { orderBy?: CodeSnippetCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CodeSnippetCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodeSnippetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CodeSnippetCategory model
   */
  readonly fields: CodeSnippetCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CodeSnippetCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CodeSnippetCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    codeSnippet<T extends CodeSnippetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CodeSnippetDefaultArgs<ExtArgs>>): Prisma__CodeSnippetClient<$Result.GetResult<Prisma.$CodeSnippetPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CodeSnippetCategory model
   */ 
  interface CodeSnippetCategoryFieldRefs {
    readonly codeId: FieldRef<"CodeSnippetCategory", 'Int'>
    readonly categoryId: FieldRef<"CodeSnippetCategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CodeSnippetCategory findUnique
   */
  export type CodeSnippetCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippetCategory
     */
    select?: CodeSnippetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeSnippetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CodeSnippetCategory to fetch.
     */
    where: CodeSnippetCategoryWhereUniqueInput
  }

  /**
   * CodeSnippetCategory findUniqueOrThrow
   */
  export type CodeSnippetCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippetCategory
     */
    select?: CodeSnippetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeSnippetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CodeSnippetCategory to fetch.
     */
    where: CodeSnippetCategoryWhereUniqueInput
  }

  /**
   * CodeSnippetCategory findFirst
   */
  export type CodeSnippetCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippetCategory
     */
    select?: CodeSnippetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeSnippetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CodeSnippetCategory to fetch.
     */
    where?: CodeSnippetCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeSnippetCategories to fetch.
     */
    orderBy?: CodeSnippetCategoryOrderByWithRelationInput | CodeSnippetCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeSnippetCategories.
     */
    cursor?: CodeSnippetCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeSnippetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeSnippetCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeSnippetCategories.
     */
    distinct?: CodeSnippetCategoryScalarFieldEnum | CodeSnippetCategoryScalarFieldEnum[]
  }

  /**
   * CodeSnippetCategory findFirstOrThrow
   */
  export type CodeSnippetCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippetCategory
     */
    select?: CodeSnippetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeSnippetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CodeSnippetCategory to fetch.
     */
    where?: CodeSnippetCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeSnippetCategories to fetch.
     */
    orderBy?: CodeSnippetCategoryOrderByWithRelationInput | CodeSnippetCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeSnippetCategories.
     */
    cursor?: CodeSnippetCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeSnippetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeSnippetCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeSnippetCategories.
     */
    distinct?: CodeSnippetCategoryScalarFieldEnum | CodeSnippetCategoryScalarFieldEnum[]
  }

  /**
   * CodeSnippetCategory findMany
   */
  export type CodeSnippetCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippetCategory
     */
    select?: CodeSnippetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeSnippetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CodeSnippetCategories to fetch.
     */
    where?: CodeSnippetCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeSnippetCategories to fetch.
     */
    orderBy?: CodeSnippetCategoryOrderByWithRelationInput | CodeSnippetCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CodeSnippetCategories.
     */
    cursor?: CodeSnippetCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeSnippetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeSnippetCategories.
     */
    skip?: number
    distinct?: CodeSnippetCategoryScalarFieldEnum | CodeSnippetCategoryScalarFieldEnum[]
  }

  /**
   * CodeSnippetCategory create
   */
  export type CodeSnippetCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippetCategory
     */
    select?: CodeSnippetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeSnippetCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a CodeSnippetCategory.
     */
    data: XOR<CodeSnippetCategoryCreateInput, CodeSnippetCategoryUncheckedCreateInput>
  }

  /**
   * CodeSnippetCategory createMany
   */
  export type CodeSnippetCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CodeSnippetCategories.
     */
    data: CodeSnippetCategoryCreateManyInput | CodeSnippetCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CodeSnippetCategory createManyAndReturn
   */
  export type CodeSnippetCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippetCategory
     */
    select?: CodeSnippetCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CodeSnippetCategories.
     */
    data: CodeSnippetCategoryCreateManyInput | CodeSnippetCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeSnippetCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CodeSnippetCategory update
   */
  export type CodeSnippetCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippetCategory
     */
    select?: CodeSnippetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeSnippetCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a CodeSnippetCategory.
     */
    data: XOR<CodeSnippetCategoryUpdateInput, CodeSnippetCategoryUncheckedUpdateInput>
    /**
     * Choose, which CodeSnippetCategory to update.
     */
    where: CodeSnippetCategoryWhereUniqueInput
  }

  /**
   * CodeSnippetCategory updateMany
   */
  export type CodeSnippetCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CodeSnippetCategories.
     */
    data: XOR<CodeSnippetCategoryUpdateManyMutationInput, CodeSnippetCategoryUncheckedUpdateManyInput>
    /**
     * Filter which CodeSnippetCategories to update
     */
    where?: CodeSnippetCategoryWhereInput
  }

  /**
   * CodeSnippetCategory upsert
   */
  export type CodeSnippetCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippetCategory
     */
    select?: CodeSnippetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeSnippetCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the CodeSnippetCategory to update in case it exists.
     */
    where: CodeSnippetCategoryWhereUniqueInput
    /**
     * In case the CodeSnippetCategory found by the `where` argument doesn't exist, create a new CodeSnippetCategory with this data.
     */
    create: XOR<CodeSnippetCategoryCreateInput, CodeSnippetCategoryUncheckedCreateInput>
    /**
     * In case the CodeSnippetCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodeSnippetCategoryUpdateInput, CodeSnippetCategoryUncheckedUpdateInput>
  }

  /**
   * CodeSnippetCategory delete
   */
  export type CodeSnippetCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippetCategory
     */
    select?: CodeSnippetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeSnippetCategoryInclude<ExtArgs> | null
    /**
     * Filter which CodeSnippetCategory to delete.
     */
    where: CodeSnippetCategoryWhereUniqueInput
  }

  /**
   * CodeSnippetCategory deleteMany
   */
  export type CodeSnippetCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeSnippetCategories to delete
     */
    where?: CodeSnippetCategoryWhereInput
  }

  /**
   * CodeSnippetCategory without action
   */
  export type CodeSnippetCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeSnippetCategory
     */
    select?: CodeSnippetCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeSnippetCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    parentId: number | null
    codeId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    parentId: number | null
    codeId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    parentId: number | null
    userId: string | null
    codeId: number | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    parentId: number | null
    userId: string | null
    codeId: number | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    updatedAt: number
    parentId: number
    userId: number
    codeId: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    parentId?: true
    codeId?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    parentId?: true
    codeId?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    parentId?: true
    userId?: true
    codeId?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    parentId?: true
    userId?: true
    codeId?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    parentId?: true
    userId?: true
    codeId?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    content: string
    createdAt: Date
    updatedAt: Date
    parentId: number | null
    userId: string
    codeId: number
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentId?: boolean
    userId?: boolean
    codeId?: boolean
    likes?: boolean | Review$likesArgs<ExtArgs>
    codeSnippet?: boolean | CodeSnippetDefaultArgs<ExtArgs>
    parent?: boolean | Review$parentArgs<ExtArgs>
    replies?: boolean | Review$repliesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentId?: boolean
    userId?: boolean
    codeId?: boolean
    codeSnippet?: boolean | CodeSnippetDefaultArgs<ExtArgs>
    parent?: boolean | Review$parentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentId?: boolean
    userId?: boolean
    codeId?: boolean
  }

  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | Review$likesArgs<ExtArgs>
    codeSnippet?: boolean | CodeSnippetDefaultArgs<ExtArgs>
    parent?: boolean | Review$parentArgs<ExtArgs>
    replies?: boolean | Review$repliesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    codeSnippet?: boolean | CodeSnippetDefaultArgs<ExtArgs>
    parent?: boolean | Review$parentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      likes: Prisma.$ReviewLikePayload<ExtArgs>[]
      codeSnippet: Prisma.$CodeSnippetPayload<ExtArgs>
      parent: Prisma.$ReviewPayload<ExtArgs> | null
      replies: Prisma.$ReviewPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      createdAt: Date
      updatedAt: Date
      parentId: number | null
      userId: string
      codeId: number
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    likes<T extends Review$likesArgs<ExtArgs> = {}>(args?: Subset<T, Review$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "findMany"> | Null>
    codeSnippet<T extends CodeSnippetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CodeSnippetDefaultArgs<ExtArgs>>): Prisma__CodeSnippetClient<$Result.GetResult<Prisma.$CodeSnippetPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    parent<T extends Review$parentArgs<ExtArgs> = {}>(args?: Subset<T, Review$parentArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    replies<T extends Review$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Review$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly content: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
    readonly parentId: FieldRef<"Review", 'Int'>
    readonly userId: FieldRef<"Review", 'String'>
    readonly codeId: FieldRef<"Review", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }

  /**
   * Review.likes
   */
  export type Review$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    where?: ReviewLikeWhereInput
    orderBy?: ReviewLikeOrderByWithRelationInput | ReviewLikeOrderByWithRelationInput[]
    cursor?: ReviewLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewLikeScalarFieldEnum | ReviewLikeScalarFieldEnum[]
  }

  /**
   * Review.parent
   */
  export type Review$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
  }

  /**
   * Review.replies
   */
  export type Review$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model ReviewLike
   */

  export type AggregateReviewLike = {
    _count: ReviewLikeCountAggregateOutputType | null
    _avg: ReviewLikeAvgAggregateOutputType | null
    _sum: ReviewLikeSumAggregateOutputType | null
    _min: ReviewLikeMinAggregateOutputType | null
    _max: ReviewLikeMaxAggregateOutputType | null
  }

  export type ReviewLikeAvgAggregateOutputType = {
    reviewId: number | null
  }

  export type ReviewLikeSumAggregateOutputType = {
    reviewId: number | null
  }

  export type ReviewLikeMinAggregateOutputType = {
    userId: string | null
    reviewId: number | null
  }

  export type ReviewLikeMaxAggregateOutputType = {
    userId: string | null
    reviewId: number | null
  }

  export type ReviewLikeCountAggregateOutputType = {
    userId: number
    reviewId: number
    _all: number
  }


  export type ReviewLikeAvgAggregateInputType = {
    reviewId?: true
  }

  export type ReviewLikeSumAggregateInputType = {
    reviewId?: true
  }

  export type ReviewLikeMinAggregateInputType = {
    userId?: true
    reviewId?: true
  }

  export type ReviewLikeMaxAggregateInputType = {
    userId?: true
    reviewId?: true
  }

  export type ReviewLikeCountAggregateInputType = {
    userId?: true
    reviewId?: true
    _all?: true
  }

  export type ReviewLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewLike to aggregate.
     */
    where?: ReviewLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewLikes to fetch.
     */
    orderBy?: ReviewLikeOrderByWithRelationInput | ReviewLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewLikes
    **/
    _count?: true | ReviewLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewLikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewLikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewLikeMaxAggregateInputType
  }

  export type GetReviewLikeAggregateType<T extends ReviewLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewLike[P]>
      : GetScalarType<T[P], AggregateReviewLike[P]>
  }




  export type ReviewLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewLikeWhereInput
    orderBy?: ReviewLikeOrderByWithAggregationInput | ReviewLikeOrderByWithAggregationInput[]
    by: ReviewLikeScalarFieldEnum[] | ReviewLikeScalarFieldEnum
    having?: ReviewLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewLikeCountAggregateInputType | true
    _avg?: ReviewLikeAvgAggregateInputType
    _sum?: ReviewLikeSumAggregateInputType
    _min?: ReviewLikeMinAggregateInputType
    _max?: ReviewLikeMaxAggregateInputType
  }

  export type ReviewLikeGroupByOutputType = {
    userId: string
    reviewId: number
    _count: ReviewLikeCountAggregateOutputType | null
    _avg: ReviewLikeAvgAggregateOutputType | null
    _sum: ReviewLikeSumAggregateOutputType | null
    _min: ReviewLikeMinAggregateOutputType | null
    _max: ReviewLikeMaxAggregateOutputType | null
  }

  type GetReviewLikeGroupByPayload<T extends ReviewLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewLikeGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewLikeGroupByOutputType[P]>
        }
      >
    >


  export type ReviewLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    reviewId?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewLike"]>

  export type ReviewLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    reviewId?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewLike"]>

  export type ReviewLikeSelectScalar = {
    userId?: boolean
    reviewId?: boolean
  }

  export type ReviewLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewLike"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      reviewId: number
    }, ExtArgs["result"]["reviewLike"]>
    composites: {}
  }

  type ReviewLikeGetPayload<S extends boolean | null | undefined | ReviewLikeDefaultArgs> = $Result.GetResult<Prisma.$ReviewLikePayload, S>

  type ReviewLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewLikeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewLikeCountAggregateInputType | true
    }

  export interface ReviewLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewLike'], meta: { name: 'ReviewLike' } }
    /**
     * Find zero or one ReviewLike that matches the filter.
     * @param {ReviewLikeFindUniqueArgs} args - Arguments to find a ReviewLike
     * @example
     * // Get one ReviewLike
     * const reviewLike = await prisma.reviewLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewLikeFindUniqueArgs>(args: SelectSubset<T, ReviewLikeFindUniqueArgs<ExtArgs>>): Prisma__ReviewLikeClient<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ReviewLike that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewLikeFindUniqueOrThrowArgs} args - Arguments to find a ReviewLike
     * @example
     * // Get one ReviewLike
     * const reviewLike = await prisma.reviewLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewLikeClient<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ReviewLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewLikeFindFirstArgs} args - Arguments to find a ReviewLike
     * @example
     * // Get one ReviewLike
     * const reviewLike = await prisma.reviewLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewLikeFindFirstArgs>(args?: SelectSubset<T, ReviewLikeFindFirstArgs<ExtArgs>>): Prisma__ReviewLikeClient<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ReviewLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewLikeFindFirstOrThrowArgs} args - Arguments to find a ReviewLike
     * @example
     * // Get one ReviewLike
     * const reviewLike = await prisma.reviewLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewLikeClient<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ReviewLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewLikes
     * const reviewLikes = await prisma.reviewLike.findMany()
     * 
     * // Get first 10 ReviewLikes
     * const reviewLikes = await prisma.reviewLike.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const reviewLikeWithUserIdOnly = await prisma.reviewLike.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends ReviewLikeFindManyArgs>(args?: SelectSubset<T, ReviewLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ReviewLike.
     * @param {ReviewLikeCreateArgs} args - Arguments to create a ReviewLike.
     * @example
     * // Create one ReviewLike
     * const ReviewLike = await prisma.reviewLike.create({
     *   data: {
     *     // ... data to create a ReviewLike
     *   }
     * })
     * 
     */
    create<T extends ReviewLikeCreateArgs>(args: SelectSubset<T, ReviewLikeCreateArgs<ExtArgs>>): Prisma__ReviewLikeClient<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ReviewLikes.
     * @param {ReviewLikeCreateManyArgs} args - Arguments to create many ReviewLikes.
     * @example
     * // Create many ReviewLikes
     * const reviewLike = await prisma.reviewLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewLikeCreateManyArgs>(args?: SelectSubset<T, ReviewLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReviewLikes and returns the data saved in the database.
     * @param {ReviewLikeCreateManyAndReturnArgs} args - Arguments to create many ReviewLikes.
     * @example
     * // Create many ReviewLikes
     * const reviewLike = await prisma.reviewLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReviewLikes and only return the `userId`
     * const reviewLikeWithUserIdOnly = await prisma.reviewLike.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ReviewLike.
     * @param {ReviewLikeDeleteArgs} args - Arguments to delete one ReviewLike.
     * @example
     * // Delete one ReviewLike
     * const ReviewLike = await prisma.reviewLike.delete({
     *   where: {
     *     // ... filter to delete one ReviewLike
     *   }
     * })
     * 
     */
    delete<T extends ReviewLikeDeleteArgs>(args: SelectSubset<T, ReviewLikeDeleteArgs<ExtArgs>>): Prisma__ReviewLikeClient<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ReviewLike.
     * @param {ReviewLikeUpdateArgs} args - Arguments to update one ReviewLike.
     * @example
     * // Update one ReviewLike
     * const reviewLike = await prisma.reviewLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewLikeUpdateArgs>(args: SelectSubset<T, ReviewLikeUpdateArgs<ExtArgs>>): Prisma__ReviewLikeClient<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ReviewLikes.
     * @param {ReviewLikeDeleteManyArgs} args - Arguments to filter ReviewLikes to delete.
     * @example
     * // Delete a few ReviewLikes
     * const { count } = await prisma.reviewLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewLikeDeleteManyArgs>(args?: SelectSubset<T, ReviewLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewLikes
     * const reviewLike = await prisma.reviewLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewLikeUpdateManyArgs>(args: SelectSubset<T, ReviewLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReviewLike.
     * @param {ReviewLikeUpsertArgs} args - Arguments to update or create a ReviewLike.
     * @example
     * // Update or create a ReviewLike
     * const reviewLike = await prisma.reviewLike.upsert({
     *   create: {
     *     // ... data to create a ReviewLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewLike we want to update
     *   }
     * })
     */
    upsert<T extends ReviewLikeUpsertArgs>(args: SelectSubset<T, ReviewLikeUpsertArgs<ExtArgs>>): Prisma__ReviewLikeClient<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ReviewLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewLikeCountArgs} args - Arguments to filter ReviewLikes to count.
     * @example
     * // Count the number of ReviewLikes
     * const count = await prisma.reviewLike.count({
     *   where: {
     *     // ... the filter for the ReviewLikes we want to count
     *   }
     * })
    **/
    count<T extends ReviewLikeCountArgs>(
      args?: Subset<T, ReviewLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewLikeAggregateArgs>(args: Subset<T, ReviewLikeAggregateArgs>): Prisma.PrismaPromise<GetReviewLikeAggregateType<T>>

    /**
     * Group by ReviewLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewLikeGroupByArgs} args - Group by arguments.
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
      T extends ReviewLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewLikeGroupByArgs['orderBy'] }
        : { orderBy?: ReviewLikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewLike model
   */
  readonly fields: ReviewLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReviewLike model
   */ 
  interface ReviewLikeFieldRefs {
    readonly userId: FieldRef<"ReviewLike", 'String'>
    readonly reviewId: FieldRef<"ReviewLike", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ReviewLike findUnique
   */
  export type ReviewLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * Filter, which ReviewLike to fetch.
     */
    where: ReviewLikeWhereUniqueInput
  }

  /**
   * ReviewLike findUniqueOrThrow
   */
  export type ReviewLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * Filter, which ReviewLike to fetch.
     */
    where: ReviewLikeWhereUniqueInput
  }

  /**
   * ReviewLike findFirst
   */
  export type ReviewLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * Filter, which ReviewLike to fetch.
     */
    where?: ReviewLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewLikes to fetch.
     */
    orderBy?: ReviewLikeOrderByWithRelationInput | ReviewLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewLikes.
     */
    cursor?: ReviewLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewLikes.
     */
    distinct?: ReviewLikeScalarFieldEnum | ReviewLikeScalarFieldEnum[]
  }

  /**
   * ReviewLike findFirstOrThrow
   */
  export type ReviewLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * Filter, which ReviewLike to fetch.
     */
    where?: ReviewLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewLikes to fetch.
     */
    orderBy?: ReviewLikeOrderByWithRelationInput | ReviewLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewLikes.
     */
    cursor?: ReviewLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewLikes.
     */
    distinct?: ReviewLikeScalarFieldEnum | ReviewLikeScalarFieldEnum[]
  }

  /**
   * ReviewLike findMany
   */
  export type ReviewLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * Filter, which ReviewLikes to fetch.
     */
    where?: ReviewLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewLikes to fetch.
     */
    orderBy?: ReviewLikeOrderByWithRelationInput | ReviewLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewLikes.
     */
    cursor?: ReviewLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewLikes.
     */
    skip?: number
    distinct?: ReviewLikeScalarFieldEnum | ReviewLikeScalarFieldEnum[]
  }

  /**
   * ReviewLike create
   */
  export type ReviewLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewLike.
     */
    data: XOR<ReviewLikeCreateInput, ReviewLikeUncheckedCreateInput>
  }

  /**
   * ReviewLike createMany
   */
  export type ReviewLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewLikes.
     */
    data: ReviewLikeCreateManyInput | ReviewLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewLike createManyAndReturn
   */
  export type ReviewLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ReviewLikes.
     */
    data: ReviewLikeCreateManyInput | ReviewLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewLike update
   */
  export type ReviewLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewLike.
     */
    data: XOR<ReviewLikeUpdateInput, ReviewLikeUncheckedUpdateInput>
    /**
     * Choose, which ReviewLike to update.
     */
    where: ReviewLikeWhereUniqueInput
  }

  /**
   * ReviewLike updateMany
   */
  export type ReviewLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewLikes.
     */
    data: XOR<ReviewLikeUpdateManyMutationInput, ReviewLikeUncheckedUpdateManyInput>
    /**
     * Filter which ReviewLikes to update
     */
    where?: ReviewLikeWhereInput
  }

  /**
   * ReviewLike upsert
   */
  export type ReviewLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewLike to update in case it exists.
     */
    where: ReviewLikeWhereUniqueInput
    /**
     * In case the ReviewLike found by the `where` argument doesn't exist, create a new ReviewLike with this data.
     */
    create: XOR<ReviewLikeCreateInput, ReviewLikeUncheckedCreateInput>
    /**
     * In case the ReviewLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewLikeUpdateInput, ReviewLikeUncheckedUpdateInput>
  }

  /**
   * ReviewLike delete
   */
  export type ReviewLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * Filter which ReviewLike to delete.
     */
    where: ReviewLikeWhereUniqueInput
  }

  /**
   * ReviewLike deleteMany
   */
  export type ReviewLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewLikes to delete
     */
    where?: ReviewLikeWhereInput
  }

  /**
   * ReviewLike without action
   */
  export type ReviewLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    password: 'password',
    gradeId: 'gradeId',
    imageUrl: 'imageUrl',
    likeCount: 'likeCount',
    nickname: 'nickname',
    reviewCount: 'reviewCount'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GradeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GradeScalarFieldEnum = (typeof GradeScalarFieldEnum)[keyof typeof GradeScalarFieldEnum]


  export const CodeSnippetScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type CodeSnippetScalarFieldEnum = (typeof CodeSnippetScalarFieldEnum)[keyof typeof CodeSnippetScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CodeSnippetCategoryScalarFieldEnum: {
    codeId: 'codeId',
    categoryId: 'categoryId'
  };

  export type CodeSnippetCategoryScalarFieldEnum = (typeof CodeSnippetCategoryScalarFieldEnum)[keyof typeof CodeSnippetCategoryScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    parentId: 'parentId',
    userId: 'userId',
    codeId: 'codeId'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const ReviewLikeScalarFieldEnum: {
    userId: 'userId',
    reviewId: 'reviewId'
  };

  export type ReviewLikeScalarFieldEnum = (typeof ReviewLikeScalarFieldEnum)[keyof typeof ReviewLikeScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringFilter<"User"> | string
    gradeId?: IntNullableFilter<"User"> | number | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    likeCount?: IntFilter<"User"> | number
    nickname?: StringFilter<"User"> | string
    reviewCount?: IntFilter<"User"> | number
    codeSnippets?: CodeSnippetListRelationFilter
    reviewLikes?: ReviewLikeListRelationFilter
    reviews?: ReviewListRelationFilter
    grade?: XOR<GradeNullableRelationFilter, GradeWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    password?: SortOrder
    gradeId?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    likeCount?: SortOrder
    nickname?: SortOrder
    reviewCount?: SortOrder
    codeSnippets?: CodeSnippetOrderByRelationAggregateInput
    reviewLikes?: ReviewLikeOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    grade?: GradeOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringFilter<"User"> | string
    gradeId?: IntNullableFilter<"User"> | number | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    likeCount?: IntFilter<"User"> | number
    nickname?: StringFilter<"User"> | string
    reviewCount?: IntFilter<"User"> | number
    codeSnippets?: CodeSnippetListRelationFilter
    reviewLikes?: ReviewLikeListRelationFilter
    reviews?: ReviewListRelationFilter
    grade?: XOR<GradeNullableRelationFilter, GradeWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    password?: SortOrder
    gradeId?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    likeCount?: SortOrder
    nickname?: SortOrder
    reviewCount?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    gradeId?: IntNullableWithAggregatesFilter<"User"> | number | null
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    likeCount?: IntWithAggregatesFilter<"User"> | number
    nickname?: StringWithAggregatesFilter<"User"> | string
    reviewCount?: IntWithAggregatesFilter<"User"> | number
  }

  export type GradeWhereInput = {
    AND?: GradeWhereInput | GradeWhereInput[]
    OR?: GradeWhereInput[]
    NOT?: GradeWhereInput | GradeWhereInput[]
    id?: IntFilter<"Grade"> | number
    name?: StringFilter<"Grade"> | string
    users?: UserListRelationFilter
  }

  export type GradeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type GradeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GradeWhereInput | GradeWhereInput[]
    OR?: GradeWhereInput[]
    NOT?: GradeWhereInput | GradeWhereInput[]
    name?: StringFilter<"Grade"> | string
    users?: UserListRelationFilter
  }, "id">

  export type GradeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: GradeCountOrderByAggregateInput
    _avg?: GradeAvgOrderByAggregateInput
    _max?: GradeMaxOrderByAggregateInput
    _min?: GradeMinOrderByAggregateInput
    _sum?: GradeSumOrderByAggregateInput
  }

  export type GradeScalarWhereWithAggregatesInput = {
    AND?: GradeScalarWhereWithAggregatesInput | GradeScalarWhereWithAggregatesInput[]
    OR?: GradeScalarWhereWithAggregatesInput[]
    NOT?: GradeScalarWhereWithAggregatesInput | GradeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Grade"> | number
    name?: StringWithAggregatesFilter<"Grade"> | string
  }

  export type CodeSnippetWhereInput = {
    AND?: CodeSnippetWhereInput | CodeSnippetWhereInput[]
    OR?: CodeSnippetWhereInput[]
    NOT?: CodeSnippetWhereInput | CodeSnippetWhereInput[]
    id?: IntFilter<"CodeSnippet"> | number
    title?: StringFilter<"CodeSnippet"> | string
    content?: StringFilter<"CodeSnippet"> | string
    createdAt?: DateTimeFilter<"CodeSnippet"> | Date | string
    updatedAt?: DateTimeFilter<"CodeSnippet"> | Date | string
    userId?: StringFilter<"CodeSnippet"> | string
    categories?: CodeSnippetCategoryListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
  }

  export type CodeSnippetOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categories?: CodeSnippetCategoryOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type CodeSnippetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CodeSnippetWhereInput | CodeSnippetWhereInput[]
    OR?: CodeSnippetWhereInput[]
    NOT?: CodeSnippetWhereInput | CodeSnippetWhereInput[]
    title?: StringFilter<"CodeSnippet"> | string
    content?: StringFilter<"CodeSnippet"> | string
    createdAt?: DateTimeFilter<"CodeSnippet"> | Date | string
    updatedAt?: DateTimeFilter<"CodeSnippet"> | Date | string
    userId?: StringFilter<"CodeSnippet"> | string
    categories?: CodeSnippetCategoryListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
  }, "id">

  export type CodeSnippetOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: CodeSnippetCountOrderByAggregateInput
    _avg?: CodeSnippetAvgOrderByAggregateInput
    _max?: CodeSnippetMaxOrderByAggregateInput
    _min?: CodeSnippetMinOrderByAggregateInput
    _sum?: CodeSnippetSumOrderByAggregateInput
  }

  export type CodeSnippetScalarWhereWithAggregatesInput = {
    AND?: CodeSnippetScalarWhereWithAggregatesInput | CodeSnippetScalarWhereWithAggregatesInput[]
    OR?: CodeSnippetScalarWhereWithAggregatesInput[]
    NOT?: CodeSnippetScalarWhereWithAggregatesInput | CodeSnippetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CodeSnippet"> | number
    title?: StringWithAggregatesFilter<"CodeSnippet"> | string
    content?: StringWithAggregatesFilter<"CodeSnippet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CodeSnippet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CodeSnippet"> | Date | string
    userId?: StringWithAggregatesFilter<"CodeSnippet"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    codeSnippetCategories?: CodeSnippetCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    codeSnippetCategories?: CodeSnippetCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    codeSnippetCategories?: CodeSnippetCategoryListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type CodeSnippetCategoryWhereInput = {
    AND?: CodeSnippetCategoryWhereInput | CodeSnippetCategoryWhereInput[]
    OR?: CodeSnippetCategoryWhereInput[]
    NOT?: CodeSnippetCategoryWhereInput | CodeSnippetCategoryWhereInput[]
    codeId?: IntFilter<"CodeSnippetCategory"> | number
    categoryId?: IntFilter<"CodeSnippetCategory"> | number
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    codeSnippet?: XOR<CodeSnippetRelationFilter, CodeSnippetWhereInput>
  }

  export type CodeSnippetCategoryOrderByWithRelationInput = {
    codeId?: SortOrder
    categoryId?: SortOrder
    category?: CategoryOrderByWithRelationInput
    codeSnippet?: CodeSnippetOrderByWithRelationInput
  }

  export type CodeSnippetCategoryWhereUniqueInput = Prisma.AtLeast<{
    codeId_categoryId?: CodeSnippetCategoryCodeIdCategoryIdCompoundUniqueInput
    AND?: CodeSnippetCategoryWhereInput | CodeSnippetCategoryWhereInput[]
    OR?: CodeSnippetCategoryWhereInput[]
    NOT?: CodeSnippetCategoryWhereInput | CodeSnippetCategoryWhereInput[]
    codeId?: IntFilter<"CodeSnippetCategory"> | number
    categoryId?: IntFilter<"CodeSnippetCategory"> | number
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    codeSnippet?: XOR<CodeSnippetRelationFilter, CodeSnippetWhereInput>
  }, "codeId_categoryId">

  export type CodeSnippetCategoryOrderByWithAggregationInput = {
    codeId?: SortOrder
    categoryId?: SortOrder
    _count?: CodeSnippetCategoryCountOrderByAggregateInput
    _avg?: CodeSnippetCategoryAvgOrderByAggregateInput
    _max?: CodeSnippetCategoryMaxOrderByAggregateInput
    _min?: CodeSnippetCategoryMinOrderByAggregateInput
    _sum?: CodeSnippetCategorySumOrderByAggregateInput
  }

  export type CodeSnippetCategoryScalarWhereWithAggregatesInput = {
    AND?: CodeSnippetCategoryScalarWhereWithAggregatesInput | CodeSnippetCategoryScalarWhereWithAggregatesInput[]
    OR?: CodeSnippetCategoryScalarWhereWithAggregatesInput[]
    NOT?: CodeSnippetCategoryScalarWhereWithAggregatesInput | CodeSnippetCategoryScalarWhereWithAggregatesInput[]
    codeId?: IntWithAggregatesFilter<"CodeSnippetCategory"> | number
    categoryId?: IntWithAggregatesFilter<"CodeSnippetCategory"> | number
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    content?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    parentId?: IntNullableFilter<"Review"> | number | null
    userId?: StringFilter<"Review"> | string
    codeId?: IntFilter<"Review"> | number
    likes?: ReviewLikeListRelationFilter
    codeSnippet?: XOR<CodeSnippetRelationFilter, CodeSnippetWhereInput>
    parent?: XOR<ReviewNullableRelationFilter, ReviewWhereInput> | null
    replies?: ReviewListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrderInput | SortOrder
    userId?: SortOrder
    codeId?: SortOrder
    likes?: ReviewLikeOrderByRelationAggregateInput
    codeSnippet?: CodeSnippetOrderByWithRelationInput
    parent?: ReviewOrderByWithRelationInput
    replies?: ReviewOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    content?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    parentId?: IntNullableFilter<"Review"> | number | null
    userId?: StringFilter<"Review"> | string
    codeId?: IntFilter<"Review"> | number
    likes?: ReviewLikeListRelationFilter
    codeSnippet?: XOR<CodeSnippetRelationFilter, CodeSnippetWhereInput>
    parent?: XOR<ReviewNullableRelationFilter, ReviewWhereInput> | null
    replies?: ReviewListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrderInput | SortOrder
    userId?: SortOrder
    codeId?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    content?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    parentId?: IntNullableWithAggregatesFilter<"Review"> | number | null
    userId?: StringWithAggregatesFilter<"Review"> | string
    codeId?: IntWithAggregatesFilter<"Review"> | number
  }

  export type ReviewLikeWhereInput = {
    AND?: ReviewLikeWhereInput | ReviewLikeWhereInput[]
    OR?: ReviewLikeWhereInput[]
    NOT?: ReviewLikeWhereInput | ReviewLikeWhereInput[]
    userId?: StringFilter<"ReviewLike"> | string
    reviewId?: IntFilter<"ReviewLike"> | number
    review?: XOR<ReviewRelationFilter, ReviewWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ReviewLikeOrderByWithRelationInput = {
    userId?: SortOrder
    reviewId?: SortOrder
    review?: ReviewOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReviewLikeWhereUniqueInput = Prisma.AtLeast<{
    userId_reviewId?: ReviewLikeUserIdReviewIdCompoundUniqueInput
    AND?: ReviewLikeWhereInput | ReviewLikeWhereInput[]
    OR?: ReviewLikeWhereInput[]
    NOT?: ReviewLikeWhereInput | ReviewLikeWhereInput[]
    userId?: StringFilter<"ReviewLike"> | string
    reviewId?: IntFilter<"ReviewLike"> | number
    review?: XOR<ReviewRelationFilter, ReviewWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "userId_reviewId">

  export type ReviewLikeOrderByWithAggregationInput = {
    userId?: SortOrder
    reviewId?: SortOrder
    _count?: ReviewLikeCountOrderByAggregateInput
    _avg?: ReviewLikeAvgOrderByAggregateInput
    _max?: ReviewLikeMaxOrderByAggregateInput
    _min?: ReviewLikeMinOrderByAggregateInput
    _sum?: ReviewLikeSumOrderByAggregateInput
  }

  export type ReviewLikeScalarWhereWithAggregatesInput = {
    AND?: ReviewLikeScalarWhereWithAggregatesInput | ReviewLikeScalarWhereWithAggregatesInput[]
    OR?: ReviewLikeScalarWhereWithAggregatesInput[]
    NOT?: ReviewLikeScalarWhereWithAggregatesInput | ReviewLikeScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"ReviewLike"> | string
    reviewId?: IntWithAggregatesFilter<"ReviewLike"> | number
  }

  export type UserCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    password: string
    imageUrl?: string | null
    likeCount?: number
    nickname: string
    reviewCount?: number
    codeSnippets?: CodeSnippetCreateNestedManyWithoutUserInput
    reviewLikes?: ReviewLikeCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    grade?: GradeCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    password: string
    gradeId?: number | null
    imageUrl?: string | null
    likeCount?: number
    nickname: string
    reviewCount?: number
    codeSnippets?: CodeSnippetUncheckedCreateNestedManyWithoutUserInput
    reviewLikes?: ReviewLikeUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    reviewCount?: IntFieldUpdateOperationsInput | number
    codeSnippets?: CodeSnippetUpdateManyWithoutUserNestedInput
    reviewLikes?: ReviewLikeUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    grade?: GradeUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    gradeId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    reviewCount?: IntFieldUpdateOperationsInput | number
    codeSnippets?: CodeSnippetUncheckedUpdateManyWithoutUserNestedInput
    reviewLikes?: ReviewLikeUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    password: string
    gradeId?: number | null
    imageUrl?: string | null
    likeCount?: number
    nickname: string
    reviewCount?: number
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    reviewCount?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    gradeId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    reviewCount?: IntFieldUpdateOperationsInput | number
  }

  export type GradeCreateInput = {
    name: string
    users?: UserCreateNestedManyWithoutGradeInput
  }

  export type GradeUncheckedCreateInput = {
    id?: number
    name: string
    users?: UserUncheckedCreateNestedManyWithoutGradeInput
  }

  export type GradeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutGradeNestedInput
  }

  export type GradeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutGradeNestedInput
  }

  export type GradeCreateManyInput = {
    id?: number
    name: string
  }

  export type GradeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GradeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CodeSnippetCreateInput = {
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CodeSnippetCategoryCreateNestedManyWithoutCodeSnippetInput
    user: UserCreateNestedOneWithoutCodeSnippetsInput
    reviews?: ReviewCreateNestedManyWithoutCodeSnippetInput
  }

  export type CodeSnippetUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categories?: CodeSnippetCategoryUncheckedCreateNestedManyWithoutCodeSnippetInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutCodeSnippetInput
  }

  export type CodeSnippetUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CodeSnippetCategoryUpdateManyWithoutCodeSnippetNestedInput
    user?: UserUpdateOneRequiredWithoutCodeSnippetsNestedInput
    reviews?: ReviewUpdateManyWithoutCodeSnippetNestedInput
  }

  export type CodeSnippetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categories?: CodeSnippetCategoryUncheckedUpdateManyWithoutCodeSnippetNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutCodeSnippetNestedInput
  }

  export type CodeSnippetCreateManyInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type CodeSnippetUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeSnippetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    name: string
    codeSnippetCategories?: CodeSnippetCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    codeSnippetCategories?: CodeSnippetCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    codeSnippetCategories?: CodeSnippetCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    codeSnippetCategories?: CodeSnippetCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CodeSnippetCategoryCreateInput = {
    category: CategoryCreateNestedOneWithoutCodeSnippetCategoriesInput
    codeSnippet: CodeSnippetCreateNestedOneWithoutCategoriesInput
  }

  export type CodeSnippetCategoryUncheckedCreateInput = {
    codeId: number
    categoryId: number
  }

  export type CodeSnippetCategoryUpdateInput = {
    category?: CategoryUpdateOneRequiredWithoutCodeSnippetCategoriesNestedInput
    codeSnippet?: CodeSnippetUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CodeSnippetCategoryUncheckedUpdateInput = {
    codeId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type CodeSnippetCategoryCreateManyInput = {
    codeId: number
    categoryId: number
  }

  export type CodeSnippetCategoryUpdateManyMutationInput = {

  }

  export type CodeSnippetCategoryUncheckedUpdateManyInput = {
    codeId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: ReviewLikeCreateNestedManyWithoutReviewInput
    codeSnippet: CodeSnippetCreateNestedOneWithoutReviewsInput
    parent?: ReviewCreateNestedOneWithoutRepliesInput
    replies?: ReviewCreateNestedManyWithoutParentInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: number | null
    userId: string
    codeId: number
    likes?: ReviewLikeUncheckedCreateNestedManyWithoutReviewInput
    replies?: ReviewUncheckedCreateNestedManyWithoutParentInput
  }

  export type ReviewUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: ReviewLikeUpdateManyWithoutReviewNestedInput
    codeSnippet?: CodeSnippetUpdateOneRequiredWithoutReviewsNestedInput
    parent?: ReviewUpdateOneWithoutRepliesNestedInput
    replies?: ReviewUpdateManyWithoutParentNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    codeId?: IntFieldUpdateOperationsInput | number
    likes?: ReviewLikeUncheckedUpdateManyWithoutReviewNestedInput
    replies?: ReviewUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ReviewCreateManyInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: number | null
    userId: string
    codeId: number
  }

  export type ReviewUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    codeId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewLikeCreateInput = {
    review: ReviewCreateNestedOneWithoutLikesInput
    user: UserCreateNestedOneWithoutReviewLikesInput
  }

  export type ReviewLikeUncheckedCreateInput = {
    userId: string
    reviewId: number
  }

  export type ReviewLikeUpdateInput = {
    review?: ReviewUpdateOneRequiredWithoutLikesNestedInput
    user?: UserUpdateOneRequiredWithoutReviewLikesNestedInput
  }

  export type ReviewLikeUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    reviewId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewLikeCreateManyInput = {
    userId: string
    reviewId: number
  }

  export type ReviewLikeUpdateManyMutationInput = {

  }

  export type ReviewLikeUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    reviewId?: IntFieldUpdateOperationsInput | number
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type CodeSnippetListRelationFilter = {
    every?: CodeSnippetWhereInput
    some?: CodeSnippetWhereInput
    none?: CodeSnippetWhereInput
  }

  export type ReviewLikeListRelationFilter = {
    every?: ReviewLikeWhereInput
    some?: ReviewLikeWhereInput
    none?: ReviewLikeWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type GradeNullableRelationFilter = {
    is?: GradeWhereInput | null
    isNot?: GradeWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CodeSnippetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    password?: SortOrder
    gradeId?: SortOrder
    imageUrl?: SortOrder
    likeCount?: SortOrder
    nickname?: SortOrder
    reviewCount?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    gradeId?: SortOrder
    likeCount?: SortOrder
    reviewCount?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    password?: SortOrder
    gradeId?: SortOrder
    imageUrl?: SortOrder
    likeCount?: SortOrder
    nickname?: SortOrder
    reviewCount?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    password?: SortOrder
    gradeId?: SortOrder
    imageUrl?: SortOrder
    likeCount?: SortOrder
    nickname?: SortOrder
    reviewCount?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    gradeId?: SortOrder
    likeCount?: SortOrder
    reviewCount?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GradeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GradeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GradeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GradeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GradeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CodeSnippetCategoryListRelationFilter = {
    every?: CodeSnippetCategoryWhereInput
    some?: CodeSnippetCategoryWhereInput
    none?: CodeSnippetCategoryWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CodeSnippetCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CodeSnippetCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CodeSnippetAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CodeSnippetMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CodeSnippetMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CodeSnippetSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type CodeSnippetRelationFilter = {
    is?: CodeSnippetWhereInput
    isNot?: CodeSnippetWhereInput
  }

  export type CodeSnippetCategoryCodeIdCategoryIdCompoundUniqueInput = {
    codeId: number
    categoryId: number
  }

  export type CodeSnippetCategoryCountOrderByAggregateInput = {
    codeId?: SortOrder
    categoryId?: SortOrder
  }

  export type CodeSnippetCategoryAvgOrderByAggregateInput = {
    codeId?: SortOrder
    categoryId?: SortOrder
  }

  export type CodeSnippetCategoryMaxOrderByAggregateInput = {
    codeId?: SortOrder
    categoryId?: SortOrder
  }

  export type CodeSnippetCategoryMinOrderByAggregateInput = {
    codeId?: SortOrder
    categoryId?: SortOrder
  }

  export type CodeSnippetCategorySumOrderByAggregateInput = {
    codeId?: SortOrder
    categoryId?: SortOrder
  }

  export type ReviewNullableRelationFilter = {
    is?: ReviewWhereInput | null
    isNot?: ReviewWhereInput | null
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrder
    userId?: SortOrder
    codeId?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    codeId?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrder
    userId?: SortOrder
    codeId?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrder
    userId?: SortOrder
    codeId?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    codeId?: SortOrder
  }

  export type ReviewRelationFilter = {
    is?: ReviewWhereInput
    isNot?: ReviewWhereInput
  }

  export type ReviewLikeUserIdReviewIdCompoundUniqueInput = {
    userId: string
    reviewId: number
  }

  export type ReviewLikeCountOrderByAggregateInput = {
    userId?: SortOrder
    reviewId?: SortOrder
  }

  export type ReviewLikeAvgOrderByAggregateInput = {
    reviewId?: SortOrder
  }

  export type ReviewLikeMaxOrderByAggregateInput = {
    userId?: SortOrder
    reviewId?: SortOrder
  }

  export type ReviewLikeMinOrderByAggregateInput = {
    userId?: SortOrder
    reviewId?: SortOrder
  }

  export type ReviewLikeSumOrderByAggregateInput = {
    reviewId?: SortOrder
  }

  export type CodeSnippetCreateNestedManyWithoutUserInput = {
    create?: XOR<CodeSnippetCreateWithoutUserInput, CodeSnippetUncheckedCreateWithoutUserInput> | CodeSnippetCreateWithoutUserInput[] | CodeSnippetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CodeSnippetCreateOrConnectWithoutUserInput | CodeSnippetCreateOrConnectWithoutUserInput[]
    createMany?: CodeSnippetCreateManyUserInputEnvelope
    connect?: CodeSnippetWhereUniqueInput | CodeSnippetWhereUniqueInput[]
  }

  export type ReviewLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewLikeCreateWithoutUserInput, ReviewLikeUncheckedCreateWithoutUserInput> | ReviewLikeCreateWithoutUserInput[] | ReviewLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewLikeCreateOrConnectWithoutUserInput | ReviewLikeCreateOrConnectWithoutUserInput[]
    createMany?: ReviewLikeCreateManyUserInputEnvelope
    connect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type GradeCreateNestedOneWithoutUsersInput = {
    create?: XOR<GradeCreateWithoutUsersInput, GradeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GradeCreateOrConnectWithoutUsersInput
    connect?: GradeWhereUniqueInput
  }

  export type CodeSnippetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CodeSnippetCreateWithoutUserInput, CodeSnippetUncheckedCreateWithoutUserInput> | CodeSnippetCreateWithoutUserInput[] | CodeSnippetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CodeSnippetCreateOrConnectWithoutUserInput | CodeSnippetCreateOrConnectWithoutUserInput[]
    createMany?: CodeSnippetCreateManyUserInputEnvelope
    connect?: CodeSnippetWhereUniqueInput | CodeSnippetWhereUniqueInput[]
  }

  export type ReviewLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewLikeCreateWithoutUserInput, ReviewLikeUncheckedCreateWithoutUserInput> | ReviewLikeCreateWithoutUserInput[] | ReviewLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewLikeCreateOrConnectWithoutUserInput | ReviewLikeCreateOrConnectWithoutUserInput[]
    createMany?: ReviewLikeCreateManyUserInputEnvelope
    connect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CodeSnippetUpdateManyWithoutUserNestedInput = {
    create?: XOR<CodeSnippetCreateWithoutUserInput, CodeSnippetUncheckedCreateWithoutUserInput> | CodeSnippetCreateWithoutUserInput[] | CodeSnippetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CodeSnippetCreateOrConnectWithoutUserInput | CodeSnippetCreateOrConnectWithoutUserInput[]
    upsert?: CodeSnippetUpsertWithWhereUniqueWithoutUserInput | CodeSnippetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CodeSnippetCreateManyUserInputEnvelope
    set?: CodeSnippetWhereUniqueInput | CodeSnippetWhereUniqueInput[]
    disconnect?: CodeSnippetWhereUniqueInput | CodeSnippetWhereUniqueInput[]
    delete?: CodeSnippetWhereUniqueInput | CodeSnippetWhereUniqueInput[]
    connect?: CodeSnippetWhereUniqueInput | CodeSnippetWhereUniqueInput[]
    update?: CodeSnippetUpdateWithWhereUniqueWithoutUserInput | CodeSnippetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CodeSnippetUpdateManyWithWhereWithoutUserInput | CodeSnippetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CodeSnippetScalarWhereInput | CodeSnippetScalarWhereInput[]
  }

  export type ReviewLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewLikeCreateWithoutUserInput, ReviewLikeUncheckedCreateWithoutUserInput> | ReviewLikeCreateWithoutUserInput[] | ReviewLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewLikeCreateOrConnectWithoutUserInput | ReviewLikeCreateOrConnectWithoutUserInput[]
    upsert?: ReviewLikeUpsertWithWhereUniqueWithoutUserInput | ReviewLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewLikeCreateManyUserInputEnvelope
    set?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    disconnect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    delete?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    connect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    update?: ReviewLikeUpdateWithWhereUniqueWithoutUserInput | ReviewLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewLikeUpdateManyWithWhereWithoutUserInput | ReviewLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewLikeScalarWhereInput | ReviewLikeScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type GradeUpdateOneWithoutUsersNestedInput = {
    create?: XOR<GradeCreateWithoutUsersInput, GradeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GradeCreateOrConnectWithoutUsersInput
    upsert?: GradeUpsertWithoutUsersInput
    disconnect?: GradeWhereInput | boolean
    delete?: GradeWhereInput | boolean
    connect?: GradeWhereUniqueInput
    update?: XOR<XOR<GradeUpdateToOneWithWhereWithoutUsersInput, GradeUpdateWithoutUsersInput>, GradeUncheckedUpdateWithoutUsersInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CodeSnippetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CodeSnippetCreateWithoutUserInput, CodeSnippetUncheckedCreateWithoutUserInput> | CodeSnippetCreateWithoutUserInput[] | CodeSnippetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CodeSnippetCreateOrConnectWithoutUserInput | CodeSnippetCreateOrConnectWithoutUserInput[]
    upsert?: CodeSnippetUpsertWithWhereUniqueWithoutUserInput | CodeSnippetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CodeSnippetCreateManyUserInputEnvelope
    set?: CodeSnippetWhereUniqueInput | CodeSnippetWhereUniqueInput[]
    disconnect?: CodeSnippetWhereUniqueInput | CodeSnippetWhereUniqueInput[]
    delete?: CodeSnippetWhereUniqueInput | CodeSnippetWhereUniqueInput[]
    connect?: CodeSnippetWhereUniqueInput | CodeSnippetWhereUniqueInput[]
    update?: CodeSnippetUpdateWithWhereUniqueWithoutUserInput | CodeSnippetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CodeSnippetUpdateManyWithWhereWithoutUserInput | CodeSnippetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CodeSnippetScalarWhereInput | CodeSnippetScalarWhereInput[]
  }

  export type ReviewLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewLikeCreateWithoutUserInput, ReviewLikeUncheckedCreateWithoutUserInput> | ReviewLikeCreateWithoutUserInput[] | ReviewLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewLikeCreateOrConnectWithoutUserInput | ReviewLikeCreateOrConnectWithoutUserInput[]
    upsert?: ReviewLikeUpsertWithWhereUniqueWithoutUserInput | ReviewLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewLikeCreateManyUserInputEnvelope
    set?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    disconnect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    delete?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    connect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    update?: ReviewLikeUpdateWithWhereUniqueWithoutUserInput | ReviewLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewLikeUpdateManyWithWhereWithoutUserInput | ReviewLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewLikeScalarWhereInput | ReviewLikeScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutGradeInput = {
    create?: XOR<UserCreateWithoutGradeInput, UserUncheckedCreateWithoutGradeInput> | UserCreateWithoutGradeInput[] | UserUncheckedCreateWithoutGradeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGradeInput | UserCreateOrConnectWithoutGradeInput[]
    createMany?: UserCreateManyGradeInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutGradeInput = {
    create?: XOR<UserCreateWithoutGradeInput, UserUncheckedCreateWithoutGradeInput> | UserCreateWithoutGradeInput[] | UserUncheckedCreateWithoutGradeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGradeInput | UserCreateOrConnectWithoutGradeInput[]
    createMany?: UserCreateManyGradeInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutGradeNestedInput = {
    create?: XOR<UserCreateWithoutGradeInput, UserUncheckedCreateWithoutGradeInput> | UserCreateWithoutGradeInput[] | UserUncheckedCreateWithoutGradeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGradeInput | UserCreateOrConnectWithoutGradeInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGradeInput | UserUpsertWithWhereUniqueWithoutGradeInput[]
    createMany?: UserCreateManyGradeInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGradeInput | UserUpdateWithWhereUniqueWithoutGradeInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGradeInput | UserUpdateManyWithWhereWithoutGradeInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutGradeNestedInput = {
    create?: XOR<UserCreateWithoutGradeInput, UserUncheckedCreateWithoutGradeInput> | UserCreateWithoutGradeInput[] | UserUncheckedCreateWithoutGradeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGradeInput | UserCreateOrConnectWithoutGradeInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGradeInput | UserUpsertWithWhereUniqueWithoutGradeInput[]
    createMany?: UserCreateManyGradeInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGradeInput | UserUpdateWithWhereUniqueWithoutGradeInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGradeInput | UserUpdateManyWithWhereWithoutGradeInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CodeSnippetCategoryCreateNestedManyWithoutCodeSnippetInput = {
    create?: XOR<CodeSnippetCategoryCreateWithoutCodeSnippetInput, CodeSnippetCategoryUncheckedCreateWithoutCodeSnippetInput> | CodeSnippetCategoryCreateWithoutCodeSnippetInput[] | CodeSnippetCategoryUncheckedCreateWithoutCodeSnippetInput[]
    connectOrCreate?: CodeSnippetCategoryCreateOrConnectWithoutCodeSnippetInput | CodeSnippetCategoryCreateOrConnectWithoutCodeSnippetInput[]
    createMany?: CodeSnippetCategoryCreateManyCodeSnippetInputEnvelope
    connect?: CodeSnippetCategoryWhereUniqueInput | CodeSnippetCategoryWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCodeSnippetsInput = {
    create?: XOR<UserCreateWithoutCodeSnippetsInput, UserUncheckedCreateWithoutCodeSnippetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCodeSnippetsInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutCodeSnippetInput = {
    create?: XOR<ReviewCreateWithoutCodeSnippetInput, ReviewUncheckedCreateWithoutCodeSnippetInput> | ReviewCreateWithoutCodeSnippetInput[] | ReviewUncheckedCreateWithoutCodeSnippetInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCodeSnippetInput | ReviewCreateOrConnectWithoutCodeSnippetInput[]
    createMany?: ReviewCreateManyCodeSnippetInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type CodeSnippetCategoryUncheckedCreateNestedManyWithoutCodeSnippetInput = {
    create?: XOR<CodeSnippetCategoryCreateWithoutCodeSnippetInput, CodeSnippetCategoryUncheckedCreateWithoutCodeSnippetInput> | CodeSnippetCategoryCreateWithoutCodeSnippetInput[] | CodeSnippetCategoryUncheckedCreateWithoutCodeSnippetInput[]
    connectOrCreate?: CodeSnippetCategoryCreateOrConnectWithoutCodeSnippetInput | CodeSnippetCategoryCreateOrConnectWithoutCodeSnippetInput[]
    createMany?: CodeSnippetCategoryCreateManyCodeSnippetInputEnvelope
    connect?: CodeSnippetCategoryWhereUniqueInput | CodeSnippetCategoryWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutCodeSnippetInput = {
    create?: XOR<ReviewCreateWithoutCodeSnippetInput, ReviewUncheckedCreateWithoutCodeSnippetInput> | ReviewCreateWithoutCodeSnippetInput[] | ReviewUncheckedCreateWithoutCodeSnippetInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCodeSnippetInput | ReviewCreateOrConnectWithoutCodeSnippetInput[]
    createMany?: ReviewCreateManyCodeSnippetInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type CodeSnippetCategoryUpdateManyWithoutCodeSnippetNestedInput = {
    create?: XOR<CodeSnippetCategoryCreateWithoutCodeSnippetInput, CodeSnippetCategoryUncheckedCreateWithoutCodeSnippetInput> | CodeSnippetCategoryCreateWithoutCodeSnippetInput[] | CodeSnippetCategoryUncheckedCreateWithoutCodeSnippetInput[]
    connectOrCreate?: CodeSnippetCategoryCreateOrConnectWithoutCodeSnippetInput | CodeSnippetCategoryCreateOrConnectWithoutCodeSnippetInput[]
    upsert?: CodeSnippetCategoryUpsertWithWhereUniqueWithoutCodeSnippetInput | CodeSnippetCategoryUpsertWithWhereUniqueWithoutCodeSnippetInput[]
    createMany?: CodeSnippetCategoryCreateManyCodeSnippetInputEnvelope
    set?: CodeSnippetCategoryWhereUniqueInput | CodeSnippetCategoryWhereUniqueInput[]
    disconnect?: CodeSnippetCategoryWhereUniqueInput | CodeSnippetCategoryWhereUniqueInput[]
    delete?: CodeSnippetCategoryWhereUniqueInput | CodeSnippetCategoryWhereUniqueInput[]
    connect?: CodeSnippetCategoryWhereUniqueInput | CodeSnippetCategoryWhereUniqueInput[]
    update?: CodeSnippetCategoryUpdateWithWhereUniqueWithoutCodeSnippetInput | CodeSnippetCategoryUpdateWithWhereUniqueWithoutCodeSnippetInput[]
    updateMany?: CodeSnippetCategoryUpdateManyWithWhereWithoutCodeSnippetInput | CodeSnippetCategoryUpdateManyWithWhereWithoutCodeSnippetInput[]
    deleteMany?: CodeSnippetCategoryScalarWhereInput | CodeSnippetCategoryScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCodeSnippetsNestedInput = {
    create?: XOR<UserCreateWithoutCodeSnippetsInput, UserUncheckedCreateWithoutCodeSnippetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCodeSnippetsInput
    upsert?: UserUpsertWithoutCodeSnippetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCodeSnippetsInput, UserUpdateWithoutCodeSnippetsInput>, UserUncheckedUpdateWithoutCodeSnippetsInput>
  }

  export type ReviewUpdateManyWithoutCodeSnippetNestedInput = {
    create?: XOR<ReviewCreateWithoutCodeSnippetInput, ReviewUncheckedCreateWithoutCodeSnippetInput> | ReviewCreateWithoutCodeSnippetInput[] | ReviewUncheckedCreateWithoutCodeSnippetInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCodeSnippetInput | ReviewCreateOrConnectWithoutCodeSnippetInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutCodeSnippetInput | ReviewUpsertWithWhereUniqueWithoutCodeSnippetInput[]
    createMany?: ReviewCreateManyCodeSnippetInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutCodeSnippetInput | ReviewUpdateWithWhereUniqueWithoutCodeSnippetInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutCodeSnippetInput | ReviewUpdateManyWithWhereWithoutCodeSnippetInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type CodeSnippetCategoryUncheckedUpdateManyWithoutCodeSnippetNestedInput = {
    create?: XOR<CodeSnippetCategoryCreateWithoutCodeSnippetInput, CodeSnippetCategoryUncheckedCreateWithoutCodeSnippetInput> | CodeSnippetCategoryCreateWithoutCodeSnippetInput[] | CodeSnippetCategoryUncheckedCreateWithoutCodeSnippetInput[]
    connectOrCreate?: CodeSnippetCategoryCreateOrConnectWithoutCodeSnippetInput | CodeSnippetCategoryCreateOrConnectWithoutCodeSnippetInput[]
    upsert?: CodeSnippetCategoryUpsertWithWhereUniqueWithoutCodeSnippetInput | CodeSnippetCategoryUpsertWithWhereUniqueWithoutCodeSnippetInput[]
    createMany?: CodeSnippetCategoryCreateManyCodeSnippetInputEnvelope
    set?: CodeSnippetCategoryWhereUniqueInput | CodeSnippetCategoryWhereUniqueInput[]
    disconnect?: CodeSnippetCategoryWhereUniqueInput | CodeSnippetCategoryWhereUniqueInput[]
    delete?: CodeSnippetCategoryWhereUniqueInput | CodeSnippetCategoryWhereUniqueInput[]
    connect?: CodeSnippetCategoryWhereUniqueInput | CodeSnippetCategoryWhereUniqueInput[]
    update?: CodeSnippetCategoryUpdateWithWhereUniqueWithoutCodeSnippetInput | CodeSnippetCategoryUpdateWithWhereUniqueWithoutCodeSnippetInput[]
    updateMany?: CodeSnippetCategoryUpdateManyWithWhereWithoutCodeSnippetInput | CodeSnippetCategoryUpdateManyWithWhereWithoutCodeSnippetInput[]
    deleteMany?: CodeSnippetCategoryScalarWhereInput | CodeSnippetCategoryScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutCodeSnippetNestedInput = {
    create?: XOR<ReviewCreateWithoutCodeSnippetInput, ReviewUncheckedCreateWithoutCodeSnippetInput> | ReviewCreateWithoutCodeSnippetInput[] | ReviewUncheckedCreateWithoutCodeSnippetInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCodeSnippetInput | ReviewCreateOrConnectWithoutCodeSnippetInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutCodeSnippetInput | ReviewUpsertWithWhereUniqueWithoutCodeSnippetInput[]
    createMany?: ReviewCreateManyCodeSnippetInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutCodeSnippetInput | ReviewUpdateWithWhereUniqueWithoutCodeSnippetInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutCodeSnippetInput | ReviewUpdateManyWithWhereWithoutCodeSnippetInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type CodeSnippetCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CodeSnippetCategoryCreateWithoutCategoryInput, CodeSnippetCategoryUncheckedCreateWithoutCategoryInput> | CodeSnippetCategoryCreateWithoutCategoryInput[] | CodeSnippetCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CodeSnippetCategoryCreateOrConnectWithoutCategoryInput | CodeSnippetCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: CodeSnippetCategoryCreateManyCategoryInputEnvelope
    connect?: CodeSnippetCategoryWhereUniqueInput | CodeSnippetCategoryWhereUniqueInput[]
  }

  export type CodeSnippetCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CodeSnippetCategoryCreateWithoutCategoryInput, CodeSnippetCategoryUncheckedCreateWithoutCategoryInput> | CodeSnippetCategoryCreateWithoutCategoryInput[] | CodeSnippetCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CodeSnippetCategoryCreateOrConnectWithoutCategoryInput | CodeSnippetCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: CodeSnippetCategoryCreateManyCategoryInputEnvelope
    connect?: CodeSnippetCategoryWhereUniqueInput | CodeSnippetCategoryWhereUniqueInput[]
  }

  export type CodeSnippetCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CodeSnippetCategoryCreateWithoutCategoryInput, CodeSnippetCategoryUncheckedCreateWithoutCategoryInput> | CodeSnippetCategoryCreateWithoutCategoryInput[] | CodeSnippetCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CodeSnippetCategoryCreateOrConnectWithoutCategoryInput | CodeSnippetCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: CodeSnippetCategoryUpsertWithWhereUniqueWithoutCategoryInput | CodeSnippetCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CodeSnippetCategoryCreateManyCategoryInputEnvelope
    set?: CodeSnippetCategoryWhereUniqueInput | CodeSnippetCategoryWhereUniqueInput[]
    disconnect?: CodeSnippetCategoryWhereUniqueInput | CodeSnippetCategoryWhereUniqueInput[]
    delete?: CodeSnippetCategoryWhereUniqueInput | CodeSnippetCategoryWhereUniqueInput[]
    connect?: CodeSnippetCategoryWhereUniqueInput | CodeSnippetCategoryWhereUniqueInput[]
    update?: CodeSnippetCategoryUpdateWithWhereUniqueWithoutCategoryInput | CodeSnippetCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CodeSnippetCategoryUpdateManyWithWhereWithoutCategoryInput | CodeSnippetCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CodeSnippetCategoryScalarWhereInput | CodeSnippetCategoryScalarWhereInput[]
  }

  export type CodeSnippetCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CodeSnippetCategoryCreateWithoutCategoryInput, CodeSnippetCategoryUncheckedCreateWithoutCategoryInput> | CodeSnippetCategoryCreateWithoutCategoryInput[] | CodeSnippetCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CodeSnippetCategoryCreateOrConnectWithoutCategoryInput | CodeSnippetCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: CodeSnippetCategoryUpsertWithWhereUniqueWithoutCategoryInput | CodeSnippetCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CodeSnippetCategoryCreateManyCategoryInputEnvelope
    set?: CodeSnippetCategoryWhereUniqueInput | CodeSnippetCategoryWhereUniqueInput[]
    disconnect?: CodeSnippetCategoryWhereUniqueInput | CodeSnippetCategoryWhereUniqueInput[]
    delete?: CodeSnippetCategoryWhereUniqueInput | CodeSnippetCategoryWhereUniqueInput[]
    connect?: CodeSnippetCategoryWhereUniqueInput | CodeSnippetCategoryWhereUniqueInput[]
    update?: CodeSnippetCategoryUpdateWithWhereUniqueWithoutCategoryInput | CodeSnippetCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CodeSnippetCategoryUpdateManyWithWhereWithoutCategoryInput | CodeSnippetCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CodeSnippetCategoryScalarWhereInput | CodeSnippetCategoryScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutCodeSnippetCategoriesInput = {
    create?: XOR<CategoryCreateWithoutCodeSnippetCategoriesInput, CategoryUncheckedCreateWithoutCodeSnippetCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCodeSnippetCategoriesInput
    connect?: CategoryWhereUniqueInput
  }

  export type CodeSnippetCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<CodeSnippetCreateWithoutCategoriesInput, CodeSnippetUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: CodeSnippetCreateOrConnectWithoutCategoriesInput
    connect?: CodeSnippetWhereUniqueInput
  }

  export type CategoryUpdateOneRequiredWithoutCodeSnippetCategoriesNestedInput = {
    create?: XOR<CategoryCreateWithoutCodeSnippetCategoriesInput, CategoryUncheckedCreateWithoutCodeSnippetCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCodeSnippetCategoriesInput
    upsert?: CategoryUpsertWithoutCodeSnippetCategoriesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutCodeSnippetCategoriesInput, CategoryUpdateWithoutCodeSnippetCategoriesInput>, CategoryUncheckedUpdateWithoutCodeSnippetCategoriesInput>
  }

  export type CodeSnippetUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<CodeSnippetCreateWithoutCategoriesInput, CodeSnippetUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: CodeSnippetCreateOrConnectWithoutCategoriesInput
    upsert?: CodeSnippetUpsertWithoutCategoriesInput
    connect?: CodeSnippetWhereUniqueInput
    update?: XOR<XOR<CodeSnippetUpdateToOneWithWhereWithoutCategoriesInput, CodeSnippetUpdateWithoutCategoriesInput>, CodeSnippetUncheckedUpdateWithoutCategoriesInput>
  }

  export type ReviewLikeCreateNestedManyWithoutReviewInput = {
    create?: XOR<ReviewLikeCreateWithoutReviewInput, ReviewLikeUncheckedCreateWithoutReviewInput> | ReviewLikeCreateWithoutReviewInput[] | ReviewLikeUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewLikeCreateOrConnectWithoutReviewInput | ReviewLikeCreateOrConnectWithoutReviewInput[]
    createMany?: ReviewLikeCreateManyReviewInputEnvelope
    connect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
  }

  export type CodeSnippetCreateNestedOneWithoutReviewsInput = {
    create?: XOR<CodeSnippetCreateWithoutReviewsInput, CodeSnippetUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: CodeSnippetCreateOrConnectWithoutReviewsInput
    connect?: CodeSnippetWhereUniqueInput
  }

  export type ReviewCreateNestedOneWithoutRepliesInput = {
    create?: XOR<ReviewCreateWithoutRepliesInput, ReviewUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutRepliesInput
    connect?: ReviewWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutParentInput = {
    create?: XOR<ReviewCreateWithoutParentInput, ReviewUncheckedCreateWithoutParentInput> | ReviewCreateWithoutParentInput[] | ReviewUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutParentInput | ReviewCreateOrConnectWithoutParentInput[]
    createMany?: ReviewCreateManyParentInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewLikeUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<ReviewLikeCreateWithoutReviewInput, ReviewLikeUncheckedCreateWithoutReviewInput> | ReviewLikeCreateWithoutReviewInput[] | ReviewLikeUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewLikeCreateOrConnectWithoutReviewInput | ReviewLikeCreateOrConnectWithoutReviewInput[]
    createMany?: ReviewLikeCreateManyReviewInputEnvelope
    connect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<ReviewCreateWithoutParentInput, ReviewUncheckedCreateWithoutParentInput> | ReviewCreateWithoutParentInput[] | ReviewUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutParentInput | ReviewCreateOrConnectWithoutParentInput[]
    createMany?: ReviewCreateManyParentInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewLikeUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ReviewLikeCreateWithoutReviewInput, ReviewLikeUncheckedCreateWithoutReviewInput> | ReviewLikeCreateWithoutReviewInput[] | ReviewLikeUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewLikeCreateOrConnectWithoutReviewInput | ReviewLikeCreateOrConnectWithoutReviewInput[]
    upsert?: ReviewLikeUpsertWithWhereUniqueWithoutReviewInput | ReviewLikeUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ReviewLikeCreateManyReviewInputEnvelope
    set?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    disconnect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    delete?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    connect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    update?: ReviewLikeUpdateWithWhereUniqueWithoutReviewInput | ReviewLikeUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ReviewLikeUpdateManyWithWhereWithoutReviewInput | ReviewLikeUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ReviewLikeScalarWhereInput | ReviewLikeScalarWhereInput[]
  }

  export type CodeSnippetUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<CodeSnippetCreateWithoutReviewsInput, CodeSnippetUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: CodeSnippetCreateOrConnectWithoutReviewsInput
    upsert?: CodeSnippetUpsertWithoutReviewsInput
    connect?: CodeSnippetWhereUniqueInput
    update?: XOR<XOR<CodeSnippetUpdateToOneWithWhereWithoutReviewsInput, CodeSnippetUpdateWithoutReviewsInput>, CodeSnippetUncheckedUpdateWithoutReviewsInput>
  }

  export type ReviewUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<ReviewCreateWithoutRepliesInput, ReviewUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutRepliesInput
    upsert?: ReviewUpsertWithoutRepliesInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutRepliesInput, ReviewUpdateWithoutRepliesInput>, ReviewUncheckedUpdateWithoutRepliesInput>
  }

  export type ReviewUpdateManyWithoutParentNestedInput = {
    create?: XOR<ReviewCreateWithoutParentInput, ReviewUncheckedCreateWithoutParentInput> | ReviewCreateWithoutParentInput[] | ReviewUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutParentInput | ReviewCreateOrConnectWithoutParentInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutParentInput | ReviewUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ReviewCreateManyParentInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutParentInput | ReviewUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutParentInput | ReviewUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type ReviewLikeUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ReviewLikeCreateWithoutReviewInput, ReviewLikeUncheckedCreateWithoutReviewInput> | ReviewLikeCreateWithoutReviewInput[] | ReviewLikeUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewLikeCreateOrConnectWithoutReviewInput | ReviewLikeCreateOrConnectWithoutReviewInput[]
    upsert?: ReviewLikeUpsertWithWhereUniqueWithoutReviewInput | ReviewLikeUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ReviewLikeCreateManyReviewInputEnvelope
    set?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    disconnect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    delete?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    connect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    update?: ReviewLikeUpdateWithWhereUniqueWithoutReviewInput | ReviewLikeUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ReviewLikeUpdateManyWithWhereWithoutReviewInput | ReviewLikeUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ReviewLikeScalarWhereInput | ReviewLikeScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<ReviewCreateWithoutParentInput, ReviewUncheckedCreateWithoutParentInput> | ReviewCreateWithoutParentInput[] | ReviewUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutParentInput | ReviewCreateOrConnectWithoutParentInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutParentInput | ReviewUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ReviewCreateManyParentInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutParentInput | ReviewUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutParentInput | ReviewUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewCreateNestedOneWithoutLikesInput = {
    create?: XOR<ReviewCreateWithoutLikesInput, ReviewUncheckedCreateWithoutLikesInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutLikesInput
    connect?: ReviewWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewLikesInput = {
    create?: XOR<UserCreateWithoutReviewLikesInput, UserUncheckedCreateWithoutReviewLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewLikesInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<ReviewCreateWithoutLikesInput, ReviewUncheckedCreateWithoutLikesInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutLikesInput
    upsert?: ReviewUpsertWithoutLikesInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutLikesInput, ReviewUpdateWithoutLikesInput>, ReviewUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateOneRequiredWithoutReviewLikesNestedInput = {
    create?: XOR<UserCreateWithoutReviewLikesInput, UserUncheckedCreateWithoutReviewLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewLikesInput
    upsert?: UserUpsertWithoutReviewLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewLikesInput, UserUpdateWithoutReviewLikesInput>, UserUncheckedUpdateWithoutReviewLikesInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type CodeSnippetCreateWithoutUserInput = {
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CodeSnippetCategoryCreateNestedManyWithoutCodeSnippetInput
    reviews?: ReviewCreateNestedManyWithoutCodeSnippetInput
  }

  export type CodeSnippetUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CodeSnippetCategoryUncheckedCreateNestedManyWithoutCodeSnippetInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutCodeSnippetInput
  }

  export type CodeSnippetCreateOrConnectWithoutUserInput = {
    where: CodeSnippetWhereUniqueInput
    create: XOR<CodeSnippetCreateWithoutUserInput, CodeSnippetUncheckedCreateWithoutUserInput>
  }

  export type CodeSnippetCreateManyUserInputEnvelope = {
    data: CodeSnippetCreateManyUserInput | CodeSnippetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewLikeCreateWithoutUserInput = {
    review: ReviewCreateNestedOneWithoutLikesInput
  }

  export type ReviewLikeUncheckedCreateWithoutUserInput = {
    reviewId: number
  }

  export type ReviewLikeCreateOrConnectWithoutUserInput = {
    where: ReviewLikeWhereUniqueInput
    create: XOR<ReviewLikeCreateWithoutUserInput, ReviewLikeUncheckedCreateWithoutUserInput>
  }

  export type ReviewLikeCreateManyUserInputEnvelope = {
    data: ReviewLikeCreateManyUserInput | ReviewLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: ReviewLikeCreateNestedManyWithoutReviewInput
    codeSnippet: CodeSnippetCreateNestedOneWithoutReviewsInput
    parent?: ReviewCreateNestedOneWithoutRepliesInput
    replies?: ReviewCreateNestedManyWithoutParentInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: number | null
    codeId: number
    likes?: ReviewLikeUncheckedCreateNestedManyWithoutReviewInput
    replies?: ReviewUncheckedCreateNestedManyWithoutParentInput
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GradeCreateWithoutUsersInput = {
    name: string
  }

  export type GradeUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type GradeCreateOrConnectWithoutUsersInput = {
    where: GradeWhereUniqueInput
    create: XOR<GradeCreateWithoutUsersInput, GradeUncheckedCreateWithoutUsersInput>
  }

  export type CodeSnippetUpsertWithWhereUniqueWithoutUserInput = {
    where: CodeSnippetWhereUniqueInput
    update: XOR<CodeSnippetUpdateWithoutUserInput, CodeSnippetUncheckedUpdateWithoutUserInput>
    create: XOR<CodeSnippetCreateWithoutUserInput, CodeSnippetUncheckedCreateWithoutUserInput>
  }

  export type CodeSnippetUpdateWithWhereUniqueWithoutUserInput = {
    where: CodeSnippetWhereUniqueInput
    data: XOR<CodeSnippetUpdateWithoutUserInput, CodeSnippetUncheckedUpdateWithoutUserInput>
  }

  export type CodeSnippetUpdateManyWithWhereWithoutUserInput = {
    where: CodeSnippetScalarWhereInput
    data: XOR<CodeSnippetUpdateManyMutationInput, CodeSnippetUncheckedUpdateManyWithoutUserInput>
  }

  export type CodeSnippetScalarWhereInput = {
    AND?: CodeSnippetScalarWhereInput | CodeSnippetScalarWhereInput[]
    OR?: CodeSnippetScalarWhereInput[]
    NOT?: CodeSnippetScalarWhereInput | CodeSnippetScalarWhereInput[]
    id?: IntFilter<"CodeSnippet"> | number
    title?: StringFilter<"CodeSnippet"> | string
    content?: StringFilter<"CodeSnippet"> | string
    createdAt?: DateTimeFilter<"CodeSnippet"> | Date | string
    updatedAt?: DateTimeFilter<"CodeSnippet"> | Date | string
    userId?: StringFilter<"CodeSnippet"> | string
  }

  export type ReviewLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewLikeWhereUniqueInput
    update: XOR<ReviewLikeUpdateWithoutUserInput, ReviewLikeUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewLikeCreateWithoutUserInput, ReviewLikeUncheckedCreateWithoutUserInput>
  }

  export type ReviewLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewLikeWhereUniqueInput
    data: XOR<ReviewLikeUpdateWithoutUserInput, ReviewLikeUncheckedUpdateWithoutUserInput>
  }

  export type ReviewLikeUpdateManyWithWhereWithoutUserInput = {
    where: ReviewLikeScalarWhereInput
    data: XOR<ReviewLikeUpdateManyMutationInput, ReviewLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewLikeScalarWhereInput = {
    AND?: ReviewLikeScalarWhereInput | ReviewLikeScalarWhereInput[]
    OR?: ReviewLikeScalarWhereInput[]
    NOT?: ReviewLikeScalarWhereInput | ReviewLikeScalarWhereInput[]
    userId?: StringFilter<"ReviewLike"> | string
    reviewId?: IntFilter<"ReviewLike"> | number
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    content?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    parentId?: IntNullableFilter<"Review"> | number | null
    userId?: StringFilter<"Review"> | string
    codeId?: IntFilter<"Review"> | number
  }

  export type GradeUpsertWithoutUsersInput = {
    update: XOR<GradeUpdateWithoutUsersInput, GradeUncheckedUpdateWithoutUsersInput>
    create: XOR<GradeCreateWithoutUsersInput, GradeUncheckedCreateWithoutUsersInput>
    where?: GradeWhereInput
  }

  export type GradeUpdateToOneWithWhereWithoutUsersInput = {
    where?: GradeWhereInput
    data: XOR<GradeUpdateWithoutUsersInput, GradeUncheckedUpdateWithoutUsersInput>
  }

  export type GradeUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GradeUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutGradeInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    password: string
    imageUrl?: string | null
    likeCount?: number
    nickname: string
    reviewCount?: number
    codeSnippets?: CodeSnippetCreateNestedManyWithoutUserInput
    reviewLikes?: ReviewLikeCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGradeInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    password: string
    imageUrl?: string | null
    likeCount?: number
    nickname: string
    reviewCount?: number
    codeSnippets?: CodeSnippetUncheckedCreateNestedManyWithoutUserInput
    reviewLikes?: ReviewLikeUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGradeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGradeInput, UserUncheckedCreateWithoutGradeInput>
  }

  export type UserCreateManyGradeInputEnvelope = {
    data: UserCreateManyGradeInput | UserCreateManyGradeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutGradeInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutGradeInput, UserUncheckedUpdateWithoutGradeInput>
    create: XOR<UserCreateWithoutGradeInput, UserUncheckedCreateWithoutGradeInput>
  }

  export type UserUpdateWithWhereUniqueWithoutGradeInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutGradeInput, UserUncheckedUpdateWithoutGradeInput>
  }

  export type UserUpdateManyWithWhereWithoutGradeInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutGradeInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringFilter<"User"> | string
    gradeId?: IntNullableFilter<"User"> | number | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    likeCount?: IntFilter<"User"> | number
    nickname?: StringFilter<"User"> | string
    reviewCount?: IntFilter<"User"> | number
  }

  export type CodeSnippetCategoryCreateWithoutCodeSnippetInput = {
    category: CategoryCreateNestedOneWithoutCodeSnippetCategoriesInput
  }

  export type CodeSnippetCategoryUncheckedCreateWithoutCodeSnippetInput = {
    categoryId: number
  }

  export type CodeSnippetCategoryCreateOrConnectWithoutCodeSnippetInput = {
    where: CodeSnippetCategoryWhereUniqueInput
    create: XOR<CodeSnippetCategoryCreateWithoutCodeSnippetInput, CodeSnippetCategoryUncheckedCreateWithoutCodeSnippetInput>
  }

  export type CodeSnippetCategoryCreateManyCodeSnippetInputEnvelope = {
    data: CodeSnippetCategoryCreateManyCodeSnippetInput | CodeSnippetCategoryCreateManyCodeSnippetInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCodeSnippetsInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    password: string
    imageUrl?: string | null
    likeCount?: number
    nickname: string
    reviewCount?: number
    reviewLikes?: ReviewLikeCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    grade?: GradeCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutCodeSnippetsInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    password: string
    gradeId?: number | null
    imageUrl?: string | null
    likeCount?: number
    nickname: string
    reviewCount?: number
    reviewLikes?: ReviewLikeUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCodeSnippetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCodeSnippetsInput, UserUncheckedCreateWithoutCodeSnippetsInput>
  }

  export type ReviewCreateWithoutCodeSnippetInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: ReviewLikeCreateNestedManyWithoutReviewInput
    parent?: ReviewCreateNestedOneWithoutRepliesInput
    replies?: ReviewCreateNestedManyWithoutParentInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutCodeSnippetInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: number | null
    userId: string
    likes?: ReviewLikeUncheckedCreateNestedManyWithoutReviewInput
    replies?: ReviewUncheckedCreateNestedManyWithoutParentInput
  }

  export type ReviewCreateOrConnectWithoutCodeSnippetInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutCodeSnippetInput, ReviewUncheckedCreateWithoutCodeSnippetInput>
  }

  export type ReviewCreateManyCodeSnippetInputEnvelope = {
    data: ReviewCreateManyCodeSnippetInput | ReviewCreateManyCodeSnippetInput[]
    skipDuplicates?: boolean
  }

  export type CodeSnippetCategoryUpsertWithWhereUniqueWithoutCodeSnippetInput = {
    where: CodeSnippetCategoryWhereUniqueInput
    update: XOR<CodeSnippetCategoryUpdateWithoutCodeSnippetInput, CodeSnippetCategoryUncheckedUpdateWithoutCodeSnippetInput>
    create: XOR<CodeSnippetCategoryCreateWithoutCodeSnippetInput, CodeSnippetCategoryUncheckedCreateWithoutCodeSnippetInput>
  }

  export type CodeSnippetCategoryUpdateWithWhereUniqueWithoutCodeSnippetInput = {
    where: CodeSnippetCategoryWhereUniqueInput
    data: XOR<CodeSnippetCategoryUpdateWithoutCodeSnippetInput, CodeSnippetCategoryUncheckedUpdateWithoutCodeSnippetInput>
  }

  export type CodeSnippetCategoryUpdateManyWithWhereWithoutCodeSnippetInput = {
    where: CodeSnippetCategoryScalarWhereInput
    data: XOR<CodeSnippetCategoryUpdateManyMutationInput, CodeSnippetCategoryUncheckedUpdateManyWithoutCodeSnippetInput>
  }

  export type CodeSnippetCategoryScalarWhereInput = {
    AND?: CodeSnippetCategoryScalarWhereInput | CodeSnippetCategoryScalarWhereInput[]
    OR?: CodeSnippetCategoryScalarWhereInput[]
    NOT?: CodeSnippetCategoryScalarWhereInput | CodeSnippetCategoryScalarWhereInput[]
    codeId?: IntFilter<"CodeSnippetCategory"> | number
    categoryId?: IntFilter<"CodeSnippetCategory"> | number
  }

  export type UserUpsertWithoutCodeSnippetsInput = {
    update: XOR<UserUpdateWithoutCodeSnippetsInput, UserUncheckedUpdateWithoutCodeSnippetsInput>
    create: XOR<UserCreateWithoutCodeSnippetsInput, UserUncheckedCreateWithoutCodeSnippetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCodeSnippetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCodeSnippetsInput, UserUncheckedUpdateWithoutCodeSnippetsInput>
  }

  export type UserUpdateWithoutCodeSnippetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    reviewCount?: IntFieldUpdateOperationsInput | number
    reviewLikes?: ReviewLikeUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    grade?: GradeUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutCodeSnippetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    gradeId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    reviewCount?: IntFieldUpdateOperationsInput | number
    reviewLikes?: ReviewLikeUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutCodeSnippetInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutCodeSnippetInput, ReviewUncheckedUpdateWithoutCodeSnippetInput>
    create: XOR<ReviewCreateWithoutCodeSnippetInput, ReviewUncheckedCreateWithoutCodeSnippetInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutCodeSnippetInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutCodeSnippetInput, ReviewUncheckedUpdateWithoutCodeSnippetInput>
  }

  export type ReviewUpdateManyWithWhereWithoutCodeSnippetInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutCodeSnippetInput>
  }

  export type CodeSnippetCategoryCreateWithoutCategoryInput = {
    codeSnippet: CodeSnippetCreateNestedOneWithoutCategoriesInput
  }

  export type CodeSnippetCategoryUncheckedCreateWithoutCategoryInput = {
    codeId: number
  }

  export type CodeSnippetCategoryCreateOrConnectWithoutCategoryInput = {
    where: CodeSnippetCategoryWhereUniqueInput
    create: XOR<CodeSnippetCategoryCreateWithoutCategoryInput, CodeSnippetCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type CodeSnippetCategoryCreateManyCategoryInputEnvelope = {
    data: CodeSnippetCategoryCreateManyCategoryInput | CodeSnippetCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CodeSnippetCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CodeSnippetCategoryWhereUniqueInput
    update: XOR<CodeSnippetCategoryUpdateWithoutCategoryInput, CodeSnippetCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<CodeSnippetCategoryCreateWithoutCategoryInput, CodeSnippetCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type CodeSnippetCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CodeSnippetCategoryWhereUniqueInput
    data: XOR<CodeSnippetCategoryUpdateWithoutCategoryInput, CodeSnippetCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type CodeSnippetCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: CodeSnippetCategoryScalarWhereInput
    data: XOR<CodeSnippetCategoryUpdateManyMutationInput, CodeSnippetCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryCreateWithoutCodeSnippetCategoriesInput = {
    name: string
  }

  export type CategoryUncheckedCreateWithoutCodeSnippetCategoriesInput = {
    id?: number
    name: string
  }

  export type CategoryCreateOrConnectWithoutCodeSnippetCategoriesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutCodeSnippetCategoriesInput, CategoryUncheckedCreateWithoutCodeSnippetCategoriesInput>
  }

  export type CodeSnippetCreateWithoutCategoriesInput = {
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCodeSnippetsInput
    reviews?: ReviewCreateNestedManyWithoutCodeSnippetInput
  }

  export type CodeSnippetUncheckedCreateWithoutCategoriesInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    reviews?: ReviewUncheckedCreateNestedManyWithoutCodeSnippetInput
  }

  export type CodeSnippetCreateOrConnectWithoutCategoriesInput = {
    where: CodeSnippetWhereUniqueInput
    create: XOR<CodeSnippetCreateWithoutCategoriesInput, CodeSnippetUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryUpsertWithoutCodeSnippetCategoriesInput = {
    update: XOR<CategoryUpdateWithoutCodeSnippetCategoriesInput, CategoryUncheckedUpdateWithoutCodeSnippetCategoriesInput>
    create: XOR<CategoryCreateWithoutCodeSnippetCategoriesInput, CategoryUncheckedCreateWithoutCodeSnippetCategoriesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutCodeSnippetCategoriesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutCodeSnippetCategoriesInput, CategoryUncheckedUpdateWithoutCodeSnippetCategoriesInput>
  }

  export type CategoryUpdateWithoutCodeSnippetCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutCodeSnippetCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CodeSnippetUpsertWithoutCategoriesInput = {
    update: XOR<CodeSnippetUpdateWithoutCategoriesInput, CodeSnippetUncheckedUpdateWithoutCategoriesInput>
    create: XOR<CodeSnippetCreateWithoutCategoriesInput, CodeSnippetUncheckedCreateWithoutCategoriesInput>
    where?: CodeSnippetWhereInput
  }

  export type CodeSnippetUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: CodeSnippetWhereInput
    data: XOR<CodeSnippetUpdateWithoutCategoriesInput, CodeSnippetUncheckedUpdateWithoutCategoriesInput>
  }

  export type CodeSnippetUpdateWithoutCategoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCodeSnippetsNestedInput
    reviews?: ReviewUpdateManyWithoutCodeSnippetNestedInput
  }

  export type CodeSnippetUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewUncheckedUpdateManyWithoutCodeSnippetNestedInput
  }

  export type ReviewLikeCreateWithoutReviewInput = {
    user: UserCreateNestedOneWithoutReviewLikesInput
  }

  export type ReviewLikeUncheckedCreateWithoutReviewInput = {
    userId: string
  }

  export type ReviewLikeCreateOrConnectWithoutReviewInput = {
    where: ReviewLikeWhereUniqueInput
    create: XOR<ReviewLikeCreateWithoutReviewInput, ReviewLikeUncheckedCreateWithoutReviewInput>
  }

  export type ReviewLikeCreateManyReviewInputEnvelope = {
    data: ReviewLikeCreateManyReviewInput | ReviewLikeCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type CodeSnippetCreateWithoutReviewsInput = {
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CodeSnippetCategoryCreateNestedManyWithoutCodeSnippetInput
    user: UserCreateNestedOneWithoutCodeSnippetsInput
  }

  export type CodeSnippetUncheckedCreateWithoutReviewsInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categories?: CodeSnippetCategoryUncheckedCreateNestedManyWithoutCodeSnippetInput
  }

  export type CodeSnippetCreateOrConnectWithoutReviewsInput = {
    where: CodeSnippetWhereUniqueInput
    create: XOR<CodeSnippetCreateWithoutReviewsInput, CodeSnippetUncheckedCreateWithoutReviewsInput>
  }

  export type ReviewCreateWithoutRepliesInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: ReviewLikeCreateNestedManyWithoutReviewInput
    codeSnippet: CodeSnippetCreateNestedOneWithoutReviewsInput
    parent?: ReviewCreateNestedOneWithoutRepliesInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutRepliesInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: number | null
    userId: string
    codeId: number
    likes?: ReviewLikeUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutRepliesInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutRepliesInput, ReviewUncheckedCreateWithoutRepliesInput>
  }

  export type ReviewCreateWithoutParentInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: ReviewLikeCreateNestedManyWithoutReviewInput
    codeSnippet: CodeSnippetCreateNestedOneWithoutReviewsInput
    replies?: ReviewCreateNestedManyWithoutParentInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutParentInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    codeId: number
    likes?: ReviewLikeUncheckedCreateNestedManyWithoutReviewInput
    replies?: ReviewUncheckedCreateNestedManyWithoutParentInput
  }

  export type ReviewCreateOrConnectWithoutParentInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutParentInput, ReviewUncheckedCreateWithoutParentInput>
  }

  export type ReviewCreateManyParentInputEnvelope = {
    data: ReviewCreateManyParentInput | ReviewCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    password: string
    imageUrl?: string | null
    likeCount?: number
    nickname: string
    reviewCount?: number
    codeSnippets?: CodeSnippetCreateNestedManyWithoutUserInput
    reviewLikes?: ReviewLikeCreateNestedManyWithoutUserInput
    grade?: GradeCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    password: string
    gradeId?: number | null
    imageUrl?: string | null
    likeCount?: number
    nickname: string
    reviewCount?: number
    codeSnippets?: CodeSnippetUncheckedCreateNestedManyWithoutUserInput
    reviewLikes?: ReviewLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type ReviewLikeUpsertWithWhereUniqueWithoutReviewInput = {
    where: ReviewLikeWhereUniqueInput
    update: XOR<ReviewLikeUpdateWithoutReviewInput, ReviewLikeUncheckedUpdateWithoutReviewInput>
    create: XOR<ReviewLikeCreateWithoutReviewInput, ReviewLikeUncheckedCreateWithoutReviewInput>
  }

  export type ReviewLikeUpdateWithWhereUniqueWithoutReviewInput = {
    where: ReviewLikeWhereUniqueInput
    data: XOR<ReviewLikeUpdateWithoutReviewInput, ReviewLikeUncheckedUpdateWithoutReviewInput>
  }

  export type ReviewLikeUpdateManyWithWhereWithoutReviewInput = {
    where: ReviewLikeScalarWhereInput
    data: XOR<ReviewLikeUpdateManyMutationInput, ReviewLikeUncheckedUpdateManyWithoutReviewInput>
  }

  export type CodeSnippetUpsertWithoutReviewsInput = {
    update: XOR<CodeSnippetUpdateWithoutReviewsInput, CodeSnippetUncheckedUpdateWithoutReviewsInput>
    create: XOR<CodeSnippetCreateWithoutReviewsInput, CodeSnippetUncheckedCreateWithoutReviewsInput>
    where?: CodeSnippetWhereInput
  }

  export type CodeSnippetUpdateToOneWithWhereWithoutReviewsInput = {
    where?: CodeSnippetWhereInput
    data: XOR<CodeSnippetUpdateWithoutReviewsInput, CodeSnippetUncheckedUpdateWithoutReviewsInput>
  }

  export type CodeSnippetUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CodeSnippetCategoryUpdateManyWithoutCodeSnippetNestedInput
    user?: UserUpdateOneRequiredWithoutCodeSnippetsNestedInput
  }

  export type CodeSnippetUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categories?: CodeSnippetCategoryUncheckedUpdateManyWithoutCodeSnippetNestedInput
  }

  export type ReviewUpsertWithoutRepliesInput = {
    update: XOR<ReviewUpdateWithoutRepliesInput, ReviewUncheckedUpdateWithoutRepliesInput>
    create: XOR<ReviewCreateWithoutRepliesInput, ReviewUncheckedCreateWithoutRepliesInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutRepliesInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutRepliesInput, ReviewUncheckedUpdateWithoutRepliesInput>
  }

  export type ReviewUpdateWithoutRepliesInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: ReviewLikeUpdateManyWithoutReviewNestedInput
    codeSnippet?: CodeSnippetUpdateOneRequiredWithoutReviewsNestedInput
    parent?: ReviewUpdateOneWithoutRepliesNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutRepliesInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    codeId?: IntFieldUpdateOperationsInput | number
    likes?: ReviewLikeUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutParentInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutParentInput, ReviewUncheckedUpdateWithoutParentInput>
    create: XOR<ReviewCreateWithoutParentInput, ReviewUncheckedCreateWithoutParentInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutParentInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutParentInput, ReviewUncheckedUpdateWithoutParentInput>
  }

  export type ReviewUpdateManyWithWhereWithoutParentInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutParentInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    reviewCount?: IntFieldUpdateOperationsInput | number
    codeSnippets?: CodeSnippetUpdateManyWithoutUserNestedInput
    reviewLikes?: ReviewLikeUpdateManyWithoutUserNestedInput
    grade?: GradeUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    gradeId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    reviewCount?: IntFieldUpdateOperationsInput | number
    codeSnippets?: CodeSnippetUncheckedUpdateManyWithoutUserNestedInput
    reviewLikes?: ReviewLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReviewCreateWithoutLikesInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    codeSnippet: CodeSnippetCreateNestedOneWithoutReviewsInput
    parent?: ReviewCreateNestedOneWithoutRepliesInput
    replies?: ReviewCreateNestedManyWithoutParentInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutLikesInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: number | null
    userId: string
    codeId: number
    replies?: ReviewUncheckedCreateNestedManyWithoutParentInput
  }

  export type ReviewCreateOrConnectWithoutLikesInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutLikesInput, ReviewUncheckedCreateWithoutLikesInput>
  }

  export type UserCreateWithoutReviewLikesInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    password: string
    imageUrl?: string | null
    likeCount?: number
    nickname: string
    reviewCount?: number
    codeSnippets?: CodeSnippetCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    grade?: GradeCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutReviewLikesInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    password: string
    gradeId?: number | null
    imageUrl?: string | null
    likeCount?: number
    nickname: string
    reviewCount?: number
    codeSnippets?: CodeSnippetUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewLikesInput, UserUncheckedCreateWithoutReviewLikesInput>
  }

  export type ReviewUpsertWithoutLikesInput = {
    update: XOR<ReviewUpdateWithoutLikesInput, ReviewUncheckedUpdateWithoutLikesInput>
    create: XOR<ReviewCreateWithoutLikesInput, ReviewUncheckedCreateWithoutLikesInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutLikesInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutLikesInput, ReviewUncheckedUpdateWithoutLikesInput>
  }

  export type ReviewUpdateWithoutLikesInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeSnippet?: CodeSnippetUpdateOneRequiredWithoutReviewsNestedInput
    parent?: ReviewUpdateOneWithoutRepliesNestedInput
    replies?: ReviewUpdateManyWithoutParentNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    codeId?: IntFieldUpdateOperationsInput | number
    replies?: ReviewUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UserUpsertWithoutReviewLikesInput = {
    update: XOR<UserUpdateWithoutReviewLikesInput, UserUncheckedUpdateWithoutReviewLikesInput>
    create: XOR<UserCreateWithoutReviewLikesInput, UserUncheckedCreateWithoutReviewLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewLikesInput, UserUncheckedUpdateWithoutReviewLikesInput>
  }

  export type UserUpdateWithoutReviewLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    reviewCount?: IntFieldUpdateOperationsInput | number
    codeSnippets?: CodeSnippetUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    grade?: GradeUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    gradeId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    reviewCount?: IntFieldUpdateOperationsInput | number
    codeSnippets?: CodeSnippetUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CodeSnippetCreateManyUserInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewLikeCreateManyUserInput = {
    reviewId: number
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: number | null
    codeId: number
  }

  export type CodeSnippetUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CodeSnippetCategoryUpdateManyWithoutCodeSnippetNestedInput
    reviews?: ReviewUpdateManyWithoutCodeSnippetNestedInput
  }

  export type CodeSnippetUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CodeSnippetCategoryUncheckedUpdateManyWithoutCodeSnippetNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutCodeSnippetNestedInput
  }

  export type CodeSnippetUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewLikeUpdateWithoutUserInput = {
    review?: ReviewUpdateOneRequiredWithoutLikesNestedInput
  }

  export type ReviewLikeUncheckedUpdateWithoutUserInput = {
    reviewId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewLikeUncheckedUpdateManyWithoutUserInput = {
    reviewId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: ReviewLikeUpdateManyWithoutReviewNestedInput
    codeSnippet?: CodeSnippetUpdateOneRequiredWithoutReviewsNestedInput
    parent?: ReviewUpdateOneWithoutRepliesNestedInput
    replies?: ReviewUpdateManyWithoutParentNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    codeId?: IntFieldUpdateOperationsInput | number
    likes?: ReviewLikeUncheckedUpdateManyWithoutReviewNestedInput
    replies?: ReviewUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    codeId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateManyGradeInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    password: string
    imageUrl?: string | null
    likeCount?: number
    nickname: string
    reviewCount?: number
  }

  export type UserUpdateWithoutGradeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    reviewCount?: IntFieldUpdateOperationsInput | number
    codeSnippets?: CodeSnippetUpdateManyWithoutUserNestedInput
    reviewLikes?: ReviewLikeUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGradeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    reviewCount?: IntFieldUpdateOperationsInput | number
    codeSnippets?: CodeSnippetUncheckedUpdateManyWithoutUserNestedInput
    reviewLikes?: ReviewLikeUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutGradeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    reviewCount?: IntFieldUpdateOperationsInput | number
  }

  export type CodeSnippetCategoryCreateManyCodeSnippetInput = {
    categoryId: number
  }

  export type ReviewCreateManyCodeSnippetInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: number | null
    userId: string
  }

  export type CodeSnippetCategoryUpdateWithoutCodeSnippetInput = {
    category?: CategoryUpdateOneRequiredWithoutCodeSnippetCategoriesNestedInput
  }

  export type CodeSnippetCategoryUncheckedUpdateWithoutCodeSnippetInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type CodeSnippetCategoryUncheckedUpdateManyWithoutCodeSnippetInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUpdateWithoutCodeSnippetInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: ReviewLikeUpdateManyWithoutReviewNestedInput
    parent?: ReviewUpdateOneWithoutRepliesNestedInput
    replies?: ReviewUpdateManyWithoutParentNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutCodeSnippetInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    likes?: ReviewLikeUncheckedUpdateManyWithoutReviewNestedInput
    replies?: ReviewUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutCodeSnippetInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CodeSnippetCategoryCreateManyCategoryInput = {
    codeId: number
  }

  export type CodeSnippetCategoryUpdateWithoutCategoryInput = {
    codeSnippet?: CodeSnippetUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CodeSnippetCategoryUncheckedUpdateWithoutCategoryInput = {
    codeId?: IntFieldUpdateOperationsInput | number
  }

  export type CodeSnippetCategoryUncheckedUpdateManyWithoutCategoryInput = {
    codeId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewLikeCreateManyReviewInput = {
    userId: string
  }

  export type ReviewCreateManyParentInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    codeId: number
  }

  export type ReviewLikeUpdateWithoutReviewInput = {
    user?: UserUpdateOneRequiredWithoutReviewLikesNestedInput
  }

  export type ReviewLikeUncheckedUpdateWithoutReviewInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewLikeUncheckedUpdateManyWithoutReviewInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUpdateWithoutParentInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: ReviewLikeUpdateManyWithoutReviewNestedInput
    codeSnippet?: CodeSnippetUpdateOneRequiredWithoutReviewsNestedInput
    replies?: ReviewUpdateManyWithoutParentNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    codeId?: IntFieldUpdateOperationsInput | number
    likes?: ReviewLikeUncheckedUpdateManyWithoutReviewNestedInput
    replies?: ReviewUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    codeId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GradeCountOutputTypeDefaultArgs instead
     */
    export type GradeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GradeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CodeSnippetCountOutputTypeDefaultArgs instead
     */
    export type CodeSnippetCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CodeSnippetCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReviewCountOutputTypeDefaultArgs instead
     */
    export type ReviewCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReviewCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GradeDefaultArgs instead
     */
    export type GradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GradeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CodeSnippetDefaultArgs instead
     */
    export type CodeSnippetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CodeSnippetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CodeSnippetCategoryDefaultArgs instead
     */
    export type CodeSnippetCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CodeSnippetCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReviewDefaultArgs instead
     */
    export type ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReviewDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReviewLikeDefaultArgs instead
     */
    export type ReviewLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReviewLikeDefaultArgs<ExtArgs>

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