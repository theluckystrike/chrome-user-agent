/**
 * User Agent — Parse, detect, and override user agent strings
 */
export class UserAgent {
    /** Parse user agent string */
    static parse(ua?: string): { browser: string; version: string; os: string; mobile: boolean; engine: string } {
        const s = ua || (typeof navigator !== 'undefined' ? navigator.userAgent : '');
        let browser = 'Unknown'; let version = ''; let os = 'Unknown'; let engine = 'Unknown';
        const mobile = /Mobile|Android|iPhone|iPad/i.test(s);

        if (/Edg\//i.test(s)) { browser = 'Edge'; version = s.match(/Edg\/([\d.]+)/)?.[1] || ''; }
        else if (/OPR\//i.test(s)) { browser = 'Opera'; version = s.match(/OPR\/([\d.]+)/)?.[1] || ''; }
        else if (/Chrome\//i.test(s)) { browser = 'Chrome'; version = s.match(/Chrome\/([\d.]+)/)?.[1] || ''; }
        else if (/Firefox\//i.test(s)) { browser = 'Firefox'; version = s.match(/Firefox\/([\d.]+)/)?.[1] || ''; }
        else if (/Safari\//i.test(s) && !/Chrome/i.test(s)) { browser = 'Safari'; version = s.match(/Version\/([\d.]+)/)?.[1] || ''; }

        if (/Windows/i.test(s)) os = 'Windows';
        else if (/Mac OS/i.test(s)) os = 'macOS';
        else if (/Linux/i.test(s)) os = 'Linux';
        else if (/Android/i.test(s)) os = 'Android';
        else if (/iPhone|iPad/i.test(s)) os = 'iOS';

        if (/Gecko\//i.test(s)) engine = 'Gecko';
        else if (/AppleWebKit/i.test(s)) engine = 'WebKit';

        return { browser, version, os, mobile, engine };
    }

    /** Override user agent via declarativeNetRequest */
    static async spoof(userAgent: string): Promise<void> {
        await chrome.declarativeNetRequest.updateDynamicRules({
            removeRuleIds: [9999],
            addRules: [{
                id: 9999, priority: 1, action: {
                    type: 'modifyHeaders' as any,
                    requestHeaders: [{ header: 'User-Agent', operation: 'set' as any, value: userAgent }],
                },
                condition: { urlFilter: '*', resourceTypes: ['main_frame', 'sub_frame', 'xmlhttprequest'] as any },
            }],
        });
    }

    /** Remove user agent override */
    static async resetSpoof(): Promise<void> {
        await chrome.declarativeNetRequest.updateDynamicRules({ removeRuleIds: [9999], addRules: [] });
    }

    /** Common user agent presets */
    static readonly PRESETS = {
        CHROME_WIN: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        CHROME_MAC: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        FIREFOX_WIN: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0',
        SAFARI_MAC: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15',
        IPHONE: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1',
        ANDROID: 'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36',
    };
}
