/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { KeyboardLayoutContribution } from 'vs/workbench/services/keybinding/browser/keyboardLayouts/_.contribution';


KeyboardLayoutContribution.INSTANCE.registerKeyboardLayout({
	layout: { id: 'com.apple.inputmethod.Korean.2SetKorean', lang: 'ko', localizedName: '2-Set Korean' },
	secondaryLayouts: [],
	mapping: {
		KeyA: ['ㅁ', 'ㅁ', 'a', 'A', 0],
		KeyB: ['ㅠ', 'ㅠ', 'b', 'B', 0],
		KeyC: ['ㅊ', 'ㅊ', 'c', 'C', 0],
		KeyD: ['ㅇ', 'ㅇ', 'd', 'D', 0],
		KeyE: ['ㄷ', 'ㄸ', 'e', 'E', 0],
		KeyF: ['ㄹ', 'ㄹ', 'f', 'F', 0],
		KeyG: ['ㅎ', 'ㅎ', 'g', 'G', 0],
		KeyH: ['ㅗ', 'ㅗ', 'h', 'H', 0],
		KeyI: ['ㅑ', 'ㅑ', 'i', 'I', 0],
		KeyJ: ['ㅓ', 'ㅓ', 'j', 'J', 0],
		KeyK: ['ㅏ', 'ㅏ', 'k', 'K', 0],
		KeyL: ['ㅣ', 'ㅣ', 'l', 'L', 0],
		KeyM: ['ㅡ', 'ㅡ', 'm', 'M', 0],
		KeyN: ['ㅜ', 'ㅜ', 'n', 'N', 0],
		KeyO: ['ㅐ', 'ㅒ', 'o', 'O', 0],
		KeyP: ['ㅔ', 'ㅖ', 'p', 'P', 0],
		KeyQ: ['ㅂ', 'ㅃ', 'q', 'Q', 0],
		KeyR: ['ㄱ', 'ㄲ', 'r', 'R', 0],
		KeyS: ['ㄴ', 'ㄴ', 's', 'S', 0],
		KeyT: ['ㅅ', 'ㅆ', 't', 'T', 0],
		KeyU: ['ㅕ', 'ㅕ', 'u', 'U', 0],
		KeyV: ['ㅍ', 'ㅍ', 'v', 'V', 0],
		KeyW: ['ㅈ', 'ㅉ', 'w', 'W', 0],
		KeyX: ['ㅌ', 'ㅌ', 'x', 'X', 0],
		KeyY: ['ㅛ', 'ㅛ', 'y', 'Y', 0],
		KeyZ: ['ㅋ', 'ㅋ', 'z', 'Z', 0],
		Digit1: ['1', '!', '1', '!', 0],
		Digit2: ['2', '@', '2', '@', 0],
		Digit3: ['3', '#', '3', '#', 0],
		Digit4: ['4', '$', '4', '$', 0],
		Digit5: ['5', '%', '5', '%', 0],
		Digit6: ['6', '^', '6', '^', 0],
		Digit7: ['7', '&', '7', '&', 0],
		Digit8: ['8', '*', '8', '*', 0],
		Digit9: ['9', '(', '9', '(', 0],
		Digit0: ['0', ')', '0', ')', 0],
		Enter: [],
		Escape: ['', '', '', '‌', 0],
		Backspace: [],
		Tab: [],
		Space: [' ', ' ', ' ', ' ', 0],
		Minus: ['-', '_', '-', '_', 0],
		Equal: ['=', '+', '=', '+', 0],
		BracketLeft: ['[', '{', '[', '{', 0],
		BracketRight: [']', '}', ']', '}', 0],
		Backslash: ['\\', '|', '\\', '|', 0],
		Semicolon: [';', ':', ';', ':', 0],
		Quote: ['\'', '"', '\'', '"', 0],
		Backquote: ['₩', '~', '`', '~', 0],
		Comma: [',', '<', ',', '<', 0],
		Period: ['.', '>', '.', '>', 0],
		Slash: ['/', '?', '/', '?', 0],
		CapsLock: [],
		F1: [],
		F2: [],
		F3: [],
		F4: [],
		F5: [],
		F6: [],
		F7: [],
		F8: [],
		F9: [],
		F10: [],
		F11: [],
		F12: [],
		Insert: [],
		Home: [],
		PageUp: [],
		Delete: [],
		End: [],
		PageDown: [],
		ArrowRight: [],
		ArrowLeft: [],
		ArrowDown: [],
		ArrowUp: [],
		NumLock: [],
		NumpadDivide: ['/', '/', '/', '/', 0],
		NumpadMultiply: ['*', '*', '*', '*', 0],
		NumpadSubtract: ['-', '-', '-', '-', 0],
		NumpadAdd: ['+', '+', '+', '+', 0],
		NumpadEnter: [],
		Numpad1: ['1', '1', '1', '1', 0],
		Numpad2: ['2', '2', '2', '2', 0],
		Numpad3: ['3', '3', '3', '3', 0],
		Numpad4: ['4', '4', '4', '4', 0],
		Numpad5: ['5', '5', '5', '5', 0],
		Numpad6: ['6', '6', '6', '6', 0],
		Numpad7: ['7', '7', '7', '7', 0],
		Numpad8: ['8', '8', '8', '8', 0],
		Numpad9: ['9', '9', '9', '9', 0],
		Numpad0: ['0', '0', '0', '0', 0],
		NumpadDecimal: ['.', '.', '.', '.', 0],
		IntlBackslash: ['§', '±', '§', '±', 0],
		ContextMenu: [],
		NumpadEqual: ['=', '=', '=', '=', 0],
		F13: [],
		F14: [],
		F15: [],
		F16: [],
		F17: [],
		F18: [],
		F19: [],
		F20: [],
		AudioVolumeMute: [],
		AudioVolumeUp: ['', '=', '', '=', 0],
		AudioVolumeDown: [],
		NumpadComma: [],
		IntlRo: [],
		KanaMode: [],
		IntlYen: [],
		ControlLeft: [],
		ShiftLeft: [],
		AltLeft: [],
		MetaLeft: [],
		ControlRight: [],
		ShiftRight: [],
		AltRight: [],
		MetaRight: []
	}
});
