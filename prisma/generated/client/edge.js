
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.8.1
 * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
 */
Prisma.prismaVersion = {
  client: "5.8.1",
  engine: "78caf6feeaed953168c64e15a249c3e9a033ebe2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CityScalarFieldEnum = {
  id: 'id',
  name: 'name',
  logoUrl: 'logoUrl'
};

exports.Prisma.PrayerScalarFieldEnum = {
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

exports.Prisma.MosqueScalarFieldEnum = {
  id: 'id',
  cityId: 'cityId',
  name: 'name',
  logoUrl: 'logoUrl'
};

exports.Prisma.MediaScalarFieldEnum = {
  id: 'id',
  mosqueId: 'mosqueId',
  videoUrl: 'videoUrl'
};

exports.Prisma.QRCodeScalarFieldEnum = {
  id: 'id',
  mosqueId: 'mosqueId',
  isPrimary: 'isPrimary',
  projectName: 'projectName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  imageUrl: 'imageUrl'
};

exports.Prisma.ErrorMessageScalarFieldEnum = {
  id: 'id',
  message: 'message'
};

exports.Prisma.AdminScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  createdAt: 'createdAt',
  role: 'role',
  cityId: 'cityId',
  mosqueId: 'mosqueId'
};

exports.Prisma.FixedPrayerTimeScalarFieldEnum = {
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

exports.Prisma.FixedMosquePrayerTimeScalarFieldEnum = {
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

exports.Prisma.PrayerTimeChangeScalarFieldEnum = {
  id: 'id',
  prayerId: 'prayerId',
  prayerType: 'prayerType',
  oldTime: 'oldTime',
  newTime: 'newTime',
  shiftMinutes: 'shiftMinutes',
  changedAt: 'changedAt',
  changedBy: 'changedBy'
};

exports.Prisma.AuditLogScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  action: 'action',
  entity: 'entity',
  entityId: 'entityId',
  oldValue: 'oldValue',
  newValue: 'newValue',
  createdAt: 'createdAt'
};

exports.Prisma.TranslationScalarFieldEnum = {
  id: 'id',
  key: 'key',
  ru: 'ru',
  tt: 'tt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MosqueLanguageSettingsScalarFieldEnum = {
  id: 'id',
  mosqueId: 'mosqueId',
  translationsEnabled: 'translationsEnabled',
  languageToggleEnabled: 'languageToggleEnabled',
  languageToggleIntervalSeconds: 'languageToggleIntervalSeconds',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.NameOfAllahScalarFieldEnum = {
  id: 'id',
  mosqueId: 'mosqueId',
  arabic: 'arabic',
  transcription: 'transcription',
  meaning: 'meaning',
  transcriptionTatar: 'transcriptionTatar',
  meaningTatar: 'meaningTatar',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.Role = exports.$Enums.Role = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  CITY_ADMIN: 'CITY_ADMIN',
  MOSQUE_ADMIN: 'MOSQUE_ADMIN'
};

exports.Prisma.ModelName = {
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
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Administrator\\Documents\\work\\time-for-namaz-b\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.8.1",
  "engineVersion": "78caf6feeaed953168c64e15a249c3e9a033ebe2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiDQogIG91dHB1dCAgID0gImdlbmVyYXRlZC9jbGllbnQiDQp9DQoNCmRhdGFzb3VyY2UgZGIgew0KICBwcm92aWRlciA9ICJwb3N0Z3Jlc3FsIg0KICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikNCn0NCg0KbW9kZWwgQ2l0eSB7DQogIGlkICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIG5hbWUgICAgICAgICAgICBTdHJpbmcNCiAgbG9nb1VybCAgICAgICAgIFN0cmluZz8NCiAgYWRtaW4gICAgICAgICAgIEFkbWluPyAgICAgICAgICAgQHJlbGF0aW9uKCJDaXR5QWRtaW4iKQ0KICBmaXhlZFByYXllclRpbWUgRml4ZWRQcmF5ZXJUaW1lPw0KICBNb3NxdWUgICAgICAgICAgTW9zcXVlW10NCiAgcHJheWVycyAgICAgICAgIFByYXllcltdDQp9DQoNCm1vZGVsIFByYXllciB7DQogIGlkICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgY2l0eUlkICAgSW50DQogIG1vc3F1ZUlkIEludD8NCiAgZGF0ZSAgICAgU3RyaW5nPw0KICBmYWpyICAgICBTdHJpbmc/DQogIHNodXJ1ayAgIFN0cmluZz8NCiAgenVociAgICAgU3RyaW5nPw0KICBhc3IgICAgICBTdHJpbmc/DQogIG1hZ2hyaWIgIFN0cmluZz8NCiAgaXNoYSAgICAgU3RyaW5nPw0KICBtZWNoZXQgICBTdHJpbmc/DQogIGNpdHkgICAgIENpdHkgICAgQHJlbGF0aW9uKGZpZWxkczogW2NpdHlJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIG1vc3F1ZSAgIE1vc3F1ZT8gQHJlbGF0aW9uKGZpZWxkczogW21vc3F1ZUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgY2hhbmdlcyAgUHJheWVyVGltZUNoYW5nZVtdDQp9DQoNCm1vZGVsIE1vc3F1ZSB7DQogIGlkICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGNpdHlJZCAgICAgICAgICBJbnQNCiAgbmFtZSAgICAgICAgICAgIFN0cmluZw0KICBsb2dvVXJsICAgICAgICAgU3RyaW5nPw0KICBhZG1pbiAgICAgICAgICAgQWRtaW4/ICAgICAgICAgICAgICAgICBAcmVsYXRpb24oIk1vc3F1ZUFkbWluIikNCiAgZml4ZWRQcmF5ZXJUaW1lIEZpeGVkTW9zcXVlUHJheWVyVGltZT8NCiAgbGFuZ3VhZ2VTZXR0aW5ncyBNb3NxdWVMYW5ndWFnZVNldHRpbmdzPw0KICBuYW1lc09mQWxsYWggICAgTmFtZU9mQWxsYWhbXQ0KICBtZWRpYSAgICAgICAgICAgTWVkaWFbXQ0KICBjaXR5ICAgICAgICAgICAgQ2l0eSAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbY2l0eUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgcHJheWVycyAgICAgICAgIFByYXllcltdDQogIHFyQ29kZXMgICAgICAgICBRUkNvZGVbXSAgICAgICAgICAgICAgIEByZWxhdGlvbigiTW9zcXVlUVJDb2RlIikNCn0NCg0KbW9kZWwgTWVkaWEgew0KICBpZCAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIG1vc3F1ZUlkIEludA0KICB2aWRlb1VybCBTdHJpbmc/DQogIG1vc3F1ZSAgIE1vc3F1ZSAgQHJlbGF0aW9uKGZpZWxkczogW21vc3F1ZUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCn0NCg0KbW9kZWwgUVJDb2RlIHsNCiAgaWQgICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbW9zcXVlSWQgICAgSW50DQogIGlzUHJpbWFyeSAgIEJvb2xlYW4gIEBkZWZhdWx0KHRydWUpDQogIHByb2plY3ROYW1lIFN0cmluZz8NCiAgY3JlYXRlZEF0ICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpDQogIHVwZGF0ZWRBdCAgIERhdGVUaW1lIEB1cGRhdGVkQXQNCiAgaW1hZ2VVcmwgICAgU3RyaW5nDQogIG1vc3F1ZSAgICAgIE1vc3F1ZSAgIEByZWxhdGlvbigiTW9zcXVlUVJDb2RlIiwgZmllbGRzOiBbbW9zcXVlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KfQ0KDQptb2RlbCBFcnJvck1lc3NhZ2Ugew0KICBpZCAgICAgIEludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBtZXNzYWdlIFN0cmluZw0KfQ0KDQptb2RlbCBBZG1pbiB7DQogIGlkICAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBlbWFpbCAgICAgU3RyaW5nICAgQHVuaXF1ZQ0KICBwYXNzd29yZCAgU3RyaW5nDQogIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCiAgcm9sZSAgICAgIFJvbGUNCiAgY2l0eUlkICAgIEludD8gICAgIEB1bmlxdWUNCiAgbW9zcXVlSWQgIEludD8gICAgIEB1bmlxdWUNCiAgY2l0eSAgICAgIENpdHk/ICAgIEByZWxhdGlvbigiQ2l0eUFkbWluIiwgZmllbGRzOiBbY2l0eUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgbW9zcXVlICAgIE1vc3F1ZT8gIEByZWxhdGlvbigiTW9zcXVlQWRtaW4iLCBmaWVsZHM6IFttb3NxdWVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIHByYXllckNoYW5nZXMgUHJheWVyVGltZUNoYW5nZVtdDQogIGF1ZGl0TG9ncyBBdWRpdExvZ1tdDQp9DQoNCm1vZGVsIEZpeGVkUHJheWVyVGltZSB7DQogIGlkICAgICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgY2l0eUlkICAgICAgICBJbnQgICAgICBAdW5pcXVlDQogIGZhanIgICAgICAgICAgU3RyaW5nDQogIHNodXJ1ayAgICAgICAgU3RyaW5nDQogIHp1aHIgICAgICAgICAgU3RyaW5nDQogIGFzciAgICAgICAgICAgU3RyaW5nDQogIG1hZ2hyaWIgICAgICAgU3RyaW5nDQogIGlzaGEgICAgICAgICAgU3RyaW5nDQogIG1lY2hldCAgICAgICAgU3RyaW5nPw0KICBjcmVhdGVkQXQgICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkQXQgICAgIERhdGVUaW1lIEB1cGRhdGVkQXQNCiAgZmFqckFjdGl2ZSAgICBCb29sZWFuICBAZGVmYXVsdChmYWxzZSkNCiAgc2h1cnVrQWN0aXZlICBCb29sZWFuICBAZGVmYXVsdChmYWxzZSkNCiAgenVockFjdGl2ZSAgICBCb29sZWFuICBAZGVmYXVsdChmYWxzZSkNCiAgYXNyQWN0aXZlICAgICBCb29sZWFuICBAZGVmYXVsdChmYWxzZSkNCiAgbWFnaHJpYkFjdGl2ZSBCb29sZWFuICBAZGVmYXVsdChmYWxzZSkNCiAgaXNoYUFjdGl2ZSAgICBCb29sZWFuICBAZGVmYXVsdChmYWxzZSkNCiAgbWVjaGV0QWN0aXZlICBCb29sZWFuICBAZGVmYXVsdChmYWxzZSkNCiAgY2l0eSAgICAgICAgICBDaXR5ICAgICBAcmVsYXRpb24oZmllbGRzOiBbY2l0eUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCn0NCg0KbW9kZWwgRml4ZWRNb3NxdWVQcmF5ZXJUaW1lIHsNCiAgaWQgICAgICAgICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbW9zcXVlSWQgICAgICAgICAgSW50ICAgICAgQHVuaXF1ZQ0KICBmYWpyICAgICAgICAgICAgICBTdHJpbmcNCiAgc2h1cnVrICAgICAgICAgICAgU3RyaW5nDQogIHp1aHIgICAgICAgICAgICAgIFN0cmluZw0KICBhc3IgICAgICAgICAgICAgICBTdHJpbmcNCiAgbWFnaHJpYiAgICAgICAgICAgU3RyaW5nDQogIGlzaGEgICAgICAgICAgICAgIFN0cmluZw0KICBtZWNoZXQgICAgICAgICAgICBTdHJpbmc/DQogIGNyZWF0ZWRBdCAgICAgICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkQXQgICAgICAgICBEYXRlVGltZSBAdXBkYXRlZEF0DQogIGZhanJBY3RpdmUgICAgICAgIEJvb2xlYW4gIEBkZWZhdWx0KGZhbHNlKQ0KICBzaHVydWtBY3RpdmUgICAgICBCb29sZWFuICBAZGVmYXVsdChmYWxzZSkNCiAgenVockFjdGl2ZSAgICAgICAgQm9vbGVhbiAgQGRlZmF1bHQoZmFsc2UpDQogIGFzckFjdGl2ZSAgICAgICAgIEJvb2xlYW4gIEBkZWZhdWx0KGZhbHNlKQ0KICBtYWdocmliQWN0aXZlICAgICBCb29sZWFuICBAZGVmYXVsdChmYWxzZSkNCiAgaXNoYUFjdGl2ZSAgICAgICAgQm9vbGVhbiAgQGRlZmF1bHQoZmFsc2UpDQogIG1lY2hldEFjdGl2ZSAgICAgIEJvb2xlYW4gIEBkZWZhdWx0KGZhbHNlKQ0KICBmYWpySXFhbWFFbmFibGVkICBCb29sZWFuICBAZGVmYXVsdChmYWxzZSkNCiAgZmFqcklxYW1hTWludXRlcyAgSW50ICAgICAgQGRlZmF1bHQoMCkNCiAgc2h1cnVrSXFhbWFFbmFibGVkIEJvb2xlYW4gIEBkZWZhdWx0KGZhbHNlKQ0KICBzaHVydWtJcWFtYU1pbnV0ZXMgSW50ICAgICBAZGVmYXVsdCgwKQ0KICB6dWhySXFhbWFFbmFibGVkICBCb29sZWFuICBAZGVmYXVsdChmYWxzZSkNCiAgenVocklxYW1hTWludXRlcyAgSW50ICAgICAgQGRlZmF1bHQoMCkNCiAgYXNySXFhbWFFbmFibGVkICAgQm9vbGVhbiAgQGRlZmF1bHQoZmFsc2UpDQogIGFzcklxYW1hTWludXRlcyAgIEludCAgICAgIEBkZWZhdWx0KDApDQogIG1hZ2hyaWJJcWFtYUVuYWJsZWQgQm9vbGVhbiBAZGVmYXVsdChmYWxzZSkNCiAgbWFnaHJpYklxYW1hTWludXRlcyBJbnQgICAgQGRlZmF1bHQoMCkNCiAgaXNoYUlxYW1hRW5hYmxlZCAgQm9vbGVhbiAgQGRlZmF1bHQoZmFsc2UpDQogIGlzaGFJcWFtYU1pbnV0ZXMgIEludCAgICAgIEBkZWZhdWx0KDApDQogIG1lY2hldElxYW1hRW5hYmxlZCBCb29sZWFuIEBkZWZhdWx0KGZhbHNlKQ0KICBtZWNoZXRJcWFtYU1pbnV0ZXMgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBtb3NxdWUgICAgICAgICAgICBNb3NxdWUgICBAcmVsYXRpb24oZmllbGRzOiBbbW9zcXVlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KfQ0KDQptb2RlbCBQcmF5ZXJUaW1lQ2hhbmdlIHsNCiAgaWQgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIHByYXllcklkICBJbnQNCiAgcHJheWVyICAgIFByYXllciAgIEByZWxhdGlvbihmaWVsZHM6IFtwcmF5ZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIHByYXllclR5cGUgU3RyaW5nICAvLyDRgtC40L8g0L3QsNC80LDQt9CwIChmYWpyLCB6dWhyINC4INGCLtC0LikNCiAgb2xkVGltZSAgIFN0cmluZw0KICBuZXdUaW1lICAgU3RyaW5nDQogIHNoaWZ0TWludXRlcyBJbnQgICAvLyDQvdCwINGB0LrQvtC70YzQutC+INC80LjQvdGD0YIg0LjQt9C80LXQvdC40LvQvtGB0Ywg0LLRgNC10LzRjw0KICBjaGFuZ2VkQXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpDQogIGNoYW5nZWRCeSBJbnQNCiAgdXNlciAgICAgIEFkbWluICAgIEByZWxhdGlvbihmaWVsZHM6IFtjaGFuZ2VkQnldLCByZWZlcmVuY2VzOiBbaWRdKQ0KfQ0KDQplbnVtIFJvbGUgew0KICBTVVBFUl9BRE1JTg0KICBDSVRZX0FETUlODQogIE1PU1FVRV9BRE1JTg0KfQ0KDQptb2RlbCBBdWRpdExvZyB7DQogIGlkICAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICB1c2VySWQgICAgSW50DQogIHVzZXIgICAgICBBZG1pbiAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgYWN0aW9uICAgIFN0cmluZyAgIC8vIGNyZWF0ZSwgdXBkYXRlLCBkZWxldGUNCiAgZW50aXR5ICAgIFN0cmluZyAgIC8vINC40LzRjyDRgdGD0YnQvdC+0YHRgtC4ICjQvdCw0L/RgNC40LzQtdGALCBQcmF5ZXIsIENpdHkpDQogIGVudGl0eUlkICBJbnQgICAgICAvLyBJRCDRgdGD0YnQvdC+0YHRgtC4DQogIG9sZFZhbHVlICBKc29uPw0KICBuZXdWYWx1ZSAgSnNvbj8NCiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KfQ0KDQptb2RlbCBUcmFuc2xhdGlvbiB7DQogIGlkICAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBrZXkgICAgICAgU3RyaW5nICAgQHVuaXF1ZQ0KICBydSAgICAgICAgU3RyaW5nDQogIHR0ICAgICAgICBTdHJpbmcNCiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkQXQgRGF0ZVRpbWUgQHVwZGF0ZWRBdA0KfQ0KDQptb2RlbCBNb3NxdWVMYW5ndWFnZVNldHRpbmdzIHsNCiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIG1vc3F1ZUlkICAgICAgICAgICAgICAgICAgICBJbnQgICAgICBAdW5pcXVlDQogIHRyYW5zbGF0aW9uc0VuYWJsZWQgICAgICAgICBCb29sZWFuICBAZGVmYXVsdCh0cnVlKQ0KICBsYW5ndWFnZVRvZ2dsZUVuYWJsZWQgICAgICAgQm9vbGVhbiAgQGRlZmF1bHQoZmFsc2UpDQogIGxhbmd1YWdlVG9nZ2xlSW50ZXJ2YWxTZWNvbmRzIEludCAgICBAZGVmYXVsdCgzMCkNCiAgY3JlYXRlZEF0ICAgICAgICAgICAgICAgICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkQXQgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWUgQHVwZGF0ZWRBdA0KICBtb3NxdWUgICAgICAgICAgICAgICAgICAgICAgTW9zcXVlICAgQHJlbGF0aW9uKGZpZWxkczogW21vc3F1ZUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCn0NCg0KbW9kZWwgTmFtZU9mQWxsYWggew0KICBpZCAgICAgICAgICAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBtb3NxdWVJZCAgICAgICAgICBJbnQNCiAgYXJhYmljICAgICAgICAgICAgU3RyaW5nDQogIHRyYW5zY3JpcHRpb24gICAgIFN0cmluZw0KICBtZWFuaW5nICAgICAgICAgICBTdHJpbmcNCiAgdHJhbnNjcmlwdGlvblRhdGFyIFN0cmluZz8NCiAgbWVhbmluZ1RhdGFyICAgICAgU3RyaW5nPw0KICBjcmVhdGVkQXQgICAgICAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCiAgdXBkYXRlZEF0ICAgICAgICAgRGF0ZVRpbWUgQHVwZGF0ZWRBdA0KICBtb3NxdWUgICAgICAgICAgICBNb3NxdWUgICBAcmVsYXRpb24oZmllbGRzOiBbbW9zcXVlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICANCiAgQEB1bmlxdWUoW21vc3F1ZUlkLCBhcmFiaWNdKQ0KICBAQGluZGV4KFttb3NxdWVJZF0pDQp9DQo=",
  "inlineSchemaHash": "72e3722e65d46fc58e8e56dd8dd8d01d91622ac7ecbef86f7e3f92e15c16501f",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"City\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logoUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Admin\",\"relationName\":\"CityAdmin\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fixedPrayerTime\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FixedPrayerTime\",\"relationName\":\"CityToFixedPrayerTime\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Mosque\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mosque\",\"relationName\":\"CityToMosque\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prayers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Prayer\",\"relationName\":\"CityToPrayer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Prayer\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cityId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mosqueId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fajr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shuruk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"zuhr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"asr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maghrib\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mechet\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"City\",\"relationName\":\"CityToPrayer\",\"relationFromFields\":[\"cityId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mosque\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mosque\",\"relationName\":\"MosqueToPrayer\",\"relationFromFields\":[\"mosqueId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"changes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PrayerTimeChange\",\"relationName\":\"PrayerToPrayerTimeChange\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Mosque\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cityId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logoUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Admin\",\"relationName\":\"MosqueAdmin\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fixedPrayerTime\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FixedMosquePrayerTime\",\"relationName\":\"FixedMosquePrayerTimeToMosque\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"languageSettings\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MosqueLanguageSettings\",\"relationName\":\"MosqueToMosqueLanguageSettings\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"namesOfAllah\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NameOfAllah\",\"relationName\":\"MosqueToNameOfAllah\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"media\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Media\",\"relationName\":\"MediaToMosque\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"City\",\"relationName\":\"CityToMosque\",\"relationFromFields\":[\"cityId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prayers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Prayer\",\"relationName\":\"MosqueToPrayer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"qrCodes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"QRCode\",\"relationName\":\"MosqueQRCode\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Media\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mosqueId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"videoUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mosque\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mosque\",\"relationName\":\"MediaToMosque\",\"relationFromFields\":[\"mosqueId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"QRCode\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mosqueId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPrimary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"imageUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mosque\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mosque\",\"relationName\":\"MosqueQRCode\",\"relationFromFields\":[\"mosqueId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ErrorMessage\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Admin\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Role\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cityId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mosqueId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"City\",\"relationName\":\"CityAdmin\",\"relationFromFields\":[\"cityId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mosque\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mosque\",\"relationName\":\"MosqueAdmin\",\"relationFromFields\":[\"mosqueId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prayerChanges\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PrayerTimeChange\",\"relationName\":\"AdminToPrayerTimeChange\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auditLogs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AuditLog\",\"relationName\":\"AdminToAuditLog\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FixedPrayerTime\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cityId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fajr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shuruk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"zuhr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"asr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maghrib\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mechet\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"fajrActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shurukActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"zuhrActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"asrActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maghribActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ishaActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mechetActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"City\",\"relationName\":\"CityToFixedPrayerTime\",\"relationFromFields\":[\"cityId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FixedMosquePrayerTime\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mosqueId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fajr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shuruk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"zuhr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"asr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maghrib\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mechet\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"fajrActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shurukActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"zuhrActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"asrActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maghribActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ishaActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mechetActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fajrIqamaEnabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fajrIqamaMinutes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shurukIqamaEnabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shurukIqamaMinutes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"zuhrIqamaEnabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"zuhrIqamaMinutes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"asrIqamaEnabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"asrIqamaMinutes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maghribIqamaEnabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maghribIqamaMinutes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ishaIqamaEnabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ishaIqamaMinutes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mechetIqamaEnabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mechetIqamaMinutes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mosque\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mosque\",\"relationName\":\"FixedMosquePrayerTimeToMosque\",\"relationFromFields\":[\"mosqueId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PrayerTimeChange\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prayerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prayer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Prayer\",\"relationName\":\"PrayerToPrayerTimeChange\",\"relationFromFields\":[\"prayerId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prayerType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oldTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shiftMinutes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"changedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"changedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Admin\",\"relationName\":\"AdminToPrayerTimeChange\",\"relationFromFields\":[\"changedBy\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AuditLog\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Admin\",\"relationName\":\"AdminToAuditLog\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entityId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oldValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Translation\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ru\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MosqueLanguageSettings\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mosqueId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"translationsEnabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"languageToggleEnabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"languageToggleIntervalSeconds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":30,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"mosque\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mosque\",\"relationName\":\"MosqueToMosqueLanguageSettings\",\"relationFromFields\":[\"mosqueId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"NameOfAllah\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mosqueId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"arabic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transcription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"meaning\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transcriptionTatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"meaningTatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"mosque\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mosque\",\"relationName\":\"MosqueToNameOfAllah\",\"relationFromFields\":[\"mosqueId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"mosqueId\",\"arabic\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"mosqueId\",\"arabic\"]}],\"isGenerated\":false}},\"enums\":{\"Role\":{\"values\":[{\"name\":\"SUPER_ADMIN\",\"dbName\":null},{\"name\":\"CITY_ADMIN\",\"dbName\":null},{\"name\":\"MOSQUE_ADMIN\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

