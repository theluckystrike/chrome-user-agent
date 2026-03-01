# chrome-user-agent — User Agent Detection and Spoofing
> **Built by [Zovo](https://zovo.one)** | `npm i chrome-user-agent`

Parse UA strings, detect browser/OS, spoof via declarativeNetRequest, and common presets.

```typescript
import { UserAgent } from 'chrome-user-agent';
const info = UserAgent.parse();
await UserAgent.spoof(UserAgent.PRESETS.IPHONE);
await UserAgent.resetSpoof();
```
MIT License
