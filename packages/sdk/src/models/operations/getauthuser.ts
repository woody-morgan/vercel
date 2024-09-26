/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  AuthUser,
  AuthUser$inboundSchema,
  AuthUser$Outbound,
  AuthUser$outboundSchema,
} from "../components/authuser.js";
import {
  AuthUserLimited,
  AuthUserLimited$inboundSchema,
  AuthUserLimited$Outbound,
  AuthUserLimited$outboundSchema,
} from "../components/authuserlimited.js";

export type User = AuthUserLimited | AuthUser;

/**
 * Successful response.
 */
export type GetAuthUserResponseBody = {
  user: AuthUserLimited | AuthUser;
};

/** @internal */
export const User$inboundSchema: z.ZodType<User, z.ZodTypeDef, unknown> = z
  .union([AuthUserLimited$inboundSchema, AuthUser$inboundSchema]);

/** @internal */
export type User$Outbound = AuthUserLimited$Outbound | AuthUser$Outbound;

/** @internal */
export const User$outboundSchema: z.ZodType<User$Outbound, z.ZodTypeDef, User> =
  z.union([AuthUserLimited$outboundSchema, AuthUser$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace User$ {
  /** @deprecated use `User$inboundSchema` instead. */
  export const inboundSchema = User$inboundSchema;
  /** @deprecated use `User$outboundSchema` instead. */
  export const outboundSchema = User$outboundSchema;
  /** @deprecated use `User$Outbound` instead. */
  export type Outbound = User$Outbound;
}

/** @internal */
export const GetAuthUserResponseBody$inboundSchema: z.ZodType<
  GetAuthUserResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  user: z.union([AuthUserLimited$inboundSchema, AuthUser$inboundSchema]),
});

/** @internal */
export type GetAuthUserResponseBody$Outbound = {
  user: AuthUserLimited$Outbound | AuthUser$Outbound;
};

/** @internal */
export const GetAuthUserResponseBody$outboundSchema: z.ZodType<
  GetAuthUserResponseBody$Outbound,
  z.ZodTypeDef,
  GetAuthUserResponseBody
> = z.object({
  user: z.union([AuthUserLimited$outboundSchema, AuthUser$outboundSchema]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAuthUserResponseBody$ {
  /** @deprecated use `GetAuthUserResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetAuthUserResponseBody$inboundSchema;
  /** @deprecated use `GetAuthUserResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetAuthUserResponseBody$outboundSchema;
  /** @deprecated use `GetAuthUserResponseBody$Outbound` instead. */
  export type Outbound = GetAuthUserResponseBody$Outbound;
}