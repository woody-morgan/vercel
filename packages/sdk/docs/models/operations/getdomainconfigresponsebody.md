# GetDomainConfigResponseBody

## Example Usage

```typescript
import { GetDomainConfigResponseBody } from "@vercel/sdk/models/operations/getdomainconfig.js";

let value: GetDomainConfigResponseBody = {
  misconfigured: false,
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `configuredBy`                                                                                                                                                                                                                                                                                                                           | [operations.ConfiguredBy](../../models/operations/configuredby.md)                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                       | How we see the domain's configuration. - `CNAME`: Domain has a CNAME pointing to Vercel. - `A`: Domain's A record is resolving to Vercel. - `http`: Domain is resolving to Vercel but may be behind a Proxy. - `dns-01`: Domain is not resolving to Vercel but dns-01 challenge is enabled. - `null`: Domain is not resolving to Vercel. |
| `acceptedChallenges`                                                                                                                                                                                                                                                                                                                     | [operations.AcceptedChallenges](../../models/operations/acceptedchallenges.md)[]                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                       | Which challenge types the domain can use for issuing certs.                                                                                                                                                                                                                                                                              |
| `misconfigured`                                                                                                                                                                                                                                                                                                                          | *boolean*                                                                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                       | Whether or not the domain is configured AND we can automatically generate a TLS certificate.                                                                                                                                                                                                                                             |