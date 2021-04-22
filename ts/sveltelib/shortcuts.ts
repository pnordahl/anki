// Copyright: Ankitects Pty Ltd and contributors
// License: GNU AGPL, version 3 or later; http://www.gnu.org/licenses/agpl.html

function isApplePlatform(): boolean {
    return (
        window.navigator.platform.startsWith("Mac") ||
        window.navigator.platform.startsWith("iP")
    );
}

export function primaryModifierForPlatform(): string {
    return isApplePlatform() ? "Meta" : "Control";
}
