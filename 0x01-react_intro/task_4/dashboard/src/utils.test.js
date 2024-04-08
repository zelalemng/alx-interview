import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test('returns current year', () => {
    expect(getFullYear()).tobe(2024);
});

test('correct footer copy', () => {
    expect(getFooterCopy(true)).tobe('Holberton School');
    expect(getFooterCopy(false)).tobe('Holberton main dashboard');
});

test('returns right notifiction', () => {
    expect(getLatestNotification()).tobe(
        '<strong>Urgent requirement</strong> - complete by EOD'
    );
});