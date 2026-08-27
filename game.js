var _STRINGS = {
        'Ad': {
            'Mobile': {
                'Preroll': {
                    'ReadyIn': 'The\x20game\x20is\x20ready\x20in\x20',
                    'Loading': 'Your\x20game\x20is\x20loading...',
                    'Close': 'Close'
                },
                'Header': {
                    'ReadyIn': 'The\x20game\x20is\x20ready\x20in\x20',
                    'Loading': 'Your\x20game\x20is\x20loading...',
                    'Close': 'Close'
                },
                'End': {
                    'ReadyIn': 'Advertisement\x20ends\x20in\x20',
                    'Loading': 'Please\x20wait\x20...',
                    'Close': 'Close'
                }
            }
        },
        'Splash': {
            'Loading': 'Loading...',
            'LogoLine1': 'Some\x20text\x20here',
            'LogoLine2': 'none',
            'LogoLine3': 'none',
            'TapToStart': 'TAP\x20TO\x20START'
        },
        'Game': {
            'Streak': 'Streak',
            'Settings': 'Settings',
            'Pause': 'Pause',
            'GameOver': 'Game\x20Over',
            'Lose': 'You\x20lose!',
            'Score': 'Score',
            'Time': 'Time'
        },
        'Tutorial': {
            'Tutorial': 'Tutorial',
            'HowToPlay': 'How\x20To\x20Play',
            'Step1': 'Tap\x20and\x20hold\x20to\x20aim',
            'Step2': 'Hit\x20as\x20many\x20fruits\x20as\x20you\x20can',
            'Step3': 'Hit\x205\x20fruits\x20with\x20fire\x20arrows\x20for\x20an\x20extra\x20arrow',
            'Step4': 'Hitting\x20a\x20fruit\x20at\x20its\x20center\x20gives\x205x\x20points',
            'Step5': '2\x20or\x20more\x20hits\x20in\x20a\x20row\x20starts\x20the\x20fire\x20arrow\x20streak',
            'Step6': 'A\x20fire\x20arrow\x20gives\x202x\x20points\x20per\x20hit',
            'Step7': 'You\x20get\x20a\x204th\x20arrow!\x20You\x20can\x20use\x20it\x20only\x20once'
        },
        'Results': {
            'NiceShoot': 'Nice\x20Shot!',
            'Good': 'Good!',
            'Title': 'High\x20score',
            'BestScore': 'Best\x20Score',
            'NewBestScore': 'New\x20Best\x20Score!'
        }
    },
    _GAME_CONFIGURATION = {
        'fontStyles': ['thewildbreathofzelda', 'leaguespartan-bold'],
        'fontColors': ['#ffd685', '#683825'],
        'friendlies': {
            'peasant_boy': {
                'fruitPos': {
                    'x': 0x0,
                    'y': 0x0
                },
                'ouchSound': 'ouchPeasantBoy',
                'hitBoxes': [{
                    'x1': 0xd,
                    'y1': 0xc,
                    'x2': 0x2d,
                    'y2': 0x2a
                }, {
                    'x1': 0x15,
                    'y1': 0x34,
                    'x2': 0x17,
                    'y2': 0x46
                }]
            },
            'monk': {
                'fruitPos': {
                    'x': 0x0,
                    'y': 0x0
                },
                'ouchSound': 'ouchMonk',
                'hitBoxes': [{
                    'x1': 0x14,
                    'y1': 0x8,
                    'x2': 0x32,
                    'y2': 0x3c
                }, {
                    'x1': 0xf,
                    'y1': 0x3c,
                    'x2': 0x3c,
                    'y2': 0x70
                }]
            },
            'jester': {
                'fruitPos': {
                    'x': 0x0,
                    'y': 0x5
                },
                'ouchSound': 'ouchJester',
                'hitBoxes': [{
                    'x1': 0x1e,
                    'y1': 0xf,
                    'x2': 0x32,
                    'y2': 0x19
                }, {
                    'x1': 0x1b,
                    'y1': 0x1e,
                    'x2': 0x32,
                    'y2': 0x37
                }, {
                    'x1': 0x1e,
                    'y1': 0x55,
                    'x2': 0x20,
                    'y2': 0x64
                }]
            },
            'merchant': {
                'fruitPos': {
                    'x': 0x0,
                    'y': 0x0
                },
                'ouchSound': 'ouchMerchant',
                'hitBoxes': [{
                    'x1': 0x14,
                    'y1': 0xa,
                    'x2': 0x32,
                    'y2': 0x28
                }, {
                    'x1': 0x19,
                    'y1': 0x32,
                    'x2': 0x2e,
                    'y2': 0x78
                }]
            },
            'merlin': {
                'fruitPos': {
                    'x': -0xa,
                    'y': 0x0
                },
                'ouchSound': 'ouchMerlin',
                'hitBoxes': [{
                    'x1': 0x28,
                    'y1': 0xa,
                    'x2': 0x32,
                    'y2': 0x19
                }, {
                    'x1': 0x21,
                    'y1': 0x1e,
                    'x2': 0x32,
                    'y2': 0x32
                }, {
                    'x1': 0x1e,
                    'y1': 0x4b,
                    'x2': 0x32,
                    'y2': 0x78
                }]
            },
            'princess': {
                'fruitPos': {
                    'x': 0x0,
                    'y': 0x0
                },
                'ouchSound': 'ouchPrincess',
                'hitBoxes': [{
                    'x1': 0x18,
                    'y1': 0xa,
                    'x2': 0x32,
                    'y2': 0x28
                }, {
                    'x1': 0xd,
                    'x2': 0x32,
                    'y1': 0x14,
                    'y2': 0x28
                }, {
                    'x1': 0x18,
                    'x2': 0x32,
                    'y1': 0x32,
                    'y2': 0x69
                }]
            },
            'squire': {
                'fruitPos': {
                    'x': 0x0,
                    'y': 0x0
                },
                'ouchSound': 'ouchSquire',
                'hitBoxes': [{
                    'x1': 0x14,
                    'x2': 0x34,
                    'y1': 0x9,
                    'y2': 0x32
                }, {
                    'x1': 0x18,
                    'x2': 0x28,
                    'y1': 0x34,
                    'y2': 0x5a
                }]
            }
        },
        'fruits': {
            'apple': {
                'sliceSound': '',
                'midY': 0.5,
                'midHeight': 0xa,
                'topHeight': 0xf,
                'bottomHeight': 0x12
            },
            'cherries': {
                'sliceSound': '',
                'midY': 0.8,
                'midHeight': 0xc,
                'topHeight': 0x19,
                'bottomHeight': 0x1
            },
            'grapes': {
                'sliceSound': '',
                'midY': 0.5,
                'midHeight': 0xa,
                'topHeight': 0xf,
                'bottomHeight': 0x12
            },
            'lemon': {
                'sliceSound': '',
                'midY': 0.5,
                'midHeight': 0xa,
                'topHeight': 0xf,
                'bottomHeight': 0x18
            },
            'pear': {
                'sliceSound': '',
                'midY': 0.5,
                'midHeight': 0xa,
                'topHeight': 0xf,
                'bottomHeight': 0x18
            },
            'pomegranate': {
                'sliceSound': '',
                'midY': 0.5,
                'midHeight': 0xa,
                'topHeight': 0xf,
                'bottomHeight': 0x12
            },
            'raspberry': {
                'sliceSound': '',
                'midY': 0.5,
                'midHeight': 0xa,
                'topHeight': 0xf,
                'bottomHeight': 0x12
            }
        }
    };
var _SETTINGS = {
    'API': {
        'Enabled': !0x0,
        'Log': {
            'Events': {
                'InitializeGame': !0x0,
                'EndGame': !0x0,
                'Level': {
                    'Begin': !0x0,
                    'End': !0x0,
                    'Win': !0x0,
                    'Lose': !0x0,
                    'Draw': !0x0
                }
            }
        }
    },
    'Ad': {
        'Mobile': {
            'Preroll': {
                'Enabled': !0x1,
                'Duration': 0x5,
                'Width': 0x12c,
                'Height': 0xfa,
                'Rotation': {
                    'Enabled': !0x1,
                    'Weight': {
                        'MobileAdInGamePreroll': 0x28,
                        'MobileAdInGamePreroll2': 0x28,
                        'MobileAdInGamePreroll3': 0x14
                    }
                }
            },
            'Header': {
                'Enabled': !0x1,
                'Duration': 0x5,
                'Width': 0x140,
                'Height': 0x32,
                'Rotation': {
                    'Enabled': !0x1,
                    'Weight': {
                        'MobileAdInGameHeader': 0x28,
                        'MobileAdInGameHeader2': 0x28,
                        'MobileAdInGameHeader3': 0x14
                    }
                }
            },
            'Footer': {
                'Enabled': !0x1,
                'Duration': 0x5,
                'Width': 0x140,
                'Height': 0x32,
                'Rotation': {
                    'Enabled': !0x1,
                    'Weight': {
                        'MobileAdInGameFooter': 0x28,
                        'MobileAdInGameFooter2': 0x28,
                        'MobileAdInGameFooter3': 0x14
                    }
                }
            },
            'End': {
                'Enabled': !0x1,
                'Duration': 0x1,
                'Width': 0x12c,
                'Height': 0xfa,
                'Rotation': {
                    'Enabled': !0x1,
                    'Weight': {
                        'MobileAdInGameEnd': 0x28,
                        'MobileAdInGameEnd2': 0x28,
                        'MobileAdInGameEnd3': 0x14
                    }
                }
            }
        }
    },
    'Language': {
        'Default': 'en'
    },
    'DeveloperBranding': {
        'Splash': {
            'Enabled': !0x0
        },
        'Logo': {
            'Enabled': !0x1,
            'Link': 'http://google.com',
            'LinkEnabled': !0x1,
            'NewWindow': !0x0,
            'Width': 0xa6,
            'Height': 0x3d
        }
    },
    'Branding': {
        'Splash': {
            'Enabled': !0x0
        },
        'Logo': {
            'Enabled': !0x0,
            'Link': 'http://google.com',
            'LinkEnabled': !0x1,
            'NewWindow': !0x0,
            'Width': 0xa6,
            'Height': 0x3d
        }
    },
    'MoreGames': {
        'Enabled': !0x0,
        'Link': '',
        'NewWindow': !0x0
    }
};
var MobileAdInGamePreroll = {
    'ad_duration': _SETTINGS['Ad']['Mobile']['Preroll']['Duration'],
    'ad_width': _SETTINGS['Ad']['Mobile']['Preroll']['Width'],
    'ad_height': _SETTINGS['Ad']['Mobile']['Preroll']['Height'],
    'ready_in': _STRINGS['Ad']['Mobile']['Preroll']['ReadyIn'],
    'loading': _STRINGS['Ad']['Mobile']['Preroll']['Loading'],
    'close': _STRINGS['Ad']['Mobile']['Preroll']['Close'] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    'Initialize': function() {
        if (_SETTINGS['Ad']['Mobile']['Preroll']['Rotation']['Enabled']) {
            var _0x4382fe = _SETTINGS['Ad']['Mobile']['Preroll']['Rotation']['Weight'],
                _0x514efa = _0x4382fe['MobileAdInGamePreroll'],
                _0x3281bf = _0x514efa + _0x4382fe['MobileAdInGamePreroll2'],
                _0x4382fe = _0x3281bf + _0x4382fe['MobileAdInGamePreroll3'],
                _0x461f25 = Math['floor'](0x64 * Math['random']());
            console['log']('seed:\x20', _0x461f25);
            _0x461f25 <= _0x514efa ? this['selectedOverlayName'] = 'MobileAdInGamePreroll' : _0x461f25 <= _0x3281bf ? this['selectedOverlayName'] = 'MobileAdInGamePreroll2' : _0x461f25 <= _0x4382fe && (this['selectedOverlayName'] = 'MobileAdInGamePreroll3');
            console['log']('Ad\x20rotating\x20preroll\x20enabled');
        } else this['selectedOverlayName'] = 'MobileAdInGamePreroll', console['log']('Ad\x20rotating\x20preroll\x20disabled');
        console['log']('selected:', this['selectedOverlayName']);
        this['overlay'] = $('#' + this['selectedOverlayName']);
        this['box'] = $('#' + this['selectedOverlayName'] + '-Box');
        this['game'] = $('#game');
        this['boxContents'] = {
            'footer': $('#' + this['selectedOverlayName'] + '-Box-Footer'),
            'header': $('#' + this['selectedOverlayName'] + '-Box-Header'),
            'close': $('#' + this['selectedOverlayName'] + '-Box-Close'),
            'body': $('#' + this['selectedOverlayName'] + '-Box-Body')
        };
        this['box']['width'](this['ad_width']);
        this['box']['height'](this['ad_height']);
        this['box']['css']('left', (this['overlay']['width']() - this['box']['width']()) / 0x2);
        this['box']['css']('top', (this['overlay']['height']() - this['box']['height']() - this['boxContents']['header']['height']() - this['boxContents']['footer']['height']()) / 0x2);
        this['overlay']['show'](this['Timer'](this['ad_duration']));
    },
    'Timer': function(_0x9b5665) {
        var _0x9710d9 = _0x9b5665,
            _0x8bd005 = setInterval(function() {
                MobileAdInGamePreroll['boxContents']['header']['text'](MobileAdInGamePreroll['ready_in'] + _0x9710d9 + '...');
                MobileAdInGamePreroll['boxContents']['footer']['text'](MobileAdInGamePreroll['loading']);
                _0x9710d9--;
                0x0 > _0x9710d9 && (clearInterval(_0x8bd005), MobileAdInGamePreroll['boxContents']['close']['css']('left', MobileAdInGamePreroll['boxContents']['body']['width']() - 0x17), MobileAdInGamePreroll['boxContents']['close']['show'](), MobileAdInGamePreroll['boxContents']['header']['html'](MobileAdInGamePreroll['close']), MobileAdInGamePreroll['boxContents']['footer']['text'](''));
            }, 0x3e8);
    },
    'Close': function() {
        this['boxContents']['close']['hide']();
        this['overlay']['hide']();
    }
};
var MobileAdInGameHeader = {
    'ad_duration': _SETTINGS['Ad']['Mobile']['Header']['Duration'],
    'ad_width': _SETTINGS['Ad']['Mobile']['Header']['Width'],
    'ad_height': _SETTINGS['Ad']['Mobile']['Header']['Height'],
    'Initialize': function() {
        if (_SETTINGS['Ad']['Mobile']['Header']['Rotation']['Enabled']) {
            var _0x365657 = _SETTINGS['Ad']['Mobile']['Header']['Rotation']['Weight'],
                _0x3105df = _0x365657['MobileAdInGameHeader'],
                _0x3d1260 = _0x3105df + _0x365657['MobileAdInGameHeader2'],
                _0x365657 = _0x3d1260 + _0x365657['MobileAdInGameHeader3'],
                _0x4349a6 = Math['floor'](0x64 * Math['random']());
            console['log']('seed:\x20', _0x4349a6);
            _0x4349a6 <= _0x3105df ? this['selectedOverlayName'] = 'MobileAdInGameHeader' : _0x4349a6 <= _0x3d1260 ? this['selectedOverlayName'] = 'MobileAdInGameHeader2' : _0x4349a6 <= _0x365657 && (this['selectedOverlayName'] = 'MobileAdInGameHeader3');
            console['log']('Ad\x20rotating\x20header\x20enabled');
        } else this['selectedOverlayName'] = 'MobileAdInGameHeader', console['log']('Ad\x20rotating\x20header\x20disabled');
        this['div'] = $('#' + this['selectedOverlayName']);
        this['game'] = $('#game');
        this['div']['width'](this['ad_width']);
        this['div']['height'](this['ad_height']);
        this['div']['css']('left', this['game']['position']()['left'] + (this['game']['width']() - this['div']['width']()) / 0x2);
        this['div']['css']('top', 0x0);
        this['div']['show'](this['Timer'](this['ad_duration']));
    },
    'Timer': function(_0x10f3c9) {
        var _0x384d45 = setInterval(function() {
            _0x10f3c9--;
            0x0 > _0x10f3c9 && (MobileAdInGameHeader['div']['hide'](), clearInterval(_0x384d45));
        }, 0x3e8);
    }
};
var MobileAdInGameFooter = {
    'ad_duration': _SETTINGS['Ad']['Mobile']['Footer']['Duration'],
    'ad_width': _SETTINGS['Ad']['Mobile']['Footer']['Width'],
    'ad_height': _SETTINGS['Ad']['Mobile']['Footer']['Height'],
    'Initialize': function() {
        if (_SETTINGS['Ad']['Mobile']['Footer']['Rotation']['Enabled']) {
            var _0x471006 = _SETTINGS['Ad']['Mobile']['Footer']['Rotation']['Weight'],
                _0x149bc0 = _0x471006['MobileAdInGameFooter'],
                _0x2f1451 = _0x149bc0 + _0x471006['MobileAdInGameFooter2'],
                _0x471006 = _0x2f1451 + _0x471006['MobileAdInGameFooter3'],
                _0x3ee7cc = Math['floor'](0x64 * Math['random']());
            console['log']('seed:\x20', _0x3ee7cc);
            _0x3ee7cc <= _0x149bc0 ? this['selectedOverlayName'] = 'MobileAdInGameFooter' : _0x3ee7cc <= _0x2f1451 ? this['selectedOverlayName'] = 'MobileAdInGameFooter2' : _0x3ee7cc <= _0x471006 && (this['selectedOverlayName'] = 'MobileAdInGameFooter3');
            console['log']('Ad\x20rotating\x20footer\x20enabled');
        } else this['selectedOverlayName'] = 'MobileAdInGameFooter', console['log']('Ad\x20rotating\x20footer\x20disabled');
        this['div'] = $('#' + this['selectedOverlayName']);
        this['game'] = $('#game');
        this['div']['width'](this['ad_width']);
        this['div']['height'](this['ad_height']);
        this['div']['css']('left', this['game']['position']()['left'] + (this['game']['width']() - this['div']['width']()) / 0x2);
        this['div']['css']('top', this['game']['height']() - this['div']['height']() - 0x5);
        this['div']['show'](this['Timer'](this['ad_duration']));
    },
    'Timer': function(_0x408670) {
        var _0x587a27 = setInterval(function() {
            _0x408670--;
            0x0 > _0x408670 && (MobileAdInGameFooter['div']['hide'](), clearInterval(_0x587a27));
        }, 0x3e8);
    }
};
var MobileAdInGameEnd = {
    'ad_duration': _SETTINGS['Ad']['Mobile']['End']['Duration'],
    'ad_width': _SETTINGS['Ad']['Mobile']['End']['Width'],
    'ad_height': _SETTINGS['Ad']['Mobile']['End']['Height'],
    'ready_in': _STRINGS['Ad']['Mobile']['End']['ReadyIn'],
    'loading': _STRINGS['Ad']['Mobile']['End']['Loading'],
    'close': _STRINGS['Ad']['Mobile']['End']['Close'] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    'Initialize': function() {
        if (_SETTINGS['Ad']['Mobile']['End']['Rotation']['Enabled']) {
            var _0x27fe3a = _SETTINGS['Ad']['Mobile']['End']['Rotation']['Weight'],
                _0x50a7e2 = _0x27fe3a['MobileAdInGameEnd'],
                _0x5a8202 = _0x50a7e2 + _0x27fe3a['MobileAdInGameEnd2'],
                _0x27fe3a = _0x5a8202 + _0x27fe3a['MobileAdInGameEnd3'],
                _0x56ecf5 = Math['floor'](0x64 * Math['random']());
            console['log']('seed:\x20', _0x56ecf5);
            _0x56ecf5 <= _0x50a7e2 ? this['selectedOverlayName'] = 'MobileAdInGameEnd' : _0x56ecf5 <= _0x5a8202 ? this['selectedOverlayName'] = 'MobileAdInGameEnd2' : _0x56ecf5 <= _0x27fe3a && (this['selectedOverlayName'] = 'MobileAdInGameEnd3');
            console['log']('Ad\x20rotating\x20end\x20enabled');
        } else this['selectedOverlayName'] = 'MobileAdInGameEnd', console['log']('Ad\x20rotating\x20end\x20disabled');
        console['log']('selected:', this['selectedOverlayName']);
        this['overlay'] = $('#' + this['selectedOverlayName']);
        this['box'] = $('#' + this['selectedOverlayName'] + '-Box');
        this['game'] = $('#game');
        this['boxContents'] = {
            'footer': $('#' + this['selectedOverlayName'] + '-Box-Footer'),
            'header': $('#' + this['selectedOverlayName'] + '-Box-Header'),
            'close': $('#' + this['selectedOverlayName'] + '-Box-Close'),
            'body': $('#' + this['selectedOverlayName'] + '-Box-Body')
        };
        this['box']['width'](this['ad_width']);
        this['box']['height'](this['ad_height']);
        this['box']['css']('left', (this['overlay']['width']() - this['box']['width']()) / 0x2);
        this['box']['css']('top', (this['overlay']['height']() - this['box']['height']() - this['boxContents']['header']['height']() - this['boxContents']['footer']['height']()) / 0x2);
        this['overlay']['show'](this['Timer'](this['ad_duration']));
    },
    'Timer': function(_0x50b479) {
        var _0x433a97 = _0x50b479,
            _0x4a86f7 = setInterval(function() {
                MobileAdInGameEnd['boxContents']['header']['text'](MobileAdInGameEnd['ready_in'] + _0x433a97 + '...');
                MobileAdInGameEnd['boxContents']['footer']['text'](MobileAdInGameEnd['loading']);
                _0x433a97--;
                0x0 > _0x433a97 && (clearInterval(_0x4a86f7), MobileAdInGameEnd['boxContents']['close']['css']('left', MobileAdInGameEnd['boxContents']['body']['width']() - 0x17), MobileAdInGameEnd['boxContents']['close']['show'](), MobileAdInGameEnd['boxContents']['header']['html'](MobileAdInGameEnd['close']), MobileAdInGameEnd['boxContents']['footer']['text'](''));
            }, 0x3e8);
    },
    'Close': function() {
        this['boxContents']['close']['hide']();
        this['overlay']['hide']();
    }
};
! function(_0x4d32c6, _0x15b792) {
    'object' == typeof module && 'object' == typeof module['exports'] ? module['exports'] = _0x4d32c6['document'] ? _0x15b792(_0x4d32c6, !0x0) : function(_0x2282e7) {
        if (!_0x2282e7['document']) throw Error('jQuery\x20requires\x20a\x20window\x20with\x20a\x20document');
        return _0x15b792(_0x2282e7);
    } : _0x15b792(_0x4d32c6);
}('undefined' != typeof window ? window : this, function(_0x51f4a4, _0xa4c748) {
    function _0x5badfd(_0x57a713, _0x4676b0) {
        _0x4676b0 = _0x4676b0 || _0x1b3fe3;
        var _0x57b420 = _0x4676b0['createElement']('script');
        _0x57b420['text'] = _0x57a713;
        _0x4676b0['head']['appendChild'](_0x57b420)['parentNode']['removeChild'](_0x57b420);
    }

    function _0x4b07cc(_0x1e15b5) {
        var _0x5614f5 = !!_0x1e15b5 && 'length' in _0x1e15b5 && _0x1e15b5['length'],
            _0xdd068d = _0x263ab8['type'](_0x1e15b5);
        return 'function' !== _0xdd068d && !_0x263ab8['isWindow'](_0x1e15b5) && ('array' === _0xdd068d || 0x0 === _0x5614f5 || 'number' == typeof _0x5614f5 && 0x0 < _0x5614f5 && _0x5614f5 - 0x1 in _0x1e15b5);
    }

    function _0x3b9113(_0x189c1b, _0x4f017d) {
        return _0x189c1b['nodeName'] && _0x189c1b['nodeName']['toLowerCase']() === _0x4f017d['toLowerCase']();
    }

    function _0xf45094(_0x37777e, _0x11761c, _0x4aff93) {
        return _0x263ab8['isFunction'](_0x11761c) ? _0x263ab8['grep'](_0x37777e, function(_0x15792e, _0x59f06b) {
            return !!_0x11761c['call'](_0x15792e, _0x59f06b, _0x15792e) !== _0x4aff93;
        }) : _0x11761c['nodeType'] ? _0x263ab8['grep'](_0x37777e, function(_0x5c8376) {
            return _0x5c8376 === _0x11761c !== _0x4aff93;
        }) : 'string' != typeof _0x11761c ? _0x263ab8['grep'](_0x37777e, function(_0x42c0d4) {
            return -0x1 < _0x10e586['call'](_0x11761c, _0x42c0d4) !== _0x4aff93;
        }) : _0x14c83d['test'](_0x11761c) ? _0x263ab8['filter'](_0x11761c, _0x37777e, _0x4aff93) : (_0x11761c = _0x263ab8['filter'](_0x11761c, _0x37777e), _0x263ab8['grep'](_0x37777e, function(_0x15fefe) {
            return -0x1 < _0x10e586['call'](_0x11761c, _0x15fefe) !== _0x4aff93 && 0x1 === _0x15fefe['nodeType'];
        }));
    }

    function _0x350c11(_0x13025f, _0x1aa6af) {
        for (;
            (_0x13025f = _0x13025f[_0x1aa6af]) && 0x1 !== _0x13025f['nodeType'];);
        return _0x13025f;
    }

    function _0x33ff4a(_0x2b5b6a) {
        return _0x2b5b6a;
    }

    function _0xd81d7d(_0x2675cf) {
        throw _0x2675cf;
    }

    function _0x1521d8(_0x19ac4a, _0x314435, _0x477381, _0x1a12e9) {
        var _0x1ad571;
        try {
            _0x19ac4a && _0x263ab8['isFunction'](_0x1ad571 = _0x19ac4a['promise']) ? _0x1ad571['call'](_0x19ac4a)['done'](_0x314435)['fail'](_0x477381) : _0x19ac4a && _0x263ab8['isFunction'](_0x1ad571 = _0x19ac4a['then']) ? _0x1ad571['call'](_0x19ac4a, _0x314435, _0x477381) : _0x314435['apply'](void 0x0, [_0x19ac4a]['slice'](_0x1a12e9));
        } catch (_0x5d6b4b) {
            _0x477381['apply'](void 0x0, [_0x5d6b4b]);
        }
    }

    function _0x1e3a60() {
        _0x1b3fe3['removeEventListener']('DOMContentLoaded', _0x1e3a60);
        _0x51f4a4['removeEventListener']('load', _0x1e3a60);
        _0x263ab8['ready']();
    }

    function _0x270555() {
        this['expando'] = _0x263ab8['expando'] + _0x270555['uid']++;
    }

    function _0xfa37b1(_0x3be250, _0x40c73d, _0x1a3fda) {
        var _0x5cb55f;
        if (void 0x0 === _0x1a3fda && 0x1 === _0x3be250['nodeType'])
            if (_0x5cb55f = 'data-' + _0x40c73d['replace'](_0xe8fc3c, '-$&')['toLowerCase'](), _0x1a3fda = _0x3be250['getAttribute'](_0x5cb55f), 'string' == typeof _0x1a3fda) {
                try {
                    _0x1a3fda = 'true' === _0x1a3fda || 'false' !== _0x1a3fda && ('null' === _0x1a3fda ? null : _0x1a3fda === +_0x1a3fda + '' ? +_0x1a3fda : _0x1099d2['test'](_0x1a3fda) ? JSON['parse'](_0x1a3fda) : _0x1a3fda);
                } catch (_0x1e438e) {}
                _0x152a44['set'](_0x3be250, _0x40c73d, _0x1a3fda);
            } else _0x1a3fda = void 0x0;
        return _0x1a3fda;
    }

    function _0x58220b(_0x23b5a2, _0x34dc83, _0x26c556, _0x379660) {
        var _0x8c079f, _0x5c8a03 = 0x1,
            _0x4ff41e = 0x14,
            _0x4821b6 = _0x379660 ? function() {
                return _0x379660['cur']();
            } : function() {
                return _0x263ab8['css'](_0x23b5a2, _0x34dc83, '');
            },
            _0x130bc0 = _0x4821b6(),
            _0x14fb80 = _0x26c556 && _0x26c556[0x3] || (_0x263ab8['cssNumber'][_0x34dc83] ? '' : 'px'),
            _0x23b633 = (_0x263ab8['cssNumber'][_0x34dc83] || 'px' !== _0x14fb80 && +_0x130bc0) && _0x2200e4['exec'](_0x263ab8['css'](_0x23b5a2, _0x34dc83));
        if (_0x23b633 && _0x23b633[0x3] !== _0x14fb80) {
            _0x14fb80 = _0x14fb80 || _0x23b633[0x3];
            _0x26c556 = _0x26c556 || [];
            _0x23b633 = +_0x130bc0 || 0x1;
            do _0x5c8a03 = _0x5c8a03 || '.5', _0x23b633 /= _0x5c8a03, _0x263ab8['style'](_0x23b5a2, _0x34dc83, _0x23b633 + _0x14fb80); while (_0x5c8a03 !== (_0x5c8a03 = _0x4821b6() / _0x130bc0) && 0x1 !== _0x5c8a03 && --_0x4ff41e);
        }
        return _0x26c556 && (_0x23b633 = +_0x23b633 || +_0x130bc0 || 0x0, _0x8c079f = _0x26c556[0x1] ? _0x23b633 + (_0x26c556[0x1] + 0x1) * _0x26c556[0x2] : +_0x26c556[0x2], _0x379660 && (_0x379660['unit'] = _0x14fb80, _0x379660['start'] = _0x23b633, _0x379660['end'] = _0x8c079f)), _0x8c079f;
    }

    function _0x284a35(_0x13e53e, _0x90f9d8) {
        for (var _0x31d7eb, _0xdcad87, _0x394643 = [], _0x54d33f = 0x0, _0x510f39 = _0x13e53e['length']; _0x54d33f < _0x510f39; _0x54d33f++)
            if (_0xdcad87 = _0x13e53e[_0x54d33f], _0xdcad87['style'])
                if (_0x31d7eb = _0xdcad87['style']['display'], _0x90f9d8) {
                    if ('none' === _0x31d7eb && (_0x394643[_0x54d33f] = _0x168075['get'](_0xdcad87, 'display') || null, _0x394643[_0x54d33f] || (_0xdcad87['style']['display'] = '')), '' === _0xdcad87['style']['display'] && _0x24cab5(_0xdcad87)) {
                        _0x31d7eb = _0x394643;
                        var _0x502029 = _0x54d33f,
                            _0xcf367a, _0x365066 = void 0x0;
                        _0xcf367a = _0xdcad87['ownerDocument'];
                        var _0xadecc6 = _0xdcad87['nodeName'];
                        _0xcf367a = (_0xdcad87 = _0x4e4413[_0xadecc6]) ? _0xdcad87 : (_0x365066 = _0xcf367a['body']['appendChild'](_0xcf367a['createElement'](_0xadecc6)), _0xdcad87 = _0x263ab8['css'](_0x365066, 'display'), _0x365066['parentNode']['removeChild'](_0x365066), 'none' === _0xdcad87 && (_0xdcad87 = 'block'), _0x4e4413[_0xadecc6] = _0xdcad87, _0xdcad87);
                        _0x31d7eb[_0x502029] = _0xcf367a;
                    }
                } else 'none' !== _0x31d7eb && (_0x394643[_0x54d33f] = 'none', _0x168075['set'](_0xdcad87, 'display', _0x31d7eb));
        for (_0x54d33f = 0x0; _0x54d33f < _0x510f39; _0x54d33f++) null != _0x394643[_0x54d33f] && (_0x13e53e[_0x54d33f]['style']['display'] = _0x394643[_0x54d33f]);
        return _0x13e53e;
    }

    function _0x21fb63(_0x5f073f, _0x2c1366) {
        var _0x58423f;
        return _0x58423f = 'undefined' != typeof _0x5f073f['getElementsByTagName'] ? _0x5f073f['getElementsByTagName'](_0x2c1366 || '*') : 'undefined' != typeof _0x5f073f['querySelectorAll'] ? _0x5f073f['querySelectorAll'](_0x2c1366 || '*') : [], void 0x0 === _0x2c1366 || _0x2c1366 && _0x3b9113(_0x5f073f, _0x2c1366) ? _0x263ab8['merge']([_0x5f073f], _0x58423f) : _0x58423f;
    }

    function _0x3bab61(_0x263cd3, _0x449204) {
        for (var _0x53e63f = 0x0, _0x17d9e6 = _0x263cd3['length']; _0x53e63f < _0x17d9e6; _0x53e63f++) _0x168075['set'](_0x263cd3[_0x53e63f], 'globalEval', !_0x449204 || _0x168075['get'](_0x449204[_0x53e63f], 'globalEval'));
    }

    function _0x5e4e05(_0x5f0089, _0x353e85, _0x4a1117, _0x39279a, _0x5d98cf) {
        for (var _0x5f0fd8, _0x2c7ce1, _0x3683b1, _0x3645f3, _0x5e4954 = _0x353e85['createDocumentFragment'](), _0x162542 = [], _0x512119 = 0x0, _0xfaf6e1 = _0x5f0089['length']; _0x512119 < _0xfaf6e1; _0x512119++)
            if (_0x5f0fd8 = _0x5f0089[_0x512119], _0x5f0fd8 || 0x0 === _0x5f0fd8)
                if ('object' === _0x263ab8['type'](_0x5f0fd8)) _0x263ab8['merge'](_0x162542, _0x5f0fd8['nodeType'] ? [_0x5f0fd8] : _0x5f0fd8);
                else if (_0x5bb0d4['test'](_0x5f0fd8)) {
            _0x2c7ce1 = _0x2c7ce1 || _0x5e4954['appendChild'](_0x353e85['createElement']('div'));
            _0x3683b1 = (_0xa9f0d8['exec'](_0x5f0fd8) || ['', ''])[0x1]['toLowerCase']();
            _0x3683b1 = _0x244118[_0x3683b1] || _0x244118['_default'];
            _0x2c7ce1['innerHTML'] = _0x3683b1[0x1] + _0x263ab8['htmlPrefilter'](_0x5f0fd8) + _0x3683b1[0x2];
            for (_0x3683b1 = _0x3683b1[0x0]; _0x3683b1--;) _0x2c7ce1 = _0x2c7ce1['lastChild'];
            _0x263ab8['merge'](_0x162542, _0x2c7ce1['childNodes']);
            _0x2c7ce1 = _0x5e4954['firstChild'];
            _0x2c7ce1['textContent'] = '';
        } else _0x162542['push'](_0x353e85['createTextNode'](_0x5f0fd8));
        _0x5e4954['textContent'] = '';
        for (_0x512119 = 0x0; _0x5f0fd8 = _0x162542[_0x512119++];)
            if (_0x39279a && -0x1 < _0x263ab8['inArray'](_0x5f0fd8, _0x39279a)) _0x5d98cf && _0x5d98cf['push'](_0x5f0fd8);
            else if (_0x3645f3 = _0x263ab8['contains'](_0x5f0fd8['ownerDocument'], _0x5f0fd8), _0x2c7ce1 = _0x21fb63(_0x5e4954['appendChild'](_0x5f0fd8), 'script'), _0x3645f3 && _0x3bab61(_0x2c7ce1), _0x4a1117)
            for (_0x3683b1 = 0x0; _0x5f0fd8 = _0x2c7ce1[_0x3683b1++];) _0x285fcf['test'](_0x5f0fd8['type'] || '') && _0x4a1117['push'](_0x5f0fd8);
        return _0x5e4954;
    }

    function _0x5bcab9() {
        return !0x0;
    }

    function _0x497478() {
        return !0x1;
    }

    function _0x56e67a() {
        try {
            return _0x1b3fe3['activeElement'];
        } catch (_0x36a729) {}
    }

    function _0x1d8c37(_0x25c812, _0x15ca6b, _0x129ba1, _0x553b29, _0x31cd0e, _0x1fb16b) {
        var _0x36c02c, _0x4bc37c;
        if ('object' == typeof _0x15ca6b) {
            'string' != typeof _0x129ba1 && (_0x553b29 = _0x553b29 || _0x129ba1, _0x129ba1 = void 0x0);
            for (_0x4bc37c in _0x15ca6b) _0x1d8c37(_0x25c812, _0x4bc37c, _0x129ba1, _0x553b29, _0x15ca6b[_0x4bc37c], _0x1fb16b);
            return _0x25c812;
        }
        if (null == _0x553b29 && null == _0x31cd0e ? (_0x31cd0e = _0x129ba1, _0x553b29 = _0x129ba1 = void 0x0) : null == _0x31cd0e && ('string' == typeof _0x129ba1 ? (_0x31cd0e = _0x553b29, _0x553b29 = void 0x0) : (_0x31cd0e = _0x553b29, _0x553b29 = _0x129ba1, _0x129ba1 = void 0x0)), !0x1 === _0x31cd0e) _0x31cd0e = _0x497478;
        else if (!_0x31cd0e) return _0x25c812;
        return 0x1 === _0x1fb16b && (_0x36c02c = _0x31cd0e, _0x31cd0e = function(_0x3b8d39) {
            return _0x263ab8()['off'](_0x3b8d39), _0x36c02c['apply'](this, arguments);
        }, _0x31cd0e['guid'] = _0x36c02c['guid'] || (_0x36c02c['guid'] = _0x263ab8['guid']++)), _0x25c812['each'](function() {
            _0x263ab8['event']['add'](this, _0x15ca6b, _0x31cd0e, _0x553b29, _0x129ba1);
        });
    }

    function _0x5b1017(_0x4fc4e5, _0x193cfb) {
        return _0x3b9113(_0x4fc4e5, 'table') && _0x3b9113(0xb !== _0x193cfb['nodeType'] ? _0x193cfb : _0x193cfb['firstChild'], 'tr') ? _0x263ab8('>tbody', _0x4fc4e5)[0x0] || _0x4fc4e5 : _0x4fc4e5;
    }

    function _0x3da63d(_0x563148) {
        return _0x563148['type'] = (null !== _0x563148['getAttribute']('type')) + '/' + _0x563148['type'], _0x563148;
    }

    function _0xbb30da(_0x71f0ef) {
        var _0x908687 = _0x5a3e2b['exec'](_0x71f0ef['type']);
        return _0x908687 ? _0x71f0ef['type'] = _0x908687[0x1] : _0x71f0ef['removeAttribute']('type'), _0x71f0ef;
    }

    function _0x5246ea(_0x3efad9, _0x140bd6) {
        var _0x527a6e, _0xa4a0fb, _0x239cc5, _0x3b043c, _0xa7db35, _0xa2cf6c;
        if (0x1 === _0x140bd6['nodeType']) {
            if (_0x168075['hasData'](_0x3efad9) && (_0x527a6e = _0x168075['access'](_0x3efad9), _0xa4a0fb = _0x168075['set'](_0x140bd6, _0x527a6e), _0xa2cf6c = _0x527a6e['events']))
                for (_0x239cc5 in (delete _0xa4a0fb['handle'], _0xa4a0fb['events'] = {}, _0xa2cf6c)) {
                    _0x527a6e = 0x0;
                    for (_0xa4a0fb = _0xa2cf6c[_0x239cc5]['length']; _0x527a6e < _0xa4a0fb; _0x527a6e++) _0x263ab8['event']['add'](_0x140bd6, _0x239cc5, _0xa2cf6c[_0x239cc5][_0x527a6e]);
                }
            _0x152a44['hasData'](_0x3efad9) && (_0x3b043c = _0x152a44['access'](_0x3efad9), _0xa7db35 = _0x263ab8['extend']({}, _0x3b043c), _0x152a44['set'](_0x140bd6, _0xa7db35));
        }
    }

    function _0x380e8b(_0x24ef03, _0x46af8d, _0x241b10, _0x3b9d12) {
        _0x46af8d = _0x36f7af['apply']([], _0x46af8d);
        var _0x1cef7b, _0x4b5136, _0x38c976, _0x3f3330, _0xabcd61 = 0x0,
            _0x5b8636 = _0x24ef03['length'],
            _0x521345 = _0x5b8636 - 0x1,
            _0x3c6dbf = _0x46af8d[0x0],
            _0x135ac8 = _0x263ab8['isFunction'](_0x3c6dbf);
        if (_0x135ac8 || 0x1 < _0x5b8636 && 'string' == typeof _0x3c6dbf && !_0x187c89['checkClone'] && _0x214899['test'](_0x3c6dbf)) return _0x24ef03['each'](function(_0x4b66c1) {
            var _0x9451c1 = _0x24ef03['eq'](_0x4b66c1);
            _0x135ac8 && (_0x46af8d[0x0] = _0x3c6dbf['call'](this, _0x4b66c1, _0x9451c1['html']()));
            _0x380e8b(_0x9451c1, _0x46af8d, _0x241b10, _0x3b9d12);
        });
        if (_0x5b8636 && (_0x1cef7b = _0x5e4e05(_0x46af8d, _0x24ef03[0x0]['ownerDocument'], !0x1, _0x24ef03, _0x3b9d12), _0x4b5136 = _0x1cef7b['firstChild'], 0x1 === _0x1cef7b['childNodes']['length'] && (_0x1cef7b = _0x4b5136), _0x4b5136 || _0x3b9d12)) {
            _0x4b5136 = _0x263ab8['map'](_0x21fb63(_0x1cef7b, 'script'), _0x3da63d);
            for (_0x38c976 = _0x4b5136['length']; _0xabcd61 < _0x5b8636; _0xabcd61++) _0x3f3330 = _0x1cef7b, _0xabcd61 !== _0x521345 && (_0x3f3330 = _0x263ab8['clone'](_0x3f3330, !0x0, !0x0), _0x38c976 && _0x263ab8['merge'](_0x4b5136, _0x21fb63(_0x3f3330, 'script'))), _0x241b10['call'](_0x24ef03[_0xabcd61], _0x3f3330, _0xabcd61);
            if (_0x38c976) {
                _0x1cef7b = _0x4b5136[_0x4b5136['length'] - 0x1]['ownerDocument'];
                _0x263ab8['map'](_0x4b5136, _0xbb30da);
                for (_0xabcd61 = 0x0; _0xabcd61 < _0x38c976; _0xabcd61++) _0x3f3330 = _0x4b5136[_0xabcd61], _0x285fcf['test'](_0x3f3330['type'] || '') && !_0x168075['access'](_0x3f3330, 'globalEval') && _0x263ab8['contains'](_0x1cef7b, _0x3f3330) && (_0x3f3330['src'] ? _0x263ab8['_evalUrl'] && _0x263ab8['_evalUrl'](_0x3f3330['src']) : _0x5badfd(_0x3f3330['textContent']['replace'](_0x6f99a, ''), _0x1cef7b));
            }
        }
        return _0x24ef03;
    }

    function _0x7859a4(_0x169844, _0x49ada1, _0x12fcc0) {
        for (var _0x257e52 = _0x49ada1 ? _0x263ab8['filter'](_0x49ada1, _0x169844) : _0x169844, _0x1c1bd9 = 0x0; null != (_0x49ada1 = _0x257e52[_0x1c1bd9]); _0x1c1bd9++) _0x12fcc0 || 0x1 !== _0x49ada1['nodeType'] || _0x263ab8['cleanData'](_0x21fb63(_0x49ada1)), _0x49ada1['parentNode'] && (_0x12fcc0 && _0x263ab8['contains'](_0x49ada1['ownerDocument'], _0x49ada1) && _0x3bab61(_0x21fb63(_0x49ada1, 'script')), _0x49ada1['parentNode']['removeChild'](_0x49ada1));
        return _0x169844;
    }

    function _0x17c0fc(_0x3f98c5, _0x9fa3fe, _0x571a48) {
        var _0x4e6e4f, _0x4aca93, _0x148898, _0x22540f, _0x4599d0 = _0x3f98c5['style'];
        return _0x571a48 = _0x571a48 || _0x92159(_0x3f98c5), _0x571a48 && (_0x22540f = _0x571a48['getPropertyValue'](_0x9fa3fe) || _0x571a48[_0x9fa3fe], '' !== _0x22540f || _0x263ab8['contains'](_0x3f98c5['ownerDocument'], _0x3f98c5) || (_0x22540f = _0x263ab8['style'](_0x3f98c5, _0x9fa3fe)), !_0x187c89['pixelMarginRight']() && _0x1ada50['test'](_0x22540f) && _0x42dde7['test'](_0x9fa3fe) && (_0x4e6e4f = _0x4599d0['width'], _0x4aca93 = _0x4599d0['minWidth'], _0x148898 = _0x4599d0['maxWidth'], _0x4599d0['minWidth'] = _0x4599d0['maxWidth'] = _0x4599d0['width'] = _0x22540f, _0x22540f = _0x571a48['width'], _0x4599d0['width'] = _0x4e6e4f, _0x4599d0['minWidth'] = _0x4aca93, _0x4599d0['maxWidth'] = _0x148898)), void 0x0 !== _0x22540f ? _0x22540f + '' : _0x22540f;
    }

    function _0x1e461f(_0x49261, _0x4812c5) {
        return {
            'get': function() {
                return _0x49261() ? void delete this['get'] : (this['get'] = _0x4812c5)['apply'](this, arguments);
            }
        };
    }

    function _0x2f220c(_0x59122a) {
        var _0xb858c3 = _0x263ab8['cssProps'][_0x59122a];
        if (!_0xb858c3) {
            var _0xb858c3 = _0x263ab8['cssProps'],
                _0x795b04;
            _0x2c22e4: if (_0x795b04 = _0x59122a, !(_0x795b04 in _0x47741c)) {
                for (var _0x56d1a0 = _0x795b04[0x0]['toUpperCase']() + _0x795b04['slice'](0x1), _0x25c4cd = _0x17e5f4['length']; _0x25c4cd--;)
                    if (_0x795b04 = _0x17e5f4[_0x25c4cd] + _0x56d1a0, _0x795b04 in _0x47741c) break _0x2c22e4;
                _0x795b04 = void 0x0;
            } _0xb858c3 = _0xb858c3[_0x59122a] = _0x795b04 || _0x59122a;
        }
        return _0xb858c3;
    }

    function _0x217695(_0x5b4ba1, _0x30aca0, _0x292181) {
        return (_0x5b4ba1 = _0x2200e4['exec'](_0x30aca0)) ? Math['max'](0x0, _0x5b4ba1[0x2] - (_0x292181 || 0x0)) + (_0x5b4ba1[0x3] || 'px') : _0x30aca0;
    }

    function _0x24bdfd(_0x23b9ea, _0x455f99, _0x545681, _0x3967a9, _0x2f0325) {
        var _0x3c5d86 = 0x0;
        for (_0x455f99 = _0x545681 === (_0x3967a9 ? 'border' : 'content') ? 0x4 : 'width' === _0x455f99 ? 0x1 : 0x0; 0x4 > _0x455f99; _0x455f99 += 0x2) 'margin' === _0x545681 && (_0x3c5d86 += _0x263ab8['css'](_0x23b9ea, _0x545681 + _0x598448[_0x455f99], !0x0, _0x2f0325)), _0x3967a9 ? ('content' === _0x545681 && (_0x3c5d86 -= _0x263ab8['css'](_0x23b9ea, 'padding' + _0x598448[_0x455f99], !0x0, _0x2f0325)), 'margin' !== _0x545681 && (_0x3c5d86 -= _0x263ab8['css'](_0x23b9ea, 'border' + _0x598448[_0x455f99] + 'Width', !0x0, _0x2f0325))) : (_0x3c5d86 += _0x263ab8['css'](_0x23b9ea, 'padding' + _0x598448[_0x455f99], !0x0, _0x2f0325), 'padding' !== _0x545681 && (_0x3c5d86 += _0x263ab8['css'](_0x23b9ea, 'border' + _0x598448[_0x455f99] + 'Width', !0x0, _0x2f0325)));
        return _0x3c5d86;
    }

    function _0x318165(_0x4acebc, _0x265c3b, _0x5c045b) {
        var _0x2ff6e7, _0x4689aa = _0x92159(_0x4acebc),
            _0x51f6db = _0x17c0fc(_0x4acebc, _0x265c3b, _0x4689aa),
            _0x5d2eae = 'border-box' === _0x263ab8['css'](_0x4acebc, 'boxSizing', !0x1, _0x4689aa);
        return _0x1ada50['test'](_0x51f6db) ? _0x51f6db : (_0x2ff6e7 = _0x5d2eae && (_0x187c89['boxSizingReliable']() || _0x51f6db === _0x4acebc['style'][_0x265c3b]), 'auto' === _0x51f6db && (_0x51f6db = _0x4acebc['offset' + _0x265c3b[0x0]['toUpperCase']() + _0x265c3b['slice'](0x1)]), _0x51f6db = parseFloat(_0x51f6db) || 0x0, _0x51f6db + _0x24bdfd(_0x4acebc, _0x265c3b, _0x5c045b || (_0x5d2eae ? 'border' : 'content'), _0x2ff6e7, _0x4689aa) + 'px');
    }

    function _0x5c2115(_0x4566f2, _0x4e1ad1, _0x17c35b, _0x4e6c66, _0x121243) {
        return new _0x5c2115['prototype']['init'](_0x4566f2, _0x4e1ad1, _0x17c35b, _0x4e6c66, _0x121243);
    }

    function _0x32440c() {
        _0x3d2dba && (!0x1 === _0x1b3fe3['hidden'] && _0x51f4a4['requestAnimationFrame'] ? _0x51f4a4['requestAnimationFrame'](_0x32440c) : _0x51f4a4['setTimeout'](_0x32440c, _0x263ab8['fx']['interval']), _0x263ab8['fx']['tick']());
    }

    function _0x32dc32() {
        return _0x51f4a4['setTimeout'](function() {
            _0x534d7f = void 0x0;
        }), _0x534d7f = _0x263ab8['now']();
    }

    function _0x4f39f8(_0xcf542, _0x2d0c39) {
        var _0x4ce926, _0x1784c5 = 0x0,
            _0x14713d = {
                'height': _0xcf542
            };
        for (_0x2d0c39 = _0x2d0c39 ? 0x1 : 0x0; 0x4 > _0x1784c5; _0x1784c5 += 0x2 - _0x2d0c39) _0x4ce926 = _0x598448[_0x1784c5], _0x14713d['margin' + _0x4ce926] = _0x14713d['padding' + _0x4ce926] = _0xcf542;
        return _0x2d0c39 && (_0x14713d['opacity'] = _0x14713d['width'] = _0xcf542), _0x14713d;
    }

    function _0x4cfa1c(_0x4304b7, _0x2a33b3, _0x2cdac7) {
        for (var _0x1870bb, _0x3b2d14 = (_0x49af3b['tweeners'][_0x2a33b3] || [])['concat'](_0x49af3b['tweeners']['*']), _0x33ccda = 0x0, _0x3795fa = _0x3b2d14['length']; _0x33ccda < _0x3795fa; _0x33ccda++)
            if (_0x1870bb = _0x3b2d14[_0x33ccda]['call'](_0x2cdac7, _0x2a33b3, _0x4304b7)) return _0x1870bb;
    }

    function _0x49af3b(_0x5109d3, _0x4efcbb, _0x59f877) {
        var _0x170f9d, _0x2d62f8, _0x1a8ad1 = 0x0,
            _0x317991 = _0x49af3b['prefilters']['length'],
            _0x5cebbe = _0x263ab8['Deferred']()['always'](function() {
                delete _0xbd3eb2['elem'];
            }),
            _0xbd3eb2 = function() {
                if (_0x2d62f8) return !0x1;
                for (var _0x49dbd4 = _0x534d7f || _0x32dc32(), _0x49dbd4 = Math['max'](0x0, _0x328ff7['startTime'] + _0x328ff7['duration'] - _0x49dbd4), _0x55ce33 = 0x1 - (_0x49dbd4 / _0x328ff7['duration'] || 0x0), _0x44afca = 0x0, _0x539487 = _0x328ff7['tweens']['length']; _0x44afca < _0x539487; _0x44afca++) _0x328ff7['tweens'][_0x44afca]['run'](_0x55ce33);
                return _0x5cebbe['notifyWith'](_0x5109d3, [_0x328ff7, _0x55ce33, _0x49dbd4]), 0x1 > _0x55ce33 && _0x539487 ? _0x49dbd4 : (_0x539487 || _0x5cebbe['notifyWith'](_0x5109d3, [_0x328ff7, 0x1, 0x0]), _0x5cebbe['resolveWith'](_0x5109d3, [_0x328ff7]), !0x1);
            },
            _0x328ff7 = _0x5cebbe['promise']({
                'elem': _0x5109d3,
                'props': _0x263ab8['extend']({}, _0x4efcbb),
                'opts': _0x263ab8['extend'](!0x0, {
                    'specialEasing': {},
                    'easing': _0x263ab8['easing']['_default']
                }, _0x59f877),
                'originalProperties': _0x4efcbb,
                'originalOptions': _0x59f877,
                'startTime': _0x534d7f || _0x32dc32(),
                'duration': _0x59f877['duration'],
                'tweens': [],
                'createTween': function(_0x58eb03, _0x8db480) {
                    var _0x344338 = _0x263ab8['Tween'](_0x5109d3, _0x328ff7['opts'], _0x58eb03, _0x8db480, _0x328ff7['opts']['specialEasing'][_0x58eb03] || _0x328ff7['opts']['easing']);
                    return _0x328ff7['tweens']['push'](_0x344338), _0x344338;
                },
                'stop': function(_0x5e033d) {
                    var _0x14070b = 0x0,
                        _0x4cc95f = _0x5e033d ? _0x328ff7['tweens']['length'] : 0x0;
                    if (_0x2d62f8) return this;
                    for (_0x2d62f8 = !0x0; _0x14070b < _0x4cc95f; _0x14070b++) _0x328ff7['tweens'][_0x14070b]['run'](0x1);
                    return _0x5e033d ? (_0x5cebbe['notifyWith'](_0x5109d3, [_0x328ff7, 0x1, 0x0]), _0x5cebbe['resolveWith'](_0x5109d3, [_0x328ff7, _0x5e033d])) : _0x5cebbe['rejectWith'](_0x5109d3, [_0x328ff7, _0x5e033d]), this;
                }
            });
        _0x4efcbb = _0x328ff7['props'];
        _0x59f877 = _0x328ff7['opts']['specialEasing'];
        var _0x17f0c5, _0x1c3cd6, _0x4cbf16, _0xc75a26;
        for (_0x170f9d in _0x4efcbb)
            if (_0x17f0c5 = _0x263ab8['camelCase'](_0x170f9d), _0x1c3cd6 = _0x59f877[_0x17f0c5], _0x4cbf16 = _0x4efcbb[_0x170f9d], Array['isArray'](_0x4cbf16) && (_0x1c3cd6 = _0x4cbf16[0x1], _0x4cbf16 = _0x4efcbb[_0x170f9d] = _0x4cbf16[0x0]), _0x170f9d !== _0x17f0c5 && (_0x4efcbb[_0x17f0c5] = _0x4cbf16, delete _0x4efcbb[_0x170f9d]), _0xc75a26 = _0x263ab8['cssHooks'][_0x17f0c5], _0xc75a26 && 'expand' in _0xc75a26)
                for (_0x170f9d in (_0x4cbf16 = _0xc75a26['expand'](_0x4cbf16), delete _0x4efcbb[_0x17f0c5], _0x4cbf16)) _0x170f9d in _0x4efcbb || (_0x4efcbb[_0x170f9d] = _0x4cbf16[_0x170f9d], _0x59f877[_0x170f9d] = _0x1c3cd6);
            else _0x59f877[_0x17f0c5] = _0x1c3cd6;
        for (; _0x1a8ad1 < _0x317991; _0x1a8ad1++)
            if (_0x170f9d = _0x49af3b['prefilters'][_0x1a8ad1]['call'](_0x328ff7, _0x5109d3, _0x4efcbb, _0x328ff7['opts'])) return _0x263ab8['isFunction'](_0x170f9d['stop']) && (_0x263ab8['_queueHooks'](_0x328ff7['elem'], _0x328ff7['opts']['queue'])['stop'] = _0x263ab8['proxy'](_0x170f9d['stop'], _0x170f9d)), _0x170f9d;
        return _0x263ab8['map'](_0x4efcbb, _0x4cfa1c, _0x328ff7), _0x263ab8['isFunction'](_0x328ff7['opts']['start']) && _0x328ff7['opts']['start']['call'](_0x5109d3, _0x328ff7), _0x328ff7['progress'](_0x328ff7['opts']['progress'])['done'](_0x328ff7['opts']['done'], _0x328ff7['opts']['complete'])['fail'](_0x328ff7['opts']['fail'])['always'](_0x328ff7['opts']['always']), _0x263ab8['fx']['timer'](_0x263ab8['extend'](_0xbd3eb2, {
            'elem': _0x5109d3,
            'anim': _0x328ff7,
            'queue': _0x328ff7['opts']['queue']
        })), _0x328ff7;
    }

    function _0x5a3029(_0x2af312) {
        return (_0x2af312['match'](_0x5e732e) || [])['join']('\x20');
    }

    function _0x1efab4(_0x5de009) {
        return _0x5de009['getAttribute'] && _0x5de009['getAttribute']('class') || '';
    }

    function _0xb5faa1(_0x112a33, _0x14b0a2, _0x46cb53, _0x262aa6) {
        var _0x158497;
        if (Array['isArray'](_0x14b0a2)) _0x263ab8['each'](_0x14b0a2, function(_0x451903, _0x330428) {
            _0x46cb53 || _0x102f5d['test'](_0x112a33) ? _0x262aa6(_0x112a33, _0x330428) : _0xb5faa1(_0x112a33 + '[' + ('object' == typeof _0x330428 && null != _0x330428 ? _0x451903 : '') + ']', _0x330428, _0x46cb53, _0x262aa6);
        });
        else if (_0x46cb53 || 'object' !== _0x263ab8['type'](_0x14b0a2)) _0x262aa6(_0x112a33, _0x14b0a2);
        else
            for (_0x158497 in _0x14b0a2) _0xb5faa1(_0x112a33 + '[' + _0x158497 + ']', _0x14b0a2[_0x158497], _0x46cb53, _0x262aa6);
    }

    function _0x53f24e(_0x2596c4) {
        return function(_0x47dc88, _0x437667) {
            'string' != typeof _0x47dc88 && (_0x437667 = _0x47dc88, _0x47dc88 = '*');
            var _0x1bb044, _0x5ea462 = 0x0,
                _0x552ad3 = _0x47dc88['toLowerCase']()['match'](_0x5e732e) || [];
            if (_0x263ab8['isFunction'](_0x437667))
                for (; _0x1bb044 = _0x552ad3[_0x5ea462++];) '+' === _0x1bb044[0x0] ? (_0x1bb044 = _0x1bb044['slice'](0x1) || '*', (_0x2596c4[_0x1bb044] = _0x2596c4[_0x1bb044] || [])['unshift'](_0x437667)) : (_0x2596c4[_0x1bb044] = _0x2596c4[_0x1bb044] || [])['push'](_0x437667);
        };
    }

    function _0x46d20c(_0x3f28fa, _0x54f816, _0x35874f, _0x1d5be3) {
        function _0x541f0f(_0x314613) {
            var _0x8b104;
            return _0x5839b7[_0x314613] = !0x0, _0x263ab8['each'](_0x3f28fa[_0x314613] || [], function(_0x126793, _0x455359) {
                var _0x50158a = _0x455359(_0x54f816, _0x35874f, _0x1d5be3);
                return 'string' != typeof _0x50158a || _0x5b57a7 || _0x5839b7[_0x50158a] ? _0x5b57a7 ? !(_0x8b104 = _0x50158a) : void 0x0 : (_0x54f816['dataTypes']['unshift'](_0x50158a), _0x541f0f(_0x50158a), !0x1);
            }), _0x8b104;
        }
        var _0x5839b7 = {},
            _0x5b57a7 = _0x3f28fa === _0x2066a6;
        return _0x541f0f(_0x54f816['dataTypes'][0x0]) || !_0x5839b7['*'] && _0x541f0f('*');
    }

    function _0x381302(_0x3a2144, _0x42a0d3) {
        var _0x32e752, _0x1d9e38, _0x34f800 = _0x263ab8['ajaxSettings']['flatOptions'] || {};
        for (_0x32e752 in _0x42a0d3) void 0x0 !== _0x42a0d3[_0x32e752] && ((_0x34f800[_0x32e752] ? _0x3a2144 : _0x1d9e38 || (_0x1d9e38 = {}))[_0x32e752] = _0x42a0d3[_0x32e752]);
        return _0x1d9e38 && _0x263ab8['extend'](!0x0, _0x3a2144, _0x1d9e38), _0x3a2144;
    }
    var _0xde74b8 = [],
        _0x1b3fe3 = _0x51f4a4['document'],
        _0x53d81c = Object['getPrototypeOf'],
        _0xcab530 = _0xde74b8['slice'],
        _0x36f7af = _0xde74b8['concat'],
        _0x487890 = _0xde74b8['push'],
        _0x10e586 = _0xde74b8['indexOf'],
        _0x49705b = {},
        _0x2c6491 = _0x49705b['toString'],
        _0xccce8d = _0x49705b['hasOwnProperty'],
        _0x4c4c58 = _0xccce8d['toString'],
        _0x4c9a72 = _0x4c4c58['call'](Object),
        _0x187c89 = {},
        _0x263ab8 = function(_0x5d0ede, _0x302f89) {
            return new _0x263ab8['fn']['init'](_0x5d0ede, _0x302f89);
        },
        _0x443708 = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        _0x4031c8 = /^-ms-/,
        _0x1331db = /-([a-z])/g,
        _0x2f522 = function(_0x41dd2c, _0xc69c85) {
            return _0xc69c85['toUpperCase']();
        };
    _0x263ab8['fn'] = _0x263ab8['prototype'] = {
        'jquery': '3.2.1',
        'constructor': _0x263ab8,
        'length': 0x0,
        'toArray': function() {
            return _0xcab530['call'](this);
        },
        'get': function(_0xf3a9de) {
            return null == _0xf3a9de ? _0xcab530['call'](this) : 0x0 > _0xf3a9de ? this[_0xf3a9de + this['length']] : this[_0xf3a9de];
        },
        'pushStack': function(_0x57975e) {
            _0x57975e = _0x263ab8['merge'](this['constructor'](), _0x57975e);
            return _0x57975e['prevObject'] = this, _0x57975e;
        },
        'each': function(_0x5f10db) {
            return _0x263ab8['each'](this, _0x5f10db);
        },
        'map': function(_0x4f661a) {
            return this['pushStack'](_0x263ab8['map'](this, function(_0x27ddd4, _0x2cb39f) {
                return _0x4f661a['call'](_0x27ddd4, _0x2cb39f, _0x27ddd4);
            }));
        },
        'slice': function() {
            return this['pushStack'](_0xcab530['apply'](this, arguments));
        },
        'first': function() {
            return this['eq'](0x0);
        },
        'last': function() {
            return this['eq'](-0x1);
        },
        'eq': function(_0xe00d82) {
            var _0x43caf3 = this['length'];
            _0xe00d82 = +_0xe00d82 + (0x0 > _0xe00d82 ? _0x43caf3 : 0x0);
            return this['pushStack'](0x0 <= _0xe00d82 && _0xe00d82 < _0x43caf3 ? [this[_0xe00d82]] : []);
        },
        'end': function() {
            return this['prevObject'] || this['constructor']();
        },
        'push': _0x487890,
        'sort': _0xde74b8['sort'],
        'splice': _0xde74b8['splice']
    };
    _0x263ab8['extend'] = _0x263ab8['fn']['extend'] = function() {
        var _0x48b316, _0x2e0559, _0x344518, _0x4a9054, _0x1a49bd, _0x6941dd, _0x572a7f = arguments[0x0] || {},
            _0xf7df94 = 0x1,
            _0x35ca87 = arguments['length'],
            _0x501f44 = !0x1;
        'boolean' == typeof _0x572a7f && (_0x501f44 = _0x572a7f, _0x572a7f = arguments[_0xf7df94] || {}, _0xf7df94++);
        'object' == typeof _0x572a7f || _0x263ab8['isFunction'](_0x572a7f) || (_0x572a7f = {});
        for (_0xf7df94 === _0x35ca87 && (_0x572a7f = this, _0xf7df94--); _0xf7df94 < _0x35ca87; _0xf7df94++)
            if (null != (_0x48b316 = arguments[_0xf7df94]))
                for (_0x2e0559 in _0x48b316) _0x344518 = _0x572a7f[_0x2e0559], _0x4a9054 = _0x48b316[_0x2e0559], _0x572a7f !== _0x4a9054 && (_0x501f44 && _0x4a9054 && (_0x263ab8['isPlainObject'](_0x4a9054) || (_0x1a49bd = Array['isArray'](_0x4a9054))) ? (_0x1a49bd ? (_0x1a49bd = !0x1, _0x6941dd = _0x344518 && Array['isArray'](_0x344518) ? _0x344518 : []) : _0x6941dd = _0x344518 && _0x263ab8['isPlainObject'](_0x344518) ? _0x344518 : {}, _0x572a7f[_0x2e0559] = _0x263ab8['extend'](_0x501f44, _0x6941dd, _0x4a9054)) : void 0x0 !== _0x4a9054 && (_0x572a7f[_0x2e0559] = _0x4a9054));
        return _0x572a7f;
    };
    _0x263ab8['extend']({
        'expando': 'jQuery' + ('3.2.1' + Math['random']())['replace'](/\D/g, ''),
        'isReady': !0x0,
        'error': function(_0x2f4f11) {
            throw Error(_0x2f4f11);
        },
        'noop': function() {},
        'isFunction': function(_0x30c87e) {
            return 'function' === _0x263ab8['type'](_0x30c87e);
        },
        'isWindow': function(_0x6ffde7) {
            return null != _0x6ffde7 && _0x6ffde7 === _0x6ffde7['window'];
        },
        'isNumeric': function(_0x4735c4) {
            var _0x48dc55 = _0x263ab8['type'](_0x4735c4);
            return ('number' === _0x48dc55 || 'string' === _0x48dc55) && !isNaN(_0x4735c4 - parseFloat(_0x4735c4));
        },
        'isPlainObject': function(_0x33dbc4) {
            var _0x54242e, _0x37915a;
            return !(!_0x33dbc4 || '[object\x20Object]' !== _0x2c6491['call'](_0x33dbc4)) && (!(_0x54242e = _0x53d81c(_0x33dbc4)) || (_0x37915a = _0xccce8d['call'](_0x54242e, 'constructor') && _0x54242e['constructor'], 'function' == typeof _0x37915a && _0x4c4c58['call'](_0x37915a) === _0x4c9a72));
        },
        'isEmptyObject': function(_0x3e3a19) {
            for (var _0x4ee41c in _0x3e3a19) return !0x1;
            return !0x0;
        },
        'type': function(_0x11b62d) {
            return null == _0x11b62d ? _0x11b62d + '' : 'object' == typeof _0x11b62d || 'function' == typeof _0x11b62d ? _0x49705b[_0x2c6491['call'](_0x11b62d)] || 'object' : typeof _0x11b62d;
        },
        'globalEval': function(_0x5f231e) {
            _0x5badfd(_0x5f231e);
        },
        'camelCase': function(_0x15f7d7) {
            return _0x15f7d7['replace'](_0x4031c8, 'ms-')['replace'](_0x1331db, _0x2f522);
        },
        'each': function(_0x22a405, _0x4d7dee) {
            var _0x129ced, _0x552e6c = 0x0;
            if (_0x4b07cc(_0x22a405))
                for (_0x129ced = _0x22a405['length']; _0x552e6c < _0x129ced && !0x1 !== _0x4d7dee['call'](_0x22a405[_0x552e6c], _0x552e6c, _0x22a405[_0x552e6c]); _0x552e6c++);
            else
                for (_0x552e6c in _0x22a405)
                    if (!0x1 === _0x4d7dee['call'](_0x22a405[_0x552e6c], _0x552e6c, _0x22a405[_0x552e6c])) break;
            return _0x22a405;
        },
        'trim': function(_0x16dcb9) {
            return null == _0x16dcb9 ? '' : (_0x16dcb9 + '')['replace'](_0x443708, '');
        },
        'makeArray': function(_0x5a22cf, _0x44a5d0) {
            var _0xe55a81 = _0x44a5d0 || [];
            return null != _0x5a22cf && (_0x4b07cc(Object(_0x5a22cf)) ? _0x263ab8['merge'](_0xe55a81, 'string' == typeof _0x5a22cf ? [_0x5a22cf] : _0x5a22cf) : _0x487890['call'](_0xe55a81, _0x5a22cf)), _0xe55a81;
        },
        'inArray': function(_0x105699, _0x12b01d, _0x472411) {
            return null == _0x12b01d ? -0x1 : _0x10e586['call'](_0x12b01d, _0x105699, _0x472411);
        },
        'merge': function(_0x25f042, _0x5c888d) {
            for (var _0x5c6575 = +_0x5c888d['length'], _0x364b9e = 0x0, _0x3f053d = _0x25f042['length']; _0x364b9e < _0x5c6575; _0x364b9e++) _0x25f042[_0x3f053d++] = _0x5c888d[_0x364b9e];
            return _0x25f042['length'] = _0x3f053d, _0x25f042;
        },
        'grep': function(_0x5c16b7, _0xc67d08, _0x3f6cd1) {
            for (var _0x52d277 = [], _0x217b4a = 0x0, _0x1fb69e = _0x5c16b7['length'], _0xb1fab = !_0x3f6cd1; _0x217b4a < _0x1fb69e; _0x217b4a++) _0x3f6cd1 = !_0xc67d08(_0x5c16b7[_0x217b4a], _0x217b4a), _0x3f6cd1 !== _0xb1fab && _0x52d277['push'](_0x5c16b7[_0x217b4a]);
            return _0x52d277;
        },
        'map': function(_0xa80359, _0x15ac5e, _0x1664e2) {
            var _0x1f4c44, _0x279443, _0x44debc = 0x0,
                _0x3a2a07 = [];
            if (_0x4b07cc(_0xa80359))
                for (_0x1f4c44 = _0xa80359['length']; _0x44debc < _0x1f4c44; _0x44debc++) _0x279443 = _0x15ac5e(_0xa80359[_0x44debc], _0x44debc, _0x1664e2), null != _0x279443 && _0x3a2a07['push'](_0x279443);
            else
                for (_0x44debc in _0xa80359) _0x279443 = _0x15ac5e(_0xa80359[_0x44debc], _0x44debc, _0x1664e2), null != _0x279443 && _0x3a2a07['push'](_0x279443);
            return _0x36f7af['apply']([], _0x3a2a07);
        },
        'guid': 0x1,
        'proxy': function(_0xf59276, _0x4672ce) {
            var _0x280181, _0x2bd487, _0x1a58aa;
            if ('string' == typeof _0x4672ce && (_0x280181 = _0xf59276[_0x4672ce], _0x4672ce = _0xf59276, _0xf59276 = _0x280181), _0x263ab8['isFunction'](_0xf59276)) return _0x2bd487 = _0xcab530['call'](arguments, 0x2), _0x1a58aa = function() {
                return _0xf59276['apply'](_0x4672ce || this, _0x2bd487['concat'](_0xcab530['call'](arguments)));
            }, _0x1a58aa['guid'] = _0xf59276['guid'] = _0xf59276['guid'] || _0x263ab8['guid']++, _0x1a58aa;
        },
        'now': Date['now'],
        'support': _0x187c89
    });
    'function' == typeof Symbol && (_0x263ab8['fn'][Symbol['iterator']] = _0xde74b8[Symbol['iterator']]);
    _0x263ab8['each']('Boolean\x20Number\x20String\x20Function\x20Array\x20Date\x20RegExp\x20Object\x20Error\x20Symbol' ['split']('\x20'), function(_0x7c491, _0x1098b5) {
        _0x49705b['[object\x20' + _0x1098b5 + ']'] = _0x1098b5['toLowerCase']();
    });
    var _0x539298, _0x4191f9 = _0x51f4a4,
        _0x10e8cb = function(_0xfd6d61, _0x3b6370, _0x4737a7, _0x2d3fa1) {
            var _0xc312b8, _0x34c195, _0x47f412, _0x2cff54, _0x1b9217, _0x52a7fa = _0x3b6370 && _0x3b6370['ownerDocument'],
                _0x41b16d = _0x3b6370 ? _0x3b6370['nodeType'] : 0x9;
            if (_0x4737a7 = _0x4737a7 || [], 'string' != typeof _0xfd6d61 || !_0xfd6d61 || 0x1 !== _0x41b16d && 0x9 !== _0x41b16d && 0xb !== _0x41b16d) return _0x4737a7;
            if (!_0x2d3fa1 && ((_0x3b6370 ? _0x3b6370['ownerDocument'] || _0x3b6370 : _0x2ebd69) !== _0x1d507e && _0x37e405(_0x3b6370), _0x3b6370 = _0x3b6370 || _0x1d507e, _0xa5a9b9)) {
                if (0xb !== _0x41b16d && (_0x2cff54 = _0x529e01['exec'](_0xfd6d61)))
                    if (_0xc312b8 = _0x2cff54[0x1])
                        if (0x9 === _0x41b16d) {
                            if (!(_0x34c195 = _0x3b6370['getElementById'](_0xc312b8))) return _0x4737a7;
                            if (_0x34c195['id'] === _0xc312b8) return _0x4737a7['push'](_0x34c195), _0x4737a7;
                        } else {
                            if (_0x52a7fa && (_0x34c195 = _0x52a7fa['getElementById'](_0xc312b8)) && _0x256b58(_0x3b6370, _0x34c195) && _0x34c195['id'] === _0xc312b8) return _0x4737a7['push'](_0x34c195), _0x4737a7;
                        }
                else {
                    if (_0x2cff54[0x2]) return _0x5f453c['apply'](_0x4737a7, _0x3b6370['getElementsByTagName'](_0xfd6d61)), _0x4737a7;
                    if ((_0xc312b8 = _0x2cff54[0x3]) && _0x3dd420['getElementsByClassName'] && _0x3b6370['getElementsByClassName']) return _0x5f453c['apply'](_0x4737a7, _0x3b6370['getElementsByClassName'](_0xc312b8)), _0x4737a7;
                }
                if (_0x3dd420['qsa'] && !_0x11618f[_0xfd6d61 + '\x20'] && (!_0x2733ad || !_0x2733ad['test'](_0xfd6d61))) {
                    if (0x1 !== _0x41b16d) _0x52a7fa = _0x3b6370, _0x1b9217 = _0xfd6d61;
                    else if ('object' !== _0x3b6370['nodeName']['toLowerCase']()) {
                        (_0x47f412 = _0x3b6370['getAttribute']('id')) ? _0x47f412 = _0x47f412['replace'](_0x4263e8, _0x4b0efc): _0x3b6370['setAttribute']('id', _0x47f412 = _0x349598);
                        _0x34c195 = _0x165938(_0xfd6d61);
                        for (_0xc312b8 = _0x34c195['length']; _0xc312b8--;) _0x34c195[_0xc312b8] = '#' + _0x47f412 + '\x20' + _0x243cd4(_0x34c195[_0xc312b8]);
                        _0x1b9217 = _0x34c195['join'](',');
                        _0x52a7fa = _0x928da4['test'](_0xfd6d61) && _0xb3446e(_0x3b6370['parentNode']) || _0x3b6370;
                    }
                    if (_0x1b9217) try {
                        return _0x5f453c['apply'](_0x4737a7, _0x52a7fa['querySelectorAll'](_0x1b9217)), _0x4737a7;
                    } catch (_0x5cb8fb) {} finally {
                        _0x47f412 === _0x349598 && _0x3b6370['removeAttribute']('id');
                    }
                }
            }
            return _0x3d8668(_0xfd6d61['replace'](_0x1ac3b9, '$1'), _0x3b6370, _0x4737a7, _0x2d3fa1);
        },
        _0x4d299f = function() {
            function _0x308fa8(_0x2a0bfa, _0x143345) {
                return _0x39472c['push'](_0x2a0bfa + '\x20') > _0x36409e['cacheLength'] && delete _0x308fa8[_0x39472c['shift']()], _0x308fa8[_0x2a0bfa + '\x20'] = _0x143345;
            }
            var _0x39472c = [];
            return _0x308fa8;
        },
        _0x9e9e8d = function(_0x3252e8) {
            return _0x3252e8[_0x349598] = !0x0, _0x3252e8;
        },
        _0xd47623 = function(_0x283387) {
            var _0x499747 = _0x1d507e['createElement']('fieldset');
            try {
                return !!_0x283387(_0x499747);
            } catch (_0x57d840) {
                return !0x1;
            } finally {
                _0x499747['parentNode'] && _0x499747['parentNode']['removeChild'](_0x499747);
            }
        },
        _0x1a6bcb = function(_0xe25447, _0x21fd4a) {
            for (var _0x3f442d = _0xe25447['split']('|'), _0x375817 = _0x3f442d['length']; _0x375817--;) _0x36409e['attrHandle'][_0x3f442d[_0x375817]] = _0x21fd4a;
        },
        _0x1dcbc9 = function(_0xff5555, _0x5a6400) {
            var _0x5836ba = _0x5a6400 && _0xff5555,
                _0x3f8027 = _0x5836ba && 0x1 === _0xff5555['nodeType'] && 0x1 === _0x5a6400['nodeType'] && _0xff5555['sourceIndex'] - _0x5a6400['sourceIndex'];
            if (_0x3f8027) return _0x3f8027;
            if (_0x5836ba)
                for (; _0x5836ba = _0x5836ba['nextSibling'];)
                    if (_0x5836ba === _0x5a6400) return -0x1;
            return _0xff5555 ? 0x1 : -0x1;
        },
        _0x52671f = function(_0x34e2a9) {
            return function(_0x1d8752) {
                return 'input' === _0x1d8752['nodeName']['toLowerCase']() && _0x1d8752['type'] === _0x34e2a9;
            };
        },
        _0x2ff369 = function(_0x42cf49) {
            return function(_0x237e70) {
                var _0x4aa0e9 = _0x237e70['nodeName']['toLowerCase']();
                return ('input' === _0x4aa0e9 || 'button' === _0x4aa0e9) && _0x237e70['type'] === _0x42cf49;
            };
        },
        _0x4f7785 = function(_0x21e1c3) {
            return function(_0x38339d) {
                return 'form' in _0x38339d ? _0x38339d['parentNode'] && !0x1 === _0x38339d['disabled'] ? 'label' in _0x38339d ? 'label' in _0x38339d['parentNode'] ? _0x38339d['parentNode']['disabled'] === _0x21e1c3 : _0x38339d['disabled'] === _0x21e1c3 : _0x38339d['isDisabled'] === _0x21e1c3 || _0x38339d['isDisabled'] !== !_0x21e1c3 && _0xc08b0c(_0x38339d) === _0x21e1c3 : _0x38339d['disabled'] === _0x21e1c3 : 'label' in _0x38339d && _0x38339d['disabled'] === _0x21e1c3;
            };
        },
        _0x2d9388 = function(_0x1f745d) {
            return _0x9e9e8d(function(_0x54d8ce) {
                return _0x54d8ce = +_0x54d8ce, _0x9e9e8d(function(_0x3111ee, _0x78ef28) {
                    for (var _0xff2bb1, _0x25537a = _0x1f745d([], _0x3111ee['length'], _0x54d8ce), _0x23b082 = _0x25537a['length']; _0x23b082--;) _0x3111ee[_0xff2bb1 = _0x25537a[_0x23b082]] && (_0x3111ee[_0xff2bb1] = !(_0x78ef28[_0xff2bb1] = _0x3111ee[_0xff2bb1]));
                });
            });
        },
        _0xb3446e = function(_0xca6390) {
            return _0xca6390 && 'undefined' != typeof _0xca6390['getElementsByTagName'] && _0xca6390;
        },
        _0x5bdd1f = function() {},
        _0x243cd4 = function(_0xa5803c) {
            for (var _0x31bae0 = 0x0, _0x2d7907 = _0xa5803c['length'], _0x2860ef = ''; _0x31bae0 < _0x2d7907; _0x31bae0++) _0x2860ef += _0xa5803c[_0x31bae0]['value'];
            return _0x2860ef;
        },
        _0x54f4f5 = function(_0x35d731, _0x3cc785, _0x2d9639) {
            var _0x3f8d62 = _0x3cc785['dir'],
                _0x5abfb9 = _0x3cc785['next'],
                _0x5ed38d = _0x5abfb9 || _0x3f8d62,
                _0x38699f = _0x2d9639 && 'parentNode' === _0x5ed38d,
                _0x335b50 = _0x3bc169++;
            return _0x3cc785['first'] ? function(_0x4eb14c, _0x32a28c, _0x440559) {
                for (; _0x4eb14c = _0x4eb14c[_0x3f8d62];)
                    if (0x1 === _0x4eb14c['nodeType'] || _0x38699f) return _0x35d731(_0x4eb14c, _0x32a28c, _0x440559);
                return !0x1;
            } : function(_0x1c7a21, _0x4111f7, _0x12b05e) {
                var _0x176610, _0x1b7aa9, _0x2b781e, _0x77975e = [_0x2cd976, _0x335b50];
                if (_0x12b05e)
                    for (; _0x1c7a21 = _0x1c7a21[_0x3f8d62];) {
                        if ((0x1 === _0x1c7a21['nodeType'] || _0x38699f) && _0x35d731(_0x1c7a21, _0x4111f7, _0x12b05e)) return !0x0;
                    } else
                        for (; _0x1c7a21 = _0x1c7a21[_0x3f8d62];)
                            if (0x1 === _0x1c7a21['nodeType'] || _0x38699f)
                                if (_0x2b781e = _0x1c7a21[_0x349598] || (_0x1c7a21[_0x349598] = {}), _0x1b7aa9 = _0x2b781e[_0x1c7a21['uniqueID']] || (_0x2b781e[_0x1c7a21['uniqueID']] = {}), _0x5abfb9 && _0x5abfb9 === _0x1c7a21['nodeName']['toLowerCase']()) _0x1c7a21 = _0x1c7a21[_0x3f8d62] || _0x1c7a21;
                                else {
                                    if ((_0x176610 = _0x1b7aa9[_0x5ed38d]) && _0x176610[0x0] === _0x2cd976 && _0x176610[0x1] === _0x335b50) return _0x77975e[0x2] = _0x176610[0x2];
                                    if (_0x1b7aa9[_0x5ed38d] = _0x77975e, _0x77975e[0x2] = _0x35d731(_0x1c7a21, _0x4111f7, _0x12b05e)) return !0x0;
                                } return !0x1;
            };
        },
        _0xeac1f3 = function(_0xe6aec0) {
            return 0x1 < _0xe6aec0['length'] ? function(_0x4722e5, _0x30ada4, _0x39fb61) {
                for (var _0x274108 = _0xe6aec0['length']; _0x274108--;)
                    if (!_0xe6aec0[_0x274108](_0x4722e5, _0x30ada4, _0x39fb61)) return !0x1;
                return !0x0;
            } : _0xe6aec0[0x0];
        },
        _0x3822a5 = function(_0x78f410, _0x18dd7e, _0x366329, _0x4d0e59, _0x52221e) {
            for (var _0x591533, _0x4a96d0 = [], _0x53a07f = 0x0, _0x5921ae = _0x78f410['length'], _0x3c75c1 = null != _0x18dd7e; _0x53a07f < _0x5921ae; _0x53a07f++)(_0x591533 = _0x78f410[_0x53a07f]) && (_0x366329 && !_0x366329(_0x591533, _0x4d0e59, _0x52221e) || (_0x4a96d0['push'](_0x591533), _0x3c75c1 && _0x18dd7e['push'](_0x53a07f)));
            return _0x4a96d0;
        },
        _0xa3a786 = function(_0xbae266, _0x34953c, _0x52ef87, _0x5506fd, _0xb744a8, _0x112e7b) {
            return _0x5506fd && !_0x5506fd[_0x349598] && (_0x5506fd = _0xa3a786(_0x5506fd)), _0xb744a8 && !_0xb744a8[_0x349598] && (_0xb744a8 = _0xa3a786(_0xb744a8, _0x112e7b)), _0x9e9e8d(function(_0x302aae, _0x313aed, _0x28882f, _0x16a7fb) {
                var _0x1d06a2, _0x55a5fc, _0x3b8550 = [],
                    _0x5111f1 = [],
                    _0x2e0693 = _0x313aed['length'],
                    _0x2b376c;
                if (!(_0x2b376c = _0x302aae)) {
                    _0x2b376c = _0x34953c || '*';
                    for (var _0x1d84b5 = _0x28882f['nodeType'] ? [_0x28882f] : _0x28882f, _0x43c2ee = [], _0x133aec = 0x0, _0x5acf1a = _0x1d84b5['length']; _0x133aec < _0x5acf1a; _0x133aec++) _0x10e8cb(_0x2b376c, _0x1d84b5[_0x133aec], _0x43c2ee);
                    _0x2b376c = _0x43c2ee;
                }
                _0x2b376c = !_0xbae266 || !_0x302aae && _0x34953c ? _0x2b376c : _0x3822a5(_0x2b376c, _0x3b8550, _0xbae266, _0x28882f, _0x16a7fb);
                _0x1d84b5 = _0x52ef87 ? _0xb744a8 || (_0x302aae ? _0xbae266 : _0x2e0693 || _0x5506fd) ? [] : _0x313aed : _0x2b376c;
                if (_0x52ef87 && _0x52ef87(_0x2b376c, _0x1d84b5, _0x28882f, _0x16a7fb), _0x5506fd) {
                    _0x1d06a2 = _0x3822a5(_0x1d84b5, _0x5111f1);
                    _0x5506fd(_0x1d06a2, [], _0x28882f, _0x16a7fb);
                    for (_0x28882f = _0x1d06a2['length']; _0x28882f--;)(_0x55a5fc = _0x1d06a2[_0x28882f]) && (_0x1d84b5[_0x5111f1[_0x28882f]] = !(_0x2b376c[_0x5111f1[_0x28882f]] = _0x55a5fc));
                }
                if (_0x302aae) {
                    if (_0xb744a8 || _0xbae266) {
                        if (_0xb744a8) {
                            _0x1d06a2 = [];
                            for (_0x28882f = _0x1d84b5['length']; _0x28882f--;)(_0x55a5fc = _0x1d84b5[_0x28882f]) && _0x1d06a2['push'](_0x2b376c[_0x28882f] = _0x55a5fc);
                            _0xb744a8(null, _0x1d84b5 = [], _0x1d06a2, _0x16a7fb);
                        }
                        for (_0x28882f = _0x1d84b5['length']; _0x28882f--;)(_0x55a5fc = _0x1d84b5[_0x28882f]) && -0x1 < (_0x1d06a2 = _0xb744a8 ? _0x29360f(_0x302aae, _0x55a5fc) : _0x3b8550[_0x28882f]) && (_0x302aae[_0x1d06a2] = !(_0x313aed[_0x1d06a2] = _0x55a5fc));
                    }
                } else _0x1d84b5 = _0x3822a5(_0x1d84b5 === _0x313aed ? _0x1d84b5['splice'](_0x2e0693, _0x1d84b5['length']) : _0x1d84b5), _0xb744a8 ? _0xb744a8(null, _0x313aed, _0x1d84b5, _0x16a7fb) : _0x5f453c['apply'](_0x313aed, _0x1d84b5);
            });
        },
        _0x3db53c = function(_0x57ef67) {
            var _0x4a5a2e, _0xa33140, _0x1bd856, _0x1cf3ab = _0x57ef67['length'],
                _0x42774d = _0x36409e['relative'][_0x57ef67[0x0]['type']];
            _0xa33140 = _0x42774d || _0x36409e['relative']['\x20'];
            for (var _0x37d67a = _0x42774d ? 0x1 : 0x0, _0x22ef1f = _0x54f4f5(function(_0x17fc22) {
                    return _0x17fc22 === _0x4a5a2e;
                }, _0xa33140, !0x0), _0x21749d = _0x54f4f5(function(_0x371029) {
                    return -0x1 < _0x29360f(_0x4a5a2e, _0x371029);
                }, _0xa33140, !0x0), _0x39ef7c = [function(_0x2b8983, _0x10d81b, _0x253ebf) {
                    _0x2b8983 = !_0x42774d && (_0x253ebf || _0x10d81b !== _0x41fde6) || ((_0x4a5a2e = _0x10d81b)['nodeType'] ? _0x22ef1f(_0x2b8983, _0x10d81b, _0x253ebf) : _0x21749d(_0x2b8983, _0x10d81b, _0x253ebf));
                    return _0x4a5a2e = null, _0x2b8983;
                }]; _0x37d67a < _0x1cf3ab; _0x37d67a++)
                if (_0xa33140 = _0x36409e['relative'][_0x57ef67[_0x37d67a]['type']]) _0x39ef7c = [_0x54f4f5(_0xeac1f3(_0x39ef7c), _0xa33140)];
                else {
                    if (_0xa33140 = _0x36409e['filter'][_0x57ef67[_0x37d67a]['type']]['apply'](null, _0x57ef67[_0x37d67a]['matches']), _0xa33140[_0x349598]) {
                        for (_0x1bd856 = ++_0x37d67a; _0x1bd856 < _0x1cf3ab && !_0x36409e['relative'][_0x57ef67[_0x1bd856]['type']]; _0x1bd856++);
                        return _0xa3a786(0x1 < _0x37d67a && _0xeac1f3(_0x39ef7c), 0x1 < _0x37d67a && _0x243cd4(_0x57ef67['slice'](0x0, _0x37d67a - 0x1)['concat']({
                            'value': '\x20' === _0x57ef67[_0x37d67a - 0x2]['type'] ? '*' : ''
                        }))['replace'](_0x1ac3b9, '$1'), _0xa33140, _0x37d67a < _0x1bd856 && _0x3db53c(_0x57ef67['slice'](_0x37d67a, _0x1bd856)), _0x1bd856 < _0x1cf3ab && _0x3db53c(_0x57ef67 = _0x57ef67['slice'](_0x1bd856)), _0x1bd856 < _0x1cf3ab && _0x243cd4(_0x57ef67));
                    }
                    _0x39ef7c['push'](_0xa33140);
                } return _0xeac1f3(_0x39ef7c);
        },
        _0x4b53fe, _0x3dd420, _0x36409e, _0x230657, _0x7284cf, _0x165938, _0x1d7940, _0x3d8668, _0x41fde6, _0x3c3602, _0x12aa16, _0x37e405, _0x1d507e, _0x46bae9, _0xa5a9b9, _0x2733ad, _0x305546, _0x4a8018, _0x256b58, _0x349598 = 'sizzle' + 0x1 * new Date(),
        _0x2ebd69 = _0x4191f9['document'],
        _0x2cd976 = 0x0,
        _0x3bc169 = 0x0,
        _0x1d89b2 = _0x4d299f(),
        _0x4171d8 = _0x4d299f(),
        _0x11618f = _0x4d299f(),
        _0x19b7a5 = function(_0x4ae277, _0xcb6ea6) {
            return _0x4ae277 === _0xcb6ea6 && (_0x12aa16 = !0x0), 0x0;
        },
        _0x4b1aa2 = {} ['hasOwnProperty'],
        _0x22ce7b = [],
        _0x1f8361 = _0x22ce7b['pop'],
        _0x3c5bd1 = _0x22ce7b['push'],
        _0x5f453c = _0x22ce7b['push'],
        _0x4545ba = _0x22ce7b['slice'],
        _0x29360f = function(_0x1fb66e, _0xe5b8c3) {
            for (var _0x1db2b8 = 0x0, _0x4a72a6 = _0x1fb66e['length']; _0x1db2b8 < _0x4a72a6; _0x1db2b8++)
                if (_0x1fb66e[_0x1db2b8] === _0xe5b8c3) return _0x1db2b8;
            return -0x1;
        },
        _0x484dcf = /[\x20\t\r\n\f]+/g,
        _0x1ac3b9 = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        _0x2e5189 = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        _0x5321f1 = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
        _0x4ee71a = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
        _0x5e35b9 = RegExp(':((?:\x5c\x5c.|[\x5cw-]|[^ -\x5cxa0])+)(?:\x5c(((\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22)|((?:\x5c\x5c.|[^\x5c\x5c()[\x5c]]|\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:\x5c\x5c.|[\x5cw-]|[^ -\x5cxa0])+)(?:[\x5cx20\x5ct\x5cr\x5cn\x5cf]*([*^$|!~]?=)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22|((?:\x5c\x5c.|[\x5cw-]|[^ -\x5cxa0])+))|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c])*)|.*)\x5c)|)'),
        _0x1ec62e = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
        _0x348fbc = {
            'ID': /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            'CLASS': /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            'TAG': /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
            'ATTR': RegExp('^\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:\x5c\x5c.|[\x5cw-]|[^ -\x5cxa0])+)(?:[\x5cx20\x5ct\x5cr\x5cn\x5cf]*([*^$|!~]?=)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22|((?:\x5c\x5c.|[\x5cw-]|[^ -\x5cxa0])+))|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c]'),
            'PSEUDO': RegExp('^:((?:\x5c\x5c.|[\x5cw-]|[^ -\x5cxa0])+)(?:\x5c(((\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22)|((?:\x5c\x5c.|[^\x5c\x5c()[\x5c]]|\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:\x5c\x5c.|[\x5cw-]|[^ -\x5cxa0])+)(?:[\x5cx20\x5ct\x5cr\x5cn\x5cf]*([*^$|!~]?=)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22|((?:\x5c\x5c.|[\x5cw-]|[^ -\x5cxa0])+))|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c])*)|.*)\x5c)|)'),
            'CHILD': RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\x5c([\x5cx20\x5ct\x5cr\x5cn\x5cf]*(even|odd|(([+-]|)(\x5cd*)n|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:([+-]|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(\x5cd+)|))[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c)|)', 'i'),
            'bool': RegExp('^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$', 'i'),
            'needsContext': RegExp('^[\x5cx20\x5ct\x5cr\x5cn\x5cf]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\x5c([\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:-\x5cd)?\x5cd*)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c)|)(?=[^-]|$)', 'i')
        },
        _0x31b56a = /^(?:input|select|textarea|button)$/i,
        _0x3f6f61 = /^h\d$/i,
        _0x3e7f47 = /^[^{]+\{\s*\[native \w/,
        _0x529e01 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _0x928da4 = /[+~]/,
        _0x10373a = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
        _0xe5a9e9 = function(_0x59a74f, _0x38b536, _0x336b5a) {
            _0x59a74f = '0x' + _0x38b536 - 0x10000;
            return _0x59a74f !== _0x59a74f || _0x336b5a ? _0x38b536 : 0x0 > _0x59a74f ? String['fromCharCode'](_0x59a74f + 0x10000) : String['fromCharCode'](_0x59a74f >> 0xa | 0xd800, 0x3ff & _0x59a74f | 0xdc00);
        },
        _0x4263e8 = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        _0x4b0efc = function(_0x321da7, _0x524646) {
            return _0x524646 ? ' ' === _0x321da7 ? '�' : _0x321da7['slice'](0x0, -0x1) + '\x5c' + _0x321da7['charCodeAt'](_0x321da7['length'] - 0x1)['toString'](0x10) + '\x20' : '\x5c' + _0x321da7;
        },
        _0x301a68 = function() {
            _0x37e405();
        },
        _0xc08b0c = _0x54f4f5(function(_0x44f632) {
            return !0x0 === _0x44f632['disabled'] && ('form' in _0x44f632 || 'label' in _0x44f632);
        }, {
            'dir': 'parentNode',
            'next': 'legend'
        });
    try {
        _0x5f453c['apply'](_0x22ce7b = _0x4545ba['call'](_0x2ebd69['childNodes']), _0x2ebd69['childNodes']), _0x22ce7b[_0x2ebd69['childNodes']['length']]['nodeType'];
    } catch (_0x52a062) {
        _0x5f453c = {
            'apply': _0x22ce7b['length'] ? function(_0x570fe6, _0x826f0c) {
                _0x3c5bd1['apply'](_0x570fe6, _0x4545ba['call'](_0x826f0c));
            } : function(_0x2e5dad, _0x83be8c) {
                for (var _0x3623e5 = _0x2e5dad['length'], _0x29358d = 0x0; _0x2e5dad[_0x3623e5++] = _0x83be8c[_0x29358d++];);
                _0x2e5dad['length'] = _0x3623e5 - 0x1;
            }
        };
    }
    _0x3dd420 = _0x10e8cb['support'] = {};
    _0x7284cf = _0x10e8cb['isXML'] = function(_0x5ccab5) {
        _0x5ccab5 = _0x5ccab5 && (_0x5ccab5['ownerDocument'] || _0x5ccab5)['documentElement'];
        return !!_0x5ccab5 && 'HTML' !== _0x5ccab5['nodeName'];
    };
    _0x37e405 = _0x10e8cb['setDocument'] = function(_0x46992b) {
        var _0x1f779c, _0x521f2c;
        _0x46992b = _0x46992b ? _0x46992b['ownerDocument'] || _0x46992b : _0x2ebd69;
        return _0x46992b !== _0x1d507e && 0x9 === _0x46992b['nodeType'] && _0x46992b['documentElement'] ? (_0x1d507e = _0x46992b, _0x46bae9 = _0x1d507e['documentElement'], _0xa5a9b9 = !_0x7284cf(_0x1d507e), _0x2ebd69 !== _0x1d507e && (_0x521f2c = _0x1d507e['defaultView']) && _0x521f2c['top'] !== _0x521f2c && (_0x521f2c['addEventListener'] ? _0x521f2c['addEventListener']('unload', _0x301a68, !0x1) : _0x521f2c['attachEvent'] && _0x521f2c['attachEvent']('onunload', _0x301a68)), _0x3dd420['attributes'] = _0xd47623(function(_0x757ae) {
            return _0x757ae['className'] = 'i', !_0x757ae['getAttribute']('className');
        }), _0x3dd420['getElementsByTagName'] = _0xd47623(function(_0x5385e8) {
            return _0x5385e8['appendChild'](_0x1d507e['createComment']('')), !_0x5385e8['getElementsByTagName']('*')['length'];
        }), _0x3dd420['getElementsByClassName'] = _0x3e7f47['test'](_0x1d507e['getElementsByClassName']), _0x3dd420['getById'] = _0xd47623(function(_0x47874a) {
            return _0x46bae9['appendChild'](_0x47874a)['id'] = _0x349598, !_0x1d507e['getElementsByName'] || !_0x1d507e['getElementsByName'](_0x349598)['length'];
        }), _0x3dd420['getById'] ? (_0x36409e['filter']['ID'] = function(_0x4588fd) {
            var _0x422bcf = _0x4588fd['replace'](_0x10373a, _0xe5a9e9);
            return function(_0x1405db) {
                return _0x1405db['getAttribute']('id') === _0x422bcf;
            };
        }, _0x36409e['find']['ID'] = function(_0x3ca4e5, _0x26d1ef) {
            if ('undefined' != typeof _0x26d1ef['getElementById'] && _0xa5a9b9) {
                var _0x1b1f47 = _0x26d1ef['getElementById'](_0x3ca4e5);
                return _0x1b1f47 ? [_0x1b1f47] : [];
            }
        }) : (_0x36409e['filter']['ID'] = function(_0x3f8f21) {
            var _0x13ce0c = _0x3f8f21['replace'](_0x10373a, _0xe5a9e9);
            return function(_0x4b6133) {
                return (_0x4b6133 = 'undefined' != typeof _0x4b6133['getAttributeNode'] && _0x4b6133['getAttributeNode']('id')) && _0x4b6133['value'] === _0x13ce0c;
            };
        }, _0x36409e['find']['ID'] = function(_0x4d613d, _0x4ba860) {
            if ('undefined' != typeof _0x4ba860['getElementById'] && _0xa5a9b9) {
                var _0xe068b3, _0x1aaa8f, _0x2e0435, _0x5797b0 = _0x4ba860['getElementById'](_0x4d613d);
                if (_0x5797b0) {
                    if (_0xe068b3 = _0x5797b0['getAttributeNode']('id'), _0xe068b3 && _0xe068b3['value'] === _0x4d613d) return [_0x5797b0];
                    _0x2e0435 = _0x4ba860['getElementsByName'](_0x4d613d);
                    for (_0x1aaa8f = 0x0; _0x5797b0 = _0x2e0435[_0x1aaa8f++];)
                        if (_0xe068b3 = _0x5797b0['getAttributeNode']('id'), _0xe068b3 && _0xe068b3['value'] === _0x4d613d) return [_0x5797b0];
                }
                return [];
            }
        }), _0x36409e['find']['TAG'] = _0x3dd420['getElementsByTagName'] ? function(_0x73b410, _0x2725cd) {
            return 'undefined' != typeof _0x2725cd['getElementsByTagName'] ? _0x2725cd['getElementsByTagName'](_0x73b410) : _0x3dd420['qsa'] ? _0x2725cd['querySelectorAll'](_0x73b410) : void 0x0;
        } : function(_0x2d619c, _0x119864) {
            var _0x4f60ef, _0x1787f2 = [],
                _0x5cbebb = 0x0,
                _0xeae527 = _0x119864['getElementsByTagName'](_0x2d619c);
            if ('*' === _0x2d619c) {
                for (; _0x4f60ef = _0xeae527[_0x5cbebb++];) 0x1 === _0x4f60ef['nodeType'] && _0x1787f2['push'](_0x4f60ef);
                return _0x1787f2;
            }
            return _0xeae527;
        }, _0x36409e['find']['CLASS'] = _0x3dd420['getElementsByClassName'] && function(_0x2a0b47, _0x2d9269) {
            if ('undefined' != typeof _0x2d9269['getElementsByClassName'] && _0xa5a9b9) return _0x2d9269['getElementsByClassName'](_0x2a0b47);
        }, _0x305546 = [], _0x2733ad = [], (_0x3dd420['qsa'] = _0x3e7f47['test'](_0x1d507e['querySelectorAll'])) && (_0xd47623(function(_0x6781db) {
            _0x46bae9['appendChild'](_0x6781db)['innerHTML'] = '<a\x20id=\x27' + _0x349598 + '\x27></a><select\x20id=\x27' + _0x349598 + '-\x0d\x5c\x27\x20msallowcapture=\x27\x27><option\x20selected=\x27\x27></option></select>';
            _0x6781db['querySelectorAll']('[msallowcapture^=\x27\x27]')['length'] && _0x2733ad['push']('[*^$]=[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x27\x27|\x22\x22)');
            _0x6781db['querySelectorAll']('[selected]')['length'] || _0x2733ad['push']('\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)');
            _0x6781db['querySelectorAll']('[id~=' + _0x349598 + '-]')['length'] || _0x2733ad['push']('~=');
            _0x6781db['querySelectorAll'](':checked')['length'] || _0x2733ad['push'](':checked');
            _0x6781db['querySelectorAll']('a#' + _0x349598 + '+*')['length'] || _0x2733ad['push']('.#.+[+~]');
        }), _0xd47623(function(_0x3d2b34) {
            _0x3d2b34['innerHTML'] = '<a\x20href=\x27\x27\x20disabled=\x27disabled\x27></a><select\x20disabled=\x27disabled\x27><option/></select>';
            var _0x3abfa8 = _0x1d507e['createElement']('input');
            _0x3abfa8['setAttribute']('type', 'hidden');
            _0x3d2b34['appendChild'](_0x3abfa8)['setAttribute']('name', 'D');
            _0x3d2b34['querySelectorAll']('[name=d]')['length'] && _0x2733ad['push']('name[\x5cx20\x5ct\x5cr\x5cn\x5cf]*[*^$|!~]?=');
            0x2 !== _0x3d2b34['querySelectorAll'](':enabled')['length'] && _0x2733ad['push'](':enabled', ':disabled');
            _0x46bae9['appendChild'](_0x3d2b34)['disabled'] = !0x0;
            0x2 !== _0x3d2b34['querySelectorAll'](':disabled')['length'] && _0x2733ad['push'](':enabled', ':disabled');
            _0x3d2b34['querySelectorAll']('*,:x');
            _0x2733ad['push'](',.*:');
        })), (_0x3dd420['matchesSelector'] = _0x3e7f47['test'](_0x4a8018 = _0x46bae9['matches'] || _0x46bae9['webkitMatchesSelector'] || _0x46bae9['mozMatchesSelector'] || _0x46bae9['oMatchesSelector'] || _0x46bae9['msMatchesSelector'])) && _0xd47623(function(_0x49a2cc) {
            _0x3dd420['disconnectedMatch'] = _0x4a8018['call'](_0x49a2cc, '*');
            _0x4a8018['call'](_0x49a2cc, '[s!=\x27\x27]:x');
            _0x305546['push']('!=', ':((?:\x5c\x5c.|[\x5cw-]|[^ -\x5cxa0])+)(?:\x5c(((\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22)|((?:\x5c\x5c.|[^\x5c\x5c()[\x5c]]|\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:\x5c\x5c.|[\x5cw-]|[^ -\x5cxa0])+)(?:[\x5cx20\x5ct\x5cr\x5cn\x5cf]*([*^$|!~]?=)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x27((?:\x5c\x5c.|[^\x5c\x5c\x27])*)\x27|\x22((?:\x5c\x5c.|[^\x5c\x5c\x22])*)\x22|((?:\x5c\x5c.|[\x5cw-]|[^ -\x5cxa0])+))|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c])*)|.*)\x5c)|)');
        }), _0x2733ad = _0x2733ad['length'] && RegExp(_0x2733ad['join']('|')), _0x305546 = _0x305546['length'] && RegExp(_0x305546['join']('|')), _0x1f779c = _0x3e7f47['test'](_0x46bae9['compareDocumentPosition']), _0x256b58 = _0x1f779c || _0x3e7f47['test'](_0x46bae9['contains']) ? function(_0x357370, _0x547f83) {
            var _0x3b85ec = 0x9 === _0x357370['nodeType'] ? _0x357370['documentElement'] : _0x357370,
                _0x2a92e6 = _0x547f83 && _0x547f83['parentNode'];
            return _0x357370 === _0x2a92e6 || !(!_0x2a92e6 || 0x1 !== _0x2a92e6['nodeType'] || !(_0x3b85ec['contains'] ? _0x3b85ec['contains'](_0x2a92e6) : _0x357370['compareDocumentPosition'] && 0x10 & _0x357370['compareDocumentPosition'](_0x2a92e6)));
        } : function(_0x308b7d, _0x58442e) {
            if (_0x58442e)
                for (; _0x58442e = _0x58442e['parentNode'];)
                    if (_0x58442e === _0x308b7d) return !0x0;
            return !0x1;
        }, _0x19b7a5 = _0x1f779c ? function(_0x52a2c9, _0x9ec9fe) {
            if (_0x52a2c9 === _0x9ec9fe) return _0x12aa16 = !0x0, 0x0;
            var _0x39c4b0 = !_0x52a2c9['compareDocumentPosition'] - !_0x9ec9fe['compareDocumentPosition'];
            return _0x39c4b0 ? _0x39c4b0 : (_0x39c4b0 = (_0x52a2c9['ownerDocument'] || _0x52a2c9) === (_0x9ec9fe['ownerDocument'] || _0x9ec9fe) ? _0x52a2c9['compareDocumentPosition'](_0x9ec9fe) : 0x1, 0x1 & _0x39c4b0 || !_0x3dd420['sortDetached'] && _0x9ec9fe['compareDocumentPosition'](_0x52a2c9) === _0x39c4b0 ? _0x52a2c9 === _0x1d507e || _0x52a2c9['ownerDocument'] === _0x2ebd69 && _0x256b58(_0x2ebd69, _0x52a2c9) ? -0x1 : _0x9ec9fe === _0x1d507e || _0x9ec9fe['ownerDocument'] === _0x2ebd69 && _0x256b58(_0x2ebd69, _0x9ec9fe) ? 0x1 : _0x3c3602 ? _0x29360f(_0x3c3602, _0x52a2c9) - _0x29360f(_0x3c3602, _0x9ec9fe) : 0x0 : 0x4 & _0x39c4b0 ? -0x1 : 0x1);
        } : function(_0x3ac8e0, _0x5cf5a2) {
            if (_0x3ac8e0 === _0x5cf5a2) return _0x12aa16 = !0x0, 0x0;
            var _0x1d437b, _0x829dc7 = 0x0;
            _0x1d437b = _0x3ac8e0['parentNode'];
            var _0x465c75 = _0x5cf5a2['parentNode'],
                _0x2a2f4b = [_0x3ac8e0],
                _0x1ea591 = [_0x5cf5a2];
            if (!_0x1d437b || !_0x465c75) return _0x3ac8e0 === _0x1d507e ? -0x1 : _0x5cf5a2 === _0x1d507e ? 0x1 : _0x1d437b ? -0x1 : _0x465c75 ? 0x1 : _0x3c3602 ? _0x29360f(_0x3c3602, _0x3ac8e0) - _0x29360f(_0x3c3602, _0x5cf5a2) : 0x0;
            if (_0x1d437b === _0x465c75) return _0x1dcbc9(_0x3ac8e0, _0x5cf5a2);
            for (_0x1d437b = _0x3ac8e0; _0x1d437b = _0x1d437b['parentNode'];) _0x2a2f4b['unshift'](_0x1d437b);
            for (_0x1d437b = _0x5cf5a2; _0x1d437b = _0x1d437b['parentNode'];) _0x1ea591['unshift'](_0x1d437b);
            for (; _0x2a2f4b[_0x829dc7] === _0x1ea591[_0x829dc7];) _0x829dc7++;
            return _0x829dc7 ? _0x1dcbc9(_0x2a2f4b[_0x829dc7], _0x1ea591[_0x829dc7]) : _0x2a2f4b[_0x829dc7] === _0x2ebd69 ? -0x1 : _0x1ea591[_0x829dc7] === _0x2ebd69 ? 0x1 : 0x0;
        }, _0x1d507e) : _0x1d507e;
    };
    _0x10e8cb['matches'] = function(_0x37ee27, _0xc2eb53) {
        return _0x10e8cb(_0x37ee27, null, null, _0xc2eb53);
    };
    _0x10e8cb['matchesSelector'] = function(_0x510f92, _0xa1794b) {
        if ((_0x510f92['ownerDocument'] || _0x510f92) !== _0x1d507e && _0x37e405(_0x510f92), _0xa1794b = _0xa1794b['replace'](_0x4ee71a, '=\x27$1\x27]'), _0x3dd420['matchesSelector'] && _0xa5a9b9 && !_0x11618f[_0xa1794b + '\x20'] && (!_0x305546 || !_0x305546['test'](_0xa1794b)) && (!_0x2733ad || !_0x2733ad['test'](_0xa1794b))) try {
            var _0x575558 = _0x4a8018['call'](_0x510f92, _0xa1794b);
            if (_0x575558 || _0x3dd420['disconnectedMatch'] || _0x510f92['document'] && 0xb !== _0x510f92['document']['nodeType']) return _0x575558;
        } catch (_0x2a2baa) {}
        return 0x0 < _0x10e8cb(_0xa1794b, _0x1d507e, null, [_0x510f92])['length'];
    };
    _0x10e8cb['contains'] = function(_0x34bf57, _0x3ab905) {
        return (_0x34bf57['ownerDocument'] || _0x34bf57) !== _0x1d507e && _0x37e405(_0x34bf57), _0x256b58(_0x34bf57, _0x3ab905);
    };
    _0x10e8cb['attr'] = function(_0x4ecca9, _0x11d28a) {
        (_0x4ecca9['ownerDocument'] || _0x4ecca9) !== _0x1d507e && _0x37e405(_0x4ecca9);
        var _0x4d2b35 = _0x36409e['attrHandle'][_0x11d28a['toLowerCase']()],
            _0x4d2b35 = _0x4d2b35 && _0x4b1aa2['call'](_0x36409e['attrHandle'], _0x11d28a['toLowerCase']()) ? _0x4d2b35(_0x4ecca9, _0x11d28a, !_0xa5a9b9) : void 0x0;
        return void 0x0 !== _0x4d2b35 ? _0x4d2b35 : _0x3dd420['attributes'] || !_0xa5a9b9 ? _0x4ecca9['getAttribute'](_0x11d28a) : (_0x4d2b35 = _0x4ecca9['getAttributeNode'](_0x11d28a)) && _0x4d2b35['specified'] ? _0x4d2b35['value'] : null;
    };
    _0x10e8cb['escape'] = function(_0x44e223) {
        return (_0x44e223 + '')['replace'](_0x4263e8, _0x4b0efc);
    };
    _0x10e8cb['error'] = function(_0x4552ab) {
        throw Error('Syntax\x20error,\x20unrecognized\x20expression:\x20' + _0x4552ab);
    };
    _0x10e8cb['uniqueSort'] = function(_0x3975ff) {
        var _0xf4914e, _0x33b3b4 = [],
            _0x5f029f = 0x0,
            _0x3394a9 = 0x0;
        if (_0x12aa16 = !_0x3dd420['detectDuplicates'], _0x3c3602 = !_0x3dd420['sortStable'] && _0x3975ff['slice'](0x0), _0x3975ff['sort'](_0x19b7a5), _0x12aa16) {
            for (; _0xf4914e = _0x3975ff[_0x3394a9++];) _0xf4914e === _0x3975ff[_0x3394a9] && (_0x5f029f = _0x33b3b4['push'](_0x3394a9));
            for (; _0x5f029f--;) _0x3975ff['splice'](_0x33b3b4[_0x5f029f], 0x1);
        }
        return _0x3c3602 = null, _0x3975ff;
    };
    _0x230657 = _0x10e8cb['getText'] = function(_0x5f0d4d) {
        var _0x158e1f, _0x25f35a = '',
            _0x2a3420 = 0x0;
        if (_0x158e1f = _0x5f0d4d['nodeType'])
            if (0x1 === _0x158e1f || 0x9 === _0x158e1f || 0xb === _0x158e1f) {
                if ('string' == typeof _0x5f0d4d['textContent']) return _0x5f0d4d['textContent'];
                for (_0x5f0d4d = _0x5f0d4d['firstChild']; _0x5f0d4d; _0x5f0d4d = _0x5f0d4d['nextSibling']) _0x25f35a += _0x230657(_0x5f0d4d);
            } else {
                if (0x3 === _0x158e1f || 0x4 === _0x158e1f) return _0x5f0d4d['nodeValue'];
            }
        else
            for (; _0x158e1f = _0x5f0d4d[_0x2a3420++];) _0x25f35a += _0x230657(_0x158e1f);
        return _0x25f35a;
    };
    _0x36409e = _0x10e8cb['selectors'] = {
        'cacheLength': 0x32,
        'createPseudo': _0x9e9e8d,
        'match': _0x348fbc,
        'attrHandle': {},
        'find': {},
        'relative': {
            '>': {
                'dir': 'parentNode',
                'first': !0x0
            },
            '\x20': {
                'dir': 'parentNode'
            },
            '+': {
                'dir': 'previousSibling',
                'first': !0x0
            },
            '~': {
                'dir': 'previousSibling'
            }
        },
        'preFilter': {
            'ATTR': function(_0x1bd558) {
                return _0x1bd558[0x1] = _0x1bd558[0x1]['replace'](_0x10373a, _0xe5a9e9), _0x1bd558[0x3] = (_0x1bd558[0x3] || _0x1bd558[0x4] || _0x1bd558[0x5] || '')['replace'](_0x10373a, _0xe5a9e9), '~=' === _0x1bd558[0x2] && (_0x1bd558[0x3] = '\x20' + _0x1bd558[0x3] + '\x20'), _0x1bd558['slice'](0x0, 0x4);
            },
            'CHILD': function(_0x4081c0) {
                return _0x4081c0[0x1] = _0x4081c0[0x1]['toLowerCase'](), 'nth' === _0x4081c0[0x1]['slice'](0x0, 0x3) ? (_0x4081c0[0x3] || _0x10e8cb['error'](_0x4081c0[0x0]), _0x4081c0[0x4] = +(_0x4081c0[0x4] ? _0x4081c0[0x5] + (_0x4081c0[0x6] || 0x1) : 0x2 * ('even' === _0x4081c0[0x3] || 'odd' === _0x4081c0[0x3])), _0x4081c0[0x5] = +(_0x4081c0[0x7] + _0x4081c0[0x8] || 'odd' === _0x4081c0[0x3])) : _0x4081c0[0x3] && _0x10e8cb['error'](_0x4081c0[0x0]), _0x4081c0;
            },
            'PSEUDO': function(_0x16b534) {
                var _0x3b9766, _0x3f7ec2 = !_0x16b534[0x6] && _0x16b534[0x2];
                return _0x348fbc['CHILD']['test'](_0x16b534[0x0]) ? null : (_0x16b534[0x3] ? _0x16b534[0x2] = _0x16b534[0x4] || _0x16b534[0x5] || '' : _0x3f7ec2 && _0x5e35b9['test'](_0x3f7ec2) && (_0x3b9766 = _0x165938(_0x3f7ec2, !0x0)) && (_0x3b9766 = _0x3f7ec2['indexOf'](')', _0x3f7ec2['length'] - _0x3b9766) - _0x3f7ec2['length']) && (_0x16b534[0x0] = _0x16b534[0x0]['slice'](0x0, _0x3b9766), _0x16b534[0x2] = _0x3f7ec2['slice'](0x0, _0x3b9766)), _0x16b534['slice'](0x0, 0x3));
            }
        },
        'filter': {
            'TAG': function(_0x29a2a5) {
                var _0x1b9677 = _0x29a2a5['replace'](_0x10373a, _0xe5a9e9)['toLowerCase']();
                return '*' === _0x29a2a5 ? function() {
                    return !0x0;
                } : function(_0x52eadf) {
                    return _0x52eadf['nodeName'] && _0x52eadf['nodeName']['toLowerCase']() === _0x1b9677;
                };
            },
            'CLASS': function(_0xacd9b0) {
                var _0x22ebcb = _0x1d89b2[_0xacd9b0 + '\x20'];
                return _0x22ebcb || (_0x22ebcb = RegExp('(^|[\x5cx20\x5ct\x5cr\x5cn\x5cf])' + _0xacd9b0 + '([\x5cx20\x5ct\x5cr\x5cn\x5cf]|$)')) && _0x1d89b2(_0xacd9b0, function(_0x24ac34) {
                    return _0x22ebcb['test']('string' == typeof _0x24ac34['className'] && _0x24ac34['className'] || 'undefined' != typeof _0x24ac34['getAttribute'] && _0x24ac34['getAttribute']('class') || '');
                });
            },
            'ATTR': function(_0x29a0bd, _0x52ef03, _0x531178) {
                return function(_0x2f13bd) {
                    _0x2f13bd = _0x10e8cb['attr'](_0x2f13bd, _0x29a0bd);
                    return null == _0x2f13bd ? '!=' === _0x52ef03 : !_0x52ef03 || (_0x2f13bd += '', '=' === _0x52ef03 ? _0x2f13bd === _0x531178 : '!=' === _0x52ef03 ? _0x2f13bd !== _0x531178 : '^=' === _0x52ef03 ? _0x531178 && 0x0 === _0x2f13bd['indexOf'](_0x531178) : '*=' === _0x52ef03 ? _0x531178 && -0x1 < _0x2f13bd['indexOf'](_0x531178) : '$=' === _0x52ef03 ? _0x531178 && _0x2f13bd['slice'](-_0x531178['length']) === _0x531178 : '~=' === _0x52ef03 ? -0x1 < ('\x20' + _0x2f13bd['replace'](_0x484dcf, '\x20') + '\x20')['indexOf'](_0x531178) : '|=' === _0x52ef03 && (_0x2f13bd === _0x531178 || _0x2f13bd['slice'](0x0, _0x531178['length'] + 0x1) === _0x531178 + '-'));
                };
            },
            'CHILD': function(_0x36cf94, _0x3a4e01, _0x353260, _0x23605a, _0x45a706) {
                var _0x12f015 = 'nth' !== _0x36cf94['slice'](0x0, 0x3),
                    _0x5871b7 = 'last' !== _0x36cf94['slice'](-0x4),
                    _0x540a18 = 'of-type' === _0x3a4e01;
                return 0x1 === _0x23605a && 0x0 === _0x45a706 ? function(_0x409026) {
                    return !!_0x409026['parentNode'];
                } : function(_0x44009e, _0x2422c1, _0x340039) {
                    var _0x262f71, _0x1b479c, _0x46ca3d, _0x224e58, _0x5c82b0, _0x2a1e22;
                    _0x2422c1 = _0x12f015 !== _0x5871b7 ? 'nextSibling' : 'previousSibling';
                    var _0xa30c41 = _0x44009e['parentNode'],
                        _0x3e556a = _0x540a18 && _0x44009e['nodeName']['toLowerCase']();
                    _0x340039 = !_0x340039 && !_0x540a18;
                    var _0x1d6fa7 = !0x1;
                    if (_0xa30c41) {
                        if (_0x12f015) {
                            for (; _0x2422c1;) {
                                for (_0x224e58 = _0x44009e; _0x224e58 = _0x224e58[_0x2422c1];)
                                    if (_0x540a18 ? _0x224e58['nodeName']['toLowerCase']() === _0x3e556a : 0x1 === _0x224e58['nodeType']) return !0x1;
                                _0x2a1e22 = _0x2422c1 = 'only' === _0x36cf94 && !_0x2a1e22 && 'nextSibling';
                            }
                            return !0x0;
                        }
                        if (_0x2a1e22 = [_0x5871b7 ? _0xa30c41['firstChild'] : _0xa30c41['lastChild']], _0x5871b7 && _0x340039) {
                            _0x224e58 = _0xa30c41;
                            _0x46ca3d = _0x224e58[_0x349598] || (_0x224e58[_0x349598] = {});
                            _0x1b479c = _0x46ca3d[_0x224e58['uniqueID']] || (_0x46ca3d[_0x224e58['uniqueID']] = {});
                            _0x262f71 = _0x1b479c[_0x36cf94] || [];
                            _0x1d6fa7 = (_0x5c82b0 = _0x262f71[0x0] === _0x2cd976 && _0x262f71[0x1]) && _0x262f71[0x2];
                            for (_0x224e58 = _0x5c82b0 && _0xa30c41['childNodes'][_0x5c82b0]; _0x224e58 = ++_0x5c82b0 && _0x224e58 && _0x224e58[_0x2422c1] || (_0x1d6fa7 = _0x5c82b0 = 0x0) || _0x2a1e22['pop']();)
                                if (0x1 === _0x224e58['nodeType'] && ++_0x1d6fa7 && _0x224e58 === _0x44009e) {
                                    _0x1b479c[_0x36cf94] = [_0x2cd976, _0x5c82b0, _0x1d6fa7];
                                    break;
                                }
                        } else if (_0x340039 && (_0x224e58 = _0x44009e, _0x46ca3d = _0x224e58[_0x349598] || (_0x224e58[_0x349598] = {}), _0x1b479c = _0x46ca3d[_0x224e58['uniqueID']] || (_0x46ca3d[_0x224e58['uniqueID']] = {}), _0x262f71 = _0x1b479c[_0x36cf94] || [], _0x5c82b0 = _0x262f71[0x0] === _0x2cd976 && _0x262f71[0x1], _0x1d6fa7 = _0x5c82b0), !0x1 === _0x1d6fa7)
                            for (;
                                (_0x224e58 = ++_0x5c82b0 && _0x224e58 && _0x224e58[_0x2422c1] || (_0x1d6fa7 = _0x5c82b0 = 0x0) || _0x2a1e22['pop']()) && (!(_0x540a18 ? _0x224e58['nodeName']['toLowerCase']() === _0x3e556a : 0x1 === _0x224e58['nodeType']) || !++_0x1d6fa7 || !(_0x340039 && (_0x46ca3d = _0x224e58[_0x349598] || (_0x224e58[_0x349598] = {}), _0x1b479c = _0x46ca3d[_0x224e58['uniqueID']] || (_0x46ca3d[_0x224e58['uniqueID']] = {}), _0x1b479c[_0x36cf94] = [_0x2cd976, _0x1d6fa7]), _0x224e58 === _0x44009e)););
                        return _0x1d6fa7 -= _0x45a706, _0x1d6fa7 === _0x23605a || 0x0 === _0x1d6fa7 % _0x23605a && 0x0 <= _0x1d6fa7 / _0x23605a;
                    }
                };
            },
            'PSEUDO': function(_0xe7e1f5, _0x25a089) {
                var _0xb80a97, _0x39374a = _0x36409e['pseudos'][_0xe7e1f5] || _0x36409e['setFilters'][_0xe7e1f5['toLowerCase']()] || _0x10e8cb['error']('unsupported\x20pseudo:\x20' + _0xe7e1f5);
                return _0x39374a[_0x349598] ? _0x39374a(_0x25a089) : 0x1 < _0x39374a['length'] ? (_0xb80a97 = [_0xe7e1f5, _0xe7e1f5, '', _0x25a089], _0x36409e['setFilters']['hasOwnProperty'](_0xe7e1f5['toLowerCase']()) ? _0x9e9e8d(function(_0x3e3182, _0x4d64a1) {
                    for (var _0x480706, _0x107b20 = _0x39374a(_0x3e3182, _0x25a089), _0x1d927e = _0x107b20['length']; _0x1d927e--;) _0x480706 = _0x29360f(_0x3e3182, _0x107b20[_0x1d927e]), _0x3e3182[_0x480706] = !(_0x4d64a1[_0x480706] = _0x107b20[_0x1d927e]);
                }) : function(_0x5caf5c) {
                    return _0x39374a(_0x5caf5c, 0x0, _0xb80a97);
                }) : _0x39374a;
            }
        },
        'pseudos': {
            'not': _0x9e9e8d(function(_0x39b6b4) {
                var _0xa07ea2 = [],
                    _0x313725 = [],
                    _0x54fe3f = _0x1d7940(_0x39b6b4['replace'](_0x1ac3b9, '$1'));
                return _0x54fe3f[_0x349598] ? _0x9e9e8d(function(_0x3f7c71, _0x1f4207, _0xa85bb8, _0x2c9d85) {
                    var _0x26ff15;
                    _0xa85bb8 = _0x54fe3f(_0x3f7c71, null, _0x2c9d85, []);
                    for (_0x2c9d85 = _0x3f7c71['length']; _0x2c9d85--;)(_0x26ff15 = _0xa85bb8[_0x2c9d85]) && (_0x3f7c71[_0x2c9d85] = !(_0x1f4207[_0x2c9d85] = _0x26ff15));
                }) : function(_0x2fcde5, _0x3b7f1f, _0x18303e) {
                    return _0xa07ea2[0x0] = _0x2fcde5, _0x54fe3f(_0xa07ea2, null, _0x18303e, _0x313725), _0xa07ea2[0x0] = null, !_0x313725['pop']();
                };
            }),
            'has': _0x9e9e8d(function(_0x4e8e7c) {
                return function(_0x513d58) {
                    return 0x0 < _0x10e8cb(_0x4e8e7c, _0x513d58)['length'];
                };
            }),
            'contains': _0x9e9e8d(function(_0x1c6421) {
                return _0x1c6421 = _0x1c6421['replace'](_0x10373a, _0xe5a9e9),
                    function(_0x3d7aa9) {
                        return -0x1 < (_0x3d7aa9['textContent'] || _0x3d7aa9['innerText'] || _0x230657(_0x3d7aa9))['indexOf'](_0x1c6421);
                    };
            }),
            'lang': _0x9e9e8d(function(_0x314e15) {
                return _0x1ec62e['test'](_0x314e15 || '') || _0x10e8cb['error']('unsupported\x20lang:\x20' + _0x314e15), _0x314e15 = _0x314e15['replace'](_0x10373a, _0xe5a9e9)['toLowerCase'](),
                    function(_0x4745b7) {
                        var _0x101f54;
                        do
                            if (_0x101f54 = _0xa5a9b9 ? _0x4745b7['lang'] : _0x4745b7['getAttribute']('xml:lang') || _0x4745b7['getAttribute']('lang')) return _0x101f54 = _0x101f54['toLowerCase'](), _0x101f54 === _0x314e15 || 0x0 === _0x101f54['indexOf'](_0x314e15 + '-'); while ((_0x4745b7 = _0x4745b7['parentNode']) && 0x1 === _0x4745b7['nodeType']);
                        return !0x1;
                    };
            }),
            'target': function(_0x3ecbcb) {
                var _0x2db51f = _0x4191f9['location'] && _0x4191f9['location']['hash'];
                return _0x2db51f && _0x2db51f['slice'](0x1) === _0x3ecbcb['id'];
            },
            'root': function(_0x55bcf8) {
                return _0x55bcf8 === _0x46bae9;
            },
            'focus': function(_0x4fcd1c) {
                return _0x4fcd1c === _0x1d507e['activeElement'] && (!_0x1d507e['hasFocus'] || _0x1d507e['hasFocus']()) && !(!_0x4fcd1c['type'] && !_0x4fcd1c['href'] && !~_0x4fcd1c['tabIndex']);
            },
            'enabled': _0x4f7785(!0x1),
            'disabled': _0x4f7785(!0x0),
            'checked': function(_0x170e1c) {
                var _0x4b2db3 = _0x170e1c['nodeName']['toLowerCase']();
                return 'input' === _0x4b2db3 && !!_0x170e1c['checked'] || 'option' === _0x4b2db3 && !!_0x170e1c['selected'];
            },
            'selected': function(_0x1f7ede) {
                return _0x1f7ede['parentNode'] && _0x1f7ede['parentNode']['selectedIndex'], !0x0 === _0x1f7ede['selected'];
            },
            'empty': function(_0xcd09dd) {
                for (_0xcd09dd = _0xcd09dd['firstChild']; _0xcd09dd; _0xcd09dd = _0xcd09dd['nextSibling'])
                    if (0x6 > _0xcd09dd['nodeType']) return !0x1;
                return !0x0;
            },
            'parent': function(_0x4171d1) {
                return !_0x36409e['pseudos']['empty'](_0x4171d1);
            },
            'header': function(_0x530f08) {
                return _0x3f6f61['test'](_0x530f08['nodeName']);
            },
            'input': function(_0x114f3b) {
                return _0x31b56a['test'](_0x114f3b['nodeName']);
            },
            'button': function(_0x2bddee) {
                var _0xdb2653 = _0x2bddee['nodeName']['toLowerCase']();
                return 'input' === _0xdb2653 && 'button' === _0x2bddee['type'] || 'button' === _0xdb2653;
            },
            'text': function(_0xbb6805) {
                var _0x48e4d5;
                return 'input' === _0xbb6805['nodeName']['toLowerCase']() && 'text' === _0xbb6805['type'] && (null == (_0x48e4d5 = _0xbb6805['getAttribute']('type')) || 'text' === _0x48e4d5['toLowerCase']());
            },
            'first': _0x2d9388(function() {
                return [0x0];
            }),
            'last': _0x2d9388(function(_0x3059c8, _0x1e481b) {
                return [_0x1e481b - 0x1];
            }),
            'eq': _0x2d9388(function(_0x29b8b3, _0x2b1af6, _0x20fdef) {
                return [0x0 > _0x20fdef ? _0x20fdef + _0x2b1af6 : _0x20fdef];
            }),
            'even': _0x2d9388(function(_0x372277, _0x184c70) {
                for (var _0x2779a8 = 0x0; _0x2779a8 < _0x184c70; _0x2779a8 += 0x2) _0x372277['push'](_0x2779a8);
                return _0x372277;
            }),
            'odd': _0x2d9388(function(_0x1d77b6, _0x178d62) {
                for (var _0x2ce4c8 = 0x1; _0x2ce4c8 < _0x178d62; _0x2ce4c8 += 0x2) _0x1d77b6['push'](_0x2ce4c8);
                return _0x1d77b6;
            }),
            'lt': _0x2d9388(function(_0x390e9b, _0x44a5aa, _0x99f48e) {
                for (_0x44a5aa = 0x0 > _0x99f48e ? _0x99f48e + _0x44a5aa : _0x99f48e; 0x0 <= --_0x44a5aa;) _0x390e9b['push'](_0x44a5aa);
                return _0x390e9b;
            }),
            'gt': _0x2d9388(function(_0x30cddf, _0x4bdcbc, _0x693a0b) {
                for (_0x693a0b = 0x0 > _0x693a0b ? _0x693a0b + _0x4bdcbc : _0x693a0b; ++_0x693a0b < _0x4bdcbc;) _0x30cddf['push'](_0x693a0b);
                return _0x30cddf;
            })
        }
    };
    _0x36409e['pseudos']['nth'] = _0x36409e['pseudos']['eq'];
    for (_0x4b53fe in {
            'radio': !0x0,
            'checkbox': !0x0,
            'file': !0x0,
            'password': !0x0,
            'image': !0x0
        }) _0x36409e['pseudos'][_0x4b53fe] = _0x52671f(_0x4b53fe);
    for (_0x4b53fe in {
            'submit': !0x0,
            'reset': !0x0
        }) _0x36409e['pseudos'][_0x4b53fe] = _0x2ff369(_0x4b53fe);
    _0x5bdd1f['prototype'] = _0x36409e['filters'] = _0x36409e['pseudos'];
    _0x36409e['setFilters'] = new _0x5bdd1f();
    _0x165938 = _0x10e8cb['tokenize'] = function(_0x542dd3, _0x39ff31) {
        var _0x1ad9ea, _0x38f6c0, _0x2afa4f, _0x471320, _0x536d5d, _0x36fdd4, _0x2bd93f;
        if (_0x536d5d = _0x4171d8[_0x542dd3 + '\x20']) return _0x39ff31 ? 0x0 : _0x536d5d['slice'](0x0);
        _0x536d5d = _0x542dd3;
        _0x36fdd4 = [];
        for (_0x2bd93f = _0x36409e['preFilter']; _0x536d5d;) {
            _0x1ad9ea && !(_0x38f6c0 = _0x2e5189['exec'](_0x536d5d)) || (_0x38f6c0 && (_0x536d5d = _0x536d5d['slice'](_0x38f6c0[0x0]['length']) || _0x536d5d), _0x36fdd4['push'](_0x2afa4f = []));
            _0x1ad9ea = !0x1;
            (_0x38f6c0 = _0x5321f1['exec'](_0x536d5d)) && (_0x1ad9ea = _0x38f6c0['shift'](), _0x2afa4f['push']({
                'value': _0x1ad9ea,
                'type': _0x38f6c0[0x0]['replace'](_0x1ac3b9, '\x20')
            }), _0x536d5d = _0x536d5d['slice'](_0x1ad9ea['length']));
            for (_0x471320 in _0x36409e['filter']) !(_0x38f6c0 = _0x348fbc[_0x471320]['exec'](_0x536d5d)) || _0x2bd93f[_0x471320] && !(_0x38f6c0 = _0x2bd93f[_0x471320](_0x38f6c0)) || (_0x1ad9ea = _0x38f6c0['shift'](), _0x2afa4f['push']({
                'value': _0x1ad9ea,
                'type': _0x471320,
                'matches': _0x38f6c0
            }), _0x536d5d = _0x536d5d['slice'](_0x1ad9ea['length']));
            if (!_0x1ad9ea) break;
        }
        return _0x39ff31 ? _0x536d5d['length'] : _0x536d5d ? _0x10e8cb['error'](_0x542dd3) : _0x4171d8(_0x542dd3, _0x36fdd4)['slice'](0x0);
    };
    _0x539298 = (_0x1d7940 = _0x10e8cb['compile'] = function(_0xf54160, _0x4a5f05) {
        var _0x5ef996, _0x3fec0f = [],
            _0x570d86 = [],
            _0x38f977 = _0x11618f[_0xf54160 + '\x20'];
        if (!_0x38f977) {
            _0x4a5f05 || (_0x4a5f05 = _0x165938(_0xf54160));
            for (_0x5ef996 = _0x4a5f05['length']; _0x5ef996--;) _0x38f977 = _0x3db53c(_0x4a5f05[_0x5ef996]), _0x38f977[_0x349598] ? _0x3fec0f['push'](_0x38f977) : _0x570d86['push'](_0x38f977);
            _0x5ef996 = _0x11618f;
            var _0x2645d5 = 0x0 < _0x3fec0f['length'],
                _0x242412 = 0x0 < _0x570d86['length'],
                _0x38f977 = function(_0x108c99, _0x17b5da, _0x30d05d, _0x16f5eb, _0x5b3b0f) {
                    var _0x55f7ad, _0xebedfa, _0x285a99, _0x25c484 = 0x0,
                        _0x35bd4f = '0',
                        _0x1b4092 = _0x108c99 && [],
                        _0x4681fe = [],
                        _0x4d9e89 = _0x41fde6,
                        _0xa62690 = _0x108c99 || _0x242412 && _0x36409e['find']['TAG']('*', _0x5b3b0f),
                        _0x55cdba = _0x2cd976 += null == _0x4d9e89 ? 0x1 : Math['random']() || 0.1,
                        _0x4a4e35 = _0xa62690['length'];
                    for (_0x5b3b0f && (_0x41fde6 = _0x17b5da === _0x1d507e || _0x17b5da || _0x5b3b0f); _0x35bd4f !== _0x4a4e35 && null != (_0x55f7ad = _0xa62690[_0x35bd4f]); _0x35bd4f++) {
                        if (_0x242412 && _0x55f7ad) {
                            _0xebedfa = 0x0;
                            for (_0x17b5da || _0x55f7ad['ownerDocument'] === _0x1d507e || (_0x37e405(_0x55f7ad), _0x30d05d = !_0xa5a9b9); _0x285a99 = _0x570d86[_0xebedfa++];)
                                if (_0x285a99(_0x55f7ad, _0x17b5da || _0x1d507e, _0x30d05d)) {
                                    _0x16f5eb['push'](_0x55f7ad);
                                    break;
                                } _0x5b3b0f && (_0x2cd976 = _0x55cdba);
                        }
                        _0x2645d5 && ((_0x55f7ad = !_0x285a99 && _0x55f7ad) && _0x25c484--, _0x108c99 && _0x1b4092['push'](_0x55f7ad));
                    }
                    if (_0x25c484 += _0x35bd4f, _0x2645d5 && _0x35bd4f !== _0x25c484) {
                        for (_0xebedfa = 0x0; _0x285a99 = _0x3fec0f[_0xebedfa++];) _0x285a99(_0x1b4092, _0x4681fe, _0x17b5da, _0x30d05d);
                        if (_0x108c99) {
                            if (0x0 < _0x25c484)
                                for (; _0x35bd4f--;) _0x1b4092[_0x35bd4f] || _0x4681fe[_0x35bd4f] || (_0x4681fe[_0x35bd4f] = _0x1f8361['call'](_0x16f5eb));
                            _0x4681fe = _0x3822a5(_0x4681fe);
                        }
                        _0x5f453c['apply'](_0x16f5eb, _0x4681fe);
                        _0x5b3b0f && !_0x108c99 && 0x0 < _0x4681fe['length'] && 0x1 < _0x25c484 + _0x3fec0f['length'] && _0x10e8cb['uniqueSort'](_0x16f5eb);
                    }
                    return _0x5b3b0f && (_0x2cd976 = _0x55cdba, _0x41fde6 = _0x4d9e89), _0x1b4092;
                },
                _0x38f977 = _0x2645d5 ? _0x9e9e8d(_0x38f977) : _0x38f977,
                _0x38f977 = _0x5ef996(_0xf54160, _0x38f977);
            _0x38f977['selector'] = _0xf54160;
        }
        return _0x38f977;
    }, _0x3d8668 = _0x10e8cb['select'] = function(_0x4d0992, _0x456435, _0x23f1af, _0xeaf846) {
        var _0x20a31f, _0x9968e1, _0x5b0a1d, _0x8e76c2, _0x43b41c, _0x31a216 = 'function' == typeof _0x4d0992 && _0x4d0992,
            _0x4b6473 = !_0xeaf846 && _0x165938(_0x4d0992 = _0x31a216['selector'] || _0x4d0992);
        if (_0x23f1af = _0x23f1af || [], 0x1 === _0x4b6473['length']) {
            if (_0x9968e1 = _0x4b6473[0x0] = _0x4b6473[0x0]['slice'](0x0), 0x2 < _0x9968e1['length'] && 'ID' === (_0x5b0a1d = _0x9968e1[0x0])['type'] && 0x9 === _0x456435['nodeType'] && _0xa5a9b9 && _0x36409e['relative'][_0x9968e1[0x1]['type']]) {
                if (_0x456435 = (_0x36409e['find']['ID'](_0x5b0a1d['matches'][0x0]['replace'](_0x10373a, _0xe5a9e9), _0x456435) || [])[0x0], !_0x456435) return _0x23f1af;
                _0x31a216 && (_0x456435 = _0x456435['parentNode']);
                _0x4d0992 = _0x4d0992['slice'](_0x9968e1['shift']()['value']['length']);
            }
            for (_0x20a31f = _0x348fbc['needsContext']['test'](_0x4d0992) ? 0x0 : _0x9968e1['length']; _0x20a31f-- && !(_0x5b0a1d = _0x9968e1[_0x20a31f], _0x36409e['relative'][_0x8e76c2 = _0x5b0a1d['type']]);)
                if ((_0x43b41c = _0x36409e['find'][_0x8e76c2]) && (_0xeaf846 = _0x43b41c(_0x5b0a1d['matches'][0x0]['replace'](_0x10373a, _0xe5a9e9), _0x928da4['test'](_0x9968e1[0x0]['type']) && _0xb3446e(_0x456435['parentNode']) || _0x456435))) {
                    if (_0x9968e1['splice'](_0x20a31f, 0x1), _0x4d0992 = _0xeaf846['length'] && _0x243cd4(_0x9968e1), !_0x4d0992) return _0x5f453c['apply'](_0x23f1af, _0xeaf846), _0x23f1af;
                    break;
                }
        }
        return (_0x31a216 || _0x1d7940(_0x4d0992, _0x4b6473))(_0xeaf846, _0x456435, !_0xa5a9b9, _0x23f1af, !_0x456435 || _0x928da4['test'](_0x4d0992) && _0xb3446e(_0x456435['parentNode']) || _0x456435), _0x23f1af;
    }, _0x3dd420['sortStable'] = _0x349598['split']('')['sort'](_0x19b7a5)['join']('') === _0x349598, _0x3dd420['detectDuplicates'] = !!_0x12aa16, _0x37e405(), _0x3dd420['sortDetached'] = _0xd47623(function(_0x17e29c) {
        return 0x1 & _0x17e29c['compareDocumentPosition'](_0x1d507e['createElement']('fieldset'));
    }), _0xd47623(function(_0x4c94a7) {
        return _0x4c94a7['innerHTML'] = '<a\x20href=\x27#\x27></a>', '#' === _0x4c94a7['firstChild']['getAttribute']('href');
    }) || _0x1a6bcb('type|href|height|width', function(_0x49bb4d, _0x9f2048, _0x363624) {
        if (!_0x363624) return _0x49bb4d['getAttribute'](_0x9f2048, 'type' === _0x9f2048['toLowerCase']() ? 0x1 : 0x2);
    }), _0x3dd420['attributes'] && _0xd47623(function(_0x4efe8d) {
        return _0x4efe8d['innerHTML'] = '<input/>', _0x4efe8d['firstChild']['setAttribute']('value', ''), '' === _0x4efe8d['firstChild']['getAttribute']('value');
    }) || _0x1a6bcb('value', function(_0x342a4c, _0x2f590f, _0x4342bf) {
        if (!_0x4342bf && 'input' === _0x342a4c['nodeName']['toLowerCase']()) return _0x342a4c['defaultValue'];
    }), _0xd47623(function(_0x19e867) {
        return null == _0x19e867['getAttribute']('disabled');
    }) || _0x1a6bcb('checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', function(_0x44d990, _0x1270ef, _0x4e31cb) {
        var _0x5ee322;
        if (!_0x4e31cb) return !0x0 === _0x44d990[_0x1270ef] ? _0x1270ef['toLowerCase']() : (_0x5ee322 = _0x44d990['getAttributeNode'](_0x1270ef)) && _0x5ee322['specified'] ? _0x5ee322['value'] : null;
    }), _0x10e8cb);
    _0x263ab8['find'] = _0x539298;
    _0x263ab8['expr'] = _0x539298['selectors'];
    _0x263ab8['expr'][':'] = _0x263ab8['expr']['pseudos'];
    _0x263ab8['uniqueSort'] = _0x263ab8['unique'] = _0x539298['uniqueSort'];
    _0x263ab8['text'] = _0x539298['getText'];
    _0x263ab8['isXMLDoc'] = _0x539298['isXML'];
    _0x263ab8['contains'] = _0x539298['contains'];
    _0x263ab8['escapeSelector'] = _0x539298['escape'];
    var _0xdb7711 = function(_0x5b5cc4, _0x631a99, _0x5e5b4b) {
            for (var _0x5e2c8e = [], _0x4ede41 = void 0x0 !== _0x5e5b4b;
                (_0x5b5cc4 = _0x5b5cc4[_0x631a99]) && 0x9 !== _0x5b5cc4['nodeType'];)
                if (0x1 === _0x5b5cc4['nodeType']) {
                    if (_0x4ede41 && _0x263ab8(_0x5b5cc4)['is'](_0x5e5b4b)) break;
                    _0x5e2c8e['push'](_0x5b5cc4);
                } return _0x5e2c8e;
        },
        _0x5e075d = function(_0x202cd4, _0x430140) {
            for (var _0x50cb71 = []; _0x202cd4; _0x202cd4 = _0x202cd4['nextSibling']) 0x1 === _0x202cd4['nodeType'] && _0x202cd4 !== _0x430140 && _0x50cb71['push'](_0x202cd4);
            return _0x50cb71;
        },
        _0x19bb97 = _0x263ab8['expr']['match']['needsContext'],
        _0x4d5383 = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        _0x14c83d = /^.[^:#\[\.,]*$/;
    _0x263ab8['filter'] = function(_0x34f0ef, _0x1ed92c, _0x3b6dea) {
        var _0x54f823 = _0x1ed92c[0x0];
        return _0x3b6dea && (_0x34f0ef = ':not(' + _0x34f0ef + ')'), 0x1 === _0x1ed92c['length'] && 0x1 === _0x54f823['nodeType'] ? _0x263ab8['find']['matchesSelector'](_0x54f823, _0x34f0ef) ? [_0x54f823] : [] : _0x263ab8['find']['matches'](_0x34f0ef, _0x263ab8['grep'](_0x1ed92c, function(_0x474990) {
            return 0x1 === _0x474990['nodeType'];
        }));
    };
    _0x263ab8['fn']['extend']({
        'find': function(_0x192b45) {
            var _0x56811c, _0x483f2f, _0x2d978c = this['length'],
                _0x3f8ad4 = this;
            if ('string' != typeof _0x192b45) return this['pushStack'](_0x263ab8(_0x192b45)['filter'](function() {
                for (_0x56811c = 0x0; _0x56811c < _0x2d978c; _0x56811c++)
                    if (_0x263ab8['contains'](_0x3f8ad4[_0x56811c], this)) return !0x0;
            }));
            _0x483f2f = this['pushStack']([]);
            for (_0x56811c = 0x0; _0x56811c < _0x2d978c; _0x56811c++) _0x263ab8['find'](_0x192b45, _0x3f8ad4[_0x56811c], _0x483f2f);
            return 0x1 < _0x2d978c ? _0x263ab8['uniqueSort'](_0x483f2f) : _0x483f2f;
        },
        'filter': function(_0x3acc3e) {
            return this['pushStack'](_0xf45094(this, _0x3acc3e || [], !0x1));
        },
        'not': function(_0x5a821d) {
            return this['pushStack'](_0xf45094(this, _0x5a821d || [], !0x0));
        },
        'is': function(_0x29043d) {
            return !!_0xf45094(this, 'string' == typeof _0x29043d && _0x19bb97['test'](_0x29043d) ? _0x263ab8(_0x29043d) : _0x29043d || [], !0x1)['length'];
        }
    });
    var _0xafe5a, _0x296f6a = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (_0x263ab8['fn']['init'] = function(_0x23de2b, _0x2c0243, _0x5552a9) {
        var _0x4978bf, _0xc3d02e;
        if (!_0x23de2b) return this;
        if (_0x5552a9 = _0x5552a9 || _0xafe5a, 'string' == typeof _0x23de2b) {
            if (_0x4978bf = '<' === _0x23de2b[0x0] && '>' === _0x23de2b[_0x23de2b['length'] - 0x1] && 0x3 <= _0x23de2b['length'] ? [null, _0x23de2b, null] : _0x296f6a['exec'](_0x23de2b), !_0x4978bf || !_0x4978bf[0x1] && _0x2c0243) return !_0x2c0243 || _0x2c0243['jquery'] ? (_0x2c0243 || _0x5552a9)['find'](_0x23de2b) : this['constructor'](_0x2c0243)['find'](_0x23de2b);
            if (_0x4978bf[0x1]) {
                if (_0x2c0243 = _0x2c0243 instanceof _0x263ab8 ? _0x2c0243[0x0] : _0x2c0243, _0x263ab8['merge'](this, _0x263ab8['parseHTML'](_0x4978bf[0x1], _0x2c0243 && _0x2c0243['nodeType'] ? _0x2c0243['ownerDocument'] || _0x2c0243 : _0x1b3fe3, !0x0)), _0x4d5383['test'](_0x4978bf[0x1]) && _0x263ab8['isPlainObject'](_0x2c0243))
                    for (_0x4978bf in _0x2c0243) _0x263ab8['isFunction'](this[_0x4978bf]) ? this[_0x4978bf](_0x2c0243[_0x4978bf]) : this['attr'](_0x4978bf, _0x2c0243[_0x4978bf]);
                return this;
            }
            return _0xc3d02e = _0x1b3fe3['getElementById'](_0x4978bf[0x2]), _0xc3d02e && (this[0x0] = _0xc3d02e, this['length'] = 0x1), this;
        }
        return _0x23de2b['nodeType'] ? (this[0x0] = _0x23de2b, this['length'] = 0x1, this) : _0x263ab8['isFunction'](_0x23de2b) ? void 0x0 !== _0x5552a9['ready'] ? _0x5552a9['ready'](_0x23de2b) : _0x23de2b(_0x263ab8) : _0x263ab8['makeArray'](_0x23de2b, this);
    })['prototype'] = _0x263ab8['fn'];
    _0xafe5a = _0x263ab8(_0x1b3fe3);
    var _0x26dfb4 = /^(?:parents|prev(?:Until|All))/,
        _0x3df1ba = {
            'children': !0x0,
            'contents': !0x0,
            'next': !0x0,
            'prev': !0x0
        };
    _0x263ab8['fn']['extend']({
        'has': function(_0x33ee13) {
            var _0x3fb023 = _0x263ab8(_0x33ee13, this),
                _0x583edd = _0x3fb023['length'];
            return this['filter'](function() {
                for (var _0x1005a1 = 0x0; _0x1005a1 < _0x583edd; _0x1005a1++)
                    if (_0x263ab8['contains'](this, _0x3fb023[_0x1005a1])) return !0x0;
            });
        },
        'closest': function(_0x5e3ec6, _0x1977cd) {
            var _0x4e6974, _0x46eb58 = 0x0,
                _0x63231 = this['length'],
                _0x5726e3 = [],
                _0x482a45 = 'string' != typeof _0x5e3ec6 && _0x263ab8(_0x5e3ec6);
            if (!_0x19bb97['test'](_0x5e3ec6))
                for (; _0x46eb58 < _0x63231; _0x46eb58++)
                    for (_0x4e6974 = this[_0x46eb58]; _0x4e6974 && _0x4e6974 !== _0x1977cd; _0x4e6974 = _0x4e6974['parentNode'])
                        if (0xb > _0x4e6974['nodeType'] && (_0x482a45 ? -0x1 < _0x482a45['index'](_0x4e6974) : 0x1 === _0x4e6974['nodeType'] && _0x263ab8['find']['matchesSelector'](_0x4e6974, _0x5e3ec6))) {
                            _0x5726e3['push'](_0x4e6974);
                            break;
                        } return this['pushStack'](0x1 < _0x5726e3['length'] ? _0x263ab8['uniqueSort'](_0x5726e3) : _0x5726e3);
        },
        'index': function(_0x2a60ae) {
            return _0x2a60ae ? 'string' == typeof _0x2a60ae ? _0x10e586['call'](_0x263ab8(_0x2a60ae), this[0x0]) : _0x10e586['call'](this, _0x2a60ae['jquery'] ? _0x2a60ae[0x0] : _0x2a60ae) : this[0x0] && this[0x0]['parentNode'] ? this['first']()['prevAll']()['length'] : -0x1;
        },
        'add': function(_0x4faf10, _0x69c6f5) {
            return this['pushStack'](_0x263ab8['uniqueSort'](_0x263ab8['merge'](this['get'](), _0x263ab8(_0x4faf10, _0x69c6f5))));
        },
        'addBack': function(_0x3c5fc4) {
            return this['add'](null == _0x3c5fc4 ? this['prevObject'] : this['prevObject']['filter'](_0x3c5fc4));
        }
    });
    _0x263ab8['each']({
        'parent': function(_0x26094c) {
            return (_0x26094c = _0x26094c['parentNode']) && 0xb !== _0x26094c['nodeType'] ? _0x26094c : null;
        },
        'parents': function(_0x186fc0) {
            return _0xdb7711(_0x186fc0, 'parentNode');
        },
        'parentsUntil': function(_0x154f25, _0xb5b664, _0x3b39af) {
            return _0xdb7711(_0x154f25, 'parentNode', _0x3b39af);
        },
        'next': function(_0x2eef16) {
            return _0x350c11(_0x2eef16, 'nextSibling');
        },
        'prev': function(_0x28112b) {
            return _0x350c11(_0x28112b, 'previousSibling');
        },
        'nextAll': function(_0x331dcd) {
            return _0xdb7711(_0x331dcd, 'nextSibling');
        },
        'prevAll': function(_0x297cf5) {
            return _0xdb7711(_0x297cf5, 'previousSibling');
        },
        'nextUntil': function(_0x47fdb5, _0xd35865, _0x94e1f2) {
            return _0xdb7711(_0x47fdb5, 'nextSibling', _0x94e1f2);
        },
        'prevUntil': function(_0x28ca13, _0x15d637, _0x51faee) {
            return _0xdb7711(_0x28ca13, 'previousSibling', _0x51faee);
        },
        'siblings': function(_0x42cac2) {
            return _0x5e075d((_0x42cac2['parentNode'] || {})['firstChild'], _0x42cac2);
        },
        'children': function(_0x633289) {
            return _0x5e075d(_0x633289['firstChild']);
        },
        'contents': function(_0x56efbe) {
            return _0x3b9113(_0x56efbe, 'iframe') ? _0x56efbe['contentDocument'] : (_0x3b9113(_0x56efbe, 'template') && (_0x56efbe = _0x56efbe['content'] || _0x56efbe), _0x263ab8['merge']([], _0x56efbe['childNodes']));
        }
    }, function(_0x3f6036, _0x146387) {
        _0x263ab8['fn'][_0x3f6036] = function(_0x38666f, _0x298839) {
            var _0x8a52e9 = _0x263ab8['map'](this, _0x146387, _0x38666f);
            return 'Until' !== _0x3f6036['slice'](-0x5) && (_0x298839 = _0x38666f), _0x298839 && 'string' == typeof _0x298839 && (_0x8a52e9 = _0x263ab8['filter'](_0x298839, _0x8a52e9)), 0x1 < this['length'] && (_0x3df1ba[_0x3f6036] || _0x263ab8['uniqueSort'](_0x8a52e9), _0x26dfb4['test'](_0x3f6036) && _0x8a52e9['reverse']()), this['pushStack'](_0x8a52e9);
        };
    });
    var _0x5e732e = /[^\x20\t\r\n\f]+/g;
    _0x263ab8['Callbacks'] = function(_0x1fe9c5) {
        var _0x4fb572;
        if ('string' == typeof _0x1fe9c5) {
            var _0x3f3a1e = {};
            _0x4fb572 = (_0x263ab8['each'](_0x1fe9c5['match'](_0x5e732e) || [], function(_0x4f8e95, _0x63c1b1) {
                _0x3f3a1e[_0x63c1b1] = !0x0;
            }), _0x3f3a1e);
        } else _0x4fb572 = _0x263ab8['extend']({}, _0x1fe9c5);
        _0x1fe9c5 = _0x4fb572;
        var _0x7d6c14, _0x56f602, _0xfc5beb, _0x217df6, _0x18252c = [],
            _0x4f2723 = [],
            _0x50220d = -0x1,
            _0x25713b = function() {
                _0x217df6 = _0x217df6 || _0x1fe9c5['once'];
                for (_0xfc5beb = _0x7d6c14 = !0x0; _0x4f2723['length']; _0x50220d = -0x1)
                    for (_0x56f602 = _0x4f2723['shift'](); ++_0x50220d < _0x18252c['length'];) !0x1 === _0x18252c[_0x50220d]['apply'](_0x56f602[0x0], _0x56f602[0x1]) && _0x1fe9c5['stopOnFalse'] && (_0x50220d = _0x18252c['length'], _0x56f602 = !0x1);
                _0x1fe9c5['memory'] || (_0x56f602 = !0x1);
                _0x7d6c14 = !0x1;
                _0x217df6 && (_0x18252c = _0x56f602 ? [] : '');
            },
            _0x190629 = {
                'add': function() {
                    return _0x18252c && (_0x56f602 && !_0x7d6c14 && (_0x50220d = _0x18252c['length'] - 0x1, _0x4f2723['push'](_0x56f602)), function _0x5debbf(_0x4a1f5a) {
                        _0x263ab8['each'](_0x4a1f5a, function(_0xdcc2b8, _0x407976) {
                            _0x263ab8['isFunction'](_0x407976) ? _0x1fe9c5['unique'] && _0x190629['has'](_0x407976) || _0x18252c['push'](_0x407976) : _0x407976 && _0x407976['length'] && 'string' !== _0x263ab8['type'](_0x407976) && _0x5debbf(_0x407976);
                        });
                    }(arguments), _0x56f602 && !_0x7d6c14 && _0x25713b()), this;
                },
                'remove': function() {
                    return _0x263ab8['each'](arguments, function(_0x552a53, _0x37c634) {
                        for (var _0x12a84b; - 0x1 < (_0x12a84b = _0x263ab8['inArray'](_0x37c634, _0x18252c, _0x12a84b));) _0x18252c['splice'](_0x12a84b, 0x1), _0x12a84b <= _0x50220d && _0x50220d--;
                    }), this;
                },
                'has': function(_0x26bd78) {
                    return _0x26bd78 ? -0x1 < _0x263ab8['inArray'](_0x26bd78, _0x18252c) : 0x0 < _0x18252c['length'];
                },
                'empty': function() {
                    return _0x18252c && (_0x18252c = []), this;
                },
                'disable': function() {
                    return _0x217df6 = _0x4f2723 = [], _0x18252c = _0x56f602 = '', this;
                },
                'disabled': function() {
                    return !_0x18252c;
                },
                'lock': function() {
                    return _0x217df6 = _0x4f2723 = [], _0x56f602 || _0x7d6c14 || (_0x18252c = _0x56f602 = ''), this;
                },
                'locked': function() {
                    return !!_0x217df6;
                },
                'fireWith': function(_0x3773b8, _0xd34206) {
                    return _0x217df6 || (_0xd34206 = _0xd34206 || [], _0xd34206 = [_0x3773b8, _0xd34206['slice'] ? _0xd34206['slice']() : _0xd34206], _0x4f2723['push'](_0xd34206), _0x7d6c14 || _0x25713b()), this;
                },
                'fire': function() {
                    return _0x190629['fireWith'](this, arguments), this;
                },
                'fired': function() {
                    return !!_0xfc5beb;
                }
            };
        return _0x190629;
    };
    _0x263ab8['extend']({
        'Deferred': function(_0x505bad) {
            var _0x5cb39c = [
                    ['notify', 'progress', _0x263ab8['Callbacks']('memory'), _0x263ab8['Callbacks']('memory'), 0x2],
                    ['resolve', 'done', _0x263ab8['Callbacks']('once\x20memory'), _0x263ab8['Callbacks']('once\x20memory'), 0x0, 'resolved'],
                    ['reject', 'fail', _0x263ab8['Callbacks']('once\x20memory'), _0x263ab8['Callbacks']('once\x20memory'), 0x1, 'rejected']
                ],
                _0x44d77d = 'pending',
                _0x150d08 = {
                    'state': function() {
                        return _0x44d77d;
                    },
                    'always': function() {
                        return _0x454380['done'](arguments)['fail'](arguments), this;
                    },
                    'catch': function(_0x1c65f4) {
                        return _0x150d08['then'](null, _0x1c65f4);
                    },
                    'pipe': function() {
                        var _0x3dfa04 = arguments;
                        return _0x263ab8['Deferred'](function(_0x5cde22) {
                            _0x263ab8['each'](_0x5cb39c, function(_0x34c9b1, _0x24419f) {
                                var _0x2d6885 = _0x263ab8['isFunction'](_0x3dfa04[_0x24419f[0x4]]) && _0x3dfa04[_0x24419f[0x4]];
                                _0x454380[_0x24419f[0x1]](function() {
                                    var _0x3d103a = _0x2d6885 && _0x2d6885['apply'](this, arguments);
                                    _0x3d103a && _0x263ab8['isFunction'](_0x3d103a['promise']) ? _0x3d103a['promise']()['progress'](_0x5cde22['notify'])['done'](_0x5cde22['resolve'])['fail'](_0x5cde22['reject']) : _0x5cde22[_0x24419f[0x0] + 'With'](this, _0x2d6885 ? [_0x3d103a] : arguments);
                                });
                            });
                            _0x3dfa04 = null;
                        })['promise']();
                    },
                    'then': function(_0x128cb0, _0xdca225, _0x141f2a) {
                        function _0x1a6914(_0x488f74, _0x2af32c, _0x338789, _0x4cc300) {
                            return function() {
                                var _0x1a3a04 = this,
                                    _0x18c647 = arguments,
                                    _0x5178ce = function() {
                                        var _0x1055fc, _0x1f0acd;
                                        if (!(_0x488f74 < _0x5a363b)) {
                                            if (_0x1055fc = _0x338789['apply'](_0x1a3a04, _0x18c647), _0x1055fc === _0x2af32c['promise']()) throw new TypeError('Thenable\x20self-resolution');
                                            _0x1f0acd = _0x1055fc && ('object' == typeof _0x1055fc || 'function' == typeof _0x1055fc) && _0x1055fc['then'];
                                            _0x263ab8['isFunction'](_0x1f0acd) ? _0x4cc300 ? _0x1f0acd['call'](_0x1055fc, _0x1a6914(_0x5a363b, _0x2af32c, _0x33ff4a, _0x4cc300), _0x1a6914(_0x5a363b, _0x2af32c, _0xd81d7d, _0x4cc300)) : (_0x5a363b++, _0x1f0acd['call'](_0x1055fc, _0x1a6914(_0x5a363b, _0x2af32c, _0x33ff4a, _0x4cc300), _0x1a6914(_0x5a363b, _0x2af32c, _0xd81d7d, _0x4cc300), _0x1a6914(_0x5a363b, _0x2af32c, _0x33ff4a, _0x2af32c['notifyWith']))) : (_0x338789 !== _0x33ff4a && (_0x1a3a04 = void 0x0, _0x18c647 = [_0x1055fc]), (_0x4cc300 || _0x2af32c['resolveWith'])(_0x1a3a04, _0x18c647));
                                        }
                                    },
                                    _0x2211a8 = _0x4cc300 ? _0x5178ce : function() {
                                        try {
                                            _0x5178ce();
                                        } catch (_0x28b7be) {
                                            _0x263ab8['Deferred']['exceptionHook'] && _0x263ab8['Deferred']['exceptionHook'](_0x28b7be, _0x2211a8['stackTrace']), _0x488f74 + 0x1 >= _0x5a363b && (_0x338789 !== _0xd81d7d && (_0x1a3a04 = void 0x0, _0x18c647 = [_0x28b7be]), _0x2af32c['rejectWith'](_0x1a3a04, _0x18c647));
                                        }
                                    };
                                _0x488f74 ? _0x2211a8() : (_0x263ab8['Deferred']['getStackHook'] && (_0x2211a8['stackTrace'] = _0x263ab8['Deferred']['getStackHook']()), _0x51f4a4['setTimeout'](_0x2211a8));
                            };
                        }
                        var _0x5a363b = 0x0;
                        return _0x263ab8['Deferred'](function(_0x33e45e) {
                            _0x5cb39c[0x0][0x3]['add'](_0x1a6914(0x0, _0x33e45e, _0x263ab8['isFunction'](_0x141f2a) ? _0x141f2a : _0x33ff4a, _0x33e45e['notifyWith']));
                            _0x5cb39c[0x1][0x3]['add'](_0x1a6914(0x0, _0x33e45e, _0x263ab8['isFunction'](_0x128cb0) ? _0x128cb0 : _0x33ff4a));
                            _0x5cb39c[0x2][0x3]['add'](_0x1a6914(0x0, _0x33e45e, _0x263ab8['isFunction'](_0xdca225) ? _0xdca225 : _0xd81d7d));
                        })['promise']();
                    },
                    'promise': function(_0x3dbfe4) {
                        return null != _0x3dbfe4 ? _0x263ab8['extend'](_0x3dbfe4, _0x150d08) : _0x150d08;
                    }
                },
                _0x454380 = {};
            return _0x263ab8['each'](_0x5cb39c, function(_0x29995c, _0x1ea1ae) {
                var _0x263b7f = _0x1ea1ae[0x2],
                    _0x687961 = _0x1ea1ae[0x5];
                _0x150d08[_0x1ea1ae[0x1]] = _0x263b7f['add'];
                _0x687961 && _0x263b7f['add'](function() {
                    _0x44d77d = _0x687961;
                }, _0x5cb39c[0x3 - _0x29995c][0x2]['disable'], _0x5cb39c[0x0][0x2]['lock']);
                _0x263b7f['add'](_0x1ea1ae[0x3]['fire']);
                _0x454380[_0x1ea1ae[0x0]] = function() {
                    return _0x454380[_0x1ea1ae[0x0] + 'With'](this === _0x454380 ? void 0x0 : this, arguments), this;
                };
                _0x454380[_0x1ea1ae[0x0] + 'With'] = _0x263b7f['fireWith'];
            }), _0x150d08['promise'](_0x454380), _0x505bad && _0x505bad['call'](_0x454380, _0x454380), _0x454380;
        },
        'when': function(_0x268cc8) {
            var _0x71a8e1 = arguments['length'],
                _0x54a212 = _0x71a8e1,
                _0x452adf = Array(_0x54a212),
                _0x10eb00 = _0xcab530['call'](arguments),
                _0x4dd5bc = _0x263ab8['Deferred'](),
                _0x42eadb = function(_0x4b0f1a) {
                    return function(_0x1fb00f) {
                        _0x452adf[_0x4b0f1a] = this;
                        _0x10eb00[_0x4b0f1a] = 0x1 < arguments['length'] ? _0xcab530['call'](arguments) : _0x1fb00f;
                        --_0x71a8e1 || _0x4dd5bc['resolveWith'](_0x452adf, _0x10eb00);
                    };
                };
            if (0x1 >= _0x71a8e1 && (_0x1521d8(_0x268cc8, _0x4dd5bc['done'](_0x42eadb(_0x54a212))['resolve'], _0x4dd5bc['reject'], !_0x71a8e1), 'pending' === _0x4dd5bc['state']() || _0x263ab8['isFunction'](_0x10eb00[_0x54a212] && _0x10eb00[_0x54a212]['then']))) return _0x4dd5bc['then']();
            for (; _0x54a212--;) _0x1521d8(_0x10eb00[_0x54a212], _0x42eadb(_0x54a212), _0x4dd5bc['reject']);
            return _0x4dd5bc['promise']();
        }
    });
    var _0x44d162 = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    _0x263ab8['Deferred']['exceptionHook'] = function(_0x2c8a5a, _0x2f3f1e) {
        _0x51f4a4['console'] && _0x51f4a4['console']['warn'] && _0x2c8a5a && _0x44d162['test'](_0x2c8a5a['name']) && _0x51f4a4['console']['warn']('jQuery.Deferred\x20exception:\x20' + _0x2c8a5a['message'], _0x2c8a5a['stack'], _0x2f3f1e);
    };
    _0x263ab8['readyException'] = function(_0x189be7) {
        _0x51f4a4['setTimeout'](function() {
            throw _0x189be7;
        });
    };
    var _0x37aa25 = _0x263ab8['Deferred']();
    _0x263ab8['fn']['ready'] = function(_0x376aa9) {
        return _0x37aa25['then'](_0x376aa9)['catch'](function(_0x4447e2) {
            _0x263ab8['readyException'](_0x4447e2);
        }), this;
    };
    _0x263ab8['extend']({
        'isReady': !0x1,
        'readyWait': 0x1,
        'ready': function(_0x3324c4) {
            (!0x0 === _0x3324c4 ? --_0x263ab8['readyWait'] : _0x263ab8['isReady']) || (_0x263ab8['isReady'] = !0x0, !0x0 !== _0x3324c4 && 0x0 < --_0x263ab8['readyWait'] || _0x37aa25['resolveWith'](_0x1b3fe3, [_0x263ab8]));
        }
    });
    _0x263ab8['ready']['then'] = _0x37aa25['then'];
    'complete' === _0x1b3fe3['readyState'] || 'loading' !== _0x1b3fe3['readyState'] && !_0x1b3fe3['documentElement']['doScroll'] ? _0x51f4a4['setTimeout'](_0x263ab8['ready']) : (_0x1b3fe3['addEventListener']('DOMContentLoaded', _0x1e3a60), _0x51f4a4['addEventListener']('load', _0x1e3a60));
    var _0x4c42c0 = function(_0x358113, _0x2d1658, _0x36a9e4, _0x12e4a5, _0xf8c332, _0x127308, _0x12ade3) {
            var _0x35bdde = 0x0,
                _0x1e38f8 = _0x358113['length'],
                _0x25c724 = null == _0x36a9e4;
            if ('object' === _0x263ab8['type'](_0x36a9e4))
                for (_0x35bdde in (_0xf8c332 = !0x0, _0x36a9e4)) _0x4c42c0(_0x358113, _0x2d1658, _0x35bdde, _0x36a9e4[_0x35bdde], !0x0, _0x127308, _0x12ade3);
            else if (void 0x0 !== _0x12e4a5 && (_0xf8c332 = !0x0, _0x263ab8['isFunction'](_0x12e4a5) || (_0x12ade3 = !0x0), _0x25c724 && (_0x12ade3 ? (_0x2d1658['call'](_0x358113, _0x12e4a5), _0x2d1658 = null) : (_0x25c724 = _0x2d1658, _0x2d1658 = function(_0xa542b0, _0x33740a, _0x4c1dc8) {
                    return _0x25c724['call'](_0x263ab8(_0xa542b0), _0x4c1dc8);
                })), _0x2d1658))
                for (; _0x35bdde < _0x1e38f8; _0x35bdde++) _0x2d1658(_0x358113[_0x35bdde], _0x36a9e4, _0x12ade3 ? _0x12e4a5 : _0x12e4a5['call'](_0x358113[_0x35bdde], _0x35bdde, _0x2d1658(_0x358113[_0x35bdde], _0x36a9e4)));
            return _0xf8c332 ? _0x358113 : _0x25c724 ? _0x2d1658['call'](_0x358113) : _0x1e38f8 ? _0x2d1658(_0x358113[0x0], _0x36a9e4) : _0x127308;
        },
        _0x5b0499 = function(_0x5e9ec2) {
            return 0x1 === _0x5e9ec2['nodeType'] || 0x9 === _0x5e9ec2['nodeType'] || !+_0x5e9ec2['nodeType'];
        };
    _0x270555['uid'] = 0x1;
    _0x270555['prototype'] = {
        'cache': function(_0x1f6901) {
            var _0x4e344b = _0x1f6901[this['expando']];
            return _0x4e344b || (_0x4e344b = {}, _0x5b0499(_0x1f6901) && (_0x1f6901['nodeType'] ? _0x1f6901[this['expando']] = _0x4e344b : Object['defineProperty'](_0x1f6901, this['expando'], {
                'value': _0x4e344b,
                'configurable': !0x0
            }))), _0x4e344b;
        },
        'set': function(_0x5b7660, _0x3cd009, _0x153175) {
            var _0x1303ca;
            _0x5b7660 = this['cache'](_0x5b7660);
            if ('string' == typeof _0x3cd009) _0x5b7660[_0x263ab8['camelCase'](_0x3cd009)] = _0x153175;
            else
                for (_0x1303ca in _0x3cd009) _0x5b7660[_0x263ab8['camelCase'](_0x1303ca)] = _0x3cd009[_0x1303ca];
            return _0x5b7660;
        },
        'get': function(_0xc3642f, _0x11a8db) {
            return void 0x0 === _0x11a8db ? this['cache'](_0xc3642f) : _0xc3642f[this['expando']] && _0xc3642f[this['expando']][_0x263ab8['camelCase'](_0x11a8db)];
        },
        'access': function(_0x5f4a2f, _0x5824f0, _0x1c342f) {
            return void 0x0 === _0x5824f0 || _0x5824f0 && 'string' == typeof _0x5824f0 && void 0x0 === _0x1c342f ? this['get'](_0x5f4a2f, _0x5824f0) : (this['set'](_0x5f4a2f, _0x5824f0, _0x1c342f), void 0x0 !== _0x1c342f ? _0x1c342f : _0x5824f0);
        },
        'remove': function(_0x607172, _0x5a504d) {
            var _0x59a18a, _0x172692 = _0x607172[this['expando']];
            if (void 0x0 !== _0x172692) {
                if (void 0x0 !== _0x5a504d) {
                    Array['isArray'](_0x5a504d) ? _0x5a504d = _0x5a504d['map'](_0x263ab8['camelCase']) : (_0x5a504d = _0x263ab8['camelCase'](_0x5a504d), _0x5a504d = _0x5a504d in _0x172692 ? [_0x5a504d] : _0x5a504d['match'](_0x5e732e) || []);
                    for (_0x59a18a = _0x5a504d['length']; _0x59a18a--;) delete _0x172692[_0x5a504d[_0x59a18a]];
                }(void 0x0 === _0x5a504d || _0x263ab8['isEmptyObject'](_0x172692)) && (_0x607172['nodeType'] ? _0x607172[this['expando']] = void 0x0 : delete _0x607172[this['expando']]);
            }
        },
        'hasData': function(_0xb42104) {
            _0xb42104 = _0xb42104[this['expando']];
            return void 0x0 !== _0xb42104 && !_0x263ab8['isEmptyObject'](_0xb42104);
        }
    };
    var _0x168075 = new _0x270555(),
        _0x152a44 = new _0x270555(),
        _0x1099d2 = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        _0xe8fc3c = /[A-Z]/g;
    _0x263ab8['extend']({
        'hasData': function(_0x17fb9d) {
            return _0x152a44['hasData'](_0x17fb9d) || _0x168075['hasData'](_0x17fb9d);
        },
        'data': function(_0x2ae720, _0x433332, _0x4f0bb5) {
            return _0x152a44['access'](_0x2ae720, _0x433332, _0x4f0bb5);
        },
        'removeData': function(_0x372fd6, _0x555c5b) {
            _0x152a44['remove'](_0x372fd6, _0x555c5b);
        },
        '_data': function(_0x257ab2, _0x6ba97a, _0x27c3d9) {
            return _0x168075['access'](_0x257ab2, _0x6ba97a, _0x27c3d9);
        },
        '_removeData': function(_0x188108, _0x15c608) {
            _0x168075['remove'](_0x188108, _0x15c608);
        }
    });
    _0x263ab8['fn']['extend']({
        'data': function(_0x2ff549, _0xe87fdc) {
            var _0x21313a, _0x248b55, _0x16be5d, _0x3c3324 = this[0x0],
                _0x3b9e54 = _0x3c3324 && _0x3c3324['attributes'];
            if (void 0x0 === _0x2ff549) {
                if (this['length'] && (_0x16be5d = _0x152a44['get'](_0x3c3324), 0x1 === _0x3c3324['nodeType'] && !_0x168075['get'](_0x3c3324, 'hasDataAttrs'))) {
                    for (_0x21313a = _0x3b9e54['length']; _0x21313a--;) _0x3b9e54[_0x21313a] && (_0x248b55 = _0x3b9e54[_0x21313a]['name'], 0x0 === _0x248b55['indexOf']('data-') && (_0x248b55 = _0x263ab8['camelCase'](_0x248b55['slice'](0x5)), _0xfa37b1(_0x3c3324, _0x248b55, _0x16be5d[_0x248b55])));
                    _0x168075['set'](_0x3c3324, 'hasDataAttrs', !0x0);
                }
                return _0x16be5d;
            }
            return 'object' == typeof _0x2ff549 ? this['each'](function() {
                _0x152a44['set'](this, _0x2ff549);
            }) : _0x4c42c0(this, function(_0x30dd8a) {
                var _0x5886fe;
                if (_0x3c3324 && void 0x0 === _0x30dd8a) {
                    if ((_0x5886fe = _0x152a44['get'](_0x3c3324, _0x2ff549), void 0x0 !== _0x5886fe) || (_0x5886fe = _0xfa37b1(_0x3c3324, _0x2ff549), void 0x0 !== _0x5886fe)) return _0x5886fe;
                } else this['each'](function() {
                    _0x152a44['set'](this, _0x2ff549, _0x30dd8a);
                });
            }, null, _0xe87fdc, 0x1 < arguments['length'], null, !0x0);
        },
        'removeData': function(_0x1b553e) {
            return this['each'](function() {
                _0x152a44['remove'](this, _0x1b553e);
            });
        }
    });
    _0x263ab8['extend']({
        'queue': function(_0x56aa3d, _0x44021c, _0x262004) {
            var _0x284348;
            if (_0x56aa3d) return _0x44021c = (_0x44021c || 'fx') + 'queue', _0x284348 = _0x168075['get'](_0x56aa3d, _0x44021c), _0x262004 && (!_0x284348 || Array['isArray'](_0x262004) ? _0x284348 = _0x168075['access'](_0x56aa3d, _0x44021c, _0x263ab8['makeArray'](_0x262004)) : _0x284348['push'](_0x262004)), _0x284348 || [];
        },
        'dequeue': function(_0x115d78, _0x1a5666) {
            _0x1a5666 = _0x1a5666 || 'fx';
            var _0x290a7c = _0x263ab8['queue'](_0x115d78, _0x1a5666),
                _0x482550 = _0x290a7c['length'],
                _0x5ade28 = _0x290a7c['shift'](),
                _0x507bfd = _0x263ab8['_queueHooks'](_0x115d78, _0x1a5666),
                _0x4f6cd8 = function() {
                    _0x263ab8['dequeue'](_0x115d78, _0x1a5666);
                };
            'inprogress' === _0x5ade28 && (_0x5ade28 = _0x290a7c['shift'](), _0x482550--);
            _0x5ade28 && ('fx' === _0x1a5666 && _0x290a7c['unshift']('inprogress'), delete _0x507bfd['stop'], _0x5ade28['call'](_0x115d78, _0x4f6cd8, _0x507bfd));
            !_0x482550 && _0x507bfd && _0x507bfd['empty']['fire']();
        },
        '_queueHooks': function(_0x260a6d, _0x2f0da3) {
            var _0x9b20d9 = _0x2f0da3 + 'queueHooks';
            return _0x168075['get'](_0x260a6d, _0x9b20d9) || _0x168075['access'](_0x260a6d, _0x9b20d9, {
                'empty': _0x263ab8['Callbacks']('once\x20memory')['add'](function() {
                    _0x168075['remove'](_0x260a6d, [_0x2f0da3 + 'queue', _0x9b20d9]);
                })
            });
        }
    });
    _0x263ab8['fn']['extend']({
        'queue': function(_0x30eefc, _0x2b9264) {
            var _0x15643e = 0x2;
            return 'string' != typeof _0x30eefc && (_0x2b9264 = _0x30eefc, _0x30eefc = 'fx', _0x15643e--), arguments['length'] < _0x15643e ? _0x263ab8['queue'](this[0x0], _0x30eefc) : void 0x0 === _0x2b9264 ? this : this['each'](function() {
                var _0x7fc39d = _0x263ab8['queue'](this, _0x30eefc, _0x2b9264);
                _0x263ab8['_queueHooks'](this, _0x30eefc);
                'fx' === _0x30eefc && 'inprogress' !== _0x7fc39d[0x0] && _0x263ab8['dequeue'](this, _0x30eefc);
            });
        },
        'dequeue': function(_0x306ae6) {
            return this['each'](function() {
                _0x263ab8['dequeue'](this, _0x306ae6);
            });
        },
        'clearQueue': function(_0x24e469) {
            return this['queue'](_0x24e469 || 'fx', []);
        },
        'promise': function(_0x182963, _0x3b5089) {
            var _0x3bee62, _0x34cd27 = 0x1,
                _0xe3c46d = _0x263ab8['Deferred'](),
                _0x593f26 = this,
                _0x5e9a3b = this['length'],
                _0x57d3a7 = function() {
                    --_0x34cd27 || _0xe3c46d['resolveWith'](_0x593f26, [_0x593f26]);
                };
            'string' != typeof _0x182963 && (_0x3b5089 = _0x182963, _0x182963 = void 0x0);
            for (_0x182963 = _0x182963 || 'fx'; _0x5e9a3b--;)(_0x3bee62 = _0x168075['get'](_0x593f26[_0x5e9a3b], _0x182963 + 'queueHooks')) && _0x3bee62['empty'] && (_0x34cd27++, _0x3bee62['empty']['add'](_0x57d3a7));
            return _0x57d3a7(), _0xe3c46d['promise'](_0x3b5089);
        }
    });
    var _0x1ddff1 = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ['source'],
        _0x2200e4 = RegExp('^(?:([+-])=|)(' + _0x1ddff1 + ')([a-z%]*)$', 'i'),
        _0x598448 = ['Top', 'Right', 'Bottom', 'Left'],
        _0x24cab5 = function(_0x21be00, _0x4bb975) {
            return _0x21be00 = _0x4bb975 || _0x21be00, 'none' === _0x21be00['style']['display'] || '' === _0x21be00['style']['display'] && _0x263ab8['contains'](_0x21be00['ownerDocument'], _0x21be00) && 'none' === _0x263ab8['css'](_0x21be00, 'display');
        },
        _0x4cfc52 = function(_0x457f41, _0x22b62e, _0x17285a, _0x1933cf) {
            var _0x4a8c37, _0x21e394 = {};
            for (_0x4a8c37 in _0x22b62e) _0x21e394[_0x4a8c37] = _0x457f41['style'][_0x4a8c37], _0x457f41['style'][_0x4a8c37] = _0x22b62e[_0x4a8c37];
            _0x17285a = _0x17285a['apply'](_0x457f41, _0x1933cf || []);
            for (_0x4a8c37 in _0x22b62e) _0x457f41['style'][_0x4a8c37] = _0x21e394[_0x4a8c37];
            return _0x17285a;
        },
        _0x4e4413 = {};
    _0x263ab8['fn']['extend']({
        'show': function() {
            return _0x284a35(this, !0x0);
        },
        'hide': function() {
            return _0x284a35(this);
        },
        'toggle': function(_0x351c96) {
            return 'boolean' == typeof _0x351c96 ? _0x351c96 ? this['show']() : this['hide']() : this['each'](function() {
                _0x24cab5(this) ? _0x263ab8(this)['show']() : _0x263ab8(this)['hide']();
            });
        }
    });
    var _0x439d09 = /^(?:checkbox|radio)$/i,
        _0xa9f0d8 = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        _0x285fcf = /^$|\/(?:java|ecma)script/i,
        _0x244118 = {
            'option': [0x1, '<select\x20multiple=\x27multiple\x27>', '</select>'],
            'thead': [0x1, '<table>', '</table>'],
            'col': [0x2, '<table><colgroup>', '</colgroup></table>'],
            'tr': [0x2, '<table><tbody>', '</tbody></table>'],
            'td': [0x3, '<table><tbody><tr>', '</tr></tbody></table>'],
            '_default': [0x0, '', '']
        };
    _0x244118['optgroup'] = _0x244118['option'];
    _0x244118['tbody'] = _0x244118['tfoot'] = _0x244118['colgroup'] = _0x244118['caption'] = _0x244118['thead'];
    _0x244118['th'] = _0x244118['td'];
    var _0x5bb0d4 = /<|&#?\w+;/,
        _0x3e8ae8 = _0x1b3fe3['createDocumentFragment']()['appendChild'](_0x1b3fe3['createElement']('div')),
        _0x31e47d = _0x1b3fe3['createElement']('input');
    _0x31e47d['setAttribute']('type', 'radio');
    _0x31e47d['setAttribute']('checked', 'checked');
    _0x31e47d['setAttribute']('name', 't');
    _0x3e8ae8['appendChild'](_0x31e47d);
    _0x187c89['checkClone'] = _0x3e8ae8['cloneNode'](!0x0)['cloneNode'](!0x0)['lastChild']['checked'];
    _0x3e8ae8['innerHTML'] = '<textarea>x</textarea>';
    _0x187c89['noCloneChecked'] = !!_0x3e8ae8['cloneNode'](!0x0)['lastChild']['defaultValue'];
    !0x0;
    var _0x40cae5 = _0x1b3fe3['documentElement'],
        _0x5f558e = /^key/,
        _0x5c342b = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        _0x25f302 = /^([^.]*)(?:\.(.+)|)/;
    _0x263ab8['event'] = {
        'global': {},
        'add': function(_0x31aca7, _0x1c59ff, _0x37f600, _0x1c63ae, _0x8119b3) {
            var _0x503b45, _0x1de697, _0x37bc70, _0x32c8f, _0x5b163e, _0x328a5e, _0x80fac5, _0xc6674e, _0x25f56e, _0x718c57;
            if (_0x5b163e = _0x168075['get'](_0x31aca7)) {
                _0x37f600['handler'] && (_0x503b45 = _0x37f600, _0x37f600 = _0x503b45['handler'], _0x8119b3 = _0x503b45['selector']);
                _0x8119b3 && _0x263ab8['find']['matchesSelector'](_0x40cae5, _0x8119b3);
                _0x37f600['guid'] || (_0x37f600['guid'] = _0x263ab8['guid']++);
                (_0x32c8f = _0x5b163e['events']) || (_0x32c8f = _0x5b163e['events'] = {});
                (_0x1de697 = _0x5b163e['handle']) || (_0x1de697 = _0x5b163e['handle'] = function(_0xf351e0) {
                    return 'undefined' != typeof _0x263ab8 && _0x263ab8['event']['triggered'] !== _0xf351e0['type'] ? _0x263ab8['event']['dispatch']['apply'](_0x31aca7, arguments) : void 0x0;
                });
                _0x1c59ff = (_0x1c59ff || '')['match'](_0x5e732e) || [''];
                for (_0x5b163e = _0x1c59ff['length']; _0x5b163e--;) _0x37bc70 = _0x25f302['exec'](_0x1c59ff[_0x5b163e]) || [], _0x25f56e = _0x718c57 = _0x37bc70[0x1], _0x37bc70 = (_0x37bc70[0x2] || '')['split']('.')['sort'](), _0x25f56e && (_0x80fac5 = _0x263ab8['event']['special'][_0x25f56e] || {}, _0x25f56e = (_0x8119b3 ? _0x80fac5['delegateType'] : _0x80fac5['bindType']) || _0x25f56e, _0x80fac5 = _0x263ab8['event']['special'][_0x25f56e] || {}, _0x328a5e = _0x263ab8['extend']({
                    'type': _0x25f56e,
                    'origType': _0x718c57,
                    'data': _0x1c63ae,
                    'handler': _0x37f600,
                    'guid': _0x37f600['guid'],
                    'selector': _0x8119b3,
                    'needsContext': _0x8119b3 && _0x263ab8['expr']['match']['needsContext']['test'](_0x8119b3),
                    'namespace': _0x37bc70['join']('.')
                }, _0x503b45), (_0xc6674e = _0x32c8f[_0x25f56e]) || (_0xc6674e = _0x32c8f[_0x25f56e] = [], _0xc6674e['delegateCount'] = 0x0, _0x80fac5['setup'] && !0x1 !== _0x80fac5['setup']['call'](_0x31aca7, _0x1c63ae, _0x37bc70, _0x1de697) || _0x31aca7['addEventListener'] && _0x31aca7['addEventListener'](_0x25f56e, _0x1de697)), _0x80fac5['add'] && (_0x80fac5['add']['call'](_0x31aca7, _0x328a5e), _0x328a5e['handler']['guid'] || (_0x328a5e['handler']['guid'] = _0x37f600['guid'])), _0x8119b3 ? _0xc6674e['splice'](_0xc6674e['delegateCount']++, 0x0, _0x328a5e) : _0xc6674e['push'](_0x328a5e), _0x263ab8['event']['global'][_0x25f56e] = !0x0);
            }
        },
        'remove': function(_0x45eb3b, _0x30a960, _0x1fe004, _0x438b08, _0x34f7d2) {
            var _0x5b87c7, _0x1d5d81, _0xe03869, _0x3bbc6a, _0xc8a6a, _0x393719, _0x5d6806, _0x3d83c2, _0x5714d7, _0x547676, _0x50700d, _0x3136b4 = _0x168075['hasData'](_0x45eb3b) && _0x168075['get'](_0x45eb3b);
            if (_0x3136b4 && (_0x3bbc6a = _0x3136b4['events'])) {
                _0x30a960 = (_0x30a960 || '')['match'](_0x5e732e) || [''];
                for (_0xc8a6a = _0x30a960['length']; _0xc8a6a--;)
                    if (_0xe03869 = _0x25f302['exec'](_0x30a960[_0xc8a6a]) || [], _0x5714d7 = _0x50700d = _0xe03869[0x1], _0x547676 = (_0xe03869[0x2] || '')['split']('.')['sort'](), _0x5714d7) {
                        _0x5d6806 = _0x263ab8['event']['special'][_0x5714d7] || {};
                        _0x5714d7 = (_0x438b08 ? _0x5d6806['delegateType'] : _0x5d6806['bindType']) || _0x5714d7;
                        _0x3d83c2 = _0x3bbc6a[_0x5714d7] || [];
                        _0xe03869 = _0xe03869[0x2] && RegExp('(^|\x5c.)' + _0x547676['join']('\x5c.(?:.*\x5c.|)') + '(\x5c.|$)');
                        for (_0x1d5d81 = _0x5b87c7 = _0x3d83c2['length']; _0x5b87c7--;) _0x393719 = _0x3d83c2[_0x5b87c7], !_0x34f7d2 && _0x50700d !== _0x393719['origType'] || _0x1fe004 && _0x1fe004['guid'] !== _0x393719['guid'] || _0xe03869 && !_0xe03869['test'](_0x393719['namespace']) || _0x438b08 && _0x438b08 !== _0x393719['selector'] && ('**' !== _0x438b08 || !_0x393719['selector']) || (_0x3d83c2['splice'](_0x5b87c7, 0x1), _0x393719['selector'] && _0x3d83c2['delegateCount']--, _0x5d6806['remove'] && _0x5d6806['remove']['call'](_0x45eb3b, _0x393719));
                        _0x1d5d81 && !_0x3d83c2['length'] && (_0x5d6806['teardown'] && !0x1 !== _0x5d6806['teardown']['call'](_0x45eb3b, _0x547676, _0x3136b4['handle']) || _0x263ab8['removeEvent'](_0x45eb3b, _0x5714d7, _0x3136b4['handle']), delete _0x3bbc6a[_0x5714d7]);
                    } else
                        for (_0x5714d7 in _0x3bbc6a) _0x263ab8['event']['remove'](_0x45eb3b, _0x5714d7 + _0x30a960[_0xc8a6a], _0x1fe004, _0x438b08, !0x0);
                _0x263ab8['isEmptyObject'](_0x3bbc6a) && _0x168075['remove'](_0x45eb3b, 'handle\x20events');
            }
        },
        'dispatch': function(_0x2ff7a7) {
            var _0x23bb69 = _0x263ab8['event']['fix'](_0x2ff7a7),
                _0x1c3a5f, _0x1715a1, _0x53aad4, _0xa7485f, _0x3728d3, _0x561f17, _0x2ed8c1 = Array(arguments['length']);
            _0x1715a1 = (_0x168075['get'](this, 'events') || {})[_0x23bb69['type']] || [];
            var _0x5ba9b0 = _0x263ab8['event']['special'][_0x23bb69['type']] || {};
            _0x2ed8c1[0x0] = _0x23bb69;
            for (_0x1c3a5f = 0x1; _0x1c3a5f < arguments['length']; _0x1c3a5f++) _0x2ed8c1[_0x1c3a5f] = arguments[_0x1c3a5f];
            if (_0x23bb69['delegateTarget'] = this, !_0x5ba9b0['preDispatch'] || !0x1 !== _0x5ba9b0['preDispatch']['call'](this, _0x23bb69)) {
                _0x561f17 = _0x263ab8['event']['handlers']['call'](this, _0x23bb69, _0x1715a1);
                for (_0x1c3a5f = 0x0;
                    (_0xa7485f = _0x561f17[_0x1c3a5f++]) && !_0x23bb69['isPropagationStopped']();) {
                    _0x23bb69['currentTarget'] = _0xa7485f['elem'];
                    for (_0x1715a1 = 0x0;
                        (_0x3728d3 = _0xa7485f['handlers'][_0x1715a1++]) && !_0x23bb69['isImmediatePropagationStopped']();) _0x23bb69['rnamespace'] && !_0x23bb69['rnamespace']['test'](_0x3728d3['namespace']) || (_0x23bb69['handleObj'] = _0x3728d3, _0x23bb69['data'] = _0x3728d3['data'], _0x53aad4 = ((_0x263ab8['event']['special'][_0x3728d3['origType']] || {})['handle'] || _0x3728d3['handler'])['apply'](_0xa7485f['elem'], _0x2ed8c1), void 0x0 !== _0x53aad4 && !0x1 === (_0x23bb69['result'] = _0x53aad4) && (_0x23bb69['preventDefault'](), _0x23bb69['stopPropagation']()));
                }
                return _0x5ba9b0['postDispatch'] && _0x5ba9b0['postDispatch']['call'](this, _0x23bb69), _0x23bb69['result'];
            }
        },
        'handlers': function(_0xf1d3ca, _0x3995a8) {
            var _0x54e184, _0x54b72b, _0x308de8, _0x40d9fb, _0x377a1d, _0x2e1742 = [],
                _0x1eb4cb = _0x3995a8['delegateCount'],
                _0x21abb6 = _0xf1d3ca['target'];
            if (_0x1eb4cb && _0x21abb6['nodeType'] && !('click' === _0xf1d3ca['type'] && 0x1 <= _0xf1d3ca['button']))
                for (; _0x21abb6 !== this; _0x21abb6 = _0x21abb6['parentNode'] || this)
                    if (0x1 === _0x21abb6['nodeType'] && ('click' !== _0xf1d3ca['type'] || !0x0 !== _0x21abb6['disabled'])) {
                        _0x40d9fb = [];
                        _0x377a1d = {};
                        for (_0x54e184 = 0x0; _0x54e184 < _0x1eb4cb; _0x54e184++) _0x54b72b = _0x3995a8[_0x54e184], _0x308de8 = _0x54b72b['selector'] + '\x20', void 0x0 === _0x377a1d[_0x308de8] && (_0x377a1d[_0x308de8] = _0x54b72b['needsContext'] ? -0x1 < _0x263ab8(_0x308de8, this)['index'](_0x21abb6) : _0x263ab8['find'](_0x308de8, this, null, [_0x21abb6])['length']), _0x377a1d[_0x308de8] && _0x40d9fb['push'](_0x54b72b);
                        _0x40d9fb['length'] && _0x2e1742['push']({
                            'elem': _0x21abb6,
                            'handlers': _0x40d9fb
                        });
                    } return _0x21abb6 = this, _0x1eb4cb < _0x3995a8['length'] && _0x2e1742['push']({
                'elem': _0x21abb6,
                'handlers': _0x3995a8['slice'](_0x1eb4cb)
            }), _0x2e1742;
        },
        'addProp': function(_0x4cb5c5, _0x228ab1) {
            Object['defineProperty'](_0x263ab8['Event']['prototype'], _0x4cb5c5, {
                'enumerable': !0x0,
                'configurable': !0x0,
                'get': _0x263ab8['isFunction'](_0x228ab1) ? function() {
                    if (this['originalEvent']) return _0x228ab1(this['originalEvent']);
                } : function() {
                    if (this['originalEvent']) return this['originalEvent'][_0x4cb5c5];
                },
                'set': function(_0x40ce5b) {
                    Object['defineProperty'](this, _0x4cb5c5, {
                        'enumerable': !0x0,
                        'configurable': !0x0,
                        'writable': !0x0,
                        'value': _0x40ce5b
                    });
                }
            });
        },
        'fix': function(_0x230b22) {
            return _0x230b22[_0x263ab8['expando']] ? _0x230b22 : new _0x263ab8['Event'](_0x230b22);
        },
        'special': {
            'load': {
                'noBubble': !0x0
            },
            'focus': {
                'trigger': function() {
                    if (this !== _0x56e67a() && this['focus']) return this['focus'](), !0x1;
                },
                'delegateType': 'focusin'
            },
            'blur': {
                'trigger': function() {
                    if (this === _0x56e67a() && this['blur']) return this['blur'](), !0x1;
                },
                'delegateType': 'focusout'
            },
            'click': {
                'trigger': function() {
                    if ('checkbox' === this['type'] && this['click'] && _0x3b9113(this, 'input')) return this['click'](), !0x1;
                },
                '_default': function(_0x408ed7) {
                    return _0x3b9113(_0x408ed7['target'], 'a');
                }
            },
            'beforeunload': {
                'postDispatch': function(_0x297634) {
                    void 0x0 !== _0x297634['result'] && _0x297634['originalEvent'] && (_0x297634['originalEvent']['returnValue'] = _0x297634['result']);
                }
            }
        }
    };
    _0x263ab8['removeEvent'] = function(_0x40a2ac, _0x3a38a8, _0xe65395) {
        _0x40a2ac['removeEventListener'] && _0x40a2ac['removeEventListener'](_0x3a38a8, _0xe65395);
    };
    _0x263ab8['Event'] = function(_0x1a8373, _0x128373) {
        return this instanceof _0x263ab8['Event'] ? (_0x1a8373 && _0x1a8373['type'] ? (this['originalEvent'] = _0x1a8373, this['type'] = _0x1a8373['type'], this['isDefaultPrevented'] = _0x1a8373['defaultPrevented'] || void 0x0 === _0x1a8373['defaultPrevented'] && !0x1 === _0x1a8373['returnValue'] ? _0x5bcab9 : _0x497478, this['target'] = _0x1a8373['target'] && 0x3 === _0x1a8373['target']['nodeType'] ? _0x1a8373['target']['parentNode'] : _0x1a8373['target'], this['currentTarget'] = _0x1a8373['currentTarget'], this['relatedTarget'] = _0x1a8373['relatedTarget']) : this['type'] = _0x1a8373, _0x128373 && _0x263ab8['extend'](this, _0x128373), this['timeStamp'] = _0x1a8373 && _0x1a8373['timeStamp'] || _0x263ab8['now'](), void(this[_0x263ab8['expando']] = !0x0)) : new _0x263ab8['Event'](_0x1a8373, _0x128373);
    };
    _0x263ab8['Event']['prototype'] = {
        'constructor': _0x263ab8['Event'],
        'isDefaultPrevented': _0x497478,
        'isPropagationStopped': _0x497478,
        'isImmediatePropagationStopped': _0x497478,
        'isSimulated': !0x1,
        'preventDefault': function() {
            var _0x595124 = this['originalEvent'];
            this['isDefaultPrevented'] = _0x5bcab9;
            _0x595124 && !this['isSimulated'] && _0x595124['preventDefault']();
        },
        'stopPropagation': function() {
            var _0x31ab74 = this['originalEvent'];
            this['isPropagationStopped'] = _0x5bcab9;
            _0x31ab74 && !this['isSimulated'] && _0x31ab74['stopPropagation']();
        },
        'stopImmediatePropagation': function() {
            var _0xb31e22 = this['originalEvent'];
            this['isImmediatePropagationStopped'] = _0x5bcab9;
            _0xb31e22 && !this['isSimulated'] && _0xb31e22['stopImmediatePropagation']();
            this['stopPropagation']();
        }
    };
    _0x263ab8['each']({
        'altKey': !0x0,
        'bubbles': !0x0,
        'cancelable': !0x0,
        'changedTouches': !0x0,
        'ctrlKey': !0x0,
        'detail': !0x0,
        'eventPhase': !0x0,
        'metaKey': !0x0,
        'pageX': !0x0,
        'pageY': !0x0,
        'shiftKey': !0x0,
        'view': !0x0,
        'char': !0x0,
        'charCode': !0x0,
        'key': !0x0,
        'keyCode': !0x0,
        'button': !0x0,
        'buttons': !0x0,
        'clientX': !0x0,
        'clientY': !0x0,
        'offsetX': !0x0,
        'offsetY': !0x0,
        'pointerId': !0x0,
        'pointerType': !0x0,
        'screenX': !0x0,
        'screenY': !0x0,
        'targetTouches': !0x0,
        'toElement': !0x0,
        'touches': !0x0,
        'which': function(_0x40ec6b) {
            var _0x2205b3 = _0x40ec6b['button'];
            return null == _0x40ec6b['which'] && _0x5f558e['test'](_0x40ec6b['type']) ? null != _0x40ec6b['charCode'] ? _0x40ec6b['charCode'] : _0x40ec6b['keyCode'] : !_0x40ec6b['which'] && void 0x0 !== _0x2205b3 && _0x5c342b['test'](_0x40ec6b['type']) ? 0x1 & _0x2205b3 ? 0x1 : 0x2 & _0x2205b3 ? 0x3 : 0x4 & _0x2205b3 ? 0x2 : 0x0 : _0x40ec6b['which'];
        }
    }, _0x263ab8['event']['addProp']);
    _0x263ab8['each']({
        'mouseenter': 'mouseover',
        'mouseleave': 'mouseout',
        'pointerenter': 'pointerover',
        'pointerleave': 'pointerout'
    }, function(_0x1ad9db, _0x308768) {
        _0x263ab8['event']['special'][_0x1ad9db] = {
            'delegateType': _0x308768,
            'bindType': _0x308768,
            'handle': function(_0x15bf9f) {
                var _0x466325, _0xa88bc2 = _0x15bf9f['relatedTarget'],
                    _0x158860 = _0x15bf9f['handleObj'];
                return _0xa88bc2 && (_0xa88bc2 === this || _0x263ab8['contains'](this, _0xa88bc2)) || (_0x15bf9f['type'] = _0x158860['origType'], _0x466325 = _0x158860['handler']['apply'](this, arguments), _0x15bf9f['type'] = _0x308768), _0x466325;
            }
        };
    });
    _0x263ab8['fn']['extend']({
        'on': function(_0x86e4e2, _0x4ff5bd, _0x1f76e8, _0x61924d) {
            return _0x1d8c37(this, _0x86e4e2, _0x4ff5bd, _0x1f76e8, _0x61924d);
        },
        'one': function(_0xd55998, _0x27e482, _0x771f7d, _0x78d43d) {
            return _0x1d8c37(this, _0xd55998, _0x27e482, _0x771f7d, _0x78d43d, 0x1);
        },
        'off': function(_0x393183, _0xf63a23, _0x53dd2c) {
            var _0xc04947, _0x323210;
            if (_0x393183 && _0x393183['preventDefault'] && _0x393183['handleObj']) return _0xc04947 = _0x393183['handleObj'], _0x263ab8(_0x393183['delegateTarget'])['off'](_0xc04947['namespace'] ? _0xc04947['origType'] + '.' + _0xc04947['namespace'] : _0xc04947['origType'], _0xc04947['selector'], _0xc04947['handler']), this;
            if ('object' == typeof _0x393183) {
                for (_0x323210 in _0x393183) this['off'](_0x323210, _0xf63a23, _0x393183[_0x323210]);
                return this;
            }
            return !0x1 !== _0xf63a23 && 'function' != typeof _0xf63a23 || (_0x53dd2c = _0xf63a23, _0xf63a23 = void 0x0), !0x1 === _0x53dd2c && (_0x53dd2c = _0x497478), this['each'](function() {
                _0x263ab8['event']['remove'](this, _0x393183, _0x53dd2c, _0xf63a23);
            });
        }
    });
    var _0x362f11 = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        _0x5378c4 = /<script|<style|<link/i,
        _0x214899 = /checked\s*(?:[^=]|=\s*.checked.)/i,
        _0x5a3e2b = /^true\/(.*)/,
        _0x6f99a = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    _0x263ab8['extend']({
        'htmlPrefilter': function(_0x5c29b9) {
            return _0x5c29b9['replace'](_0x362f11, '<$1></$2>');
        },
        'clone': function(_0x1449c9, _0x3b5763, _0x1e3893) {
            var _0x1f5de9, _0xefd2cd, _0x29b3d4, _0x286144, _0x1e3538 = _0x1449c9['cloneNode'](!0x0),
                _0x5ca9d7 = _0x263ab8['contains'](_0x1449c9['ownerDocument'], _0x1449c9);
            if (!_0x187c89['noCloneChecked'] && !(0x1 !== _0x1449c9['nodeType'] && 0xb !== _0x1449c9['nodeType'] || _0x263ab8['isXMLDoc'](_0x1449c9))) {
                _0x286144 = _0x21fb63(_0x1e3538);
                _0x29b3d4 = _0x21fb63(_0x1449c9);
                _0x1f5de9 = 0x0;
                for (_0xefd2cd = _0x29b3d4['length']; _0x1f5de9 < _0xefd2cd; _0x1f5de9++) {
                    var _0x22b5a0 = _0x29b3d4[_0x1f5de9],
                        _0x56a929 = _0x286144[_0x1f5de9],
                        _0x857926 = _0x56a929['nodeName']['toLowerCase']();
                    'input' === _0x857926 && _0x439d09['test'](_0x22b5a0['type']) ? _0x56a929['checked'] = _0x22b5a0['checked'] : 'input' !== _0x857926 && 'textarea' !== _0x857926 || (_0x56a929['defaultValue'] = _0x22b5a0['defaultValue']);
                }
            }
            if (_0x3b5763)
                if (_0x1e3893) {
                    _0x29b3d4 = _0x29b3d4 || _0x21fb63(_0x1449c9);
                    _0x286144 = _0x286144 || _0x21fb63(_0x1e3538);
                    _0x1f5de9 = 0x0;
                    for (_0xefd2cd = _0x29b3d4['length']; _0x1f5de9 < _0xefd2cd; _0x1f5de9++) _0x5246ea(_0x29b3d4[_0x1f5de9], _0x286144[_0x1f5de9]);
                } else _0x5246ea(_0x1449c9, _0x1e3538);
            return _0x286144 = _0x21fb63(_0x1e3538, 'script'), 0x0 < _0x286144['length'] && _0x3bab61(_0x286144, !_0x5ca9d7 && _0x21fb63(_0x1449c9, 'script')), _0x1e3538;
        },
        'cleanData': function(_0x4d8b7b) {
            for (var _0x4661ac, _0x353a3d, _0x5ea078, _0xbc437f = _0x263ab8['event']['special'], _0x5d47f2 = 0x0; void 0x0 !== (_0x353a3d = _0x4d8b7b[_0x5d47f2]); _0x5d47f2++)
                if (_0x5b0499(_0x353a3d)) {
                    if (_0x4661ac = _0x353a3d[_0x168075['expando']]) {
                        if (_0x4661ac['events'])
                            for (_0x5ea078 in _0x4661ac['events']) _0xbc437f[_0x5ea078] ? _0x263ab8['event']['remove'](_0x353a3d, _0x5ea078) : _0x263ab8['removeEvent'](_0x353a3d, _0x5ea078, _0x4661ac['handle']);
                        _0x353a3d[_0x168075['expando']] = void 0x0;
                    }
                    _0x353a3d[_0x152a44['expando']] && (_0x353a3d[_0x152a44['expando']] = void 0x0);
                }
        }
    });
    _0x263ab8['fn']['extend']({
        'detach': function(_0x5e02c4) {
            return _0x7859a4(this, _0x5e02c4, !0x0);
        },
        'remove': function(_0x351aa9) {
            return _0x7859a4(this, _0x351aa9);
        },
        'text': function(_0x345000) {
            return _0x4c42c0(this, function(_0x4d8b33) {
                return void 0x0 === _0x4d8b33 ? _0x263ab8['text'](this) : this['empty']()['each'](function() {
                    0x1 !== this['nodeType'] && 0xb !== this['nodeType'] && 0x9 !== this['nodeType'] || (this['textContent'] = _0x4d8b33);
                });
            }, null, _0x345000, arguments['length']);
        },
        'append': function() {
            return _0x380e8b(this, arguments, function(_0x5d5246) {
                (0x1 === this['nodeType'] || 0xb === this['nodeType'] || 0x9 === this['nodeType']) && _0x5b1017(this, _0x5d5246)['appendChild'](_0x5d5246);
            });
        },
        'prepend': function() {
            return _0x380e8b(this, arguments, function(_0x4313b5) {
                if (0x1 === this['nodeType'] || 0xb === this['nodeType'] || 0x9 === this['nodeType']) {
                    var _0x20a646 = _0x5b1017(this, _0x4313b5);
                    _0x20a646['insertBefore'](_0x4313b5, _0x20a646['firstChild']);
                }
            });
        },
        'before': function() {
            return _0x380e8b(this, arguments, function(_0x3052a1) {
                this['parentNode'] && this['parentNode']['insertBefore'](_0x3052a1, this);
            });
        },
        'after': function() {
            return _0x380e8b(this, arguments, function(_0x174398) {
                this['parentNode'] && this['parentNode']['insertBefore'](_0x174398, this['nextSibling']);
            });
        },
        'empty': function() {
            for (var _0x373856, _0x4511a6 = 0x0; null != (_0x373856 = this[_0x4511a6]); _0x4511a6++) 0x1 === _0x373856['nodeType'] && (_0x263ab8['cleanData'](_0x21fb63(_0x373856, !0x1)), _0x373856['textContent'] = '');
            return this;
        },
        'clone': function(_0x52fa1c, _0x2d7b1e) {
            return _0x52fa1c = null != _0x52fa1c && _0x52fa1c, _0x2d7b1e = null == _0x2d7b1e ? _0x52fa1c : _0x2d7b1e, this['map'](function() {
                return _0x263ab8['clone'](this, _0x52fa1c, _0x2d7b1e);
            });
        },
        'html': function(_0x5ccfb6) {
            return _0x4c42c0(this, function(_0x4ba6b4) {
                var _0x1b0359 = this[0x0] || {},
                    _0x161426 = 0x0,
                    _0x338ce0 = this['length'];
                if (void 0x0 === _0x4ba6b4 && 0x1 === _0x1b0359['nodeType']) return _0x1b0359['innerHTML'];
                if ('string' == typeof _0x4ba6b4 && !_0x5378c4['test'](_0x4ba6b4) && !_0x244118[(_0xa9f0d8['exec'](_0x4ba6b4) || ['', ''])[0x1]['toLowerCase']()]) {
                    _0x4ba6b4 = _0x263ab8['htmlPrefilter'](_0x4ba6b4);
                    try {
                        for (; _0x161426 < _0x338ce0; _0x161426++) _0x1b0359 = this[_0x161426] || {}, 0x1 === _0x1b0359['nodeType'] && (_0x263ab8['cleanData'](_0x21fb63(_0x1b0359, !0x1)), _0x1b0359['innerHTML'] = _0x4ba6b4);
                        _0x1b0359 = 0x0;
                    } catch (_0x447af5) {}
                }
                _0x1b0359 && this['empty']()['append'](_0x4ba6b4);
            }, null, _0x5ccfb6, arguments['length']);
        },
        'replaceWith': function() {
            var _0x55b124 = [];
            return _0x380e8b(this, arguments, function(_0x4d0c3b) {
                var _0x17478e = this['parentNode'];
                0x0 > _0x263ab8['inArray'](this, _0x55b124) && (_0x263ab8['cleanData'](_0x21fb63(this)), _0x17478e && _0x17478e['replaceChild'](_0x4d0c3b, this));
            }, _0x55b124);
        }
    });
    _0x263ab8['each']({
        'appendTo': 'append',
        'prependTo': 'prepend',
        'insertBefore': 'before',
        'insertAfter': 'after',
        'replaceAll': 'replaceWith'
    }, function(_0x37e771, _0x582938) {
        _0x263ab8['fn'][_0x37e771] = function(_0x17e907) {
            for (var _0x1f913a = [], _0x4f3c5a = _0x263ab8(_0x17e907), _0x2f4dc0 = _0x4f3c5a['length'] - 0x1, _0x5cbcf1 = 0x0; _0x5cbcf1 <= _0x2f4dc0; _0x5cbcf1++) _0x17e907 = _0x5cbcf1 === _0x2f4dc0 ? this : this['clone'](!0x0), _0x263ab8(_0x4f3c5a[_0x5cbcf1])[_0x582938](_0x17e907), _0x487890['apply'](_0x1f913a, _0x17e907['get']());
            return this['pushStack'](_0x1f913a);
        };
    });
    var _0x42dde7 = /^margin/,
        _0x1ada50 = RegExp('^(' + _0x1ddff1 + ')(?!px)[a-z%]+$', 'i'),
        _0x92159 = function(_0xb55667) {
            var _0x25b3c5 = _0xb55667['ownerDocument']['defaultView'];
            return _0x25b3c5 && _0x25b3c5['opener'] || (_0x25b3c5 = _0x51f4a4), _0x25b3c5['getComputedStyle'](_0xb55667);
        },
        _0x33f656 = function() {
            if (_0x1d96f4) {
                _0x1d96f4['style']['cssText'] = 'box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%';
                _0x1d96f4['innerHTML'] = '';
                _0x40cae5['appendChild'](_0x371306);
                var _0x13ec5f = _0x51f4a4['getComputedStyle'](_0x1d96f4);
                _0x2470ed = '1%' !== _0x13ec5f['top'];
                _0x255cb1 = '2px' === _0x13ec5f['marginLeft'];
                _0x344fe5 = '4px' === _0x13ec5f['width'];
                _0x1d96f4['style']['marginRight'] = '50%';
                _0x2fa0b2 = '4px' === _0x13ec5f['marginRight'];
                _0x40cae5['removeChild'](_0x371306);
                _0x1d96f4 = null;
            }
        },
        _0x2470ed, _0x344fe5, _0x2fa0b2, _0x255cb1, _0x371306 = _0x1b3fe3['createElement']('div'),
        _0x1d96f4 = _0x1b3fe3['createElement']('div');
    _0x1d96f4['style'] && (_0x1d96f4['style']['backgroundClip'] = 'content-box', _0x1d96f4['cloneNode'](!0x0)['style']['backgroundClip'] = '', _0x187c89['clearCloneStyle'] = 'content-box' === _0x1d96f4['style']['backgroundClip'], _0x371306['style']['cssText'] = 'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute', _0x371306['appendChild'](_0x1d96f4), _0x263ab8['extend'](_0x187c89, {
        'pixelPosition': function() {
            return _0x33f656(), _0x2470ed;
        },
        'boxSizingReliable': function() {
            return _0x33f656(), _0x344fe5;
        },
        'pixelMarginRight': function() {
            return _0x33f656(), _0x2fa0b2;
        },
        'reliableMarginLeft': function() {
            return _0x33f656(), _0x255cb1;
        }
    }));
    !0x0;
    var _0x27aa60 = /^(none|table(?!-c[ea]).+)/,
        _0x186535 = /^--/,
        _0x569e15 = {
            'position': 'absolute',
            'visibility': 'hidden',
            'display': 'block'
        },
        _0x4df97b = {
            'letterSpacing': '0',
            'fontWeight': '400'
        },
        _0x17e5f4 = ['Webkit', 'Moz', 'ms'],
        _0x47741c = _0x1b3fe3['createElement']('div')['style'];
    _0x263ab8['extend']({
        'cssHooks': {
            'opacity': {
                'get': function(_0x525a0a, _0x3073a8) {
                    if (_0x3073a8) {
                        var _0x37e78f = _0x17c0fc(_0x525a0a, 'opacity');
                        return '' === _0x37e78f ? '1' : _0x37e78f;
                    }
                }
            }
        },
        'cssNumber': {
            'animationIterationCount': !0x0,
            'columnCount': !0x0,
            'fillOpacity': !0x0,
            'flexGrow': !0x0,
            'flexShrink': !0x0,
            'fontWeight': !0x0,
            'lineHeight': !0x0,
            'opacity': !0x0,
            'order': !0x0,
            'orphans': !0x0,
            'widows': !0x0,
            'zIndex': !0x0,
            'zoom': !0x0
        },
        'cssProps': {
            'float': 'cssFloat'
        },
        'style': function(_0x52d908, _0xb62f05, _0x2b41d4, _0x1db56c) {
            if (_0x52d908 && 0x3 !== _0x52d908['nodeType'] && 0x8 !== _0x52d908['nodeType'] && _0x52d908['style']) {
                var _0x22724c, _0x17fdcd, _0x31dce7, _0xf716dc = _0x263ab8['camelCase'](_0xb62f05),
                    _0x60a2ae = _0x186535['test'](_0xb62f05),
                    _0x22ed50 = _0x52d908['style'];
                return _0x60a2ae || (_0xb62f05 = _0x2f220c(_0xf716dc)), _0x31dce7 = _0x263ab8['cssHooks'][_0xb62f05] || _0x263ab8['cssHooks'][_0xf716dc], void 0x0 === _0x2b41d4 ? _0x31dce7 && 'get' in _0x31dce7 && void 0x0 !== (_0x22724c = _0x31dce7['get'](_0x52d908, !0x1, _0x1db56c)) ? _0x22724c : _0x22ed50[_0xb62f05] : (_0x17fdcd = typeof _0x2b41d4, 'string' === _0x17fdcd && (_0x22724c = _0x2200e4['exec'](_0x2b41d4)) && _0x22724c[0x1] && (_0x2b41d4 = _0x58220b(_0x52d908, _0xb62f05, _0x22724c), _0x17fdcd = 'number'), null != _0x2b41d4 && _0x2b41d4 === _0x2b41d4 && ('number' === _0x17fdcd && (_0x2b41d4 += _0x22724c && _0x22724c[0x3] || (_0x263ab8['cssNumber'][_0xf716dc] ? '' : 'px')), _0x187c89['clearCloneStyle'] || '' !== _0x2b41d4 || 0x0 !== _0xb62f05['indexOf']('background') || (_0x22ed50[_0xb62f05] = 'inherit'), _0x31dce7 && 'set' in _0x31dce7 && void 0x0 === (_0x2b41d4 = _0x31dce7['set'](_0x52d908, _0x2b41d4, _0x1db56c)) || (_0x60a2ae ? _0x22ed50['setProperty'](_0xb62f05, _0x2b41d4) : _0x22ed50[_0xb62f05] = _0x2b41d4)), void 0x0);
            }
        },
        'css': function(_0x792e7b, _0xf8486e, _0x381fe5, _0x3f25b1) {
            var _0x15d72d, _0x1e9a67, _0x17e83b, _0x4e41d6 = _0x263ab8['camelCase'](_0xf8486e);
            return _0x186535['test'](_0xf8486e) || (_0xf8486e = _0x2f220c(_0x4e41d6)), _0x17e83b = _0x263ab8['cssHooks'][_0xf8486e] || _0x263ab8['cssHooks'][_0x4e41d6], _0x17e83b && 'get' in _0x17e83b && (_0x15d72d = _0x17e83b['get'](_0x792e7b, !0x0, _0x381fe5)), void 0x0 === _0x15d72d && (_0x15d72d = _0x17c0fc(_0x792e7b, _0xf8486e, _0x3f25b1)), 'normal' === _0x15d72d && _0xf8486e in _0x4df97b && (_0x15d72d = _0x4df97b[_0xf8486e]), '' === _0x381fe5 || _0x381fe5 ? (_0x1e9a67 = parseFloat(_0x15d72d), !0x0 === _0x381fe5 || isFinite(_0x1e9a67) ? _0x1e9a67 || 0x0 : _0x15d72d) : _0x15d72d;
        }
    });
    _0x263ab8['each'](['height', 'width'], function(_0xdc64a9, _0x58fae5) {
        _0x263ab8['cssHooks'][_0x58fae5] = {
            'get': function(_0x38b88c, _0x4f6b08, _0x5419a3) {
                if (_0x4f6b08) return !_0x27aa60['test'](_0x263ab8['css'](_0x38b88c, 'display')) || _0x38b88c['getClientRects']()['length'] && _0x38b88c['getBoundingClientRect']()['width'] ? _0x318165(_0x38b88c, _0x58fae5, _0x5419a3) : _0x4cfc52(_0x38b88c, _0x569e15, function() {
                    return _0x318165(_0x38b88c, _0x58fae5, _0x5419a3);
                });
            },
            'set': function(_0x12b06d, _0x1b5a7a, _0x1eb44a) {
                var _0x3eeeeb, _0x22360d = _0x1eb44a && _0x92159(_0x12b06d);
                _0x1eb44a = _0x1eb44a && _0x24bdfd(_0x12b06d, _0x58fae5, _0x1eb44a, 'border-box' === _0x263ab8['css'](_0x12b06d, 'boxSizing', !0x1, _0x22360d), _0x22360d);
                return _0x1eb44a && (_0x3eeeeb = _0x2200e4['exec'](_0x1b5a7a)) && 'px' !== (_0x3eeeeb[0x3] || 'px') && (_0x12b06d['style'][_0x58fae5] = _0x1b5a7a, _0x1b5a7a = _0x263ab8['css'](_0x12b06d, _0x58fae5)), _0x217695(_0x12b06d, _0x1b5a7a, _0x1eb44a);
            }
        };
    });
    _0x263ab8['cssHooks']['marginLeft'] = _0x1e461f(_0x187c89['reliableMarginLeft'], function(_0x3f7862, _0x335159) {
        if (_0x335159) return (parseFloat(_0x17c0fc(_0x3f7862, 'marginLeft')) || _0x3f7862['getBoundingClientRect']()['left'] - _0x4cfc52(_0x3f7862, {
            'marginLeft': 0x0
        }, function() {
            return _0x3f7862['getBoundingClientRect']()['left'];
        })) + 'px';
    });
    _0x263ab8['each']({
        'margin': '',
        'padding': '',
        'border': 'Width'
    }, function(_0x1f6dd8, _0x3e1e4e) {
        _0x263ab8['cssHooks'][_0x1f6dd8 + _0x3e1e4e] = {
            'expand': function(_0x537d62) {
                var _0x178cc7 = 0x0,
                    _0x1f279f = {};
                for (_0x537d62 = 'string' == typeof _0x537d62 ? _0x537d62['split']('\x20') : [_0x537d62]; 0x4 > _0x178cc7; _0x178cc7++) _0x1f279f[_0x1f6dd8 + _0x598448[_0x178cc7] + _0x3e1e4e] = _0x537d62[_0x178cc7] || _0x537d62[_0x178cc7 - 0x2] || _0x537d62[0x0];
                return _0x1f279f;
            }
        };
        _0x42dde7['test'](_0x1f6dd8) || (_0x263ab8['cssHooks'][_0x1f6dd8 + _0x3e1e4e]['set'] = _0x217695);
    });
    _0x263ab8['fn']['extend']({
        'css': function(_0x946639, _0x35722c) {
            return _0x4c42c0(this, function(_0x92d39f, _0x56e352, _0x2db345) {
                var _0x133498, _0x9a6eaa = {},
                    _0x157775 = 0x0;
                if (Array['isArray'](_0x56e352)) {
                    _0x2db345 = _0x92159(_0x92d39f);
                    for (_0x133498 = _0x56e352['length']; _0x157775 < _0x133498; _0x157775++) _0x9a6eaa[_0x56e352[_0x157775]] = _0x263ab8['css'](_0x92d39f, _0x56e352[_0x157775], !0x1, _0x2db345);
                    return _0x9a6eaa;
                }
                return void 0x0 !== _0x2db345 ? _0x263ab8['style'](_0x92d39f, _0x56e352, _0x2db345) : _0x263ab8['css'](_0x92d39f, _0x56e352);
            }, _0x946639, _0x35722c, 0x1 < arguments['length']);
        }
    });
    _0x263ab8['Tween'] = _0x5c2115;
    _0x5c2115['prototype'] = {
        'constructor': _0x5c2115,
        'init': function(_0x26dcc3, _0x381854, _0x2bbd18, _0x550277, _0x3a10ae, _0xe63478) {
            this['elem'] = _0x26dcc3;
            this['prop'] = _0x2bbd18;
            this['easing'] = _0x3a10ae || _0x263ab8['easing']['_default'];
            this['options'] = _0x381854;
            this['start'] = this['now'] = this['cur']();
            this['end'] = _0x550277;
            this['unit'] = _0xe63478 || (_0x263ab8['cssNumber'][_0x2bbd18] ? '' : 'px');
        },
        'cur': function() {
            var _0x43d217 = _0x5c2115['propHooks'][this['prop']];
            return _0x43d217 && _0x43d217['get'] ? _0x43d217['get'](this) : _0x5c2115['propHooks']['_default']['get'](this);
        },
        'run': function(_0x450a73) {
            var _0x2f2931, _0x294f8a = _0x5c2115['propHooks'][this['prop']];
            return this['options']['duration'] ? this['pos'] = _0x2f2931 = _0x263ab8['easing'][this['easing']](_0x450a73, this['options']['duration'] * _0x450a73, 0x0, 0x1, this['options']['duration']) : this['pos'] = _0x2f2931 = _0x450a73, this['now'] = (this['end'] - this['start']) * _0x2f2931 + this['start'], this['options']['step'] && this['options']['step']['call'](this['elem'], this['now'], this), _0x294f8a && _0x294f8a['set'] ? _0x294f8a['set'](this) : _0x5c2115['propHooks']['_default']['set'](this), this;
        }
    };
    _0x5c2115['prototype']['init']['prototype'] = _0x5c2115['prototype'];
    _0x5c2115['propHooks'] = {
        '_default': {
            'get': function(_0x2c59f0) {
                var _0x49e0f4;
                return 0x1 !== _0x2c59f0['elem']['nodeType'] || null != _0x2c59f0['elem'][_0x2c59f0['prop']] && null == _0x2c59f0['elem']['style'][_0x2c59f0['prop']] ? _0x2c59f0['elem'][_0x2c59f0['prop']] : (_0x49e0f4 = _0x263ab8['css'](_0x2c59f0['elem'], _0x2c59f0['prop'], ''), _0x49e0f4 && 'auto' !== _0x49e0f4 ? _0x49e0f4 : 0x0);
            },
            'set': function(_0x221cf0) {
                _0x263ab8['fx']['step'][_0x221cf0['prop']] ? _0x263ab8['fx']['step'][_0x221cf0['prop']](_0x221cf0) : 0x1 !== _0x221cf0['elem']['nodeType'] || null == _0x221cf0['elem']['style'][_0x263ab8['cssProps'][_0x221cf0['prop']]] && !_0x263ab8['cssHooks'][_0x221cf0['prop']] ? _0x221cf0['elem'][_0x221cf0['prop']] = _0x221cf0['now'] : _0x263ab8['style'](_0x221cf0['elem'], _0x221cf0['prop'], _0x221cf0['now'] + _0x221cf0['unit']);
            }
        }
    };
    _0x5c2115['propHooks']['scrollTop'] = _0x5c2115['propHooks']['scrollLeft'] = {
        'set': function(_0x43b869) {
            _0x43b869['elem']['nodeType'] && _0x43b869['elem']['parentNode'] && (_0x43b869['elem'][_0x43b869['prop']] = _0x43b869['now']);
        }
    };
    _0x263ab8['easing'] = {
        'linear': function(_0x2bca9a) {
            return _0x2bca9a;
        },
        'swing': function(_0x584769) {
            return 0.5 - Math['cos'](_0x584769 * Math['PI']) / 0x2;
        },
        '_default': 'swing'
    };
    _0x263ab8['fx'] = _0x5c2115['prototype']['init'];
    _0x263ab8['fx']['step'] = {};
    var _0x534d7f, _0x3d2dba, _0x9b0eaf = /^(?:toggle|show|hide)$/,
        _0x1afc70 = /queueHooks$/;
    _0x263ab8['Animation'] = _0x263ab8['extend'](_0x49af3b, {
        'tweeners': {
            '*': [function(_0x524962, _0xb477eb) {
                var _0x2d0c43 = this['createTween'](_0x524962, _0xb477eb);
                return _0x58220b(_0x2d0c43['elem'], _0x524962, _0x2200e4['exec'](_0xb477eb), _0x2d0c43), _0x2d0c43;
            }]
        },
        'tweener': function(_0x395006, _0x2d0c5a) {
            _0x263ab8['isFunction'](_0x395006) ? (_0x2d0c5a = _0x395006, _0x395006 = ['*']) : _0x395006 = _0x395006['match'](_0x5e732e);
            for (var _0x17729c, _0x16e81f = 0x0, _0x52490e = _0x395006['length']; _0x16e81f < _0x52490e; _0x16e81f++) _0x17729c = _0x395006[_0x16e81f], _0x49af3b['tweeners'][_0x17729c] = _0x49af3b['tweeners'][_0x17729c] || [], _0x49af3b['tweeners'][_0x17729c]['unshift'](_0x2d0c5a);
        },
        'prefilters': [function(_0x4bcd9c, _0x4a66be, _0x3267d0) {
            var _0x580a2a, _0x410e1b, _0x48794e, _0x2eec65, _0x3e3a92, _0x1e8f8c, _0x4695f5, _0x5be4cf, _0x3a173d = 'width' in _0x4a66be || 'height' in _0x4a66be,
                _0x4a1421 = this,
                _0x201c65 = {},
                _0x3571dd = _0x4bcd9c['style'],
                _0x2116f4 = _0x4bcd9c['nodeType'] && _0x24cab5(_0x4bcd9c),
                _0x4d5e48 = _0x168075['get'](_0x4bcd9c, 'fxshow');
            _0x3267d0['queue'] || (_0x2eec65 = _0x263ab8['_queueHooks'](_0x4bcd9c, 'fx'), null == _0x2eec65['unqueued'] && (_0x2eec65['unqueued'] = 0x0, _0x3e3a92 = _0x2eec65['empty']['fire'], _0x2eec65['empty']['fire'] = function() {
                _0x2eec65['unqueued'] || _0x3e3a92();
            }), _0x2eec65['unqueued']++, _0x4a1421['always'](function() {
                _0x4a1421['always'](function() {
                    _0x2eec65['unqueued']--;
                    _0x263ab8['queue'](_0x4bcd9c, 'fx')['length'] || _0x2eec65['empty']['fire']();
                });
            }));
            for (_0x580a2a in _0x4a66be)
                if (_0x410e1b = _0x4a66be[_0x580a2a], _0x9b0eaf['test'](_0x410e1b)) {
                    if (delete _0x4a66be[_0x580a2a], _0x48794e = _0x48794e || 'toggle' === _0x410e1b, _0x410e1b === (_0x2116f4 ? 'hide' : 'show')) {
                        if ('show' !== _0x410e1b || !_0x4d5e48 || void 0x0 === _0x4d5e48[_0x580a2a]) continue;
                        _0x2116f4 = !0x0;
                    }
                    _0x201c65[_0x580a2a] = _0x4d5e48 && _0x4d5e48[_0x580a2a] || _0x263ab8['style'](_0x4bcd9c, _0x580a2a);
                } if (_0x1e8f8c = !_0x263ab8['isEmptyObject'](_0x4a66be), _0x1e8f8c || !_0x263ab8['isEmptyObject'](_0x201c65))
                for (_0x580a2a in (_0x3a173d && 0x1 === _0x4bcd9c['nodeType'] && (_0x3267d0['overflow'] = [_0x3571dd['overflow'], _0x3571dd['overflowX'], _0x3571dd['overflowY']], _0x4695f5 = _0x4d5e48 && _0x4d5e48['display'], null == _0x4695f5 && (_0x4695f5 = _0x168075['get'](_0x4bcd9c, 'display')), _0x5be4cf = _0x263ab8['css'](_0x4bcd9c, 'display'), 'none' === _0x5be4cf && (_0x4695f5 ? _0x5be4cf = _0x4695f5 : (_0x284a35([_0x4bcd9c], !0x0), _0x4695f5 = _0x4bcd9c['style']['display'] || _0x4695f5, _0x5be4cf = _0x263ab8['css'](_0x4bcd9c, 'display'), _0x284a35([_0x4bcd9c]))), ('inline' === _0x5be4cf || 'inline-block' === _0x5be4cf && null != _0x4695f5) && 'none' === _0x263ab8['css'](_0x4bcd9c, 'float') && (_0x1e8f8c || (_0x4a1421['done'](function() {
                        _0x3571dd['display'] = _0x4695f5;
                    }), null == _0x4695f5 && (_0x5be4cf = _0x3571dd['display'], _0x4695f5 = 'none' === _0x5be4cf ? '' : _0x5be4cf)), _0x3571dd['display'] = 'inline-block')), _0x3267d0['overflow'] && (_0x3571dd['overflow'] = 'hidden', _0x4a1421['always'](function() {
                        _0x3571dd['overflow'] = _0x3267d0['overflow'][0x0];
                        _0x3571dd['overflowX'] = _0x3267d0['overflow'][0x1];
                        _0x3571dd['overflowY'] = _0x3267d0['overflow'][0x2];
                    })), _0x1e8f8c = !0x1, _0x201c65)) _0x1e8f8c || (_0x4d5e48 ? 'hidden' in _0x4d5e48 && (_0x2116f4 = _0x4d5e48['hidden']) : _0x4d5e48 = _0x168075['access'](_0x4bcd9c, 'fxshow', {
                    'display': _0x4695f5
                }), _0x48794e && (_0x4d5e48['hidden'] = !_0x2116f4), _0x2116f4 && _0x284a35([_0x4bcd9c], !0x0), _0x4a1421['done'](function() {
                    _0x2116f4 || _0x284a35([_0x4bcd9c]);
                    _0x168075['remove'](_0x4bcd9c, 'fxshow');
                    for (_0x580a2a in _0x201c65) _0x263ab8['style'](_0x4bcd9c, _0x580a2a, _0x201c65[_0x580a2a]);
                })), _0x1e8f8c = _0x4cfa1c(_0x2116f4 ? _0x4d5e48[_0x580a2a] : 0x0, _0x580a2a, _0x4a1421), _0x580a2a in _0x4d5e48 || (_0x4d5e48[_0x580a2a] = _0x1e8f8c['start'], _0x2116f4 && (_0x1e8f8c['end'] = _0x1e8f8c['start'], _0x1e8f8c['start'] = 0x0));
        }],
        'prefilter': function(_0x4476bf, _0x32dd44) {
            _0x32dd44 ? _0x49af3b['prefilters']['unshift'](_0x4476bf) : _0x49af3b['prefilters']['push'](_0x4476bf);
        }
    });
    _0x263ab8['speed'] = function(_0x1e0ef0, _0x3dd854, _0xcefdda) {
        var _0x40980d = _0x1e0ef0 && 'object' == typeof _0x1e0ef0 ? _0x263ab8['extend']({}, _0x1e0ef0) : {
            'complete': _0xcefdda || !_0xcefdda && _0x3dd854 || _0x263ab8['isFunction'](_0x1e0ef0) && _0x1e0ef0,
            'duration': _0x1e0ef0,
            'easing': _0xcefdda && _0x3dd854 || _0x3dd854 && !_0x263ab8['isFunction'](_0x3dd854) && _0x3dd854
        };
        return _0x263ab8['fx']['off'] ? _0x40980d['duration'] = 0x0 : 'number' != typeof _0x40980d['duration'] && (_0x40980d['duration'] in _0x263ab8['fx']['speeds'] ? _0x40980d['duration'] = _0x263ab8['fx']['speeds'][_0x40980d['duration']] : _0x40980d['duration'] = _0x263ab8['fx']['speeds']['_default']), null != _0x40980d['queue'] && !0x0 !== _0x40980d['queue'] || (_0x40980d['queue'] = 'fx'), _0x40980d['old'] = _0x40980d['complete'], _0x40980d['complete'] = function() {
            _0x263ab8['isFunction'](_0x40980d['old']) && _0x40980d['old']['call'](this);
            _0x40980d['queue'] && _0x263ab8['dequeue'](this, _0x40980d['queue']);
        }, _0x40980d;
    };
    _0x263ab8['fn']['extend']({
        'fadeTo': function(_0xf0a69c, _0x238ee7, _0x574053, _0x402545) {
            return this['filter'](_0x24cab5)['css']('opacity', 0x0)['show']()['end']()['animate']({
                'opacity': _0x238ee7
            }, _0xf0a69c, _0x574053, _0x402545);
        },
        'animate': function(_0x3ac691, _0x19f879, _0x5987a4, _0x9d4135) {
            var _0x2a2712 = _0x263ab8['isEmptyObject'](_0x3ac691),
                _0x3fc57d = _0x263ab8['speed'](_0x19f879, _0x5987a4, _0x9d4135);
            _0x19f879 = function() {
                var _0x287352 = _0x49af3b(this, _0x263ab8['extend']({}, _0x3ac691), _0x3fc57d);
                (_0x2a2712 || _0x168075['get'](this, 'finish')) && _0x287352['stop'](!0x0);
            };
            return _0x19f879['finish'] = _0x19f879, _0x2a2712 || !0x1 === _0x3fc57d['queue'] ? this['each'](_0x19f879) : this['queue'](_0x3fc57d['queue'], _0x19f879);
        },
        'stop': function(_0x333ac6, _0x1e8b04, _0xf966c3) {
            var _0x682066 = function(_0x1dff54) {
                var _0x4b7ea9 = _0x1dff54['stop'];
                delete _0x1dff54['stop'];
                _0x4b7ea9(_0xf966c3);
            };
            return 'string' != typeof _0x333ac6 && (_0xf966c3 = _0x1e8b04, _0x1e8b04 = _0x333ac6, _0x333ac6 = void 0x0), _0x1e8b04 && !0x1 !== _0x333ac6 && this['queue'](_0x333ac6 || 'fx', []), this['each'](function() {
                var _0x1846a6 = !0x0,
                    _0x4c47b0 = null != _0x333ac6 && _0x333ac6 + 'queueHooks',
                    _0x3e678e = _0x263ab8['timers'],
                    _0x5e659c = _0x168075['get'](this);
                if (_0x4c47b0) _0x5e659c[_0x4c47b0] && _0x5e659c[_0x4c47b0]['stop'] && _0x682066(_0x5e659c[_0x4c47b0]);
                else
                    for (_0x4c47b0 in _0x5e659c) _0x5e659c[_0x4c47b0] && _0x5e659c[_0x4c47b0]['stop'] && _0x1afc70['test'](_0x4c47b0) && _0x682066(_0x5e659c[_0x4c47b0]);
                for (_0x4c47b0 = _0x3e678e['length']; _0x4c47b0--;) _0x3e678e[_0x4c47b0]['elem'] !== this || null != _0x333ac6 && _0x3e678e[_0x4c47b0]['queue'] !== _0x333ac6 || (_0x3e678e[_0x4c47b0]['anim']['stop'](_0xf966c3), _0x1846a6 = !0x1, _0x3e678e['splice'](_0x4c47b0, 0x1));
                !_0x1846a6 && _0xf966c3 || _0x263ab8['dequeue'](this, _0x333ac6);
            });
        },
        'finish': function(_0x5bc38c) {
            return !0x1 !== _0x5bc38c && (_0x5bc38c = _0x5bc38c || 'fx'), this['each'](function() {
                var _0x524217, _0x17307e = _0x168075['get'](this),
                    _0x2e19e6 = _0x17307e[_0x5bc38c + 'queue'];
                _0x524217 = _0x17307e[_0x5bc38c + 'queueHooks'];
                var _0x5f2527 = _0x263ab8['timers'],
                    _0x419ba4 = _0x2e19e6 ? _0x2e19e6['length'] : 0x0;
                _0x17307e['finish'] = !0x0;
                _0x263ab8['queue'](this, _0x5bc38c, []);
                _0x524217 && _0x524217['stop'] && _0x524217['stop']['call'](this, !0x0);
                for (_0x524217 = _0x5f2527['length']; _0x524217--;) _0x5f2527[_0x524217]['elem'] === this && _0x5f2527[_0x524217]['queue'] === _0x5bc38c && (_0x5f2527[_0x524217]['anim']['stop'](!0x0), _0x5f2527['splice'](_0x524217, 0x1));
                for (_0x524217 = 0x0; _0x524217 < _0x419ba4; _0x524217++) _0x2e19e6[_0x524217] && _0x2e19e6[_0x524217]['finish'] && _0x2e19e6[_0x524217]['finish']['call'](this);
                delete _0x17307e['finish'];
            });
        }
    });
    _0x263ab8['each'](['toggle', 'show', 'hide'], function(_0x28bc38, _0x21c6a6) {
        var _0x25ef97 = _0x263ab8['fn'][_0x21c6a6];
        _0x263ab8['fn'][_0x21c6a6] = function(_0x1888aa, _0x208aa5, _0x279f3f) {
            return null == _0x1888aa || 'boolean' == typeof _0x1888aa ? _0x25ef97['apply'](this, arguments) : this['animate'](_0x4f39f8(_0x21c6a6, !0x0), _0x1888aa, _0x208aa5, _0x279f3f);
        };
    });
    _0x263ab8['each']({
        'slideDown': _0x4f39f8('show'),
        'slideUp': _0x4f39f8('hide'),
        'slideToggle': _0x4f39f8('toggle'),
        'fadeIn': {
            'opacity': 'show'
        },
        'fadeOut': {
            'opacity': 'hide'
        },
        'fadeToggle': {
            'opacity': 'toggle'
        }
    }, function(_0x303829, _0x3db60f) {
        _0x263ab8['fn'][_0x303829] = function(_0x2c09ac, _0x532a4b, _0x1ade0a) {
            return this['animate'](_0x3db60f, _0x2c09ac, _0x532a4b, _0x1ade0a);
        };
    });
    _0x263ab8['timers'] = [];
    _0x263ab8['fx']['tick'] = function() {
        var _0x517be9, _0x7ca33b = 0x0,
            _0xbe0f26 = _0x263ab8['timers'];
        for (_0x534d7f = _0x263ab8['now'](); _0x7ca33b < _0xbe0f26['length']; _0x7ca33b++) _0x517be9 = _0xbe0f26[_0x7ca33b], _0x517be9() || _0xbe0f26[_0x7ca33b] !== _0x517be9 || _0xbe0f26['splice'](_0x7ca33b--, 0x1);
        _0xbe0f26['length'] || _0x263ab8['fx']['stop']();
        _0x534d7f = void 0x0;
    };
    _0x263ab8['fx']['timer'] = function(_0x50764d) {
        _0x263ab8['timers']['push'](_0x50764d);
        _0x263ab8['fx']['start']();
    };
    _0x263ab8['fx']['interval'] = 0xd;
    _0x263ab8['fx']['start'] = function() {
        _0x3d2dba || (_0x3d2dba = !0x0, _0x32440c());
    };
    _0x263ab8['fx']['stop'] = function() {
        _0x3d2dba = null;
    };
    _0x263ab8['fx']['speeds'] = {
        'slow': 0x258,
        'fast': 0xc8,
        '_default': 0x190
    };
    _0x263ab8['fn']['delay'] = function(_0x5a4f70, _0x529aa5) {
        return _0x5a4f70 = _0x263ab8['fx'] ? _0x263ab8['fx']['speeds'][_0x5a4f70] || _0x5a4f70 : _0x5a4f70, _0x529aa5 = _0x529aa5 || 'fx', this['queue'](_0x529aa5, function(_0x4163ad, _0x5ee388) {
            var _0x1e96f3 = _0x51f4a4['setTimeout'](_0x4163ad, _0x5a4f70);
            _0x5ee388['stop'] = function() {
                _0x51f4a4['clearTimeout'](_0x1e96f3);
            };
        });
    };
    var _0x2b5b33 = _0x1b3fe3['createElement']('input'),
        _0x23e6b1 = _0x1b3fe3['createElement']('select')['appendChild'](_0x1b3fe3['createElement']('option'));
    _0x2b5b33['type'] = 'checkbox';
    _0x187c89['checkOn'] = '' !== _0x2b5b33['value'];
    _0x187c89['optSelected'] = _0x23e6b1['selected'];
    _0x2b5b33 = _0x1b3fe3['createElement']('input');
    _0x2b5b33['value'] = 't';
    _0x2b5b33['type'] = 'radio';
    _0x187c89['radioValue'] = 't' === _0x2b5b33['value'];
    var _0x51c10d, _0x3e8da1 = _0x263ab8['expr']['attrHandle'];
    _0x263ab8['fn']['extend']({
        'attr': function(_0x521589, _0x13d8bf) {
            return _0x4c42c0(this, _0x263ab8['attr'], _0x521589, _0x13d8bf, 0x1 < arguments['length']);
        },
        'removeAttr': function(_0x17dbb4) {
            return this['each'](function() {
                _0x263ab8['removeAttr'](this, _0x17dbb4);
            });
        }
    });
    _0x263ab8['extend']({
        'attr': function(_0x403118, _0x3ecc96, _0x5e6fce) {
            var _0x2f48ae, _0xf66498, _0x141f7f = _0x403118['nodeType'];
            if (0x3 !== _0x141f7f && 0x8 !== _0x141f7f && 0x2 !== _0x141f7f) return 'undefined' == typeof _0x403118['getAttribute'] ? _0x263ab8['prop'](_0x403118, _0x3ecc96, _0x5e6fce) : (0x1 === _0x141f7f && _0x263ab8['isXMLDoc'](_0x403118) || (_0xf66498 = _0x263ab8['attrHooks'][_0x3ecc96['toLowerCase']()] || (_0x263ab8['expr']['match']['bool']['test'](_0x3ecc96) ? _0x51c10d : void 0x0)), void 0x0 !== _0x5e6fce ? null === _0x5e6fce ? void _0x263ab8['removeAttr'](_0x403118, _0x3ecc96) : _0xf66498 && 'set' in _0xf66498 && void 0x0 !== (_0x2f48ae = _0xf66498['set'](_0x403118, _0x5e6fce, _0x3ecc96)) ? _0x2f48ae : (_0x403118['setAttribute'](_0x3ecc96, _0x5e6fce + ''), _0x5e6fce) : _0xf66498 && 'get' in _0xf66498 && null !== (_0x2f48ae = _0xf66498['get'](_0x403118, _0x3ecc96)) ? _0x2f48ae : (_0x2f48ae = _0x263ab8['find']['attr'](_0x403118, _0x3ecc96), null == _0x2f48ae ? void 0x0 : _0x2f48ae));
        },
        'attrHooks': {
            'type': {
                'set': function(_0x2180c6, _0x1b615d) {
                    if (!_0x187c89['radioValue'] && 'radio' === _0x1b615d && _0x3b9113(_0x2180c6, 'input')) {
                        var _0x587855 = _0x2180c6['value'];
                        return _0x2180c6['setAttribute']('type', _0x1b615d), _0x587855 && (_0x2180c6['value'] = _0x587855), _0x1b615d;
                    }
                }
            }
        },
        'removeAttr': function(_0x38178e, _0x25624e) {
            var _0x3230b0, _0x339736 = 0x0,
                _0x12a272 = _0x25624e && _0x25624e['match'](_0x5e732e);
            if (_0x12a272 && 0x1 === _0x38178e['nodeType'])
                for (; _0x3230b0 = _0x12a272[_0x339736++];) _0x38178e['removeAttribute'](_0x3230b0);
        }
    });
    _0x51c10d = {
        'set': function(_0x27b370, _0x14c4aa, _0x46c1fb) {
            return !0x1 === _0x14c4aa ? _0x263ab8['removeAttr'](_0x27b370, _0x46c1fb) : _0x27b370['setAttribute'](_0x46c1fb, _0x46c1fb), _0x46c1fb;
        }
    };
    _0x263ab8['each'](_0x263ab8['expr']['match']['bool']['source']['match'](/\w+/g), function(_0x969a4a, _0x40d829) {
        var _0x2940ef = _0x3e8da1[_0x40d829] || _0x263ab8['find']['attr'];
        _0x3e8da1[_0x40d829] = function(_0xe4b74f, _0x166fef, _0x51cd03) {
            var _0x2cdcdf, _0x4b47cc, _0x4fa4d2 = _0x166fef['toLowerCase']();
            return _0x51cd03 || (_0x4b47cc = _0x3e8da1[_0x4fa4d2], _0x3e8da1[_0x4fa4d2] = _0x2cdcdf, _0x2cdcdf = null != _0x2940ef(_0xe4b74f, _0x166fef, _0x51cd03) ? _0x4fa4d2 : null, _0x3e8da1[_0x4fa4d2] = _0x4b47cc), _0x2cdcdf;
        };
    });
    var _0x1ef223 = /^(?:input|select|textarea|button)$/i,
        _0x3da754 = /^(?:a|area)$/i;
    _0x263ab8['fn']['extend']({
        'prop': function(_0x463816, _0x131dcc) {
            return _0x4c42c0(this, _0x263ab8['prop'], _0x463816, _0x131dcc, 0x1 < arguments['length']);
        },
        'removeProp': function(_0x3466a2) {
            return this['each'](function() {
                delete this[_0x263ab8['propFix'][_0x3466a2] || _0x3466a2];
            });
        }
    });
    _0x263ab8['extend']({
        'prop': function(_0x5069dc, _0x2a9f3d, _0x52a474) {
            var _0x436eda, _0x2973ba, _0x2638c5 = _0x5069dc['nodeType'];
            if (0x3 !== _0x2638c5 && 0x8 !== _0x2638c5 && 0x2 !== _0x2638c5) return 0x1 === _0x2638c5 && _0x263ab8['isXMLDoc'](_0x5069dc) || (_0x2a9f3d = _0x263ab8['propFix'][_0x2a9f3d] || _0x2a9f3d, _0x2973ba = _0x263ab8['propHooks'][_0x2a9f3d]), void 0x0 !== _0x52a474 ? _0x2973ba && 'set' in _0x2973ba && void 0x0 !== (_0x436eda = _0x2973ba['set'](_0x5069dc, _0x52a474, _0x2a9f3d)) ? _0x436eda : _0x5069dc[_0x2a9f3d] = _0x52a474 : _0x2973ba && 'get' in _0x2973ba && null !== (_0x436eda = _0x2973ba['get'](_0x5069dc, _0x2a9f3d)) ? _0x436eda : _0x5069dc[_0x2a9f3d];
        },
        'propHooks': {
            'tabIndex': {
                'get': function(_0x24a67d) {
                    var _0x5dc106 = _0x263ab8['find']['attr'](_0x24a67d, 'tabindex');
                    return _0x5dc106 ? parseInt(_0x5dc106, 0xa) : _0x1ef223['test'](_0x24a67d['nodeName']) || _0x3da754['test'](_0x24a67d['nodeName']) && _0x24a67d['href'] ? 0x0 : -0x1;
                }
            }
        },
        'propFix': {
            'for': 'htmlFor',
            'class': 'className'
        }
    });
    _0x187c89['optSelected'] || (_0x263ab8['propHooks']['selected'] = {
        'get': function(_0x5515f6) {
            _0x5515f6 = _0x5515f6['parentNode'];
            return _0x5515f6 && _0x5515f6['parentNode'] && _0x5515f6['parentNode']['selectedIndex'], null;
        },
        'set': function(_0x45919f) {
            _0x45919f = _0x45919f['parentNode'];
            _0x45919f && (_0x45919f['selectedIndex'], _0x45919f['parentNode'] && _0x45919f['parentNode']['selectedIndex']);
        }
    });
    _0x263ab8['each']('tabIndex\x20readOnly\x20maxLength\x20cellSpacing\x20cellPadding\x20rowSpan\x20colSpan\x20useMap\x20frameBorder\x20contentEditable' ['split']('\x20'), function() {
        _0x263ab8['propFix'][this['toLowerCase']()] = this;
    });
    _0x263ab8['fn']['extend']({
        'addClass': function(_0x33fb04) {
            var _0x1c4965, _0x4e3734, _0x2ca148, _0x1e23c4, _0x415cd9, _0x500f82, _0x382c7a = 0x0;
            if (_0x263ab8['isFunction'](_0x33fb04)) return this['each'](function(_0x3dd31e) {
                _0x263ab8(this)['addClass'](_0x33fb04['call'](this, _0x3dd31e, _0x1efab4(this)));
            });
            if ('string' == typeof _0x33fb04 && _0x33fb04)
                for (_0x1c4965 = _0x33fb04['match'](_0x5e732e) || []; _0x4e3734 = this[_0x382c7a++];)
                    if (_0x1e23c4 = _0x1efab4(_0x4e3734), _0x2ca148 = 0x1 === _0x4e3734['nodeType'] && '\x20' + _0x5a3029(_0x1e23c4) + '\x20') {
                        for (_0x500f82 = 0x0; _0x415cd9 = _0x1c4965[_0x500f82++];) 0x0 > _0x2ca148['indexOf']('\x20' + _0x415cd9 + '\x20') && (_0x2ca148 += _0x415cd9 + '\x20');
                        _0x2ca148 = _0x5a3029(_0x2ca148);
                        _0x1e23c4 !== _0x2ca148 && _0x4e3734['setAttribute']('class', _0x2ca148);
                    } return this;
        },
        'removeClass': function(_0x8b3f82) {
            var _0x171328, _0x3e3435, _0x412861, _0x52840f, _0x53f32f, _0x307ad7, _0x50f0be = 0x0;
            if (_0x263ab8['isFunction'](_0x8b3f82)) return this['each'](function(_0x46f5a8) {
                _0x263ab8(this)['removeClass'](_0x8b3f82['call'](this, _0x46f5a8, _0x1efab4(this)));
            });
            if (!arguments['length']) return this['attr']('class', '');
            if ('string' == typeof _0x8b3f82 && _0x8b3f82)
                for (_0x171328 = _0x8b3f82['match'](_0x5e732e) || []; _0x3e3435 = this[_0x50f0be++];)
                    if (_0x52840f = _0x1efab4(_0x3e3435), _0x412861 = 0x1 === _0x3e3435['nodeType'] && '\x20' + _0x5a3029(_0x52840f) + '\x20') {
                        for (_0x307ad7 = 0x0; _0x53f32f = _0x171328[_0x307ad7++];)
                            for (; - 0x1 < _0x412861['indexOf']('\x20' + _0x53f32f + '\x20');) _0x412861 = _0x412861['replace']('\x20' + _0x53f32f + '\x20', '\x20');
                        _0x412861 = _0x5a3029(_0x412861);
                        _0x52840f !== _0x412861 && _0x3e3435['setAttribute']('class', _0x412861);
                    } return this;
        },
        'toggleClass': function(_0x54ca3e, _0x22baf8) {
            var _0x1165dd = typeof _0x54ca3e;
            return 'boolean' == typeof _0x22baf8 && 'string' === _0x1165dd ? _0x22baf8 ? this['addClass'](_0x54ca3e) : this['removeClass'](_0x54ca3e) : _0x263ab8['isFunction'](_0x54ca3e) ? this['each'](function(_0x5869bd) {
                _0x263ab8(this)['toggleClass'](_0x54ca3e['call'](this, _0x5869bd, _0x1efab4(this), _0x22baf8), _0x22baf8);
            }) : this['each'](function() {
                var _0x3c4b45, _0x23c8b4, _0x5cbf0e, _0x2cccc8;
                if ('string' === _0x1165dd) {
                    _0x23c8b4 = 0x0;
                    _0x5cbf0e = _0x263ab8(this);
                    for (_0x2cccc8 = _0x54ca3e['match'](_0x5e732e) || []; _0x3c4b45 = _0x2cccc8[_0x23c8b4++];) _0x5cbf0e['hasClass'](_0x3c4b45) ? _0x5cbf0e['removeClass'](_0x3c4b45) : _0x5cbf0e['addClass'](_0x3c4b45);
                } else void 0x0 !== _0x54ca3e && 'boolean' !== _0x1165dd || (_0x3c4b45 = _0x1efab4(this), _0x3c4b45 && _0x168075['set'](this, '__className__', _0x3c4b45), this['setAttribute'] && this['setAttribute']('class', _0x3c4b45 || !0x1 === _0x54ca3e ? '' : _0x168075['get'](this, '__className__') || ''));
            });
        },
        'hasClass': function(_0x156b37) {
            var _0x3387fb, _0x357486 = 0x0;
            for (_0x156b37 = '\x20' + _0x156b37 + '\x20'; _0x3387fb = this[_0x357486++];)
                if (0x1 === _0x3387fb['nodeType'] && -0x1 < ('\x20' + _0x5a3029(_0x1efab4(_0x3387fb)) + '\x20')['indexOf'](_0x156b37)) return !0x0;
            return !0x1;
        }
    });
    var _0x3ab003 = /\r/g;
    _0x263ab8['fn']['extend']({
        'val': function(_0x555741) {
            var _0xde26b5, _0xa5c45d, _0x4bcdf1, _0x4a76c1 = this[0x0];
            if (arguments['length']) return _0x4bcdf1 = _0x263ab8['isFunction'](_0x555741), this['each'](function(_0x57b5d3) {
                var _0x44a786;
                0x1 === this['nodeType'] && (_0x44a786 = _0x4bcdf1 ? _0x555741['call'](this, _0x57b5d3, _0x263ab8(this)['val']()) : _0x555741, null == _0x44a786 ? _0x44a786 = '' : 'number' == typeof _0x44a786 ? _0x44a786 += '' : Array['isArray'](_0x44a786) && (_0x44a786 = _0x263ab8['map'](_0x44a786, function(_0x521da9) {
                    return null == _0x521da9 ? '' : _0x521da9 + '';
                })), _0xde26b5 = _0x263ab8['valHooks'][this['type']] || _0x263ab8['valHooks'][this['nodeName']['toLowerCase']()], _0xde26b5 && 'set' in _0xde26b5 && void 0x0 !== _0xde26b5['set'](this, _0x44a786, 'value') || (this['value'] = _0x44a786));
            });
            if (_0x4a76c1) return _0xde26b5 = _0x263ab8['valHooks'][_0x4a76c1['type']] || _0x263ab8['valHooks'][_0x4a76c1['nodeName']['toLowerCase']()], _0xde26b5 && 'get' in _0xde26b5 && void 0x0 !== (_0xa5c45d = _0xde26b5['get'](_0x4a76c1, 'value')) ? _0xa5c45d : (_0xa5c45d = _0x4a76c1['value'], 'string' == typeof _0xa5c45d ? _0xa5c45d['replace'](_0x3ab003, '') : null == _0xa5c45d ? '' : _0xa5c45d);
        }
    });
    _0x263ab8['extend']({
        'valHooks': {
            'option': {
                'get': function(_0x1329c3) {
                    var _0x5ce385 = _0x263ab8['find']['attr'](_0x1329c3, 'value');
                    return null != _0x5ce385 ? _0x5ce385 : _0x5a3029(_0x263ab8['text'](_0x1329c3));
                }
            },
            'select': {
                'get': function(_0x3eda6e) {
                    var _0x3dcf88, _0x3ebe8c, _0x3f96b3 = _0x3eda6e['options'],
                        _0x5c0270 = _0x3eda6e['selectedIndex'],
                        _0xda8485 = 'select-one' === _0x3eda6e['type'],
                        _0x36cf71 = _0xda8485 ? null : [],
                        _0xf8c6d2 = _0xda8485 ? _0x5c0270 + 0x1 : _0x3f96b3['length'];
                    for (_0x3ebe8c = 0x0 > _0x5c0270 ? _0xf8c6d2 : _0xda8485 ? _0x5c0270 : 0x0; _0x3ebe8c < _0xf8c6d2; _0x3ebe8c++)
                        if (_0x3dcf88 = _0x3f96b3[_0x3ebe8c], (_0x3dcf88['selected'] || _0x3ebe8c === _0x5c0270) && !_0x3dcf88['disabled'] && (!_0x3dcf88['parentNode']['disabled'] || !_0x3b9113(_0x3dcf88['parentNode'], 'optgroup'))) {
                            if (_0x3eda6e = _0x263ab8(_0x3dcf88)['val'](), _0xda8485) return _0x3eda6e;
                            _0x36cf71['push'](_0x3eda6e);
                        } return _0x36cf71;
                },
                'set': function(_0x1a5d09, _0x13396e) {
                    for (var _0x462497, _0x2d51b9, _0x14da5b = _0x1a5d09['options'], _0x2fcc11 = _0x263ab8['makeArray'](_0x13396e), _0x344271 = _0x14da5b['length']; _0x344271--;) _0x2d51b9 = _0x14da5b[_0x344271], (_0x2d51b9['selected'] = -0x1 < _0x263ab8['inArray'](_0x263ab8['valHooks']['option']['get'](_0x2d51b9), _0x2fcc11)) && (_0x462497 = !0x0);
                    return _0x462497 || (_0x1a5d09['selectedIndex'] = -0x1), _0x2fcc11;
                }
            }
        }
    });
    _0x263ab8['each'](['radio', 'checkbox'], function() {
        _0x263ab8['valHooks'][this] = {
            'set': function(_0x4b16b2, _0x3da0b6) {
                if (Array['isArray'](_0x3da0b6)) return _0x4b16b2['checked'] = -0x1 < _0x263ab8['inArray'](_0x263ab8(_0x4b16b2)['val'](), _0x3da0b6);
            }
        };
        _0x187c89['checkOn'] || (_0x263ab8['valHooks'][this]['get'] = function(_0x55b7f8) {
            return null === _0x55b7f8['getAttribute']('value') ? 'on' : _0x55b7f8['value'];
        });
    });
    var _0x51175c = /^(?:focusinfocus|focusoutblur)$/;
    _0x263ab8['extend'](_0x263ab8['event'], {
        'trigger': function(_0x930de8, _0x5bade8, _0x261893, _0x29f8de) {
            var _0x88e0a9, _0x773ae5, _0x4fac8c, _0x47d55d, _0x2f200f, _0x255833, _0x23655a, _0x19ae7a = [_0x261893 || _0x1b3fe3],
                _0x59c848 = _0xccce8d['call'](_0x930de8, 'type') ? _0x930de8['type'] : _0x930de8;
            _0x88e0a9 = _0xccce8d['call'](_0x930de8, 'namespace') ? _0x930de8['namespace']['split']('.') : [];
            if (_0x773ae5 = _0x4fac8c = _0x261893 = _0x261893 || _0x1b3fe3, 0x3 !== _0x261893['nodeType'] && 0x8 !== _0x261893['nodeType'] && !_0x51175c['test'](_0x59c848 + _0x263ab8['event']['triggered']) && (-0x1 < _0x59c848['indexOf']('.') && (_0x88e0a9 = _0x59c848['split']('.'), _0x59c848 = _0x88e0a9['shift'](), _0x88e0a9['sort']()), _0x2f200f = 0x0 > _0x59c848['indexOf'](':') && 'on' + _0x59c848, _0x930de8 = _0x930de8[_0x263ab8['expando']] ? _0x930de8 : new _0x263ab8['Event'](_0x59c848, 'object' == typeof _0x930de8 && _0x930de8), _0x930de8['isTrigger'] = _0x29f8de ? 0x2 : 0x3, _0x930de8['namespace'] = _0x88e0a9['join']('.'), _0x930de8['rnamespace'] = _0x930de8['namespace'] ? RegExp('(^|\x5c.)' + _0x88e0a9['join']('\x5c.(?:.*\x5c.|)') + '(\x5c.|$)') : null, _0x930de8['result'] = void 0x0, _0x930de8['target'] || (_0x930de8['target'] = _0x261893), _0x5bade8 = null == _0x5bade8 ? [_0x930de8] : _0x263ab8['makeArray'](_0x5bade8, [_0x930de8]), _0x23655a = _0x263ab8['event']['special'][_0x59c848] || {}, _0x29f8de || !_0x23655a['trigger'] || !0x1 !== _0x23655a['trigger']['apply'](_0x261893, _0x5bade8))) {
                if (!_0x29f8de && !_0x23655a['noBubble'] && !_0x263ab8['isWindow'](_0x261893)) {
                    _0x47d55d = _0x23655a['delegateType'] || _0x59c848;
                    for (_0x51175c['test'](_0x47d55d + _0x59c848) || (_0x773ae5 = _0x773ae5['parentNode']); _0x773ae5; _0x773ae5 = _0x773ae5['parentNode']) _0x19ae7a['push'](_0x773ae5), _0x4fac8c = _0x773ae5;
                    _0x4fac8c === (_0x261893['ownerDocument'] || _0x1b3fe3) && _0x19ae7a['push'](_0x4fac8c['defaultView'] || _0x4fac8c['parentWindow'] || _0x51f4a4);
                }
                for (_0x88e0a9 = 0x0;
                    (_0x773ae5 = _0x19ae7a[_0x88e0a9++]) && !_0x930de8['isPropagationStopped']();) _0x930de8['type'] = 0x1 < _0x88e0a9 ? _0x47d55d : _0x23655a['bindType'] || _0x59c848, (_0x255833 = (_0x168075['get'](_0x773ae5, 'events') || {})[_0x930de8['type']] && _0x168075['get'](_0x773ae5, 'handle')) && _0x255833['apply'](_0x773ae5, _0x5bade8), (_0x255833 = _0x2f200f && _0x773ae5[_0x2f200f]) && _0x255833['apply'] && _0x5b0499(_0x773ae5) && (_0x930de8['result'] = _0x255833['apply'](_0x773ae5, _0x5bade8), !0x1 === _0x930de8['result'] && _0x930de8['preventDefault']());
                return _0x930de8['type'] = _0x59c848, _0x29f8de || _0x930de8['isDefaultPrevented']() || _0x23655a['_default'] && !0x1 !== _0x23655a['_default']['apply'](_0x19ae7a['pop'](), _0x5bade8) || !_0x5b0499(_0x261893) || _0x2f200f && _0x263ab8['isFunction'](_0x261893[_0x59c848]) && !_0x263ab8['isWindow'](_0x261893) && (_0x4fac8c = _0x261893[_0x2f200f], _0x4fac8c && (_0x261893[_0x2f200f] = null), _0x263ab8['event']['triggered'] = _0x59c848, _0x261893[_0x59c848](), _0x263ab8['event']['triggered'] = void 0x0, _0x4fac8c && (_0x261893[_0x2f200f] = _0x4fac8c)), _0x930de8['result'];
            }
        },
        'simulate': function(_0x4fdac6, _0x20c885, _0x11d671) {
            _0x4fdac6 = _0x263ab8['extend'](new _0x263ab8['Event'](), _0x11d671, {
                'type': _0x4fdac6,
                'isSimulated': !0x0
            });
            _0x263ab8['event']['trigger'](_0x4fdac6, null, _0x20c885);
        }
    });
    _0x263ab8['fn']['extend']({
        'trigger': function(_0x47da80, _0x36ec73) {
            return this['each'](function() {
                _0x263ab8['event']['trigger'](_0x47da80, _0x36ec73, this);
            });
        },
        'triggerHandler': function(_0x215d56, _0x4d6dc9) {
            var _0x4402c3 = this[0x0];
            if (_0x4402c3) return _0x263ab8['event']['trigger'](_0x215d56, _0x4d6dc9, _0x4402c3, !0x0);
        }
    });
    _0x263ab8['each']('blur\x20focus\x20focusin\x20focusout\x20resize\x20scroll\x20click\x20dblclick\x20mousedown\x20mouseup\x20mousemove\x20mouseover\x20mouseout\x20mouseenter\x20mouseleave\x20change\x20select\x20submit\x20keydown\x20keypress\x20keyup\x20contextmenu' ['split']('\x20'), function(_0x2b1e2f, _0x484b70) {
        _0x263ab8['fn'][_0x484b70] = function(_0x4dc6ac, _0x56aff4) {
            return 0x0 < arguments['length'] ? this['on'](_0x484b70, null, _0x4dc6ac, _0x56aff4) : this['trigger'](_0x484b70);
        };
    });
    _0x263ab8['fn']['extend']({
        'hover': function(_0x3a00e7, _0xc2e052) {
            return this['mouseenter'](_0x3a00e7)['mouseleave'](_0xc2e052 || _0x3a00e7);
        }
    });
    _0x187c89['focusin'] = 'onfocusin' in _0x51f4a4;
    _0x187c89['focusin'] || _0x263ab8['each']({
        'focus': 'focusin',
        'blur': 'focusout'
    }, function(_0x44573b, _0x3689aa) {
        var _0x1d42bf = function(_0x57cbd0) {
            _0x263ab8['event']['simulate'](_0x3689aa, _0x57cbd0['target'], _0x263ab8['event']['fix'](_0x57cbd0));
        };
        _0x263ab8['event']['special'][_0x3689aa] = {
            'setup': function() {
                var _0x38767b = this['ownerDocument'] || this,
                    _0x10538f = _0x168075['access'](_0x38767b, _0x3689aa);
                _0x10538f || _0x38767b['addEventListener'](_0x44573b, _0x1d42bf, !0x0);
                _0x168075['access'](_0x38767b, _0x3689aa, (_0x10538f || 0x0) + 0x1);
            },
            'teardown': function() {
                var _0x3fd2c6 = this['ownerDocument'] || this,
                    _0x537d70 = _0x168075['access'](_0x3fd2c6, _0x3689aa) - 0x1;
                _0x537d70 ? _0x168075['access'](_0x3fd2c6, _0x3689aa, _0x537d70) : (_0x3fd2c6['removeEventListener'](_0x44573b, _0x1d42bf, !0x0), _0x168075['remove'](_0x3fd2c6, _0x3689aa));
            }
        };
    });
    var _0x34d678 = _0x51f4a4['location'],
        _0x1899c9 = _0x263ab8['now'](),
        _0x50ebd4 = /\?/;
    _0x263ab8['parseXML'] = function(_0x4a630c) {
        var _0x12af03;
        if (!_0x4a630c || 'string' != typeof _0x4a630c) return null;
        try {
            _0x12af03 = new _0x51f4a4['DOMParser']()['parseFromString'](_0x4a630c, 'text/xml');
        } catch (_0x15999) {
            _0x12af03 = void 0x0;
        }
        return _0x12af03 && !_0x12af03['getElementsByTagName']('parsererror')['length'] || _0x263ab8['error']('Invalid\x20XML:\x20' + _0x4a630c), _0x12af03;
    };
    var _0x102f5d = /\[\]$/,
        _0x2f895b = /\r?\n/g,
        _0x4239bb = /^(?:submit|button|image|reset|file)$/i,
        _0x2d8a23 = /^(?:input|select|textarea|keygen)/i;
    _0x263ab8['param'] = function(_0x3c1b6e, _0x1aee11) {
        var _0x24cd23, _0x4e6c76 = [],
            _0x5b36a5 = function(_0x1b3601, _0xcf2cba) {
                var _0x28de86 = _0x263ab8['isFunction'](_0xcf2cba) ? _0xcf2cba() : _0xcf2cba;
                _0x4e6c76[_0x4e6c76['length']] = encodeURIComponent(_0x1b3601) + '=' + encodeURIComponent(null == _0x28de86 ? '' : _0x28de86);
            };
        if (Array['isArray'](_0x3c1b6e) || _0x3c1b6e['jquery'] && !_0x263ab8['isPlainObject'](_0x3c1b6e)) _0x263ab8['each'](_0x3c1b6e, function() {
            _0x5b36a5(this['name'], this['value']);
        });
        else
            for (_0x24cd23 in _0x3c1b6e) _0xb5faa1(_0x24cd23, _0x3c1b6e[_0x24cd23], _0x1aee11, _0x5b36a5);
        return _0x4e6c76['join']('&');
    };
    _0x263ab8['fn']['extend']({
        'serialize': function() {
            return _0x263ab8['param'](this['serializeArray']());
        },
        'serializeArray': function() {
            return this['map'](function() {
                var _0x590de3 = _0x263ab8['prop'](this, 'elements');
                return _0x590de3 ? _0x263ab8['makeArray'](_0x590de3) : this;
            })['filter'](function() {
                var _0x90ab7b = this['type'];
                return this['name'] && !_0x263ab8(this)['is'](':disabled') && _0x2d8a23['test'](this['nodeName']) && !_0x4239bb['test'](_0x90ab7b) && (this['checked'] || !_0x439d09['test'](_0x90ab7b));
            })['map'](function(_0x443e02, _0xc9b239) {
                var _0xa6670b = _0x263ab8(this)['val']();
                return null == _0xa6670b ? null : Array['isArray'](_0xa6670b) ? _0x263ab8['map'](_0xa6670b, function(_0x3efb32) {
                    return {
                        'name': _0xc9b239['name'],
                        'value': _0x3efb32['replace'](_0x2f895b, '\x0d\x0a')
                    };
                }) : {
                    'name': _0xc9b239['name'],
                    'value': _0xa6670b['replace'](_0x2f895b, '\x0d\x0a')
                };
            })['get']();
        }
    });
    var _0x10e168 = /%20/g,
        _0x44940b = /#.*$/,
        _0x42660a = /([?&])_=[^&]*/,
        _0xf56fc1 = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        _0x48e4af = /^(?:GET|HEAD)$/,
        _0x2e6833 = /^\/\//,
        _0x2fc01b = {},
        _0x2066a6 = {},
        _0xd4d068 = '*/' ['concat']('*'),
        _0x58f19d = _0x1b3fe3['createElement']('a');
    _0x58f19d['href'] = _0x34d678['href'];
    _0x263ab8['extend']({
        'active': 0x0,
        'lastModified': {},
        'etag': {},
        'ajaxSettings': {
            'url': _0x34d678['href'],
            'type': 'GET',
            'isLocal': /^(?:about|app|app-storage|.+-extension|file|res|widget):$/ ['test'](_0x34d678['protocol']),
            'global': !0x0,
            'processData': !0x0,
            'async': !0x0,
            'contentType': 'application/x-www-form-urlencoded;\x20charset=UTF-8',
            'accepts': {
                '*': _0xd4d068,
                'text': 'text/plain',
                'html': 'text/html',
                'xml': 'application/xml,\x20text/xml',
                'json': 'application/json,\x20text/javascript'
            },
            'contents': {
                'xml': /\bxml\b/,
                'html': /\bhtml/,
                'json': /\bjson\b/
            },
            'responseFields': {
                'xml': 'responseXML',
                'text': 'responseText',
                'json': 'responseJSON'
            },
            'converters': {
                '*\x20text': String,
                'text\x20html': !0x0,
                'text\x20json': JSON['parse'],
                'text\x20xml': _0x263ab8['parseXML']
            },
            'flatOptions': {
                'url': !0x0,
                'context': !0x0
            }
        },
        'ajaxSetup': function(_0x3accb0, _0x194b8d) {
            return _0x194b8d ? _0x381302(_0x381302(_0x3accb0, _0x263ab8['ajaxSettings']), _0x194b8d) : _0x381302(_0x263ab8['ajaxSettings'], _0x3accb0);
        },
        'ajaxPrefilter': _0x53f24e(_0x2fc01b),
        'ajaxTransport': _0x53f24e(_0x2066a6),
        'ajax': function(_0x255ad2, _0x16d76c) {
            function _0x19962a(_0x4b4d88, _0x1ac7c4, _0x312e04, _0x145265) {
                var _0x7acc19, _0x57f05a, _0x3517d5, _0x2dde59, _0x4d9e7c = _0x1ac7c4;
                if (!_0xab3345) {
                    _0xab3345 = !0x0;
                    _0x3a3a63 && _0x51f4a4['clearTimeout'](_0x3a3a63);
                    _0x3c36b0 = void 0x0;
                    _0x17d029 = _0x145265 || '';
                    _0x5f1ed7['readyState'] = 0x0 < _0x4b4d88 ? 0x4 : 0x0;
                    _0x145265 = 0xc8 <= _0x4b4d88 && 0x12c > _0x4b4d88 || 0x130 === _0x4b4d88;
                    if (_0x312e04) {
                        _0x3517d5 = _0x2233a2;
                        for (var _0x5b071a = _0x5f1ed7, _0x42a973, _0x292b3c, _0xf6b0d7, _0x369650, _0x22abbb = _0x3517d5['contents'], _0xecca5d = _0x3517d5['dataTypes'];
                            '*' === _0xecca5d[0x0];) _0xecca5d['shift'](), void 0x0 === _0x42a973 && (_0x42a973 = _0x3517d5['mimeType'] || _0x5b071a['getResponseHeader']('Content-Type'));
                        if (_0x42a973)
                            for (_0x292b3c in _0x22abbb)
                                if (_0x22abbb[_0x292b3c] && _0x22abbb[_0x292b3c]['test'](_0x42a973)) {
                                    _0xecca5d['unshift'](_0x292b3c);
                                    break;
                                } if (_0xecca5d[0x0] in _0x312e04) _0xf6b0d7 = _0xecca5d[0x0];
                        else {
                            for (_0x292b3c in _0x312e04) {
                                if (!_0xecca5d[0x0] || _0x3517d5['converters'][_0x292b3c + '\x20' + _0xecca5d[0x0]]) {
                                    _0xf6b0d7 = _0x292b3c;
                                    break;
                                }
                                _0x369650 || (_0x369650 = _0x292b3c);
                            }
                            _0xf6b0d7 = _0xf6b0d7 || _0x369650;
                        }
                        _0x3517d5 = _0x312e04 = _0xf6b0d7 ? (_0xf6b0d7 !== _0xecca5d[0x0] && _0xecca5d['unshift'](_0xf6b0d7), _0x312e04[_0xf6b0d7]) : void 0x0;
                    }
                    var _0x558f6c;
                    _0xc30976: {
                        _0x312e04 = _0x2233a2;_0x42a973 = _0x3517d5;_0x292b3c = _0x5f1ed7;_0xf6b0d7 = _0x145265;
                        var _0x16bb45, _0x48b45e, _0x2f92bc;_0x3517d5 = {};_0x5b071a = _0x312e04['dataTypes']['slice']();
                        if (_0x5b071a[0x1])
                            for (_0x16bb45 in _0x312e04['converters']) _0x3517d5[_0x16bb45['toLowerCase']()] = _0x312e04['converters'][_0x16bb45];
                        for (_0x369650 = _0x5b071a['shift'](); _0x369650;)
                            if (_0x312e04['responseFields'][_0x369650] && (_0x292b3c[_0x312e04['responseFields'][_0x369650]] = _0x42a973), !_0x2f92bc && _0xf6b0d7 && _0x312e04['dataFilter'] && (_0x42a973 = _0x312e04['dataFilter'](_0x42a973, _0x312e04['dataType'])), _0x2f92bc = _0x369650, _0x369650 = _0x5b071a['shift']())
                                if ('*' === _0x369650) _0x369650 = _0x2f92bc;
                                else if ('*' !== _0x2f92bc && _0x2f92bc !== _0x369650) {
                            if (_0x16bb45 = _0x3517d5[_0x2f92bc + '\x20' + _0x369650] || _0x3517d5['*\x20' + _0x369650], !_0x16bb45)
                                for (_0x558f6c in _0x3517d5)
                                    if (_0x48b45e = _0x558f6c['split']('\x20'), _0x48b45e[0x1] === _0x369650 && (_0x16bb45 = _0x3517d5[_0x2f92bc + '\x20' + _0x48b45e[0x0]] || _0x3517d5['*\x20' + _0x48b45e[0x0]])) {
                                        !0x0 === _0x16bb45 ? _0x16bb45 = _0x3517d5[_0x558f6c] : !0x0 !== _0x3517d5[_0x558f6c] && (_0x369650 = _0x48b45e[0x0], _0x5b071a['unshift'](_0x48b45e[0x1]));
                                        break;
                                    } if (!0x0 !== _0x16bb45)
                                if (_0x16bb45 && _0x312e04['throws']) _0x42a973 = _0x16bb45(_0x42a973);
                                else try {
                                    _0x42a973 = _0x16bb45(_0x42a973);
                                } catch (_0x3b28d1) {
                                    _0x558f6c = {
                                        'state': 'parsererror',
                                        'error': _0x16bb45 ? _0x3b28d1 : 'No\x20conversion\x20from\x20' + _0x2f92bc + '\x20to\x20' + _0x369650
                                    };
                                    break _0xc30976;
                                }
                        }
                        _0x558f6c = {
                            'state': 'success',
                            'data': _0x42a973
                        };
                    }
                    _0x3517d5 = _0x558f6c;
                    _0x145265 ? (_0x2233a2['ifModified'] && (_0x2dde59 = _0x5f1ed7['getResponseHeader']('Last-Modified'), _0x2dde59 && (_0x263ab8['lastModified'][_0x219814] = _0x2dde59), _0x2dde59 = _0x5f1ed7['getResponseHeader']('etag'), _0x2dde59 && (_0x263ab8['etag'][_0x219814] = _0x2dde59)), 0xcc === _0x4b4d88 || 'HEAD' === _0x2233a2['type'] ? _0x4d9e7c = 'nocontent' : 0x130 === _0x4b4d88 ? _0x4d9e7c = 'notmodified' : (_0x4d9e7c = _0x3517d5['state'], _0x7acc19 = _0x3517d5['data'], _0x57f05a = _0x3517d5['error'], _0x145265 = !_0x57f05a)) : (_0x57f05a = _0x4d9e7c, !_0x4b4d88 && _0x4d9e7c || (_0x4d9e7c = 'error', 0x0 > _0x4b4d88 && (_0x4b4d88 = 0x0)));
                    _0x5f1ed7['status'] = _0x4b4d88;
                    _0x5f1ed7['statusText'] = (_0x1ac7c4 || _0x4d9e7c) + '';
                    _0x145265 ? _0x548da7['resolveWith'](_0x4159eb, [_0x7acc19, _0x4d9e7c, _0x5f1ed7]) : _0x548da7['rejectWith'](_0x4159eb, [_0x5f1ed7, _0x4d9e7c, _0x57f05a]);
                    _0x5f1ed7['statusCode'](_0x1bf834);
                    _0x1bf834 = void 0x0;
                    _0x4edd7d && _0x5e37be['trigger'](_0x145265 ? 'ajaxSuccess' : 'ajaxError', [_0x5f1ed7, _0x2233a2, _0x145265 ? _0x7acc19 : _0x57f05a]);
                    _0x3bf995['fireWith'](_0x4159eb, [_0x5f1ed7, _0x4d9e7c]);
                    _0x4edd7d && (_0x5e37be['trigger']('ajaxComplete', [_0x5f1ed7, _0x2233a2]), --_0x263ab8['active'] || _0x263ab8['event']['trigger']('ajaxStop'));
                }
            }
            'object' == typeof _0x255ad2 && (_0x16d76c = _0x255ad2, _0x255ad2 = void 0x0);
            _0x16d76c = _0x16d76c || {};
            var _0x3c36b0, _0x219814, _0x17d029, _0x877dff, _0x3a3a63, _0x141b96, _0xab3345, _0x4edd7d, _0x578e52, _0x503030, _0x2233a2 = _0x263ab8['ajaxSetup']({}, _0x16d76c),
                _0x4159eb = _0x2233a2['context'] || _0x2233a2,
                _0x5e37be = _0x2233a2['context'] && (_0x4159eb['nodeType'] || _0x4159eb['jquery']) ? _0x263ab8(_0x4159eb) : _0x263ab8['event'],
                _0x548da7 = _0x263ab8['Deferred'](),
                _0x3bf995 = _0x263ab8['Callbacks']('once\x20memory'),
                _0x1bf834 = _0x2233a2['statusCode'] || {},
                _0x490f6f = {},
                _0x9708d8 = {},
                _0x10f8c9 = 'canceled',
                _0x5f1ed7 = {
                    'readyState': 0x0,
                    'getResponseHeader': function(_0x4d9d2f) {
                        var _0x2ea5a5;
                        if (_0xab3345) {
                            if (!_0x877dff)
                                for (_0x877dff = {}; _0x2ea5a5 = _0xf56fc1['exec'](_0x17d029);) _0x877dff[_0x2ea5a5[0x1]['toLowerCase']()] = _0x2ea5a5[0x2];
                            _0x2ea5a5 = _0x877dff[_0x4d9d2f['toLowerCase']()];
                        }
                        return null == _0x2ea5a5 ? null : _0x2ea5a5;
                    },
                    'getAllResponseHeaders': function() {
                        return _0xab3345 ? _0x17d029 : null;
                    },
                    'setRequestHeader': function(_0x42414f, _0xe755a4) {
                        return null == _0xab3345 && (_0x42414f = _0x9708d8[_0x42414f['toLowerCase']()] = _0x9708d8[_0x42414f['toLowerCase']()] || _0x42414f, _0x490f6f[_0x42414f] = _0xe755a4), this;
                    },
                    'overrideMimeType': function(_0x21216a) {
                        return null == _0xab3345 && (_0x2233a2['mimeType'] = _0x21216a), this;
                    },
                    'statusCode': function(_0x4efebb) {
                        var _0x1745db;
                        if (_0x4efebb)
                            if (_0xab3345) _0x5f1ed7['always'](_0x4efebb[_0x5f1ed7['status']]);
                            else
                                for (_0x1745db in _0x4efebb) _0x1bf834[_0x1745db] = [_0x1bf834[_0x1745db], _0x4efebb[_0x1745db]];
                        return this;
                    },
                    'abort': function(_0x266c22) {
                        _0x266c22 = _0x266c22 || _0x10f8c9;
                        return _0x3c36b0 && _0x3c36b0['abort'](_0x266c22), _0x19962a(0x0, _0x266c22), this;
                    }
                };
            if (_0x548da7['promise'](_0x5f1ed7), _0x2233a2['url'] = ((_0x255ad2 || _0x2233a2['url'] || _0x34d678['href']) + '')['replace'](_0x2e6833, _0x34d678['protocol'] + '//'), _0x2233a2['type'] = _0x16d76c['method'] || _0x16d76c['type'] || _0x2233a2['method'] || _0x2233a2['type'], _0x2233a2['dataTypes'] = (_0x2233a2['dataType'] || '*')['toLowerCase']()['match'](_0x5e732e) || [''], null == _0x2233a2['crossDomain']) {
                _0x141b96 = _0x1b3fe3['createElement']('a');
                try {
                    _0x141b96['href'] = _0x2233a2['url'], _0x141b96['href'] = _0x141b96['href'], _0x2233a2['crossDomain'] = _0x58f19d['protocol'] + '//' + _0x58f19d['host'] != _0x141b96['protocol'] + '//' + _0x141b96['host'];
                } catch (_0x3d6da7) {
                    _0x2233a2['crossDomain'] = !0x0;
                }
            }
            if (_0x2233a2['data'] && _0x2233a2['processData'] && 'string' != typeof _0x2233a2['data'] && (_0x2233a2['data'] = _0x263ab8['param'](_0x2233a2['data'], _0x2233a2['traditional'])), _0x46d20c(_0x2fc01b, _0x2233a2, _0x16d76c, _0x5f1ed7), _0xab3345) return _0x5f1ed7;
            (_0x4edd7d = _0x263ab8['event'] && _0x2233a2['global']) && 0x0 === _0x263ab8['active']++ && _0x263ab8['event']['trigger']('ajaxStart');
            _0x2233a2['type'] = _0x2233a2['type']['toUpperCase']();
            _0x2233a2['hasContent'] = !_0x48e4af['test'](_0x2233a2['type']);
            _0x219814 = _0x2233a2['url']['replace'](_0x44940b, '');
            _0x2233a2['hasContent'] ? _0x2233a2['data'] && _0x2233a2['processData'] && 0x0 === (_0x2233a2['contentType'] || '')['indexOf']('application/x-www-form-urlencoded') && (_0x2233a2['data'] = _0x2233a2['data']['replace'](_0x10e168, '+')) : (_0x503030 = _0x2233a2['url']['slice'](_0x219814['length']), _0x2233a2['data'] && (_0x219814 += (_0x50ebd4['test'](_0x219814) ? '&' : '?') + _0x2233a2['data'], delete _0x2233a2['data']), !0x1 === _0x2233a2['cache'] && (_0x219814 = _0x219814['replace'](_0x42660a, '$1'), _0x503030 = (_0x50ebd4['test'](_0x219814) ? '&' : '?') + '_=' + _0x1899c9++ + _0x503030), _0x2233a2['url'] = _0x219814 + _0x503030);
            _0x2233a2['ifModified'] && (_0x263ab8['lastModified'][_0x219814] && _0x5f1ed7['setRequestHeader']('If-Modified-Since', _0x263ab8['lastModified'][_0x219814]), _0x263ab8['etag'][_0x219814] && _0x5f1ed7['setRequestHeader']('If-None-Match', _0x263ab8['etag'][_0x219814]));
            (_0x2233a2['data'] && _0x2233a2['hasContent'] && !0x1 !== _0x2233a2['contentType'] || _0x16d76c['contentType']) && _0x5f1ed7['setRequestHeader']('Content-Type', _0x2233a2['contentType']);
            _0x5f1ed7['setRequestHeader']('Accept', _0x2233a2['dataTypes'][0x0] && _0x2233a2['accepts'][_0x2233a2['dataTypes'][0x0]] ? _0x2233a2['accepts'][_0x2233a2['dataTypes'][0x0]] + ('*' !== _0x2233a2['dataTypes'][0x0] ? ',\x20' + _0xd4d068 + ';\x20q=0.01' : '') : _0x2233a2['accepts']['*']);
            for (_0x578e52 in _0x2233a2['headers']) _0x5f1ed7['setRequestHeader'](_0x578e52, _0x2233a2['headers'][_0x578e52]);
            if (_0x2233a2['beforeSend'] && (!0x1 === _0x2233a2['beforeSend']['call'](_0x4159eb, _0x5f1ed7, _0x2233a2) || _0xab3345)) return _0x5f1ed7['abort']();
            if (_0x10f8c9 = 'abort', _0x3bf995['add'](_0x2233a2['complete']), _0x5f1ed7['done'](_0x2233a2['success']), _0x5f1ed7['fail'](_0x2233a2['error']), _0x3c36b0 = _0x46d20c(_0x2066a6, _0x2233a2, _0x16d76c, _0x5f1ed7)) {
                if (_0x5f1ed7['readyState'] = 0x1, _0x4edd7d && _0x5e37be['trigger']('ajaxSend', [_0x5f1ed7, _0x2233a2]), _0xab3345) return _0x5f1ed7;
                _0x2233a2['async'] && 0x0 < _0x2233a2['timeout'] && (_0x3a3a63 = _0x51f4a4['setTimeout'](function() {
                    _0x5f1ed7['abort']('timeout');
                }, _0x2233a2['timeout']));
                try {
                    _0xab3345 = !0x1, _0x3c36b0['send'](_0x490f6f, _0x19962a);
                } catch (_0x146757) {
                    if (_0xab3345) throw _0x146757;
                    _0x19962a(-0x1, _0x146757);
                }
            } else _0x19962a(-0x1, 'No\x20Transport');
            return _0x5f1ed7;
        },
        'getJSON': function(_0x4c6261, _0x1d9c53, _0x1f5f9e) {
            return _0x263ab8['get'](_0x4c6261, _0x1d9c53, _0x1f5f9e, 'json');
        },
        'getScript': function(_0x68ae41, _0x2c8920) {
            return _0x263ab8['get'](_0x68ae41, void 0x0, _0x2c8920, 'script');
        }
    });
    _0x263ab8['each'](['get', 'post'], function(_0x1e6495, _0x131149) {
        _0x263ab8[_0x131149] = function(_0x5779c0, _0x3b8b25, _0x448d8f, _0x248ef1) {
            return _0x263ab8['isFunction'](_0x3b8b25) && (_0x248ef1 = _0x248ef1 || _0x448d8f, _0x448d8f = _0x3b8b25, _0x3b8b25 = void 0x0), _0x263ab8['ajax'](_0x263ab8['extend']({
                'url': _0x5779c0,
                'type': _0x131149,
                'dataType': _0x248ef1,
                'data': _0x3b8b25,
                'success': _0x448d8f
            }, _0x263ab8['isPlainObject'](_0x5779c0) && _0x5779c0));
        };
    });
    _0x263ab8['_evalUrl'] = function(_0x5cb3c6) {
        return _0x263ab8['ajax']({
            'url': _0x5cb3c6,
            'type': 'GET',
            'dataType': 'script',
            'cache': !0x0,
            'async': !0x1,
            'global': !0x1,
            'throws': !0x0
        });
    };
    _0x263ab8['fn']['extend']({
        'wrapAll': function(_0x3b2203) {
            var _0x41ae1e;
            return this[0x0] && (_0x263ab8['isFunction'](_0x3b2203) && (_0x3b2203 = _0x3b2203['call'](this[0x0])), _0x41ae1e = _0x263ab8(_0x3b2203, this[0x0]['ownerDocument'])['eq'](0x0)['clone'](!0x0), this[0x0]['parentNode'] && _0x41ae1e['insertBefore'](this[0x0]), _0x41ae1e['map'](function() {
                for (var _0x5f0620 = this; _0x5f0620['firstElementChild'];) _0x5f0620 = _0x5f0620['firstElementChild'];
                return _0x5f0620;
            })['append'](this)), this;
        },
        'wrapInner': function(_0xf9872b) {
            return _0x263ab8['isFunction'](_0xf9872b) ? this['each'](function(_0x13d003) {
                _0x263ab8(this)['wrapInner'](_0xf9872b['call'](this, _0x13d003));
            }) : this['each'](function() {
                var _0x2e3c44 = _0x263ab8(this),
                    _0x2f300f = _0x2e3c44['contents']();
                _0x2f300f['length'] ? _0x2f300f['wrapAll'](_0xf9872b) : _0x2e3c44['append'](_0xf9872b);
            });
        },
        'wrap': function(_0x1626ea) {
            var _0x38acad = _0x263ab8['isFunction'](_0x1626ea);
            return this['each'](function(_0x40ba2e) {
                _0x263ab8(this)['wrapAll'](_0x38acad ? _0x1626ea['call'](this, _0x40ba2e) : _0x1626ea);
            });
        },
        'unwrap': function(_0x24e18c) {
            return this['parent'](_0x24e18c)['not']('body')['each'](function() {
                _0x263ab8(this)['replaceWith'](this['childNodes']);
            }), this;
        }
    });
    _0x263ab8['expr']['pseudos']['hidden'] = function(_0x638456) {
        return !_0x263ab8['expr']['pseudos']['visible'](_0x638456);
    };
    _0x263ab8['expr']['pseudos']['visible'] = function(_0x4c386a) {
        return !(!_0x4c386a['offsetWidth'] && !_0x4c386a['offsetHeight'] && !_0x4c386a['getClientRects']()['length']);
    };
    _0x263ab8['ajaxSettings']['xhr'] = function() {
        try {
            return new _0x51f4a4['XMLHttpRequest']();
        } catch (_0x4b8b36) {}
    };
    var _0x4b5bdf = {
            '0': 0xc8,
            1223: 0xcc
        },
        _0x4da86d = _0x263ab8['ajaxSettings']['xhr']();
    _0x187c89['cors'] = !!_0x4da86d && 'withCredentials' in _0x4da86d;
    _0x187c89['ajax'] = _0x4da86d = !!_0x4da86d;
    _0x263ab8['ajaxTransport'](function(_0x2bbd9e) {
        var _0x2c0e9d, _0x59f53a;
        if (_0x187c89['cors'] || _0x4da86d && !_0x2bbd9e['crossDomain']) return {
            'send': function(_0x2ed8b2, _0x1eb59a) {
                var _0x6339f4, _0x256dec = _0x2bbd9e['xhr']();
                if (_0x256dec['open'](_0x2bbd9e['type'], _0x2bbd9e['url'], _0x2bbd9e['async'], _0x2bbd9e['username'], _0x2bbd9e['password']), _0x2bbd9e['xhrFields'])
                    for (_0x6339f4 in _0x2bbd9e['xhrFields']) _0x256dec[_0x6339f4] = _0x2bbd9e['xhrFields'][_0x6339f4];
                _0x2bbd9e['mimeType'] && _0x256dec['overrideMimeType'] && _0x256dec['overrideMimeType'](_0x2bbd9e['mimeType']);
                _0x2bbd9e['crossDomain'] || _0x2ed8b2['X-Requested-With'] || (_0x2ed8b2['X-Requested-With'] = 'XMLHttpRequest');
                for (_0x6339f4 in _0x2ed8b2) _0x256dec['setRequestHeader'](_0x6339f4, _0x2ed8b2[_0x6339f4]);
                _0x2c0e9d = function(_0x10ff1a) {
                    return function() {
                        _0x2c0e9d && (_0x2c0e9d = _0x59f53a = _0x256dec['onload'] = _0x256dec['onerror'] = _0x256dec['onabort'] = _0x256dec['onreadystatechange'] = null, 'abort' === _0x10ff1a ? _0x256dec['abort']() : 'error' === _0x10ff1a ? 'number' != typeof _0x256dec['status'] ? _0x1eb59a(0x0, 'error') : _0x1eb59a(_0x256dec['status'], _0x256dec['statusText']) : _0x1eb59a(_0x4b5bdf[_0x256dec['status']] || _0x256dec['status'], _0x256dec['statusText'], 'text' !== (_0x256dec['responseType'] || 'text') || 'string' != typeof _0x256dec['responseText'] ? {
                            'binary': _0x256dec['response']
                        } : {
                            'text': _0x256dec['responseText']
                        }, _0x256dec['getAllResponseHeaders']()));
                    };
                };
                _0x256dec['onload'] = _0x2c0e9d();
                _0x59f53a = _0x256dec['onerror'] = _0x2c0e9d('error');
                void 0x0 !== _0x256dec['onabort'] ? _0x256dec['onabort'] = _0x59f53a : _0x256dec['onreadystatechange'] = function() {
                    0x4 === _0x256dec['readyState'] && _0x51f4a4['setTimeout'](function() {
                        _0x2c0e9d && _0x59f53a();
                    });
                };
                _0x2c0e9d = _0x2c0e9d('abort');
                try {
                    _0x256dec['send'](_0x2bbd9e['hasContent'] && _0x2bbd9e['data'] || null);
                } catch (_0x4345f8) {
                    if (_0x2c0e9d) throw _0x4345f8;
                }
            },
            'abort': function() {
                _0x2c0e9d && _0x2c0e9d();
            }
        };
    });
    _0x263ab8['ajaxPrefilter'](function(_0x2a7d13) {
        _0x2a7d13['crossDomain'] && (_0x2a7d13['contents']['script'] = !0x1);
    });
    _0x263ab8['ajaxSetup']({
        'accepts': {
            'script': 'text/javascript,\x20application/javascript,\x20application/ecmascript,\x20application/x-ecmascript'
        },
        'contents': {
            'script': /\b(?:java|ecma)script\b/
        },
        'converters': {
            'text\x20script': function(_0x14e9ca) {
                return _0x263ab8['globalEval'](_0x14e9ca), _0x14e9ca;
            }
        }
    });
    _0x263ab8['ajaxPrefilter']('script', function(_0x15a7b9) {
        void 0x0 === _0x15a7b9['cache'] && (_0x15a7b9['cache'] = !0x1);
        _0x15a7b9['crossDomain'] && (_0x15a7b9['type'] = 'GET');
    });
    _0x263ab8['ajaxTransport']('script', function(_0x13fa50) {
        if (_0x13fa50['crossDomain']) {
            var _0x9b070a, _0x28a3c8;
            return {
                'send': function(_0x42e530, _0x1594cc) {
                    _0x9b070a = _0x263ab8('<script>')['prop']({
                        'charset': _0x13fa50['scriptCharset'],
                        'src': _0x13fa50['url']
                    })['on']('load\x20error', _0x28a3c8 = function(_0x2a9966) {
                        _0x9b070a['remove']();
                        _0x28a3c8 = null;
                        _0x2a9966 && _0x1594cc('error' === _0x2a9966['type'] ? 0x194 : 0xc8, _0x2a9966['type']);
                    });
                    _0x1b3fe3['head']['appendChild'](_0x9b070a[0x0]);
                },
                'abort': function() {
                    _0x28a3c8 && _0x28a3c8();
                }
            };
        }
    });
    var _0x386c8e = [],
        _0x2ff764 = /(=)\?(?=&|$)|\?\?/;
    _0x263ab8['ajaxSetup']({
        'jsonp': 'callback',
        'jsonpCallback': function() {
            var _0x282502 = _0x386c8e['pop']() || _0x263ab8['expando'] + '_' + _0x1899c9++;
            return this[_0x282502] = !0x0, _0x282502;
        }
    });
    _0x263ab8['ajaxPrefilter']('json\x20jsonp', function(_0x3fd281, _0x31d1f8, _0x3080f4) {
        var _0x339a3d, _0x83d3af, _0x137862, _0x80880c = !0x1 !== _0x3fd281['jsonp'] && (_0x2ff764['test'](_0x3fd281['url']) ? 'url' : 'string' == typeof _0x3fd281['data'] && 0x0 === (_0x3fd281['contentType'] || '')['indexOf']('application/x-www-form-urlencoded') && _0x2ff764['test'](_0x3fd281['data']) && 'data');
        if (_0x80880c || 'jsonp' === _0x3fd281['dataTypes'][0x0]) return _0x339a3d = _0x3fd281['jsonpCallback'] = _0x263ab8['isFunction'](_0x3fd281['jsonpCallback']) ? _0x3fd281['jsonpCallback']() : _0x3fd281['jsonpCallback'], _0x80880c ? _0x3fd281[_0x80880c] = _0x3fd281[_0x80880c]['replace'](_0x2ff764, '$1' + _0x339a3d) : !0x1 !== _0x3fd281['jsonp'] && (_0x3fd281['url'] += (_0x50ebd4['test'](_0x3fd281['url']) ? '&' : '?') + _0x3fd281['jsonp'] + '=' + _0x339a3d), _0x3fd281['converters']['script\x20json'] = function() {
            return _0x137862 || _0x263ab8['error'](_0x339a3d + '\x20was\x20not\x20called'), _0x137862[0x0];
        }, _0x3fd281['dataTypes'][0x0] = 'json', _0x83d3af = _0x51f4a4[_0x339a3d], _0x51f4a4[_0x339a3d] = function() {
            _0x137862 = arguments;
        }, _0x3080f4['always'](function() {
            void 0x0 === _0x83d3af ? _0x263ab8(_0x51f4a4)['removeProp'](_0x339a3d) : _0x51f4a4[_0x339a3d] = _0x83d3af;
            _0x3fd281[_0x339a3d] && (_0x3fd281['jsonpCallback'] = _0x31d1f8['jsonpCallback'], _0x386c8e['push'](_0x339a3d));
            _0x137862 && _0x263ab8['isFunction'](_0x83d3af) && _0x83d3af(_0x137862[0x0]);
            _0x137862 = _0x83d3af = void 0x0;
        }), 'script';
    });
    var _0x502ec2 = _0x187c89,
        _0x3cb2a8, _0x1f5dbe = _0x1b3fe3['implementation']['createHTMLDocument']('')['body'];
    _0x3cb2a8 = (_0x1f5dbe['innerHTML'] = '<form></form><form></form>', 0x2 === _0x1f5dbe['childNodes']['length']);
    _0x502ec2['createHTMLDocument'] = _0x3cb2a8;
    _0x263ab8['parseHTML'] = function(_0x55d153, _0x456650, _0x5ec3a6) {
        if ('string' != typeof _0x55d153) return [];
        'boolean' == typeof _0x456650 && (_0x5ec3a6 = _0x456650, _0x456650 = !0x1);
        var _0x80f90c, _0x5e0c94, _0x20e9ea;
        return _0x456650 || (_0x187c89['createHTMLDocument'] ? (_0x456650 = _0x1b3fe3['implementation']['createHTMLDocument'](''), _0x80f90c = _0x456650['createElement']('base'), _0x80f90c['href'] = _0x1b3fe3['location']['href'], _0x456650['head']['appendChild'](_0x80f90c)) : _0x456650 = _0x1b3fe3), _0x5e0c94 = _0x4d5383['exec'](_0x55d153), _0x20e9ea = !_0x5ec3a6 && [], _0x5e0c94 ? [_0x456650['createElement'](_0x5e0c94[0x1])] : (_0x5e0c94 = _0x5e4e05([_0x55d153], _0x456650, _0x20e9ea), _0x20e9ea && _0x20e9ea['length'] && _0x263ab8(_0x20e9ea)['remove'](), _0x263ab8['merge']([], _0x5e0c94['childNodes']));
    };
    _0x263ab8['fn']['load'] = function(_0x11e22a, _0x3c140f, _0x5edbd3) {
        var _0x52fdb4, _0x185275, _0x5aec2d, _0x56920d = this,
            _0x3ed4b8 = _0x11e22a['indexOf']('\x20');
        return -0x1 < _0x3ed4b8 && (_0x52fdb4 = _0x5a3029(_0x11e22a['slice'](_0x3ed4b8)), _0x11e22a = _0x11e22a['slice'](0x0, _0x3ed4b8)), _0x263ab8['isFunction'](_0x3c140f) ? (_0x5edbd3 = _0x3c140f, _0x3c140f = void 0x0) : _0x3c140f && 'object' == typeof _0x3c140f && (_0x185275 = 'POST'), 0x0 < _0x56920d['length'] && _0x263ab8['ajax']({
            'url': _0x11e22a,
            'type': _0x185275 || 'GET',
            'dataType': 'html',
            'data': _0x3c140f
        })['done'](function(_0x162ba7) {
            _0x5aec2d = arguments;
            _0x56920d['html'](_0x52fdb4 ? _0x263ab8('<div>')['append'](_0x263ab8['parseHTML'](_0x162ba7))['find'](_0x52fdb4) : _0x162ba7);
        })['always'](_0x5edbd3 && function(_0x1038f1, _0x2f6363) {
            _0x56920d['each'](function() {
                _0x5edbd3['apply'](this, _0x5aec2d || [_0x1038f1['responseText'], _0x2f6363, _0x1038f1]);
            });
        }), this;
    };
    _0x263ab8['each']('ajaxStart\x20ajaxStop\x20ajaxComplete\x20ajaxError\x20ajaxSuccess\x20ajaxSend' ['split']('\x20'), function(_0x29c2a5, _0x5d810b) {
        _0x263ab8['fn'][_0x5d810b] = function(_0x135bf1) {
            return this['on'](_0x5d810b, _0x135bf1);
        };
    });
    _0x263ab8['expr']['pseudos']['animated'] = function(_0x3a29e8) {
        return _0x263ab8['grep'](_0x263ab8['timers'], function(_0x9f17f3) {
            return _0x3a29e8 === _0x9f17f3['elem'];
        })['length'];
    };
    _0x263ab8['offset'] = {
        'setOffset': function(_0x255d29, _0x5c0f22, _0xabb744) {
            var _0x13b7dd, _0x11bd1d, _0xc46040, _0x3b1671, _0x30d6ba, _0x4ae8d8, _0xce5ce = _0x263ab8['css'](_0x255d29, 'position'),
                _0x1e575c = _0x263ab8(_0x255d29),
                _0x383e02 = {};
            'static' === _0xce5ce && (_0x255d29['style']['position'] = 'relative');
            _0x30d6ba = _0x1e575c['offset']();
            _0xc46040 = _0x263ab8['css'](_0x255d29, 'top');
            _0x4ae8d8 = _0x263ab8['css'](_0x255d29, 'left');
            ('absolute' === _0xce5ce || 'fixed' === _0xce5ce) && -0x1 < (_0xc46040 + _0x4ae8d8)['indexOf']('auto') ? (_0x13b7dd = _0x1e575c['position'](), _0x3b1671 = _0x13b7dd['top'], _0x11bd1d = _0x13b7dd['left']) : (_0x3b1671 = parseFloat(_0xc46040) || 0x0, _0x11bd1d = parseFloat(_0x4ae8d8) || 0x0);
            _0x263ab8['isFunction'](_0x5c0f22) && (_0x5c0f22 = _0x5c0f22['call'](_0x255d29, _0xabb744, _0x263ab8['extend']({}, _0x30d6ba)));
            null != _0x5c0f22['top'] && (_0x383e02['top'] = _0x5c0f22['top'] - _0x30d6ba['top'] + _0x3b1671);
            null != _0x5c0f22['left'] && (_0x383e02['left'] = _0x5c0f22['left'] - _0x30d6ba['left'] + _0x11bd1d);
            'using' in _0x5c0f22 ? _0x5c0f22['using']['call'](_0x255d29, _0x383e02) : _0x1e575c['css'](_0x383e02);
        }
    };
    _0x263ab8['fn']['extend']({
        'offset': function(_0x3d6664) {
            if (arguments['length']) return void 0x0 === _0x3d6664 ? this : this['each'](function(_0x2f12fd) {
                _0x263ab8['offset']['setOffset'](this, _0x3d6664, _0x2f12fd);
            });
            var _0x4f9b74, _0x495f9a, _0x562e9e, _0x334f15, _0xf9935d = this[0x0];
            if (_0xf9935d) return _0xf9935d['getClientRects']()['length'] ? (_0x562e9e = _0xf9935d['getBoundingClientRect'](), _0x4f9b74 = _0xf9935d['ownerDocument'], _0x495f9a = _0x4f9b74['documentElement'], _0x334f15 = _0x4f9b74['defaultView'], {
                'top': _0x562e9e['top'] + _0x334f15['pageYOffset'] - _0x495f9a['clientTop'],
                'left': _0x562e9e['left'] + _0x334f15['pageXOffset'] - _0x495f9a['clientLeft']
            }) : {
                'top': 0x0,
                'left': 0x0
            };
        },
        'position': function() {
            if (this[0x0]) {
                var _0x2386bb, _0x5ad232, _0x34fe36 = this[0x0],
                    _0x552970 = {
                        'top': 0x0,
                        'left': 0x0
                    };
                return 'fixed' === _0x263ab8['css'](_0x34fe36, 'position') ? _0x5ad232 = _0x34fe36['getBoundingClientRect']() : (_0x2386bb = this['offsetParent'](), _0x5ad232 = this['offset'](), _0x3b9113(_0x2386bb[0x0], 'html') || (_0x552970 = _0x2386bb['offset']()), _0x552970 = {
                    'top': _0x552970['top'] + _0x263ab8['css'](_0x2386bb[0x0], 'borderTopWidth', !0x0),
                    'left': _0x552970['left'] + _0x263ab8['css'](_0x2386bb[0x0], 'borderLeftWidth', !0x0)
                }), {
                    'top': _0x5ad232['top'] - _0x552970['top'] - _0x263ab8['css'](_0x34fe36, 'marginTop', !0x0),
                    'left': _0x5ad232['left'] - _0x552970['left'] - _0x263ab8['css'](_0x34fe36, 'marginLeft', !0x0)
                };
            }
        },
        'offsetParent': function() {
            return this['map'](function() {
                for (var _0x451a33 = this['offsetParent']; _0x451a33 && 'static' === _0x263ab8['css'](_0x451a33, 'position');) _0x451a33 = _0x451a33['offsetParent'];
                return _0x451a33 || _0x40cae5;
            });
        }
    });
    _0x263ab8['each']({
        'scrollLeft': 'pageXOffset',
        'scrollTop': 'pageYOffset'
    }, function(_0x1262a9, _0x30e8a1) {
        var _0x294d7e = 'pageYOffset' === _0x30e8a1;
        _0x263ab8['fn'][_0x1262a9] = function(_0x2fff93) {
            return _0x4c42c0(this, function(_0x1ba233, _0x332f02, _0x11dec4) {
                var _0x2cc0b8;
                return _0x263ab8['isWindow'](_0x1ba233) ? _0x2cc0b8 = _0x1ba233 : 0x9 === _0x1ba233['nodeType'] && (_0x2cc0b8 = _0x1ba233['defaultView']), void 0x0 === _0x11dec4 ? _0x2cc0b8 ? _0x2cc0b8[_0x30e8a1] : _0x1ba233[_0x332f02] : void(_0x2cc0b8 ? _0x2cc0b8['scrollTo'](_0x294d7e ? _0x2cc0b8['pageXOffset'] : _0x11dec4, _0x294d7e ? _0x11dec4 : _0x2cc0b8['pageYOffset']) : _0x1ba233[_0x332f02] = _0x11dec4);
            }, _0x1262a9, _0x2fff93, arguments['length']);
        };
    });
    _0x263ab8['each'](['top', 'left'], function(_0x2e3a0e, _0x1558c5) {
        _0x263ab8['cssHooks'][_0x1558c5] = _0x1e461f(_0x187c89['pixelPosition'], function(_0x5f2eaa, _0x48ba68) {
            if (_0x48ba68) return _0x48ba68 = _0x17c0fc(_0x5f2eaa, _0x1558c5), _0x1ada50['test'](_0x48ba68) ? _0x263ab8(_0x5f2eaa)['position']()[_0x1558c5] + 'px' : _0x48ba68;
        });
    });
    _0x263ab8['each']({
        'Height': 'height',
        'Width': 'width'
    }, function(_0x230382, _0x1e9333) {
        _0x263ab8['each']({
            'padding': 'inner' + _0x230382,
            'content': _0x1e9333,
            '': 'outer' + _0x230382
        }, function(_0x4592fe, _0x58f347) {
            _0x263ab8['fn'][_0x58f347] = function(_0x1f2df3, _0x1d1773) {
                var _0x3bd254 = arguments['length'] && (_0x4592fe || 'boolean' != typeof _0x1f2df3),
                    _0x5600c4 = _0x4592fe || (!0x0 === _0x1f2df3 || !0x0 === _0x1d1773 ? 'margin' : 'border');
                return _0x4c42c0(this, function(_0x2f7240, _0x1f6dce, _0x28e06e) {
                    var _0x473fbb;
                    return _0x263ab8['isWindow'](_0x2f7240) ? 0x0 === _0x58f347['indexOf']('outer') ? _0x2f7240['inner' + _0x230382] : _0x2f7240['document']['documentElement']['client' + _0x230382] : 0x9 === _0x2f7240['nodeType'] ? (_0x473fbb = _0x2f7240['documentElement'], Math['max'](_0x2f7240['body']['scroll' + _0x230382], _0x473fbb['scroll' + _0x230382], _0x2f7240['body']['offset' + _0x230382], _0x473fbb['offset' + _0x230382], _0x473fbb['client' + _0x230382])) : void 0x0 === _0x28e06e ? _0x263ab8['css'](_0x2f7240, _0x1f6dce, _0x5600c4) : _0x263ab8['style'](_0x2f7240, _0x1f6dce, _0x28e06e, _0x5600c4);
                }, _0x1e9333, _0x3bd254 ? _0x1f2df3 : void 0x0, _0x3bd254);
            };
        });
    });
    _0x263ab8['fn']['extend']({
        'bind': function(_0x20a2d1, _0x470856, _0x2477e1) {
            return this['on'](_0x20a2d1, null, _0x470856, _0x2477e1);
        },
        'unbind': function(_0x3fc1a0, _0x403fbe) {
            return this['off'](_0x3fc1a0, null, _0x403fbe);
        },
        'delegate': function(_0xfa921, _0x25f8c3, _0x52e371, _0x33a291) {
            return this['on'](_0x25f8c3, _0xfa921, _0x52e371, _0x33a291);
        },
        'undelegate': function(_0x5e2372, _0x33020d, _0x5700fd) {
            return 0x1 === arguments['length'] ? this['off'](_0x5e2372, '**') : this['off'](_0x33020d, _0x5e2372 || '**', _0x5700fd);
        }
    });
    _0x263ab8['holdReady'] = function(_0x54f7c2) {
        _0x54f7c2 ? _0x263ab8['readyWait']++ : _0x263ab8['ready'](!0x0);
    };
    _0x263ab8['isArray'] = Array['isArray'];
    _0x263ab8['parseJSON'] = JSON['parse'];
    _0x263ab8['nodeName'] = _0x3b9113;
    'function' == typeof define && define['amd'] && define('jquery', [], function() {
        return _0x263ab8;
    });
    var _0x143070 = _0x51f4a4['jQuery'],
        _0x572ee1 = _0x51f4a4['$'];
    return _0x263ab8['noConflict'] = function(_0x3c8e7e) {
        return _0x51f4a4['$'] === _0x263ab8 && (_0x51f4a4['$'] = _0x572ee1), _0x3c8e7e && _0x51f4a4['jQuery'] === _0x263ab8 && (_0x51f4a4['jQuery'] = _0x143070), _0x263ab8;
    }, _0xa4c748 || (_0x51f4a4['jQuery'] = _0x51f4a4['$'] = _0x263ab8), _0x263ab8;
});

function getInternetExplorerVersion() {
    var _0x5c60ca = -0x1;
    'Microsoft\x20Internet\x20Explorer' == navigator['appName'] && null != /MSIE ([0-9]{1,}[.0-9]{0,})/ ['exec'](navigator['userAgent']) && (_0x5c60ca = parseFloat(RegExp['$1']));
    return _0x5c60ca;
}
var ie = getInternetExplorerVersion();

function getQueryVariable(_0x10b536) {
    for (var _0x280ff7 = window['location']['search']['substring'](0x1)['split']('&'), _0x19262e = 0x0; _0x19262e < _0x280ff7['length']; _0x19262e++) {
        var _0x490872 = _0x280ff7[_0x19262e]['split']('=');
        if (decodeURIComponent(_0x490872[0x0]) == _0x10b536) return decodeURIComponent(_0x490872[0x1]);
    }
}
this['jukebox'] = {};
jukebox['Player'] = function(_0x29ea4c, _0x34f250) {
    this['id'] = ++jukebox['__jukeboxId'];
    this['origin'] = _0x34f250 || null;
    this['settings'] = {};
    for (var _0x2753f6 in this['defaults']) this['settings'][_0x2753f6] = this['defaults'][_0x2753f6];
    if ('[object\x20Object]' === Object['prototype']['toString']['call'](_0x29ea4c))
        for (var _0x1484e6 in _0x29ea4c) this['settings'][_0x1484e6] = _0x29ea4c[_0x1484e6];
    '[object\x20Function]' === Object['prototype']['toString']['call'](jukebox['Manager']) && (jukebox['Manager'] = new jukebox['Manager']());
    this['resource'] = this['isPlaying'] = null;
    this['resource'] = '[object\x20Object]' === Object['prototype']['toString']['call'](jukebox['Manager']) ? jukebox['Manager']['getPlayableResource'](this['settings']['resources']) : this['settings']['resources'][0x0] || null;
    if (null === this['resource']) throw 'Your\x20browser\x20can\x27t\x20playback\x20the\x20given\x20resources\x20-\x20or\x20you\x20have\x20missed\x20to\x20include\x20jukebox.Manager';
    this['__init']();
    return this;
};
jukebox['__jukeboxId'] = 0x0;
jukebox['Player']['prototype'] = {
    'defaults': {
        'resources': [],
        'autoplay': !0x1,
        'spritemap': {},
        'flashMediaElement': './swf/FlashMediaElement.swf',
        'timeout': 0x3e8
    },
    '__addToManager': function() {
        !0x0 !== this['__wasAddedToManager'] && (jukebox['Manager']['add'](this), this['__wasAddedToManager'] = !0x0);
    },
    '__init': function() {
        var _0x572623 = this,
            _0x339d84 = this['settings'],
            _0x436ade = {},
            _0x4246f8;
        jukebox['Manager'] && void 0x0 !== jukebox['Manager']['features'] && (_0x436ade = jukebox['Manager']['features']);
        if (!0x0 === _0x436ade['html5audio']) {
            this['context'] = new Audio();
            this['context']['src'] = this['resource'];
            if (null === this['origin']) {
                var _0x741511 = function(_0x37ad0c) {
                    _0x572623['__addToManager'](_0x37ad0c);
                };
                this['context']['addEventListener']('canplaythrough', _0x741511, !0x0);
                window['setTimeout'](function() {
                    _0x572623['context']['removeEventListener']('canplaythrough', _0x741511, !0x0);
                    _0x741511('timeout');
                }, _0x339d84['timeout']);
            }
            this['context']['autobuffer'] = !0x0;
            this['context']['preload'] = !0x0;
            for (_0x4246f8 in this['HTML5API']) this[_0x4246f8] = this['HTML5API'][_0x4246f8];
            0x1 < _0x436ade['channels'] ? !0x0 === _0x339d84['autoplay'] ? this['context']['autoplay'] = !0x0 : void 0x0 !== _0x339d84['spritemap'][_0x339d84['autoplay']] && this['play'](_0x339d84['autoplay']) : 0x1 === _0x436ade['channels'] && void 0x0 !== _0x339d84['spritemap'][_0x339d84['autoplay']] && (this['backgroundMusic'] = _0x339d84['spritemap'][_0x339d84['autoplay']], this['backgroundMusic']['started'] = Date['now'] ? Date['now']() : +new Date(), this['play'](_0x339d84['autoplay']));
            0x1 == _0x436ade['channels'] && !0x0 !== _0x339d84['canPlayBackground'] && (window['addEventListener']('pagehide', function() {
                null !== _0x572623['isPlaying'] && (_0x572623['pause'](), _0x572623['__wasAutoPaused'] = !0x0);
            }), window['addEventListener']('pageshow', function() {
                _0x572623['__wasAutoPaused'] && (_0x572623['resume'](), delete _0x572623['_wasAutoPaused']);
            }));
        } else if (!0x0 === _0x436ade['flashaudio']) {
            for (_0x4246f8 in this['FLASHAPI']) this[_0x4246f8] = this['FLASHAPI'][_0x4246f8];
            _0x436ade = ['id=jukebox-flashstream-' + this['id'], 'autoplay=' + _0x339d84['autoplay'], 'file=' + window['encodeURIComponent'](this['resource'])];
            this['__initFlashContext'](_0x436ade);
            !0x0 === _0x339d84['autoplay'] ? this['play'](0x0) : _0x339d84['spritemap'][_0x339d84['autoplay']] && this['play'](_0x339d84['autoplay']);
        } else throw 'Your\x20Browser\x20does\x20not\x20support\x20Flash\x20Audio\x20or\x20HTML5\x20Audio.';
    },
    '__initFlashContext': function(_0x47f7cd) {
        var _0x53ab9e, _0x3b9728 = this['settings']['flashMediaElement'],
            _0x35826f, _0x4d9a23 = {
                'flashvars': _0x47f7cd['join']('&'),
                'quality': 'high',
                'bgcolor': '#000000',
                'wmode': 'transparent',
                'allowscriptaccess': 'always',
                'allowfullscreen': 'true'
            };
        if (navigator['userAgent']['match'](/MSIE/)) {
            _0x53ab9e = document['createElement']('div');
            document['getElementsByTagName']('body')[0x0]['appendChild'](_0x53ab9e);
            var _0xfe5a9b = document['createElement']('object');
            _0xfe5a9b['id'] = 'jukebox-flashstream-' + this['id'];
            _0xfe5a9b['setAttribute']('type', 'application/x-shockwave-flash');
            _0xfe5a9b['setAttribute']('classid', 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000');
            _0xfe5a9b['setAttribute']('width', '0');
            _0xfe5a9b['setAttribute']('height', '0');
            _0x4d9a23['movie'] = _0x3b9728 + '?x=' + (Date['now'] ? Date['now']() : +new Date());
            _0x4d9a23['flashvars'] = _0x47f7cd['join']('&amp;');
            for (_0x35826f in _0x4d9a23) _0x47f7cd = document['createElement']('param'), _0x47f7cd['setAttribute']('name', _0x35826f), _0x47f7cd['setAttribute']('value', _0x4d9a23[_0x35826f]), _0xfe5a9b['appendChild'](_0x47f7cd);
            _0x53ab9e['outerHTML'] = _0xfe5a9b['outerHTML'];
            this['context'] = document['getElementById']('jukebox-flashstream-' + this['id']);
        } else {
            _0x53ab9e = document['createElement']('embed');
            _0x53ab9e['id'] = 'jukebox-flashstream-' + this['id'];
            _0x53ab9e['setAttribute']('type', 'application/x-shockwave-flash');
            _0x53ab9e['setAttribute']('width', '100');
            _0x53ab9e['setAttribute']('height', '100');
            _0x4d9a23['play'] = !0x1;
            _0x4d9a23['loop'] = !0x1;
            _0x4d9a23['src'] = _0x3b9728 + '?x=' + (Date['now'] ? Date['now']() : +new Date());
            for (_0x35826f in _0x4d9a23) _0x53ab9e['setAttribute'](_0x35826f, _0x4d9a23[_0x35826f]);
            document['getElementsByTagName']('body')[0x0]['appendChild'](_0x53ab9e);
            this['context'] = _0x53ab9e;
        }
    },
    'backgroundHackForiOS': function() {
        if (void 0x0 !== this['backgroundMusic']) {
            var _0x143cb3 = Date['now'] ? Date['now']() : +new Date();
            void 0x0 === this['backgroundMusic']['started'] ? (this['backgroundMusic']['started'] = _0x143cb3, this['setCurrentTime'](this['backgroundMusic']['start'])) : (this['backgroundMusic']['lastPointer'] = (_0x143cb3 - this['backgroundMusic']['started']) / 0x3e8 % (this['backgroundMusic']['end'] - this['backgroundMusic']['start']) + this['backgroundMusic']['start'], this['play'](this['backgroundMusic']['lastPointer']));
        }
    },
    'play': function(_0x363d0b, _0x46fc2e) {
        if (null !== this['isPlaying'] && !0x0 !== _0x46fc2e) void 0x0 !== jukebox['Manager'] && jukebox['Manager']['addToQueue'](_0x363d0b, this['id']);
        else {
            var _0x515117 = this['settings']['spritemap'],
                _0x4ebf48;
            if (void 0x0 !== _0x515117[_0x363d0b]) _0x4ebf48 = _0x515117[_0x363d0b]['start'];
            else if ('number' === typeof _0x363d0b) {
                _0x4ebf48 = _0x363d0b;
                for (var _0x52e1e9 in _0x515117)
                    if (_0x4ebf48 >= _0x515117[_0x52e1e9]['start'] && _0x4ebf48 <= _0x515117[_0x52e1e9]['end']) {
                        _0x363d0b = _0x52e1e9;
                        break;
                    }
            }
            void 0x0 !== _0x4ebf48 && '[object\x20Object]' === Object['prototype']['toString']['call'](_0x515117[_0x363d0b]) && (this['isPlaying'] = this['settings']['spritemap'][_0x363d0b], this['context']['play'] && this['context']['play'](), this['wasReady'] = this['setCurrentTime'](_0x4ebf48));
        }
    },
    'stop': function() {
        this['__lastPosition'] = 0x0;
        this['isPlaying'] = null;
        this['backgroundMusic'] ? this['backgroundHackForiOS']() : this['context']['pause']();
        return !0x0;
    },
    'pause': function() {
        this['isPlaying'] = null;
        this['__lastPosition'] = this['getCurrentTime']();
        this['context']['pause']();
        return this['__lastPosition'];
    },
    'resume': function(_0x45acb5) {
        _0x45acb5 = 'number' === typeof _0x45acb5 ? _0x45acb5 : this['__lastPosition'];
        if (null !== _0x45acb5) return this['play'](_0x45acb5), this['__lastPosition'] = null, !0x0;
        this['context']['play']();
        return !0x1;
    },
    'HTML5API': {
        'getVolume': function() {
            return this['context']['volume'] || 0x1;
        },
        'setVolume': function(_0x524f21) {
            this['context']['volume'] = _0x524f21;
            return 0.0001 > Math['abs'](this['context']['volume'] - _0x524f21) ? !0x0 : !0x1;
        },
        'getCurrentTime': function() {
            return this['context']['currentTime'] || 0x0;
        },
        'setCurrentTime': function(_0x245906) {
            try {
                return this['context']['currentTime'] = _0x245906, !0x0;
            } catch (_0x419565) {
                return !0x1;
            }
        }
    },
    'FLASHAPI': {
        'getVolume': function() {
            return this['context'] && 'function' === typeof this['context']['getVolume'] ? this['context']['getVolume']() : 0x1;
        },
        'setVolume': function(_0x362f18) {
            return this['context'] && 'function' === typeof this['context']['setVolume'] ? (this['context']['setVolume'](_0x362f18), !0x0) : !0x1;
        },
        'getCurrentTime': function() {
            return this['context'] && 'function' === typeof this['context']['getCurrentTime'] ? this['context']['getCurrentTime']() : 0x0;
        },
        'setCurrentTime': function(_0x4f4bbf) {
            return this['context'] && 'function' === typeof this['context']['setCurrentTime'] ? this['context']['setCurrentTime'](_0x4f4bbf) : !0x1;
        }
    }
};
if (void 0x0 === this['jukebox']) throw 'jukebox.Manager\x20requires\x20jukebox.Player\x20(Player.js)\x20to\x20run\x20properly.';
jukebox['Manager'] = function(_0x520fd5) {
    this['features'] = {};
    this['codecs'] = {};
    this['__players'] = {};
    this['__playersLength'] = 0x0;
    this['__clones'] = {};
    this['__queue'] = [];
    this['settings'] = {};
    for (var _0x312afa in this['defaults']) this['settings'][_0x312afa] = this['defaults'][_0x312afa];
    if ('[object\x20Object]' === Object['prototype']['toString']['call'](_0x520fd5))
        for (var _0x514ad8 in _0x520fd5) this['settings'][_0x514ad8] = _0x520fd5[_0x514ad8];
    this['__detectFeatures']();
    jukebox['Manager']['__initialized'] = !0x1 === this['settings']['useGameLoop'] ? window['setInterval'](function() {
        jukebox['Manager']['loop']();
    }, 0x14) : !0x0;
};
jukebox['Manager']['prototype'] = {
    'defaults': {
        'useFlash': !0x1,
        'useGameLoop': !0x1
    },
    '__detectFeatures': function() {
        var _0x281c8c = window['Audio'] && new Audio();
        if (_0x281c8c && _0x281c8c['canPlayType'] && !0x1 === this['settings']['useFlash']) {
            for (var _0x315063 = [{
                    'e': '3gp',
                    'm': ['audio/3gpp', 'audio/amr']
                }, {
                    'e': 'aac',
                    'm': ['audio/aac', 'audio/aacp']
                }, {
                    'e': 'amr',
                    'm': ['audio/amr', 'audio/3gpp']
                }, {
                    'e': 'caf',
                    'm': ['audio/IMA-ADPCM', 'audio/x-adpcm', 'audio/x-aiff;\x20codecs=\x22IMA-ADPCM,\x20ADPCM\x22']
                }, {
                    'e': 'm4a',
                    'm': 'audio/mp4{audio/mp4;\x20codecs=\x22mp4a.40.2,avc1.42E01E\x22{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a' ['split']('{')
                }, {
                    'e': 'mp3',
                    'm': ['audio/mp3', 'audio/mpeg', 'audio/mpeg;\x20codecs=\x22mp3\x22', 'audio/MPA', 'audio/mpa-robust']
                }, {
                    'e': 'mpga',
                    'm': ['audio/MPA', 'audio/mpa-robust', 'audio/mpeg', 'video/mpeg']
                }, {
                    'e': 'mp4',
                    'm': ['audio/mp4', 'video/mp4']
                }, {
                    'e': 'ogg',
                    'm': ['application/ogg', 'audio/ogg', 'audio/ogg;\x20codecs=\x22theora,\x20vorbis\x22', 'video/ogg', 'video/ogg;\x20codecs=\x22theora,\x20vorbis\x22']
                }, {
                    'e': 'wav',
                    'm': ['audio/wave', 'audio/wav', 'audio/wav;\x20codecs=\x221\x22', 'audio/x-wav', 'audio/x-pn-wav']
                }, {
                    'e': 'webm',
                    'm': ['audio/webm', 'audio/webm;\x20codecs=\x22vorbis\x22', 'video/webm']
                }], _0x3d4abb, _0x656626, _0x35ab07 = 0x0, _0x30db76 = _0x315063['length']; _0x35ab07 < _0x30db76; _0x35ab07++)
                if (_0x656626 = _0x315063[_0x35ab07]['e'], _0x315063[_0x35ab07]['m']['length'] && 'object' === typeof _0x315063[_0x35ab07]['m'])
                    for (var _0x166812 = 0x0, _0x1bf2c3 = _0x315063[_0x35ab07]['m']['length']; _0x166812 < _0x1bf2c3; _0x166812++)
                        if (_0x3d4abb = _0x315063[_0x35ab07]['m'][_0x166812], '' !== _0x281c8c['canPlayType'](_0x3d4abb)) {
                            this['codecs'][_0x656626] = _0x3d4abb;
                            break;
                        } else this['codecs'][_0x656626] || (this['codecs'][_0x656626] = !0x1);
            this['features']['html5audio'] = !(!this['codecs']['mp3'] && !this['codecs']['ogg'] && !this['codecs']['webm'] && !this['codecs']['wav']);
            this['features']['channels'] = 0x8;
            _0x281c8c['volume'] = 0.1337;
            this['features']['volume'] = !!(0.0001 > Math['abs'](_0x281c8c['volume'] - 0.1337));
            navigator['userAgent']['match'](/iPhone|iPod|iPad/i) && (this['features']['channels'] = 0x1);
        }
        this['features']['flashaudio'] = !!navigator['mimeTypes']['application/x-shockwave-flash'] || !!navigator['plugins']['Shockwave\x20Flash'] || !0x1;
        if (window['ActiveXObject']) try {
            new ActiveXObject('ShockwaveFlash.ShockwaveFlash.10'), this['features']['flashaudio'] = !0x0;
        } catch (_0x304d42) {}!0x0 === this['settings']['useFlash'] && (this['features']['flashaudio'] = !0x0);
        !0x0 === this['features']['flashaudio'] && !this['features']['html5audio'] && (this['codecs']['mp3'] = 'audio/mp3', this['codecs']['mpga'] = 'audio/mpeg', this['codecs']['mp4'] = 'audio/mp4', this['codecs']['m4a'] = 'audio/mp4', this['codecs']['3gp'] = 'audio/3gpp', this['codecs']['amr'] = 'audio/amr', this['features']['volume'] = !0x0, this['features']['channels'] = 0x1);
    },
    '__getPlayerById': function(_0x5aa012) {
        return this['__players'] && void 0x0 !== this['__players'][_0x5aa012] ? this['__players'][_0x5aa012] : null;
    },
    '__getClone': function(_0x14dac9, _0x59363e) {
        for (var _0x82a195 in this['__clones']) {
            var _0x48ce75 = this['__clones'][_0x82a195];
            if (null === _0x48ce75['isPlaying'] && _0x48ce75['origin'] === _0x14dac9) return _0x48ce75;
        }
        if ('[object\x20Object]' === Object['prototype']['toString']['call'](_0x59363e)) {
            _0x82a195 = {};
            for (var _0x374d6f in _0x59363e) _0x82a195[_0x374d6f] = _0x59363e[_0x374d6f];
            _0x82a195['autoplay'] = !0x1;
            _0x374d6f = new jukebox['Player'](_0x82a195, _0x14dac9);
            _0x374d6f['isClone'] = !0x0;
            _0x374d6f['wasReady'] = !0x1;
            return this['__clones'][_0x374d6f['id']] = _0x374d6f;
        }
        return null;
    },
    'loop': function() {
        if (0x0 !== this['__playersLength'])
            if (this['__queue']['length'] && this['__playersLength'] < this['features']['channels']) {
                var _0x524157 = this['__queue'][0x0],
                    _0x4f3620 = this['__getPlayerById'](_0x524157['origin']);
                if (null !== _0x4f3620) {
                    var _0x2934d4 = this['__getClone'](_0x524157['origin'], _0x4f3620['settings']);
                    null !== _0x2934d4 && (!0x0 === this['features']['volume'] && (_0x4f3620 = this['__players'][_0x524157['origin']]) && _0x2934d4['setVolume'](_0x4f3620['getVolume']()), this['add'](_0x2934d4), _0x2934d4['play'](_0x524157['pointer'], !0x0));
                }
                this['__queue']['splice'](0x0, 0x1);
            } else
                for (_0x2934d4 in (this['__queue']['length'] && 0x1 === this['features']['channels'] && (_0x524157 = this['__queue'][0x0], _0x4f3620 = this['__getPlayerById'](_0x524157['origin']), null !== _0x4f3620 && _0x4f3620['play'](_0x524157['pointer'], !0x0), this['__queue']['splice'](0x0, 0x1)), this['__players'])) _0x524157 = this['__players'][_0x2934d4], _0x4f3620 = _0x524157['getCurrentTime']() || 0x0, _0x524157['isPlaying'] && !0x1 === _0x524157['wasReady'] ? _0x524157['wasReady'] = _0x524157['setCurrentTime'](_0x524157['isPlaying']['start']) : _0x524157['isPlaying'] && !0x0 === _0x524157['wasReady'] ? _0x4f3620 > _0x524157['isPlaying']['end'] && (!0x0 === _0x524157['isPlaying']['loop'] ? _0x524157['play'](_0x524157['isPlaying']['start'], !0x0) : _0x524157['stop']()) : _0x524157['isClone'] && null === _0x524157['isPlaying'] ? this['remove'](_0x524157) : void 0x0 !== _0x524157['backgroundMusic'] && null === _0x524157['isPlaying'] && _0x4f3620 > _0x524157['backgroundMusic']['end'] && _0x524157['backgroundHackForiOS']();
    },
    'getPlayableResource': function(_0x37aa13) {
        '[object\x20Array]' !== Object['prototype']['toString']['call'](_0x37aa13) && (_0x37aa13 = [_0x37aa13]);
        for (var _0xa70952 = 0x0, _0x12a5fc = _0x37aa13['length']; _0xa70952 < _0x12a5fc; _0xa70952++) {
            var _0x4985f0 = _0x37aa13[_0xa70952],
                _0x21238e = _0x4985f0['match'](/\.([^\.]*)$/)[0x1];
            if (_0x21238e && this['codecs'][_0x21238e]) return _0x4985f0;
        }
        return null;
    },
    'add': function(_0x1a3917) {
        return _0x1a3917 instanceof jukebox['Player'] && void 0x0 === this['__players'][_0x1a3917['id']] ? (this['__playersLength']++, this['__players'][_0x1a3917['id']] = _0x1a3917, !0x0) : !0x1;
    },
    'remove': function(_0xc0fadb) {
        return _0xc0fadb instanceof jukebox['Player'] && void 0x0 !== this['__players'][_0xc0fadb['id']] ? (this['__playersLength']--, delete this['__players'][_0xc0fadb['id']], !0x0) : !0x1;
    },
    'addToQueue': function(_0xccc1ee, _0x1e134) {
        return ('string' === typeof _0xccc1ee || 'number' === typeof _0xccc1ee) && void 0x0 !== this['__players'][_0x1e134] ? (this['__queue']['push']({
            'pointer': _0xccc1ee,
            'origin': _0x1e134
        }), !0x0) : !0x1;
    }
};
(function() {
    var _0x4d7a5e = function() {
        this['init']();
    };
    _0x4d7a5e['prototype'] = {
        'init': function() {
            var _0x28e3af = this || _0x2f053b;
            _0x28e3af['_counter'] = 0x3e8;
            _0x28e3af['_codecs'] = {};
            _0x28e3af['_howls'] = [];
            _0x28e3af['_muted'] = !0x1;
            _0x28e3af['_volume'] = 0x1;
            _0x28e3af['_canPlayEvent'] = 'canplaythrough';
            _0x28e3af['_navigator'] = 'undefined' !== typeof window && window['navigator'] ? window['navigator'] : null;
            _0x28e3af['masterGain'] = null;
            _0x28e3af['noAudio'] = !0x1;
            _0x28e3af['usingWebAudio'] = !0x0;
            _0x28e3af['autoSuspend'] = !0x0;
            _0x28e3af['ctx'] = null;
            _0x28e3af['mobileAutoEnable'] = !0x0;
            _0x28e3af['_setup']();
            return _0x28e3af;
        },
        'volume': function(_0x19628b) {
            var _0x251e38 = this || _0x2f053b;
            _0x19628b = parseFloat(_0x19628b);
            _0x251e38['ctx'] || _0x3373e8();
            if ('undefined' !== typeof _0x19628b && 0x0 <= _0x19628b && 0x1 >= _0x19628b) {
                _0x251e38['_volume'] = _0x19628b;
                if (_0x251e38['_muted']) return _0x251e38;
                _0x251e38['usingWebAudio'] && _0x251e38['masterGain']['gain']['setValueAtTime'](_0x19628b, _0x2f053b['ctx']['currentTime']);
                for (var _0x54c549 = 0x0; _0x54c549 < _0x251e38['_howls']['length']; _0x54c549++)
                    if (!_0x251e38['_howls'][_0x54c549]['_webAudio'])
                        for (var _0x35db0c = _0x251e38['_howls'][_0x54c549]['_getSoundIds'](), _0x2d638c = 0x0; _0x2d638c < _0x35db0c['length']; _0x2d638c++) {
                            var _0x14522f = _0x251e38['_howls'][_0x54c549]['_soundById'](_0x35db0c[_0x2d638c]);
                            _0x14522f && _0x14522f['_node'] && (_0x14522f['_node']['volume'] = _0x14522f['_volume'] * _0x19628b);
                        }
                return _0x251e38;
            }
            return _0x251e38['_volume'];
        },
        'mute': function(_0x5942a1) {
            var _0x2b8eab = this || _0x2f053b;
            _0x2b8eab['ctx'] || _0x3373e8();
            _0x2b8eab['_muted'] = _0x5942a1;
            _0x2b8eab['usingWebAudio'] && _0x2b8eab['masterGain']['gain']['setValueAtTime'](_0x5942a1 ? 0x0 : _0x2b8eab['_volume'], _0x2f053b['ctx']['currentTime']);
            for (var _0x59acc5 = 0x0; _0x59acc5 < _0x2b8eab['_howls']['length']; _0x59acc5++)
                if (!_0x2b8eab['_howls'][_0x59acc5]['_webAudio'])
                    for (var _0x1235fd = _0x2b8eab['_howls'][_0x59acc5]['_getSoundIds'](), _0xd1d3d9 = 0x0; _0xd1d3d9 < _0x1235fd['length']; _0xd1d3d9++) {
                        var _0x54126c = _0x2b8eab['_howls'][_0x59acc5]['_soundById'](_0x1235fd[_0xd1d3d9]);
                        _0x54126c && _0x54126c['_node'] && (_0x54126c['_node']['muted'] = _0x5942a1 ? !0x0 : _0x54126c['_muted']);
                    }
            return _0x2b8eab;
        },
        'unload': function() {
            for (var _0x2e3bc8 = this || _0x2f053b, _0x224d68 = _0x2e3bc8['_howls']['length'] - 0x1; 0x0 <= _0x224d68; _0x224d68--) _0x2e3bc8['_howls'][_0x224d68]['unload']();
            _0x2e3bc8['usingWebAudio'] && _0x2e3bc8['ctx'] && 'undefined' !== typeof _0x2e3bc8['ctx']['close'] && (_0x2e3bc8['ctx']['close'](), _0x2e3bc8['ctx'] = null, _0x3373e8());
            return _0x2e3bc8;
        },
        'codecs': function(_0x52ec85) {
            return (this || _0x2f053b)['_codecs'][_0x52ec85['replace'](/^x-/, '')];
        },
        '_setup': function() {
            var _0x25dbb4 = this || _0x2f053b;
            _0x25dbb4['state'] = _0x25dbb4['ctx'] ? _0x25dbb4['ctx']['state'] || 'running' : 'running';
            _0x25dbb4['_autoSuspend']();
            if (!_0x25dbb4['usingWebAudio'])
                if ('undefined' !== typeof Audio) try {
                    var _0xb49bc3 = new Audio();
                    'undefined' === typeof _0xb49bc3['oncanplaythrough'] && (_0x25dbb4['_canPlayEvent'] = 'canplay');
                } catch (_0x4f9bcc) {
                    _0x25dbb4['noAudio'] = !0x0;
                } else _0x25dbb4['noAudio'] = !0x0;
            try {
                _0xb49bc3 = new Audio(), _0xb49bc3['muted'] && (_0x25dbb4['noAudio'] = !0x0);
            } catch (_0x6604ec) {}
            _0x25dbb4['noAudio'] || _0x25dbb4['_setupCodecs']();
            return _0x25dbb4;
        },
        '_setupCodecs': function() {
            var _0x2a4a90 = this || _0x2f053b,
                _0xa2900a = null;
            try {
                _0xa2900a = 'undefined' !== typeof Audio ? new Audio() : null;
            } catch (_0x58e3dc) {
                return _0x2a4a90;
            }
            if (!_0xa2900a || 'function' !== typeof _0xa2900a['canPlayType']) return _0x2a4a90;
            var _0x2b8ab7 = _0xa2900a['canPlayType']('audio/mpeg;')['replace'](/^no$/, ''),
                _0x25fc3d = _0x2a4a90['_navigator'] && _0x2a4a90['_navigator']['userAgent']['match'](/OPR\/([0-6].)/g),
                _0x25fc3d = _0x25fc3d && 0x21 > parseInt(_0x25fc3d[0x0]['split']('/')[0x1], 0xa);
            _0x2a4a90['_codecs'] = {
                'mp3': !(_0x25fc3d || !_0x2b8ab7 && !_0xa2900a['canPlayType']('audio/mp3;')['replace'](/^no$/, '')),
                'mpeg': !!_0x2b8ab7,
                'opus': !!_0xa2900a['canPlayType']('audio/ogg;\x20codecs=\x22opus\x22')['replace'](/^no$/, ''),
                'ogg': !!_0xa2900a['canPlayType']('audio/ogg;\x20codecs=\x22vorbis\x22')['replace'](/^no$/, ''),
                'oga': !!_0xa2900a['canPlayType']('audio/ogg;\x20codecs=\x22vorbis\x22')['replace'](/^no$/, ''),
                'wav': !!_0xa2900a['canPlayType']('audio/wav;\x20codecs=\x221\x22')['replace'](/^no$/, ''),
                'aac': !!_0xa2900a['canPlayType']('audio/aac;')['replace'](/^no$/, ''),
                'caf': !!_0xa2900a['canPlayType']('audio/x-caf;')['replace'](/^no$/, ''),
                'm4a': !!(_0xa2900a['canPlayType']('audio/x-m4a;') || _0xa2900a['canPlayType']('audio/m4a;') || _0xa2900a['canPlayType']('audio/aac;'))['replace'](/^no$/, ''),
                'mp4': !!(_0xa2900a['canPlayType']('audio/x-mp4;') || _0xa2900a['canPlayType']('audio/mp4;') || _0xa2900a['canPlayType']('audio/aac;'))['replace'](/^no$/, ''),
                'weba': !!_0xa2900a['canPlayType']('audio/webm;\x20codecs=\x22vorbis\x22')['replace'](/^no$/, ''),
                'webm': !!_0xa2900a['canPlayType']('audio/webm;\x20codecs=\x22vorbis\x22')['replace'](/^no$/, ''),
                'dolby': !!_0xa2900a['canPlayType']('audio/mp4;\x20codecs=\x22ec-3\x22')['replace'](/^no$/, ''),
                'flac': !!(_0xa2900a['canPlayType']('audio/x-flac;') || _0xa2900a['canPlayType']('audio/flac;'))['replace'](/^no$/, '')
            };
            return _0x2a4a90;
        },
        '_enableMobileAudio': function() {
            var _0x5b4bfa = this || _0x2f053b,
                _0x4a67bf = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i ['test'](_0x5b4bfa['_navigator'] && _0x5b4bfa['_navigator']['userAgent']),
                _0x591d25 = !!('ontouchend' in window || _0x5b4bfa['_navigator'] && 0x0 < _0x5b4bfa['_navigator']['maxTouchPoints'] || _0x5b4bfa['_navigator'] && 0x0 < _0x5b4bfa['_navigator']['msMaxTouchPoints']);
            if (!_0x5b4bfa['_mobileEnabled'] && _0x5b4bfa['ctx'] && (_0x4a67bf || _0x591d25)) {
                _0x5b4bfa['_mobileEnabled'] = !0x1;
                !_0x5b4bfa['_mobileUnloaded'] && 0xac44 !== _0x5b4bfa['ctx']['sampleRate'] && (_0x5b4bfa['_mobileUnloaded'] = !0x0, _0x5b4bfa['unload']());
                _0x5b4bfa['_scratchBuffer'] = _0x5b4bfa['ctx']['createBuffer'](0x1, 0x1, 0x5622);
                var _0x133f29 = function() {
                    _0x2f053b['_autoResume']();
                    var _0xf42c37 = _0x5b4bfa['ctx']['createBufferSource']();
                    _0xf42c37['buffer'] = _0x5b4bfa['_scratchBuffer'];
                    _0xf42c37['connect'](_0x5b4bfa['ctx']['destination']);
                    'undefined' === typeof _0xf42c37['start'] ? _0xf42c37['noteOn'](0x0) : _0xf42c37['start'](0x0);
                    'function' === typeof _0x5b4bfa['ctx']['resume'] && _0x5b4bfa['ctx']['resume']();
                    _0xf42c37['onended'] = function() {
                        _0xf42c37['disconnect'](0x0);
                        _0x5b4bfa['_mobileEnabled'] = !0x0;
                        _0x5b4bfa['mobileAutoEnable'] = !0x1;
                        document['removeEventListener']('touchstart', _0x133f29, !0x0);
                        document['removeEventListener']('touchend', _0x133f29, !0x0);
                    };
                };
                document['addEventListener']('touchstart', _0x133f29, !0x0);
                document['addEventListener']('touchend', _0x133f29, !0x0);
                return _0x5b4bfa;
            }
        },
        '_autoSuspend': function() {
            var _0x584b1b = this;
            if (_0x584b1b['autoSuspend'] && _0x584b1b['ctx'] && 'undefined' !== typeof _0x584b1b['ctx']['suspend'] && _0x2f053b['usingWebAudio']) {
                for (var _0x149d44 = 0x0; _0x149d44 < _0x584b1b['_howls']['length']; _0x149d44++)
                    if (_0x584b1b['_howls'][_0x149d44]['_webAudio'])
                        for (var _0x34fd41 = 0x0; _0x34fd41 < _0x584b1b['_howls'][_0x149d44]['_sounds']['length']; _0x34fd41++)
                            if (!_0x584b1b['_howls'][_0x149d44]['_sounds'][_0x34fd41]['_paused']) return _0x584b1b;
                _0x584b1b['_suspendTimer'] && clearTimeout(_0x584b1b['_suspendTimer']);
                _0x584b1b['_suspendTimer'] = setTimeout(function() {
                    _0x584b1b['autoSuspend'] && (_0x584b1b['_suspendTimer'] = null, _0x584b1b['state'] = 'suspending', _0x584b1b['ctx']['suspend']()['then'](function() {
                        _0x584b1b['state'] = 'suspended';
                        _0x584b1b['_resumeAfterSuspend'] && (delete _0x584b1b['_resumeAfterSuspend'], _0x584b1b['_autoResume']());
                    }));
                }, 0x7530);
                return _0x584b1b;
            }
        },
        '_autoResume': function() {
            var _0x806ebe = this;
            if (_0x806ebe['ctx'] && 'undefined' !== typeof _0x806ebe['ctx']['resume'] && _0x2f053b['usingWebAudio']) return 'running' === _0x806ebe['state'] && _0x806ebe['_suspendTimer'] ? (clearTimeout(_0x806ebe['_suspendTimer']), _0x806ebe['_suspendTimer'] = null) : 'suspended' === _0x806ebe['state'] ? (_0x806ebe['ctx']['resume']()['then'](function() {
                _0x806ebe['state'] = 'running';
                for (var _0x32739c = 0x0; _0x32739c < _0x806ebe['_howls']['length']; _0x32739c++) _0x806ebe['_howls'][_0x32739c]['_emit']('resume');
            }), _0x806ebe['_suspendTimer'] && (clearTimeout(_0x806ebe['_suspendTimer']), _0x806ebe['_suspendTimer'] = null)) : 'suspending' === _0x806ebe['state'] && (_0x806ebe['_resumeAfterSuspend'] = !0x0), _0x806ebe;
        }
    };
    var _0x2f053b = new _0x4d7a5e(),
        _0x37ca04 = function(_0x3d0fd8) {
            !_0x3d0fd8['src'] || 0x0 === _0x3d0fd8['src']['length'] ? console['error']('An\x20array\x20of\x20source\x20files\x20must\x20be\x20passed\x20with\x20any\x20new\x20Howl.') : this['init'](_0x3d0fd8);
        };
    _0x37ca04['prototype'] = {
        'init': function(_0xe091d1) {
            var _0x3b13a2 = this;
            _0x2f053b['ctx'] || _0x3373e8();
            _0x3b13a2['_autoplay'] = _0xe091d1['autoplay'] || !0x1;
            _0x3b13a2['_format'] = 'string' !== typeof _0xe091d1['format'] ? _0xe091d1['format'] : [_0xe091d1['format']];
            _0x3b13a2['_html5'] = _0xe091d1['html5'] || !0x1;
            _0x3b13a2['_muted'] = _0xe091d1['mute'] || !0x1;
            _0x3b13a2['_loop'] = _0xe091d1['loop'] || !0x1;
            _0x3b13a2['_pool'] = _0xe091d1['pool'] || 0x5;
            _0x3b13a2['_preload'] = 'boolean' === typeof _0xe091d1['preload'] ? _0xe091d1['preload'] : !0x0;
            _0x3b13a2['_rate'] = _0xe091d1['rate'] || 0x1;
            _0x3b13a2['_sprite'] = _0xe091d1['sprite'] || {};
            _0x3b13a2['_src'] = 'string' !== typeof _0xe091d1['src'] ? _0xe091d1['src'] : [_0xe091d1['src']];
            _0x3b13a2['_volume'] = void 0x0 !== _0xe091d1['volume'] ? _0xe091d1['volume'] : 0x1;
            _0x3b13a2['_xhrWithCredentials'] = _0xe091d1['xhrWithCredentials'] || !0x1;
            _0x3b13a2['_duration'] = 0x0;
            _0x3b13a2['_state'] = 'unloaded';
            _0x3b13a2['_sounds'] = [];
            _0x3b13a2['_endTimers'] = {};
            _0x3b13a2['_queue'] = [];
            _0x3b13a2['_playLock'] = !0x1;
            _0x3b13a2['_onend'] = _0xe091d1['onend'] ? [{
                'fn': _0xe091d1['onend']
            }] : [];
            _0x3b13a2['_onfade'] = _0xe091d1['onfade'] ? [{
                'fn': _0xe091d1['onfade']
            }] : [];
            _0x3b13a2['_onload'] = _0xe091d1['onload'] ? [{
                'fn': _0xe091d1['onload']
            }] : [];
            _0x3b13a2['_onloaderror'] = _0xe091d1['onloaderror'] ? [{
                'fn': _0xe091d1['onloaderror']
            }] : [];
            _0x3b13a2['_onplayerror'] = _0xe091d1['onplayerror'] ? [{
                'fn': _0xe091d1['onplayerror']
            }] : [];
            _0x3b13a2['_onpause'] = _0xe091d1['onpause'] ? [{
                'fn': _0xe091d1['onpause']
            }] : [];
            _0x3b13a2['_onplay'] = _0xe091d1['onplay'] ? [{
                'fn': _0xe091d1['onplay']
            }] : [];
            _0x3b13a2['_onstop'] = _0xe091d1['onstop'] ? [{
                'fn': _0xe091d1['onstop']
            }] : [];
            _0x3b13a2['_onmute'] = _0xe091d1['onmute'] ? [{
                'fn': _0xe091d1['onmute']
            }] : [];
            _0x3b13a2['_onvolume'] = _0xe091d1['onvolume'] ? [{
                'fn': _0xe091d1['onvolume']
            }] : [];
            _0x3b13a2['_onrate'] = _0xe091d1['onrate'] ? [{
                'fn': _0xe091d1['onrate']
            }] : [];
            _0x3b13a2['_onseek'] = _0xe091d1['onseek'] ? [{
                'fn': _0xe091d1['onseek']
            }] : [];
            _0x3b13a2['_onresume'] = [];
            _0x3b13a2['_webAudio'] = _0x2f053b['usingWebAudio'] && !_0x3b13a2['_html5'];
            'undefined' !== typeof _0x2f053b['ctx'] && _0x2f053b['ctx'] && _0x2f053b['mobileAutoEnable'] && _0x2f053b['_enableMobileAudio']();
            _0x2f053b['_howls']['push'](_0x3b13a2);
            _0x3b13a2['_autoplay'] && _0x3b13a2['_queue']['push']({
                'event': 'play',
                'action': function() {
                    _0x3b13a2['play']();
                }
            });
            _0x3b13a2['_preload'] && _0x3b13a2['load']();
            return _0x3b13a2;
        },
        'load': function() {
            var _0x538272 = null;
            if (_0x2f053b['noAudio']) this['_emit']('loaderror', null, 'No\x20audio\x20support.');
            else {
                'string' === typeof this['_src'] && (this['_src'] = [this['_src']]);
                for (var _0x17cf61 = 0x0; _0x17cf61 < this['_src']['length']; _0x17cf61++) {
                    var _0x56d944, _0x4bb44f;
                    if (this['_format'] && this['_format'][_0x17cf61]) _0x56d944 = this['_format'][_0x17cf61];
                    else {
                        _0x4bb44f = this['_src'][_0x17cf61];
                        if ('string' !== typeof _0x4bb44f) {
                            this['_emit']('loaderror', null, 'Non-string\x20found\x20in\x20selected\x20audio\x20sources\x20-\x20ignoring.');
                            continue;
                        }(_0x56d944 = /^data:audio\/([^;,]+);/i ['exec'](_0x4bb44f)) || (_0x56d944 = /\.([^.]+)$/ ['exec'](_0x4bb44f['split']('?', 0x1)[0x0]));
                        _0x56d944 && (_0x56d944 = _0x56d944[0x1]['toLowerCase']());
                    }
                    _0x56d944 || console['warn']('No\x20file\x20extension\x20was\x20found.\x20Consider\x20using\x20the\x20\x22format\x22\x20property\x20or\x20specify\x20an\x20extension.');
                    if (_0x56d944 && _0x2f053b['codecs'](_0x56d944)) {
                        _0x538272 = this['_src'][_0x17cf61];
                        break;
                    }
                }
                if (_0x538272) {
                    this['_src'] = _0x538272;
                    this['_state'] = 'loading';
                    'https:' === window['location']['protocol'] && 'http:' === _0x538272['slice'](0x0, 0x5) && (this['_html5'] = !0x0, this['_webAudio'] = !0x1);
                    new _0x2324e6(this);
                    if (this['_webAudio']) {
                        var _0x23f69f = this,
                            _0x266c4d = _0x23f69f['_src'];
                        if (_0x3496ee[_0x266c4d]) _0x23f69f['_duration'] = _0x3496ee[_0x266c4d]['duration'], _0x293ae2(_0x23f69f);
                        else if (/^data:[^;]+;base64,/ ['test'](_0x266c4d)) {
                            _0x538272 = atob(_0x266c4d['split'](',')[0x1]);
                            _0x17cf61 = new Uint8Array(_0x538272['length']);
                            for (_0x56d944 = 0x0; _0x56d944 < _0x538272['length']; ++_0x56d944) _0x17cf61[_0x56d944] = _0x538272['charCodeAt'](_0x56d944);
                            _0x4a2e7b(_0x17cf61['buffer'], _0x23f69f);
                        } else {
                            var _0x1d1c83 = new XMLHttpRequest();
                            _0x1d1c83['open']('GET', _0x266c4d, !0x0);
                            _0x1d1c83['withCredentials'] = _0x23f69f['_xhrWithCredentials'];
                            _0x1d1c83['responseType'] = 'arraybuffer';
                            _0x1d1c83['onload'] = function() {
                                var _0x42894c = (_0x1d1c83['status'] + '')[0x0];
                                '0' !== _0x42894c && '2' !== _0x42894c && '3' !== _0x42894c ? _0x23f69f['_emit']('loaderror', null, 'Failed\x20loading\x20audio\x20file\x20with\x20status:\x20' + _0x1d1c83['status'] + '.') : _0x4a2e7b(_0x1d1c83['response'], _0x23f69f);
                            };
                            _0x1d1c83['onerror'] = function() {
                                _0x23f69f['_webAudio'] && (_0x23f69f['_html5'] = !0x0, _0x23f69f['_webAudio'] = !0x1, _0x23f69f['_sounds'] = [], delete _0x3496ee[_0x266c4d], _0x23f69f['load']());
                            };
                            try {
                                _0x1d1c83['send']();
                            } catch (_0x38796a) {
                                _0x1d1c83['onerror']();
                            }
                        }
                    }
                    return this;
                }
                this['_emit']('loaderror', null, 'No\x20codec\x20support\x20for\x20selected\x20audio\x20sources.');
            }
        },
        'play': function(_0x10cefe, _0x1d5ad8) {
            var _0x146624 = this,
                _0x2de759 = null;
            if ('number' === typeof _0x10cefe) _0x2de759 = _0x10cefe, _0x10cefe = null;
            else {
                if ('string' === typeof _0x10cefe && 'loaded' === _0x146624['_state'] && !_0x146624['_sprite'][_0x10cefe]) return null;
                if ('undefined' === typeof _0x10cefe) {
                    _0x10cefe = '__default';
                    for (var _0x36d2ff = 0x0, _0x444aab = 0x0; _0x444aab < _0x146624['_sounds']['length']; _0x444aab++) _0x146624['_sounds'][_0x444aab]['_paused'] && !_0x146624['_sounds'][_0x444aab]['_ended'] && (_0x36d2ff++, _0x2de759 = _0x146624['_sounds'][_0x444aab]['_id']);
                    0x1 === _0x36d2ff ? _0x10cefe = null : _0x2de759 = null;
                }
            }
            var _0x4208d2 = _0x2de759 ? _0x146624['_soundById'](_0x2de759) : _0x146624['_inactiveSound']();
            if (!_0x4208d2) return null;
            _0x2de759 && !_0x10cefe && (_0x10cefe = _0x4208d2['_sprite'] || '__default');
            if ('loaded' !== _0x146624['_state']) {
                _0x4208d2['_sprite'] = _0x10cefe;
                _0x4208d2['_ended'] = !0x1;
                var _0x2972e = _0x4208d2['_id'];
                _0x146624['_queue']['push']({
                    'event': 'play',
                    'action': function() {
                        _0x146624['play'](_0x2972e);
                    }
                });
                return _0x2972e;
            }
            if (_0x2de759 && !_0x4208d2['_paused']) return _0x1d5ad8 || _0x146624['_loadQueue']('play'), _0x4208d2['_id'];
            _0x146624['_webAudio'] && _0x2f053b['_autoResume']();
            var _0x14ae8a = Math['max'](0x0, 0x0 < _0x4208d2['_seek'] ? _0x4208d2['_seek'] : _0x146624['_sprite'][_0x10cefe][0x0] / 0x3e8),
                _0x708322 = Math['max'](0x0, (_0x146624['_sprite'][_0x10cefe][0x0] + _0x146624['_sprite'][_0x10cefe][0x1]) / 0x3e8 - _0x14ae8a),
                _0x174b87 = 0x3e8 * _0x708322 / Math['abs'](_0x4208d2['_rate']);
            _0x4208d2['_paused'] = !0x1;
            _0x4208d2['_ended'] = !0x1;
            _0x4208d2['_sprite'] = _0x10cefe;
            _0x4208d2['_seek'] = _0x14ae8a;
            _0x4208d2['_start'] = _0x146624['_sprite'][_0x10cefe][0x0] / 0x3e8;
            _0x4208d2['_stop'] = (_0x146624['_sprite'][_0x10cefe][0x0] + _0x146624['_sprite'][_0x10cefe][0x1]) / 0x3e8;
            _0x4208d2['_loop'] = !(!_0x4208d2['_loop'] && !_0x146624['_sprite'][_0x10cefe][0x2]);
            var _0x1ffd90 = _0x4208d2['_node'];
            if (_0x146624['_webAudio']) _0x2de759 = function() {
                _0x146624['_refreshBuffer'](_0x4208d2);
                _0x1ffd90['gain']['setValueAtTime'](_0x4208d2['_muted'] || _0x146624['_muted'] ? 0x0 : _0x4208d2['_volume'], _0x2f053b['ctx']['currentTime']);
                _0x4208d2['_playStart'] = _0x2f053b['ctx']['currentTime'];
                'undefined' === typeof _0x1ffd90['bufferSource']['start'] ? _0x4208d2['_loop'] ? _0x1ffd90['bufferSource']['noteGrainOn'](0x0, _0x14ae8a, 0x15180) : _0x1ffd90['bufferSource']['noteGrainOn'](0x0, _0x14ae8a, _0x708322) : _0x4208d2['_loop'] ? _0x1ffd90['bufferSource']['start'](0x0, _0x14ae8a, 0x15180) : _0x1ffd90['bufferSource']['start'](0x0, _0x14ae8a, _0x708322);
                Infinity !== _0x174b87 && (_0x146624['_endTimers'][_0x4208d2['_id']] = setTimeout(_0x146624['_ended']['bind'](_0x146624, _0x4208d2), _0x174b87));
                _0x1d5ad8 || setTimeout(function() {
                    _0x146624['_emit']('play', _0x4208d2['_id']);
                }, 0x0);
            }, 'running' === _0x2f053b['state'] ? _0x2de759() : (_0x146624['once']('resume', _0x2de759), _0x146624['_clearTimer'](_0x4208d2['_id']));
            else {
                var _0x3725cf = function() {
                        _0x1ffd90['currentTime'] = _0x14ae8a;
                        _0x1ffd90['muted'] = _0x4208d2['_muted'] || _0x146624['_muted'] || _0x2f053b['_muted'] || _0x1ffd90['muted'];
                        _0x1ffd90['volume'] = _0x4208d2['_volume'] * _0x2f053b['volume']();
                        _0x1ffd90['playbackRate'] = _0x4208d2['_rate'];
                        try {
                            var _0x47b32b = _0x1ffd90['play']();
                            if ('undefined' !== typeof Promise && _0x47b32b instanceof Promise) {
                                _0x146624['_playLock'] = !0x0;
                                var _0x4205ea = function() {
                                    _0x146624['_playLock'] = !0x1;
                                    _0x1d5ad8 || _0x146624['_emit']('play', _0x4208d2['_id']);
                                };
                                _0x47b32b['then'](_0x4205ea, _0x4205ea);
                            } else _0x1d5ad8 || _0x146624['_emit']('play', _0x4208d2['_id']);
                            _0x1ffd90['playbackRate'] = _0x4208d2['_rate'];
                            _0x1ffd90['paused'] ? _0x146624['_emit']('playerror', _0x4208d2['_id'], 'Playback\x20was\x20unable\x20to\x20start.\x20This\x20is\x20most\x20commonly\x20an\x20issue\x20on\x20mobile\x20devices\x20where\x20playback\x20was\x20not\x20within\x20a\x20user\x20interaction.') : '__default' !== _0x10cefe || _0x4208d2['_loop'] ? _0x146624['_endTimers'][_0x4208d2['_id']] = setTimeout(_0x146624['_ended']['bind'](_0x146624, _0x4208d2), _0x174b87) : (_0x146624['_endTimers'][_0x4208d2['_id']] = function() {
                                _0x146624['_ended'](_0x4208d2);
                                _0x1ffd90['removeEventListener']('ended', _0x146624['_endTimers'][_0x4208d2['_id']], !0x1);
                            }, _0x1ffd90['addEventListener']('ended', _0x146624['_endTimers'][_0x4208d2['_id']], !0x1));
                        } catch (_0x202fa7) {
                            _0x146624['_emit']('playerror', _0x4208d2['_id'], _0x202fa7);
                        }
                    },
                    _0x2de759 = window && window['ejecta'] || !_0x1ffd90['readyState'] && _0x2f053b['_navigator']['isCocoonJS'];
                if (0x3 <= _0x1ffd90['readyState'] || _0x2de759) _0x3725cf();
                else {
                    var _0x383d15 = function() {
                        _0x3725cf();
                        _0x1ffd90['removeEventListener'](_0x2f053b['_canPlayEvent'], _0x383d15, !0x1);
                    };
                    _0x1ffd90['addEventListener'](_0x2f053b['_canPlayEvent'], _0x383d15, !0x1);
                    _0x146624['_clearTimer'](_0x4208d2['_id']);
                }
            }
            return _0x4208d2['_id'];
        },
        'pause': function(_0x34bc15, _0x158b67) {
            var _0x4bb94a = this;
            if ('loaded' !== _0x4bb94a['_state'] || _0x4bb94a['_playLock']) return _0x4bb94a['_queue']['push']({
                'event': 'pause',
                'action': function() {
                    _0x4bb94a['pause'](_0x34bc15);
                }
            }), _0x4bb94a;
            for (var _0x2508b4 = _0x4bb94a['_getSoundIds'](_0x34bc15), _0x4c5992 = 0x0; _0x4c5992 < _0x2508b4['length']; _0x4c5992++) {
                _0x4bb94a['_clearTimer'](_0x2508b4[_0x4c5992]);
                var _0x338184 = _0x4bb94a['_soundById'](_0x2508b4[_0x4c5992]);
                if (_0x338184 && !_0x338184['_paused'] && (_0x338184['_seek'] = _0x4bb94a['seek'](_0x2508b4[_0x4c5992]), _0x338184['_rateSeek'] = 0x0, _0x338184['_paused'] = !0x0, _0x4bb94a['_stopFade'](_0x2508b4[_0x4c5992]), _0x338184['_node']))
                    if (_0x4bb94a['_webAudio']) {
                        if (!_0x338184['_node']['bufferSource']) continue;
                        'undefined' === typeof _0x338184['_node']['bufferSource']['stop'] ? _0x338184['_node']['bufferSource']['noteOff'](0x0) : _0x338184['_node']['bufferSource']['stop'](0x0);
                        _0x4bb94a['_cleanBuffer'](_0x338184['_node']);
                    } else(!isNaN(_0x338184['_node']['duration']) || Infinity === _0x338184['_node']['duration']) && _0x338184['_node']['pause']();
                _0x158b67 || _0x4bb94a['_emit']('pause', _0x338184 ? _0x338184['_id'] : null);
            }
            return _0x4bb94a;
        },
        'stop': function(_0x40579b, _0x4a850a) {
            var _0x300e8c = this;
            if ('loaded' !== _0x300e8c['_state']) return _0x300e8c['_queue']['push']({
                'event': 'stop',
                'action': function() {
                    _0x300e8c['stop'](_0x40579b);
                }
            }), _0x300e8c;
            for (var _0x1694f2 = _0x300e8c['_getSoundIds'](_0x40579b), _0xa6bb38 = 0x0; _0xa6bb38 < _0x1694f2['length']; _0xa6bb38++) {
                _0x300e8c['_clearTimer'](_0x1694f2[_0xa6bb38]);
                var _0x474de6 = _0x300e8c['_soundById'](_0x1694f2[_0xa6bb38]);
                if (_0x474de6) {
                    _0x474de6['_seek'] = _0x474de6['_start'] || 0x0;
                    _0x474de6['_rateSeek'] = 0x0;
                    _0x474de6['_paused'] = !0x0;
                    _0x474de6['_ended'] = !0x0;
                    _0x300e8c['_stopFade'](_0x1694f2[_0xa6bb38]);
                    if (_0x474de6['_node'])
                        if (_0x300e8c['_webAudio']) _0x474de6['_node']['bufferSource'] && ('undefined' === typeof _0x474de6['_node']['bufferSource']['stop'] ? _0x474de6['_node']['bufferSource']['noteOff'](0x0) : _0x474de6['_node']['bufferSource']['stop'](0x0), _0x300e8c['_cleanBuffer'](_0x474de6['_node']));
                        else if (!isNaN(_0x474de6['_node']['duration']) || Infinity === _0x474de6['_node']['duration']) _0x474de6['_node']['currentTime'] = _0x474de6['_start'] || 0x0, _0x474de6['_node']['pause']();
                    _0x4a850a || _0x300e8c['_emit']('stop', _0x474de6['_id']);
                }
            }
            return _0x300e8c;
        },
        'mute': function(_0x2f98c9, _0x468803) {
            var _0x416da0 = this;
            if ('loaded' !== _0x416da0['_state']) return _0x416da0['_queue']['push']({
                'event': 'mute',
                'action': function() {
                    _0x416da0['mute'](_0x2f98c9, _0x468803);
                }
            }), _0x416da0;
            if ('undefined' === typeof _0x468803)
                if ('boolean' === typeof _0x2f98c9) _0x416da0['_muted'] = _0x2f98c9;
                else return _0x416da0['_muted'];
            for (var _0x52743c = _0x416da0['_getSoundIds'](_0x468803), _0x5a72d9 = 0x0; _0x5a72d9 < _0x52743c['length']; _0x5a72d9++) {
                var _0x3d244e = _0x416da0['_soundById'](_0x52743c[_0x5a72d9]);
                _0x3d244e && (_0x3d244e['_muted'] = _0x2f98c9, _0x3d244e['_interval'] && _0x416da0['_stopFade'](_0x3d244e['_id']), _0x416da0['_webAudio'] && _0x3d244e['_node'] ? _0x3d244e['_node']['gain']['setValueAtTime'](_0x2f98c9 ? 0x0 : _0x3d244e['_volume'], _0x2f053b['ctx']['currentTime']) : _0x3d244e['_node'] && (_0x3d244e['_node']['muted'] = _0x2f053b['_muted'] ? !0x0 : _0x2f98c9), _0x416da0['_emit']('mute', _0x3d244e['_id']));
            }
            return _0x416da0;
        },
        'volume': function() {
            var _0x56aa90 = this,
                _0x4a7ba2 = arguments,
                _0x2ccf0d, _0x125fb7;
            if (0x0 === _0x4a7ba2['length']) return _0x56aa90['_volume'];
            0x1 === _0x4a7ba2['length'] || 0x2 === _0x4a7ba2['length'] && 'undefined' === typeof _0x4a7ba2[0x1] ? 0x0 <= _0x56aa90['_getSoundIds']()['indexOf'](_0x4a7ba2[0x0]) ? _0x125fb7 = parseInt(_0x4a7ba2[0x0], 0xa) : _0x2ccf0d = parseFloat(_0x4a7ba2[0x0]) : 0x2 <= _0x4a7ba2['length'] && (_0x2ccf0d = parseFloat(_0x4a7ba2[0x0]), _0x125fb7 = parseInt(_0x4a7ba2[0x1], 0xa));
            var _0x417e4d;
            if ('undefined' !== typeof _0x2ccf0d && 0x0 <= _0x2ccf0d && 0x1 >= _0x2ccf0d) {
                if ('loaded' !== _0x56aa90['_state']) return _0x56aa90['_queue']['push']({
                    'event': 'volume',
                    'action': function() {
                        _0x56aa90['volume']['apply'](_0x56aa90, _0x4a7ba2);
                    }
                }), _0x56aa90;
                'undefined' === typeof _0x125fb7 && (_0x56aa90['_volume'] = _0x2ccf0d);
                _0x125fb7 = _0x56aa90['_getSoundIds'](_0x125fb7);
                for (var _0x41086c = 0x0; _0x41086c < _0x125fb7['length']; _0x41086c++)
                    if (_0x417e4d = _0x56aa90['_soundById'](_0x125fb7[_0x41086c])) _0x417e4d['_volume'] = _0x2ccf0d, _0x4a7ba2[0x2] || _0x56aa90['_stopFade'](_0x125fb7[_0x41086c]), _0x56aa90['_webAudio'] && _0x417e4d['_node'] && !_0x417e4d['_muted'] ? _0x417e4d['_node']['gain']['setValueAtTime'](_0x2ccf0d, _0x2f053b['ctx']['currentTime']) : _0x417e4d['_node'] && !_0x417e4d['_muted'] && (_0x417e4d['_node']['volume'] = _0x2ccf0d * _0x2f053b['volume']()), _0x56aa90['_emit']('volume', _0x417e4d['_id']);
            } else return (_0x417e4d = _0x125fb7 ? _0x56aa90['_soundById'](_0x125fb7) : _0x56aa90['_sounds'][0x0]) ? _0x417e4d['_volume'] : 0x0;
            return _0x56aa90;
        },
        'fade': function(_0x1b2582, _0x3e5075, _0x2e8006, _0x4b7bdf) {
            var _0x2dafeb = this;
            if ('loaded' !== _0x2dafeb['_state']) return _0x2dafeb['_queue']['push']({
                'event': 'fade',
                'action': function() {
                    _0x2dafeb['fade'](_0x1b2582, _0x3e5075, _0x2e8006, _0x4b7bdf);
                }
            }), _0x2dafeb;
            _0x2dafeb['volume'](_0x1b2582, _0x4b7bdf);
            for (var _0xc89b39 = _0x2dafeb['_getSoundIds'](_0x4b7bdf), _0x5edce6 = 0x0; _0x5edce6 < _0xc89b39['length']; _0x5edce6++) {
                var _0x52c2be = _0x2dafeb['_soundById'](_0xc89b39[_0x5edce6]);
                if (_0x52c2be) {
                    _0x4b7bdf || _0x2dafeb['_stopFade'](_0xc89b39[_0x5edce6]);
                    if (_0x2dafeb['_webAudio'] && !_0x52c2be['_muted']) {
                        var _0x35b849 = _0x2f053b['ctx']['currentTime'],
                            _0x1bfff3 = _0x35b849 + _0x2e8006 / 0x3e8;
                        _0x52c2be['_volume'] = _0x1b2582;
                        _0x52c2be['_node']['gain']['setValueAtTime'](_0x1b2582, _0x35b849);
                        _0x52c2be['_node']['gain']['linearRampToValueAtTime'](_0x3e5075, _0x1bfff3);
                    }
                    _0x2dafeb['_startFadeInterval'](_0x52c2be, _0x1b2582, _0x3e5075, _0x2e8006, _0xc89b39[_0x5edce6], 'undefined' === typeof _0x4b7bdf);
                }
            }
            return _0x2dafeb;
        },
        '_startFadeInterval': function(_0x550c32, _0x803ae4, _0xbf2813, _0x111570, _0x2d8dbc, _0x38db02) {
            var _0x1c8340 = this,
                _0x2c462d = _0x803ae4,
                _0xb019a7 = _0xbf2813 - _0x803ae4;
            _0x2d8dbc = Math['abs'](_0xb019a7 / 0.01);
            _0x2d8dbc = Math['max'](0x4, 0x0 < _0x2d8dbc ? _0x111570 / _0x2d8dbc : _0x111570);
            var _0x17298a = Date['now']();
            _0x550c32['_fadeTo'] = _0xbf2813;
            _0x550c32['_interval'] = setInterval(function() {
                var _0x3f8ef5 = (Date['now']() - _0x17298a) / _0x111570;
                _0x17298a = Date['now']();
                _0x2c462d += _0xb019a7 * _0x3f8ef5;
                _0x2c462d = Math['max'](0x0, _0x2c462d);
                _0x2c462d = Math['min'](0x1, _0x2c462d);
                _0x2c462d = Math['round'](0x64 * _0x2c462d) / 0x64;
                _0x1c8340['_webAudio'] ? _0x550c32['_volume'] = _0x2c462d : _0x1c8340['volume'](_0x2c462d, _0x550c32['_id'], !0x0);
                _0x38db02 && (_0x1c8340['_volume'] = _0x2c462d);
                if (_0xbf2813 < _0x803ae4 && _0x2c462d <= _0xbf2813 || _0xbf2813 > _0x803ae4 && _0x2c462d >= _0xbf2813) clearInterval(_0x550c32['_interval']), _0x550c32['_interval'] = null, _0x550c32['_fadeTo'] = null, _0x1c8340['volume'](_0xbf2813, _0x550c32['_id']), _0x1c8340['_emit']('fade', _0x550c32['_id']);
            }, _0x2d8dbc);
        },
        '_stopFade': function(_0x405168) {
            var _0x1e2988 = this['_soundById'](_0x405168);
            _0x1e2988 && _0x1e2988['_interval'] && (this['_webAudio'] && _0x1e2988['_node']['gain']['cancelScheduledValues'](_0x2f053b['ctx']['currentTime']), clearInterval(_0x1e2988['_interval']), _0x1e2988['_interval'] = null, this['volume'](_0x1e2988['_fadeTo'], _0x405168), _0x1e2988['_fadeTo'] = null, this['_emit']('fade', _0x405168));
            return this;
        },
        'loop': function() {
            var _0x1e88af = arguments,
                _0x447a40, _0x1b481e;
            if (0x0 === _0x1e88af['length']) return this['_loop'];
            if (0x1 === _0x1e88af['length'])
                if ('boolean' === typeof _0x1e88af[0x0]) this['_loop'] = _0x447a40 = _0x1e88af[0x0];
                else return (_0x1e88af = this['_soundById'](parseInt(_0x1e88af[0x0], 0xa))) ? _0x1e88af['_loop'] : !0x1;
            else 0x2 === _0x1e88af['length'] && (_0x447a40 = _0x1e88af[0x0], _0x1b481e = parseInt(_0x1e88af[0x1], 0xa));
            _0x1b481e = this['_getSoundIds'](_0x1b481e);
            for (var _0x37aa2e = 0x0; _0x37aa2e < _0x1b481e['length']; _0x37aa2e++)
                if (_0x1e88af = this['_soundById'](_0x1b481e[_0x37aa2e]))
                    if (_0x1e88af['_loop'] = _0x447a40, this['_webAudio'] && _0x1e88af['_node'] && _0x1e88af['_node']['bufferSource'] && (_0x1e88af['_node']['bufferSource']['loop'] = _0x447a40)) _0x1e88af['_node']['bufferSource']['loopStart'] = _0x1e88af['_start'] || 0x0, _0x1e88af['_node']['bufferSource']['loopEnd'] = _0x1e88af['_stop'];
            return this;
        },
        'rate': function() {
            var _0x2370b8 = this,
                _0x27c16a = arguments,
                _0x264c95, _0x1192be;
            0x0 === _0x27c16a['length'] ? _0x1192be = _0x2370b8['_sounds'][0x0]['_id'] : 0x1 === _0x27c16a['length'] ? 0x0 <= _0x2370b8['_getSoundIds']()['indexOf'](_0x27c16a[0x0]) ? _0x1192be = parseInt(_0x27c16a[0x0], 0xa) : _0x264c95 = parseFloat(_0x27c16a[0x0]) : 0x2 === _0x27c16a['length'] && (_0x264c95 = parseFloat(_0x27c16a[0x0]), _0x1192be = parseInt(_0x27c16a[0x1], 0xa));
            var _0x13a632;
            if ('number' === typeof _0x264c95) {
                if ('loaded' !== _0x2370b8['_state']) return _0x2370b8['_queue']['push']({
                    'event': 'rate',
                    'action': function() {
                        _0x2370b8['rate']['apply'](_0x2370b8, _0x27c16a);
                    }
                }), _0x2370b8;
                'undefined' === typeof _0x1192be && (_0x2370b8['_rate'] = _0x264c95);
                _0x1192be = _0x2370b8['_getSoundIds'](_0x1192be);
                for (var _0x2c988c = 0x0; _0x2c988c < _0x1192be['length']; _0x2c988c++)
                    if (_0x13a632 = _0x2370b8['_soundById'](_0x1192be[_0x2c988c])) {
                        _0x13a632['_rateSeek'] = _0x2370b8['seek'](_0x1192be[_0x2c988c]);
                        _0x13a632['_playStart'] = _0x2370b8['_webAudio'] ? _0x2f053b['ctx']['currentTime'] : _0x13a632['_playStart'];
                        _0x13a632['_rate'] = _0x264c95;
                        _0x2370b8['_webAudio'] && _0x13a632['_node'] && _0x13a632['_node']['bufferSource'] ? _0x13a632['_node']['bufferSource']['playbackRate']['setValueAtTime'](_0x264c95, _0x2f053b['ctx']['currentTime']) : _0x13a632['_node'] && (_0x13a632['_node']['playbackRate'] = _0x264c95);
                        var _0x151517 = _0x2370b8['seek'](_0x1192be[_0x2c988c]),
                            _0x151517 = 0x3e8 * ((_0x2370b8['_sprite'][_0x13a632['_sprite']][0x0] + _0x2370b8['_sprite'][_0x13a632['_sprite']][0x1]) / 0x3e8 - _0x151517) / Math['abs'](_0x13a632['_rate']);
                        if (_0x2370b8['_endTimers'][_0x1192be[_0x2c988c]] || !_0x13a632['_paused']) _0x2370b8['_clearTimer'](_0x1192be[_0x2c988c]), _0x2370b8['_endTimers'][_0x1192be[_0x2c988c]] = setTimeout(_0x2370b8['_ended']['bind'](_0x2370b8, _0x13a632), _0x151517);
                        _0x2370b8['_emit']('rate', _0x13a632['_id']);
                    }
            } else return (_0x13a632 = _0x2370b8['_soundById'](_0x1192be)) ? _0x13a632['_rate'] : _0x2370b8['_rate'];
            return _0x2370b8;
        },
        'seek': function() {
            var _0x46708c = this,
                _0x22a38a = arguments,
                _0x29fa97, _0x5c687c;
            0x0 === _0x22a38a['length'] ? _0x5c687c = _0x46708c['_sounds'][0x0]['_id'] : 0x1 === _0x22a38a['length'] ? 0x0 <= _0x46708c['_getSoundIds']()['indexOf'](_0x22a38a[0x0]) ? _0x5c687c = parseInt(_0x22a38a[0x0], 0xa) : _0x46708c['_sounds']['length'] && (_0x5c687c = _0x46708c['_sounds'][0x0]['_id'], _0x29fa97 = parseFloat(_0x22a38a[0x0])) : 0x2 === _0x22a38a['length'] && (_0x29fa97 = parseFloat(_0x22a38a[0x0]), _0x5c687c = parseInt(_0x22a38a[0x1], 0xa));
            if ('undefined' === typeof _0x5c687c) return _0x46708c;
            if ('loaded' !== _0x46708c['_state']) return _0x46708c['_queue']['push']({
                'event': 'seek',
                'action': function() {
                    _0x46708c['seek']['apply'](_0x46708c, _0x22a38a);
                }
            }), _0x46708c;
            var _0x52af41 = _0x46708c['_soundById'](_0x5c687c);
            if (_0x52af41)
                if ('number' === typeof _0x29fa97 && 0x0 <= _0x29fa97) {
                    var _0xd7b5b2 = _0x46708c['playing'](_0x5c687c);
                    _0xd7b5b2 && _0x46708c['pause'](_0x5c687c, !0x0);
                    _0x52af41['_seek'] = _0x29fa97;
                    _0x52af41['_ended'] = !0x1;
                    _0x46708c['_clearTimer'](_0x5c687c);
                    _0xd7b5b2 && _0x46708c['play'](_0x5c687c, !0x0);
                    !_0x46708c['_webAudio'] && _0x52af41['_node'] && (_0x52af41['_node']['currentTime'] = _0x29fa97);
                    if (_0xd7b5b2 && !_0x46708c['_webAudio']) {
                        var _0x2c7902 = function() {
                            _0x46708c['_playLock'] ? setTimeout(_0x2c7902, 0x0) : _0x46708c['_emit']('seek', _0x5c687c);
                        };
                        setTimeout(_0x2c7902, 0x0);
                    } else _0x46708c['_emit']('seek', _0x5c687c);
                } else return _0x46708c['_webAudio'] ? (_0x29fa97 = _0x46708c['playing'](_0x5c687c) ? _0x2f053b['ctx']['currentTime'] - _0x52af41['_playStart'] : 0x0, _0x52af41['_seek'] + ((_0x52af41['_rateSeek'] ? _0x52af41['_rateSeek'] - _0x52af41['_seek'] : 0x0) + _0x29fa97 * Math['abs'](_0x52af41['_rate']))) : _0x52af41['_node']['currentTime'];
            return _0x46708c;
        },
        'playing': function(_0x542cde) {
            if ('number' === typeof _0x542cde) return (_0x542cde = this['_soundById'](_0x542cde)) ? !_0x542cde['_paused'] : !0x1;
            for (_0x542cde = 0x0; _0x542cde < this['_sounds']['length']; _0x542cde++)
                if (!this['_sounds'][_0x542cde]['_paused']) return !0x0;
            return !0x1;
        },
        'duration': function(_0x19dfcf) {
            var _0x5802cd = this['_duration'];
            (_0x19dfcf = this['_soundById'](_0x19dfcf)) && (_0x5802cd = this['_sprite'][_0x19dfcf['_sprite']][0x1] / 0x3e8);
            return _0x5802cd;
        },
        'state': function() {
            return this['_state'];
        },
        'unload': function() {
            for (var _0x4912db = this['_sounds'], _0x52fe67 = 0x0; _0x52fe67 < _0x4912db['length']; _0x52fe67++) _0x4912db[_0x52fe67]['_paused'] || this['stop'](_0x4912db[_0x52fe67]['_id']), this['_webAudio'] || (/MSIE |Trident\// ['test'](_0x2f053b['_navigator'] && _0x2f053b['_navigator']['userAgent']) || (_0x4912db[_0x52fe67]['_node']['src'] = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA'), _0x4912db[_0x52fe67]['_node']['removeEventListener']('error', _0x4912db[_0x52fe67]['_errorFn'], !0x1), _0x4912db[_0x52fe67]['_node']['removeEventListener'](_0x2f053b['_canPlayEvent'], _0x4912db[_0x52fe67]['_loadFn'], !0x1)), delete _0x4912db[_0x52fe67]['_node'], this['_clearTimer'](_0x4912db[_0x52fe67]['_id']);
            _0x52fe67 = _0x2f053b['_howls']['indexOf'](this);
            0x0 <= _0x52fe67 && _0x2f053b['_howls']['splice'](_0x52fe67, 0x1);
            _0x4912db = !0x0;
            for (_0x52fe67 = 0x0; _0x52fe67 < _0x2f053b['_howls']['length']; _0x52fe67++)
                if (_0x2f053b['_howls'][_0x52fe67]['_src'] === this['_src']) {
                    _0x4912db = !0x1;
                    break;
                } _0x3496ee && _0x4912db && delete _0x3496ee[this['_src']];
            _0x2f053b['noAudio'] = !0x1;
            this['_state'] = 'unloaded';
            this['_sounds'] = [];
            return null;
        },
        'on': function(_0x282fb0, _0x486573, _0x5f5862, _0x33897f) {
            _0x282fb0 = this['_on' + _0x282fb0];
            'function' === typeof _0x486573 && _0x282fb0['push'](_0x33897f ? {
                'id': _0x5f5862,
                'fn': _0x486573,
                'once': _0x33897f
            } : {
                'id': _0x5f5862,
                'fn': _0x486573
            });
            return this;
        },
        'off': function(_0x36ffe0, _0x18cf71, _0x582e7e) {
            var _0x5d2e87 = this['_on' + _0x36ffe0],
                _0x15d4ed = 0x0;
            'number' === typeof _0x18cf71 && (_0x582e7e = _0x18cf71, _0x18cf71 = null);
            if (_0x18cf71 || _0x582e7e)
                for (_0x15d4ed = 0x0; _0x15d4ed < _0x5d2e87['length']; _0x15d4ed++) {
                    if (_0x36ffe0 = _0x582e7e === _0x5d2e87[_0x15d4ed]['id'], _0x18cf71 === _0x5d2e87[_0x15d4ed]['fn'] && _0x36ffe0 || !_0x18cf71 && _0x36ffe0) {
                        _0x5d2e87['splice'](_0x15d4ed, 0x1);
                        break;
                    }
                } else if (_0x36ffe0) this['_on' + _0x36ffe0] = [];
                else {
                    _0x18cf71 = Object['keys'](this);
                    for (_0x15d4ed = 0x0; _0x15d4ed < _0x18cf71['length']; _0x15d4ed++) 0x0 === _0x18cf71[_0x15d4ed]['indexOf']('_on') && Array['isArray'](this[_0x18cf71[_0x15d4ed]]) && (this[_0x18cf71[_0x15d4ed]] = []);
                } return this;
        },
        'once': function(_0x278c42, _0xf57947, _0x348456) {
            this['on'](_0x278c42, _0xf57947, _0x348456, 0x1);
            return this;
        },
        '_emit': function(_0x58b90e, _0x1eda8a, _0x3b978e) {
            for (var _0x42e72e = this['_on' + _0x58b90e], _0x5881d1 = _0x42e72e['length'] - 0x1; 0x0 <= _0x5881d1; _0x5881d1--)
                if (!_0x42e72e[_0x5881d1]['id'] || _0x42e72e[_0x5881d1]['id'] === _0x1eda8a || 'load' === _0x58b90e) setTimeout(function(_0x367f5e) {
                    _0x367f5e['call'](this, _0x1eda8a, _0x3b978e);
                } ['bind'](this, _0x42e72e[_0x5881d1]['fn']), 0x0), _0x42e72e[_0x5881d1]['once'] && this['off'](_0x58b90e, _0x42e72e[_0x5881d1]['fn'], _0x42e72e[_0x5881d1]['id']);
            this['_loadQueue'](_0x58b90e);
            return this;
        },
        '_loadQueue': function(_0x5b6011) {
            if (0x0 < this['_queue']['length']) {
                var _0x1f84b1 = this['_queue'][0x0];
                _0x1f84b1['event'] === _0x5b6011 && (this['_queue']['shift'](), this['_loadQueue']());
                _0x5b6011 || _0x1f84b1['action']();
            }
            return this;
        },
        '_ended': function(_0x415ddb) {
            var _0x45bd1d = _0x415ddb['_sprite'];
            if (!this['_webAudio'] && _0x415ddb['_node'] && !_0x415ddb['_node']['paused'] && !_0x415ddb['_node']['ended'] && _0x415ddb['_node']['currentTime'] < _0x415ddb['_stop']) return setTimeout(this['_ended']['bind'](this, _0x415ddb), 0x64), this;
            _0x45bd1d = !(!_0x415ddb['_loop'] && !this['_sprite'][_0x45bd1d][0x2]);
            this['_emit']('end', _0x415ddb['_id']);
            !this['_webAudio'] && _0x45bd1d && this['stop'](_0x415ddb['_id'], !0x0)['play'](_0x415ddb['_id']);
            if (this['_webAudio'] && _0x45bd1d) {
                this['_emit']('play', _0x415ddb['_id']);
                _0x415ddb['_seek'] = _0x415ddb['_start'] || 0x0;
                _0x415ddb['_rateSeek'] = 0x0;
                _0x415ddb['_playStart'] = _0x2f053b['ctx']['currentTime'];
                var _0xb85edf = 0x3e8 * (_0x415ddb['_stop'] - _0x415ddb['_start']) / Math['abs'](_0x415ddb['_rate']);
                this['_endTimers'][_0x415ddb['_id']] = setTimeout(this['_ended']['bind'](this, _0x415ddb), _0xb85edf);
            }
            this['_webAudio'] && !_0x45bd1d && (_0x415ddb['_paused'] = !0x0, _0x415ddb['_ended'] = !0x0, _0x415ddb['_seek'] = _0x415ddb['_start'] || 0x0, _0x415ddb['_rateSeek'] = 0x0, this['_clearTimer'](_0x415ddb['_id']), this['_cleanBuffer'](_0x415ddb['_node']), _0x2f053b['_autoSuspend']());
            !this['_webAudio'] && !_0x45bd1d && this['stop'](_0x415ddb['_id'], !0x0);
            return this;
        },
        '_clearTimer': function(_0x35ffa4) {
            if (this['_endTimers'][_0x35ffa4]) {
                if ('function' !== typeof this['_endTimers'][_0x35ffa4]) clearTimeout(this['_endTimers'][_0x35ffa4]);
                else {
                    var _0xcf5d2e = this['_soundById'](_0x35ffa4);
                    _0xcf5d2e && _0xcf5d2e['_node'] && _0xcf5d2e['_node']['removeEventListener']('ended', this['_endTimers'][_0x35ffa4], !0x1);
                }
                delete this['_endTimers'][_0x35ffa4];
            }
            return this;
        },
        '_soundById': function(_0x361f15) {
            for (var _0x4010a2 = 0x0; _0x4010a2 < this['_sounds']['length']; _0x4010a2++)
                if (_0x361f15 === this['_sounds'][_0x4010a2]['_id']) return this['_sounds'][_0x4010a2];
            return null;
        },
        '_inactiveSound': function() {
            this['_drain']();
            for (var _0x34a956 = 0x0; _0x34a956 < this['_sounds']['length']; _0x34a956++)
                if (this['_sounds'][_0x34a956]['_ended']) return this['_sounds'][_0x34a956]['reset']();
            return new _0x2324e6(this);
        },
        '_drain': function() {
            var _0x59d358 = this['_pool'],
                _0x3a2d2f = 0x0,
                _0x28d5b9 = 0x0;
            if (!(this['_sounds']['length'] < _0x59d358)) {
                for (_0x28d5b9 = 0x0; _0x28d5b9 < this['_sounds']['length']; _0x28d5b9++) this['_sounds'][_0x28d5b9]['_ended'] && _0x3a2d2f++;
                for (_0x28d5b9 = this['_sounds']['length'] - 0x1; 0x0 <= _0x28d5b9 && !(_0x3a2d2f <= _0x59d358); _0x28d5b9--) this['_sounds'][_0x28d5b9]['_ended'] && (this['_webAudio'] && this['_sounds'][_0x28d5b9]['_node'] && this['_sounds'][_0x28d5b9]['_node']['disconnect'](0x0), this['_sounds']['splice'](_0x28d5b9, 0x1), _0x3a2d2f--);
            }
        },
        '_getSoundIds': function(_0xb8f208) {
            if ('undefined' === typeof _0xb8f208) {
                _0xb8f208 = [];
                for (var _0x225685 = 0x0; _0x225685 < this['_sounds']['length']; _0x225685++) _0xb8f208['push'](this['_sounds'][_0x225685]['_id']);
                return _0xb8f208;
            }
            return [_0xb8f208];
        },
        '_refreshBuffer': function(_0x9b6d00) {
            _0x9b6d00['_node']['bufferSource'] = _0x2f053b['ctx']['createBufferSource']();
            _0x9b6d00['_node']['bufferSource']['buffer'] = _0x3496ee[this['_src']];
            _0x9b6d00['_panner'] ? _0x9b6d00['_node']['bufferSource']['connect'](_0x9b6d00['_panner']) : _0x9b6d00['_node']['bufferSource']['connect'](_0x9b6d00['_node']);
            if (_0x9b6d00['_node']['bufferSource']['loop'] = _0x9b6d00['_loop']) _0x9b6d00['_node']['bufferSource']['loopStart'] = _0x9b6d00['_start'] || 0x0, _0x9b6d00['_node']['bufferSource']['loopEnd'] = _0x9b6d00['_stop'];
            _0x9b6d00['_node']['bufferSource']['playbackRate']['setValueAtTime'](_0x9b6d00['_rate'], _0x2f053b['ctx']['currentTime']);
            return this;
        },
        '_cleanBuffer': function(_0x4f32fc) {
            if (_0x2f053b['_scratchBuffer'] && _0x4f32fc['bufferSource']) {
                _0x4f32fc['bufferSource']['onended'] = null;
                _0x4f32fc['bufferSource']['disconnect'](0x0);
                try {
                    _0x4f32fc['bufferSource']['buffer'] = _0x2f053b['_scratchBuffer'];
                } catch (_0x1bfb20) {}
            }
            _0x4f32fc['bufferSource'] = null;
            return this;
        }
    };
    var _0x2324e6 = function(_0x22f188) {
        this['_parent'] = _0x22f188;
        this['init']();
    };
    _0x2324e6['prototype'] = {
        'init': function() {
            var _0x4bef6b = this['_parent'];
            this['_muted'] = _0x4bef6b['_muted'];
            this['_loop'] = _0x4bef6b['_loop'];
            this['_volume'] = _0x4bef6b['_volume'];
            this['_rate'] = _0x4bef6b['_rate'];
            this['_seek'] = 0x0;
            this['_ended'] = this['_paused'] = !0x0;
            this['_sprite'] = '__default';
            this['_id'] = ++_0x2f053b['_counter'];
            _0x4bef6b['_sounds']['push'](this);
            this['create']();
            return this;
        },
        'create': function() {
            var _0xac6cc7 = this['_parent'],
                _0x3954f3 = _0x2f053b['_muted'] || this['_muted'] || this['_parent']['_muted'] ? 0x0 : this['_volume'];
            _0xac6cc7['_webAudio'] ? (this['_node'] = 'undefined' === typeof _0x2f053b['ctx']['createGain'] ? _0x2f053b['ctx']['createGainNode']() : _0x2f053b['ctx']['createGain'](), this['_node']['gain']['setValueAtTime'](_0x3954f3, _0x2f053b['ctx']['currentTime']), this['_node']['paused'] = !0x0, this['_node']['connect'](_0x2f053b['masterGain'])) : (this['_node'] = new Audio(), this['_errorFn'] = this['_errorListener']['bind'](this), this['_node']['addEventListener']('error', this['_errorFn'], !0x1), this['_loadFn'] = this['_loadListener']['bind'](this), this['_node']['addEventListener'](_0x2f053b['_canPlayEvent'], this['_loadFn'], !0x1), this['_node']['src'] = _0xac6cc7['_src'], this['_node']['preload'] = 'auto', this['_node']['volume'] = _0x3954f3 * _0x2f053b['volume'](), this['_node']['load']());
            return this;
        },
        'reset': function() {
            var _0x451319 = this['_parent'];
            this['_muted'] = _0x451319['_muted'];
            this['_loop'] = _0x451319['_loop'];
            this['_volume'] = _0x451319['_volume'];
            this['_rate'] = _0x451319['_rate'];
            this['_rateSeek'] = this['_seek'] = 0x0;
            this['_ended'] = this['_paused'] = !0x0;
            this['_sprite'] = '__default';
            this['_id'] = ++_0x2f053b['_counter'];
            return this;
        },
        '_errorListener': function() {
            this['_parent']['_emit']('loaderror', this['_id'], this['_node']['error'] ? this['_node']['error']['code'] : 0x0);
            this['_node']['removeEventListener']('error', this['_errorFn'], !0x1);
        },
        '_loadListener': function() {
            var _0x690991 = this['_parent'];
            _0x690991['_duration'] = Math['ceil'](0xa * this['_node']['duration']) / 0xa;
            0x0 === Object['keys'](_0x690991['_sprite'])['length'] && (_0x690991['_sprite'] = {
                '__default': [0x0, 0x3e8 * _0x690991['_duration']]
            });
            'loaded' !== _0x690991['_state'] && (_0x690991['_state'] = 'loaded', _0x690991['_emit']('load'), _0x690991['_loadQueue']());
            this['_node']['removeEventListener'](_0x2f053b['_canPlayEvent'], this['_loadFn'], !0x1);
        }
    };
    var _0x3496ee = {},
        _0x4a2e7b = function(_0x441b5f, _0x45bd0b) {
            _0x2f053b['ctx']['decodeAudioData'](_0x441b5f, function(_0x3fca21) {
                _0x3fca21 && 0x0 < _0x45bd0b['_sounds']['length'] && (_0x3496ee[_0x45bd0b['_src']] = _0x3fca21, _0x293ae2(_0x45bd0b, _0x3fca21));
            }, function() {
                _0x45bd0b['_emit']('loaderror', null, 'Decoding\x20audio\x20data\x20failed.');
            });
        },
        _0x293ae2 = function(_0x50484d, _0x5f1fb4) {
            _0x5f1fb4 && !_0x50484d['_duration'] && (_0x50484d['_duration'] = _0x5f1fb4['duration']);
            0x0 === Object['keys'](_0x50484d['_sprite'])['length'] && (_0x50484d['_sprite'] = {
                '__default': [0x0, 0x3e8 * _0x50484d['_duration']]
            });
            'loaded' !== _0x50484d['_state'] && (_0x50484d['_state'] = 'loaded', _0x50484d['_emit']('load'), _0x50484d['_loadQueue']());
        },
        _0x3373e8 = function() {
            try {
                'undefined' !== typeof AudioContext ? _0x2f053b['ctx'] = new AudioContext() : 'undefined' !== typeof webkitAudioContext ? _0x2f053b['ctx'] = new webkitAudioContext() : _0x2f053b['usingWebAudio'] = !0x1;
            } catch (_0x4baa40) {
                _0x2f053b['usingWebAudio'] = !0x1;
            }
            var _0xe28957 = /iP(hone|od|ad)/ ['test'](_0x2f053b['_navigator'] && _0x2f053b['_navigator']['platform']),
                _0x1d74e0 = _0x2f053b['_navigator'] && _0x2f053b['_navigator']['appVersion']['match'](/OS (\d+)_(\d+)_?(\d+)?/),
                _0x1d74e0 = _0x1d74e0 ? parseInt(_0x1d74e0[0x1], 0xa) : null;
            if (_0xe28957 && _0x1d74e0 && 0x9 > _0x1d74e0 && (_0xe28957 = /safari/ ['test'](_0x2f053b['_navigator'] && _0x2f053b['_navigator']['userAgent']['toLowerCase']()), _0x2f053b['_navigator'] && _0x2f053b['_navigator']['standalone'] && !_0xe28957 || _0x2f053b['_navigator'] && !_0x2f053b['_navigator']['standalone'] && !_0xe28957)) _0x2f053b['usingWebAudio'] = !0x1;
            _0x2f053b['usingWebAudio'] && (_0x2f053b['masterGain'] = 'undefined' === typeof _0x2f053b['ctx']['createGain'] ? _0x2f053b['ctx']['createGainNode']() : _0x2f053b['ctx']['createGain'](), _0x2f053b['masterGain']['gain']['setValueAtTime'](_0x2f053b['_muted'] ? 0x0 : 0x1, _0x2f053b['ctx']['currentTime']), _0x2f053b['masterGain']['connect'](_0x2f053b['ctx']['destination']));
            _0x2f053b['_setup']();
        };
    'function' === typeof define && define['amd'] && define([], function() {
        return {
            'Howler': _0x2f053b,
            'Howl': _0x37ca04
        };
    });
    'undefined' !== typeof exports && (exports['Howler'] = _0x2f053b, exports['Howl'] = _0x37ca04);
    'undefined' !== typeof window ? (window['HowlerGlobal'] = _0x4d7a5e, window['Howler'] = _0x2f053b, window['Howl'] = _0x37ca04, window['Sound'] = _0x2324e6) : 'undefined' !== typeof global && (global['HowlerGlobal'] = _0x4d7a5e, global['Howler'] = _0x2f053b, global['Howl'] = _0x37ca04, global['Sound'] = _0x2324e6);
}());
(function() {
    HowlerGlobal['prototype']['_pos'] = [0x0, 0x0, 0x0];
    HowlerGlobal['prototype']['_orientation'] = [0x0, 0x0, -0x1, 0x0, 0x1, 0x0];
    HowlerGlobal['prototype']['stereo'] = function(_0x1c8494) {
        if (!this['ctx'] || !this['ctx']['listener']) return this;
        for (var _0x9625a7 = this['_howls']['length'] - 0x1; 0x0 <= _0x9625a7; _0x9625a7--) this['_howls'][_0x9625a7]['stereo'](_0x1c8494);
        return this;
    };
    HowlerGlobal['prototype']['pos'] = function(_0x250509, _0x17c125, _0x4ccb5d) {
        if (!this['ctx'] || !this['ctx']['listener']) return this;
        _0x17c125 = 'number' !== typeof _0x17c125 ? this['_pos'][0x1] : _0x17c125;
        _0x4ccb5d = 'number' !== typeof _0x4ccb5d ? this['_pos'][0x2] : _0x4ccb5d;
        if ('number' === typeof _0x250509) this['_pos'] = [_0x250509, _0x17c125, _0x4ccb5d], 'undefined' !== typeof this['ctx']['listener']['positionX'] ? (this['ctx']['listener']['positionX']['setTargetAtTime'](this['_pos'][0x0], Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['positionY']['setTargetAtTime'](this['_pos'][0x1], Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['positionZ']['setTargetAtTime'](this['_pos'][0x2], Howler['ctx']['currentTime'], 0.1)) : this['ctx']['listener']['setPosition'](this['_pos'][0x0], this['_pos'][0x1], this['_pos'][0x2]);
        else return this['_pos'];
        return this;
    };
    HowlerGlobal['prototype']['orientation'] = function(_0x57cfee, _0x479518, _0x5b70b1, _0x5c46d6, _0x54a24e, _0x2329c2) {
        if (!this['ctx'] || !this['ctx']['listener']) return this;
        var _0x5b7fbc = this['_orientation'];
        _0x479518 = 'number' !== typeof _0x479518 ? _0x5b7fbc[0x1] : _0x479518;
        _0x5b70b1 = 'number' !== typeof _0x5b70b1 ? _0x5b7fbc[0x2] : _0x5b70b1;
        _0x5c46d6 = 'number' !== typeof _0x5c46d6 ? _0x5b7fbc[0x3] : _0x5c46d6;
        _0x54a24e = 'number' !== typeof _0x54a24e ? _0x5b7fbc[0x4] : _0x54a24e;
        _0x2329c2 = 'number' !== typeof _0x2329c2 ? _0x5b7fbc[0x5] : _0x2329c2;
        if ('number' === typeof _0x57cfee) this['_orientation'] = [_0x57cfee, _0x479518, _0x5b70b1, _0x5c46d6, _0x54a24e, _0x2329c2], 'undefined' !== typeof this['ctx']['listener']['forwardX'] ? (this['ctx']['listener']['forwardX']['setTargetAtTime'](_0x57cfee, Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['forwardY']['setTargetAtTime'](_0x479518, Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['forwardZ']['setTargetAtTime'](_0x5b70b1, Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['upX']['setTargetAtTime'](_0x57cfee, Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['upY']['setTargetAtTime'](_0x479518, Howler['ctx']['currentTime'], 0.1), this['ctx']['listener']['upZ']['setTargetAtTime'](_0x5b70b1, Howler['ctx']['currentTime'], 0.1)) : this['ctx']['listener']['setOrientation'](_0x57cfee, _0x479518, _0x5b70b1, _0x5c46d6, _0x54a24e, _0x2329c2);
        else return _0x5b7fbc;
        return this;
    };
    var _0x5951f0 = Howl['prototype']['init'];
    Howl['prototype']['init'] = function(_0xef1061) {
        this['_orientation'] = _0xef1061['orientation'] || [0x1, 0x0, 0x0];
        this['_stereo'] = _0xef1061['stereo'] || null;
        this['_pos'] = _0xef1061['pos'] || null;
        this['_pannerAttr'] = {
            'coneInnerAngle': 'undefined' !== typeof _0xef1061['coneInnerAngle'] ? _0xef1061['coneInnerAngle'] : 0x168,
            'coneOuterAngle': 'undefined' !== typeof _0xef1061['coneOuterAngle'] ? _0xef1061['coneOuterAngle'] : 0x168,
            'coneOuterGain': 'undefined' !== typeof _0xef1061['coneOuterGain'] ? _0xef1061['coneOuterGain'] : 0x0,
            'distanceModel': 'undefined' !== typeof _0xef1061['distanceModel'] ? _0xef1061['distanceModel'] : 'inverse',
            'maxDistance': 'undefined' !== typeof _0xef1061['maxDistance'] ? _0xef1061['maxDistance'] : 0x2710,
            'panningModel': 'undefined' !== typeof _0xef1061['panningModel'] ? _0xef1061['panningModel'] : 'HRTF',
            'refDistance': 'undefined' !== typeof _0xef1061['refDistance'] ? _0xef1061['refDistance'] : 0x1,
            'rolloffFactor': 'undefined' !== typeof _0xef1061['rolloffFactor'] ? _0xef1061['rolloffFactor'] : 0x1
        };
        this['_onstereo'] = _0xef1061['onstereo'] ? [{
            'fn': _0xef1061['onstereo']
        }] : [];
        this['_onpos'] = _0xef1061['onpos'] ? [{
            'fn': _0xef1061['onpos']
        }] : [];
        this['_onorientation'] = _0xef1061['onorientation'] ? [{
            'fn': _0xef1061['onorientation']
        }] : [];
        return _0x5951f0['call'](this, _0xef1061);
    };
    Howl['prototype']['stereo'] = function(_0x1c30ed, _0xd75961) {
        var _0x554c64 = this;
        if (!_0x554c64['_webAudio']) return _0x554c64;
        if ('loaded' !== _0x554c64['_state']) return _0x554c64['_queue']['push']({
            'event': 'stereo',
            'action': function() {
                _0x554c64['stereo'](_0x1c30ed, _0xd75961);
            }
        }), _0x554c64;
        var _0x521491 = 'undefined' === typeof Howler['ctx']['createStereoPanner'] ? 'spatial' : 'stereo';
        if ('undefined' === typeof _0xd75961)
            if ('number' === typeof _0x1c30ed) _0x554c64['_stereo'] = _0x1c30ed, _0x554c64['_pos'] = [_0x1c30ed, 0x0, 0x0];
            else return _0x554c64['_stereo'];
        for (var _0x3de18a = _0x554c64['_getSoundIds'](_0xd75961), _0x56fd79 = 0x0; _0x56fd79 < _0x3de18a['length']; _0x56fd79++) {
            var _0x1bb326 = _0x554c64['_soundById'](_0x3de18a[_0x56fd79]);
            if (_0x1bb326)
                if ('number' === typeof _0x1c30ed) _0x1bb326['_stereo'] = _0x1c30ed, _0x1bb326['_pos'] = [_0x1c30ed, 0x0, 0x0], _0x1bb326['_node'] && (_0x1bb326['_pannerAttr']['panningModel'] = 'equalpower', (!_0x1bb326['_panner'] || !_0x1bb326['_panner']['pan']) && _0x1a28cf(_0x1bb326, _0x521491), 'spatial' === _0x521491 ? 'undefined' !== typeof _0x1bb326['_panner']['positionX'] ? (_0x1bb326['_panner']['positionX']['setValueAtTime'](_0x1c30ed, Howler['ctx']['currentTime']), _0x1bb326['_panner']['positionY']['setValueAtTime'](0x0, Howler['ctx']['currentTime']), _0x1bb326['_panner']['positionZ']['setValueAtTime'](0x0, Howler['ctx']['currentTime'])) : _0x1bb326['_panner']['setPosition'](_0x1c30ed, 0x0, 0x0) : _0x1bb326['_panner']['pan']['setValueAtTime'](_0x1c30ed, Howler['ctx']['currentTime'])), _0x554c64['_emit']('stereo', _0x1bb326['_id']);
                else return _0x1bb326['_stereo'];
        }
        return _0x554c64;
    };
    Howl['prototype']['pos'] = function(_0xdf7f59, _0x3d0faf, _0x26eb3b, _0x2ec930) {
        var _0x432d30 = this;
        if (!_0x432d30['_webAudio']) return _0x432d30;
        if ('loaded' !== _0x432d30['_state']) return _0x432d30['_queue']['push']({
            'event': 'pos',
            'action': function() {
                _0x432d30['pos'](_0xdf7f59, _0x3d0faf, _0x26eb3b, _0x2ec930);
            }
        }), _0x432d30;
        _0x3d0faf = 'number' !== typeof _0x3d0faf ? 0x0 : _0x3d0faf;
        _0x26eb3b = 'number' !== typeof _0x26eb3b ? -0.5 : _0x26eb3b;
        if ('undefined' === typeof _0x2ec930)
            if ('number' === typeof _0xdf7f59) _0x432d30['_pos'] = [_0xdf7f59, _0x3d0faf, _0x26eb3b];
            else return _0x432d30['_pos'];
        for (var _0x5f1850 = _0x432d30['_getSoundIds'](_0x2ec930), _0x295e63 = 0x0; _0x295e63 < _0x5f1850['length']; _0x295e63++) {
            var _0x161f59 = _0x432d30['_soundById'](_0x5f1850[_0x295e63]);
            if (_0x161f59)
                if ('number' === typeof _0xdf7f59) _0x161f59['_pos'] = [_0xdf7f59, _0x3d0faf, _0x26eb3b], _0x161f59['_node'] && ((!_0x161f59['_panner'] || _0x161f59['_panner']['pan']) && _0x1a28cf(_0x161f59, 'spatial'), 'undefined' !== typeof _0x161f59['_panner']['positionX'] ? (_0x161f59['_panner']['positionX']['setValueAtTime'](_0xdf7f59, Howler['ctx']['currentTime']), _0x161f59['_panner']['positionY']['setValueAtTime'](_0x3d0faf, Howler['ctx']['currentTime']), _0x161f59['_panner']['positionZ']['setValueAtTime'](_0x26eb3b, Howler['ctx']['currentTime'])) : _0x161f59['_panner']['setOrientation'](_0xdf7f59, _0x3d0faf, _0x26eb3b)), _0x432d30['_emit']('pos', _0x161f59['_id']);
                else return _0x161f59['_pos'];
        }
        return _0x432d30;
    };
    Howl['prototype']['orientation'] = function(_0x104874, _0x484461, _0x5202aa, _0x3208ac) {
        var _0xd16dff = this;
        if (!_0xd16dff['_webAudio']) return _0xd16dff;
        if ('loaded' !== _0xd16dff['_state']) return _0xd16dff['_queue']['push']({
            'event': 'orientation',
            'action': function() {
                _0xd16dff['orientation'](_0x104874, _0x484461, _0x5202aa, _0x3208ac);
            }
        }), _0xd16dff;
        _0x484461 = 'number' !== typeof _0x484461 ? _0xd16dff['_orientation'][0x1] : _0x484461;
        _0x5202aa = 'number' !== typeof _0x5202aa ? _0xd16dff['_orientation'][0x2] : _0x5202aa;
        if ('undefined' === typeof _0x3208ac)
            if ('number' === typeof _0x104874) _0xd16dff['_orientation'] = [_0x104874, _0x484461, _0x5202aa];
            else return _0xd16dff['_orientation'];
        for (var _0x5316f9 = _0xd16dff['_getSoundIds'](_0x3208ac), _0x4a0fa2 = 0x0; _0x4a0fa2 < _0x5316f9['length']; _0x4a0fa2++) {
            var _0x48baec = _0xd16dff['_soundById'](_0x5316f9[_0x4a0fa2]);
            if (_0x48baec)
                if ('number' === typeof _0x104874) _0x48baec['_orientation'] = [_0x104874, _0x484461, _0x5202aa], _0x48baec['_node'] && (_0x48baec['_panner'] || (_0x48baec['_pos'] || (_0x48baec['_pos'] = _0xd16dff['_pos'] || [0x0, 0x0, -0.5]), _0x1a28cf(_0x48baec, 'spatial')), _0x48baec['_panner']['orientationX']['setValueAtTime'](_0x104874, Howler['ctx']['currentTime']), _0x48baec['_panner']['orientationY']['setValueAtTime'](_0x484461, Howler['ctx']['currentTime']), _0x48baec['_panner']['orientationZ']['setValueAtTime'](_0x5202aa, Howler['ctx']['currentTime'])), _0xd16dff['_emit']('orientation', _0x48baec['_id']);
                else return _0x48baec['_orientation'];
        }
        return _0xd16dff;
    };
    Howl['prototype']['pannerAttr'] = function() {
        var _0x593e87 = arguments,
            _0x555974, _0x59c2dd;
        if (!this['_webAudio']) return this;
        if (0x0 === _0x593e87['length']) return this['_pannerAttr'];
        if (0x1 === _0x593e87['length'])
            if ('object' === typeof _0x593e87[0x0]) _0x555974 = _0x593e87[0x0], 'undefined' === typeof _0x59c2dd && (_0x555974['pannerAttr'] || (_0x555974['pannerAttr'] = {
                'coneInnerAngle': _0x555974['coneInnerAngle'],
                'coneOuterAngle': _0x555974['coneOuterAngle'],
                'coneOuterGain': _0x555974['coneOuterGain'],
                'distanceModel': _0x555974['distanceModel'],
                'maxDistance': _0x555974['maxDistance'],
                'refDistance': _0x555974['refDistance'],
                'rolloffFactor': _0x555974['rolloffFactor'],
                'panningModel': _0x555974['panningModel']
            }), this['_pannerAttr'] = {
                'coneInnerAngle': 'undefined' !== typeof _0x555974['pannerAttr']['coneInnerAngle'] ? _0x555974['pannerAttr']['coneInnerAngle'] : this['_coneInnerAngle'],
                'coneOuterAngle': 'undefined' !== typeof _0x555974['pannerAttr']['coneOuterAngle'] ? _0x555974['pannerAttr']['coneOuterAngle'] : this['_coneOuterAngle'],
                'coneOuterGain': 'undefined' !== typeof _0x555974['pannerAttr']['coneOuterGain'] ? _0x555974['pannerAttr']['coneOuterGain'] : this['_coneOuterGain'],
                'distanceModel': 'undefined' !== typeof _0x555974['pannerAttr']['distanceModel'] ? _0x555974['pannerAttr']['distanceModel'] : this['_distanceModel'],
                'maxDistance': 'undefined' !== typeof _0x555974['pannerAttr']['maxDistance'] ? _0x555974['pannerAttr']['maxDistance'] : this['_maxDistance'],
                'refDistance': 'undefined' !== typeof _0x555974['pannerAttr']['refDistance'] ? _0x555974['pannerAttr']['refDistance'] : this['_refDistance'],
                'rolloffFactor': 'undefined' !== typeof _0x555974['pannerAttr']['rolloffFactor'] ? _0x555974['pannerAttr']['rolloffFactor'] : this['_rolloffFactor'],
                'panningModel': 'undefined' !== typeof _0x555974['pannerAttr']['panningModel'] ? _0x555974['pannerAttr']['panningModel'] : this['_panningModel']
            });
            else return (_0x593e87 = this['_soundById'](parseInt(_0x593e87[0x0], 0xa))) ? _0x593e87['_pannerAttr'] : this['_pannerAttr'];
        else 0x2 === _0x593e87['length'] && (_0x555974 = _0x593e87[0x0], _0x59c2dd = parseInt(_0x593e87[0x1], 0xa));
        _0x59c2dd = this['_getSoundIds'](_0x59c2dd);
        for (var _0x8ccaf1 = 0x0; _0x8ccaf1 < _0x59c2dd['length']; _0x8ccaf1++)
            if (_0x593e87 = this['_soundById'](_0x59c2dd[_0x8ccaf1])) {
                var _0x24da5b = _0x593e87['_pannerAttr'],
                    _0x24da5b = {
                        'coneInnerAngle': 'undefined' !== typeof _0x555974['coneInnerAngle'] ? _0x555974['coneInnerAngle'] : _0x24da5b['coneInnerAngle'],
                        'coneOuterAngle': 'undefined' !== typeof _0x555974['coneOuterAngle'] ? _0x555974['coneOuterAngle'] : _0x24da5b['coneOuterAngle'],
                        'coneOuterGain': 'undefined' !== typeof _0x555974['coneOuterGain'] ? _0x555974['coneOuterGain'] : _0x24da5b['coneOuterGain'],
                        'distanceModel': 'undefined' !== typeof _0x555974['distanceModel'] ? _0x555974['distanceModel'] : _0x24da5b['distanceModel'],
                        'maxDistance': 'undefined' !== typeof _0x555974['maxDistance'] ? _0x555974['maxDistance'] : _0x24da5b['maxDistance'],
                        'refDistance': 'undefined' !== typeof _0x555974['refDistance'] ? _0x555974['refDistance'] : _0x24da5b['refDistance'],
                        'rolloffFactor': 'undefined' !== typeof _0x555974['rolloffFactor'] ? _0x555974['rolloffFactor'] : _0x24da5b['rolloffFactor'],
                        'panningModel': 'undefined' !== typeof _0x555974['panningModel'] ? _0x555974['panningModel'] : _0x24da5b['panningModel']
                    },
                    _0x30c633 = _0x593e87['_panner'];
                _0x30c633 ? (_0x30c633['coneInnerAngle'] = _0x24da5b['coneInnerAngle'], _0x30c633['coneOuterAngle'] = _0x24da5b['coneOuterAngle'], _0x30c633['coneOuterGain'] = _0x24da5b['coneOuterGain'], _0x30c633['distanceModel'] = _0x24da5b['distanceModel'], _0x30c633['maxDistance'] = _0x24da5b['maxDistance'], _0x30c633['refDistance'] = _0x24da5b['refDistance'], _0x30c633['rolloffFactor'] = _0x24da5b['rolloffFactor'], _0x30c633['panningModel'] = _0x24da5b['panningModel']) : (_0x593e87['_pos'] || (_0x593e87['_pos'] = this['_pos'] || [0x0, 0x0, -0.5]), _0x1a28cf(_0x593e87, 'spatial'));
            } return this;
    };
    var _0x162620 = Sound['prototype']['init'];
    Sound['prototype']['init'] = function() {
        var _0x326c8b = this['_parent'];
        this['_orientation'] = _0x326c8b['_orientation'];
        this['_stereo'] = _0x326c8b['_stereo'];
        this['_pos'] = _0x326c8b['_pos'];
        this['_pannerAttr'] = _0x326c8b['_pannerAttr'];
        _0x162620['call'](this);
        this['_stereo'] ? _0x326c8b['stereo'](this['_stereo']) : this['_pos'] && _0x326c8b['pos'](this['_pos'][0x0], this['_pos'][0x1], this['_pos'][0x2], this['_id']);
    };
    var _0x4d4cae = Sound['prototype']['reset'];
    Sound['prototype']['reset'] = function() {
        var _0x40fc8d = this['_parent'];
        this['_orientation'] = _0x40fc8d['_orientation'];
        this['_stereo'] = _0x40fc8d['_stereo'];
        this['_pos'] = _0x40fc8d['_pos'];
        this['_pannerAttr'] = _0x40fc8d['_pannerAttr'];
        this['_stereo'] ? _0x40fc8d['stereo'](this['_stereo']) : this['_pos'] ? _0x40fc8d['pos'](this['_pos'][0x0], this['_pos'][0x1], this['_pos'][0x2], this['_id']) : this['_panner'] && (this['_panner']['disconnect'](0x0), this['_panner'] = void 0x0, _0x40fc8d['_refreshBuffer'](this));
        return _0x4d4cae['call'](this);
    };
    var _0x1a28cf = function(_0x282143, _0xb65801) {
        'spatial' === (_0xb65801 || 'spatial') ? (_0x282143['_panner'] = Howler['ctx']['createPanner'](), _0x282143['_panner']['coneInnerAngle'] = _0x282143['_pannerAttr']['coneInnerAngle'], _0x282143['_panner']['coneOuterAngle'] = _0x282143['_pannerAttr']['coneOuterAngle'], _0x282143['_panner']['coneOuterGain'] = _0x282143['_pannerAttr']['coneOuterGain'], _0x282143['_panner']['distanceModel'] = _0x282143['_pannerAttr']['distanceModel'], _0x282143['_panner']['maxDistance'] = _0x282143['_pannerAttr']['maxDistance'], _0x282143['_panner']['refDistance'] = _0x282143['_pannerAttr']['refDistance'], _0x282143['_panner']['rolloffFactor'] = _0x282143['_pannerAttr']['rolloffFactor'], _0x282143['_panner']['panningModel'] = _0x282143['_pannerAttr']['panningModel'], 'undefined' !== typeof _0x282143['_panner']['positionX'] ? (_0x282143['_panner']['positionX']['setValueAtTime'](_0x282143['_pos'][0x0], Howler['ctx']['currentTime']), _0x282143['_panner']['positionY']['setValueAtTime'](_0x282143['_pos'][0x1], Howler['ctx']['currentTime']), _0x282143['_panner']['positionZ']['setValueAtTime'](_0x282143['_pos'][0x2], Howler['ctx']['currentTime'])) : _0x282143['_panner']['setPosition'](_0x282143['_pos'][0x0], _0x282143['_pos'][0x1], _0x282143['_pos'][0x2]), 'undefined' !== typeof _0x282143['_panner']['orientationX'] ? (_0x282143['_panner']['orientationX']['setValueAtTime'](_0x282143['_orientation'][0x0], Howler['ctx']['currentTime']), _0x282143['_panner']['orientationY']['setValueAtTime'](_0x282143['_orientation'][0x1], Howler['ctx']['currentTime']), _0x282143['_panner']['orientationZ']['setValueAtTime'](_0x282143['_orientation'][0x2], Howler['ctx']['currentTime'])) : _0x282143['_panner']['setOrientation'](_0x282143['_orientation'][0x0], _0x282143['_orientation'][0x1], _0x282143['_orientation'][0x2])) : (_0x282143['_panner'] = Howler['ctx']['createStereoPanner'](), _0x282143['_panner']['pan']['setValueAtTime'](_0x282143['_stereo'], Howler['ctx']['currentTime']));
        _0x282143['_panner']['connect'](_0x282143['_node']);
        _0x282143['_paused'] || _0x282143['_parent']['pause'](_0x282143['_id'], !0x0)['play'](_0x282143['_id'], !0x0);
    };
}());
(function(_0x5db15b) {
    Number['prototype']['map'] = function(_0x1902aa, _0x232a62, _0x4cc707, _0x1db11f) {
        return _0x4cc707 + (_0x1db11f - _0x4cc707) * ((this - _0x1902aa) / (_0x232a62 - _0x1902aa));
    };
    Number['prototype']['limit'] = function(_0xd35dca, _0x1023ac) {
        return Math['min'](_0x1023ac, Math['max'](_0xd35dca, this));
    };
    Number['prototype']['round'] = function(_0x4fb8d4) {
        _0x4fb8d4 = Math['pow'](0xa, _0x4fb8d4 || 0x0);
        return Math['round'](this * _0x4fb8d4) / _0x4fb8d4;
    };
    Number['prototype']['floor'] = function() {
        return Math['floor'](this);
    };
    Number['prototype']['ceil'] = function() {
        return Math['ceil'](this);
    };
    Number['prototype']['toInt'] = function() {
        return this | 0x0;
    };
    Number['prototype']['toRad'] = function() {
        return this / 0xb4 * Math['PI'];
    };
    Number['prototype']['toDeg'] = function() {
        return 0xb4 * this / Math['PI'];
    };
    Array['prototype']['erase'] = function(_0x406a75) {
        for (var _0x5be045 = this['length']; _0x5be045--;) this[_0x5be045] === _0x406a75 && this['splice'](_0x5be045, 0x1);
        return this;
    };
    Array['prototype']['random'] = function() {
        return this[Math['floor'](Math['random']() * this['length'])];
    };
    Function['prototype']['bind'] = Function['prototype']['bind'] || function(_0x14adbb) {
        if ('function' !== typeof this) throw new TypeError('Function.prototype.bind\x20-\x20what\x20is\x20trying\x20to\x20be\x20bound\x20is\x20not\x20callable');
        var _0x2c87a4 = Array['prototype']['slice']['call'](arguments, 0x1),
            _0x5a5620 = this,
            _0x5d7bad = function() {},
            _0x29ba26 = function() {
                return _0x5a5620['apply'](this instanceof _0x5d7bad && _0x14adbb ? this : _0x14adbb, _0x2c87a4['concat'](Array['prototype']['slice']['call'](arguments)));
            };
        _0x5d7bad['prototype'] = this['prototype'];
        _0x29ba26['prototype'] = new _0x5d7bad();
        return _0x29ba26;
    };
    _0x5db15b['ig'] = {
        'game': null,
        'debug': null,
        'version': '1.23',
        'global': _0x5db15b,
        'modules': {},
        'resources': [],
        'ready': !0x1,
        'baked': !0x1,
        'nocache': '',
        'ua': {},
        'prefix': _0x5db15b['ImpactPrefix'] || '',
        'lib': 'lib/',
        '_current': null,
        '_loadQueue': [],
        '_waitForOnload': 0x0,
        '$': function(_0x28c32e) {
            return '#' == _0x28c32e['charAt'](0x0) ? document['getElementById'](_0x28c32e['substr'](0x1)) : document['getElementsByTagName'](_0x28c32e);
        },
        '$new': function(_0x34d972) {
            return document['createElement'](_0x34d972);
        },
        'copy': function(_0x2ff2e9) {
            if (!_0x2ff2e9 || 'object' != typeof _0x2ff2e9 || _0x2ff2e9 instanceof HTMLElement || _0x2ff2e9 instanceof ig['Class']) return _0x2ff2e9;
            if (_0x2ff2e9 instanceof Array)
                for (var _0x4a5379 = [], _0x440b33 = 0x0, _0x30865f = _0x2ff2e9['length']; _0x440b33 < _0x30865f; _0x440b33++) _0x4a5379[_0x440b33] = ig['copy'](_0x2ff2e9[_0x440b33]);
            else
                for (_0x440b33 in (_0x4a5379 = {}, _0x2ff2e9)) _0x4a5379[_0x440b33] = ig['copy'](_0x2ff2e9[_0x440b33]);
            return _0x4a5379;
        },
        'merge': function(_0x441b04, _0x58a0c8) {
            for (var _0x263038 in _0x58a0c8) {
                var _0x51f0bc = _0x58a0c8[_0x263038];
                if ('object' != typeof _0x51f0bc || _0x51f0bc instanceof HTMLElement || _0x51f0bc instanceof ig['Class'] || null === _0x51f0bc) _0x441b04[_0x263038] = _0x51f0bc;
                else {
                    if (!_0x441b04[_0x263038] || 'object' != typeof _0x441b04[_0x263038]) _0x441b04[_0x263038] = _0x51f0bc instanceof Array ? [] : {};
                    ig['merge'](_0x441b04[_0x263038], _0x51f0bc);
                }
            }
            return _0x441b04;
        },
        'ksort': function(_0x3f269b) {
            if (!_0x3f269b || 'object' != typeof _0x3f269b) return [];
            var _0x1912e3 = [],
                _0x5dc744 = [],
                _0xa6ce4c;
            for (_0xa6ce4c in _0x3f269b) _0x1912e3['push'](_0xa6ce4c);
            _0x1912e3['sort']();
            for (_0xa6ce4c = 0x0; _0xa6ce4c < _0x1912e3['length']; _0xa6ce4c++) _0x5dc744['push'](_0x3f269b[_0x1912e3[_0xa6ce4c]]);
            return _0x5dc744;
        },
        'setVendorAttribute': function(_0x1f4ae4, _0x23a0e4, _0x16965f) {
            var _0x4f6491 = _0x23a0e4['charAt'](0x0)['toUpperCase']() + _0x23a0e4['substr'](0x1);
            _0x1f4ae4[_0x23a0e4] = 'undefined' !== typeof _0x1f4ae4['imageSmoothingEnabled'] ? _0x1f4ae4['ms' + _0x4f6491] = _0x1f4ae4['moz' + _0x4f6491] = _0x1f4ae4['o' + _0x4f6491] = _0x16965f : _0x1f4ae4['ms' + _0x4f6491] = _0x1f4ae4['moz' + _0x4f6491] = _0x1f4ae4['webkit' + _0x4f6491] = _0x1f4ae4['o' + _0x4f6491] = _0x16965f;
        },
        'getVendorAttribute': function(_0x2f2601, _0x3f6416) {
            var _0x48fe62 = _0x3f6416['charAt'](0x0)['toUpperCase']() + _0x3f6416['substr'](0x1);
            return 'undefined' !== typeof _0x2f2601['imageSmoothingEnabled'] ? _0x2f2601[_0x3f6416] || _0x2f2601['ms' + _0x48fe62] || _0x2f2601['moz' + _0x48fe62] || _0x2f2601['o' + _0x48fe62] : _0x2f2601[_0x3f6416] || _0x2f2601['ms' + _0x48fe62] || _0x2f2601['moz' + _0x48fe62] || _0x2f2601['webkit' + _0x48fe62] || _0x2f2601['o' + _0x48fe62];
        },
        'normalizeVendorAttribute': function(_0x571ad0, _0x2de6e6) {
            var _0xc89d1d = ig['getVendorAttribute'](_0x571ad0, _0x2de6e6);
            !_0x571ad0[_0x2de6e6] && _0xc89d1d && (_0x571ad0[_0x2de6e6] = _0xc89d1d);
        },
        'getImagePixels': function(_0x5f5b13, _0xff98d4, _0x3a1c01, _0x583304, _0x86dee5) {
            var _0x4abd5f = ig['$new']('canvas');
            _0x4abd5f['width'] = _0x5f5b13['width'];
            _0x4abd5f['height'] = _0x5f5b13['height'];
            var _0x385e7f = _0x4abd5f['getContext']('2d');
            ig['System']['SCALE']['CRISP'](_0x4abd5f, _0x385e7f);
            var _0xe0dbe6 = ig['getVendorAttribute'](_0x385e7f, 'backingStorePixelRatio') || 0x1;
            ig['normalizeVendorAttribute'](_0x385e7f, 'getImageDataHD');
            var _0x344153 = _0x5f5b13['width'] / _0xe0dbe6,
                _0x29bf96 = _0x5f5b13['height'] / _0xe0dbe6;
            _0x4abd5f['width'] = Math['ceil'](_0x344153);
            _0x4abd5f['height'] = Math['ceil'](_0x29bf96);
            _0x385e7f['drawImage'](_0x5f5b13, 0x0, 0x0, _0x344153, _0x29bf96);
            return 0x1 === _0xe0dbe6 ? _0x385e7f['getImageData'](_0xff98d4, _0x3a1c01, _0x583304, _0x86dee5) : _0x385e7f['getImageDataHD'](_0xff98d4, _0x3a1c01, _0x583304, _0x86dee5);
        },
        'module': function(_0x55632b) {
            if (ig['_current']) throw 'Module\x20\x27' + ig['_current']['name'] + '\x27\x20defines\x20nothing';
            if (ig['modules'][_0x55632b] && ig['modules'][_0x55632b]['body']) throw 'Module\x20\x27' + _0x55632b + '\x27\x20is\x20already\x20defined';
            ig['_current'] = {
                'name': _0x55632b,
                'requires': [],
                'loaded': !0x1,
                'body': null
            };
            ig['modules'][_0x55632b] = ig['_current'];
            ig['_loadQueue']['push'](ig['_current']);
            return ig;
        },
        'requires': function() {
            ig['_current']['requires'] = Array['prototype']['slice']['call'](arguments);
            return ig;
        },
        'defines': function(_0x5b6b2d) {
            ig['_current']['body'] = _0x5b6b2d;
            ig['_current'] = null;
            ig['_initDOMReady']();
        },
        'addResource': function(_0x3ff57e) {
            ig['resources']['push'](_0x3ff57e);
        },
        'setNocache': function(_0x1d9108) {
            ig['nocache'] = _0x1d9108 ? '?' + Date['now']() : '';
        },
        'log': function() {},
        'assert': function() {},
        'show': function() {},
        'mark': function() {},
        '_loadScript': function(_0x88dcf2, _0x3852d5) {
            ig['modules'][_0x88dcf2] = {
                'name': _0x88dcf2,
                'requires': [],
                'loaded': !0x1,
                'body': null
            };
            ig['_waitForOnload']++;
            var _0x50df55 = ig['prefix'] + ig['lib'] + _0x88dcf2['replace'](/\./g, '/') + '.js' + ig['nocache'],
                _0x4db6c3 = ig['$new']('script');
            _0x4db6c3['type'] = 'text/javascript';
            _0x4db6c3['src'] = _0x50df55;
            _0x4db6c3['onload'] = function() {
                ig['_waitForOnload']--;
                ig['_execModules']();
            };
            _0x4db6c3['onerror'] = function() {
                throw 'Failed\x20to\x20load\x20module\x20' + _0x88dcf2 + '\x20at\x20' + _0x50df55 + '\x20required\x20from\x20' + _0x3852d5;
            };
            ig['$']('head')[0x0]['appendChild'](_0x4db6c3);
        },
        '_execModules': function() {
            for (var _0x2c524b = !0x1, _0x5aaaeb = 0x0; _0x5aaaeb < ig['_loadQueue']['length']; _0x5aaaeb++) {
                for (var _0x44a4b2 = ig['_loadQueue'][_0x5aaaeb], _0x2a230f = !0x0, _0x530559 = 0x0; _0x530559 < _0x44a4b2['requires']['length']; _0x530559++) {
                    var _0x42266f = _0x44a4b2['requires'][_0x530559];
                    ig['modules'][_0x42266f] ? ig['modules'][_0x42266f]['loaded'] || (_0x2a230f = !0x1) : (_0x2a230f = !0x1, ig['_loadScript'](_0x42266f, _0x44a4b2['name']));
                }
                _0x2a230f && _0x44a4b2['body'] && (ig['_loadQueue']['splice'](_0x5aaaeb, 0x1), _0x44a4b2['loaded'] = !0x0, _0x44a4b2['body'](), _0x2c524b = !0x0, _0x5aaaeb--);
            }
            if (_0x2c524b) ig['_execModules']();
            else if (!ig['baked'] && 0x0 == ig['_waitForOnload'] && 0x0 != ig['_loadQueue']['length']) {
                _0x2c524b = [];
                for (_0x5aaaeb = 0x0; _0x5aaaeb < ig['_loadQueue']['length']; _0x5aaaeb++) {
                    _0x2a230f = [];
                    _0x42266f = ig['_loadQueue'][_0x5aaaeb]['requires'];
                    for (_0x530559 = 0x0; _0x530559 < _0x42266f['length']; _0x530559++) _0x44a4b2 = ig['modules'][_0x42266f[_0x530559]], (!_0x44a4b2 || !_0x44a4b2['loaded']) && _0x2a230f['push'](_0x42266f[_0x530559]);
                    _0x2c524b['push'](ig['_loadQueue'][_0x5aaaeb]['name'] + '\x20(requires:\x20' + _0x2a230f['join'](',\x20') + ')');
                }
                throw 'Unresolved\x20(or\x20circular?)\x20dependencies.\x20Most\x20likely\x20there\x27s\x20a\x20name/path\x20mismatch\x20for\x20one\x20of\x20the\x20listed\x20modules\x20or\x20a\x20previous\x20syntax\x20error\x20prevents\x20a\x20module\x20from\x20loading:\x0a' + _0x2c524b['join']('\x0a');
            }
        },
        '_DOMReady': function() {
            if (!ig['modules']['dom.ready']['loaded']) {
                if (!document['body']) return setTimeout(ig['_DOMReady'], 0xd);
                ig['modules']['dom.ready']['loaded'] = !0x0;
                ig['_waitForOnload']--;
                ig['_execModules']();
            }
            return 0x0;
        },
        '_boot': function() {
            document['location']['href']['match'](/\?nocache/) && ig['setNocache'](!0x0);
            ig['ua']['pixelRatio'] = _0x5db15b['devicePixelRatio'] || 0x1;
            ig['ua']['viewport'] = {
                'width': _0x5db15b['innerWidth'],
                'height': _0x5db15b['innerHeight']
            };
            ig['ua']['screen'] = {
                'width': _0x5db15b['screen']['availWidth'] * ig['ua']['pixelRatio'],
                'height': _0x5db15b['screen']['availHeight'] * ig['ua']['pixelRatio']
            };
            ig['ua']['iPhone'] = /iPhone/i ['test'](navigator['userAgent']);
            ig['ua']['iPhone4'] = ig['ua']['iPhone'] && 0x2 == ig['ua']['pixelRatio'];
            ig['ua']['iPad'] = /iPad/i ['test'](navigator['userAgent']);
            ig['ua']['android'] = /android/i ['test'](navigator['userAgent']);
            ig['ua']['winPhone'] = /Windows Phone/i ['test'](navigator['userAgent']);
            ig['ua']['is_uiwebview'] = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i ['test'](navigator['userAgent']);
            ig['ua']['is_safari_or_uiwebview'] = /(iPhone|iPod|iPad).*AppleWebKit/i ['test'](navigator['userAgent']);
            ig['ua']['iOS'] = ig['ua']['iPhone'] || ig['ua']['iPad'];
            ig['ua']['iOS6_tag'] = /OS 6_/i ['test'](navigator['userAgent']);
            ig['ua']['iOS6'] = (ig['ua']['iPhone'] || ig['ua']['iPad']) && ig['ua']['iOS6_tag'];
            ig['ua']['iOSgt5'] = ig['ua']['iOS'] && 0x5 < parseInt(navigator['appVersion']['match'](/OS (\d+)_(\d+)_?(\d+)?/)[0x1]);
            ig['ua']['HTCONE'] = /HTC_One/i ['test'](navigator['userAgent']);
            ig['ua']['winPhone'] = /Windows Phone/i ['test'](navigator['userAgent']);
            ig['ua']['Kindle'] = /Silk/i ['test'](navigator['userAgent']);
            ig['ua']['touchDevice'] = 'ontouchstart' in _0x5db15b || _0x5db15b['navigator']['msMaxTouchPoints'];
            ig['ua']['mobile'] = ig['ua']['iOS'] || ig['ua']['android'] || ig['ua']['iOS6'] || ig['ua']['winPhone'] || ig['ua']['Kindle'] || /mobile/i ['test'](navigator['userAgent']);
        },
        '_initDOMReady': function() {
            ig['modules']['dom.ready'] ? ig['_execModules']() : (ig['_boot'](), ig['modules']['dom.ready'] = {
                'requires': [],
                'loaded': !0x1,
                'body': null
            }, ig['_waitForOnload']++, 'complete' === document['readyState'] ? ig['_DOMReady']() : (document['addEventListener']('DOMContentLoaded', ig['_DOMReady'], !0x1), _0x5db15b['addEventListener']('load', ig['_DOMReady'], !0x1)));
        }
    };
    ig['normalizeVendorAttribute'](_0x5db15b, 'requestAnimationFrame');
    if (_0x5db15b['requestAnimationFrame']) {
        var _0x1381a7 = 0x1,
            _0x81f922 = {};
        _0x5db15b['ig']['setAnimation'] = function(_0x4e4bb3, _0x58a30c) {
            var _0x3f3079 = _0x1381a7++;
            _0x81f922[_0x3f3079] = !0x0;
            var _0x273b9a = function() {
                _0x81f922[_0x3f3079] && (_0x5db15b['requestAnimationFrame'](_0x273b9a, _0x58a30c), _0x4e4bb3());
            };
            _0x5db15b['requestAnimationFrame'](_0x273b9a, _0x58a30c);
            return _0x3f3079;
        };
        _0x5db15b['ig']['clearAnimation'] = function(_0x2773b1) {
            delete _0x81f922[_0x2773b1];
        };
    } else _0x5db15b['ig']['setAnimation'] = function(_0x407d96) {
        return _0x5db15b['setInterval'](_0x407d96, 0x3e8 / 0x3c);
    }, _0x5db15b['ig']['clearAnimation'] = function(_0x3054cb) {
        _0x5db15b['clearInterval'](_0x3054cb);
    };
    var _0x5809a9 = !0x1,
        _0x266ea1 = /xyz/ ['test'](function() {
            xyz;
        }) ? /\bparent\b/ : /.*/,
        _0x2477f4 = 0x0;
    _0x5db15b['ig']['Class'] = function() {};
    var _0x2b357f = function(_0x1a2b2e) {
        var _0x2fb569 = this['prototype'],
            _0xe30c0 = {},
            _0x596a00;
        for (_0x596a00 in _0x1a2b2e) 'function' == typeof _0x1a2b2e[_0x596a00] && 'function' == typeof _0x2fb569[_0x596a00] && _0x266ea1['test'](_0x1a2b2e[_0x596a00]) ? (_0xe30c0[_0x596a00] = _0x2fb569[_0x596a00], _0x2fb569[_0x596a00] = function(_0x336263, _0x17d932) {
            return function() {
                var _0x4600e3 = this['parent'];
                this['parent'] = _0xe30c0[_0x336263];
                var _0x19714d = _0x17d932['apply'](this, arguments);
                this['parent'] = _0x4600e3;
                return _0x19714d;
            };
        }(_0x596a00, _0x1a2b2e[_0x596a00])) : _0x2fb569[_0x596a00] = _0x1a2b2e[_0x596a00];
    };
    _0x5db15b['ig']['Class']['extend'] = function(_0x471569) {
        function _0x390994() {
            if (!_0x5809a9) {
                if (this['staticInstantiate']) {
                    var _0x1a2bd3 = this['staticInstantiate']['apply'](this, arguments);
                    if (_0x1a2bd3) return _0x1a2bd3;
                }
                for (var _0x1561e6 in this) 'object' == typeof this[_0x1561e6] && (this[_0x1561e6] = ig['copy'](this[_0x1561e6]));
                this['init'] && this['init']['apply'](this, arguments);
            }
            return this;
        }
        var _0xe7cdd8 = this['prototype'];
        _0x5809a9 = !0x0;
        var _0x556448 = new this();
        _0x5809a9 = !0x1;
        for (var _0x186042 in _0x471569) _0x556448[_0x186042] = 'function' == typeof _0x471569[_0x186042] && 'function' == typeof _0xe7cdd8[_0x186042] && _0x266ea1['test'](_0x471569[_0x186042]) ? function(_0x54f84d, _0xe5e45b) {
            return function() {
                var _0x483955 = this['parent'];
                this['parent'] = _0xe7cdd8[_0x54f84d];
                var _0x4e3295 = _0xe5e45b['apply'](this, arguments);
                this['parent'] = _0x483955;
                return _0x4e3295;
            };
        }(_0x186042, _0x471569[_0x186042]) : _0x471569[_0x186042];
        _0x390994['prototype'] = _0x556448;
        _0x390994['prototype']['constructor'] = _0x390994;
        _0x390994['extend'] = _0x5db15b['ig']['Class']['extend'];
        _0x390994['inject'] = _0x2b357f;
        _0x390994['classId'] = _0x556448['classId'] = ++_0x2477f4;
        return _0x390994;
    };
    _0x5db15b['ImpactMixin'] && ig['merge'](ig, _0x5db15b['ImpactMixin']);
}(window));
ig['baked'] = !0x0;
ig['module']('impact.image')['defines'](function() {
    ig['Image'] = ig['Class']['extend']({
        'data': null,
        'width': 0x0,
        'height': 0x0,
        'loaded': !0x1,
        'failed': !0x1,
        'loadCallback': null,
        'path': '',
        'staticInstantiate': function(_0x2d0304) {
            return ig['Image']['cache'][_0x2d0304] || null;
        },
        'init': function(_0x40dfdc) {
            this['path'] = _0x40dfdc;
            this['load']();
        },
        'load': function(_0x1f20dc) {
            this['loaded'] ? _0x1f20dc && _0x1f20dc(this['path'], !0x0) : (!this['loaded'] && ig['ready'] ? (this['loadCallback'] = _0x1f20dc || null, this['data'] = new Image(), this['data']['onload'] = this['onload']['bind'](this), this['data']['onerror'] = this['onerror']['bind'](this), this['data']['src'] = ig['prefix'] + this['path'] + ig['nocache']) : ig['addResource'](this), ig['Image']['cache'][this['path']] = this);
        },
        'reload': function() {
            this['loaded'] = !0x1;
            this['data'] = new Image();
            this['data']['onload'] = this['onload']['bind'](this);
            this['data']['src'] = this['path'] + '?' + Date['now']();
        },
        'onload': function() {
            this['width'] = this['data']['width'];
            this['height'] = this['data']['height'];
            this['loaded'] = !0x0;
            0x1 != ig['system']['scale'] && this['resize'](ig['system']['scale']);
            this['loadCallback'] && this['loadCallback'](this['path'], !0x0);
        },
        'onerror': function() {
            this['failed'] = !0x0;
            this['loadCallback'] && this['loadCallback'](this['path'], !0x1);
        },
        'resize': function(_0x449ce1) {
            var _0x3020cd = ig['getImagePixels'](this['data'], 0x0, 0x0, this['width'], this['height']),
                _0x201038 = this['width'] * _0x449ce1,
                _0x496fa2 = this['height'] * _0x449ce1,
                _0x2817be = ig['$new']('canvas');
            _0x2817be['width'] = _0x201038;
            _0x2817be['height'] = _0x496fa2;
            for (var _0x36a324 = _0x2817be['getContext']('2d'), _0x5b8ffc = _0x36a324['getImageData'](0x0, 0x0, _0x201038, _0x496fa2), _0x44e113 = 0x0; _0x44e113 < _0x496fa2; _0x44e113++)
                for (var _0x42acb8 = 0x0; _0x42acb8 < _0x201038; _0x42acb8++) {
                    var _0x344484 = 0x4 * (Math['floor'](_0x44e113 / _0x449ce1) * this['width'] + Math['floor'](_0x42acb8 / _0x449ce1)),
                        _0x39ac00 = 0x4 * (_0x44e113 * _0x201038 + _0x42acb8);
                    _0x5b8ffc['data'][_0x39ac00] = _0x3020cd['data'][_0x344484];
                    _0x5b8ffc['data'][_0x39ac00 + 0x1] = _0x3020cd['data'][_0x344484 + 0x1];
                    _0x5b8ffc['data'][_0x39ac00 + 0x2] = _0x3020cd['data'][_0x344484 + 0x2];
                    _0x5b8ffc['data'][_0x39ac00 + 0x3] = _0x3020cd['data'][_0x344484 + 0x3];
                }
            _0x36a324['putImageData'](_0x5b8ffc, 0x0, 0x0);
            this['data'] = _0x2817be;
        },
        'draw': function(_0x38a3a6, _0x184ed1, _0x4041c3, _0x386ad8, _0x167672, _0x4408de) {
            if (this['loaded']) {
                var _0x30c83d = ig['system']['scale'];
                _0x167672 = (_0x167672 ? _0x167672 : this['width']) * _0x30c83d;
                _0x4408de = (_0x4408de ? _0x4408de : this['height']) * _0x30c83d;
                ig['system']['context']['drawImage'](this['data'], _0x4041c3 ? _0x4041c3 * _0x30c83d : 0x0, _0x386ad8 ? _0x386ad8 * _0x30c83d : 0x0, _0x167672, _0x4408de, ig['system']['getDrawPos'](_0x38a3a6), ig['system']['getDrawPos'](_0x184ed1), _0x167672, _0x4408de);
                ig['Image']['drawCount']++;
            }
        },
        'drawTile': function(_0x348702, _0x4a093c, _0x549f97, _0x354b94, _0x5a6d3f, _0x561ec5, _0x53d2a9) {
            _0x5a6d3f = _0x5a6d3f ? _0x5a6d3f : _0x354b94;
            if (this['loaded'] && !(_0x354b94 > this['width'] || _0x5a6d3f > this['height'])) {
                var _0x1dda35 = ig['system']['scale'],
                    _0x8b2c38 = Math['floor'](_0x354b94 * _0x1dda35),
                    _0x1fe355 = Math['floor'](_0x5a6d3f * _0x1dda35),
                    _0x2db41f = _0x561ec5 ? -0x1 : 0x1,
                    _0x58a596 = _0x53d2a9 ? -0x1 : 0x1;
                if (_0x561ec5 || _0x53d2a9) ig['system']['context']['save'](), ig['system']['context']['scale'](_0x2db41f, _0x58a596);
                ig['system']['context']['drawImage'](this['data'], Math['floor'](_0x549f97 * _0x354b94) % this['width'] * _0x1dda35, Math['floor'](_0x549f97 * _0x354b94 / this['width']) * _0x5a6d3f * _0x1dda35, _0x8b2c38, _0x1fe355, ig['system']['getDrawPos'](_0x348702) * _0x2db41f - (_0x561ec5 ? _0x8b2c38 : 0x0), ig['system']['getDrawPos'](_0x4a093c) * _0x58a596 - (_0x53d2a9 ? _0x1fe355 : 0x0), _0x8b2c38, _0x1fe355);
                (_0x561ec5 || _0x53d2a9) && ig['system']['context']['restore']();
                ig['Image']['drawCount']++;
            }
        }
    });
    ig['Image']['drawCount'] = 0x0;
    ig['Image']['cache'] = {};
    ig['Image']['reloadCache'] = function() {
        for (var _0x411551 in ig['Image']['cache']) ig['Image']['cache'][_0x411551]['reload']();
    };
});
ig['baked'] = !0x0;
ig['module']('impact.font')['requires']('impact.image')['defines'](function() {
    ig['Font'] = ig['Image']['extend']({
        'widthMap': [],
        'indices': [],
        'firstChar': 0x20,
        'alpha': 0x1,
        'letterSpacing': 0x1,
        'lineSpacing': 0x0,
        'onload': function(_0x5e82b0) {
            this['_loadMetrics'](this['data']);
            this['parent'](_0x5e82b0);
        },
        'widthForString': function(_0x2bf175) {
            if (-0x1 !== _0x2bf175['indexOf']('\x0a')) {
                _0x2bf175 = _0x2bf175['split']('\x0a');
                for (var _0xfd11de = 0x0, _0x174c9d = 0x0; _0x174c9d < _0x2bf175['length']; _0x174c9d++) _0xfd11de = Math['max'](_0xfd11de, this['_widthForLine'](_0x2bf175[_0x174c9d]));
                return _0xfd11de;
            }
            return this['_widthForLine'](_0x2bf175);
        },
        '_widthForLine': function(_0x4882d9) {
            for (var _0x5f2116 = 0x0, _0x3dda7b = 0x0; _0x3dda7b < _0x4882d9['length']; _0x3dda7b++) _0x5f2116 += this['widthMap'][_0x4882d9['charCodeAt'](_0x3dda7b) - this['firstChar']] + this['letterSpacing'];
            return _0x5f2116;
        },
        'heightForString': function(_0x2afb1f) {
            return _0x2afb1f['split']('\x0a')['length'] * (this['height'] + this['lineSpacing']);
        },
        'draw': function(_0x226ec4, _0x6c2591, _0x541bb9, _0x48832d) {
            'string' != typeof _0x226ec4 && (_0x226ec4 = _0x226ec4['toString']());
            if (-0x1 !== _0x226ec4['indexOf']('\x0a')) {
                _0x226ec4 = _0x226ec4['split']('\x0a');
                for (var _0x122253 = this['height'] + this['lineSpacing'], _0x206c0b = 0x0; _0x206c0b < _0x226ec4['length']; _0x206c0b++) this['draw'](_0x226ec4[_0x206c0b], _0x6c2591, _0x541bb9 + _0x206c0b * _0x122253, _0x48832d);
            } else {
                if (_0x48832d == ig['Font']['ALIGN']['RIGHT'] || _0x48832d == ig['Font']['ALIGN']['CENTER']) _0x206c0b = this['_widthForLine'](_0x226ec4), _0x6c2591 -= _0x48832d == ig['Font']['ALIGN']['CENTER'] ? _0x206c0b / 0x2 : _0x206c0b;
                0x1 !== this['alpha'] && (ig['system']['context']['globalAlpha'] = this['alpha']);
                for (_0x206c0b = 0x0; _0x206c0b < _0x226ec4['length']; _0x206c0b++) _0x48832d = _0x226ec4['charCodeAt'](_0x206c0b), _0x6c2591 += this['_drawChar'](_0x48832d - this['firstChar'], _0x6c2591, _0x541bb9);
                0x1 !== this['alpha'] && (ig['system']['context']['globalAlpha'] = 0x1);
                ig['Image']['drawCount'] += _0x226ec4['length'];
            }
        },
        '_drawChar': function(_0x170f4c, _0x934a8b, _0x564b84) {
            if (!this['loaded'] || 0x0 > _0x170f4c || _0x170f4c >= this['indices']['length']) return 0x0;
            var _0x4ccf2a = ig['system']['scale'],
                _0x567195 = this['widthMap'][_0x170f4c] * _0x4ccf2a,
                _0x2261d0 = (this['height'] - 0x2) * _0x4ccf2a;
            ig['system']['context']['drawImage'](this['data'], this['indices'][_0x170f4c] * _0x4ccf2a, 0x0, _0x567195, _0x2261d0, ig['system']['getDrawPos'](_0x934a8b), ig['system']['getDrawPos'](_0x564b84), _0x567195, _0x2261d0);
            return this['widthMap'][_0x170f4c] + this['letterSpacing'];
        },
        '_loadMetrics': function(_0x1c5218) {
            this['height'] = _0x1c5218['height'] - 0x1;
            this['widthMap'] = [];
            this['indices'] = [];
            for (var _0x4d4f5b = ig['getImagePixels'](_0x1c5218, 0x0, _0x1c5218['height'] - 0x1, _0x1c5218['width'], 0x1), _0x24b028 = 0x0, _0x30eaac = 0x0, _0x3b1116 = 0x0; _0x3b1116 < _0x1c5218['width']; _0x3b1116++) {
                var _0x58c39b = 0x4 * _0x3b1116 + 0x3;
                0x7f < _0x4d4f5b['data'][_0x58c39b] ? _0x30eaac++ : 0x80 > _0x4d4f5b['data'][_0x58c39b] && _0x30eaac && (this['widthMap']['push'](_0x30eaac), this['indices']['push'](_0x3b1116 - _0x30eaac), _0x24b028++, _0x30eaac = 0x0);
            }
            this['widthMap']['push'](_0x30eaac);
            this['indices']['push'](_0x3b1116 - _0x30eaac);
        }
    });
    ig['Font']['ALIGN'] = {
        'LEFT': 0x0,
        'RIGHT': 0x1,
        'CENTER': 0x2
    };
});
ig['baked'] = !0x0;
ig['module']('impact.sound')['defines'](function() {
    ig['SoundManager'] = ig['Class']['extend']({
        'clips': {},
        'volume': 0x1,
        'format': null,
        'init': function() {
            if (!ig['Sound']['enabled'] || !window['Audio']) ig['Sound']['enabled'] = !0x1;
            else {
                for (var _0x1d639d = new Audio(), _0x416ad6 = 0x0; _0x416ad6 < ig['Sound']['use']['length']; _0x416ad6++) {
                    var _0x2ffb8a = ig['Sound']['use'][_0x416ad6];
                    if (_0x1d639d['canPlayType'](_0x2ffb8a['mime'])) {
                        this['format'] = _0x2ffb8a;
                        break;
                    }
                }
                this['format'] || (ig['Sound']['enabled'] = !0x1);
            }
        },
        'load': function(_0xfced63, _0x296bad, _0xdb5b66) {
            var _0x1b0e6d = ig['prefix'] + _0xfced63['replace'](/[^\.]+$/, this['format']['ext']) + ig['nocache'];
            if (this['clips'][_0xfced63]) {
                if (_0x296bad && this['clips'][_0xfced63]['length'] < ig['Sound']['channels'])
                    for (_0x296bad = this['clips'][_0xfced63]['length']; _0x296bad < ig['Sound']['channels']; _0x296bad++) {
                        var _0x38fcff = new Audio(_0x1b0e6d);
                        _0x38fcff['load']();
                        this['clips'][_0xfced63]['push'](_0x38fcff);
                    }
                return this['clips'][_0xfced63][0x0];
            }
            var _0x7bd60b = new Audio(_0x1b0e6d);
            _0xdb5b66 && (_0x7bd60b['addEventListener']('canplaythrough', function _0x2fac8a(_0x487e63) {
                _0x7bd60b['removeEventListener']('canplaythrough', _0x2fac8a, !0x1);
                _0xdb5b66(_0xfced63, !0x0, _0x487e63);
            }, !0x1), _0x7bd60b['addEventListener']('error', function(_0x3974b4) {
                _0xdb5b66(_0xfced63, !0x1, _0x3974b4);
            }, !0x1));
            _0x7bd60b['preload'] = 'auto';
            _0x7bd60b['load']();
            this['clips'][_0xfced63] = [_0x7bd60b];
            if (_0x296bad)
                for (_0x296bad = 0x1; _0x296bad < ig['Sound']['channels']; _0x296bad++) _0x38fcff = new Audio(_0x1b0e6d), _0x38fcff['load'](), this['clips'][_0xfced63]['push'](_0x38fcff);
            return _0x7bd60b;
        },
        'get': function(_0x2a222c) {
            _0x2a222c = this['clips'][_0x2a222c];
            for (var _0x16cb8c = 0x0, _0x3eeae4; _0x3eeae4 = _0x2a222c[_0x16cb8c++];)
                if (_0x3eeae4['paused'] || _0x3eeae4['ended']) return _0x3eeae4['ended'] && (_0x3eeae4['currentTime'] = 0x0), _0x3eeae4;
            _0x2a222c[0x0]['pause']();
            _0x2a222c[0x0]['currentTime'] = 0x0;
            return _0x2a222c[0x0];
        }
    });
    ig['Music'] = ig['Class']['extend']({
        'tracks': [],
        'namedTracks': {},
        'currentTrack': null,
        'currentIndex': 0x0,
        'random': !0x1,
        '_volume': 0x1,
        '_loop': !0x1,
        '_fadeInterval': 0x0,
        '_fadeTimer': null,
        '_endedCallbackBound': null,
        'init': function() {
            this['_endedCallbackBound'] = this['_endedCallback']['bind'](this);
            Object['defineProperty'] ? (Object['defineProperty'](this, 'volume', {
                'get': this['getVolume']['bind'](this),
                'set': this['setVolume']['bind'](this)
            }), Object['defineProperty'](this, 'loop', {
                'get': this['getLooping']['bind'](this),
                'set': this['setLooping']['bind'](this)
            })) : this['__defineGetter__'] && (this['__defineGetter__']('volume', this['getVolume']['bind'](this)), this['__defineSetter__']('volume', this['setVolume']['bind'](this)), this['__defineGetter__']('loop', this['getLooping']['bind'](this)), this['__defineSetter__']('loop', this['setLooping']['bind'](this)));
        },
        'add': function(_0x673bc8, _0x131800) {
            if (ig['Sound']['enabled']) {
                var _0x3755b3 = ig['soundManager']['load'](_0x673bc8 instanceof ig['Sound'] ? _0x673bc8['path'] : _0x673bc8, !0x1);
                _0x3755b3['loop'] = this['_loop'];
                _0x3755b3['volume'] = this['_volume'];
                _0x3755b3['addEventListener']('ended', this['_endedCallbackBound'], !0x1);
                this['tracks']['push'](_0x3755b3);
                _0x131800 && (this['namedTracks'][_0x131800] = _0x3755b3);
                this['currentTrack'] || (this['currentTrack'] = _0x3755b3);
            }
        },
        'next': function() {
            this['tracks']['length'] && (this['stop'](), this['currentIndex'] = this['random'] ? Math['floor'](Math['random']() * this['tracks']['length']) : (this['currentIndex'] + 0x1) % this['tracks']['length'], this['currentTrack'] = this['tracks'][this['currentIndex']], this['play']());
        },
        'pause': function() {
            this['currentTrack'] && this['currentTrack']['pause']();
        },
        'stop': function() {
            this['currentTrack'] && (this['currentTrack']['pause'](), this['currentTrack']['currentTime'] = 0x0);
        },
        'play': function(_0x278236) {
            if (_0x278236 && this['namedTracks'][_0x278236]) _0x278236 = this['namedTracks'][_0x278236], _0x278236 != this['currentTrack'] && (this['stop'](), this['currentTrack'] = _0x278236);
            else if (!this['currentTrack']) return;
            this['currentTrack']['play']();
        },
        'getLooping': function() {
            return this['_loop'];
        },
        'setLooping': function(_0x5cad31) {
            this['_loop'] = _0x5cad31;
            for (var _0x242346 in this['tracks']) this['tracks'][_0x242346]['loop'] = _0x5cad31;
        },
        'getVolume': function() {
            return this['_volume'];
        },
        'setVolume': function(_0x1b5ec6) {
            this['_volume'] = _0x1b5ec6['limit'](0x0, 0x1);
            for (var _0x13866e in this['tracks']) this['tracks'][_0x13866e]['volume'] = this['_volume'];
        },
        'fadeOut': function(_0x3002ba) {
            this['currentTrack'] && (clearInterval(this['_fadeInterval']), this['fadeTimer'] = new ig['Timer'](_0x3002ba), this['_fadeInterval'] = setInterval(this['_fadeStep']['bind'](this), 0x32));
        },
        '_fadeStep': function() {
            var _0x706120 = this['fadeTimer']['delta']()['map'](-this['fadeTimer']['target'], 0x0, 0x1, 0x0)['limit'](0x0, 0x1) * this['_volume'];
            0.01 >= _0x706120 ? (this['stop'](), this['currentTrack']['volume'] = this['_volume'], clearInterval(this['_fadeInterval'])) : this['currentTrack']['volume'] = _0x706120;
        },
        '_endedCallback': function() {
            this['_loop'] ? this['play']() : this['next']();
        }
    });
    ig['Sound'] = ig['Class']['extend']({
        'path': '',
        'volume': 0x1,
        'currentClip': null,
        'multiChannel': !0x0,
        'init': function(_0x243b61, _0x439223) {
            this['path'] = _0x243b61;
            this['multiChannel'] = !0x1 !== _0x439223;
            this['load']();
        },
        'load': function(_0x56a9e0) {
            ig['Sound']['enabled'] ? ig['ready'] ? ig['soundManager']['load'](this['path'], this['multiChannel'], _0x56a9e0) : ig['addResource'](this) : _0x56a9e0 && _0x56a9e0(this['path'], !0x0);
        },
        'play': function() {
            ig['Sound']['enabled'] && (this['currentClip'] = ig['soundManager']['get'](this['path']), this['currentClip']['volume'] = ig['soundManager']['volume'] * this['volume'], this['currentClip']['play']());
        },
        'stop': function() {
            this['currentClip'] && (this['currentClip']['pause'](), this['currentClip']['currentTime'] = 0x0);
        }
    });
    ig['Sound']['FORMAT'] = {
        'MP3': {
            'ext': 'mp3',
            'mime': 'audio/mpeg'
        },
        'M4A': {
            'ext': 'm4a',
            'mime': 'audio/mp4;\x20codecs=mp4a'
        },
        'OGG': {
            'ext': 'ogg',
            'mime': 'audio/ogg;\x20codecs=vorbis'
        },
        'WEBM': {
            'ext': 'webm',
            'mime': 'audio/webm;\x20codecs=vorbis'
        },
        'CAF': {
            'ext': 'caf',
            'mime': 'audio/x-caf'
        }
    };
    ig['Sound']['use'] = [ig['Sound']['FORMAT']['OGG'], ig['Sound']['FORMAT']['MP3']];
    ig['Sound']['channels'] = 0x4;
    ig['Sound']['enabled'] = !0x0;
});
ig['baked'] = !0x0;
ig['module']('impact.loader')['requires']('impact.image', 'impact.font', 'impact.sound')['defines'](function() {
    ig['Loader'] = ig['Class']['extend']({
        'resources': [],
        'gameClass': null,
        'status': 0x0,
        'done': !0x1,
        '_unloaded': [],
        '_drawStatus': 0x0,
        '_intervalId': 0x0,
        '_loadCallbackBound': null,
        'init': function(_0x3cbba4, _0x1e3569) {
            this['gameClass'] = _0x3cbba4;
            this['resources'] = _0x1e3569;
            this['_loadCallbackBound'] = this['_loadCallback']['bind'](this);
            for (var _0x2393a7 = 0x0; _0x2393a7 < this['resources']['length']; _0x2393a7++) this['_unloaded']['push'](this['resources'][_0x2393a7]['path']);
        },
        'load': function() {
            ig['system']['clear']('#000');
            if (this['resources']['length']) {
                for (var _0x38cd35 = 0x0; _0x38cd35 < this['resources']['length']; _0x38cd35++) this['loadResource'](this['resources'][_0x38cd35]);
                this['_intervalId'] = setInterval(this['draw']['bind'](this), 0x10);
            } else this['end']();
        },
        'loadResource': function(_0xe8a663) {
            _0xe8a663['load'](this['_loadCallbackBound']);
        },
        'end': function() {
            this['done'] || (this['done'] = !0x0, clearInterval(this['_intervalId']));
        },
        'draw': function() {},
        '_loadCallback': function(_0x50ea76, _0x553568) {
            if (_0x553568) this['_unloaded']['erase'](_0x50ea76);
            else throw 'Failed\x20to\x20load\x20resource:\x20' + _0x50ea76;
            this['status'] = 0x1 - this['_unloaded']['length'] / this['resources']['length'];
            0x0 == this['_unloaded']['length'] && setTimeout(this['end']['bind'](this), 0xfa);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('impact.timer')['defines'](function() {
    ig['Timer'] = ig['Class']['extend']({
        'target': 0x0,
        'base': 0x0,
        'last': 0x0,
        'pausedAt': 0x0,
        'init': function(_0x32889f) {
            this['last'] = this['base'] = ig['Timer']['time'];
            this['target'] = _0x32889f || 0x0;
        },
        'set': function(_0x1af7f7) {
            this['target'] = _0x1af7f7 || 0x0;
            this['base'] = ig['Timer']['time'];
            this['pausedAt'] = 0x0;
        },
        'reset': function() {
            this['base'] = ig['Timer']['time'];
            this['pausedAt'] = 0x0;
        },
        'tick': function() {
            var _0x1b0336 = ig['Timer']['time'] - this['last'];
            this['last'] = ig['Timer']['time'];
            return this['pausedAt'] ? 0x0 : _0x1b0336;
        },
        'delta': function() {
            return (this['pausedAt'] || ig['Timer']['time']) - this['base'] - this['target'];
        },
        'pause': function() {
            this['pausedAt'] || (this['pausedAt'] = ig['Timer']['time']);
        },
        'unpause': function() {
            this['pausedAt'] && (this['base'] += ig['Timer']['time'] - this['pausedAt'], this['pausedAt'] = 0x0);
        }
    });
    ig['Timer']['_last'] = 0x0;
    ig['Timer']['time'] = Number['MIN_VALUE'];
    ig['Timer']['timeScale'] = 0x1;
    ig['Timer']['maxStep'] = 0.05;
    ig['Timer']['step'] = function() {
        var _0x2999bc = Date['now']();
        ig['Timer']['time'] += Math['min']((_0x2999bc - ig['Timer']['_last']) / 0x3e8, ig['Timer']['maxStep']) * ig['Timer']['timeScale'];
        ig['Timer']['_last'] = _0x2999bc;
    };
});
ig['baked'] = !0x0;
ig['module']('impact.system')['requires']('impact.timer', 'impact.image')['defines'](function() {
    ig['System'] = ig['Class']['extend']({
        'fps': 0x1e,
        'width': 0x140,
        'height': 0xf0,
        'realWidth': 0x140,
        'realHeight': 0xf0,
        'scale': 0x1,
        'tick': 0x0,
        'animationId': 0x0,
        'newGameClass': null,
        'running': !0x1,
        'delegate': null,
        'clock': null,
        'canvas': null,
        'context': null,
        'init': function(_0x2d971a, _0x3b960a, _0x3a73fc, _0x543e5c, _0x3f352a) {
            this['fps'] = _0x3b960a;
            this['clock'] = new ig['Timer']();
            this['canvas'] = ig['$'](_0x2d971a);
            this['resize'](_0x3a73fc, _0x543e5c, _0x3f352a);
            this['context'] = this['canvas']['getContext']('2d');
            this['getDrawPos'] = ig['System']['drawMode'];
            0x1 != this['scale'] && (ig['System']['scaleMode'] = ig['System']['SCALE']['CRISP']);
            ig['System']['scaleMode'](this['canvas'], this['context']);
        },
        'resize': function(_0x4355cc, _0x278567, _0x21ba97) {
            this['width'] = _0x4355cc;
            this['height'] = _0x278567;
            this['scale'] = _0x21ba97 || this['scale'];
            this['realWidth'] = this['width'] * this['scale'];
            this['realHeight'] = this['height'] * this['scale'];
            this['canvas']['width'] = this['realWidth'];
            this['canvas']['height'] = this['realHeight'];
        },
        'setGame': function(_0x5651a4) {
            this['running'] ? this['newGameClass'] = _0x5651a4 : this['setGameNow'](_0x5651a4);
        },
        'setGameNow': function(_0x22dd2e) {
            ig['game'] = new _0x22dd2e();
            ig['system']['setDelegate'](ig['game']);
        },
        'setDelegate': function(_0x4db6e2) {
            if ('function' == typeof _0x4db6e2['run']) this['delegate'] = _0x4db6e2, this['startRunLoop']();
            else throw 'System.setDelegate:\x20No\x20run()\x20function\x20in\x20object';
        },
        'stopRunLoop': function() {
            ig['clearAnimation'](this['animationId']);
            this['running'] = !0x1;
        },
        'startRunLoop': function() {
            this['stopRunLoop']();
            this['animationId'] = ig['setAnimation'](this['run']['bind'](this), this['canvas']);
            this['running'] = !0x0;
        },
        'clear': function(_0x49132f) {
            this['context']['fillStyle'] = _0x49132f;
            this['context']['fillRect'](0x0, 0x0, this['realWidth'], this['realHeight']);
        },
        'run': function() {
            ig['Timer']['step']();
            this['tick'] = this['clock']['tick']();
            this['delegate']['run']();
            ig['input']['clearPressed']();
            this['newGameClass'] && (this['setGameNow'](this['newGameClass']), this['newGameClass'] = null);
        },
        'getDrawPos': null
    });
    ig['System']['DRAW'] = {
        'AUTHENTIC': function(_0xfcc2f0) {
            return Math['round'](_0xfcc2f0) * this['scale'];
        },
        'SMOOTH': function(_0x9a71c1) {
            return Math['round'](_0x9a71c1 * this['scale']);
        },
        'SUBPIXEL': function(_0x6487fc) {
            return _0x6487fc * this['scale'];
        }
    };
    ig['System']['drawMode'] = ig['System']['DRAW']['SMOOTH'];
    ig['System']['SCALE'] = {
        'CRISP': function(_0x23dd60, _0x18e97f) {
            ig['setVendorAttribute'](_0x18e97f, 'imageSmoothingEnabled', !0x1);
            _0x23dd60['style']['imageRendering'] = '-moz-crisp-edges';
            _0x23dd60['style']['imageRendering'] = '-o-crisp-edges';
            _0x23dd60['style']['imageRendering'] = '-webkit-optimize-contrast';
            _0x23dd60['style']['imageRendering'] = 'crisp-edges';
            _0x23dd60['style']['msInterpolationMode'] = 'nearest-neighbor';
        },
        'SMOOTH': function(_0x1f46dd, _0x8786c9) {
            ig['setVendorAttribute'](_0x8786c9, 'imageSmoothingEnabled', !0x0);
            _0x1f46dd['style']['imageRendering'] = '';
            _0x1f46dd['style']['msInterpolationMode'] = '';
        }
    };
    ig['System']['scaleMode'] = ig['System']['SCALE']['SMOOTH'];
});
ig['baked'] = !0x0;
ig['module']('impact.input')['defines'](function() {
    ig['KEY'] = {
        'MOUSE1': -0x1,
        'MOUSE2': -0x3,
        'MWHEEL_UP': -0x4,
        'MWHEEL_DOWN': -0x5,
        'BACKSPACE': 0x8,
        'TAB': 0x9,
        'ENTER': 0xd,
        'PAUSE': 0x13,
        'CAPS': 0x14,
        'ESC': 0x1b,
        'SPACE': 0x20,
        'PAGE_UP': 0x21,
        'PAGE_DOWN': 0x22,
        'END': 0x23,
        'HOME': 0x24,
        'LEFT_ARROW': 0x25,
        'UP_ARROW': 0x26,
        'RIGHT_ARROW': 0x27,
        'DOWN_ARROW': 0x28,
        'INSERT': 0x2d,
        'DELETE': 0x2e,
        '_0': 0x30,
        '_1': 0x31,
        '_2': 0x32,
        '_3': 0x33,
        '_4': 0x34,
        '_5': 0x35,
        '_6': 0x36,
        '_7': 0x37,
        '_8': 0x38,
        '_9': 0x39,
        'A': 0x41,
        'B': 0x42,
        'C': 0x43,
        'D': 0x44,
        'E': 0x45,
        'F': 0x46,
        'G': 0x47,
        'H': 0x48,
        'I': 0x49,
        'J': 0x4a,
        'K': 0x4b,
        'L': 0x4c,
        'M': 0x4d,
        'N': 0x4e,
        'O': 0x4f,
        'P': 0x50,
        'Q': 0x51,
        'R': 0x52,
        'S': 0x53,
        'T': 0x54,
        'U': 0x55,
        'V': 0x56,
        'W': 0x57,
        'X': 0x58,
        'Y': 0x59,
        'Z': 0x5a,
        'NUMPAD_0': 0x60,
        'NUMPAD_1': 0x61,
        'NUMPAD_2': 0x62,
        'NUMPAD_3': 0x63,
        'NUMPAD_4': 0x64,
        'NUMPAD_5': 0x65,
        'NUMPAD_6': 0x66,
        'NUMPAD_7': 0x67,
        'NUMPAD_8': 0x68,
        'NUMPAD_9': 0x69,
        'MULTIPLY': 0x6a,
        'ADD': 0x6b,
        'SUBSTRACT': 0x6d,
        'DECIMAL': 0x6e,
        'DIVIDE': 0x6f,
        'F1': 0x70,
        'F2': 0x71,
        'F3': 0x72,
        'F4': 0x73,
        'F5': 0x74,
        'F6': 0x75,
        'F7': 0x76,
        'F8': 0x77,
        'F9': 0x78,
        'F10': 0x79,
        'F11': 0x7a,
        'F12': 0x7b,
        'SHIFT': 0x10,
        'CTRL': 0x11,
        'ALT': 0x12,
        'PLUS': 0xbb,
        'COMMA': 0xbc,
        'MINUS': 0xbd,
        'PERIOD': 0xbe
    };
    ig['Input'] = ig['Class']['extend']({
        'bindings': {},
        'actions': {},
        'presses': {},
        'locks': {},
        'delayedKeyup': {},
        'isUsingMouse': !0x1,
        'isUsingKeyboard': !0x1,
        'isUsingAccelerometer': !0x1,
        'mouse': {
            'x': 0x0,
            'y': 0x0
        },
        'accel': {
            'x': 0x0,
            'y': 0x0,
            'z': 0x0
        },
        'initMouse': function() {
            if (!this['isUsingMouse']) {
                this['isUsingMouse'] = !0x0;
                var _0x2bcc13 = this['mousewheel']['bind'](this);
                ig['system']['canvas']['addEventListener']('mousewheel', _0x2bcc13, !0x1);
                ig['system']['canvas']['addEventListener']('DOMMouseScroll', _0x2bcc13, !0x1);
                ig['system']['canvas']['addEventListener']('contextmenu', this['contextmenu']['bind'](this), !0x1);
                ig['system']['canvas']['addEventListener']('mousedown', this['keydown']['bind'](this), !0x1);
                ig['system']['canvas']['addEventListener']('mouseup', this['keyup']['bind'](this), !0x1);
                ig['system']['canvas']['addEventListener']('mousemove', this['mousemove']['bind'](this), !0x1);
                ig['ua']['touchDevice'] && (ig['system']['canvas']['addEventListener']('touchstart', this['keydown']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('touchend', this['keyup']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('touchmove', this['mousemove']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('MSPointerDown', this['keydown']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('MSPointerUp', this['keyup']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('MSPointerMove', this['mousemove']['bind'](this), !0x1), ig['system']['canvas']['style']['msTouchAction'] = 'none');
            }
        },
        'initKeyboard': function() {
            this['isUsingKeyboard'] || (this['isUsingKeyboard'] = !0x0, window['addEventListener']('keydown', this['keydown']['bind'](this), !0x1), window['addEventListener']('keyup', this['keyup']['bind'](this), !0x1));
        },
        'initAccelerometer': function() {
            this['isUsingAccelerometer'] || window['addEventListener']('devicemotion', this['devicemotion']['bind'](this), !0x1);
        },
        'mousewheel': function(_0x39436f) {
            var _0x5d2cc0 = this['bindings'][0x0 < (_0x39436f['wheelDelta'] ? _0x39436f['wheelDelta'] : -0x1 * _0x39436f['detail']) ? ig['KEY']['MWHEEL_UP'] : ig['KEY']['MWHEEL_DOWN']];
            _0x5d2cc0 && (this['actions'][_0x5d2cc0] = !0x0, this['presses'][_0x5d2cc0] = !0x0, this['delayedKeyup'][_0x5d2cc0] = !0x0, _0x39436f['stopPropagation'](), _0x39436f['preventDefault']());
        },
        'mousemove': function(_0x25ebaf) {
            var _0x42892c = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth'];
            ig['ua']['mobile'] && (_0x42892c = ig['system']['realWidth']);
            var _0x42892c = ig['system']['scale'] * (_0x42892c / ig['system']['realWidth']),
                _0x495128 = {
                    'left': 0x0,
                    'top': 0x0
                };
            ig['system']['canvas']['getBoundingClientRect'] && (_0x495128 = ig['system']['canvas']['getBoundingClientRect']());
            _0x25ebaf = _0x25ebaf['touches'] ? _0x25ebaf['touches'][0x0] : _0x25ebaf;
            this['mouse']['x'] = (_0x25ebaf['clientX'] - _0x495128['left']) / _0x42892c;
            this['mouse']['y'] = (_0x25ebaf['clientY'] - _0x495128['top']) / _0x42892c;
        },
        'contextmenu': function(_0x177955) {
            this['bindings'][ig['KEY']['MOUSE2']] && (_0x177955['stopPropagation'](), _0x177955['preventDefault']());
        },
        'keydown': function(_0x2829cb) {
            var _0x3f3579 = _0x2829cb['target']['tagName'];
            if (!('INPUT' == _0x3f3579 || 'TEXTAREA' == _0x3f3579))
                if (_0x3f3579 = 'keydown' == _0x2829cb['type'] ? _0x2829cb['keyCode'] : 0x2 == _0x2829cb['button'] ? ig['KEY']['MOUSE2'] : ig['KEY']['MOUSE1'], ('touchstart' == _0x2829cb['type'] || 'mousedown' == _0x2829cb['type']) && this['mousemove'](_0x2829cb), _0x3f3579 = this['bindings'][_0x3f3579]) this['actions'][_0x3f3579] = !0x0, this['locks'][_0x3f3579] || (this['presses'][_0x3f3579] = !0x0, this['locks'][_0x3f3579] = !0x0), _0x2829cb['stopPropagation'](), _0x2829cb['preventDefault']();
        },
        'keyup': function(_0x25de3a) {
            var _0x5962e3 = _0x25de3a['target']['tagName'];
            if (!('INPUT' == _0x5962e3 || 'TEXTAREA' == _0x5962e3))
                if (_0x5962e3 = this['bindings']['keyup' == _0x25de3a['type'] ? _0x25de3a['keyCode'] : 0x2 == _0x25de3a['button'] ? ig['KEY']['MOUSE2'] : ig['KEY']['MOUSE1']]) this['delayedKeyup'][_0x5962e3] = !0x0, _0x25de3a['stopPropagation'](), _0x25de3a['preventDefault']();
        },
        'devicemotion': function(_0x1de82a) {
            this['accel'] = _0x1de82a['accelerationIncludingGravity'];
        },
        'bind': function(_0x29444d, _0x30192d) {
            0x0 > _0x29444d ? this['initMouse']() : 0x0 < _0x29444d && this['initKeyboard']();
            this['bindings'][_0x29444d] = _0x30192d;
        },
        'bindTouch': function(_0x1c6397, _0x43a121) {
            var _0x5d7f18 = ig['$'](_0x1c6397),
                _0x4b418e = this;
            _0x5d7f18['addEventListener']('touchstart', function(_0x54d034) {
                _0x4b418e['touchStart'](_0x54d034, _0x43a121);
            }, !0x1);
            _0x5d7f18['addEventListener']('touchend', function(_0x16faa7) {
                _0x4b418e['touchEnd'](_0x16faa7, _0x43a121);
            }, !0x1);
            _0x5d7f18['addEventListener']('MSPointerDown', function(_0x490a63) {
                _0x4b418e['touchStart'](_0x490a63, _0x43a121);
            }, !0x1);
            _0x5d7f18['addEventListener']('MSPointerUp', function(_0x1ef7a9) {
                _0x4b418e['touchEnd'](_0x1ef7a9, _0x43a121);
            }, !0x1);
        },
        'unbind': function(_0x570b1a) {
            this['delayedKeyup'][this['bindings'][_0x570b1a]] = !0x0;
            this['bindings'][_0x570b1a] = null;
        },
        'unbindAll': function() {
            this['bindings'] = {};
            this['actions'] = {};
            this['presses'] = {};
            this['locks'] = {};
            this['delayedKeyup'] = {};
        },
        'state': function(_0x5eb460) {
            return this['actions'][_0x5eb460];
        },
        'pressed': function(_0x29569a) {
            return this['presses'][_0x29569a];
        },
        'released': function(_0x2cc267) {
            return !!this['delayedKeyup'][_0x2cc267];
        },
        'clearPressed': function() {
            for (var _0x320c4c in this['delayedKeyup']) this['actions'][_0x320c4c] = !0x1, this['locks'][_0x320c4c] = !0x1;
            this['delayedKeyup'] = {};
            this['presses'] = {};
        },
        'touchStart': function(_0x2173fe, _0x3e4d31) {
            this['actions'][_0x3e4d31] = !0x0;
            this['presses'][_0x3e4d31] = !0x0;
            _0x2173fe['stopPropagation']();
            _0x2173fe['preventDefault']();
            return !0x1;
        },
        'touchEnd': function(_0x27bddc, _0x3a2065) {
            this['delayedKeyup'][_0x3a2065] = !0x0;
            _0x27bddc['stopPropagation']();
            _0x27bddc['preventDefault']();
            return !0x1;
        }
    });
});
ig['baked'] = !0x0;
ig['module']('impact.impact')['requires']('dom.ready', 'impact.loader', 'impact.system', 'impact.input', 'impact.sound')['defines'](function() {
    ig['main'] = function(_0x38c299, _0x177c20, _0x5ce040, _0x13eaba, _0x23a2f8, _0x53c52b, _0x51247d) {
        ig['system'] = new ig['System'](_0x38c299, _0x5ce040, _0x13eaba, _0x23a2f8, _0x53c52b || 0x1);
        ig['input'] = new ig['Input']();
        ig['soundManager'] = new ig['SoundManager']();
        ig['music'] = new ig['Music']();
        ig['ready'] = !0x0;
        new(_0x51247d || ig['Loader'])(_0x177c20, ig['resources'])['load']();
    };
});
ig['baked'] = !0x0;
ig['module']('impact.animation')['requires']('impact.timer', 'impact.image')['defines'](function() {
    ig['AnimationSheet'] = ig['Class']['extend']({
        'width': 0x8,
        'height': 0x8,
        'image': null,
        'init': function(_0x4f8905, _0x2f158b, _0x459e87) {
            this['width'] = _0x2f158b;
            this['height'] = _0x459e87;
            this['image'] = new ig['Image'](_0x4f8905);
        }
    });
    ig['Animation'] = ig['Class']['extend']({
        'sheet': null,
        'timer': null,
        'sequence': [],
        'flip': {
            'x': !0x1,
            'y': !0x1
        },
        'pivot': {
            'x': 0x0,
            'y': 0x0
        },
        'frame': 0x0,
        'tile': 0x0,
        'loopCount': 0x0,
        'alpha': 0x1,
        'angle': 0x0,
        'init': function(_0x3bc64e, _0x410c9a, _0x3ad72f, _0x329ad5) {
            this['sheet'] = _0x3bc64e;
            this['pivot'] = {
                'x': _0x3bc64e['width'] / 0x2,
                'y': _0x3bc64e['height'] / 0x2
            };
            this['timer'] = new ig['Timer']();
            this['frameTime'] = _0x410c9a;
            this['sequence'] = _0x3ad72f;
            this['stop'] = !!_0x329ad5;
            this['tile'] = this['sequence'][0x0];
        },
        'rewind': function() {
            this['timer']['set']();
            this['frame'] = this['loopCount'] = 0x0;
            this['tile'] = this['sequence'][0x0];
            return this;
        },
        'gotoFrame': function(_0x328e4f) {
            this['timer']['set'](this['frameTime'] * -_0x328e4f - 0.0001);
            this['update']();
        },
        'gotoRandomFrame': function() {
            this['gotoFrame'](Math['floor'](Math['random']() * this['sequence']['length']));
        },
        'update': function() {
            var _0x31184f = Math['floor'](this['timer']['delta']() / this['frameTime']);
            this['loopCount'] = Math['floor'](_0x31184f / this['sequence']['length']);
            this['frame'] = this['stop'] && 0x0 < this['loopCount'] ? this['sequence']['length'] - 0x1 : _0x31184f % this['sequence']['length'];
            this['tile'] = this['sequence'][this['frame']];
        },
        'draw': function(_0x37b8e3, _0x16d564) {
            var _0x44b0c6 = Math['max'](this['sheet']['width'], this['sheet']['height']);
            _0x37b8e3 > ig['system']['width'] || _0x16d564 > ig['system']['height'] || (0x0 > _0x37b8e3 + _0x44b0c6 || 0x0 > _0x16d564 + _0x44b0c6) || (0x1 != this['alpha'] && (ig['system']['context']['globalAlpha'] = this['alpha']), 0x0 == this['angle'] ? this['sheet']['image']['drawTile'](_0x37b8e3, _0x16d564, this['tile'], this['sheet']['width'], this['sheet']['height'], this['flip']['x'], this['flip']['y']) : (ig['system']['context']['save'](), ig['system']['context']['translate'](ig['system']['getDrawPos'](_0x37b8e3 + this['pivot']['x']), ig['system']['getDrawPos'](_0x16d564 + this['pivot']['y'])), ig['system']['context']['rotate'](this['angle']), this['sheet']['image']['drawTile'](-this['pivot']['x'], -this['pivot']['y'], this['tile'], this['sheet']['width'], this['sheet']['height'], this['flip']['x'], this['flip']['y']), ig['system']['context']['restore']()), 0x1 != this['alpha'] && (ig['system']['context']['globalAlpha'] = 0x1));
        }
    });
});
ig['baked'] = !0x0;
ig['module']('impact.entity')['requires']('impact.animation', 'impact.impact')['defines'](function() {
    ig['Entity'] = ig['Class']['extend']({
        'id': 0x0,
        'settings': {},
        'size': {
            'x': 0x10,
            'y': 0x10
        },
        'offset': {
            'x': 0x0,
            'y': 0x0
        },
        'pos': {
            'x': 0x0,
            'y': 0x0
        },
        'last': {
            'x': 0x0,
            'y': 0x0
        },
        'vel': {
            'x': 0x0,
            'y': 0x0
        },
        'accel': {
            'x': 0x0,
            'y': 0x0
        },
        'friction': {
            'x': 0x0,
            'y': 0x0
        },
        'maxVel': {
            'x': 0x64,
            'y': 0x64
        },
        'zIndex': 0x0,
        'gravityFactor': 0x1,
        'standing': !0x1,
        'bounciness': 0x0,
        'minBounceVelocity': 0x28,
        'anims': {},
        'animSheet': null,
        'currentAnim': null,
        'health': 0xa,
        'type': 0x0,
        'checkAgainst': 0x0,
        'collides': 0x0,
        '_killed': !0x1,
        'slopeStanding': {
            'min': 0x2c['toRad'](),
            'max': 0x88['toRad']()
        },
        'init': function(_0x5ea269, _0x573d32, _0x796078) {
            this['id'] = ++ig['Entity']['_lastId'];
            this['pos']['x'] = this['last']['x'] = _0x5ea269;
            this['pos']['y'] = this['last']['y'] = _0x573d32;
            ig['merge'](this, _0x796078);
        },
        'reset': function(_0x16f637, _0x4ea14b, _0xbcc7dc) {
            var _0x2cbe11 = this['constructor']['prototype'];
            this['pos']['x'] = _0x16f637;
            this['pos']['y'] = _0x4ea14b;
            this['last']['x'] = _0x16f637;
            this['last']['y'] = _0x4ea14b;
            this['vel']['x'] = _0x2cbe11['vel']['x'];
            this['vel']['y'] = _0x2cbe11['vel']['y'];
            this['accel']['x'] = _0x2cbe11['accel']['x'];
            this['accel']['y'] = _0x2cbe11['accel']['y'];
            this['health'] = _0x2cbe11['health'];
            this['_killed'] = _0x2cbe11['_killed'];
            this['standing'] = _0x2cbe11['standing'];
            this['type'] = _0x2cbe11['type'];
            this['checkAgainst'] = _0x2cbe11['checkAgainst'];
            this['collides'] = _0x2cbe11['collides'];
            ig['merge'](this, _0xbcc7dc);
        },
        'addAnim': function(_0x4d7f21, _0x36324e, _0x1e004e, _0xdc6a22) {
            if (!this['animSheet']) throw 'No\x20animSheet\x20to\x20add\x20the\x20animation\x20' + _0x4d7f21 + '\x20to.';
            _0x36324e = new ig['Animation'](this['animSheet'], _0x36324e, _0x1e004e, _0xdc6a22);
            this['anims'][_0x4d7f21] = _0x36324e;
            this['currentAnim'] || (this['currentAnim'] = _0x36324e);
            return _0x36324e;
        },
        'update': function() {
            this['last']['x'] = this['pos']['x'];
            this['last']['y'] = this['pos']['y'];
            this['vel']['y'] += ig['game']['gravity'] * ig['system']['tick'] * this['gravityFactor'];
            this['vel']['x'] = this['getNewVelocity'](this['vel']['x'], this['accel']['x'], this['friction']['x'], this['maxVel']['x']);
            this['vel']['y'] = this['getNewVelocity'](this['vel']['y'], this['accel']['y'], this['friction']['y'], this['maxVel']['y']);
            var _0x50eb80 = ig['game']['collisionMap']['trace'](this['pos']['x'], this['pos']['y'], this['vel']['x'] * ig['system']['tick'], this['vel']['y'] * ig['system']['tick'], this['size']['x'], this['size']['y']);
            this['handleMovementTrace'](_0x50eb80);
            this['currentAnim'] && this['currentAnim']['update']();
        },
        'getNewVelocity': function(_0x3416e0, _0x53afc0, _0x44b67f, _0x6964f7) {
            return _0x53afc0 ? (_0x3416e0 + _0x53afc0 * ig['system']['tick'])['limit'](-_0x6964f7, _0x6964f7) : _0x44b67f ? (_0x53afc0 = _0x44b67f * ig['system']['tick'], 0x0 < _0x3416e0 - _0x53afc0 ? _0x3416e0 - _0x53afc0 : 0x0 > _0x3416e0 + _0x53afc0 ? _0x3416e0 + _0x53afc0 : 0x0) : _0x3416e0['limit'](-_0x6964f7, _0x6964f7);
        },
        'handleMovementTrace': function(_0x542729) {
            this['standing'] = !0x1;
            _0x542729['collision']['y'] && (0x0 < this['bounciness'] && Math['abs'](this['vel']['y']) > this['minBounceVelocity'] ? this['vel']['y'] *= -this['bounciness'] : (0x0 < this['vel']['y'] && (this['standing'] = !0x0), this['vel']['y'] = 0x0));
            _0x542729['collision']['x'] && (this['vel']['x'] = 0x0 < this['bounciness'] && Math['abs'](this['vel']['x']) > this['minBounceVelocity'] ? this['vel']['x'] * -this['bounciness'] : 0x0);
            if (_0x542729['collision']['slope']) {
                var _0x4bfb07 = _0x542729['collision']['slope'];
                if (0x0 < this['bounciness']) {
                    var _0x5f30b7 = this['vel']['x'] * _0x4bfb07['nx'] + this['vel']['y'] * _0x4bfb07['ny'];
                    this['vel']['x'] = (this['vel']['x'] - 0x2 * _0x4bfb07['nx'] * _0x5f30b7) * this['bounciness'];
                    this['vel']['y'] = (this['vel']['y'] - 0x2 * _0x4bfb07['ny'] * _0x5f30b7) * this['bounciness'];
                } else _0x5f30b7 = (this['vel']['x'] * _0x4bfb07['x'] + this['vel']['y'] * _0x4bfb07['y']) / (_0x4bfb07['x'] * _0x4bfb07['x'] + _0x4bfb07['y'] * _0x4bfb07['y']), this['vel']['x'] = _0x4bfb07['x'] * _0x5f30b7, this['vel']['y'] = _0x4bfb07['y'] * _0x5f30b7, _0x4bfb07 = Math['atan2'](_0x4bfb07['x'], _0x4bfb07['y']), _0x4bfb07 > this['slopeStanding']['min'] && _0x4bfb07 < this['slopeStanding']['max'] && (this['standing'] = !0x0);
            }
            this['pos'] = _0x542729['pos'];
        },
        'draw': function() {
            this['currentAnim'] && this['currentAnim']['draw'](this['pos']['x'] - this['offset']['x'] - ig['game']['_rscreen']['x'], this['pos']['y'] - this['offset']['y'] - ig['game']['_rscreen']['y']);
        },
        'kill': function() {
            ig['game']['removeEntity'](this);
        },
        'receiveDamage': function(_0x11a64a) {
            this['health'] -= _0x11a64a;
            0x0 >= this['health'] && this['kill']();
        },
        'touches': function(_0x3eaef1) {
            return !(this['pos']['x'] >= _0x3eaef1['pos']['x'] + _0x3eaef1['size']['x'] || this['pos']['x'] + this['size']['x'] <= _0x3eaef1['pos']['x'] || this['pos']['y'] >= _0x3eaef1['pos']['y'] + _0x3eaef1['size']['y'] || this['pos']['y'] + this['size']['y'] <= _0x3eaef1['pos']['y']);
        },
        'distanceTo': function(_0x4c46ce) {
            var _0x16aa60 = this['pos']['x'] + this['size']['x'] / 0x2 - (_0x4c46ce['pos']['x'] + _0x4c46ce['size']['x'] / 0x2);
            _0x4c46ce = this['pos']['y'] + this['size']['y'] / 0x2 - (_0x4c46ce['pos']['y'] + _0x4c46ce['size']['y'] / 0x2);
            return Math['sqrt'](_0x16aa60 * _0x16aa60 + _0x4c46ce * _0x4c46ce);
        },
        'angleTo': function(_0x19b904) {
            return Math['atan2'](_0x19b904['pos']['y'] + _0x19b904['size']['y'] / 0x2 - (this['pos']['y'] + this['size']['y'] / 0x2), _0x19b904['pos']['x'] + _0x19b904['size']['x'] / 0x2 - (this['pos']['x'] + this['size']['x'] / 0x2));
        },
        'check': function() {},
        'collideWith': function() {},
        'ready': function() {},
        'erase': function() {}
    });
    ig['Entity']['_lastId'] = 0x0;
    ig['Entity']['COLLIDES'] = {
        'NEVER': 0x0,
        'LITE': 0x1,
        'PASSIVE': 0x2,
        'ACTIVE': 0x4,
        'FIXED': 0x8
    };
    ig['Entity']['TYPE'] = {
        'NONE': 0x0,
        'A': 0x1,
        'B': 0x2,
        'BOTH': 0x3
    };
    ig['Entity']['checkPair'] = function(_0x3b961b, _0x4bf79b) {
        _0x3b961b['checkAgainst'] & _0x4bf79b['type'] && _0x3b961b['check'](_0x4bf79b);
        _0x4bf79b['checkAgainst'] & _0x3b961b['type'] && _0x4bf79b['check'](_0x3b961b);
        _0x3b961b['collides'] && _0x4bf79b['collides'] && _0x3b961b['collides'] + _0x4bf79b['collides'] > ig['Entity']['COLLIDES']['ACTIVE'] && ig['Entity']['solveCollision'](_0x3b961b, _0x4bf79b);
    };
    ig['Entity']['solveCollision'] = function(_0x20e8f4, _0x2d0f46) {
        var _0x56471d = null;
        if (_0x20e8f4['collides'] == ig['Entity']['COLLIDES']['LITE'] || _0x2d0f46['collides'] == ig['Entity']['COLLIDES']['FIXED']) _0x56471d = _0x20e8f4;
        else if (_0x2d0f46['collides'] == ig['Entity']['COLLIDES']['LITE'] || _0x20e8f4['collides'] == ig['Entity']['COLLIDES']['FIXED']) _0x56471d = _0x2d0f46;
        _0x20e8f4['last']['x'] + _0x20e8f4['size']['x'] > _0x2d0f46['last']['x'] && _0x20e8f4['last']['x'] < _0x2d0f46['last']['x'] + _0x2d0f46['size']['x'] ? (_0x20e8f4['last']['y'] < _0x2d0f46['last']['y'] ? ig['Entity']['seperateOnYAxis'](_0x20e8f4, _0x2d0f46, _0x56471d) : ig['Entity']['seperateOnYAxis'](_0x2d0f46, _0x20e8f4, _0x56471d), _0x20e8f4['collideWith'](_0x2d0f46, 'y'), _0x2d0f46['collideWith'](_0x20e8f4, 'y')) : _0x20e8f4['last']['y'] + _0x20e8f4['size']['y'] > _0x2d0f46['last']['y'] && _0x20e8f4['last']['y'] < _0x2d0f46['last']['y'] + _0x2d0f46['size']['y'] && (_0x20e8f4['last']['x'] < _0x2d0f46['last']['x'] ? ig['Entity']['seperateOnXAxis'](_0x20e8f4, _0x2d0f46, _0x56471d) : ig['Entity']['seperateOnXAxis'](_0x2d0f46, _0x20e8f4, _0x56471d), _0x20e8f4['collideWith'](_0x2d0f46, 'x'), _0x2d0f46['collideWith'](_0x20e8f4, 'x'));
    };
    ig['Entity']['seperateOnXAxis'] = function(_0x46fa29, _0x3cd02f, _0x41051d) {
        var _0x40b2f4 = _0x46fa29['pos']['x'] + _0x46fa29['size']['x'] - _0x3cd02f['pos']['x'];
        _0x41051d ? (_0x41051d['vel']['x'] = -_0x41051d['vel']['x'] * _0x41051d['bounciness'] + (_0x46fa29 === _0x41051d ? _0x3cd02f : _0x46fa29)['vel']['x'], _0x3cd02f = ig['game']['collisionMap']['trace'](_0x41051d['pos']['x'], _0x41051d['pos']['y'], _0x41051d == _0x46fa29 ? -_0x40b2f4 : _0x40b2f4, 0x0, _0x41051d['size']['x'], _0x41051d['size']['y']), _0x41051d['pos']['x'] = _0x3cd02f['pos']['x']) : (_0x41051d = (_0x46fa29['vel']['x'] - _0x3cd02f['vel']['x']) / 0x2, _0x46fa29['vel']['x'] = -_0x41051d, _0x3cd02f['vel']['x'] = _0x41051d, _0x41051d = ig['game']['collisionMap']['trace'](_0x46fa29['pos']['x'], _0x46fa29['pos']['y'], -_0x40b2f4 / 0x2, 0x0, _0x46fa29['size']['x'], _0x46fa29['size']['y']), _0x46fa29['pos']['x'] = Math['floor'](_0x41051d['pos']['x']), _0x46fa29 = ig['game']['collisionMap']['trace'](_0x3cd02f['pos']['x'], _0x3cd02f['pos']['y'], _0x40b2f4 / 0x2, 0x0, _0x3cd02f['size']['x'], _0x3cd02f['size']['y']), _0x3cd02f['pos']['x'] = Math['ceil'](_0x46fa29['pos']['x']));
    };
    ig['Entity']['seperateOnYAxis'] = function(_0x487174, _0x36255c, _0x4f2933) {
        var _0x44c3e3 = _0x487174['pos']['y'] + _0x487174['size']['y'] - _0x36255c['pos']['y'];
        if (_0x4f2933) {
            _0x36255c = _0x487174 === _0x4f2933 ? _0x36255c : _0x487174;
            _0x4f2933['vel']['y'] = -_0x4f2933['vel']['y'] * _0x4f2933['bounciness'] + _0x36255c['vel']['y'];
            var _0x589e9e = 0x0;
            _0x4f2933 == _0x487174 && Math['abs'](_0x4f2933['vel']['y'] - _0x36255c['vel']['y']) < _0x4f2933['minBounceVelocity'] && (_0x4f2933['standing'] = !0x0, _0x589e9e = _0x36255c['vel']['x'] * ig['system']['tick']);
            _0x487174 = ig['game']['collisionMap']['trace'](_0x4f2933['pos']['x'], _0x4f2933['pos']['y'], _0x589e9e, _0x4f2933 == _0x487174 ? -_0x44c3e3 : _0x44c3e3, _0x4f2933['size']['x'], _0x4f2933['size']['y']);
            _0x4f2933['pos']['y'] = _0x487174['pos']['y'];
            _0x4f2933['pos']['x'] = _0x487174['pos']['x'];
        } else ig['game']['gravity'] && (_0x36255c['standing'] || 0x0 < _0x487174['vel']['y']) ? (_0x4f2933 = ig['game']['collisionMap']['trace'](_0x487174['pos']['x'], _0x487174['pos']['y'], 0x0, -(_0x487174['pos']['y'] + _0x487174['size']['y'] - _0x36255c['pos']['y']), _0x487174['size']['x'], _0x487174['size']['y']), _0x487174['pos']['y'] = _0x4f2933['pos']['y'], 0x0 < _0x487174['bounciness'] && _0x487174['vel']['y'] > _0x487174['minBounceVelocity'] ? _0x487174['vel']['y'] *= -_0x487174['bounciness'] : (_0x487174['standing'] = !0x0, _0x487174['vel']['y'] = 0x0)) : (_0x4f2933 = (_0x487174['vel']['y'] - _0x36255c['vel']['y']) / 0x2, _0x487174['vel']['y'] = -_0x4f2933, _0x36255c['vel']['y'] = _0x4f2933, _0x589e9e = _0x36255c['vel']['x'] * ig['system']['tick'], _0x4f2933 = ig['game']['collisionMap']['trace'](_0x487174['pos']['x'], _0x487174['pos']['y'], _0x589e9e, -_0x44c3e3 / 0x2, _0x487174['size']['x'], _0x487174['size']['y']), _0x487174['pos']['y'] = _0x4f2933['pos']['y'], _0x487174 = ig['game']['collisionMap']['trace'](_0x36255c['pos']['x'], _0x36255c['pos']['y'], 0x0, _0x44c3e3 / 0x2, _0x36255c['size']['x'], _0x36255c['size']['y']), _0x36255c['pos']['y'] = _0x487174['pos']['y']);
    };
});
ig['baked'] = !0x0;
ig['module']('impact.map')['defines'](function() {
    ig['Map'] = ig['Class']['extend']({
        'tilesize': 0x8,
        'width': 0x1,
        'height': 0x1,
        'data': [
            []
        ],
        'name': null,
        'init': function(_0x5a3411, _0x4e061b) {
            this['tilesize'] = _0x5a3411;
            this['data'] = _0x4e061b;
            this['height'] = _0x4e061b['length'];
            this['width'] = _0x4e061b[0x0]['length'];
            this['pxWidth'] = this['width'] * this['tilesize'];
            this['pxHeight'] = this['height'] * this['tilesize'];
        },
        'getTile': function(_0x4f7ec0, _0xd4a2f5) {
            var _0x459a51 = Math['floor'](_0x4f7ec0 / this['tilesize']),
                _0x42a76a = Math['floor'](_0xd4a2f5 / this['tilesize']);
            return 0x0 <= _0x459a51 && _0x459a51 < this['width'] && 0x0 <= _0x42a76a && _0x42a76a < this['height'] ? this['data'][_0x42a76a][_0x459a51] : 0x0;
        },
        'setTile': function(_0x116e4b, _0x5ca0b8, _0x227c7e) {
            _0x116e4b = Math['floor'](_0x116e4b / this['tilesize']);
            _0x5ca0b8 = Math['floor'](_0x5ca0b8 / this['tilesize']);
            0x0 <= _0x116e4b && _0x116e4b < this['width'] && 0x0 <= _0x5ca0b8 && _0x5ca0b8 < this['height'] && (this['data'][_0x5ca0b8][_0x116e4b] = _0x227c7e);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('impact.collision-map')['requires']('impact.map')['defines'](function() {
    ig['CollisionMap'] = ig['Map']['extend']({
        'lastSlope': 0x1,
        'tiledef': null,
        'init': function(_0x1780cf, _0x4012f4, _0x421817) {
            this['parent'](_0x1780cf, _0x4012f4);
            this['tiledef'] = _0x421817 || ig['CollisionMap']['defaultTileDef'];
            for (var _0x43ed11 in this['tiledef']) _0x43ed11 | 0x0 > this['lastSlope'] && (this['lastSlope'] = _0x43ed11 | 0x0);
        },
        'trace': function(_0x4c191f, _0x35deb7, _0x2170c8, _0x27fb61, _0x3028dc, _0x5de760) {
            var _0x134f5d = {
                    'collision': {
                        'x': !0x1,
                        'y': !0x1,
                        'slope': !0x1
                    },
                    'pos': {
                        'x': _0x4c191f,
                        'y': _0x35deb7
                    },
                    'tile': {
                        'x': 0x0,
                        'y': 0x0
                    }
                },
                _0x29d5ca = Math['ceil'](Math['max'](Math['abs'](_0x2170c8), Math['abs'](_0x27fb61)) / this['tilesize']);
            if (0x1 < _0x29d5ca)
                for (var _0x4fc3b7 = _0x2170c8 / _0x29d5ca, _0xb2d5d8 = _0x27fb61 / _0x29d5ca, _0xdbc311 = 0x0; _0xdbc311 < _0x29d5ca && (_0x4fc3b7 || _0xb2d5d8) && !(this['_traceStep'](_0x134f5d, _0x4c191f, _0x35deb7, _0x4fc3b7, _0xb2d5d8, _0x3028dc, _0x5de760, _0x2170c8, _0x27fb61, _0xdbc311), _0x4c191f = _0x134f5d['pos']['x'], _0x35deb7 = _0x134f5d['pos']['y'], _0x134f5d['collision']['x'] && (_0x2170c8 = _0x4fc3b7 = 0x0), _0x134f5d['collision']['y'] && (_0x27fb61 = _0xb2d5d8 = 0x0), _0x134f5d['collision']['slope']); _0xdbc311++);
            else this['_traceStep'](_0x134f5d, _0x4c191f, _0x35deb7, _0x2170c8, _0x27fb61, _0x3028dc, _0x5de760, _0x2170c8, _0x27fb61, 0x0);
            return _0x134f5d;
        },
        '_traceStep': function(_0x4c553f, _0x392723, _0x3362fc, _0x2a8046, _0x47266f, _0x52ab2f, _0x54931a, _0x3224d0, _0x34a33f, _0x52bee0) {
            _0x4c553f['pos']['x'] += _0x2a8046;
            _0x4c553f['pos']['y'] += _0x47266f;
            var _0x2e1a44 = 0x0;
            if (_0x2a8046) {
                var _0x281342 = 0x0 < _0x2a8046 ? _0x52ab2f : 0x0,
                    _0x2502bc = 0x0 > _0x2a8046 ? this['tilesize'] : 0x0,
                    _0x2e1a44 = Math['max'](Math['floor'](_0x3362fc / this['tilesize']), 0x0),
                    _0x5bb4cb = Math['min'](Math['ceil']((_0x3362fc + _0x54931a) / this['tilesize']), this['height']);
                _0x2a8046 = Math['floor']((_0x4c553f['pos']['x'] + _0x281342) / this['tilesize']);
                var _0x475621 = Math['floor']((_0x392723 + _0x281342) / this['tilesize']);
                if (0x0 < _0x52bee0 || _0x2a8046 == _0x475621 || 0x0 > _0x475621 || _0x475621 >= this['width']) _0x475621 = -0x1;
                if (0x0 <= _0x2a8046 && _0x2a8046 < this['width'])
                    for (var _0x1de6c3 = _0x2e1a44; _0x1de6c3 < _0x5bb4cb && !(-0x1 != _0x475621 && (_0x2e1a44 = this['data'][_0x1de6c3][_0x475621], 0x1 < _0x2e1a44 && _0x2e1a44 <= this['lastSlope'] && this['_checkTileDef'](_0x4c553f, _0x2e1a44, _0x392723, _0x3362fc, _0x3224d0, _0x34a33f, _0x52ab2f, _0x54931a, _0x475621, _0x1de6c3))); _0x1de6c3++)
                        if (_0x2e1a44 = this['data'][_0x1de6c3][_0x2a8046], 0x1 == _0x2e1a44 || _0x2e1a44 > this['lastSlope'] || 0x1 < _0x2e1a44 && this['_checkTileDef'](_0x4c553f, _0x2e1a44, _0x392723, _0x3362fc, _0x3224d0, _0x34a33f, _0x52ab2f, _0x54931a, _0x2a8046, _0x1de6c3)) {
                            if (0x1 < _0x2e1a44 && _0x2e1a44 <= this['lastSlope'] && _0x4c553f['collision']['slope']) break;
                            _0x4c553f['collision']['x'] = !0x0;
                            _0x4c553f['tile']['x'] = _0x2e1a44;
                            _0x392723 = _0x4c553f['pos']['x'] = _0x2a8046 * this['tilesize'] - _0x281342 + _0x2502bc;
                            _0x3224d0 = 0x0;
                            break;
                        }
            }
            if (_0x47266f) {
                _0x281342 = 0x0 < _0x47266f ? _0x54931a : 0x0;
                _0x47266f = 0x0 > _0x47266f ? this['tilesize'] : 0x0;
                _0x2e1a44 = Math['max'](Math['floor'](_0x4c553f['pos']['x'] / this['tilesize']), 0x0);
                _0x2502bc = Math['min'](Math['ceil']((_0x4c553f['pos']['x'] + _0x52ab2f) / this['tilesize']), this['width']);
                _0x1de6c3 = Math['floor']((_0x4c553f['pos']['y'] + _0x281342) / this['tilesize']);
                _0x5bb4cb = Math['floor']((_0x3362fc + _0x281342) / this['tilesize']);
                if (0x0 < _0x52bee0 || _0x1de6c3 == _0x5bb4cb || 0x0 > _0x5bb4cb || _0x5bb4cb >= this['height']) _0x5bb4cb = -0x1;
                if (0x0 <= _0x1de6c3 && _0x1de6c3 < this['height'])
                    for (_0x2a8046 = _0x2e1a44; _0x2a8046 < _0x2502bc && !(-0x1 != _0x5bb4cb && (_0x2e1a44 = this['data'][_0x5bb4cb][_0x2a8046], 0x1 < _0x2e1a44 && _0x2e1a44 <= this['lastSlope'] && this['_checkTileDef'](_0x4c553f, _0x2e1a44, _0x392723, _0x3362fc, _0x3224d0, _0x34a33f, _0x52ab2f, _0x54931a, _0x2a8046, _0x5bb4cb))); _0x2a8046++)
                        if (_0x2e1a44 = this['data'][_0x1de6c3][_0x2a8046], 0x1 == _0x2e1a44 || _0x2e1a44 > this['lastSlope'] || 0x1 < _0x2e1a44 && this['_checkTileDef'](_0x4c553f, _0x2e1a44, _0x392723, _0x3362fc, _0x3224d0, _0x34a33f, _0x52ab2f, _0x54931a, _0x2a8046, _0x1de6c3)) {
                            if (0x1 < _0x2e1a44 && _0x2e1a44 <= this['lastSlope'] && _0x4c553f['collision']['slope']) break;
                            _0x4c553f['collision']['y'] = !0x0;
                            _0x4c553f['tile']['y'] = _0x2e1a44;
                            _0x4c553f['pos']['y'] = _0x1de6c3 * this['tilesize'] - _0x281342 + _0x47266f;
                            break;
                        }
            }
        },
        '_checkTileDef': function(_0x5a50e9, _0x1a0f06, _0x4f1c01, _0x27c78e, _0x333f11, _0x2f44f3, _0x4ed7c8, _0x51f042, _0x5bc3dd, _0x12d223) {
            var _0x1b651c = this['tiledef'][_0x1a0f06];
            if (!_0x1b651c) return !0x1;
            _0x1a0f06 = (_0x1b651c[0x2] - _0x1b651c[0x0]) * this['tilesize'];
            var _0xa30315 = (_0x1b651c[0x3] - _0x1b651c[0x1]) * this['tilesize'],
                _0x1084a9 = _0x1b651c[0x4];
            _0x4ed7c8 = _0x4f1c01 + _0x333f11 + (0x0 > _0xa30315 ? _0x4ed7c8 : 0x0) - (_0x5bc3dd + _0x1b651c[0x0]) * this['tilesize'];
            _0x51f042 = _0x27c78e + _0x2f44f3 + (0x0 < _0x1a0f06 ? _0x51f042 : 0x0) - (_0x12d223 + _0x1b651c[0x1]) * this['tilesize'];
            if (0x0 < _0x1a0f06 * _0x51f042 - _0xa30315 * _0x4ed7c8) {
                if (0x0 > _0x333f11 * -_0xa30315 + _0x2f44f3 * _0x1a0f06) return _0x1084a9;
                _0x5bc3dd = Math['sqrt'](_0x1a0f06 * _0x1a0f06 + _0xa30315 * _0xa30315);
                _0x12d223 = _0xa30315 / _0x5bc3dd;
                _0x5bc3dd = -_0x1a0f06 / _0x5bc3dd;
                var _0x138e77 = _0x4ed7c8 * _0x12d223 + _0x51f042 * _0x5bc3dd,
                    _0x1b651c = _0x12d223 * _0x138e77,
                    _0x138e77 = _0x5bc3dd * _0x138e77;
                if (_0x1b651c * _0x1b651c + _0x138e77 * _0x138e77 >= _0x333f11 * _0x333f11 + _0x2f44f3 * _0x2f44f3) return _0x1084a9 || 0.5 > _0x1a0f06 * (_0x51f042 - _0x2f44f3) - _0xa30315 * (_0x4ed7c8 - _0x333f11);
                _0x5a50e9['pos']['x'] = _0x4f1c01 + _0x333f11 - _0x1b651c;
                _0x5a50e9['pos']['y'] = _0x27c78e + _0x2f44f3 - _0x138e77;
                _0x5a50e9['collision']['slope'] = {
                    'x': _0x1a0f06,
                    'y': _0xa30315,
                    'nx': _0x12d223,
                    'ny': _0x5bc3dd
                };
                return !0x0;
            }
            return !0x1;
        }
    });
    var _0x298487 = 0x1 / 0x3,
        _0x6ddc6a = 0x2 / 0x3;
    ig['CollisionMap']['defaultTileDef'] = {
        5: [0x0, 0x1, 0x1, _0x6ddc6a, !0x0],
        6: [0x0, _0x6ddc6a, 0x1, _0x298487, !0x0],
        7: [0x0, _0x298487, 0x1, 0x0, !0x0],
        3: [0x0, 0x1, 0x1, 0.5, !0x0],
        4: [0x0, 0.5, 0x1, 0x0, !0x0],
        2: [0x0, 0x1, 0x1, 0x0, !0x0],
        10: [0.5, 0x1, 0x1, 0x0, !0x0],
        21: [0x0, 0x1, 0.5, 0x0, !0x0],
        32: [_0x6ddc6a, 0x1, 0x1, 0x0, !0x0],
        43: [_0x298487, 0x1, _0x6ddc6a, 0x0, !0x0],
        54: [0x0, 0x1, _0x298487, 0x0, !0x0],
        27: [0x0, 0x0, 0x1, _0x298487, !0x0],
        28: [0x0, _0x298487, 0x1, _0x6ddc6a, !0x0],
        29: [0x0, _0x6ddc6a, 0x1, 0x1, !0x0],
        25: [0x0, 0x0, 0x1, 0.5, !0x0],
        26: [0x0, 0.5, 0x1, 0x1, !0x0],
        24: [0x0, 0x0, 0x1, 0x1, !0x0],
        11: [0x0, 0x0, 0.5, 0x1, !0x0],
        22: [0.5, 0x0, 0x1, 0x1, !0x0],
        33: [0x0, 0x0, _0x298487, 0x1, !0x0],
        44: [_0x298487, 0x0, _0x6ddc6a, 0x1, !0x0],
        55: [_0x6ddc6a, 0x0, 0x1, 0x1, !0x0],
        16: [0x1, _0x298487, 0x0, 0x0, !0x0],
        17: [0x1, _0x6ddc6a, 0x0, _0x298487, !0x0],
        18: [0x1, 0x1, 0x0, _0x6ddc6a, !0x0],
        14: [0x1, 0.5, 0x0, 0x0, !0x0],
        15: [0x1, 0x1, 0x0, 0.5, !0x0],
        13: [0x1, 0x1, 0x0, 0x0, !0x0],
        8: [0.5, 0x1, 0x0, 0x0, !0x0],
        19: [0x1, 0x1, 0.5, 0x0, !0x0],
        30: [_0x298487, 0x1, 0x0, 0x0, !0x0],
        41: [_0x6ddc6a, 0x1, _0x298487, 0x0, !0x0],
        52: [0x1, 0x1, _0x6ddc6a, 0x0, !0x0],
        38: [0x1, _0x6ddc6a, 0x0, 0x1, !0x0],
        39: [0x1, _0x298487, 0x0, _0x6ddc6a, !0x0],
        40: [0x1, 0x0, 0x0, _0x298487, !0x0],
        36: [0x1, 0.5, 0x0, 0x1, !0x0],
        37: [0x1, 0x0, 0x0, 0.5, !0x0],
        35: [0x1, 0x0, 0x0, 0x1, !0x0],
        9: [0x1, 0x0, 0.5, 0x1, !0x0],
        20: [0.5, 0x0, 0x0, 0x1, !0x0],
        31: [0x1, 0x0, _0x6ddc6a, 0x1, !0x0],
        42: [_0x6ddc6a, 0x0, _0x298487, 0x1, !0x0],
        53: [_0x298487, 0x0, 0x0, 0x1, !0x0],
        12: [0x0, 0x0, 0x1, 0x0, !0x1],
        23: [0x1, 0x1, 0x0, 0x1, !0x1],
        34: [0x1, 0x0, 0x1, 0x1, !0x1],
        45: [0x0, 0x1, 0x0, 0x0, !0x1]
    };
    ig['CollisionMap']['staticNoCollision'] = {
        'trace': function(_0x5f1d38, _0x1247da, _0x30b970, _0x1186e1) {
            return {
                'collision': {
                    'x': !0x1,
                    'y': !0x1,
                    'slope': !0x1
                },
                'pos': {
                    'x': _0x5f1d38 + _0x30b970,
                    'y': _0x1247da + _0x1186e1
                },
                'tile': {
                    'x': 0x0,
                    'y': 0x0
                }
            };
        }
    };
});
ig['baked'] = !0x0;
ig['module']('impact.background-map')['requires']('impact.map', 'impact.image')['defines'](function() {
    ig['BackgroundMap'] = ig['Map']['extend']({
        'tiles': null,
        'scroll': {
            'x': 0x0,
            'y': 0x0
        },
        'distance': 0x1,
        'repeat': !0x1,
        'tilesetName': '',
        'foreground': !0x1,
        'enabled': !0x0,
        'preRender': !0x1,
        'preRenderedChunks': null,
        'chunkSize': 0x200,
        'debugChunks': !0x1,
        'anims': {},
        'init': function(_0x3f09bf, _0x53b94d, _0x523417) {
            this['parent'](_0x3f09bf, _0x53b94d);
            this['setTileset'](_0x523417);
        },
        'setTileset': function(_0x1cc393) {
            this['tilesetName'] = _0x1cc393 instanceof ig['Image'] ? _0x1cc393['path'] : _0x1cc393;
            this['tiles'] = new ig['Image'](this['tilesetName']);
            this['preRenderedChunks'] = null;
        },
        'setScreenPos': function(_0x518001, _0x338e0b) {
            this['scroll']['x'] = _0x518001 / this['distance'];
            this['scroll']['y'] = _0x338e0b / this['distance'];
        },
        'preRenderMapToChunks': function() {
            var _0x38863b = this['width'] * this['tilesize'] * ig['system']['scale'],
                _0x3fea5a = this['height'] * this['tilesize'] * ig['system']['scale'];
            this['chunkSize'] = Math['min'](Math['max'](_0x38863b, _0x3fea5a), this['chunkSize']);
            var _0x489a22 = Math['ceil'](_0x38863b / this['chunkSize']),
                _0x539949 = Math['ceil'](_0x3fea5a / this['chunkSize']);
            this['preRenderedChunks'] = [];
            for (var _0x374a45 = 0x0; _0x374a45 < _0x539949; _0x374a45++) {
                this['preRenderedChunks'][_0x374a45] = [];
                for (var _0x2ac518 = 0x0; _0x2ac518 < _0x489a22; _0x2ac518++) this['preRenderedChunks'][_0x374a45][_0x2ac518] = this['preRenderChunk'](_0x2ac518, _0x374a45, _0x2ac518 == _0x489a22 - 0x1 ? _0x38863b - _0x2ac518 * this['chunkSize'] : this['chunkSize'], _0x374a45 == _0x539949 - 0x1 ? _0x3fea5a - _0x374a45 * this['chunkSize'] : this['chunkSize']);
            }
        },
        'preRenderChunk': function(_0x25acbb, _0x4e7ea8, _0x3066ab, _0x47270b) {
            var _0x5cc140 = _0x3066ab / this['tilesize'] / ig['system']['scale'] + 0x1,
                _0x5a5cf2 = _0x47270b / this['tilesize'] / ig['system']['scale'] + 0x1,
                _0x9dc4dd = _0x25acbb * this['chunkSize'] / ig['system']['scale'] % this['tilesize'],
                _0x4682a0 = _0x4e7ea8 * this['chunkSize'] / ig['system']['scale'] % this['tilesize'];
            _0x25acbb = Math['floor'](_0x25acbb * this['chunkSize'] / this['tilesize'] / ig['system']['scale']);
            _0x4e7ea8 = Math['floor'](_0x4e7ea8 * this['chunkSize'] / this['tilesize'] / ig['system']['scale']);
            var _0x3ff936 = ig['$new']('canvas');
            _0x3ff936['width'] = _0x3066ab;
            _0x3ff936['height'] = _0x47270b;
            _0x3ff936['retinaResolutionEnabled'] = !0x1;
            _0x47270b = _0x3ff936['getContext']('2d');
            ig['System']['scaleMode'](_0x3ff936, _0x47270b);
            _0x3066ab = ig['system']['context'];
            ig['system']['context'] = _0x47270b;
            for (_0x47270b = 0x0; _0x47270b < _0x5cc140; _0x47270b++)
                for (var _0x1f722e = 0x0; _0x1f722e < _0x5a5cf2; _0x1f722e++)
                    if (_0x47270b + _0x25acbb < this['width'] && _0x1f722e + _0x4e7ea8 < this['height']) {
                        var _0x155332 = this['data'][_0x1f722e + _0x4e7ea8][_0x47270b + _0x25acbb];
                        _0x155332 && this['tiles']['drawTile'](_0x47270b * this['tilesize'] - _0x9dc4dd, _0x1f722e * this['tilesize'] - _0x4682a0, _0x155332 - 0x1, this['tilesize']);
                    } ig['system']['context'] = _0x3066ab;
            return _0x3ff936;
        },
        'draw': function() {
            this['tiles']['loaded'] && this['enabled'] && (this['preRender'] ? this['drawPreRendered']() : this['drawTiled']());
        },
        'drawPreRendered': function() {
            this['preRenderedChunks'] || this['preRenderMapToChunks']();
            var _0x206480 = ig['system']['getDrawPos'](this['scroll']['x']),
                _0x2a398e = ig['system']['getDrawPos'](this['scroll']['y']);
            if (this['repeat']) var _0x3564a1 = this['width'] * this['tilesize'] * ig['system']['scale'],
                _0x206480 = (_0x206480 % _0x3564a1 + _0x3564a1) % _0x3564a1,
                _0x3564a1 = this['height'] * this['tilesize'] * ig['system']['scale'],
                _0x2a398e = (_0x2a398e % _0x3564a1 + _0x3564a1) % _0x3564a1;
            var _0x3564a1 = Math['max'](Math['floor'](_0x206480 / this['chunkSize']), 0x0),
                _0x4a749f = Math['max'](Math['floor'](_0x2a398e / this['chunkSize']), 0x0),
                _0x5752f0 = Math['ceil']((_0x206480 + ig['system']['realWidth']) / this['chunkSize']),
                _0x4a5ffe = Math['ceil']((_0x2a398e + ig['system']['realHeight']) / this['chunkSize']),
                _0x3003f5 = this['preRenderedChunks'][0x0]['length'],
                _0x4897b7 = this['preRenderedChunks']['length'];
            this['repeat'] || (_0x5752f0 = Math['min'](_0x5752f0, _0x3003f5), _0x4a5ffe = Math['min'](_0x4a5ffe, _0x4897b7));
            for (var _0x1862ec = 0x0; _0x4a749f < _0x4a5ffe; _0x4a749f++) {
                for (var _0x4b876f = 0x0, _0x592e23 = _0x3564a1; _0x592e23 < _0x5752f0; _0x592e23++) {
                    var _0x23ff47 = this['preRenderedChunks'][_0x4a749f % _0x4897b7][_0x592e23 % _0x3003f5],
                        _0x45fdf4 = -_0x206480 + _0x592e23 * this['chunkSize'] - _0x4b876f,
                        _0x5a2c50 = -_0x2a398e + _0x4a749f * this['chunkSize'] - _0x1862ec;
                    ig['system']['context']['drawImage'](_0x23ff47, _0x45fdf4, _0x5a2c50);
                    ig['Image']['drawCount']++;
                    this['debugChunks'] && (ig['system']['context']['strokeStyle'] = '#f0f', ig['system']['context']['strokeRect'](_0x45fdf4, _0x5a2c50, this['chunkSize'], this['chunkSize']));
                    this['repeat'] && _0x23ff47['width'] < this['chunkSize'] && _0x45fdf4 + _0x23ff47['width'] < ig['system']['realWidth'] && (_0x4b876f += this['chunkSize'] - _0x23ff47['width'], _0x5752f0++);
                }
                this['repeat'] && _0x23ff47['height'] < this['chunkSize'] && _0x5a2c50 + _0x23ff47['height'] < ig['system']['realHeight'] && (_0x1862ec += this['chunkSize'] - _0x23ff47['height'], _0x4a5ffe++);
            }
        },
        'drawTiled': function() {
            for (var _0x298dfd = 0x0, _0x5f01de = null, _0x1efd9e = (this['scroll']['x'] / this['tilesize'])['toInt'](), _0x2b9275 = (this['scroll']['y'] / this['tilesize'])['toInt'](), _0x512ee2 = this['scroll']['x'] % this['tilesize'], _0x3e2fb3 = this['scroll']['y'] % this['tilesize'], _0x35cb63 = -_0x512ee2 - this['tilesize'], _0x512ee2 = ig['system']['width'] + this['tilesize'] - _0x512ee2, _0x65aefb = ig['system']['height'] + this['tilesize'] - _0x3e2fb3, _0x55a44e = -0x1, _0x3e2fb3 = -_0x3e2fb3 - this['tilesize']; _0x3e2fb3 < _0x65aefb; _0x55a44e++, _0x3e2fb3 += this['tilesize']) {
                var _0x71ac98 = _0x55a44e + _0x2b9275;
                if (_0x71ac98 >= this['height'] || 0x0 > _0x71ac98) {
                    if (!this['repeat']) continue;
                    _0x71ac98 = (_0x71ac98 % this['height'] + this['height']) % this['height'];
                }
                for (var _0x2a3bb = -0x1, _0x38791c = _0x35cb63; _0x38791c < _0x512ee2; _0x2a3bb++, _0x38791c += this['tilesize']) {
                    _0x298dfd = _0x2a3bb + _0x1efd9e;
                    if (_0x298dfd >= this['width'] || 0x0 > _0x298dfd) {
                        if (!this['repeat']) continue;
                        _0x298dfd = (_0x298dfd % this['width'] + this['width']) % this['width'];
                    }
                    if (_0x298dfd = this['data'][_0x71ac98][_0x298dfd])(_0x5f01de = this['anims'][_0x298dfd - 0x1]) ? _0x5f01de['draw'](_0x38791c, _0x3e2fb3) : this['tiles']['drawTile'](_0x38791c, _0x3e2fb3, _0x298dfd - 0x1, this['tilesize']);
                }
            }
        }
    });
});
ig['baked'] = !0x0;
ig['module']('impact.game')['requires']('impact.impact', 'impact.entity', 'impact.collision-map', 'impact.background-map')['defines'](function() {
    ig['Game'] = ig['Class']['extend']({
        'clearColor': '#000000',
        'gravity': 0x0,
        'screen': {
            'x': 0x0,
            'y': 0x0
        },
        '_rscreen': {
            'x': 0x0,
            'y': 0x0
        },
        'entities': [],
        'namedEntities': {},
        'collisionMap': ig['CollisionMap']['staticNoCollision'],
        'backgroundMaps': [],
        'backgroundAnims': {},
        'autoSort': !0x1,
        'sortBy': null,
        'cellSize': 0x40,
        '_deferredKill': [],
        '_levelToLoad': null,
        '_doSortEntities': !0x1,
        'staticInstantiate': function() {
            this['sortBy'] = this['sortBy'] || ig['Game']['SORT']['Z_INDEX'];
            ig['game'] = this;
            return null;
        },
        'loadLevel': function(_0x3f430d) {
            this['screen'] = {
                'x': 0x0,
                'y': 0x0
            };
            this['entities'] = [];
            this['namedEntities'] = {};
            for (var _0xc13f54 = 0x0; _0xc13f54 < _0x3f430d['entities']['length']; _0xc13f54++) {
                var _0x5bd7e7 = _0x3f430d['entities'][_0xc13f54];
                this['spawnEntity'](_0x5bd7e7['type'], _0x5bd7e7['x'], _0x5bd7e7['y'], _0x5bd7e7['settings']);
            }
            this['sortEntities']();
            this['collisionMap'] = ig['CollisionMap']['staticNoCollision'];
            this['backgroundMaps'] = [];
            for (_0xc13f54 = 0x0; _0xc13f54 < _0x3f430d['layer']['length']; _0xc13f54++)
                if (_0x5bd7e7 = _0x3f430d['layer'][_0xc13f54], 'collision' == _0x5bd7e7['name']) this['collisionMap'] = new ig['CollisionMap'](_0x5bd7e7['tilesize'], _0x5bd7e7['data']);
                else {
                    var _0x33a7fc = new ig['BackgroundMap'](_0x5bd7e7['tilesize'], _0x5bd7e7['data'], _0x5bd7e7['tilesetName']);
                    _0x33a7fc['anims'] = this['backgroundAnims'][_0x5bd7e7['tilesetName']] || {};
                    _0x33a7fc['repeat'] = _0x5bd7e7['repeat'];
                    _0x33a7fc['distance'] = _0x5bd7e7['distance'];
                    _0x33a7fc['foreground'] = !!_0x5bd7e7['foreground'];
                    _0x33a7fc['preRender'] = !!_0x5bd7e7['preRender'];
                    _0x33a7fc['name'] = _0x5bd7e7['name'];
                    this['backgroundMaps']['push'](_0x33a7fc);
                } for (_0xc13f54 = 0x0; _0xc13f54 < this['entities']['length']; _0xc13f54++) this['entities'][_0xc13f54]['ready']();
        },
        'loadLevelDeferred': function(_0x58c3a4) {
            this['_levelToLoad'] = _0x58c3a4;
        },
        'getMapByName': function(_0x5c17eb) {
            if ('collision' == _0x5c17eb) return this['collisionMap'];
            for (var _0x4dddd2 = 0x0; _0x4dddd2 < this['backgroundMaps']['length']; _0x4dddd2++)
                if (this['backgroundMaps'][_0x4dddd2]['name'] == _0x5c17eb) return this['backgroundMaps'][_0x4dddd2];
            return null;
        },
        'getEntityByName': function(_0x5bce04) {
            return this['namedEntities'][_0x5bce04];
        },
        'getEntitiesByType': function(_0x44d95d) {
            _0x44d95d = 'string' === typeof _0x44d95d ? ig['global'][_0x44d95d] : _0x44d95d;
            for (var _0x198ddc = [], _0x59d57b = 0x0; _0x59d57b < this['entities']['length']; _0x59d57b++) {
                var _0x539565 = this['entities'][_0x59d57b];
                _0x539565 instanceof _0x44d95d && !_0x539565['_killed'] && _0x198ddc['push'](_0x539565);
            }
            return _0x198ddc;
        },
        'spawnEntity': function(_0xe7cf96, _0xeb9775, _0x3791ad, _0x571287) {
            var _0x10f007 = 'string' === typeof _0xe7cf96 ? ig['global'][_0xe7cf96] : _0xe7cf96;
            if (!_0x10f007) throw 'Can\x27t\x20spawn\x20entity\x20of\x20type\x20' + _0xe7cf96;
            _0xe7cf96 = new _0x10f007(_0xeb9775, _0x3791ad, _0x571287 || {});
            this['entities']['push'](_0xe7cf96);
            _0xe7cf96['name'] && (this['namedEntities'][_0xe7cf96['name']] = _0xe7cf96);
            return _0xe7cf96;
        },
        'sortEntities': function() {
            this['entities']['sort'](this['sortBy']);
        },
        'sortEntitiesDeferred': function() {
            this['_doSortEntities'] = !0x0;
        },
        'removeEntity': function(_0x5940c8) {
            _0x5940c8['name'] && delete this['namedEntities'][_0x5940c8['name']];
            _0x5940c8['_killed'] = !0x0;
            _0x5940c8['type'] = ig['Entity']['TYPE']['NONE'];
            _0x5940c8['checkAgainst'] = ig['Entity']['TYPE']['NONE'];
            _0x5940c8['collides'] = ig['Entity']['COLLIDES']['NEVER'];
            this['_deferredKill']['push'](_0x5940c8);
        },
        'run': function() {
            this['update']();
            this['draw']();
        },
        'update': function() {
            this['_levelToLoad'] && (this['loadLevel'](this['_levelToLoad']), this['_levelToLoad'] = null);
            this['updateEntities']();
            this['checkEntities']();
            for (var _0x1528be = 0x0; _0x1528be < this['_deferredKill']['length']; _0x1528be++) this['_deferredKill'][_0x1528be]['erase'](), this['entities']['erase'](this['_deferredKill'][_0x1528be]);
            this['_deferredKill'] = [];
            if (this['_doSortEntities'] || this['autoSort']) this['sortEntities'](), this['_doSortEntities'] = !0x1;
            for (var _0x1386b7 in this['backgroundAnims']) {
                var _0x1528be = this['backgroundAnims'][_0x1386b7],
                    _0x59c525;
                for (_0x59c525 in _0x1528be) _0x1528be[_0x59c525]['update']();
            }
        },
        'updateEntities': function() {
            for (var _0xeb66e7 = 0x0; _0xeb66e7 < this['entities']['length']; _0xeb66e7++) {
                var _0x1d2050 = this['entities'][_0xeb66e7];
                _0x1d2050['_killed'] || _0x1d2050['update']();
            }
        },
        'draw': function() {
            this['clearColor'] && ig['system']['clear'](this['clearColor']);
            this['_rscreen']['x'] = ig['system']['getDrawPos'](this['screen']['x']) / ig['system']['scale'];
            this['_rscreen']['y'] = ig['system']['getDrawPos'](this['screen']['y']) / ig['system']['scale'];
            var _0x42e826;
            for (_0x42e826 = 0x0; _0x42e826 < this['backgroundMaps']['length']; _0x42e826++) {
                var _0x3ed08c = this['backgroundMaps'][_0x42e826];
                if (_0x3ed08c['foreground']) break;
                _0x3ed08c['setScreenPos'](this['screen']['x'], this['screen']['y']);
                _0x3ed08c['draw']();
            }
            this['drawEntities']();
            for (_0x42e826; _0x42e826 < this['backgroundMaps']['length']; _0x42e826++) _0x3ed08c = this['backgroundMaps'][_0x42e826], _0x3ed08c['setScreenPos'](this['screen']['x'], this['screen']['y']), _0x3ed08c['draw']();
        },
        'drawEntities': function() {
            for (var _0x227d48 = 0x0; _0x227d48 < this['entities']['length']; _0x227d48++) this['entities'][_0x227d48]['draw']();
        },
        'checkEntities': function() {
            for (var _0x47fcb8 = {}, _0x2f21f1 = 0x0; _0x2f21f1 < this['entities']['length']; _0x2f21f1++) {
                var _0x229937 = this['entities'][_0x2f21f1];
                if (!(_0x229937['type'] == ig['Entity']['TYPE']['NONE'] && _0x229937['checkAgainst'] == ig['Entity']['TYPE']['NONE'] && _0x229937['collides'] == ig['Entity']['COLLIDES']['NEVER']))
                    for (var _0x156571 = {}, _0x1098f0 = Math['floor'](_0x229937['pos']['y'] / this['cellSize']), _0x2f0050 = Math['floor']((_0x229937['pos']['x'] + _0x229937['size']['x']) / this['cellSize']) + 0x1, _0x2469da = Math['floor']((_0x229937['pos']['y'] + _0x229937['size']['y']) / this['cellSize']) + 0x1, _0x140fa8 = Math['floor'](_0x229937['pos']['x'] / this['cellSize']); _0x140fa8 < _0x2f0050; _0x140fa8++)
                        for (var _0x5c3955 = _0x1098f0; _0x5c3955 < _0x2469da; _0x5c3955++)
                            if (_0x47fcb8[_0x140fa8])
                                if (_0x47fcb8[_0x140fa8][_0x5c3955]) {
                                    for (var _0x44f319 = _0x47fcb8[_0x140fa8][_0x5c3955], _0x4e7222 = 0x0; _0x4e7222 < _0x44f319['length']; _0x4e7222++) _0x229937['touches'](_0x44f319[_0x4e7222]) && !_0x156571[_0x44f319[_0x4e7222]['id']] && (_0x156571[_0x44f319[_0x4e7222]['id']] = !0x0, ig['Entity']['checkPair'](_0x229937, _0x44f319[_0x4e7222]));
                                    _0x44f319['push'](_0x229937);
                                } else _0x47fcb8[_0x140fa8][_0x5c3955] = [_0x229937];
                else _0x47fcb8[_0x140fa8] = {}, _0x47fcb8[_0x140fa8][_0x5c3955] = [_0x229937];
            }
        }
    });
    ig['Game']['SORT'] = {
        'Z_INDEX': function(_0x332182, _0x5789b8) {
            return _0x332182['zIndex'] - _0x5789b8['zIndex'];
        },
        'POS_X': function(_0x258538, _0x4835c4) {
            return _0x258538['pos']['x'] + _0x258538['size']['x'] - (_0x4835c4['pos']['x'] + _0x4835c4['size']['x']);
        },
        'POS_Y': function(_0x1434fe, _0x19db50) {
            return _0x1434fe['pos']['y'] + _0x1434fe['size']['y'] - (_0x19db50['pos']['y'] + _0x19db50['size']['y']);
        }
    };
});
ig['baked'] = !0x0;
ig['module']('plugins.data.vector')['defines'](function() {
    Vector2 = function(_0x1f0e63, _0x5882c4) {
        this['x'] = _0x1f0e63 || 0x0;
        this['y'] = _0x5882c4 || 0x0;
    };
    Vector2['prototype'] = {
        'valType': 'number',
        'neg': function() {
            this['x'] = -this['x'];
            this['y'] = -this['y'];
            return this;
        },
        'row': function(_0x5540e8) {
            typeof _0x5540e8 === this['valType'] && (this['y'] = _0x5540e8);
            return this['y'];
        },
        'col': function(_0x5e8c5c) {
            typeof _0x5e8c5c === this['valType'] && (this['x'] = _0x5e8c5c);
            return this['x'];
        },
        'add': function(_0x2a5186) {
            _0x2a5186 instanceof Vector2 ? (this['x'] += _0x2a5186['x'], this['y'] += _0x2a5186['y']) : (this['x'] += _0x2a5186, this['y'] += _0x2a5186);
            return this;
        },
        'sub': function(_0x164b71) {
            _0x164b71 instanceof Vector2 ? (this['x'] -= _0x164b71['x'], this['y'] -= _0x164b71['y']) : (this['x'] -= _0x164b71, this['y'] -= _0x164b71);
            return this;
        },
        'mul': function(_0x27b49b) {
            _0x27b49b instanceof Vector2 ? (this['x'] *= _0x27b49b['x'], this['y'] *= _0x27b49b['y']) : (this['x'] *= _0x27b49b, this['y'] *= _0x27b49b);
            return this;
        },
        'div': function(_0x2a4552) {
            _0x2a4552 instanceof Vector2 ? (0x0 != _0x2a4552['x'] && (this['x'] /= _0x2a4552['x']), 0x0 != _0x2a4552['y'] && (this['y'] /= _0x2a4552['y'])) : 0x0 != _0x2a4552 && (this['x'] /= _0x2a4552, this['y'] /= _0x2a4552);
            return this;
        },
        'equals': function(_0x1ac630) {
            return this['x'] == _0x1ac630['x'] && this['y'] == _0x1ac630['y'];
        },
        'dot': function(_0xff04d2) {
            return this['x'] * _0xff04d2['x'] + this['y'] * _0xff04d2['y'];
        },
        'cross': function(_0x44047b) {
            return this['x'] * _0x44047b['y'] - this['y'] * _0x44047b['x'];
        },
        'length': function() {
            return Math['sqrt'](this['dot'](this));
        },
        'norm': function() {
            return this['divide'](this['length']());
        },
        'min': function() {
            return Math['min'](this['x'], this['y']);
        },
        'max': function() {
            return Math['max'](this['x'], this['y']);
        },
        'toAngles': function() {
            return -Math['atan2'](-this['y'], this['x']);
        },
        'angleTo': function(_0x4c9aae) {
            return Math['acos'](this['dot'](_0x4c9aae) / (this['length']() * _0x4c9aae['length']()));
        },
        'toArray': function(_0x57df66) {
            return [this['x'], this['y']]['slice'](0x0, _0x57df66 || 0x2);
        },
        'clone': function() {
            return new Vector2(this['x'], this['y']);
        },
        'set': function(_0x229da1, _0x535378) {
            this['x'] = _0x229da1;
            this['y'] = _0x535378;
            return this;
        },
        'unit': function() {
            var _0x337158 = this['length']();
            if (0x0 < _0x337158) return new Vector2(this['x'] / _0x337158, this['y'] / _0x337158);
            throw 'Divide\x20by\x200\x20error\x20in\x20unitVector\x20function\x20of\x20vector:' + this;
        },
        'turnRight': function() {
            var _0x1a3f2f = this['x'];
            this['x'] = -this['y'];
            this['y'] = _0x1a3f2f;
            return this;
        },
        'turnLeft': function() {
            var _0x4398b4 = this['x'];
            this['x'] = this['y'];
            this['y'] = -_0x4398b4;
            return this;
        },
        'rotate': function(_0x1b8ef6) {
            var _0x3d9c7e = this['clone']();
            this['x'] = _0x3d9c7e['x'] * Math['cos'](_0x1b8ef6) - _0x3d9c7e['y'] * Math['sin'](_0x1b8ef6);
            this['y'] = _0x3d9c7e['x'] * Math['sin'](_0x1b8ef6) + _0x3d9c7e['y'] * Math['cos'](_0x1b8ef6);
            return this;
        }
    };
    Vector2['negative'] = function(_0x46f4fb) {
        return new Vector2(-_0x46f4fb['x'], -_0x46f4fb['y']);
    };
    Vector2['add'] = function(_0x1cc087, _0x495aa0) {
        return _0x495aa0 instanceof Vector2 ? new Vector2(_0x1cc087['x'] + _0x495aa0['x'], _0x1cc087['y'] + _0x495aa0['y']) : new Vector2(_0x1cc087['x'] + v, _0x1cc087['y'] + v);
    };
    Vector2['subtract'] = function(_0x820f1e, _0x5540fe) {
        return _0x5540fe instanceof Vector2 ? new Vector2(_0x820f1e['x'] - _0x5540fe['x'], _0x820f1e['y'] - _0x5540fe['y']) : new Vector2(_0x820f1e['x'] - v, _0x820f1e['y'] - v);
    };
    Vector2['multiply'] = function(_0x210bfa, _0x3c343b) {
        return _0x3c343b instanceof Vector2 ? new Vector2(_0x210bfa['x'] * _0x3c343b['x'], _0x210bfa['y'] * _0x3c343b['y']) : new Vector2(_0x210bfa['x'] * v, _0x210bfa['y'] * v);
    };
    Vector2['divide'] = function(_0x28a7ad, _0x4abd14) {
        return _0x4abd14 instanceof Vector2 ? new Vector2(_0x28a7ad['x'] / _0x4abd14['x'], _0x28a7ad['y'] / _0x4abd14['y']) : new Vector2(_0x28a7ad['x'] / v, _0x28a7ad['y'] / v);
    };
    Vector2['equals'] = function(_0x31b8e3, _0x8bbf3e) {
        return _0x31b8e3['x'] == _0x8bbf3e['x'] && _0x31b8e3['y'] == _0x8bbf3e['y'];
    };
    Vector2['dot'] = function(_0x4b213e, _0x3dd151) {
        return _0x4b213e['x'] * _0x3dd151['x'] + _0x4b213e['y'] * _0x3dd151['y'];
    };
    Vector2['cross'] = function(_0x26d1e4, _0x652083) {
        return _0x26d1e4['x'] * _0x652083['y'] - _0x26d1e4['y'] * _0x652083['x'];
    };
});
ig['baked'] = !0x0;
ig['module']('plugins.clickable-div-layer')['requires']('plugins.data.vector')['defines'](function() {
    ClickableDivLayer = ig['Class']['extend']({
        'pos': new Vector2(0x0, 0x0),
        'size': new Vector2(0x0, 0x0),
        'identifier': null,
        'invisImagePath': 'media/graphics/misc/invisible.png',
        'init': function(_0x148332) {
            this['pos'] = new Vector2(_0x148332['pos']['x'], _0x148332['pos']['y']);
            this['size'] = new Vector2(_0x148332['size']['x'], _0x148332['size']['y']);
            var _0x37ce66 = 'more-games',
                _0x7902e1 = 'www.google.com',
                _0xf2c8ff = !0x1;
            _0x148332['div_layer_name'] && (_0x37ce66 = _0x148332['div_layer_name']);
            _0x148332['link'] && (_0x7902e1 = _0x148332['link']);
            _0x148332['newWindow'] && (_0xf2c8ff = _0x148332['newWindow']);
            this['createClickableLayer'](_0x37ce66, _0x7902e1, _0xf2c8ff);
        },
        'createClickableLayer': function(_0x711ad0, _0x6b7db, _0x1b46c7) {
            this['identifier'] = _0x711ad0;
            var _0x5a293e = ig['domHandler']['getElementById']('#' + _0x711ad0);
            _0x5a293e ? (ig['domHandler']['show'](_0x5a293e), ig['domHandler']['attr'](_0x5a293e, 'href', _0x6b7db)) : this['createClickableOutboundLayer'](_0x711ad0, _0x6b7db, this['invisImagePath'], _0x1b46c7);
        },
        'update': function(_0x35cd89, _0x7f134d) {
            this['pos']['x'] === _0x35cd89 && this['pos']['y'] === _0x7f134d || (ig['sizeHandler']['dynamicClickableEntityDivs'][this['identifier']] = {}, ig['sizeHandler']['dynamicClickableEntityDivs'][this['identifier']]['width'] = this['size']['x'], ig['sizeHandler']['dynamicClickableEntityDivs'][this['identifier']]['height'] = this['size']['y'], ig['sizeHandler']['dynamicClickableEntityDivs'][this['identifier']]['entity_pos_x'] = this['pos']['x'], ig['sizeHandler']['dynamicClickableEntityDivs'][this['identifier']]['entity_pos_y'] = this['pos']['y']);
        },
        'createClickableOutboundLayer': function(_0x406486, _0x141904, _0x4f6033, _0x555931) {
            var _0x364a08 = ig['domHandler']['create']('div');
            ig['domHandler']['attr'](_0x364a08, 'id', _0x406486);
            var _0x3b5f43 = ig['domHandler']['create']('a');
            _0x555931 ? (ig['domHandler']['attr'](_0x3b5f43, 'href', _0x141904), ig['domHandler']['attr'](_0x3b5f43, 'target', '_blank')) : ig['domHandler']['attr'](_0x3b5f43, 'href', _0x141904);
            _0x141904 = ig['domHandler']['create']('img');
            ig['domHandler']['css'](_0x141904, {
                'width': '100%',
                'height': '100%'
            });
            ig['domHandler']['attr'](_0x141904, 'src', _0x4f6033);
            _0x4f6033 = Math['min'](ig['sizeHandler']['scaleRatioMultiplier']['x'], ig['sizeHandler']['scaleRatioMultiplier']['y']);
            if (ig['ua']['mobile']) {
                _0x555931 = ig['domHandler']['getElementById']('#canvas');
                _0x555931 = ig['domHandler']['getOffsets'](_0x555931);
                var _0xdf5f5f = _0x555931['left'],
                    _0x35a5ff = _0x555931['top'];
                console['log'](_0x555931['left']);
                ig['sizeHandler']['disableStretchToFitOnMobileFlag'] ? (_0x555931 = Math['floor'](_0xdf5f5f + this['pos']['x'] * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px', _0x35a5ff = Math['floor'](_0x35a5ff + this['pos']['y'] * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px', _0xdf5f5f = Math['floor'](this['size']['x'] * ig['sizeHandler']['scaleRatioMultiplier']['x']) + 'px', _0x4f6033 = Math['floor'](this['size']['y'] * ig['sizeHandler']['scaleRatioMultiplier']['y']) + 'px') : (_0x555931 = Math['floor'](this['pos']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x35a5ff = Math['floor'](this['pos']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px', _0xdf5f5f = Math['floor'](this['size']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x4f6033 = Math['floor'](this['size']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px');
            } else _0x555931 = ig['domHandler']['getElementById']('#canvas'), _0x555931 = ig['domHandler']['getOffsets'](_0x555931), _0xdf5f5f = _0x555931['left'], _0x35a5ff = _0x555931['top'], ig['sizeHandler']['enableStretchToFitOnDesktopFlag'] ? (_0x555931 = Math['floor'](_0xdf5f5f + this['pos']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x35a5ff = Math['floor'](_0x35a5ff + this['pos']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px', _0xdf5f5f = Math['floor'](this['size']['x'] * ig['sizeHandler']['sizeRatio']['x']) + 'px', _0x4f6033 = Math['floor'](this['size']['y'] * ig['sizeHandler']['sizeRatio']['y']) + 'px') : (_0x555931 = Math['floor'](_0xdf5f5f + this['pos']['x'] * _0x4f6033) + 'px', _0x35a5ff = Math['floor'](_0x35a5ff + this['pos']['y'] * _0x4f6033) + 'px', _0xdf5f5f = Math['floor'](this['size']['x'] * _0x4f6033) + 'px', _0x4f6033 = Math['floor'](this['size']['y'] * _0x4f6033) + 'px');
            ig['domHandler']['css'](_0x364a08, {
                'float': 'left',
                'position': 'absolute',
                'left': _0x555931,
                'top': _0x35a5ff,
                'width': _0xdf5f5f,
                'height': _0x4f6033,
                'z-index': 0x3
            });
            ig['domHandler']['addEvent'](_0x364a08, 'mousemove', ig['input']['mousemove']['bind'](ig['input']), !0x1);
            ig['domHandler']['appendChild'](_0x3b5f43, _0x141904);
            ig['domHandler']['appendChild'](_0x364a08, _0x3b5f43);
            ig['domHandler']['appendToBody'](_0x364a08);
            ig['sizeHandler']['dynamicClickableEntityDivs'][_0x406486] = {};
            ig['sizeHandler']['dynamicClickableEntityDivs'][_0x406486]['width'] = this['size']['x'];
            ig['sizeHandler']['dynamicClickableEntityDivs'][_0x406486]['height'] = this['size']['y'];
            ig['sizeHandler']['dynamicClickableEntityDivs'][_0x406486]['entity_pos_x'] = this['pos']['x'];
            ig['sizeHandler']['dynamicClickableEntityDivs'][_0x406486]['entity_pos_y'] = this['pos']['y'];
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.ag-logo')['requires']('plugins.clickable-div-layer', 'impact.entity')['defines'](function() {
    EntityButtonCustomAg = ig['Entity']['extend']({
        'collides': ig['Entity']['COLLIDES']['NEVER'],
        'type': ig['Entity']['TYPE']['A'],
        'size': new Vector2(0x30, 0x30),
        'fillColor': null,
        'zIndex': 0x17318,
        'init': function(_0x559015, _0x4d56fe, _0x11f359) {
            this['parent'](_0x559015, _0x4d56fe, _0x11f359);
            !ig['global']['wm'] && !isNaN(_0x11f359['zIndex']) && (this['zIndex'] = _0x11f359['zIndex']);
        },
        'clicked': function() {
            throw 'no\x20implementation\x20on\x20clicked()';
        },
        'clicking': function() {
            throw 'no\x20implementation\x20on\x20clicking()';
        },
        'released': function() {
            throw 'no\x20implementation\x20on\x20released()';
        },
        'kill': function() {
            this['isKilled'] = !0x0;
            this['parent']();
        }
    });
    EntityAgLogo = EntityButtonCustomAg['extend']({
        'type': ig['Entity']['TYPE']['A'],
        'gravityFactor': 0x0,
        'logo': new ig['Image']('media/graphics/ag-logo.png'),
        'zIndex': 0x2ee,
        'clickableLayer': null,
        'link': null,
        'newWindow': !0x1,
        'div_layer_name': 'ag-logo',
        'name': 'ag-logo',
        'isHidden': !0x1,
        'link': 'http://www.addictinggames.com',
        'newWindow': !0x0,
        'init': function(_0x1dceea, _0x288501, _0x44c74d) {
            this['parent'](_0x1dceea, _0x288501, _0x44c74d);
            ig['game']['agLogo'] = this;
            this['size'] = {
                'x': this['logo']['width'],
                'y': this['logo']['height']
            };
            this['updateDiv']();
        },
        'updateDiv': function() {
            var _0x5cd1f0 = $('#' + this['div_layer_name']);
            _0x5cd1f0 && _0x5cd1f0['remove']();
            this['clickableLayer'] = new ClickableDivLayer(this);
        },
        'show': function() {
            var _0x41fd08 = ig['domHandler']['getElementById']('#' + this['div_layer_name']);
            _0x41fd08 && ig['domHandler']['show'](_0x41fd08);
            this['isHidden'] = !0x1;
        },
        'hide': function() {
            var _0x474346 = ig['domHandler']['getElementById']('#' + this['div_layer_name']);
            _0x474346 && ig['domHandler']['hide'](_0x474346);
            this['isHidden'] = !0x0;
        },
        'clicked': function() {},
        'clicking': function() {},
        'released': function() {},
        'draw': function() {
            this['parent']();
            this['logo']['draw'](this['pos']['x'], this['pos']['y']);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.patches.webkit-image-smoothing-patch')['defines'](function() {
    ig['System'] && (ig['System']['SCALE'] = {
        'CRISP': function(_0x5e81a0, _0x5cce64) {
            _0x5cce64['imageSmoothingEnabled'] = _0x5cce64['msImageSmoothingEnabled'] = _0x5cce64['mozImageSmoothingEnabled'] = _0x5cce64['oImageSmoothingEnabled'] = !0x1;
            _0x5e81a0['style']['imageRendering'] = '-moz-crisp-edges';
            _0x5e81a0['style']['imageRendering'] = '-o-crisp-edges';
            _0x5e81a0['style']['imageRendering'] = '-webkit-optimize-contrast';
            _0x5e81a0['style']['imageRendering'] = 'crisp-edges';
            _0x5e81a0['style']['msInterpolationMode'] = 'nearest-neighbor';
        },
        'SMOOTH': function(_0x492a6f, _0x255b5f) {
            _0x255b5f['imageSmoothingEnabled'] = _0x255b5f['msImageSmoothingEnabled'] = _0x255b5f['mozImageSmoothingEnabled'] = _0x255b5f['oImageSmoothingEnabled'] = !0x0;
            _0x492a6f['style']['imageRendering'] = '';
            _0x492a6f['style']['msInterpolationMode'] = '';
        }
    }, ig['System']['scaleMode'] = ig['System']['SCALE']['SMOOTH']);
});
ig['baked'] = !0x0;
ig['module']('plugins.patches.windowfocus-onMouseDown-patch')['defines'](function() {
    var _0x57ae49 = !0x1;
    try {
        _0x57ae49 = window['self'] !== window['top'], !0x1 === _0x57ae49 && (_0x57ae49 = 0x0 < window['frames']['length']);
    } catch (_0x3e7c68) {
        _0x57ae49 = !0x0;
    }
    ig['Input']['inject']({
        'keydown': function(_0xfddb14) {
            var _0x185335 = _0xfddb14['target']['tagName'];
            if (!('INPUT' == _0x185335 || 'TEXTAREA' == _0x185335))
                if (_0x185335 = 'keydown' == _0xfddb14['type'] ? _0xfddb14['keyCode'] : 0x2 == _0xfddb14['button'] ? ig['KEY']['MOUSE2'] : ig['KEY']['MOUSE1'], _0x57ae49 && 0x0 > _0x185335 && window['focus'](), ('touchstart' == _0xfddb14['type'] || 'mousedown' == _0xfddb14['type']) && this['mousemove'](_0xfddb14), _0x185335 = this['bindings'][_0x185335]) this['actions'][_0x185335] = !0x0, this['locks'][_0x185335] || (this['presses'][_0x185335] = !0x0, this['locks'][_0x185335] = !0x0), _0xfddb14['stopPropagation'](), _0xfddb14['preventDefault']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.handlers.dom-handler')['defines'](function() {
    ig['DomHandler'] = ig['Class']['extend']({
        'JQUERYAVAILABLE': !0x1,
        'init': function() {
            this['JQUERYAVAILABLE'] = this['_jqueryAvailable']();
        },
        '_jqueryAvailable': function() {
            return 'undefined' !== typeof jQuery;
        },
        'addEvent': function(_0xb3b038, _0x57045d, _0x3d96bb, _0x549544) {
            if (this['JQUERYAVAILABLE']) _0xb3b038['on'](_0x57045d, _0x3d96bb);
            else _0xb3b038['addEventListener'](_0x57045d, _0x3d96bb, _0x549544);
        },
        'create': function(_0x2abc82) {
            return this['JQUERYAVAILABLE'] ? $('<' + _0x2abc82 + '>') : ig['$new'](_0x2abc82);
        },
        'getElementByClass': function(_0x448977) {
            return this['JQUERYAVAILABLE'] ? $('.' + _0x448977) : document['getElementsByClassName'](_0x448977);
        },
        'getElementById': function(_0x3f9517) {
            return this['JQUERYAVAILABLE'] ? 0x0 < $(_0x3f9517)['length'] ? $(_0x3f9517) : null : ig['$'](_0x3f9517);
        },
        'appendChild': function(_0x339cb4, _0x5ef6a1) {
            this['JQUERYAVAILABLE'] ? _0x339cb4['append'](_0x5ef6a1) : _0x339cb4['appendChild'](_0x5ef6a1);
        },
        'appendToBody': function(_0x4d8bb6) {
            this['JQUERYAVAILABLE'] ? $('body')['append'](_0x4d8bb6) : document['body']['appendChild'](_0x4d8bb6);
        },
        'resize': function(_0x3d90f2, _0x657b12, _0x263983) {
            if (this['JQUERYAVAILABLE']) _0x3d90f2['width'](_0x657b12['toFixed'](0x2)), _0x3d90f2['height'](_0x263983['toFixed'](0x2));
            else {
                var _0x44a526 = _0x3d90f2['style']['visibility'];
                _0x657b12 = 'width:' + _0x657b12['toFixed'](0x2) + 'px;\x20height:' + _0x263983['toFixed'](0x2) + 'px;';
                this['attr'](_0x3d90f2, 'style', _0x657b12);
                _0x3d90f2['style']['visibility'] = _0x44a526;
            }
        },
        'resizeOffsetLeft': function(_0x1b72f9, _0x2c4f32, _0x5634e9, _0x247e71) {
            if (this['JQUERYAVAILABLE']) _0x1b72f9['width'](_0x2c4f32['toFixed'](0x2)), _0x1b72f9['height'](_0x5634e9['toFixed'](0x2)), _0x1b72f9['css']('left', _0x247e71);
            else {
                var _0xd39355 = _0x1b72f9['style']['visibility'];
                _0x2c4f32 = 'width:' + _0x2c4f32['toFixed'](0x2) + 'px;\x20height:' + _0x5634e9['toFixed'](0x2) + 'px;\x20left:\x20' + _0x247e71['toFixed'](0x2) + 'px;';
                this['attr'](_0x1b72f9, 'style', _0x2c4f32);
                _0x1b72f9['style']['visibility'] = _0xd39355;
            }
        },
        'resizeOffset': function(_0x254429, _0x34c4fa, _0x2f9c30, _0x4ccf04, _0xdfdcfe) {
            if (this['JQUERYAVAILABLE']) _0x254429['width'](_0x34c4fa['toFixed'](0x2)), _0x254429['height'](_0x2f9c30['toFixed'](0x2)), _0x254429['css']('left', _0x4ccf04), _0x254429['css']('top', _0xdfdcfe);
            else {
                var _0x1de8b1 = _0x254429['style']['visibility'];
                _0x34c4fa = 'width:' + _0x34c4fa['toFixed'](0x2) + 'px;\x20height:' + _0x2f9c30['toFixed'](0x2) + 'px;\x20left:\x20' + _0x4ccf04['toFixed'](0x2) + 'px;\x20top:\x20' + _0xdfdcfe['toFixed'](0x2) + 'px;';
                this['attr'](_0x254429, 'style', _0x34c4fa);
                _0x254429['style']['visibility'] = _0x1de8b1;
            }
        },
        'css': function(_0x41e2d5, _0x5aa9fb) {
            if (this['JQUERYAVAILABLE']) _0x41e2d5['css'](_0x5aa9fb);
            else {
                var _0xb6b11f = '',
                    _0x5aa8a0;
                for (_0x5aa8a0 in _0x5aa9fb) _0xb6b11f += _0x5aa8a0 + ':' + _0x5aa9fb[_0x5aa8a0] + ';';
                this['attr'](_0x41e2d5, 'style', _0xb6b11f);
            }
        },
        'getOffsets': function(_0x43d902) {
            return this['JQUERYAVAILABLE'] ? (_0x43d902 = _0x43d902['offset'](), {
                'left': _0x43d902['left'],
                'top': _0x43d902['top']
            }) : {
                'left': _0x43d902['offsetLeft'],
                'top': _0x43d902['offsetTop']
            };
        },
        'attr': function(_0x178883, _0x297627, _0x54e190) {
            if ('undefined' === typeof _0x54e190) return this['JQUERYAVAILABLE'] ? _0x178883['attr'](_0x297627) : _0x178883['getAttribute'](_0x297627);
            this['JQUERYAVAILABLE'] ? _0x178883['attr'](_0x297627, _0x54e190) : _0x178883['setAttribute'](_0x297627, _0x54e190);
        },
        'show': function(_0x41811e) {
            this['JQUERYAVAILABLE'] ? (_0x41811e['show'](), _0x41811e['css']('visibility', 'visible')) : _0x41811e && (_0x41811e['style'] ? _0x41811e['style']['visibility'] = 'visible' : _0x41811e[0x0] && (_0x41811e[0x0]['style']['visibility'] = 'visible'));
        },
        'hide': function(_0x19136e) {
            this['JQUERYAVAILABLE'] ? (_0x19136e['hide'](), _0x19136e['css']('visibility', 'hidden')) : _0x19136e && (_0x19136e['style'] ? _0x19136e['style']['visibility'] = 'hidden' : _0x19136e[0x0] && (_0x19136e[0x0]['style']['visibility'] = 'hidden'));
        },
        'getQueryVariable': function(_0x85d286) {
            for (var _0x1fb1b8 = window['location']['search']['substring'](0x1)['split']('&'), _0x58eae6 = 0x0; _0x58eae6 < _0x1fb1b8['length']; _0x58eae6++) {
                var _0x5ea47d = _0x1fb1b8[_0x58eae6]['split']('=');
                if (decodeURIComponent(_0x5ea47d[0x0]) == _0x85d286) return decodeURIComponent(_0x5ea47d[0x1]);
            }
        },
        'forcedDeviceDetection': function() {
            var _0x3ccdaa = this['getQueryVariable']('device');
            if (_0x3ccdaa) switch (_0x3ccdaa) {
                case 'mobile':
                    console['log']('serving\x20mobile\x20version\x20...');
                    ig['ua']['mobile'] = !0x0;
                    break;
                case 'desktop':
                    console['log']('serving\x20desktop\x20version\x20...');
                    ig['ua']['mobile'] = !0x1;
                    break;
                default:
                    console['log']('serving\x20universal\x20version\x20...');
            } else console['log']('serving\x20universal\x20version\x20...');
        },
        'forcedDeviceRotation': function() {
            var _0x3432f8 = this['getQueryVariable']('force-rotate');
            if (_0x3432f8) switch (_0x3432f8) {
                case 'portrait':
                    console['log']('force\x20rotate\x20to\x20portrait');
                    window['orientation'] = 0x0;
                    break;
                case 'landscape':
                    console['log']('force\x20rotate\x20to\x20horizontal');
                    window['orientation'] = 0x5a;
                    break;
                default:
                    alert('wrong\x20command/type\x20in\x20param\x20force-rotate.\x20Defaulting\x20value\x20to\x20portrait'), window['orientation'] = 0x0;
            }
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.handlers.size-handler')['requires']('plugins.data.vector')['defines'](function() {
    ig['SizeHandler'] = ig['Class']['extend']({
        'portraitMode': !0x0,
        'disableStretchToFitOnMobileFlag': !0x1,
        'enableStretchToFitOnAntiPortraitModeFlag': !0x0,
        'enableScalingLimitsOnMobileFlag': !0x1,
        'minScalingOnMobile': 0x0,
        'maxScalingOnMobile': 0x1,
        'enableStretchToFitOnDesktopFlag': !0x1,
        'enableScalingLimitsOnDesktopFlag': !0x1,
        'minScalingOnDesktop': 0x0,
        'maxScalingOnDesktop': 0x1,
        'desktop': {
            'actualSize': new Vector2(window['innerWidth'], window['innerHeight']),
            'actualResolution': new Vector2(0x21c, 0x3c0)
        },
        'mobile': {
            'actualSize': new Vector2(window['innerWidth'], window['innerHeight']),
            'actualResolution': new Vector2(0x21c, 0x3c0)
        },
        'windowSize': new Vector2(window['innerWidth'], window['innerHeight']),
        'scaleRatioMultiplier': new Vector2(0x1, 0x1),
        'sizeRatio': new Vector2(0x1, 0x1),
        'scale': 0x1,
        'domHandler': null,
        'dynamicClickableEntityDivs': {},
        'coreDivsToResize': ['#canvas', '#play', '#orientate'],
        'adsToResize': {
            'MobileAdInGamePreroll': {
                'box-width': _SETTINGS['Ad']['Mobile']['Preroll']['Width'] + 0x2,
                'box-height': _SETTINGS['Ad']['Mobile']['Preroll']['Height'] + 0x14
            },
            'MobileAdInGameEnd': {
                'box-width': _SETTINGS['Ad']['Mobile']['End']['Width'] + 0x2,
                'box-height': _SETTINGS['Ad']['Mobile']['End']['Height'] + 0x14
            },
            'MobileAdInGamePreroll2': {
                'box-width': _SETTINGS['Ad']['Mobile']['Preroll']['Width'] + 0x2,
                'box-height': _SETTINGS['Ad']['Mobile']['Preroll']['Height'] + 0x14
            },
            'MobileAdInGameEnd2': {
                'box-width': _SETTINGS['Ad']['Mobile']['End']['Width'] + 0x2,
                'box-height': _SETTINGS['Ad']['Mobile']['End']['Height'] + 0x14
            },
            'MobileAdInGamePreroll3': {
                'box-width': _SETTINGS['Ad']['Mobile']['Preroll']['Width'] + 0x2,
                'box-height': _SETTINGS['Ad']['Mobile']['Preroll']['Height'] + 0x14
            },
            'MobileAdInGameEnd3': {
                'box-width': _SETTINGS['Ad']['Mobile']['End']['Width'] + 0x2,
                'box-height': _SETTINGS['Ad']['Mobile']['End']['Height'] + 0x14
            }
        },
        'init': function(_0x4a622d) {
            this['domHandler'] = _0x4a622d;
            if ('undefined' === typeof _0x4a622d) throw 'undefined\x20Dom\x20Handler\x20for\x20Size\x20Handler';
            this['sizeCalcs']();
            this['eventListenerSetup']();
            this['samsungFix']();
        },
        'sizeCalcs': function() {
            this['windowSize'] = new Vector2(window['innerWidth'], window['innerHeight']);
            if (ig['ua']['mobile']) {
                this['mobile']['actualSize'] = new Vector2(window['innerWidth'], window['innerHeight']);
                var _0x346335 = new Vector2(this['mobile']['actualResolution']['x'], this['mobile']['actualResolution']['y']);
                this['scaleRatioMultiplier'] = new Vector2(this['mobile']['actualSize']['x'] / _0x346335['x'], this['mobile']['actualSize']['y'] / _0x346335['y']);
                if (this['disableStretchToFitOnMobileFlag']) {
                    var _0xf18d09 = Math['min'](this['scaleRatioMultiplier']['x'], this['scaleRatioMultiplier']['y']);
                    this['enableScalingLimitsOnMobileFlag'] && (_0xf18d09 > this['maxScalingOnMobile'] && (_0xf18d09 = this['maxScalingOnMobile']), _0xf18d09 < this['maxScalingOnMobile'] && (_0xf18d09 = this['maxScalingOnMobile']));
                    this['mobile']['actualSize']['x'] = _0x346335['x'] * _0xf18d09;
                    this['mobile']['actualSize']['y'] = _0x346335['y'] * _0xf18d09;
                    this['scaleRatioMultiplier']['x'] = _0xf18d09;
                    this['scaleRatioMultiplier']['y'] = _0xf18d09;
                } else this['sizeRatio']['x'] = this['scaleRatioMultiplier']['x'], this['sizeRatio']['y'] = this['scaleRatioMultiplier']['y'], this['scaleRatioMultiplier']['x'] = 0x1, this['scaleRatioMultiplier']['y'] = 0x1;
            } else this['desktop']['actualSize'] = new Vector2(window['innerWidth'], window['innerHeight']), _0x346335 = new Vector2(this['desktop']['actualResolution']['x'], this['desktop']['actualResolution']['y']), this['scaleRatioMultiplier'] = new Vector2(this['desktop']['actualSize']['x'] / _0x346335['x'], this['desktop']['actualSize']['y'] / _0x346335['y']), this['enableStretchToFitOnDesktopFlag'] ? (this['sizeRatio']['x'] = this['scaleRatioMultiplier']['x'], this['sizeRatio']['y'] = this['scaleRatioMultiplier']['y'], this['scaleRatioMultiplier']['x'] = 0x1, this['scaleRatioMultiplier']['y'] = 0x1) : (_0xf18d09 = Math['min'](this['scaleRatioMultiplier']['x'], this['scaleRatioMultiplier']['y']), this['enableScalingLimitsOnDesktopFlag'] && (_0xf18d09 > this['maxScalingOnDesktop'] && (_0xf18d09 = this['maxScalingOnDesktop']), _0xf18d09 < this['minScalingOnDesktop'] && (_0xf18d09 = this['minScalingOnDesktop'])), this['desktop']['actualSize']['x'] = _0x346335['x'] * _0xf18d09, this['desktop']['actualSize']['y'] = _0x346335['y'] * _0xf18d09, this['scaleRatioMultiplier']['x'] = _0xf18d09, this['scaleRatioMultiplier']['y'] = _0xf18d09);
        },
        'resizeLayers': function() {
            for (var _0x3c9f19 = 0x0; _0x3c9f19 < this['coreDivsToResize']['length']; _0x3c9f19++) {
                var _0x21101e = ig['domHandler']['getElementById'](this['coreDivsToResize'][_0x3c9f19]);
                if (ig['ua']['mobile'])
                    if (this['disableStretchToFitOnMobileFlag']) {
                        var _0x2115f4 = Math['floor'](ig['sizeHandler']['windowSize']['x'] / 0x2 - ig['sizeHandler']['mobile']['actualSize']['x'] / 0x2),
                            _0x5b3b66 = Math['floor'](ig['sizeHandler']['windowSize']['y'] / 0x2 - ig['sizeHandler']['mobile']['actualSize']['y'] / 0x2);
                        0x0 > _0x2115f4 && (_0x2115f4 = 0x0);
                        0x0 > _0x5b3b66 && (_0x5b3b66 = 0x0);
                        ig['domHandler']['resizeOffset'](_0x21101e, Math['floor'](ig['sizeHandler']['mobile']['actualSize']['x']), Math['floor'](ig['sizeHandler']['mobile']['actualSize']['y']), _0x2115f4, _0x5b3b66);
                        var _0x56e5b5 = !0x1;
                        if (this['portraitMode'] ? window['innerHeight'] < window['innerWidth'] : window['innerHeight'] > window['innerWidth'])
                            if (this['enableStretchToFitOnAntiPortraitModeFlag']) ig['domHandler']['resizeOffset'](_0x21101e, Math['floor'](window['innerWidth']), Math['floor'](window['innerHeight']), 0x0, 0x0);
                            else {
                                var _0x56e5b5 = new Vector2(window['innerWidth'] / this['mobile']['actualResolution']['y'], window['innerHeight'] / this['mobile']['actualResolution']['x']),
                                    _0x2115f4 = Math['min'](_0x56e5b5['x'], _0x56e5b5['y']),
                                    _0x56e5b5 = this['mobile']['actualResolution']['y'] * _0x2115f4,
                                    _0x1fbfac = this['mobile']['actualResolution']['x'] * _0x2115f4,
                                    _0x2115f4 = Math['floor'](ig['sizeHandler']['windowSize']['x'] / 0x2 - _0x56e5b5 / 0x2),
                                    _0x5b3b66 = Math['floor'](ig['sizeHandler']['windowSize']['y'] / 0x2 - _0x1fbfac / 0x2);
                                0x0 > _0x2115f4 && (_0x2115f4 = 0x0);
                                0x0 > _0x5b3b66 && (_0x5b3b66 = 0x0);
                                ig['domHandler']['resizeOffset'](_0x21101e, Math['floor'](_0x56e5b5), Math['floor'](_0x1fbfac), _0x2115f4, _0x5b3b66);
                            }
                    } else ig['domHandler']['resize'](_0x21101e, Math['floor'](ig['sizeHandler']['mobile']['actualSize']['x']), Math['floor'](ig['sizeHandler']['mobile']['actualSize']['y']));
                else this['enableStretchToFitOnDesktopFlag'] ? ig['domHandler']['resize'](_0x21101e, Math['floor'](ig['sizeHandler']['desktop']['actualSize']['x']), Math['floor'](ig['sizeHandler']['desktop']['actualSize']['y'])) : (_0x2115f4 = Math['floor'](ig['sizeHandler']['windowSize']['x'] / 0x2 - ig['sizeHandler']['desktop']['actualSize']['x'] / 0x2), _0x5b3b66 = Math['floor'](ig['sizeHandler']['windowSize']['y'] / 0x2 - ig['sizeHandler']['desktop']['actualSize']['y'] / 0x2), 0x0 > _0x2115f4 && (_0x2115f4 = 0x0), 0x0 > _0x5b3b66 && (_0x5b3b66 = 0x0), ig['domHandler']['resizeOffset'](_0x21101e, Math['floor'](ig['sizeHandler']['desktop']['actualSize']['x']), Math['floor'](ig['sizeHandler']['desktop']['actualSize']['y']), _0x2115f4, _0x5b3b66));
            }
            for (var _0x29fb96 in this['adsToResize']) _0x3c9f19 = ig['domHandler']['getElementById']('#' + _0x29fb96), _0x21101e = ig['domHandler']['getElementById']('#' + _0x29fb96 + '-Box'), _0x56e5b5 = (window['innerWidth'] - this['adsToResize'][_0x29fb96]['box-width']) / 0x2 + 'px', _0x2115f4 = (window['innerHeight'] - this['adsToResize'][_0x29fb96]['box-height']) / 0x2 + 'px', _0x3c9f19 && ig['domHandler']['css'](_0x3c9f19, {
                'width': window['innerWidth'],
                'height': window['innerHeight']
            }), _0x21101e && ig['domHandler']['css'](_0x21101e, {
                'left': _0x56e5b5,
                'top': _0x2115f4
            });
            for (_0x29fb96 in this['dynamicClickableEntityDivs']) {
                _0x3c9f19 = Math['min'](ig['sizeHandler']['scaleRatioMultiplier']['x'], ig['sizeHandler']['scaleRatioMultiplier']['y']);
                _0x21101e = ig['domHandler']['getElementById']('#' + _0x29fb96);
                if (ig['ua']['mobile']) var _0x4fdda9 = this['dynamicClickableEntityDivs'][_0x29fb96]['entity_pos_x'],
                    _0x1fbfac = this['dynamicClickableEntityDivs'][_0x29fb96]['entity_pos_y'],
                    _0x2115f4 = this['dynamicClickableEntityDivs'][_0x29fb96]['width'],
                    _0x56e5b5 = this['dynamicClickableEntityDivs'][_0x29fb96]['height'],
                    _0x5b3b66 = Math['floor'](_0x4fdda9 * this['scaleRatioMultiplier']['x']) + 'px',
                    _0x1fbfac = Math['floor'](_0x1fbfac * this['scaleRatioMultiplier']['y']) + 'px',
                    _0x2115f4 = Math['floor'](_0x2115f4 * this['scaleRatioMultiplier']['x']) + 'px',
                    _0x56e5b5 = Math['floor'](_0x56e5b5 * this['scaleRatioMultiplier']['y']) + 'px';
                else var _0x56e5b5 = ig['domHandler']['getElementById']('#canvas'),
                    _0x56e5b5 = ig['domHandler']['getOffsets'](_0x56e5b5),
                    _0x5b3b66 = _0x56e5b5['left'],
                    _0x1b9360 = _0x56e5b5['top'],
                    _0x4fdda9 = this['dynamicClickableEntityDivs'][_0x29fb96]['entity_pos_x'],
                    _0x1fbfac = this['dynamicClickableEntityDivs'][_0x29fb96]['entity_pos_y'],
                    _0x2115f4 = this['dynamicClickableEntityDivs'][_0x29fb96]['width'],
                    _0x56e5b5 = this['dynamicClickableEntityDivs'][_0x29fb96]['height'],
                    _0x5b3b66 = Math['floor'](_0x5b3b66 + _0x4fdda9 * _0x3c9f19) + 'px',
                    _0x1fbfac = Math['floor'](_0x1b9360 + _0x1fbfac * _0x3c9f19) + 'px',
                    _0x2115f4 = Math['floor'](_0x2115f4 * _0x3c9f19) + 'px',
                    _0x56e5b5 = Math['floor'](_0x56e5b5 * _0x3c9f19) + 'px';
                ig['domHandler']['css'](_0x21101e, {
                    'float': 'left',
                    'position': 'absolute',
                    'left': _0x5b3b66,
                    'top': _0x1fbfac,
                    'width': _0x2115f4,
                    'height': _0x56e5b5,
                    'z-index': 0x3
                });
                this['dynamicClickableEntityDivs'][_0x29fb96]['font-size'] && ig['domHandler']['css'](_0x21101e, {
                    'font-size': this['dynamicClickableEntityDivs'][_0x29fb96]['font-size'] * _0x3c9f19 + 'px'
                });
            }
            $('#ajaxbar')['width'](this['windowSize']['x']);
            $('#ajaxbar')['height'](this['windowSize']['y']);
        },
        'resize': function() {
            this['sizeCalcs']();
            this['resizeLayers']();
        },
        'reorient': function() {
            console['log']('changing\x20orientation\x20...');
            if (ig['ua']['mobile']) {
                var _0x361576 = !0x1,
                    _0x361576 = this['portraitMode'] ? window['innerHeight'] < window['innerWidth'] : window['innerHeight'] > window['innerWidth'],
                    _0x3d04f5 = this['domHandler']['getElementById']('#orientate'),
                    _0x51bb77 = this['domHandler']['getElementById']('#game');
                _0x361576 ? (this['domHandler']['show'](_0x3d04f5), this['domHandler']['hide'](_0x51bb77), console['log']('portrait' + window['innerWidth'] + ',' + window['innerHeight'])) : (this['domHandler']['show'](_0x51bb77), this['domHandler']['hide'](_0x3d04f5), console['log']('landscape' + window['innerWidth'] + ',' + window['innerHeight']));
            }
            ig['ua']['mobile'] ? (this['resize'](), this['resizeAds']()) : this['resize']();
            ig['game'] && ig['game']['agLogo'] && (ig['game']['agLogo']['updateDiv'] && !ig['game']['agLogo']['isHidden'] && !ig['game']['agLogo']['isKilled']) && ig['game']['agLogo']['updateDiv']();
        },
        'resizeAds': function() {
            for (var _0x1c3829 in this['adsToResize']) {
                var _0x16a217 = ig['domHandler']['getElementById']('#' + _0x1c3829),
                    _0x39eba2 = ig['domHandler']['getElementById']('#' + _0x1c3829 + '-Box'),
                    _0x4c26e0 = (window['innerWidth'] - this['adsToResize'][_0x1c3829]['box-width']) / 0x2 + 'px',
                    _0x278f59 = (window['innerHeight'] - this['adsToResize'][_0x1c3829]['box-height']) / 0x2 + 'px';
                _0x16a217 && ig['domHandler']['css'](_0x16a217, {
                    'width': window['innerWidth'],
                    'height': window['innerHeight']
                });
                _0x39eba2 && ig['domHandler']['css'](_0x39eba2, {
                    'left': _0x4c26e0,
                    'top': _0x278f59
                });
            }
        },
        'samsungFix': function() {
            ig['ua']['android'] && !(4.2 > parseFloat(navigator['userAgent']['slice'](navigator['userAgent']['indexOf']('Android') + 0x8, navigator['userAgent']['indexOf']('Android') + 0xb))) && (!(0x0 > navigator['userAgent']['indexOf']('GT')) && !(0x0 < navigator['userAgent']['indexOf']('Chrome')) && !(0x0 < navigator['userAgent']['indexOf']('Firefox'))) && (document['addEventListener']('touchstart', function(_0x5c4c90) {
                _0x5c4c90['preventDefault']();
                return !0x1;
            }, !0x1), document['addEventListener']('touchmove', function(_0x1f89ac) {
                _0x1f89ac['preventDefault']();
                return !0x1;
            }, !0x1), document['addEventListener']('touchend', function(_0x5c0501) {
                _0x5c0501['preventDefault']();
                return !0x1;
            }, !0x1));
        },
        'orientationInterval': null,
        'orientationTimeout': null,
        'orientationHandler': function() {
            this['reorient']();
            window['scrollTo'](0x0, 0x1);
        },
        'orientationDelayHandler': function() {
            null == this['orientationInterval'] && (this['orientationInterval'] = window['setInterval'](this['orientationHandler']['bind'](this), 0x64));
            null == this['orientationTimeout'] && (this['orientationTimeout'] = window['setTimeout'](function() {
                this['clearAllIntervals']();
            } ['bind'](this), 0x7d0));
        },
        'clearAllIntervals': function() {
            window['clearInterval'](this['orientationInterval']);
            this['orientationInterval'] = null;
            window['clearTimeout'](this['orientationTimeout']);
            this['orientationTimeout'] = null;
        },
        'eventListenerSetup': function() {
            ig['ua']['iOS'] ? (window['addEventListener']('orientationchange', this['orientationDelayHandler']['bind'](this)), window['addEventListener']('resize', this['orientationDelayHandler']['bind'](this))) : (window['addEventListener']('orientationchange', this['orientationHandler']['bind'](this)), window['addEventListener']('resize', this['orientationHandler']['bind'](this)));
            document['ontouchmove'] = function(_0x11a471) {
                window['scrollTo'](0x0, 0x1);
                _0x11a471['preventDefault']();
            };
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.handlers.api-handler')['defines'](function() {
    ig['ApiHandler'] = ig['Class']['extend']({
        'apiAvailable': {
            'MJSPreroll': function() {
                ig['ua']['mobile'] && ig['domHandler']['JQUERYAVAILABLE'] && _SETTINGS && _SETTINGS['Ad']['Mobile']['Preroll']['Enabled'] && MobileAdInGamePreroll['Initialize']();
            },
            'MJSHeader': function() {
                ig['ua']['mobile'] && ig['domHandler']['JQUERYAVAILABLE'] && _SETTINGS['Ad']['Mobile']['Header']['Enabled'] && MobileAdInGameHeader['Initialize']();
            },
            'MJSFooter': function() {
                ig['ua']['mobile'] && ig['domHandler']['JQUERYAVAILABLE'] && _SETTINGS['Ad']['Mobile']['Footer']['Enabled'] && MobileAdInGameFooter['Initialize']();
            },
            'MJSEnd': function() {
                ig['ua']['mobile'] && ig['domHandler']['JQUERYAVAILABLE'] && _SETTINGS['Ad']['Mobile']['End']['Enabled'] && MobileAdInGameEnd['Initialize']();
            }
        },
        'run': function(_0x1fbaf7, _0x51ba88) {
            if (this['apiAvailable'][_0x1fbaf7]) this['apiAvailable'][_0x1fbaf7](_0x51ba88);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.sound-player')['defines'](function() {
    SoundPlayer = ig['Class']['extend']({
        'tagName': 'SoundPlayer',
        'stayMuteFlag': !0x1,
        'debug': !0x1,
        'init': function() {
            this['debug'] && console['log'](this['tagName']);
        },
        'play': function(_0x23d83b) {
            this['debug'] && console['log']('play\x20sound\x20', _0x23d83b);
        },
        'stop': function() {
            this['debug'] && console['log']('stop\x20sound\x20');
        },
        'volume': function() {
            this['debug'] && console['log']('set\x20volume');
        },
        'mute': function(_0x31abeb) {
            this['debug'] && console['log']('mute');
            'undefined' === typeof _0x31abeb ? this['stayMuteFlag'] = !0x0 : _0x31abeb && (this['stayMuteFlag'] = !0x0);
        },
        'unmute': function(_0xfffa14) {
            this['debug'] && console['log']('unmute');
            'undefined' === typeof _0xfffa14 ? this['stayMuteFlag'] = !0x1 : _0xfffa14 && (this['stayMuteFlag'] = !0x1);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.impact-music-player')['requires']('plugins.audio.sound-player')['defines'](function() {
    ImpactMusicPlayer = SoundPlayer['extend']({
        'tagName': 'ImpactMusicPlayer',
        'bgmPlaying': !0x1,
        'soundList': {},
        'init': function(_0x19fe1c, _0x50bc6f) {
            this['parent'](_0x19fe1c, _0x50bc6f);
            for (var _0x35bcb5 in _0x19fe1c) this['soundList'][_0x35bcb5] = _0x35bcb5, ig['music']['add'](_0x19fe1c[_0x35bcb5]['path'] + '.*', _0x35bcb5);
            _0x50bc6f && _0x50bc6f['loop'] && (ig['music']['loop'] = _0x50bc6f['loop']);
        },
        'play': function(_0x457079) {
            this['stayMuteFlag'] || (this['bgmPlaying'] = !0x0, 'undefined' === typeof _0x457079 ? ig['music']['play'](_0x457079) : ig['music']['play']());
        },
        'stop': function() {
            this['bgmPlaying'] = !0x1;
            ig['music']['pause']();
        },
        'volume': function(_0x2d0569) {
            console['log']('impactmusic:', _0x2d0569);
            ig['music']['volume'] = 0x0 > _0x2d0569 ? 0x0 : isNaN(_0x2d0569) ? 0x1 : 0x1 < _0x2d0569 ? 0x1 : _0x2d0569;
        },
        'getVolume': function() {
            return ig['music']['volume'];
        },
        'mute': function(_0x69ccaa) {
            this['parent'](_0x69ccaa);
            this['bgmPlaying'] && this['stop']();
        },
        'unmute': function(_0x2e3ce7) {
            this['parent'](_0x2e3ce7);
            this['play']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.impact-sound-player')['requires']('plugins.audio.sound-player')['defines'](function() {
    ImpactSoundPlayer = SoundPlayer['extend']({
        'tagName': 'ImpactSoundPlayer',
        'soundList': {},
        'init': function(_0x4c3724, _0x101eab) {
            this['parent'](_0x4c3724, _0x101eab);
            for (var _0x4215f3 in _0x4c3724) {
                var _0x1251c8 = new ig['Sound'](_0x4c3724[_0x4215f3]['path'] + '.*');
                this['soundList'][_0x4215f3] = _0x1251c8;
            }
        },
        'play': function(_0x4847b7) {
            this['stayMuteFlag'] || ('object' === typeof _0x4847b7 ? (console['log'](_0x4847b7 + '\x20exists'), _0x4847b7['play']()) : 'string' === typeof _0x4847b7 && this['soundList'][_0x4847b7]['play']());
        },
        'stop': function(_0x4f25cf) {
            this['parent'](_0x4f25cf);
            _0x4f25cf['stop']();
        },
        'volume': function(_0x30c100) {
            ig['soundManager']['volume'] = 0x0 > _0x30c100 ? 0x0 : isNaN(_0x30c100) ? 0x1 : 0x1 < _0x30c100 ? 0x1 : _0x30c100;
        },
        'getVolume': function() {
            return ig['soundManager']['volume'];
        },
        'mute': function(_0x37c81d) {
            this['parent'](_0x37c81d);
            ig['Sound']['enabled'] = !0x1;
        },
        'unmute': function(_0x2a9a2e) {
            this['parent'](_0x2a9a2e);
            ig['Sound']['enabled'] = !0x0;
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.howler-player')['requires']('plugins.audio.sound-player')['defines'](function() {
    HowlerPlayer = SoundPlayer['extend']({
        'tagName': 'HowlerPlayer',
        'soundList': {},
        'init': function(_0x1c8cb9, _0x4f580c) {
            this['parent'](_0x1c8cb9, _0x4f580c);
            for (var _0x287b03 in _0x1c8cb9) {
                var _0x54cbdd = _0x1c8cb9[_0x287b03]['path'],
                    _0x54cbdd = new Howl({
                        'src': [_0x54cbdd + '.' + ig['Sound']['FORMAT']['OGG']['ext'], _0x54cbdd + '.' + ig['Sound']['FORMAT']['MP3']['ext']]
                    });
                this['soundList'][_0x287b03] = _0x54cbdd;
            }
        },
        'play': function(_0x4b468a) {
            this['stayMuteFlag'] || ('object' === typeof _0x4b468a ? _0x4b468a['play']() : 'string' === typeof _0x4b468a && this['soundList'][_0x4b468a]['play']());
        },
        'stop': function(_0x104525) {
            this['parent'](_0x104525);
            'object' === typeof _0x104525 ? _0x104525['stop']() : 'string' === typeof _0x104525 && this['soundList'][_0x104525]['stop']();
        },
        'volume': function(_0x137a8a) {
            for (var _0x19ef9b in this['soundList']) {
                if (0x0 > _0x137a8a) {
                    this['soundList'][_0x19ef9b]['volume'](0x0);
                    break;
                }
                isNaN(_0x137a8a) ? this['soundList'][_0x19ef9b]['volume'](0x1) : 0x1 < _0x137a8a ? this['soundList'][_0x19ef9b]['volume'](0x1) : this['soundList'][_0x19ef9b]['volume'](_0x137a8a);
            }
        },
        'getVolume': function() {
            for (var _0x3accb1 in this['soundList']) return this['soundList'][_0x3accb1]['volume']();
        },
        'mute': function(_0x3064a3) {
            this['parent'](_0x3064a3);
            Howler['mute'](!0x0);
        },
        'unmute': function(_0x584ca7) {
            this['parent'](_0x584ca7);
            Howler['mute'](!0x1);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.howler-music-player')['requires']('plugins.audio.sound-player')['defines'](function() {
    HowlerMusicPlayer = SoundPlayer['extend']({
        'tagName': 'HowlerMusicPlayer',
        'bgmPlaying': !0x1,
        'soundList': {},
        'init': function(_0x58edcc, _0x19041d) {
            this['parent'](_0x58edcc, _0x19041d);
            for (var _0x36c01a in _0x58edcc) {
                var _0x370b54 = _0x58edcc[_0x36c01a]['path'],
                    _0x370b54 = new Howl({
                        'src': [_0x370b54 + '.' + ig['Sound']['FORMAT']['OGG']['ext'], _0x370b54 + '.' + ig['Sound']['FORMAT']['MP3']['ext']],
                        'loop': !0x0,
                        'autoplay': !0x1,
                        'onend': function() {} ['bind'](this)
                    });
                this['soundList'][_0x36c01a] = _0x370b54;
            }
        },
        'play': function(_0x24b117) {
            if (!this['stayMuteFlag'] && !this['bgmPlaying'])
                if ('object' === typeof _0x24b117) this['bgmPlaying'] = !0x0, _0x24b117['play']();
                else if ('string' === typeof _0x24b117) this['bgmPlaying'] = !0x0, this['soundList'][_0x24b117]['play']();
            else
                for (var _0x48e618 in this['soundList']) {
                    this['soundList'][_0x48e618]['play']();
                    this['bgmPlaying'] = !0x0;
                    break;
                }
        },
        'stop': function(_0x44c352) {
            this['parent'](_0x44c352);
            if (this['bgmPlaying']) {
                for (var _0x20d077 in this['soundList']) this['soundList'][_0x20d077]['stop']();
                this['bgmPlaying'] = !0x1;
            }
        },
        'volume': function(_0x98674d) {
            console['log']('howler', _0x98674d);
            for (var _0x260e34 in this['soundList']) {
                if (0x0 > _0x98674d) {
                    this['soundList'][_0x260e34]['volume'](0x0);
                    break;
                }
                isNaN(_0x98674d) ? this['soundList'][_0x260e34]['volume'](0x1) : 0x1 < _0x98674d ? this['soundList'][_0x260e34]['volume'](0x1) : this['soundList'][_0x260e34]['volume'](_0x98674d);
            }
        },
        'getVolume': function() {
            for (var _0x29c5a0 in this['soundList']) return this['soundList'][_0x29c5a0]['volume']();
        },
        'mute': function(_0x4b39de) {
            this['parent'](_0x4b39de);
            Howler['mute'](!0x0);
        },
        'unmute': function(_0xbce531) {
            this['parent'](_0xbce531);
            Howler['mute'](!0x1);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.jukebox-player')['requires']('plugins.audio.sound-player')['defines'](function() {
    JukeboxPlayer = SoundPlayer['extend']({
        'tagName': 'JukeboxPlayer',
        'bgmPlaying': !0x1,
        'soundList': {},
        'jukeboxPlayer': null,
        'pausePosition': 0x0,
        'premuteVolume': 0x0,
        'minVolume': 0.001,
        'init': function(_0x50b1e6, _0x20eecb) {
            this['parent'](_0x50b1e6, _0x20eecb);
            for (var _0x3236ba in _0x50b1e6) {
                this['soundList'][_0x3236ba] = _0x3236ba;
                var _0x1baff5 = _0x50b1e6[_0x3236ba]['path'];
                this['jukeboxPlayer'] = new jukebox['Player']({
                    'resources': [_0x1baff5 + '.' + ig['Sound']['FORMAT']['OGG']['ext'], _0x1baff5 + '.' + ig['Sound']['FORMAT']['MP3']['ext']],
                    'autoplay': !0x1,
                    'spritemap': {
                        'music': {
                            'start': _0x50b1e6[_0x3236ba]['startMp3'],
                            'end': _0x50b1e6[_0x3236ba]['endMp3'],
                            'loop': !0x0
                        }
                    }
                });
            }
        },
        'play': function() {
            this['stayMuteFlag'] || (this['bgmPlaying'] = !0x0, this['pausePosition'] ? (console['log']('resume'), this['jukeboxPlayer']['resume'](this['pausePosition'])) : (console['log']('play'), this['jukeboxPlayer']['play'](this['jukeboxPlayer']['settings']['spritemap']['music']['start'], !0x0)), this['premuteVolume'] = this['getVolume']());
        },
        'stop': function() {
            this['bgmPlaying'] = !0x1;
            this['pausePosition'] = this['jukeboxPlayer']['pause']();
        },
        'volume': function(_0x5018ef) {
            console['log']('jukebox:', _0x5018ef);
            0x0 >= _0x5018ef ? this['jukeboxPlayer']['setVolume'](this['minVolume']) : isNaN(_0x5018ef) ? this['jukeboxPlayer']['setVolume'](0x1) : 0x1 < _0x5018ef ? this['jukeboxPlayer']['setVolume'](0x1) : this['jukeboxPlayer']['setVolume'](_0x5018ef);
        },
        'getVolume': function() {
            return this['jukeboxPlayer']['getVolume']();
        },
        'mute': function(_0x1dc588) {
            this['parent'](_0x1dc588);
            this['bgmPlaying'] && (console['log']('jukebox', this['premuteVolume']), this['stayMuteFlag'] || (this['premuteVolume'] = this['getVolume']()), this['jukeboxPlayer']['pause'](), this['jukeboxPlayer']['setVolume'](this['minVolume']));
        },
        'unmute': function(_0x1188c0) {
            this['parent'](_0x1188c0);
            this['stayMuteFlag'] || (console['log']('jukebox', this['premuteVolume']), this['jukeboxPlayer']['setVolume'](this['premuteVolume']), this['jukeboxPlayer']['resume']());
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.webaudio-music-player')['requires']('plugins.audio.sound-player')['defines'](function() {
    WebaudioMusicPlayer = SoundPlayer['extend']({
        'tagName': 'WebaudioMusicPlayer',
        'bgmPlaying': !0x1,
        'isSupported': !0x1,
        'muteFlag': !0x1,
        'pausedTime': 0x0,
        'webaudio': null,
        'useHTML5Audio': !0x1,
        'audio': null,
        'inactiveAudio': null,
        'codecs': null,
        'reinitOnPlay': !0x1,
        'inputList': null,
        '_volume': 0x1,
        'soundList': {},
        'init': function(_0x5a1d40) {
            this['webaudio'] = {
                'compatibility': {},
                'gainNode': null,
                'buffer': null,
                'source_loop': {},
                'source_once': {}
            };
            try {
                Howler && Howler['ctx'] ? this['webaudio']['context'] = Howler['ctx'] : ig && ig['webaudio_ctx'] ? this['webaudio']['context'] = ig['webaudio_ctx'] : (this['AudioContext'] = window['AudioContext'] || window['webkitAudioContext'], this['webaudio']['context'] = new this['AudioContext'](), ig['webaudio_ctx'] = this['webaudio']['context']), this['isSupported'] = !0x0;
            } catch (_0x13c0b0) {
                console['log']('Web\x20Audio\x20API\x20not\x20supported\x20in\x20this\x20browser.'), this['webaudio'] = null, this['useHTML5Audio'] = !0x0;
            }
            if (this['useHTML5Audio'])
                if ('undefined' !== typeof Audio) try {
                    new Audio();
                } catch (_0x38db29) {
                    this['useHTML5Audio'] = !0x1;
                } else this['useHTML5Audio'] = !0x1;
            this['useHTML5Audio'] && (this['audio'] = new Audio(), this['isSupported'] = !0x0, this['initHTML5Audio'](_0x5a1d40));
            if (!this['isSupported']) return null;
            this['webaudio'] && (this['inputList'] = _0x5a1d40, this['initWebAudio'](_0x5a1d40));
        },
        'initWebAudio': function(_0x393539) {
            ig['ua']['iOS'] && this['initIOSWebAudioUnlock']();
            this['webaudio']['gainNode'] = this['webaudio']['context']['createGain']();
            this['webaudio']['gainNode']['connect'](this['webaudio']['context']['destination']);
            this['webaudio']['gainNode']['gain']['value'] = this['_volume'];
            this['webaudio']['buffer'] = null;
            var _0x9c05ec = 'start',
                _0x3dad46 = 'stop',
                _0x80300b = this['webaudio']['context']['createBufferSource']();
            'function' !== typeof _0x80300b['start'] && (_0x9c05ec = 'noteOn');
            this['webaudio']['compatibility']['start'] = _0x9c05ec;
            'function' !== typeof _0x80300b['stop'] && (_0x3dad46 = 'noteOff');
            this['webaudio']['compatibility']['stop'] = _0x3dad46;
            for (var _0x566448 in _0x393539) {
                this['soundList'][_0x566448] = _0x566448;
                var _0x3dad46 = _0x393539[_0x566448]['path'],
                    _0x9c05ec = _0x3dad46 + '.' + ig['Sound']['FORMAT']['MP3']['ext'],
                    _0x5c78c2 = _0x3dad46 + '.' + ig['Sound']['FORMAT']['OGG']['ext'];
                ig['ua']['mobile'] ? ig['ua']['iOS'] && (_0x5c78c2 = _0x9c05ec) : (_0x3dad46 = navigator['userAgent']['toLowerCase'](), -0x1 != _0x3dad46['indexOf']('safari') && -0x1 >= _0x3dad46['indexOf']('chrome') && (_0x5c78c2 = _0x9c05ec), _0x3dad46['indexOf']('win64') && (_0x5c78c2 = _0x9c05ec));
                var _0x4caefc = new XMLHttpRequest();
                _0x4caefc['open']('GET', _0x5c78c2, !0x0);
                _0x4caefc['responseType'] = 'arraybuffer';
                _0x4caefc['onload'] = function() {
                    this['webaudio']['context']['decodeAudioData'](_0x4caefc['response'], function(_0x338e49) {
                        this['webaudio']['buffer'] = _0x338e49;
                        this['webaudio']['source_loop'] = {};
                        this['bgmPlaying'] ? this['play'](null, !0x0) : this['stop']();
                    } ['bind'](this), function() {
                        console['log']('Error\x20decoding\x20audio\x20\x22' + _0x5c78c2 + '\x22.');
                    });
                } ['bind'](this);
                _0x4caefc['send']();
                if (0x4 == _0x4caefc['readyState'] && 'undefined' !== typeof Audio) {
                    this['useHTML5Audio'] = !0x0;
                    try {
                        new Audio();
                    } catch (_0x1832a9) {
                        this['useHTML5Audio'] = !0x1;
                    }
                    this['useHTML5Audio'] && (console['log']('Using\x20HTML5\x20Audio'), this['webaudio'] = null, this['audio'] = new Audio(), this['isSupported'] = !0x0, this['initHTML5Audio'](_0x393539));
                }
                break;
            }
        },
        'initIOSWebAudioUnlock': function() {
            if (this['webaudio']) {
                webaudio = this['webaudio'];
                var _0x189708 = function() {
                    var _0x32a659 = webaudio['context'],
                        _0x2e63c3 = _0x32a659['createBuffer'](0x1, 0x1, 0x5622),
                        _0x333207 = _0x32a659['createBufferSource']();
                    _0x333207['buffer'] = _0x2e63c3;
                    _0x333207['connect'](_0x32a659['destination']);
                    'undefined' === typeof _0x333207['start'] ? _0x333207['noteOn'](0x0) : _0x333207['start'](0x0);
                    setTimeout(function() {
                        (_0x333207['playbackState'] === _0x333207['PLAYING_STATE'] || _0x333207['playbackState'] === _0x333207['FINISHED_STATE']) && window['removeEventListener']('touchend', _0x189708, !0x1);
                    } ['bind'](this), 0x0);
                };
                window['addEventListener']('touchend', _0x189708, !0x1);
            }
        },
        'initHTML5Audio': function(_0x222713) {
            if (this['useHTML5Audio'] && this['audio']) {
                var _0x2b5e19 = this['audio'];
                this['codecs'] = {};
                this['codecs'] = {
                    'mp3': !!_0x2b5e19['canPlayType']('audio/mpeg;')['replace'](/^no$/, ''),
                    'opus': !!_0x2b5e19['canPlayType']('audio/ogg;\x20codecs=\x22opus\x22')['replace'](/^no$/, ''),
                    'ogg': !!_0x2b5e19['canPlayType']('audio/ogg;\x20codecs=\x22vorbis\x22')['replace'](/^no$/, ''),
                    'wav': !!_0x2b5e19['canPlayType']('audio/wav;\x20codecs=\x221\x22')['replace'](/^no$/, ''),
                    'aac': !!_0x2b5e19['canPlayType']('audio/aac;')['replace'](/^no$/, ''),
                    'm4a': !!(_0x2b5e19['canPlayType']('audio/x-m4a;') || _0x2b5e19['canPlayType']('audio/m4a;') || _0x2b5e19['canPlayType']('audio/aac;'))['replace'](/^no$/, ''),
                    'mp4': !!(_0x2b5e19['canPlayType']('audio/x-mp4;') || _0x2b5e19['canPlayType']('audio/mp4;') || _0x2b5e19['canPlayType']('audio/aac;'))['replace'](/^no$/, ''),
                    'weba': !!_0x2b5e19['canPlayType']('audio/webm;\x20codecs=\x22vorbis\x22')['replace'](/^no$/, '')
                };
                this['is'] = {
                    'ff': Boolean(null != window['mozInnerScreenX'] && /firefox/ ['test'](navigator['userAgent']['toLowerCase']())),
                    'ie': Boolean(document['all'] && !window['opera']),
                    'opera': Boolean(window['opera']),
                    'chrome': Boolean(window['chrome']),
                    'safari': Boolean(!window['chrome'] && /safari/ ['test'](navigator['userAgent']['toLowerCase']()) && window['getComputedStyle'] && !window['globalStorage'] && !window['opera'])
                };
                this['playDelay'] = -0x3c;
                this['stopDelay'] = 0x1e;
                this['is']['chrome'] && (this['playDelay'] = -0x19);
                this['is']['chrome'] && (this['stopDelay'] = 0x19);
                this['is']['ff'] && (this['playDelay'] = -0x19);
                this['is']['ff'] && (this['stopDelay'] = 0x55);
                this['is']['opera'] && (this['playDelay'] = 0x5);
                this['is']['opera'] && (this['stopDelay'] = 0x0);
                for (var _0x34226d in _0x222713) {
                    this['soundList'][_0x34226d] = _0x34226d;
                    var _0x4b0c78 = _0x222713[_0x34226d]['path'],
                        _0x2b5e19 = _0x4b0c78 + '.' + ig['Sound']['FORMAT']['OGG']['ext'],
                        _0x4b0c78 = _0x4b0c78 + '.' + ig['Sound']['FORMAT']['MP3']['ext'],
                        _0x54ce81 = null;
                    this['codecs'][ig['Sound']['FORMAT']['OGG']['ext']['toLowerCase']()] ? _0x54ce81 = _0x2b5e19 : this['codecs'][ig['Sound']['FORMAT']['MP3']['ext']['toLowerCase']()] && (_0x54ce81 = _0x4b0c78);
                    if (_0x54ce81) {
                        ig['ua']['mobile'] ? ig['ua']['iOS'] && (_0x54ce81 = _0x4b0c78) : (_0x222713 = navigator['userAgent']['toLowerCase'](), -0x1 != _0x222713['indexOf']('safari') && -0x1 >= _0x222713['indexOf']('chrome') && (_0x54ce81 = _0x4b0c78));
                        this['audio']['addEventListener']('error', function() {
                            this['audio']['error'] && 0x4 === this['audio']['error']['code'] && (this['isSupported'] = !0x1);
                        }, !0x1);
                        this['audio']['src'] = _0x54ce81;
                        this['audio']['_pos'] = 0x0;
                        this['audio']['preload'] = 'auto';
                        this['audio']['volume'] = this['_volume'];
                        this['inactiveAudio'] = new Audio();
                        this['inactiveAudio']['src'] = _0x54ce81;
                        this['inactiveAudio']['_pos'] = 0x0;
                        this['inactiveAudio']['preload'] = 'auto';
                        this['inactiveAudio']['volume'] = this['_volume'];
                        this['inactiveAudio']['load']();
                        var _0xebbf42 = function() {
                            this['_duration'] = this['audio']['duration'];
                            this['_loaded'] || (this['_loaded'] = !0x0);
                            this['bgmPlaying'] ? this['play'](null, !0x0) : this['stop']();
                            this['audio']['removeEventListener']('canplaythrough', _0xebbf42, !0x1);
                        } ['bind'](this);
                        this['audio']['addEventListener']('canplaythrough', _0xebbf42, !0x1);
                        this['audio']['load']();
                        break;
                    }
                }
            }
        },
        'play': function(_0xffb005, _0x47d22c) {
            if (this['isSupported'])
                if (this['bgmPlaying'] = !0x0, this['webaudio']) {
                    if (!_0x47d22c && this['reinitOnPlay'] && this['webaudio']['source_loop']['buffer'] == this['webaudio']['buffer']) {
                        if (this['webaudio']['source_loop']['_playing'] && (this['webaudio']['source_loop'][this['webaudio']['compatibility']['stop']](0x0), this['webaudio']['source_loop']['_playing'] = !0x1, this['pausedTime'] += this['webaudio']['context']['currentTime'] - this['webaudio']['source_loop']['_startTime'], this['pausedTime'] %= this['webaudio']['source_loop']['buffer']['duration'], this['webaudio']['source_loop']['_startTime'] = 0x0, 'noteOn' === this['webaudio']['compatibility']['start'])) this['webaudio']['source_once'][this['webaudio']['compatibility']['stop']](0x0);
                        try {
                            this['webaudio']['context']['close']();
                            this['webaudio']['context'] = new this['AudioContext']();
                            this['webaudio']['gainNode'] = this['webaudio']['context']['createGain']();
                            this['webaudio']['gainNode']['connect'](this['webaudio']['context']['destination']);
                            this['webaudio']['gainNode']['gain']['value'] = this['_volume'];
                            var _0x5d8805 = 'start',
                                _0x387267 = 'stop',
                                _0x331dbc = this['webaudio']['context']['createBufferSource']();
                            'function' !== typeof _0x331dbc['start'] && (_0x5d8805 = 'noteOn');
                            this['webaudio']['compatibility']['start'] = _0x5d8805;
                            'function' !== typeof _0x331dbc['stop'] && (_0x387267 = 'noteOff');
                            this['webaudio']['compatibility']['stop'] = _0x387267;
                            this['webaudio']['source_loop'] = {};
                            this['play'](null, !0x0);
                        } catch (_0xd3985d) {}
                    }
                    if (this['webaudio']['buffer']) {
                        if (!this['muteFlag'] && (this['bgmPlaying'] = !0x0, !this['webaudio']['source_loop']['_playing'])) {
                            this['webaudio']['source_loop'] = this['webaudio']['context']['createBufferSource']();
                            this['webaudio']['source_loop']['buffer'] = this['webaudio']['buffer'];
                            this['webaudio']['source_loop']['loop'] = !0x0;
                            this['webaudio']['source_loop']['connect'](this['webaudio']['gainNode']);
                            if (null == _0xffb005 || isNaN(_0xffb005)) _0xffb005 = 0x0, this['pausedTime'] && (_0xffb005 = this['pausedTime']);
                            this['webaudio']['source_loop']['_startTime'] = this['webaudio']['context']['currentTime'];
                            if ('noteOn' === this['webaudio']['compatibility']['start']) this['webaudio']['source_once'] = this['webaudio']['context']['createBufferSource'](), this['webaudio']['source_once']['buffer'] = this['webaudio']['buffer'], this['webaudio']['source_once']['connect'](this['webaudio']['gainNode']), this['webaudio']['source_once']['noteGrainOn'](0x0, _0xffb005, this['webaudio']['buffer']['duration'] - _0xffb005), this['webaudio']['source_loop'][this['webaudio']['compatibility']['start']](this['webaudio']['context']['currentTime'] + (this['webaudio']['buffer']['duration'] - _0xffb005));
                            else this['webaudio']['source_loop'][this['webaudio']['compatibility']['start']](0x0, _0xffb005);
                            this['webaudio']['source_loop']['_playing'] = !0x0;
                        }
                    } else this['bgmPlaying'] = !0x0;
                } else if (this['audio']) {
                var _0xa30eb9 = this['audio'];
                if (!this['muteFlag'])
                    if (this['bgmPlaying'] = !0x0, isNaN(_0xffb005) && (_0xffb005 = 0x0, this['pausedTime'] && (_0xffb005 = this['pausedTime'])), _0x5d8805 = this['_duration'] - _0xffb005, this['_onEndTimer'] && (clearTimeout(this['_onEndTimer']), this['_onEndTimer'] = null), this['_onEndTimer'] = setTimeout(function() {
                            this['audio']['currentTime'] = 0x0;
                            this['audio']['pause']();
                            this['pausedTime'] = 0x0;
                            if (this['inactiveAudio']) {
                                var _0x59b881 = this['audio'];
                                this['audio'] = this['inactiveAudio'];
                                this['inactiveAudio'] = _0x59b881;
                            }
                            this['play']();
                        } ['bind'](this), 0x3e8 * _0x5d8805 + this['playDelay']), 0x4 === _0xa30eb9['readyState'] || !_0xa30eb9['readyState'] && navigator['isCocoonJS']) _0xa30eb9['readyState'] = 0x4, _0xa30eb9['currentTime'] = _0xffb005, _0xa30eb9['muted'] = this['muteFlag'] || _0xa30eb9['muted'], _0xa30eb9['volume'] = this['_volume'], setTimeout(function() {
                        _0xa30eb9['play']();
                    }, 0x0);
                    else {
                        clearTimeout(this['_onEndTimer']);
                        this['_onEndTimer'] = null;
                        var _0x25c069 = function() {
                            typeof('function' == this['play']) && (this['play'](), _0xa30eb9['removeEventListener']('canplaythrough', _0x25c069, !0x1));
                        } ['bind'](this);
                        _0xa30eb9['addEventListener']('canplaythrough', _0x25c069, !0x1);
                    }
            }
        },
        'stop': function() {
            this['bgmPlaying'] = !0x1;
            if (this['isSupported'])
                if (this['webaudio']) {
                    if (this['webaudio']['source_loop']['_playing'] && (this['webaudio']['source_loop'][this['webaudio']['compatibility']['stop']](0x0), this['webaudio']['source_loop']['_playing'] = !0x1, this['pausedTime'] += this['webaudio']['context']['currentTime'] - this['webaudio']['source_loop']['_startTime'], this['pausedTime'] %= this['webaudio']['source_loop']['buffer']['duration'], this['webaudio']['source_loop']['_startTime'] = 0x0, 'noteOn' === this['webaudio']['compatibility']['start'])) this['webaudio']['source_once'][this['webaudio']['compatibility']['stop']](0x0);
                } else if (this['audio']) {
                var _0x540357 = this['audio'];
                0x4 == _0x540357['readyState'] && (this['pausedTime'] = _0x540357['currentTime'], _0x540357['currentTime'] = 0x0, _0x540357['pause'](), clearTimeout(this['_onEndTimer']), this['_onEndTimer'] = null);
            }
        },
        'volume': function(_0x3caf28) {
            if (isNaN(_0x3caf28) || null == _0x3caf28) return this['getVolume']();
            this['isSupported'] && (this['_volume'] = _0x3caf28, 0x0 > this['_volume'] ? this['_volume'] = 0x0 : 0x1 < this['_volume'] && (this['_volume'] = 0x1), this['webaudio'] ? this['webaudio']['gainNode'] && (this['webaudio']['gainNode']['gain']['value'] = this['_volume']) : this['audio'] && (this['audio']['volume'] = this['_volume'], this['inactiveAudio'] && (this['inactiveAudio']['volume'] = this['_volume'])));
        },
        'getVolume': function() {
            return !this['isSupported'] ? 0x0 : this['_volume'];
        },
        'mute': function(_0x3f51ab) {
            this['parent'](_0x3f51ab);
            !0x1 == this['muteFlag'] && (this['muteFlag'] = !0x0, this['bgmPlaying'] && (this['stop'](), this['bgmPlaying'] = !0x0));
        },
        'unmute': function(_0x4f09b0) {
            this['parent'](_0x4f09b0);
            !this['stayMuteFlag'] && !0x0 == this['muteFlag'] && (this['muteFlag'] = !0x1, this['bgmPlaying'] && this['play']());
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.sound-info')['defines'](function() {
    SoundInfo = ig['Class']['extend']({
        'FORMATS': {
            'OGG': '.ogg',
            'MP3': '.mp3'
        },
        'sfx': {
            'kittyopeningSound': {
                'path': 'media/audio/opening/kittyopening'
            },
            'staticSound': {
                'path': 'media/audio/play/static'
            },
            'openingSound': {
                'path': 'media/audio/opening/opening'
            },
            'buttonClick': {
                'path': 'media/audio/btn_click'
            },
            'applause': {
                'path': 'media/audio/applause'
            },
            'arrowNock': {
                'path': 'media/audio/arrow_nock'
            },
            'arrowLoose': {
                'path': 'media/audio/arrow_loose'
            },
            'arrowHit1': {
                'path': 'media/audio/arrow_hit1'
            },
            'fruitHit': {
                'path': 'media/audio/fruit_hit'
            },
            'fireLit': {
                'path': 'media/audio/fire_lit'
            },
            'critical': {
                'path': 'media/audio/critical'
            },
            'woodSlide': {
                'path': 'media/audio/wood_slide'
            },
            'ouchPeasantBoy': {
                'path': 'media/audio/ouch_peasant_boy'
            },
            'ouchMonk': {
                'path': 'media/audio/ouch_monk'
            },
            'ouchJester': {
                'path': 'media/audio/ouch_jester'
            },
            'ouchMerchant': {
                'path': 'media/audio/ouch_merchant'
            },
            'ouchMerlin': {
                'path': 'media/audio/ouch_merlin'
            },
            'ouchPrincess': {
                'path': 'media/audio/ouch_princess'
            },
            'ouchSquire': {
                'path': 'media/audio/ouch_squire'
            },
            'gameStart': {
                'path': 'media/audio/game_start'
            }
        },
        'bgm': {
            'background': {
                'path': 'media/audio/bgm',
                'startOgg': 0x0,
                'endOgg': 0x16,
                'startMp3': 0x0,
                'endMp3': 0x16
            }
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.audio.sound-handler')['requires']('plugins.audio.impact-music-player', 'plugins.audio.impact-sound-player', 'plugins.audio.howler-player', 'plugins.audio.howler-music-player', 'plugins.audio.jukebox-player', 'plugins.audio.webaudio-music-player', 'plugins.audio.sound-info')['defines'](function() {
    ig['SoundHandler'] = ig['Class']['extend']({
        'bgmPlayer': null,
        'sfxPlayer': null,
        'focusBlurMute': !0x1,
        'soundInfo': new SoundInfo(),
        'init': function() {
            console['log']('Initiating\x20sound\x20handler');
            this['initWindowHandler']();
            ig['ua']['mobile'] ? (this['initPowerButtonFix'](), this['bgmPlayer'] = new WebaudioMusicPlayer(this['soundInfo']['bgm'], {
                'loop': !0x0
            }), this['bgmPlayer']['isSupported'] || (this['bgmPlayer'] = new JukeboxPlayer(this['soundInfo']['bgm'], {
                'loop': !0x0
            }))) : (this['bgmPlayer'] = new WebaudioMusicPlayer(this['soundInfo']['bgm'], {
                'loop': !0x0
            }), this['bgmPlayer']['isSupported'] || (this['bgmPlayer'] = new ImpactMusicPlayer(this['soundInfo']['bgm'], {
                'loop': !0x0
            })));
            this['sfxPlayer'] = new HowlerPlayer(this['soundInfo']['sfx']);
        },
        'checkBGM': function() {
            return this['bgmPlayer']['stayMuteFlag'];
        },
        'checkSFX': function() {
            return this['sfxPlayer']['stayMuteFlag'];
        },
        'muteSFX': function(_0x31edd0) {
            this['sfxPlayer'] && this['sfxPlayer']['mute'](_0x31edd0);
        },
        'muteBGM': function(_0x1a3f84) {
            this['bgmPlayer'] && this['bgmPlayer']['mute'](_0x1a3f84);
        },
        'unmuteSFX': function(_0x120fd5) {
            this['sfxPlayer'] && this['sfxPlayer']['unmute'](_0x120fd5);
        },
        'unmuteBGM': function(_0x10cce9) {
            this['bgmPlayer'] && this['bgmPlayer']['unmute'](_0x10cce9);
        },
        'muteAll': function(_0x42d8f6) {
            this['muteSFX'](_0x42d8f6);
            this['muteBGM'](_0x42d8f6);
        },
        'unmuteAll': function(_0x4a127a) {
            this['unmuteSFX'](_0x4a127a);
            this['unmuteBGM'](_0x4a127a);
        },
        'forceMuteAll': function() {
            this['focusBlurMute'] || this['muteAll'](!0x1);
            this['focusBlurMute'] = !0x0;
        },
        'forceUnMuteAll': function() {
            this['focusBlurMute'] && (this['unmuteAll'](!0x1), this['focusBlurMute'] = !0x1);
        },
        'initWindowHandler': function() {
            'true' === ig['domHandler']['getQueryVariable']('webview') ? ($(window)['focus'](function() {
                ig['soundHandler'] && ig['soundHandler']['forceUnMuteAll']();
            }), $(window)['blur'](function() {
                ig['soundHandler'] && ig['soundHandler']['forceMuteAll']();
            })) : (window['onfocus'] = function() {
                ig['soundHandler'] && ig['soundHandler']['forceUnMuteAll']();
            }, window['onblur'] = function() {
                ig['soundHandler'] && ig['soundHandler']['forceMuteAll']();
            });
        },
        'initPowerButtonFix': function() {
            var _0x21d1d6 = this['getHiddenProp']();
            _0x21d1d6 && (_0x21d1d6 = _0x21d1d6['replace'](/[H|h]idden/, '') + 'visibilitychange', document['addEventListener'](_0x21d1d6, this['visChange']));
            window['addEventListener']('pagehide', function() {
                ig['soundHandler'] && ig['soundHandler']['forceMuteAll']();
            }, !0x1);
            window['addEventListener']('pageshow', function() {
                ig['soundHandler'] && ig['soundHandler']['forceUnMuteAll']();
            }, !0x1);
        },
        'getHiddenProp': function() {
            var _0x3729ff = ['webkit', 'moz', 'ms', 'o'];
            if ('hidden' in document) return 'hidden';
            for (var _0x5cb5e5 = 0x0; _0x5cb5e5 < _0x3729ff['length']; _0x5cb5e5++)
                if (_0x3729ff[_0x5cb5e5] + 'Hidden' in document) return _0x3729ff[_0x5cb5e5] + 'Hidden';
            return null;
        },
        'isHidden': function() {
            var _0x1890ee = this['getHiddenProp']();
            return !_0x1890ee ? !0x1 : document[_0x1890ee];
        },
        'visChange': function() {
            ig['soundHandler']['isHidden']() ? ig['soundHandler'] && ig['soundHandler']['forceMuteAll']() : ig['soundHandler'] && ig['soundHandler']['forceUnMuteAll']();
        },
        'saveVolume': function() {
            this['sfxPlayer'] && ig['game']['io']['storageSet']('soundVolume', this['sfxPlayer']['getVolume']());
            this['bgmPlayer'] && ig['game']['io']['storageSet']('musicVolume', this['bgmPlayer']['getVolume']());
        },
        'forceLoopBGM': function() {
            var _0x13d88e;
            if (!this['focusBlurMute'] && this['bgmPlayer']['bgmPlaying'] && this['bgmPlayer']) {
                var _0x754e57 = this['bgmPlayer']['jukeboxPlayer'];
                if (_0x754e57) {
                    null != window['mozInnerScreenX'] && /firefox/ ['test'](navigator['userAgent']['toLowerCase']());
                    _0x13d88e = Boolean(window['chrome']);
                    !window['chrome'] && /safari/ ['test'](navigator['userAgent']['toLowerCase']());
                    var _0x4ab0c0 = 0.1;
                    ig['ua']['mobile'] && (_0x4ab0c0 = 0.115, ig['ua']['android'] && (_0x4ab0c0 = 0.45, _0x13d88e && (_0x4ab0c0 = 0.3)));
                    _0x754e57['settings']['spritemap']['music'] && (_0x13d88e = _0x754e57['settings']['spritemap']['music']['end'] - _0x4ab0c0, _0x754e57['getCurrentTime']() >= _0x13d88e && (_0x13d88e = _0x754e57['settings']['spritemap']['music']['start'], ig['ua']['android'] ? this['forcelooped'] || (_0x754e57['play'](_0x13d88e, !0x0), this['forcelooped'] = !0x0, setTimeout(function() {
                        ig['soundHandler']['forcelooped'] = !0x1;
                    }, _0x4ab0c0)) : _0x754e57['setCurrentTime'](_0x13d88e)));
                } else 'ImpactMusicPlayer' == this['bgmPlayer']['tagName'] && (null != window['mozInnerScreenX'] && /firefox/ ['test'](navigator['userAgent']['toLowerCase']()), _0x13d88e = Boolean(window['chrome']), !window['chrome'] && /safari/ ['test'](navigator['userAgent']['toLowerCase']()), _0x4ab0c0 = 0.1, ig['ua']['mobile'] && (_0x4ab0c0 = 0.115, ig['ua']['android'] && (_0x4ab0c0 = 0.45, _0x13d88e && (_0x4ab0c0 = 0.3))), _0x754e57 = 0x0, 'mp3' == ig['soundManager']['format']['ext'] && (_0x754e57 = 0.05), ig['music']['currentTrack'] && (_0x13d88e = ig['music']['currentTrack']['duration'] - _0x4ab0c0, ig['music']['currentTrack']['currentTime'] >= _0x13d88e && (ig['ua']['android'] ? this['forcelooped'] || (ig['music']['currentTrack']['pause'](), ig['music']['currentTrack']['currentTime'] = _0x754e57, ig['music']['currentTrack']['play'](), this['forcelooped'] = !0x0, setTimeout(function() {
                    ig['soundHandler']['forcelooped'] = !0x1;
                }, _0x4ab0c0)) : ig['music']['currentTrack']['currentTime'] = _0x754e57)));
            }
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.io.storage')['defines'](function() {
    ig['Storage'] = ig['Class']['extend']({
        'staticInstantiate': function() {
            return !ig['Storage']['instance'] ? null : ig['Storage']['instance'];
        },
        'init': function() {
            ig['Storage']['instance'] = this;
        },
        'isCapable': function() {
            return 'undefined' !== typeof window['localStorage'];
        },
        'isSet': function(_0x277aa8) {
            return null !== this['get'](_0x277aa8);
        },
        'initUnset': function(_0x413830, _0x2fb8a2) {
            null === this['get'](_0x413830) && this['set'](_0x413830, _0x2fb8a2);
        },
        'get': function(_0x50d9f4) {
            if (!this['isCapable']()) return null;
            try {
                return JSON['parse'](localStorage['getItem'](_0x50d9f4));
            } catch (_0x53853f) {
                return window['localStorage']['getItem'](_0x50d9f4);
            }
        },
        'getInt': function(_0x1131c7) {
            return ~~this['get'](_0x1131c7);
        },
        'getFloat': function(_0x266e5e) {
            return parseFloat(this['get'](_0x266e5e));
        },
        'getBool': function(_0x410c0b) {
            return !!this['get'](_0x410c0b);
        },
        'key': function(_0x45e001) {
            return this['isCapable']() ? window['localStorage']['key'](_0x45e001) : null;
        },
        'set': function(_0x48e9d4, _0x35db73) {
            if (!this['isCapable']()) return null;
            try {
                window['localStorage']['setItem'](_0x48e9d4, JSON['stringify'](_0x35db73));
            } catch (_0x51cd92) {
                console['log'](_0x51cd92);
            }
        },
        'setHighest': function(_0x1feb46, _0x17fae1) {
            _0x17fae1 > this['getFloat'](_0x1feb46) && this['set'](_0x1feb46, _0x17fae1);
        },
        'remove': function(_0x429151) {
            if (!this['isCapable']()) return null;
            window['localStorage']['removeItem'](_0x429151);
        },
        'clear': function() {
            if (!this['isCapable']()) return null;
            window['localStorage']['clear']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.io.mouse')['defines'](function() {
    Mouse = ig['Class']['extend']({
        'bindings': {
            'click': [ig['KEY']['MOUSE1']]
        },
        'init': function() {
            ig['input']['initMouse']();
            for (var _0x52d3ac in this['bindings']) {
                this[_0x52d3ac] = _0x52d3ac;
                for (var _0x469f55 = 0x0; _0x469f55 < this['bindings'][_0x52d3ac]['length']; _0x469f55++) ig['input']['bind'](this['bindings'][_0x52d3ac][_0x469f55], _0x52d3ac);
            }
        },
        'getPos': function() {
            if (ig['ua']['mobile']) {
                var _0x18ed79 = ig['input']['mouse']['x'] / ig['sizeHandler']['sizeRatio']['x'],
                    _0x147d11 = ig['input']['mouse']['y'] / ig['sizeHandler']['sizeRatio']['y'];
                return new Vector2(_0x18ed79 / ig['sizeHandler']['scaleRatioMultiplier']['x'], _0x147d11 / ig['sizeHandler']['scaleRatioMultiplier']['y']);
            }
            _0x18ed79 = ig['input']['mouse']['x'] / ig['sizeHandler']['sizeRatio']['x'];
            _0x147d11 = ig['input']['mouse']['y'] / ig['sizeHandler']['sizeRatio']['y'];
            return new Vector2(_0x18ed79, _0x147d11);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.io.keyboard')['defines'](function() {
    Keyboard = ig['Class']['extend']({
        'bindings': {
            'jump': [ig['KEY']['W'], ig['KEY']['UP_ARROW']],
            'moveright': [ig['KEY']['D'], ig['KEY']['RIGHT_ARROW']],
            'moveleft': [ig['KEY']['A'], ig['KEY']['LEFT_ARROW']],
            'shoot': [ig['KEY']['S'], ig['KEY']['DOWN_ARROW'], ig['KEY']['SPACE']]
        },
        'init': function() {
            for (var _0x33bc3e in this['bindings']) {
                this[_0x33bc3e] = _0x33bc3e;
                for (var _0xeac382 = 0x0; _0xeac382 < this['bindings'][_0x33bc3e]['length']; _0xeac382++) ig['input']['bind'](this['bindings'][_0x33bc3e][_0xeac382], _0x33bc3e);
            }
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.io.gamepad-input')['defines'](function() {
    ig['PADKEY'] = {
        'BUTTON_0': 0x0,
        'PADBUTTON_1': 0x1,
        'BUTTON_2': 0x2,
        'BUTTON_3': 0x3,
        'BUTTON_LEFT_BUMPER': 0x4,
        'BUTTON_RIGHT_BUMPER': 0x5,
        'BUTTON_LEFT_TRIGGER': 0x6,
        'BUTTON_RIGHT_TRIGGER': 0x7,
        'BUTTON_LEFT_JOYSTICK': 0xa,
        'BUTTON_RIGHT_JOYSTICK': 0xb,
        'BUTTON_DPAD_UP': 0xc,
        'BUTTON_DPAD_DOWN': 0xd,
        'BUTTON_DPAD_LEFT': 0xe,
        'BUTTON_DPAD_RIGHT': 0xf,
        'BUTTON_MENU': 0x10,
        'AXIS_LEFT_JOYSTICK_X': 0x0,
        'AXIS_LEFT_JOYSTICK_Y': 0x1,
        'AXIS_RIGHT_JOYSTICK_X': 0x2,
        'AXIS_RIGHT_JOYSTICK_Y': 0x3
    };
    ig['GamepadInput'] = ig['Class']['extend']({
        'isInit': !0x1,
        'isSupported': !0x1,
        'list': [],
        'bindings': {},
        'states': {},
        'presses': {},
        'releases': {},
        'downLocks': {},
        'upLocks': {},
        'leftStick': {
            'x': 0x0,
            'y': 0x0
        },
        'rightStick': {
            'x': 0x0,
            'y': 0x0
        },
        'start': function() {
            if (!this['isInit']) {
                this['isInit'] = !0x0;
                var _0xcafd6f = navigator['getGamepads'] || navigator['webkitGetGamepads'];
                _0xcafd6f && (!navigator['getGamepads'] && navigator['webkitGetGamepads'] && (navigator['getGamepads'] = navigator['webkitGetGamepads']), this['list'] = navigator['getGamepads']());
                this['isSupported'] = _0xcafd6f;
            }
        },
        'isAvailable': function() {
            return this['isInit'] && this['isSupported'];
        },
        'buttonPressed': function(_0x15e896) {
            return 'object' == typeof _0x15e896 ? _0x15e896['pressed'] : 0x1 == _0x15e896;
        },
        'buttonDown': function(_0x2087e3) {
            if (_0x2087e3 = this['bindings'][_0x2087e3]) this['states'][_0x2087e3] = !0x0, this['downLocks'][_0x2087e3] || (this['presses'][_0x2087e3] = !0x0, this['downLocks'][_0x2087e3] = !0x0);
        },
        'buttonUp': function(_0x149c2f) {
            if ((_0x149c2f = this['bindings'][_0x149c2f]) && this['downLocks'][_0x149c2f] && !this['upLocks'][_0x149c2f]) this['states'][_0x149c2f] = !0x1, this['releases'][_0x149c2f] = !0x0, this['upLocks'][_0x149c2f] = !0x0;
        },
        'clearPressed': function() {
            for (var _0x3db04a in this['releases']) this['states'][_0x3db04a] = !0x1, this['downLocks'][_0x3db04a] = !0x1;
            this['releases'] = {};
            this['presses'] = {};
            this['upLocks'] = {};
        },
        'bind': function(_0x3d314e, _0x585ba7) {
            this['bindings'][_0x3d314e] = _0x585ba7;
        },
        'unbind': function(_0x1ea837) {
            this['releases'][this['bindings'][_0x1ea837]] = !0x0;
            this['bindings'][_0x1ea837] = null;
        },
        'unbindAll': function() {
            this['bindings'] = {};
            this['states'] = {};
            this['presses'] = {};
            this['releases'] = {};
            this['downLocks'] = {};
            this['upLocks'] = {};
        },
        'state': function(_0x265788) {
            return this['states'][_0x265788];
        },
        'pressed': function(_0x121c98) {
            return this['presses'][_0x121c98];
        },
        'released': function(_0xdea92) {
            return this['releases'][_0xdea92];
        },
        'clamp': function(_0x1d9ae5, _0x2b1297, _0x3a3a94) {
            return _0x1d9ae5 < _0x2b1297 ? _0x2b1297 : _0x1d9ae5 > _0x3a3a94 ? _0x3a3a94 : _0x1d9ae5;
        },
        'pollGamepads': function() {
            if (this['isSupported']) {
                this['leftStick']['x'] = 0x0;
                this['leftStick']['y'] = 0x0;
                this['rightStick']['x'] = 0x0;
                this['rightStick']['y'] = 0x0;
                this['list'] = navigator['getGamepads']();
                for (var _0x369e51 in this['bindings']) {
                    for (var _0x5476fa = !0x1, _0x32d906 = 0x0; _0x32d906 < this['list']['length']; _0x32d906++) {
                        var _0x11f1b9 = this['list'][_0x32d906];
                        if (_0x11f1b9 && _0x11f1b9['buttons'] && this['buttonPressed'](_0x11f1b9['buttons'][_0x369e51])) {
                            _0x5476fa = !0x0;
                            break;
                        }
                    }
                    _0x5476fa ? this['buttonDown'](_0x369e51) : this['buttonUp'](_0x369e51);
                }
                for (_0x32d906 = 0x0; _0x32d906 < this['list']['length']; _0x32d906++)
                    if ((_0x11f1b9 = this['list'][_0x32d906]) && _0x11f1b9['axes']) {
                        _0x369e51 = _0x11f1b9['axes'][ig['GAMEPADINPUT']['AXIS_LEFT_JOYSTICK_X']];
                        var _0x5476fa = _0x11f1b9['axes'][ig['GAMEPADINPUT']['AXIS_LEFT_JOYSTICK_Y']],
                            _0xb4d882 = _0x11f1b9['axes'][ig['GAMEPADINPUT']['AXIS_RIGHT_JOYSTICK_X']],
                            _0x11f1b9 = _0x11f1b9['axes'][ig['GAMEPADINPUT']['AXIS_RIGHT_JOYSTICK_Y']];
                        this['leftStick']['x'] += isNaN(_0x369e51) ? 0x0 : _0x369e51;
                        this['leftStick']['y'] += isNaN(_0x5476fa) ? 0x0 : _0x5476fa;
                        this['rightStick']['x'] += isNaN(_0xb4d882) ? 0x0 : _0xb4d882;
                        this['rightStick']['y'] += isNaN(_0x11f1b9) ? 0x0 : _0x11f1b9;
                    } 0x0 < this['list']['length'] && (this['leftStick']['x'] = this['clamp'](this['leftStick']['x'], -0x1, 0x1), this['leftStick']['y'] = this['clamp'](this['leftStick']['y'], -0x1, 0x1), this['rightStick']['x'] = this['clamp'](this['rightStick']['x'], -0x1, 0x1), this['rightStick']['y'] = this['clamp'](this['rightStick']['y'], -0x1, 0x1));
            }
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.io.gamepad')['requires']('plugins.io.gamepad-input')['defines'](function() {
    Gamepad = ig['Class']['extend']({
        'bindings': {
            'padJump': [ig['PADKEY']['BUTTON_0']]
        },
        'init': function() {
            ig['gamepadInput']['start']();
            for (var _0x2ee67a in this['bindings'])
                for (var _0x36472f = 0x0; _0x36472f < this['bindings'][_0x2ee67a]['length']; _0x36472f++) ig['gamepadInput']['bind'](this['bindings'][_0x2ee67a][_0x36472f], _0x2ee67a);
        },
        'press': function() {},
        'held': function() {},
        'release': function() {}
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.io.multitouch')['defines'](function() {
    Multitouch = ig['Class']['extend']({
        'init': function() {
            ig['multitouchInput']['start']();
        },
        'getTouchesPos': function() {
            if (ig['ua']['mobile']) {
                if (0x0 < ig['multitouchInput']['touches']['length']) {
                    for (var _0x4a3532 = [], _0xb50d7a = 0x0; _0xb50d7a < ig['multitouchInput']['touches']['length']; _0xb50d7a++) {
                        var _0x196943 = ig['multitouchInput']['touches'][_0xb50d7a];
                        _0x4a3532['push']({
                            'x': _0x196943['x'],
                            'y': _0x196943['y']
                        });
                    }
                    return _0x4a3532;
                }
                return null;
            }
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.io.multitouch-input')['defines'](function() {
    ig['MultitouchInput'] = ig['Class']['extend']({
        'isStart': !0x1,
        'touches': [],
        'multitouchCapable': !0x1,
        'lastEventUp': null,
        'start': function() {
            this['isStart'] || (this['isStart'] = !0x0, navigator['maxTouchPoints'] && 0x1 < navigator['maxTouchPoints'] && (this['multitouchCapable'] = !0x0), ig['ua']['touchDevice'] && (window['navigator']['msPointerEnabled'] && (ig['system']['canvas']['addEventListener']('MSPointerDown', this['touchdown']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('MSPointerUp', this['touchup']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('MSPointerMove', this['touchmove']['bind'](this), !0x1), ig['system']['canvas']['style']['msContentZooming'] = 'none', ig['system']['canvas']['style']['msTouchAction'] = 'none'), ig['system']['canvas']['addEventListener']('touchstart', this['touchdown']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('touchend', this['touchup']['bind'](this), !0x1), ig['system']['canvas']['addEventListener']('touchmove', this['touchmove']['bind'](this), !0x1)));
        },
        'touchmove': function(_0x3ca720) {
            if (ig['ua']['touchDevice']) {
                var _0xf46a9a = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth'],
                    _0x71020c = parseInt(ig['system']['canvas']['offsetHeight']) || ig['system']['realHeight'],
                    _0xf46a9a = ig['system']['scale'] * (_0xf46a9a / ig['system']['realWidth']),
                    _0x71020c = ig['system']['scale'] * (_0x71020c / ig['system']['realHeight']);
                if (_0x3ca720['touches']) {
                    for (; 0x0 < this['touches']['length'];) this['touches']['pop']();
                    !this['multitouchCapable'] && 0x1 < _0x3ca720['touches']['length'] && (this['multitouchCapable'] = !0x0);
                    var _0x20ab2c = {
                        'left': 0x0,
                        'top': 0x0
                    };
                    ig['system']['canvas']['getBoundingClientRect'] && (_0x20ab2c = ig['system']['canvas']['getBoundingClientRect']());
                    for (var _0x3bf285 = 0x0; _0x3bf285 < _0x3ca720['touches']['length']; _0x3bf285++) {
                        var _0xecb6e = _0x3ca720['touches'][_0x3bf285];
                        _0xecb6e && this['touches']['push']({
                            'x': (_0xecb6e['clientX'] - _0x20ab2c['left']) / _0xf46a9a,
                            'y': (_0xecb6e['clientY'] - _0x20ab2c['top']) / _0x71020c
                        });
                    }
                } else this['windowMove'](_0x3ca720);
            }
        },
        'touchdown': function(_0x423938) {
            var _0x3a8313 = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth'],
                _0x3c2b34 = parseInt(ig['system']['canvas']['offsetHeight']) || ig['system']['realHeight'],
                _0x3a8313 = ig['system']['scale'] * (_0x3a8313 / ig['system']['realWidth']),
                _0x3c2b34 = ig['system']['scale'] * (_0x3c2b34 / ig['system']['realHeight']);
            if (window['navigator']['msPointerEnabled']) this['windowKeyDown'](_0x423938);
            else if (ig['ua']['touchDevice'] && _0x423938['touches']) {
                for (; 0x0 < this['touches']['length'];) this['touches']['pop']();
                !this['multitouchCapable'] && 0x1 < _0x423938['touches']['length'] && (this['multitouchCapable'] = !0x0);
                var _0x27346c = {
                    'left': 0x0,
                    'top': 0x0
                };
                ig['system']['canvas']['getBoundingClientRect'] && (_0x27346c = ig['system']['canvas']['getBoundingClientRect']());
                for (var _0x48a95b = 0x0; _0x48a95b < _0x423938['touches']['length']; _0x48a95b++) {
                    var _0xd7abc0 = _0x423938['touches'][_0x48a95b];
                    _0xd7abc0 && this['touches']['push']({
                        'x': (_0xd7abc0['clientX'] - _0x27346c['left']) / _0x3a8313,
                        'y': (_0xd7abc0['clientY'] - _0x27346c['top']) / _0x3c2b34
                    });
                }
            }
        },
        'touchup': function(_0x18b257) {
            var _0x6634a5 = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth'];
            parseInt(ig['system']['canvas']['offsetHeight']);
            _0x6634a5 = ig['system']['scale'] * (_0x6634a5 / ig['system']['realWidth']);
            if (window['navigator']['msPointerEnabled']) this['windowKeyUp'](_0x18b257);
            else {
                this['lastEventUp'] = _0x18b257;
                var _0x512a46 = {
                    'left': 0x0,
                    'top': 0x0
                };
                ig['system']['canvas']['getBoundingClientRect'] && (_0x512a46 = ig['system']['canvas']['getBoundingClientRect']());
                if (ig['ua']['touchDevice']) {
                    _0x18b257 = (_0x18b257['changedTouches'][0x0]['clientX'] - _0x512a46['left']) / _0x6634a5;
                    for (_0x6634a5 = 0x0; _0x6634a5 < this['touches']['length']; _0x6634a5++) this['touches'][_0x6634a5]['x'] >= _0x18b257 - 0x28 && this['touches'][_0x6634a5]['x'] <= _0x18b257 + 0x28 && this['touches']['splice'](_0x6634a5, 0x1);
                }
            }
        },
        'windowKeyDown': function(_0x27bc7e) {
            var _0x4fd9b1 = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth'],
                _0xa33641 = parseInt(ig['system']['canvas']['offsetHeight']) || ig['system']['realHeight'],
                _0x4fd9b1 = ig['system']['scale'] * (_0x4fd9b1 / ig['system']['realWidth']),
                _0xa33641 = ig['system']['scale'] * (_0xa33641 / ig['system']['realHeight']);
            if (window['navigator']['msPointerEnabled']) {
                var _0x5e03f6 = {
                    'left': 0x0,
                    'top': 0x0
                };
                ig['system']['canvas']['getBoundingClientRect'] && (_0x5e03f6 = ig['system']['canvas']['getBoundingClientRect']());
                _0x27bc7e = _0x27bc7e['changedTouches'] ? _0x27bc7e['changedTouches'] : [_0x27bc7e];
                for (var _0x33f721 = 0x0; _0x33f721 < _0x27bc7e['length']; ++_0x33f721) {
                    for (var _0x16d3fb = _0x27bc7e[_0x33f721], _0x186e28 = 'undefined' != typeof _0x16d3fb['identifier'] ? _0x16d3fb['identifier'] : 'undefined' != typeof _0x16d3fb['pointerId'] ? _0x16d3fb['pointerId'] : 0x1, _0x239e75 = (_0x16d3fb['clientX'] - _0x5e03f6['left']) / _0x4fd9b1, _0x16d3fb = (_0x16d3fb['clientY'] - _0x5e03f6['top']) / _0xa33641, _0x2ba8af = 0x0; _0x2ba8af < this['touches']['length']; ++_0x2ba8af) this['touches'][_0x2ba8af]['identifier'] == _0x186e28 && this['touches']['splice'](_0x2ba8af, 0x1);
                    this['touches']['push']({
                        'x': _0x239e75,
                        'y': _0x16d3fb,
                        'identifier': _0x186e28
                    });
                }
                for (_0x4fd9b1 = 0x0; _0x4fd9b1 < this['touches']['length']; _0x4fd9b1++);
            }
        },
        'windowKeyUp': function(_0x51cc78) {
            _0x51cc78 = 'undefined' != typeof _0x51cc78['identifier'] ? _0x51cc78['identifier'] : 'undefined' != typeof _0x51cc78['pointerId'] ? _0x51cc78['pointerId'] : 0x1;
            for (var _0x499304 = 0x0; _0x499304 < this['touches']['length']; ++_0x499304) this['touches'][_0x499304]['identifier'] == _0x51cc78 && this['touches']['splice'](_0x499304, 0x1);
            for (; 0x0 < this['touches']['length'];) this['touches']['pop']();
        },
        'windowMove': function(_0x453d6e) {
            var _0x31f28f = parseInt(ig['system']['canvas']['offsetWidth']) || ig['system']['realWidth'],
                _0x594e81 = parseInt(ig['system']['canvas']['offsetHeight']) || ig['system']['realHeight'],
                _0x31f28f = ig['system']['scale'] * (_0x31f28f / ig['system']['realWidth']),
                _0x594e81 = ig['system']['scale'] * (_0x594e81 / ig['system']['realHeight']),
                _0x4dcfb7 = {
                    'left': 0x0,
                    'top': 0x0
                };
            ig['system']['canvas']['getBoundingClientRect'] && (_0x4dcfb7 = ig['system']['canvas']['getBoundingClientRect']());
            if (window['navigator']['msPointerEnabled'])
                for (var _0x149507 = 'undefined' != typeof _0x453d6e['identifier'] ? _0x453d6e['identifier'] : 'undefined' != typeof _0x453d6e['pointerId'] ? _0x453d6e['pointerId'] : 0x1, _0x5313f4 = 0x0; _0x5313f4 < this['touches']['length']; ++_0x5313f4)
                    if (this['touches'][_0x5313f4]['identifier'] == _0x149507) {
                        var _0x419ba6 = (_0x453d6e['clientY'] - _0x4dcfb7['top']) / _0x594e81;
                        this['touches'][_0x5313f4]['x'] = (_0x453d6e['clientX'] - _0x4dcfb7['left']) / _0x31f28f;
                        this['touches'][_0x5313f4]['y'] = _0x419ba6;
                    }
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.io.fake-storage')['requires']('impact.game')['defines'](function() {
    ig['FakeStorage'] = ig['Class']['extend']({
        'tempData': {},
        'init': function() {
            ig['FakeStorage']['instance'] = this;
        },
        'initUnset': function(_0xbf9695, _0x1b7b8a) {
            null === this['get'](_0xbf9695) && this['set'](_0xbf9695, _0x1b7b8a);
        },
        'set': function(_0x12e56d, _0x168207) {
            this['tempData'][_0x12e56d] = JSON['stringify'](_0x168207);
        },
        'setHighest': function(_0x25cd8f, _0x3f0393) {
            _0x3f0393 > this['getFloat'](_0x25cd8f) && this['set'](_0x25cd8f, _0x3f0393);
        },
        'get': function(_0x2bbe5f) {
            return 'undefined' == typeof this['tempData'][_0x2bbe5f] ? null : JSON['parse'](this['tempData'][_0x2bbe5f]);
        },
        'getInt': function(_0x668864) {
            return ~~this['get'](_0x668864);
        },
        'getFloat': function(_0x1b09f3) {
            return parseFloat(this['get'](_0x1b09f3));
        },
        'getBool': function(_0x2aed24) {
            return !!this['get'](_0x2aed24);
        },
        'isSet': function(_0x4dd957) {
            return null !== this['get'](_0x4dd957);
        },
        'remove': function(_0xe00889) {
            delete this['tempData'][_0xe00889];
        },
        'clear': function() {
            this['tempData'] = {};
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.io.io-manager')['requires']('plugins.io.storage', 'plugins.io.mouse', 'plugins.io.keyboard', 'plugins.io.gamepad', 'plugins.io.multitouch', 'plugins.io.multitouch-input', 'plugins.io.gamepad-input', 'plugins.io.fake-storage')['defines'](function() {
    IoManager = ig['Class']['extend']({
        'storage': null,
        'localStorageSupport': !0x1,
        'mouse': null,
        'keyboard': null,
        'multitouch': null,
        'gamepad': null,
        'init': function() {
            ig['multitouchInput'] = new ig['MultitouchInput']();
            ig['gamepadInput'] = new ig['GamepadInput']();
            this['unbindAll']();
            this['initStorage']();
            this['initMouse']();
            this['initKeyboard']();
        },
        'unbindAll': function() {
            ig['input']['unbindAll']();
            ig['gamepadInput']['unbindAll']();
        },
        'initStorage': function() {
            try {
                window['localStorage']['setItem']('test', 'test'), this['storage'] = new ig['Storage']();
            } catch (_0x1f1921) {
                console['log']('using\x20fake\x20storage'), this['storage'] = new ig['FakeStorage']();
            } finally {
                window['localStorage']['removeItem']('test');
            }
        },
        'initMouse': function() {
            this['mouse'] = new Mouse();
        },
        'initKeyboard': function() {
            this['keyboard'] = new Keyboard();
        },
        'initMultitouch': function() {
            this['multitouch'] = new Multitouch();
        },
        'initGamepad': function() {
            this['gamepad'] = new Gamepad();
        },
        'press': function(_0x360214) {
            return ig['input']['pressed'](_0x360214) || this['gamepad'] && this['gamepad']['press'](_0x360214) ? !0x0 : !0x1;
        },
        'held': function(_0x2c8a73) {
            return ig['input']['state'](_0x2c8a73) || this['gamepad'] && this['gamepad']['state'](_0x2c8a73) ? !0x0 : !0x1;
        },
        'release': function(_0x7cf8ce) {
            return ig['input']['released'](_0x7cf8ce) || this['gamepad'] && this['gamepad']['released'](_0x7cf8ce) ? !0x0 : !0x1;
        },
        'getClickPos': function() {
            return this['mouse']['getPos']();
        },
        'getTouchesPos': function() {
            return this['multitouch']['getTouchesPos']();
        },
        'checkOverlap': function(_0x512a33, _0x522cb9, _0x2d9c81, _0x2e3d7a, _0x5b55c3) {
            return _0x512a33['x'] > _0x522cb9 + _0x2e3d7a || _0x512a33['x'] < _0x522cb9 || _0x512a33['y'] > _0x2d9c81 + _0x5b55c3 || _0x512a33['y'] < _0x2d9c81 ? !0x1 : !0x0;
        },
        '_supportsLocalStorage': function() {
            try {
                return localStorage['setItem']('test', 'test'), localStorage['removeItem']('test'), this['localStorageSupport'] = 'localStorage' in window && null !== window['localStorage'];
            } catch (_0xaba3fe) {
                return this['localStorageSupport'];
            }
        },
        'storageIsSet': function(_0x4f5194) {
            return !this['localStorageSupport'] ? null : this['storage']['isSet'](_0x4f5194);
        },
        'storageGet': function(_0x8d835a) {
            return !this['localStorageSupport'] ? null : this['storage']['get'](_0x8d835a);
        },
        'storageSet': function(_0x48acb1, _0x27a44d) {
            if (!this['localStorageSupport']) return null;
            this['storage']['set'](_0x48acb1, _0x27a44d);
        },
        'assert': function(_0x5390e4, _0x44dfba, _0x410bcf) {
            if (_0x44dfba !== _0x410bcf) throw 'actualValue:' + _0x44dfba + '\x20not\x20equal\x20to\x20testValue:' + _0x410bcf + '\x20at\x20' + _0x5390e4;
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.io.storage-manager')['requires']('impact.game', 'plugins.io.io-manager')['defines'](function() {
    ig['Game']['prototype']['name'] = 'MJS-Game';
    ig['Game']['prototype']['version'] = '1.0';
    ig['Game']['prototype']['sessionData'] = {};
    ig['Game']['prototype']['initData'] = function() {
        return this['sessionData'] = {
            'sound': 0.5,
            'music': 0.5,
            'level': 0x1,
            'score': 0x0
        };
    };
    ig['Game']['prototype']['setupStorageManager'] = function() {
        'undefined' === typeof this['name'] ? console['error']('Cannot\x20found\x20Game\x20Name,\x20Storage\x20Manager\x20Cancelled.') : 'undefined' === typeof this['version'] ? console['error']('Cannot\x20found\x20Game\x20Version,\x20Storage\x20Manager\x20Cancelled.') : (this['io'] || (this['io'] = new IoManager(), console['log']('IO\x20Manager\x20doesn\x27t\x20existed.\x20Initialize...')), console['log']('Plug\x20in\x20Storage\x20Manager'), this['storage'] = this['io']['storage'], this['storageName'] = this['name'] + '-v' + this['version'], this['loadAll']());
    };
    ig['Game']['prototype']['loadAll'] = function() {
        var _0xd0f0cf = this['storage']['get'](this['storageName']);
        if (null === _0xd0f0cf || 'undefined' === typeof _0xd0f0cf) _0xd0f0cf = this['initData']();
        for (var _0x12478e in _0xd0f0cf) this['sessionData'][_0x12478e] = _0xd0f0cf[_0x12478e];
        this['storage']['set'](this['storageName'], _0xd0f0cf);
    };
    ig['Game']['prototype']['saveAll'] = function() {
        var _0x20b744 = this['storage']['get'](this['storageName']),
            _0x170561;
        for (_0x170561 in _0x20b744) _0x20b744[_0x170561] = this['sessionData'][_0x170561];
        this['storage']['set'](this['storageName'], _0x20b744);
    };
    ig['Game']['prototype']['load'] = function(_0x534685) {
        return this['storage']['get'](this['storageName'])[_0x534685];
    };
    ig['Game']['prototype']['save'] = function(_0x3c5728, _0x5b1eaa) {
        var _0x3f4b10 = this['storage']['get'](this['storageName']);
        _0x3f4b10[_0x3c5728] = _0x5b1eaa;
        this['storage']['set'](this['storageName'], _0x3f4b10);
    };
});
ig['baked'] = !0x0;
ig['module']('plugins.splash-loader')['requires']('impact.loader', 'impact.animation')['defines'](function() {
    ig['SplashLoader'] = ig['Loader']['extend']({
        'splashDesktop': new ig['Image']('media/graphics/splash/desktop/cover.jpg'),
        'splashMobile': new ig['Image']('media/graphics/splash/mobile/cover.jpg'),
        'progressBar1': new ig['Image']('media/graphics/sprites/loading_bar.png'),
        'progressBar2': new ig['Image']('media/graphics/sprites/loading.png'),
        'customAnim': new ig['AnimationSheet']('media/graphics/splash/loading/anim.png', 0x100, 0xa0),
        'fireSheet': new ig['AnimationSheet']('media/graphics/sprites/bill/fire-sprite.png', 0x32, 0x50),
        'desktopCoverDIVID': 'play-desktop',
        'init': function(_0x2a1932, _0x18ad44) {
            this['parent'](_0x2a1932, _0x18ad44);
            this['setupCustomAnimation']();
            ig['apiHandler']['run']('MJSPreroll');
        },
        'end': function() {
            this['parent']();
            AG['startSession']()['then'](function() {
                this['end_next']();
                console['log']('SWAG\x20API\x20IS\x20READY');
            } ['bind'](this));
        },
        'end_next': function() {
            this['_drawStatus'] = 0x1;
            this['draw']();
            var _0xfc9847 = ig['domHandler']['getElementById']('#play');
            ig['domHandler']['show'](_0xfc9847);
            ig['system']['setGame'](MyGame);
        },
        'tapToStartDiv': function(_0x4b08ea) {
            this['desktopCoverDIV'] = document['createElement']('div');
            this['desktopCoverDIV']['id'] = this['desktopCoverDIVID'];
            this['desktopCoverDIV']['setAttribute']('class', 'play');
            this['desktopCoverDIV']['setAttribute']('style', 'position:\x20absolute;\x20display:\x20block;\x20z-index:\x20999999;\x20background-color:\x20rgba(23,\x2032,\x2053,\x200.7);\x20visibility:\x20visible;\x20font-size:\x2010vmin;\x20text-align:\x20center;\x20vertical-align:\x20middle;\x20-webkit-touch-callout:\x20none;\x20-webkit-user-select:\x20none;\x20-khtml-user-select:\x20none;\x20-moz-user-select:\x20none;\x20-ms-user-select:\x20none;\x20user-select:\x20none;');
            this['desktopCoverDIV']['innerHTML'] = '<div\x20style=\x27color:white;background-color:\x20rgba(255,\x20255,\x20255,\x200.3);\x20border:\x202px\x20solid\x20#fff;\x20font-size:20px;\x20border-radius:\x205px;\x20position:\x20relative;\x20float:\x20left;\x20top:\x2050%;\x20left:\x2050%;\x20transform:\x20translate(-50%,\x20-50%);\x27><div\x20style=\x27padding:20px\x2050px;\x20font-family:\x20Arial;\x27>' + _STRINGS['Splash']['TapToStart'] + '</div></div>';
            (document['getElementById']('play')['parentNode'] || document['getElementById']('ajaxbar'))['appendChild'](this['desktopCoverDIV']);
            try {
                'undefined' !== typeof ig['sizeHandler'] ? 'undefined' !== typeof ig['sizeHandler']['coreDivsToResize'] && (ig['sizeHandler']['coreDivsToResize']['push']('#' + this['desktopCoverDIVID']), 'function' === typeof ig['sizeHandler']['reorient'] && ig['sizeHandler']['reorient']()) : 'undefined' !== typeof coreDivsToResize && (coreDivsToResize['push'](this['desktopCoverDIVID']), 'function' === typeof sizeHandler && sizeHandler());
            } catch (_0x24fc07) {
                console['log'](_0x24fc07);
            }
            this['desktopCoverDIV']['addEventListener']('click', function() {
                try {
                    'undefined' !== typeof ig['soundHandler'] ? ('undefined' !== typeof ig['soundHandler']['bgmPlayer'] ? 'undefined' !== typeof ig['soundHandler']['bgmPlayer']['webaudio'] && 'undefined' !== typeof ig['soundHandler']['bgmPlayer']['webaudio']['context'] && ig['soundHandler']['bgmPlayer']['webaudio']['context']['resume']() : (ig['soundHandler'] = null, ig['soundHandler'] = 'undefined' !== typeof ig['soundList'] ? new ig['SoundHandler'](ig['soundList']) : new ig['SoundHandler']()), 'undefined' !== typeof ig['soundHandler']['sfxPlayer'] ? 'function' === typeof ig['soundHandler']['sfxPlayer']['play'] && ig['soundHandler']['sfxPlayer']['play']('staticSound') : 'undefined' !== typeof ig['soundHandler']['staticSound'] ? 'function' === typeof ig['soundHandler']['staticSound']['play'] && ig['soundHandler']['staticSound']['play']() : 'function' === typeof ig['soundHandler']['playSound'] && ig['soundHandler']['playSound']('staticSound')) : 'undefined' !== typeof Howl ? (ig['global']['staticSound'] = new Howl({
                        'src': ['media/audio/play/static.ogg', 'media/audio/play/static.mp3']
                    }), ig['global']['staticSound']['play']()) : 'undefined' !== typeof createjs && 'undefined' !== typeof createjs['Sound'] && 'function' === typeof createjs['Sound']['play'] && createjs['Sound']['play']('opening');
                } catch (_0x3ae0cb) {
                    console['log'](_0x3ae0cb);
                }
                this['setAttribute']('style', 'visibility:\x20hidden;');
                'function' === typeof _0x4b08ea && _0x4b08ea();
                ig['system']['setGame'](MyGame);
            });
        },
        'setupCustomAnimation': function() {
            this['animHeight'] = this['fireSheet']['height'];
            this['animWidth'] = this['fireSheet']['width'];
            this['customAnim'] = new ig['Animation'](this['fireSheet'], 0.025, [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7]);
        },
        'animate': function() {
            ig['Timer']['step']();
            this['customAnim']['update']();
        },
        'draw': function() {
            ig['system']['context']['font'] = '1px\x20thewildbreathofzelda';
            ig['system']['context']['fillText']('thewildbreathofzelda', -0x64, -0x64);
            this['_drawStatus'] += (this['status'] - this['_drawStatus']) / 0x5;
            if (!(0.2 > this['_drawStatus'])) {
                var _0x13fcdf = ig['system']['context'],
                    _0x126356 = ig['system']['scale'],
                    _0x255425 = ig['system']['realWidth'],
                    _0x11f4e6 = ig['system']['realHeight'],
                    _0x462d97 = 0x0,
                    _0x5e3952 = 0x0;
                _0x13fcdf['save']();
                ig['system']['context']['fillStyle'] = '#000';
                ig['system']['context']['fillRect'](0x0, 0x0, ig['system']['width'], ig['system']['height']);
                ig['ua']['mobile'] ? this['splashMobile']['draw'](0x0, 0x0) : this['splashDesktop']['draw'](0x0, 0x0);
                _0x462d97 = _0x255425 / 0x2 - 0.5 * this['progressBar1']['width'];
                this['progressBar1']['draw'](_0x462d97 * _0x126356, (_0x11f4e6 / 0x2 + 0x32) * _0x126356);
                _0x462d97 = _0x255425 / 0x2 - 0.5 * this['progressBar1']['width'] + 0x25;
                _0x5e3952 = _0x11f4e6 / 0x2 + 0x44;
                for (_0x255425 = 0x0; _0x255425 < 0x11d * this['_drawStatus']; _0x255425++) this['progressBar2']['draw']((_0x462d97 + _0x255425) * _0x126356, _0x5e3952 * _0x126356, 0x0, 0x0);
                this['animate']();
                this['customAnim']['draw'](_0x462d97 - this['animWidth'] + 0x19 + 0x11d * this['_drawStatus'], _0x5e3952 - 0.52 * this['animHeight']);
                _0x462d97 += 0.4 * this['progressBar1']['width'];
                _0x5e3952 += 1.7 * this['progressBar1']['height'];
                _0x13fcdf['textAlign'] = 'center';
                _0x13fcdf['fillStyle'] = _0x13fcdf['strokeStyle'] = '#ffd685';
                _0x13fcdf['font'] = '50px\x20thewildbreathofzelda';
                _0x13fcdf['fillText'](_STRINGS['Splash']['Loading'], _0x462d97 * _0x126356, _0x5e3952 * _0x126356);
                _0x13fcdf['restore']();
            }
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.tween')['requires']('impact.entity')['defines'](function() {
    Array['prototype']['indexOf'] || (Array['prototype']['indexOf'] = function(_0x89ba3) {
        for (var _0x53ffda = 0x0; _0x53ffda < this['length']; ++_0x53ffda)
            if (this[_0x53ffda] === _0x89ba3) return _0x53ffda;
        return -0x1;
    });
    ig['Entity']['prototype']['tweens'] = [];
    ig['Entity']['prototype']['_preTweenUpdate'] = ig['Entity']['prototype']['update'];
    ig['Entity']['prototype']['update'] = function() {
        this['_preTweenUpdate']();
        if (0x0 < this['tweens']['length']) {
            for (var _0x1ee8ff = [], _0x3d9fa1 = 0x0; _0x3d9fa1 < this['tweens']['length']; _0x3d9fa1++) this['tweens'][_0x3d9fa1]['update'](), this['tweens'][_0x3d9fa1]['complete'] || _0x1ee8ff['push'](this['tweens'][_0x3d9fa1]);
            this['tweens'] = _0x1ee8ff;
        }
    };
    ig['Entity']['prototype']['tween'] = function(_0x387269, _0x4d53ad, _0x4db2dc) {
        _0x387269 = new ig['Tween'](this, _0x387269, _0x4d53ad, _0x4db2dc);
        this['tweens']['push'](_0x387269);
        return _0x387269;
    };
    ig['Entity']['prototype']['pauseTweens'] = function() {
        for (var _0x398922 = 0x0; _0x398922 < this['tweens']['length']; _0x398922++) this['tweens'][_0x398922]['pause']();
    };
    ig['Entity']['prototype']['resumeTweens'] = function() {
        for (var _0x28c235 = 0x0; _0x28c235 < this['tweens']['length']; _0x28c235++) this['tweens'][_0x28c235]['resume']();
    };
    ig['Entity']['prototype']['stopTweens'] = function(_0xd4ce82) {
        for (var _0x54c704 = 0x0; _0x54c704 < this['tweens']['length']; _0x54c704++) this['tweens'][_0x54c704]['stop'](_0xd4ce82);
    };
    ig['Tween'] = function(_0x57e9ce, _0xc33ccd, _0x2f1ea9, _0x4c1693) {
        var _0x4c9aa6 = {},
            _0x250b83 = {},
            _0x3949e9 = {},
            _0x52cb01 = 0x0,
            _0x3d912b = !0x1,
            _0xe1e6a0 = !0x1,
            _0x57b10d = !0x1;
        this['duration'] = _0x2f1ea9;
        this['paused'] = this['complete'] = !0x1;
        this['easing'] = ig['Tween']['Easing']['Linear']['EaseNone'];
        this['onComplete'] = !0x1;
        this['loop'] = this['delay'] = 0x0;
        this['loopCount'] = -0x1;
        ig['merge'](this, _0x4c1693);
        this['loopNum'] = this['loopCount'];
        this['chain'] = function(_0x34a135) {
            _0x57b10d = _0x34a135;
        };
        this['initEnd'] = function(_0x4dba74, _0x132c21, _0x3c07d8) {
            if ('object' !== typeof _0x132c21[_0x4dba74]) _0x3c07d8[_0x4dba74] = _0x132c21[_0x4dba74];
            else
                for (subprop in _0x132c21[_0x4dba74]) _0x3c07d8[_0x4dba74] || (_0x3c07d8[_0x4dba74] = {}), this['initEnd'](subprop, _0x132c21[_0x4dba74], _0x3c07d8[_0x4dba74]);
        };
        this['initStart'] = function(_0x489c30, _0x435317, _0x246f80, _0x22ea33) {
            if ('object' !== typeof _0x246f80[_0x489c30]) 'undefined' !== typeof _0x435317[_0x489c30] && (_0x22ea33[_0x489c30] = _0x246f80[_0x489c30]);
            else
                for (subprop in _0x246f80[_0x489c30]) _0x22ea33[_0x489c30] || (_0x22ea33[_0x489c30] = {}), 'undefined' !== typeof _0x435317[_0x489c30] && this['initStart'](subprop, _0x435317[_0x489c30], _0x246f80[_0x489c30], _0x22ea33[_0x489c30]);
        };
        this['start'] = function() {
            this['paused'] = this['complete'] = !0x1;
            this['loopNum'] = this['loopCount'];
            _0x52cb01 = 0x0; - 0x1 == _0x57e9ce['tweens']['indexOf'](this) && _0x57e9ce['tweens']['push'](this);
            _0xe1e6a0 = !0x0;
            _0x3d912b = new ig['Timer']();
            for (var _0x2302be in _0xc33ccd) this['initEnd'](_0x2302be, _0xc33ccd, _0x250b83);
            for (_0x2302be in _0x250b83) this['initStart'](_0x2302be, _0x250b83, _0x57e9ce, _0x4c9aa6), this['initDelta'](_0x2302be, _0x3949e9, _0x57e9ce, _0x250b83);
        };
        this['initDelta'] = function(_0x564fe1, _0x49f3aa, _0x40a25f, _0x487ad8) {
            if ('object' !== typeof _0x487ad8[_0x564fe1]) _0x49f3aa[_0x564fe1] = _0x487ad8[_0x564fe1] - _0x40a25f[_0x564fe1];
            else
                for (subprop in _0x487ad8[_0x564fe1]) _0x49f3aa[_0x564fe1] || (_0x49f3aa[_0x564fe1] = {}), this['initDelta'](subprop, _0x49f3aa[_0x564fe1], _0x40a25f[_0x564fe1], _0x487ad8[_0x564fe1]);
        };
        this['propUpdate'] = function(_0x2da1b0, _0x81be67, _0x163ce1, _0x4aeb96, _0x5bcbed) {
            if ('object' !== typeof _0x163ce1[_0x2da1b0]) _0x81be67[_0x2da1b0] = 'undefined' != typeof _0x163ce1[_0x2da1b0] ? _0x163ce1[_0x2da1b0] + _0x4aeb96[_0x2da1b0] * _0x5bcbed : _0x81be67[_0x2da1b0];
            else
                for (subprop in _0x163ce1[_0x2da1b0]) this['propUpdate'](subprop, _0x81be67[_0x2da1b0], _0x163ce1[_0x2da1b0], _0x4aeb96[_0x2da1b0], _0x5bcbed);
        };
        this['propSet'] = function(_0x514290, _0x2d0459, _0x398614) {
            if ('object' !== typeof _0x2d0459[_0x514290]) _0x398614[_0x514290] = _0x2d0459[_0x514290];
            else
                for (subprop in _0x2d0459[_0x514290]) _0x398614[_0x514290] || (_0x398614[_0x514290] = {}), this['propSet'](subprop, _0x2d0459[_0x514290], _0x398614[_0x514290]);
        };
        this['update'] = function() {
            if (!_0xe1e6a0) return !0x1;
            if (this['delay']) {
                if (_0x3d912b['delta']() < this['delay']) return;
                this['delay'] = 0x0;
                _0x3d912b['reset']();
            }
            if (this['paused'] || this['complete']) return !0x1;
            var _0x312d42 = (_0x3d912b['delta']() + _0x52cb01) / this['duration'],
                _0x312d42 = 0x1 < _0x312d42 ? 0x1 : _0x312d42,
                _0x4e3c3a = this['easing'](_0x312d42);
            for (property in _0x3949e9) this['propUpdate'](property, _0x57e9ce, _0x4c9aa6, _0x3949e9, _0x4e3c3a);
            if (0x1 <= _0x312d42) {
                if (0x0 == this['loopNum'] || !this['loop']) {
                    this['complete'] = !0x0;
                    if (this['onComplete']) this['onComplete']();
                    _0x57b10d && _0x57b10d['start']();
                    return !0x1;
                }
                if (this['loop'] == ig['Tween']['Loop']['Revert']) {
                    for (property in _0x4c9aa6) this['propSet'](property, _0x4c9aa6, _0x57e9ce);
                    _0x52cb01 = 0x0;
                    _0x3d912b['reset'](); - 0x1 != this['loopNum'] && this['loopNum']--;
                } else if (this['loop'] == ig['Tween']['Loop']['Reverse']) {
                    _0x312d42 = {};
                    _0x4e3c3a = {};
                    ig['merge'](_0x312d42, _0x250b83);
                    ig['merge'](_0x4e3c3a, _0x4c9aa6);
                    ig['merge'](_0x4c9aa6, _0x312d42);
                    ig['merge'](_0x250b83, _0x4e3c3a);
                    for (property in _0x250b83) this['initDelta'](property, _0x3949e9, _0x57e9ce, _0x250b83);
                    _0x52cb01 = 0x0;
                    _0x3d912b['reset'](); - 0x1 != this['loopNum'] && this['loopNum']--;
                }
            }
        };
        this['pause'] = function() {
            this['paused'] = !0x0;
            _0x3d912b && _0x3d912b['delta'] && (_0x52cb01 += _0x3d912b['delta']());
        };
        this['resume'] = function() {
            this['paused'] = !0x1;
            _0x3d912b && _0x3d912b['reset'] && _0x3d912b['reset']();
        };
        this['stop'] = function(_0x18a2e3) {
            _0x18a2e3 && (this['loop'] = this['complete'] = this['paused'] = !0x1, _0x52cb01 += _0x2f1ea9, this['update']());
            this['complete'] = !0x0;
        };
    };
    ig['Tween']['Loop'] = {
        'Revert': 0x1,
        'Reverse': 0x2
    };
    ig['Tween']['Easing'] = {
        'Linear': {},
        'Quadratic': {},
        'Cubic': {},
        'Quartic': {},
        'Quintic': {},
        'Sinusoidal': {},
        'Exponential': {},
        'Circular': {},
        'Elastic': {},
        'Back': {},
        'Bounce': {}
    };
    ig['Tween']['Easing']['Linear']['EaseNone'] = function(_0x4ce09b) {
        return _0x4ce09b;
    };
    ig['Tween']['Easing']['Quadratic']['EaseIn'] = function(_0x466fed) {
        return _0x466fed * _0x466fed;
    };
    ig['Tween']['Easing']['Quadratic']['EaseOut'] = function(_0x2befd8) {
        return -_0x2befd8 * (_0x2befd8 - 0x2);
    };
    ig['Tween']['Easing']['Quadratic']['EaseInOut'] = function(_0x29b03d) {
        return 0x1 > (_0x29b03d *= 0x2) ? 0.5 * _0x29b03d * _0x29b03d : -0.5 * (--_0x29b03d * (_0x29b03d - 0x2) - 0x1);
    };
    ig['Tween']['Easing']['Cubic']['EaseIn'] = function(_0x2b1605) {
        return _0x2b1605 * _0x2b1605 * _0x2b1605;
    };
    ig['Tween']['Easing']['Cubic']['EaseOut'] = function(_0x496df0) {
        return --_0x496df0 * _0x496df0 * _0x496df0 + 0x1;
    };
    ig['Tween']['Easing']['Cubic']['EaseInOut'] = function(_0x2c866d) {
        return 0x1 > (_0x2c866d *= 0x2) ? 0.5 * _0x2c866d * _0x2c866d * _0x2c866d : 0.5 * ((_0x2c866d -= 0x2) * _0x2c866d * _0x2c866d + 0x2);
    };
    ig['Tween']['Easing']['Quartic']['EaseIn'] = function(_0x27d102) {
        return _0x27d102 * _0x27d102 * _0x27d102 * _0x27d102;
    };
    ig['Tween']['Easing']['Quartic']['EaseOut'] = function(_0x38410b) {
        return -(--_0x38410b * _0x38410b * _0x38410b * _0x38410b - 0x1);
    };
    ig['Tween']['Easing']['Quartic']['EaseInOut'] = function(_0x301656) {
        return 0x1 > (_0x301656 *= 0x2) ? 0.5 * _0x301656 * _0x301656 * _0x301656 * _0x301656 : -0.5 * ((_0x301656 -= 0x2) * _0x301656 * _0x301656 * _0x301656 - 0x2);
    };
    ig['Tween']['Easing']['Quintic']['EaseIn'] = function(_0x41c29f) {
        return _0x41c29f * _0x41c29f * _0x41c29f * _0x41c29f * _0x41c29f;
    };
    ig['Tween']['Easing']['Quintic']['EaseOut'] = function(_0x702a76) {
        return (_0x702a76 -= 0x1) * _0x702a76 * _0x702a76 * _0x702a76 * _0x702a76 + 0x1;
    };
    ig['Tween']['Easing']['Quintic']['EaseInOut'] = function(_0x15ae5e) {
        return 0x1 > (_0x15ae5e *= 0x2) ? 0.5 * _0x15ae5e * _0x15ae5e * _0x15ae5e * _0x15ae5e * _0x15ae5e : 0.5 * ((_0x15ae5e -= 0x2) * _0x15ae5e * _0x15ae5e * _0x15ae5e * _0x15ae5e + 0x2);
    };
    ig['Tween']['Easing']['Sinusoidal']['EaseIn'] = function(_0xe69dac) {
        return -Math['cos'](_0xe69dac * Math['PI'] / 0x2) + 0x1;
    };
    ig['Tween']['Easing']['Sinusoidal']['EaseOut'] = function(_0x1aa4f4) {
        return Math['sin'](_0x1aa4f4 * Math['PI'] / 0x2);
    };
    ig['Tween']['Easing']['Sinusoidal']['EaseInOut'] = function(_0x4da46b) {
        return -0.5 * (Math['cos'](Math['PI'] * _0x4da46b) - 0x1);
    };
    ig['Tween']['Easing']['Exponential']['EaseIn'] = function(_0x2332bf) {
        return 0x0 == _0x2332bf ? 0x0 : Math['pow'](0x2, 0xa * (_0x2332bf - 0x1));
    };
    ig['Tween']['Easing']['Exponential']['EaseOut'] = function(_0x5d2e05) {
        return 0x1 == _0x5d2e05 ? 0x1 : -Math['pow'](0x2, -0xa * _0x5d2e05) + 0x1;
    };
    ig['Tween']['Easing']['Exponential']['EaseInOut'] = function(_0x4ba500) {
        return 0x0 == _0x4ba500 ? 0x0 : 0x1 == _0x4ba500 ? 0x1 : 0x1 > (_0x4ba500 *= 0x2) ? 0.5 * Math['pow'](0x2, 0xa * (_0x4ba500 - 0x1)) : 0.5 * (-Math['pow'](0x2, -0xa * (_0x4ba500 - 0x1)) + 0x2);
    };
    ig['Tween']['Easing']['Circular']['EaseIn'] = function(_0x5cefa5) {
        return -(Math['sqrt'](0x1 - _0x5cefa5 * _0x5cefa5) - 0x1);
    };
    ig['Tween']['Easing']['Circular']['EaseOut'] = function(_0x4f5d03) {
        return Math['sqrt'](0x1 - --_0x4f5d03 * _0x4f5d03);
    };
    ig['Tween']['Easing']['Circular']['EaseInOut'] = function(_0x3dedab) {
        return 0x1 > (_0x3dedab /= 0.5) ? -0.5 * (Math['sqrt'](0x1 - _0x3dedab * _0x3dedab) - 0x1) : 0.5 * (Math['sqrt'](0x1 - (_0x3dedab -= 0x2) * _0x3dedab) + 0x1);
    };
    ig['Tween']['Easing']['Elastic']['EaseIn'] = function(_0x3ace96) {
        var _0x22ffe7, _0x41fc77 = 0.1,
            _0x45e709 = 0.4;
        if (0x0 == _0x3ace96) return 0x0;
        if (0x1 == _0x3ace96) return 0x1;
        _0x45e709 || (_0x45e709 = 0.3);
        !_0x41fc77 || 0x1 > _0x41fc77 ? (_0x41fc77 = 0x1, _0x22ffe7 = _0x45e709 / 0x4) : _0x22ffe7 = _0x45e709 / (0x2 * Math['PI']) * Math['asin'](0x1 / _0x41fc77);
        return -(_0x41fc77 * Math['pow'](0x2, 0xa * (_0x3ace96 -= 0x1)) * Math['sin'](0x2 * (_0x3ace96 - _0x22ffe7) * Math['PI'] / _0x45e709));
    };
    ig['Tween']['Easing']['Elastic']['EaseOut'] = function(_0x543f43) {
        var _0x598fe5, _0x5295cd = 0.1,
            _0x1ed933 = 0.4;
        if (0x0 == _0x543f43) return 0x0;
        if (0x1 == _0x543f43) return 0x1;
        _0x1ed933 || (_0x1ed933 = 0.3);
        !_0x5295cd || 0x1 > _0x5295cd ? (_0x5295cd = 0x1, _0x598fe5 = _0x1ed933 / 0x4) : _0x598fe5 = _0x1ed933 / (0x2 * Math['PI']) * Math['asin'](0x1 / _0x5295cd);
        return _0x5295cd * Math['pow'](0x2, -0xa * _0x543f43) * Math['sin'](0x2 * (_0x543f43 - _0x598fe5) * Math['PI'] / _0x1ed933) + 0x1;
    };
    ig['Tween']['Easing']['Elastic']['EaseInOut'] = function(_0x369798) {
        var _0x8533ca, _0x3ce2ca = 0.1,
            _0x46a5bb = 0.4;
        if (0x0 == _0x369798) return 0x0;
        if (0x1 == _0x369798) return 0x1;
        _0x46a5bb || (_0x46a5bb = 0.3);
        !_0x3ce2ca || 0x1 > _0x3ce2ca ? (_0x3ce2ca = 0x1, _0x8533ca = _0x46a5bb / 0x4) : _0x8533ca = _0x46a5bb / (0x2 * Math['PI']) * Math['asin'](0x1 / _0x3ce2ca);
        return 0x1 > (_0x369798 *= 0x2) ? -0.5 * _0x3ce2ca * Math['pow'](0x2, 0xa * (_0x369798 -= 0x1)) * Math['sin'](0x2 * (_0x369798 - _0x8533ca) * Math['PI'] / _0x46a5bb) : 0.5 * _0x3ce2ca * Math['pow'](0x2, -0xa * (_0x369798 -= 0x1)) * Math['sin'](0x2 * (_0x369798 - _0x8533ca) * Math['PI'] / _0x46a5bb) + 0x1;
    };
    ig['Tween']['Easing']['Back']['EaseIn'] = function(_0x31f988) {
        return _0x31f988 * _0x31f988 * (2.70158 * _0x31f988 - 1.70158);
    };
    ig['Tween']['Easing']['Back']['EaseOut'] = function(_0x1bce5f) {
        return (_0x1bce5f -= 0x1) * _0x1bce5f * (2.70158 * _0x1bce5f + 1.70158) + 0x1;
    };
    ig['Tween']['Easing']['Back']['EaseInOut'] = function(_0x5c121e) {
        return 0x1 > (_0x5c121e *= 0x2) ? 0.5 * _0x5c121e * _0x5c121e * (3.5949095 * _0x5c121e - 2.5949095) : 0.5 * ((_0x5c121e -= 0x2) * _0x5c121e * (3.5949095 * _0x5c121e + 2.5949095) + 0x2);
    };
    ig['Tween']['Easing']['Bounce']['EaseIn'] = function(_0x2d610e) {
        return 0x1 - ig['Tween']['Easing']['Bounce']['EaseOut'](0x1 - _0x2d610e);
    };
    ig['Tween']['Easing']['Bounce']['EaseOut'] = function(_0x1a7dde) {
        return (_0x1a7dde /= 0x1) < 0x1 / 2.75 ? 7.5625 * _0x1a7dde * _0x1a7dde : _0x1a7dde < 0x2 / 2.75 ? 7.5625 * (_0x1a7dde -= 1.5 / 2.75) * _0x1a7dde + 0.75 : _0x1a7dde < 2.5 / 2.75 ? 7.5625 * (_0x1a7dde -= 2.25 / 2.75) * _0x1a7dde + 0.9375 : 7.5625 * (_0x1a7dde -= 2.625 / 2.75) * _0x1a7dde + 0.984375;
    };
    ig['Tween']['Easing']['Bounce']['EaseInOut'] = function(_0x554be8) {
        return 0.5 > _0x554be8 ? 0.5 * ig['Tween']['Easing']['Bounce']['EaseIn'](0x2 * _0x554be8) : 0.5 * ig['Tween']['Easing']['Bounce']['EaseOut'](0x2 * _0x554be8 - 0x1) + 0.5;
    };
    ig['Tween']['Interpolation'] = {
        'Linear': function(_0x38d375, _0x54d88f) {
            var _0x4eba7c = _0x38d375['length'] - 0x1,
                _0x10ccad = _0x4eba7c * _0x54d88f,
                _0x464481 = Math['floor'](_0x10ccad),
                _0x5eacdb = TWEEN['Interpolation']['Utils']['Linear'];
            return 0x0 > _0x54d88f ? _0x5eacdb(_0x38d375[0x0], _0x38d375[0x1], _0x10ccad) : 0x1 < _0x54d88f ? _0x5eacdb(_0x38d375[_0x4eba7c], _0x38d375[_0x4eba7c - 0x1], _0x4eba7c - _0x10ccad) : _0x5eacdb(_0x38d375[_0x464481], _0x38d375[_0x464481 + 0x1 > _0x4eba7c ? _0x4eba7c : _0x464481 + 0x1], _0x10ccad - _0x464481);
        }
    };
});
ig['baked'] = !0x0;
ig['module']('plugins.patches.entity-patch')['requires']('impact.entity')['defines'](function() {
    ig['Entity']['inject']({
        'handleMovementTrace': function(_0x4606d9) {
            this['standing'] = !0x1;
            _0x4606d9['collision']['y'] && (0x0 < this['bounciness'] && Math['abs'](this['vel']['y']) > this['minBounceVelocity'] ? this['vel']['y'] *= -this['bounciness'] : (0x0 < this['vel']['y'] && (this['standing'] = !0x0), this['vel']['y'] = 0x0));
            _0x4606d9['collision']['x'] && (this['vel']['x'] = 0x0 < this['bounciness'] && Math['abs'](this['vel']['x']) > this['minBounceVelocity'] ? this['vel']['x'] * -this['bounciness'] : 0x0);
            if (_0x4606d9['collision']['slope']) {
                var _0x2e8f6b = _0x4606d9['collision']['slope'];
                if (0x0 < this['bounciness']) {
                    var _0x1dcbb1 = this['vel']['x'] * _0x2e8f6b['nx'] + this['vel']['y'] * _0x2e8f6b['ny'];
                    this['vel']['x'] = (this['vel']['x'] - 0x2 * _0x2e8f6b['nx'] * _0x1dcbb1) * this['bounciness'];
                    this['vel']['y'] = (this['vel']['y'] - 0x2 * _0x2e8f6b['ny'] * _0x1dcbb1) * this['bounciness'];
                } else _0x1dcbb1 = (this['vel']['x'] * _0x2e8f6b['x'] + this['vel']['y'] * _0x2e8f6b['y']) / (_0x2e8f6b['x'] * _0x2e8f6b['x'] + _0x2e8f6b['y'] * _0x2e8f6b['y']), this['vel']['x'] = _0x2e8f6b['x'] * _0x1dcbb1, this['vel']['y'] = _0x2e8f6b['y'] * _0x1dcbb1, _0x2e8f6b = Math['atan2'](_0x2e8f6b['x'], _0x2e8f6b['y']), _0x2e8f6b > this['slopeStanding']['min'] && _0x2e8f6b < this['slopeStanding']['max'] && (this['standing'] = !0x0);
            }
            this['pos']['x'] = _0x4606d9['pos']['x'];
            this['pos']['y'] = _0x4606d9['pos']['y'];
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.tweens-handler')['requires']('impact.entity', 'plugins.tween', 'plugins.patches.entity-patch')['defines'](function() {
    Array['prototype']['indexOf'] || (Array['prototype']['indexOf'] = function(_0x1b92f7) {
        for (var _0x50bfdd = 0x0; _0x50bfdd < this['length']; ++_0x50bfdd)
            if (this[_0x50bfdd] === _0x1b92f7) return _0x50bfdd;
        return -0x1;
    });
    ig['TweensHandler'] = ig['Class']['extend']({
        '_tweens': [],
        '_systemPausedTweens': [],
        'init': function() {},
        'getAll': function() {
            return this['_tweens'];
        },
        'removeAll': function() {
            this['_tweens'] = [];
        },
        'add': function(_0x4893d5) {
            this['_tweens']['push'](_0x4893d5);
        },
        'remove': function(_0x298f56) {
            _0x298f56 = this['_tweens']['indexOf'](_0x298f56); - 0x1 !== _0x298f56 && this['_tweens']['splice'](_0x298f56, 0x1);
        },
        'onSystemPause': function() {
            if (0x0 === this['_tweens']['length']) return !0x1;
            for (var _0x29e513 = 0x0, _0x191e8c = null; _0x29e513 < this['_tweens']['length'];) _0x191e8c = this['_tweens'][_0x29e513], _0x191e8c['_isPlaying'] && (this['_systemPausedTweens']['push'](_0x191e8c), _0x191e8c['pause']()), _0x29e513++;
            return !0x0;
        },
        'onSystemResume': function() {
            if (0x0 === this['_systemPausedTweens']['length']) return !0x1;
            for (var _0x1a16f9 = 0x0; _0x1a16f9 < this['_systemPausedTweens']['length'];) this['_systemPausedTweens'][_0x1a16f9]['resume'](), _0x1a16f9++;
            this['_systemPausedTweens'] = [];
            return !0x0;
        },
        'update': function(_0x40a885, _0x3b71e0) {
            if (0x0 === this['_tweens']['length']) return !0x1;
            var _0x5565ce = 0x0;
            for (_0x40a885 = void 0x0 !== _0x40a885 ? _0x40a885 : ig['game']['tweens']['now'](); _0x5565ce < this['_tweens']['length'];) this['_tweens'][_0x5565ce]['update'](_0x40a885) || _0x3b71e0 ? _0x5565ce++ : this['_tweens']['splice'](_0x5565ce, 0x1);
            return !0x0;
        },
        'now': function() {
            return Date['now']();
        }
    });
    ig['TweenDef'] = ig['Class']['extend']({
        '_ent': null,
        '_valuesStart': {},
        '_valuesEnd': {},
        '_valuesStartRepeat': {},
        '_duration': 0x3e8,
        '_repeat': 0x0,
        '_yoyo': !0x1,
        '_isPlaying': !0x1,
        '_reversed': !0x1,
        '_delayTime': 0x0,
        '_startTime': null,
        '_pauseTime': null,
        '_easingFunction': ig['Tween']['Easing']['Linear']['EaseNone'],
        '_interpolationFunction': ig['Tween']['Interpolation']['Linear'],
        '_chainedTweens': [],
        '_onStartCallback': null,
        '_onStartCallbackFired': !0x1,
        '_onUpdateCallback': null,
        '_onCompleteCallback': null,
        '_onStopCallback': null,
        '_onPauseCallback': null,
        '_onResumeCallback': null,
        '_currentElapsed': 0x0,
        'init': function(_0x1e85de) {
            this['_object'] = _0x1e85de;
        },
        'to': function(_0x456838, _0x247e74) {
            this['_valuesEnd'] = _0x456838;
            void 0x0 !== _0x247e74 && (this['_duration'] = _0x247e74);
            return this;
        },
        'start': function(_0xb5371a) {
            if (this['_isPlaying']) return this;
            ig['game']['tweens']['add'](this);
            this['_isPlaying'] = !0x0;
            this['_onStartCallbackFired'] = !0x1;
            this['_startTime'] = void 0x0 !== _0xb5371a ? _0xb5371a : ig['game']['tweens']['now']();
            this['_startTime'] += this['_delayTime'];
            for (var _0x493247 in this['_valuesEnd']) {
                if (this['_valuesEnd'][_0x493247] instanceof Array) {
                    if (0x0 === this['_valuesEnd'][_0x493247]['length']) continue;
                    this['_valuesEnd'][_0x493247] = [this['_object'][_0x493247]]['concat'](this['_valuesEnd'][_0x493247]);
                }
                void 0x0 !== this['_object'][_0x493247] && (this['_valuesStart'][_0x493247] = this['_object'][_0x493247], !0x1 === this['_valuesStart'][_0x493247] instanceof Array && (this['_valuesStart'][_0x493247] *= 0x1), this['_valuesStartRepeat'][_0x493247] = this['_valuesStart'][_0x493247] || 0x0);
            }
            return this;
        },
        'stop': function() {
            if (!this['_isPlaying']) return this;
            ig['game']['tweens']['remove'](this);
            this['_isPlaying'] = !0x1;
            null !== this['_onStopCallback'] && this['_onStopCallback']['call'](this['_object'], this['_object']);
            this['stopChainedTweens']();
            return this;
        },
        'pause': function() {
            if (!this['_isPlaying']) return this;
            ig['game']['tweens']['remove'](this);
            this['_isPlaying'] = !0x1;
            this['_pauseTime'] = ig['game']['tweens']['now']();
            null !== this['_onPauseCallback'] && this['_onPauseCallback']['call'](this['_object'], this['_object']);
            return this;
        },
        'resume': function() {
            if (this['_isPlaying'] || !this['_pauseTime']) return this;
            var _0x21332f = ig['game']['tweens']['now']() - this['_pauseTime'];
            this['_startTime'] += _0x21332f;
            ig['game']['tweens']['add'](this);
            this['_isPlaying'] = !0x0;
            null !== this['_onResumeCallback'] && this['_onResumeCallback']['call'](this['_object'], this['_object']);
            this['_pauseTime'] = null;
            return this;
        },
        'end': function() {
            this['update'](this['_startTime'] + this['_duration']);
            return this;
        },
        'stopChainedTweens': function() {
            for (var _0x714f03 = 0x0, _0x1cc1a4 = this['_chainedTweens']['length']; _0x714f03 < _0x1cc1a4; _0x714f03++) this['_chainedTweens'][_0x714f03]['stop']();
        },
        'delay': function(_0x5da6fa) {
            this['_delayTime'] = _0x5da6fa;
            return this;
        },
        'repeat': function(_0x1326e7) {
            this['_repeat'] = _0x1326e7;
            return this;
        },
        'repeatDelay': function(_0x263d51) {
            this['_repeatDelayTime'] = _0x263d51;
            return this;
        },
        'yoyo': function(_0x19dce1) {
            this['_yoyo'] = _0x19dce1;
            return this;
        },
        'easing': function(_0x4ac405) {
            this['_easingFunction'] = _0x4ac405;
            return this;
        },
        'interpolation': function(_0x46f424) {
            this['_interpolationFunction'] = _0x46f424;
            return this;
        },
        'chain': function() {
            this['_chainedTweens'] = arguments;
            return this;
        },
        'onStart': function(_0x2fb173) {
            this['_onStartCallback'] = _0x2fb173;
            return this;
        },
        'onUpdate': function(_0x234bd1) {
            this['_onUpdateCallback'] = _0x234bd1;
            return this;
        },
        'onComplete': function(_0x536438) {
            this['_onCompleteCallback'] = _0x536438;
            return this;
        },
        'onStop': function(_0x16675e) {
            this['_onStopCallback'] = _0x16675e;
            return this;
        },
        'onPause': function(_0x422b2c) {
            this['_onPauseCallback'] = _0x422b2c;
            return this;
        },
        'onResume': function(_0x7cc1a7) {
            this['_onResumeCallback'] = _0x7cc1a7;
            return this;
        },
        'update': function(_0x4cc2b2) {
            var _0xcfb80c, _0x36baf7, _0x24b3c0;
            if (_0x4cc2b2 < this['_startTime']) return !0x0;
            !0x1 === this['_onStartCallbackFired'] && (null !== this['_onStartCallback'] && this['_onStartCallback']['call'](this['_object'], this['_object']), this['_onStartCallbackFired'] = !0x0);
            _0x36baf7 = (_0x4cc2b2 - this['_startTime']) / this['_duration'];
            this['_currentElapsed'] = _0x36baf7 = 0x1 < _0x36baf7 ? 0x1 : _0x36baf7;
            _0x24b3c0 = this['_easingFunction'](_0x36baf7);
            for (_0xcfb80c in this['_valuesEnd'])
                if (void 0x0 !== this['_valuesStart'][_0xcfb80c]) {
                    var _0x3a7b88 = this['_valuesStart'][_0xcfb80c] || 0x0,
                        _0x30caa1 = this['_valuesEnd'][_0xcfb80c];
                    _0x30caa1 instanceof Array ? this['_object'][_0xcfb80c] = this['_interpolationFunction'](_0x30caa1, _0x24b3c0) : ('string' === typeof _0x30caa1 && (_0x30caa1 = '+' === _0x30caa1['charAt'](0x0) || '-' === _0x30caa1['charAt'](0x0) ? _0x3a7b88 + parseFloat(_0x30caa1) : parseFloat(_0x30caa1)), 'number' === typeof _0x30caa1 && (this['_object'][_0xcfb80c] = _0x3a7b88 + (_0x30caa1 - _0x3a7b88) * _0x24b3c0));
                } null !== this['_onUpdateCallback'] && this['_onUpdateCallback']['call'](this['_object'], this['_object'], _0x24b3c0);
            if (0x1 === _0x36baf7)
                if (0x0 < this['_repeat']) {
                    isFinite(this['_repeat']) && this['_repeat']--;
                    for (_0xcfb80c in this['_valuesStartRepeat']) 'string' === typeof this['_valuesEnd'][_0xcfb80c] && (this['_valuesStartRepeat'][_0xcfb80c] = _valuesStartRepeat[_0xcfb80c] + parseFloat(_valuesEnd[_0xcfb80c])), this['_yoyo'] && (_0x36baf7 = this['_valuesStartRepeat'][_0xcfb80c], this['_valuesStartRepeat'][_0xcfb80c] = this['_valuesEnd'][_0xcfb80c], this['_valuesEnd'][_0xcfb80c] = _0x36baf7), this['_valuesStart'][_0xcfb80c] = this['_valuesStartRepeat'][_0xcfb80c];
                    this['_yoyo'] && (this['_reversed'] = !this['_reversed']);
                    this['_startTime'] = void 0x0 !== this['_repeatDelayTime'] ? _0x4cc2b2 + this['_repeatDelayTime'] : _0x4cc2b2 + this['_delayTime'];
                } else {
                    null !== this['_onCompleteCallback'] && this['_onCompleteCallback']['call'](this['_object'], this['_object']);
                    _0x4cc2b2 = 0x0;
                    for (_0xcfb80c = this['_chainedTweens']['length']; _0x4cc2b2 < _0xcfb80c; _0x4cc2b2++) this['_chainedTweens'][_0x4cc2b2]['start'](this['_startTime'] + this['_duration']);
                    return !0x1;
                } return !0x0;
        }
    });
    var _0x354f20 = [0x1];
    ig['Tween']['Interpolation'] = {
        'Linear': function(_0x5a9088, _0x5790e5) {
            var _0x1fcd76 = _0x5a9088['length'] - 0x1,
                _0xced789 = _0x1fcd76 * _0x5790e5,
                _0x18e89f = Math['floor'](_0xced789),
                _0xc3fe39 = ig['Tween']['Interpolation']['Utils']['Linear'];
            return 0x0 > _0x5790e5 ? _0xc3fe39(_0x5a9088[0x0], _0x5a9088[0x1], _0xced789) : 0x1 < _0x5790e5 ? _0xc3fe39(_0x5a9088[_0x1fcd76], _0x5a9088[_0x1fcd76 - 0x1], _0x1fcd76 - _0xced789) : _0xc3fe39(_0x5a9088[_0x18e89f], _0x5a9088[_0x18e89f + 0x1 > _0x1fcd76 ? _0x1fcd76 : _0x18e89f + 0x1], _0xced789 - _0x18e89f);
        },
        'Bezier': function(_0x529d38, _0x5139cc) {
            for (var _0x42d1ab = 0x0, _0x3435c2 = _0x529d38['length'] - 0x1, _0x54a806 = Math['pow'], _0x1c4bb4 = ig['Tween']['Interpolation']['Utils']['Bernstein'], _0x4b3bfd = 0x0; _0x4b3bfd <= _0x3435c2; _0x4b3bfd++) _0x42d1ab += _0x54a806(0x1 - _0x5139cc, _0x3435c2 - _0x4b3bfd) * _0x54a806(_0x5139cc, _0x4b3bfd) * _0x529d38[_0x4b3bfd] * _0x1c4bb4(_0x3435c2, _0x4b3bfd);
            return _0x42d1ab;
        },
        'CatmullRom': function(_0x5ef40b, _0x151d75) {
            var _0x373efe = _0x5ef40b['length'] - 0x1,
                _0xceb126 = _0x373efe * _0x151d75,
                _0x40dbce = Math['floor'](_0xceb126),
                _0x2b41ec = ig['Tween']['Interpolation']['Utils']['CatmullRom'];
            return _0x5ef40b[0x0] === _0x5ef40b[_0x373efe] ? (0x0 > _0x151d75 && (_0x40dbce = Math['floor'](_0xceb126 = _0x373efe * (0x1 + _0x151d75))), _0x2b41ec(_0x5ef40b[(_0x40dbce - 0x1 + _0x373efe) % _0x373efe], _0x5ef40b[_0x40dbce], _0x5ef40b[(_0x40dbce + 0x1) % _0x373efe], _0x5ef40b[(_0x40dbce + 0x2) % _0x373efe], _0xceb126 - _0x40dbce)) : 0x0 > _0x151d75 ? _0x5ef40b[0x0] - (_0x2b41ec(_0x5ef40b[0x0], _0x5ef40b[0x0], _0x5ef40b[0x1], _0x5ef40b[0x1], -_0xceb126) - _0x5ef40b[0x0]) : 0x1 < _0x151d75 ? _0x5ef40b[_0x373efe] - (_0x2b41ec(_0x5ef40b[_0x373efe], _0x5ef40b[_0x373efe], _0x5ef40b[_0x373efe - 0x1], _0x5ef40b[_0x373efe - 0x1], _0xceb126 - _0x373efe) - _0x5ef40b[_0x373efe]) : _0x2b41ec(_0x5ef40b[_0x40dbce ? _0x40dbce - 0x1 : 0x0], _0x5ef40b[_0x40dbce], _0x5ef40b[_0x373efe < _0x40dbce + 0x1 ? _0x373efe : _0x40dbce + 0x1], _0x5ef40b[_0x373efe < _0x40dbce + 0x2 ? _0x373efe : _0x40dbce + 0x2], _0xceb126 - _0x40dbce);
        },
        'Utils': {
            'Linear': function(_0x3215a1, _0x387d17, _0x32aefc) {
                return (_0x387d17 - _0x3215a1) * _0x32aefc + _0x3215a1;
            },
            'Bernstein': function(_0x5c9b63, _0x3cffca) {
                var _0x4c61ae = ig['Tween']['Interpolation']['Utils']['Factorial'];
                return _0x4c61ae(_0x5c9b63) / _0x4c61ae(_0x3cffca) / _0x4c61ae(_0x5c9b63 - _0x3cffca);
            },
            'Factorial': function(_0x428119) {
                var _0x52a1cd = 0x1;
                if (_0x354f20[_0x428119]) return _0x354f20[_0x428119];
                for (var _0x15eb18 = _0x428119; 0x1 < _0x15eb18; _0x15eb18--) _0x52a1cd *= _0x15eb18;
                return _0x354f20[_0x428119] = _0x52a1cd;
            },
            'CatmullRom': function(_0x6101dd, _0x496132, _0x1d0bae, _0x1e2581, _0x3ea4d9) {
                _0x6101dd = 0.5 * (_0x1d0bae - _0x6101dd);
                _0x1e2581 = 0.5 * (_0x1e2581 - _0x496132);
                var _0x158aa3 = _0x3ea4d9 * _0x3ea4d9;
                return (0x2 * _0x496132 - 0x2 * _0x1d0bae + _0x6101dd + _0x1e2581) * _0x3ea4d9 * _0x158aa3 + (-0x3 * _0x496132 + 0x3 * _0x1d0bae - 0x2 * _0x6101dd - _0x1e2581) * _0x158aa3 + _0x6101dd * _0x3ea4d9 + _0x496132;
            }
        }
    };
});
ig['baked'] = !0x0;
ig['module']('plugins.url-parameters')['defines'](function() {
    ig['UrlParameters'] = ig['Class']['extend']({
        'init': function() {
            switch (getQueryVariable('iphone')) {
                case 'true':
                    ig['ua']['iPhone'] = !0x0, console['log']('iPhone\x20mode');
            }
            var _0xee6605 = getQueryVariable('webview');
            if (_0xee6605) switch (_0xee6605) {
                case 'true':
                    ig['ua']['is_uiwebview'] = !0x0, console['log']('webview\x20mode');
            }
            if (_0xee6605 = getQueryVariable('debug')) switch (_0xee6605) {
                case 'true':
                    ig['game']['showDebugMenu'](), console['log']('debug\x20mode');
            }
            switch (getQueryVariable('view')) {
                case 'stats':
                    ig['game']['resetPlayerStats'](), ig['game']['endGame']();
            }
            getQueryVariable('ad');
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.director')['requires']('impact.impact')['defines'](function() {
    ig['Director'] = ig['Class']['extend']({
        'init': function(_0x2933ff, _0x277f04) {
            this['game'] = _0x2933ff;
            this['levels'] = [];
            this['currentLevel'] = 0x0;
            this['append'](_0x277f04);
        },
        'loadLevel': function(_0x12898c) {
            for (var _0x3ce5ce in ig['sizeHandler']['dynamicClickableEntityDivs']) {
                var _0x15de94 = ig['domHandler']['getElementById']('#' + _0x3ce5ce);
                ig['domHandler']['hide'](_0x15de94);
            }
            this['currentLevel'] = _0x12898c;
            this['game']['loadLevel'](this['levels'][_0x12898c]);
            return !0x0;
        },
        'loadLevelWithoutEntities': function(_0xa14309) {
            this['currentLevel'] = _0xa14309;
            this['game']['loadLevelWithoutEntities'](this['levels'][_0xa14309]);
            return !0x0;
        },
        'append': function(_0x369fa6) {
            newLevels = [];
            return 'object' === typeof _0x369fa6 ? (_0x369fa6['constructor'] === []['constructor'] ? newLevels = _0x369fa6 : newLevels[0x0] = _0x369fa6, this['levels'] = this['levels']['concat'](newLevels), !0x0) : !0x1;
        },
        'nextLevel': function() {
            return this['currentLevel'] + 0x1 < this['levels']['length'] ? this['loadLevel'](this['currentLevel'] + 0x1) : !0x1;
        },
        'previousLevel': function() {
            return 0x0 <= this['currentLevel'] - 0x1 ? this['loadLevel'](this['currentLevel'] - 0x1) : !0x1;
        },
        'jumpTo': function(_0xc35080) {
            var _0x2195b0 = null;
            for (i = 0x0; i < this['levels']['length']; i++) this['levels'][i] == _0xc35080 && (_0x2195b0 = i);
            return 0x0 <= _0x2195b0 ? this['loadLevel'](_0x2195b0) : !0x1;
        },
        'firstLevel': function() {
            return this['loadLevel'](0x0);
        },
        'lastLevel': function() {
            return this['loadLevel'](this['levels']['length'] - 0x1);
        },
        'reloadLevel': function() {
            return this['loadLevel'](this['currentLevel']);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.impact-storage')['requires']('impact.game')['defines'](function() {
    ig['Storage'] = ig['Class']['extend']({
        'staticInstantiate': function() {
            return !ig['Storage']['instance'] ? null : ig['Storage']['instance'];
        },
        'init': function() {
            ig['Storage']['instance'] = this;
        },
        'isCapable': function() {
            return 'undefined' !== typeof window['localStorage'];
        },
        'isSet': function(_0x26415e) {
            return null !== this['get'](_0x26415e);
        },
        'initUnset': function(_0x4e0e3a, _0x4eb892) {
            null === this['get'](_0x4e0e3a) && this['set'](_0x4e0e3a, _0x4eb892);
        },
        'get': function(_0x50c250) {
            if (!this['isCapable']()) return null;
            try {
                return JSON['parse'](localStorage['getItem'](_0x50c250));
            } catch (_0x47f84f) {
                return window['localStorage']['getItem'](_0x50c250);
            }
        },
        'getInt': function(_0x35a10e) {
            return ~~this['get'](_0x35a10e);
        },
        'getFloat': function(_0x397a06) {
            return parseFloat(this['get'](_0x397a06));
        },
        'getBool': function(_0x2a54bc) {
            return !!this['get'](_0x2a54bc);
        },
        'key': function(_0x28f726) {
            return this['isCapable']() ? window['localStorage']['key'](_0x28f726) : null;
        },
        'set': function(_0x46dce4, _0x4f7501) {
            if (!this['isCapable']()) return null;
            try {
                window['localStorage']['setItem'](_0x46dce4, JSON['stringify'](_0x4f7501));
            } catch (_0x2b301a) {
                console['log'](_0x2b301a);
            }
        },
        'setHighest': function(_0x3b234a, _0x4b1ca0) {
            _0x4b1ca0 > this['getFloat'](_0x3b234a) && this['set'](_0x3b234a, _0x4b1ca0);
        },
        'remove': function(_0x22c25d) {
            if (!this['isCapable']()) return null;
            window['localStorage']['removeItem'](_0x22c25d);
        },
        'clear': function() {
            if (!this['isCapable']()) return null;
            window['localStorage']['clear']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('plugins.data.color-rgb')['defines'](function() {
    ColorRGB = function(_0x6e1800, _0x39852f, _0x5be65f, _0x394750) {
        this['r'] = _0x6e1800 || 0x0;
        this['g'] = _0x39852f || 0x0;
        this['b'] = _0x5be65f || 0x0;
        this['a'] = _0x394750 || 0x0;
    };
    ColorRGB['prototype'] = {
        'setRandomColor': function() {
            this['r'] = Math['round'](0xff * Math['random']());
            this['g'] = Math['round'](0xff * Math['random']());
            this['b'] = Math['round'](0xff * Math['random']());
        },
        'getStyle': function() {
            return 'rgba(' + this['r'] + ',' + this['g'] + ',' + this['b'] + ',' + this['a'] + ')';
        },
        'getHex': function() {
            for (var _0x37184c = this['r']['toString'](0x10), _0x51bd89 = this['g']['toString'](0x10), _0x79d50c = this['b']['toString'](0x10); 0x2 > _0x37184c['length'];) _0x37184c = '0' + _0x37184c;
            for (; 0x2 > _0x51bd89['length'];) _0x51bd89 = '0' + _0x51bd89;
            for (; 0x2 > _0x79d50c['length'];) _0x79d50c = '0' + _0x79d50c;
            return '#' + _0x37184c + _0x51bd89 + _0x79d50c;
        },
        'getInvertedColor': function() {
            return new ColorRGB(0xff - this['r'], 0xff - this['g'], 0xff - this['b'], 0xff - this['a']);
        },
        'clone': function() {
            return new ColorRGB(this['r'], this['g'], this['b'], this['a']);
        }
    };
});
this['START_BRANDING_SPLASH'];
ig['baked'] = !0x0;
ig['module']('plugins.branding.splash')['requires']('impact.impact', 'impact.entity')['defines'](function() {
    ig['BrandingSplash'] = ig['Class']['extend']({
        'disableBranding': !0x1,
        'init': function() {
            this['disableBranding'] ? ig['game']['director']['loadLevel'](ig['game']['director']['currentLevel']) : SWAGAPI['showBrandingAnimation']('ajaxbar')['then'](function() {
                ig['game']['director']['loadLevel'](ig['game']['director']['currentLevel']);
            } ['bind'](this));
        }
    });
    EntityBranding = ig['Entity']['extend']({
        'gravityFactor': 0x0,
        'size': {
            'x': 0x20,
            'y': 0x20
        },

        'init': function(_0x10c5c8, _0x2f43e9, _0x4f57ba) {
            this['parent'](_0x10c5c8, _0x2f43e9, _0x4f57ba);
            0x140 >= ig['system']['width'] ? (this['size']['x'] = 0x140, this['size']['y'] = 0xc8) : (this['size']['x'] = 0x1e0, this['size']['y'] = 0xf0);
            this['pos']['x'] = (ig['system']['width'] - this['size']['x']) / 0x2;
            this['pos']['y'] = -this['size']['y'] - 0xc8;
            this['endPosY'] = (ig['system']['height'] - this['size']['y']) / 0x2;
            _0x10c5c8 = this['tween']({
                'pos': {
                    'y': this['endPosY']
                }
            }, 0.5, {
                'easing': ig['Tween']['Easing']['Bounce']['EaseIn']
            });
            _0x2f43e9 = this['tween']({}, 2.5, {
                'onComplete': function() {
                    ig['game']['director']['loadLevel'](ig['game']['director']['currentLevel']);
                }
            });
            _0x10c5c8['chain'](_0x2f43e9);
            _0x10c5c8['start']();
            this['currentAnim'] = this['anims']['idle'];
        },
        'createClickableLayer': function() {
            console['log']('Build\x20clickable\x20layer');
            this['checkClickableLayer']('branding-splash', _SETTINGS['Branding']['Logo']['Link'], _SETTINGS['Branding']['Logo']['NewWindow']);
        },
        'doesClickableLayerExist': function(_0x4cc58f) {
            for (k in dynamicClickableEntityDivs)
                if (k == _0x4cc58f) return !0x0;
            return !0x1;
        },
        'checkClickableLayer': function(_0x14e383, _0x3aa4d4, _0x4aca3b) {
            'undefined' == typeof wm && (this['doesClickableLayerExist'](_0x14e383) ? (ig['game']['showOverlay']([_0x14e383]), $('#' + _0x14e383)['find']('[href]')['attr']('href', _0x3aa4d4)) : this['createClickableOutboundLayer'](_0x14e383, _0x3aa4d4, 'media/graphics/misc/invisible.png', _0x4aca3b));
        },
        'createClickableOutboundLayer': function(_0x44eaf0, _0xe453e3, _0x4c6e19, _0x4c4c98) {
            var _0x4b374b = ig['$new']('div');
            _0x4b374b['id'] = _0x44eaf0;
            document['body']['appendChild'](_0x4b374b);
            _0x4b374b = $('#' + _0x4b374b['id']);
            _0x4b374b['css']('float', 'left');
            _0x4b374b['css']('position', 'absolute');
            if (ig['ua']['mobile']) {
                var _0x5be641 = window['innerHeight'] / mobileHeight,
                    _0x33f96e = window['innerWidth'] / mobileWidth;
                _0x4b374b['css']('left', this['pos']['x'] * _0x33f96e);
                _0x4b374b['css']('top', this['pos']['y'] * _0x5be641);
                _0x4b374b['css']('width', this['size']['x'] * _0x33f96e);
                _0x4b374b['css']('height', this['size']['y'] * _0x5be641);
            } else _0x5be641 = w / 0x2 - destW / 0x2, _0x33f96e = h / 0x2 - destH / 0x2, console['log'](_0x5be641, _0x33f96e), _0x4b374b['css']('left', _0x5be641 + this['pos']['x'] * multiplier), _0x4b374b['css']('top', _0x33f96e + this['pos']['y'] * multiplier), _0x4b374b['css']('width', this['size']['x'] * multiplier), _0x4b374b['css']('height', this['size']['y'] * multiplier);
            _0x4c4c98 ? _0x4b374b['html']('<a\x20target=\x27_blank\x27\x20href=\x27' + _0xe453e3 + '\x27><img\x20style=\x27width:100%;height:100%\x27\x20src=\x27' + _0x4c6e19 + '\x27></a>') : _0x4b374b['html']('<a\x20href=\x27' + _0xe453e3 + '\x27><img\x20style=\x27width:100%;height:100%\x27\x20src=\x27' + _0x4c6e19 + '\x27></a>');
            dynamicClickableEntityDivs[_0x44eaf0] = {};
            dynamicClickableEntityDivs[_0x44eaf0]['width'] = this['size']['x'] * multiplier;
            dynamicClickableEntityDivs[_0x44eaf0]['height'] = this['size']['y'] * multiplier;
            dynamicClickableEntityDivs[_0x44eaf0]['entity_pos_x'] = this['pos']['x'];
            dynamicClickableEntityDivs[_0x44eaf0]['entity_pos_y'] = this['pos']['y'];
        },
        'draw': function() {
            ig['system']['context']['fillStyle'] = '#ffffff';
            ig['system']['context']['fillRect'](0x0, 0x0, ig['system']['width'], ig['system']['height']);
            ig['system']['context']['fillStyle'] = '#000';
            ig['system']['context']['font'] = '12px\x20Arial';
            ig['system']['context']['textAlign'] = 'left'; 
            this['parent']();
            this['splash'] && ig['system']['context']['drawImage'](this['splash']['data'], 0x0, 0x0, this['splash']['data']['width'], this['splash']['data']['height'], this['pos']['x'], this['pos']['y'], this['size']['x'], this['size']['y']);
        }
    });
});
this['END_BRANDING_SPLASH'];
ig['baked'] = !0x0;
ig['module']('game.entities.buttons.button')['requires']('impact.entity', 'plugins.data.vector')['defines'](function() {
    EntityButton = ig['Entity']['extend']({
        'collides': ig['Entity']['COLLIDES']['NEVER'],
        'type': ig['Entity']['TYPE']['A'],
        'size': new Vector2(0x30, 0x30),
        'zIndex': 0x17318,
        'disable': !0x1,
        'init': function(_0x280519, _0x24f6d3, _0x52338f) {
            this['parent'](_0x280519, _0x24f6d3, _0x52338f);
            _0x52338f['_parent'] && (this['zIndex'] = _0x52338f['_parent']['zIndex'] + 0xa);
            this['imageFile1'] && (this['size'] = {
                'x': this['imageFile1']['width'],
                'y': this['imageFile2']['height']
            }, _0x280519 = new ig['AnimationSheet'](this['imageFile1']['path'], this['size']['x'], this['size']['y']), this['currentAnim'] = this['_unpushedImage'] = new ig['Animation'](_0x280519, 0x0, [0x0], !0x0), this['imageFile2'] && (_0x280519 = new ig['AnimationSheet'](this['imageFile2']['path'], this['size']['x'], this['size']['y']), this['_pushedImage'] = new ig['Animation'](_0x280519, 0x0, [0x0], !0x0)));
        },
        'draw': function() {
            this['parent']();
        },
        'update': function() {
            this['_unpushedImage'] && !this['disable'] && (this['currentAnim'] = this['_unpushedImage']);
        },
        'clicked': function() {
            !this['_isTweening'] && !this['disable'] && (this['disableButtonSound'] || ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['buttonClick']), this['onClicked'] ? this['onClicked']() : '');
        },
        'clicking': function() {
            this['_pushedImage'] && !this['disable'] && (this['currentAnim'] = this['_pushedImage']);
            if (this['onClicking']) this['onClicking']();
        },
        'released': function() {
            this['_isTweening'] || this['disable'] || (this['onReleased'] ? this['onReleased']() : '');
        },
        'tweenShow': function(_0x3dce27) {
            _0x3dce27 || (_0x3dce27 = {});
            var _0x518dc5 = _0x3dce27['dropSpeed'] || 0x4b0;
            new ig['TweenDef'](this['pos'])['to']({
                'x': _0x3dce27['x'] || 0x0,
                'y': _0x3dce27['y'] || 0x0
            }, _0x518dc5)['easing'](ig['Tween']['Easing']['Bounce']['EaseOut'])['onComplete'](function() {
                _0x3dce27['callback'] ? _0x3dce27['callback']() : '';
            } ['bind'](this))['start']();
        },
        'tweenHide': function(_0x2d52bf) {
            _0x2d52bf || (_0x2d52bf = {});
            var _0x3225d3 = _0x2d52bf['dropSpeed'] || 0x4b0;
            this['_isTweening'] = !0x0;
            new ig['TweenDef'](this['pos'])['to']({
                'y': -this['size']['y']
            }, _0x3225d3)['easing'](ig['Tween']['Easing']['Cubic']['EaseInOut'])['onComplete'](function() {
                delete this['_isTweening'];
                _0x2d52bf['callback'] ? _0x2d52bf['callback']() : '';
            } ['bind'](this))['start']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.buttons.button-branding-logo')['requires']('game.entities.buttons.button', 'plugins.clickable-div-layer')['defines'](function() {
    EntityButtonBrandingLogo = EntityButton['extend']({
        'type': ig['Entity']['TYPE']['A'],
        'gravityFactor': 0x0,
        'logo': new ig['AnimationSheet']('media/graphics/misc/invisible.png', 0x1, 0x1),
        'zIndex': 0x2711,
        'size': {
            'x': 0x40,
            'y': 0x42
        },
        'clickableLayer': null,
        'link': null,
        'newWindow': !0x1,
        'div_layer_name': 'branding-logo',
        'name': 'brandinglogo',
        'init': function(_0x41b777, _0x42c193, _0x1a2f9d) {
            this['parent'](_0x41b777, _0x42c193, _0x1a2f9d);
            if (!ig['global']['wm']) {
                if ('undefined' == typeof wm)
                    if (_SETTINGS['Branding']['Logo']['Enabled']) this['size']['x'] = _SETTINGS['Branding']['Logo']['Width'], this['size']['y'] = _SETTINGS['Branding']['Logo']['Height'], this['anims']['idle'] = new ig['Animation'](this['logo'], 0x0, [0x0], !0x0), this['currentAnim'] = this['anims']['idle'], _0x1a2f9d && _0x1a2f9d['centralize'] && (this['pos']['x'] = ig['system']['width'] / 0x2 - this['size']['x'] / 0x2, console['log']('centralize\x20true\x20...\x20centering\x20branded\x20logo\x20...')), _SETTINGS['Branding']['Logo']['LinkEnabled'] && (this['link'] = _SETTINGS['Branding']['Logo']['Link'], this['newWindow'] = _SETTINGS['Branding']['Logo']['NewWindow'], this['clickableLayer'] = new ClickableDivLayer(this));
                    else {
                        this['kill']();
                        return;
                    } this['div_layer_name'] = _0x1a2f9d['div_layer_name'] ? _0x1a2f9d['div_layer_name'] : 'branding-logo';
            }
        },
        'show': function() {
            var _0x1c3c7e = ig['domHandler']['getElementById']('#' + this['div_layer_name']);
            ig['domHandler']['show'](_0x1c3c7e);
        },
        'hide': function() {
            var _0x5d48a7 = ig['domHandler']['getElementById']('#' + this['div_layer_name']);
            ig['domHandler']['hide'](_0x5d48a7);
        },
        'clicked': function() {},
        'clicking': function() {},
        'released': function() {}
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.branding-logo-placeholder')['requires']('impact.entity', 'game.entities.buttons.button-branding-logo')['defines'](function() {
    EntityBrandingLogoPlaceholder = ig['Entity']['extend']({
        'gravityFactor': 0x0,
        'size': {
            'x': 0x20,
            'y': 0x20
        },
        '_wmDrawBox': !0x0,
        '_wmBoxColor': 'rgba(0,\x200,\x20255,\x200.7)',
        'init': function(_0x3e891c, _0x1d0950, _0x3aa687) {
            this['parent'](_0x3e891c, _0x1d0950, _0x3aa687);
            if (_0x3aa687) switch (console['log']('settings\x20found\x20...\x20using\x20that\x20div\x20layer\x20name'), _0x3e891c = _0x3aa687['div_layer_name'], console['log']('settings.centralize:', _0x3aa687['centralize']), _0x3aa687['centralize']) {
                case 'true':
                    console['log']('centralize\x20true');
                    centralize = !0x0;
                    break;
                case 'false':
                    console['log']('centralize\x20false');
                    centralize = !0x1;
                    break;
                default:
                    console['log']('default\x20...\x20centralize\x20false'), centralize = !0x1;
            } else _0x3e891c = 'branding-logo', centralize = !0x1;
            if ('undefined' == typeof wm) {
                if (_SETTINGS['Branding']['Logo']['Enabled']) try {
                    ig['game']['spawnEntity'](EntityButtonBrandingLogo, this['pos']['x'], this['pos']['y'], {
                        'div_layer_name': _0x3e891c,
                        'centralize': centralize
                    });
                } catch (_0x18bf5b) {
                    console['log'](_0x18bf5b);
                }
                this['kill']();
            }
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.buttons.button-more-games')['requires']('game.entities.buttons.button', 'plugins.clickable-div-layer')['defines'](function() {
    EntityButtonMoreGames = EntityButton['extend']({
        'type': ig['Entity']['TYPE']['A'],
        'gravityFactor': 0x0,
        'size': {
            'x': 0x40,
            'y': 0x42
        },
        'zIndex': 0x2ee,
        'clickableLayer': null,
        'link': null,
        'newWindow': !0x1,
        'div_layer_name': 'more-games',
        'name': 'moregames',
        'init': function(_0x440247, _0x5a9d80, _0xa0a5b7) {
            this['parent'](_0x440247, _0x5a9d80, _0xa0a5b7);
            ig['global']['wm'] || (this['div_layer_name'] = _0xa0a5b7['div_layer_name'] ? _0xa0a5b7['div_layer_name'] : 'more-games', _SETTINGS['MoreGames']['Enabled'] ? (_SETTINGS['MoreGames']['Link'] && (this['link'] = _SETTINGS['MoreGames']['Link']), _SETTINGS['MoreGames']['NewWindow'] && (this['newWindow'] = _SETTINGS['MoreGames']['NewWindow']), this['clickableLayer'] = new ClickableDivLayer(this)) : this['kill']());
        },
        'showLink': function() {
            var _0x321e9b = ig['domHandler']['getElementById']('#' + this['div_layer_name']);
            ig['domHandler']['show'](_0x321e9b);
        },
        'hideLink': function() {
            var _0x457f84 = ig['domHandler']['getElementById']('#' + this['div_layer_name']);
            ig['domHandler']['hide'](_0x457f84);
        },
        'clicked': function() {},
        'clicking': function() {},
        'released': function() {}
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.opening-shield')['requires']('impact.entity')['defines'](function() {
    EntityOpeningShield = ig['Entity']['extend']({
        'size': {
            'x': 0x30,
            'y': 0x30
        },
        'move': 0x0,
        'mIconAnim': 0x0,
        'shieldAnim': 0x0,
        'titleAnim': 0x0,
        'shieldImage': new ig['Image']('media/graphics/opening/shield.png'),
        'mIconImage': new ig['Image']('media/graphics/opening/m_icon.png'),
        'titleImage': new ig['Image']('media/graphics/opening/title.png'),
        'init': function(_0x3f8ff7, _0x5509ba, _0x243f26) {
            this['parent'](_0x3f8ff7, _0x5509ba, _0x243f26);
        },
        'ready': function() {
            if (!ig['wm'])
                if (_SETTINGS['DeveloperBranding']['Splash']['Enabled']) {
                    this['initTimer'] = new ig['Timer'](0.1);
                    try {
                        ig['soundHandler']['playSound'](ig['soundHandler']['SOUNDID']['openingSound']);
                    } catch (_0x1ae0e0) {
                        console['log'](_0x1ae0e0);
                    }
                } else ig['game']['director']['nextLevel'](), ig['system']['context']['globalAlpha'] = 0x1, this['kill']();
        },
        'update': function() {
            this['parent']();
            this['updateOriginalShieldOpening']();
        },
        'draw': function() {
            this['parent']();
            ig['global']['wm'] || (this['nextLevelTimer'] && 0x0 > this['nextLevelTimer']['delta']() && (ig['system']['context']['globalAlpha'] = -this['nextLevelTimer']['delta']()), this['drawOriginalShieldOpening']());
        },
        'updateOriginalShieldOpening': function() {
            this['initTimer'] && 0x0 < this['initTimer']['delta']() && (this['initTimer'] = null, this['sheildTimer'] = new ig['Timer'](0.05));
            this['sheildTimer'] && 0x0 < this['sheildTimer']['delta']() && (0x3 > this['shieldAnim'] ? (this['shieldAnim']++, this['sheildTimer']['reset']()) : (this['sheildTimer'] = null, this['moveTimer'] = new ig['Timer'](0.001), this['mIconTimer'] = new ig['Timer'](0.05), this['titleTimer'] = new ig['Timer'](0.15)));
            this['moveTimer'] && 0x0 < this['moveTimer']['delta']() && (this['move'] += 0.3, this['moveTimer']['reset']());
            this['mIconTimer'] && 0x0 < this['mIconTimer']['delta']() && (0xc > this['mIconAnim'] ? (this['mIconAnim']++, this['moveTimer']['reset']()) : this['mIconTimer'] = null);
            this['titleTimer'] && 0x0 < this['titleTimer']['delta']() && (0xb > this['titleAnim'] ? (this['titleAnim']++, this['titleTimer']['reset']()) : (this['titleTimer'] = null, this['nextLevelTimer'] = new ig['Timer'](0x1)));
            this['nextLevelTimer'] && 0x0 < this['nextLevelTimer']['delta']() && (this['nextLevelTimer'] = null, ig['game']['director']['nextLevel'](), ig['system']['context']['globalAlpha'] = 0x1);
        },
        'drawOriginalShieldOpening': function() {
            if (this['moveTimer']) {
                var _0x5c1b20 = ig['system']['context'];
                _0x5c1b20['save']();
                var _0x1dcca1 = ig['system']['width'] / 0x2,
                    _0x2b7b77 = ig['system']['height'] / 0x2;
                _0x5c1b20['translate'](_0x1dcca1, _0x2b7b77);
                _0x5c1b20['rotate'](this['move'] * Math['PI'] / 0xb4);
                _0x5c1b20['beginPath']();
                _0x5c1b20['moveTo'](0x0, 0x0);
                for (var _0x869b2c = 0x0, _0x1ee133 = 0x1; 0x30 >= _0x1ee133; _0x1ee133 += 0x1) _0x5c1b20['lineTo'](0x0 + 0x320 * Math['cos'](0x2 * _0x1ee133 * Math['PI'] / 0x30), 0x0 + 0x320 * Math['sin'](0x2 * _0x1ee133 * Math['PI'] / 0x30)), _0x869b2c++, 0x2 == _0x869b2c && (_0x869b2c = 0x0, _0x5c1b20['lineTo'](0x0, 0x0));
                _0x5c1b20['translate'](-_0x1dcca1, -_0x2b7b77);
                _0x1dcca1 = _0x5c1b20['createRadialGradient'](_0x1dcca1, _0x2b7b77, 0x64, _0x1dcca1, _0x2b7b77, 0xfa);
                _0x1dcca1['addColorStop'](0x0, 'rgba(255,255,255,0.1)');
                _0x1dcca1['addColorStop'](0x1, 'rgba(0,0,0,0)');
                _0x5c1b20['fillStyle'] = _0x1dcca1;
                _0x5c1b20['fill']();
                _0x5c1b20['restore']();
            }
            this['shieldImage']['drawTile'](ig['system']['width'] / 0x2 - 0x5b, 0x0 - (0x300 - ig['system']['height']) / 0x2, this['shieldAnim'], 0xb6, 0x300);
            this['moveTimer'] && (this['mIconImage']['drawTile'](ig['system']['width'] / 0x2 - 0x60, ig['system']['height'] / 0x2 - 0x46, this['mIconAnim'], 0xa6, 0xa0), this['titleImage']['drawTile'](ig['system']['width'] / 0x2 - 0xcc, ig['system']['height'] / 0x2 + 0x64, this['titleAnim'], 0x199, 0x4c));
            ig['system']['context']['globalAlpha'] = 0x1;
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.opening-kitty')['requires']('impact.entity')['defines'](function() {
    EntityOpeningKitty = ig['Entity']['extend']({
        'size': {
            'x': 0x30,
            'y': 0x30
        },
        'kittyAnim': -0x1,
        'kittyImage': new ig['Image']('media/graphics/opening/kitty.png'),
        'kittyTitleImage': new ig['Image']('media/graphics/opening/kittytitle.png'),
        'soundKey': 'kittyopeningSound',
        'init': function(_0x3fc9a8, _0x3a67d6, _0x2f91ba) {
            this['parent'](_0x3fc9a8, _0x3a67d6, _0x2f91ba);
        },
        'ready': function() {
            if (!ig['wm'])
                if (_SETTINGS['DeveloperBranding']['Splash']['Enabled']) {
                    this['initTimer'] = new ig['Timer'](0.1);
                    try {
                        ig['soundHandler']['sfxPlayer']['play'](this['soundKey']);
                    } catch (_0x4058d6) {
                        console['log'](_0x4058d6);
                    }
                } else ig['game']['director']['nextLevel'](), ig['system']['context']['globalAlpha'] = 0x1, this['kill']();
        },
        'update': function() {
            this['parent']();
            this['updateKittyOpening']();
        },
        'draw': function() {
            this['parent']();
            ig['global']['wm'] || (this['nextLevelTimer'] && 0x0 > this['nextLevelTimer']['delta']() && (ig['system']['context']['globalAlpha'] = -this['nextLevelTimer']['delta']()), this['drawKittyOpening']());
        },
        'updateKittyOpening': function() {
            this['initTimer'] && 0x0 < this['initTimer']['delta']() && (this['initTimer'] = null, this['kittyTimer'] = new ig['Timer'](0.15));
            this['kittyTimer'] && 0x0 < this['kittyTimer']['delta']() && (0x7 > this['kittyAnim'] ? (this['kittyAnim']++, this['kittyTimer']['reset']()) : (this['kittyTimer'] = null, this['nextLevelTimer'] = new ig['Timer'](0x2)));
            this['nextLevelTimer'] && 0x0 < this['nextLevelTimer']['delta']() && (this['nextLevelTimer'] = null, ig['game']['director']['nextLevel'](), ig['system']['context']['globalAlpha'] = 0x1);
        },
        'drawKittyOpening': function() {
            var _0x5a7174 = ig['system']['context']['createLinearGradient'](0x0, 0x0, 0x0, ig['system']['height']);
            _0x5a7174['addColorStop'](0x0, '#ffed94');
            _0x5a7174['addColorStop'](0x1, '#ffcd85');
            ig['system']['context']['fillStyle'] = _0x5a7174;
            ig['system']['context']['fillRect'](0x0, 0x0, ig['system']['width'], ig['system']['height']);
            0x0 <= this['kittyAnim'] && (this['kittyImage']['drawTile'](ig['system']['width'] / 0x2 - this['kittyImage']['width'] / 0x8, ig['system']['height'] / 0x2 - this['kittyImage']['height'] / 0x4, this['kittyAnim'], 0xda, 0x145), this['kittyTitleImage']['drawTile'](ig['system']['width'] / 0x2 - this['kittyTitleImage']['width'] / 0x2, ig['system']['height'] / 0x2 + this['kittyImage']['height'] / 0x4 + 0xa, this['kittyAnim'], 0x17c, 0x25));
            ig['system']['context']['globalAlpha'] = 0x1;
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.pointer')['requires']('impact.entity')['defines'](function() {
    EntityPointer = ig['Entity']['extend']({
        'checkAgainst': ig['Entity']['TYPE']['BOTH'],
        'size': new Vector2(0x1, 0x1),
        'isFirstPressed': !0x1,
        'isPressed': !0x1,
        'isReleased': !0x1,
        'isHovering': !0x1,
        'hoveringItem': null,
        'objectArray': [],
        'clickedObjectList': [],
        'ignorePause': !0x0,
        'zIndex': 0x157c,
        'check': function(_0x5dfad1) {
            this['objectArray']['push'](_0x5dfad1);
        },
        'clickObject': function(_0x3ddf85) {
            this['isFirstPressed'] && 'function' == typeof _0x3ddf85['clicked'] && (_0x3ddf85['clicked'](), this['addToClickedObjectList'](_0x3ddf85));
            this['isPressed'] && !this['isReleased'] && 'function' == typeof _0x3ddf85['clicking'] && _0x3ddf85['clicking']();
            this['isReleased'] && 'function' == typeof _0x3ddf85['released'] && (_0x3ddf85['released'](), this['removeFromClickedObjectList'](_0x3ddf85));
        },
        'refreshPos': function() {
            this['pos'] = ig['game']['io']['getClickPos']();
        },
        'update': function() {
            this['parent']();
            this['refreshPos']();
            var _0xf203b9 = null,
                _0x7e7985 = -0x1;
            for (a = this['objectArray']['length'] - 0x1; - 0x1 < a; a--) this['objectArray'][a]['zIndex'] > _0x7e7985 && (_0x7e7985 = this['objectArray'][a]['zIndex'], _0xf203b9 = this['objectArray'][a]);
            if (null != _0xf203b9) null != this['hoveringItem'] ? this['hoveringItem'] != _0xf203b9 && ('function' == typeof this['hoveringItem']['leave'] && this['hoveringItem']['leave'](), 'function' == typeof _0xf203b9['over'] && _0xf203b9['over']()) : 'function' == typeof _0xf203b9['over'] && _0xf203b9['over'](), this['hoveringItem'] = _0xf203b9, this['clickObject'](_0xf203b9), this['objectArray'] = [];
            else if (null != this['hoveringItem'] && 'function' == typeof this['hoveringItem']['leave'] && (this['hoveringItem']['leave'](), this['hoveringItem'] = null), this['isReleased']) {
                for (_0xf203b9 = 0x0; _0xf203b9 < this['clickedObjectList']['length']; _0xf203b9++) _0x7e7985 = this['clickedObjectList'][_0xf203b9], 'function' == typeof _0x7e7985['releasedOutside'] && _0x7e7985['releasedOutside']();
                this['clickedObjectList'] = [];
            }
            this['isFirstPressed'] = ig['input']['pressed']('click');
            this['isReleased'] = ig['input']['released']('click');
            this['isPressed'] = ig['input']['state']('click');
        },
        'addToClickedObjectList': function(_0x4c5a9c) {
            this['clickedObjectList']['push'](_0x4c5a9c);
        },
        'removeFromClickedObjectList': function(_0x369d69) {
            for (var _0x16f149 = [], _0x5f3056 = 0x0; _0x5f3056 < this['clickedObjectList']['length']; _0x5f3056++) {
                var _0xfef611 = this['clickedObjectList'][_0x5f3056];
                _0xfef611 != _0x369d69 && _0x16f149['push'](_0xfef611);
            }
            this['clickedObjectList'] = _0x16f149;
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.pointer-selector')['requires']('game.entities.pointer')['defines'](function() {
    EntityPointerSelector = EntityPointer['extend']({
        'zIndex': 0x3e8,
        '_wmDrawBox': !0x0,
        '_wmBoxColor': 'rgba(0,\x200,\x20255,\x200.7)',
        'size': {
            'x': 0x14,
            'y': 0x14
        },
        'init': function(_0x59a5f6, _0x27c45c, _0x32bf46) {
            this['parent'](_0x59a5f6, _0x27c45c, _0x32bf46);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.select')['requires']('impact.entity')['defines'](function() {
    EntitySelect = ig['Entity']['extend']({
        'type': ig['Entity']['TYPE']['B'],
        'checkAgainst': ig['Entity']['TYPE']['A'],
        'collides': ig['Entity']['COLLIDES']['NEVER'],
        'canSelect': !0x1,
        'canSelectTimerDuration': 0.35,
        'zIndex': 0x1869f,
        'isHovering': !0x1,
        'isSelected': !0x1,
        'init': function(_0x2f6fa0, _0x23b61c, _0x141e9b) {
            this['parent'](_0x2f6fa0, _0x23b61c, _0x141e9b);
            this['canSelectTimer'] = new ig['Timer'](this['canSelectTimerDuration']);
        },
        'doesClickableLayerExist': function(_0x4080a7) {
            for (k in dynamicClickableEntityDivs)
                if (k == _0x4080a7) return !0x0;
            return !0x1;
        },
        'checkClickableLayer': function(_0x5b9aeb, _0x126bb9, _0x5633a9) {
            'undefined' == typeof wm && (this['doesClickableLayerExist'](_0x5b9aeb) ? (ig['game']['showOverlay']([_0x5b9aeb]), $('#' + _0x5b9aeb)['find']('[href]')['attr']('href', _0x126bb9)) : this['createClickableOutboundLayer'](_0x5b9aeb, _0x126bb9, 'media/graphics/misc/invisible.png', _0x5633a9));
        },
        'createClickableOutboundLayer': function(_0x16acaa, _0x90e887, _0x3aaa7c, _0x19ea7a) {
            var _0x3c26a5 = ig['$new']('div');
            _0x3c26a5['id'] = _0x16acaa;
            document['body']['appendChild'](_0x3c26a5);
            $('#' + _0x3c26a5['id'])['css']('float', 'left');
            $('#' + _0x3c26a5['id'])['css']('width', this['size']['x'] * multiplier);
            $('#' + _0x3c26a5['id'])['css']('height', this['size']['y'] * multiplier);
            $('#' + _0x3c26a5['id'])['css']('position', 'absolute');
            var _0x2fe437 = w / 0x2 - destW / 0x2,
                _0x3e7bf1 = h / 0x2 - destH / 0x2;
            w == mobileWidth ? ($('#' + _0x3c26a5['id'])['css']('left', this['pos']['x']), $('#' + _0x3c26a5['id'])['css']('top', this['pos']['y'])) : ($('#' + _0x3c26a5['id'])['css']('left', _0x2fe437 + this['pos']['x'] * multiplier), $('#' + _0x3c26a5['id'])['css']('top', _0x3e7bf1 + this['pos']['y'] * multiplier));
            _0x19ea7a ? $('#' + _0x3c26a5['id'])['html']('<a\x20target=\x27_blank\x27\x20href=\x27' + _0x90e887 + '\x27><img\x20style=\x27width:100%;height:100%\x27\x20src=\x27' + _0x3aaa7c + '\x27></a>') : $('#' + _0x3c26a5['id'])['html']('<a\x20href=\x27' + _0x90e887 + '\x27><img\x20style=\x27width:100%;height:100%\x27\x20src=\x27' + _0x3aaa7c + '\x27></a>');
            dynamicClickableEntityDivs[_0x16acaa] = {};
            dynamicClickableEntityDivs[_0x16acaa]['width'] = $('#' + _0x3c26a5['id'])['width']();
            dynamicClickableEntityDivs[_0x16acaa]['height'] = $('#' + _0x3c26a5['id'])['height']();
            dynamicClickableEntityDivs[_0x16acaa]['entity_pos_x'] = this['pos']['x'];
            dynamicClickableEntityDivs[_0x16acaa]['entity_pos_y'] = this['pos']['y'];
        },
        'hovered': function() {
            this['isHovering'] = !0x0;
            this['dehoverOthers']();
        },
        'dehoverOthers': function() {
            var _0x27561f = ig['game']['getEntitiesByType'](EntitySelect);
            for (i = 0x0; i < _0x27561f['length']; i++) _0x27561f[i] != this && (_0x27561f[i]['isHovering'] = !0x1);
        },
        'deselectOthers': function() {
            var _0x1c25fc = ig['game']['getEntitiesByType'](EntitySelect);
            for (i = 0x0; i < _0x1c25fc['length']; i++) _0x1c25fc[i] != this && (_0x1c25fc[i]['isSelected'] = !0x1);
        },
        'update': function() {
            this['parent']();
            this['canSelectTimer'] && 0x0 < this['canSelectTimer']['delta']() && (this['canSelect'] = !0x0, this['canSelectTimer'] = null);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.game.title')['requires']('impact.entity')['defines'](function() {
    EntityGameTitle = ig['Entity']['extend']({
        'zIndex': 0x2,
        'titleImage': new ig['Image']('media/graphics/sprites/title.png'),
        'init': function(_0xcda830, _0x2381f2, _0x3169e4) {
            this['parent'](_0xcda830, _0x2381f2, _0x3169e4);
            this['size'] = {
                'x': this['titleImage']['width'],
                'y': this['titleImage']['height']
            };
        },
        'update': function() {},
        'draw': function() {
            this['parent']();
            this['titleImage']['draw'](this['pos']['x'], this['pos']['y']);
        },
        'floatingTween': function() {
            this['floatUpTween']();
        },
        'floatUpTween': function() {
            new ig['TweenDef'](this['pos'])['to']({
                'y': this['pos']['y'] - 0x14
            }, 0x7d0)['easing'](ig['Tween']['Easing']['Linear']['EaseNone'])['onComplete'](function() {
                this['floatDownTween']();
            } ['bind'](this))['start']();
        },
        'floatDownTween': function() {
            new ig['TweenDef'](this['pos'])['to']({
                'y': this['pos']['y'] + 0x14
            }, 0x7d0)['easing'](ig['Tween']['Easing']['Linear']['EaseNone'])['onComplete'](function() {
                this['floatUpTween']();
            } ['bind'](this))['start']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.game.main-menu')['requires']('impact.entity')['defines'](function() {
    var _0x25e582 = 0x0,
        _0x3513de = 0x0;
    EntityMainMenu = ig['Entity']['extend']({
        'zIndex': 0x1,
        'buttonImages': [new ig['Image']('media/graphics/sprites/button_play.png'), new ig['Image']('media/graphics/sprites/button_play_pressed.png'), new ig['Image']('media/graphics/sprites/button_options.png'), new ig['Image']('media/graphics/sprites/button_options_pressed.png'), new ig['Image']('media/graphics/sprites/button_information.png'), new ig['Image']('media/graphics/sprites/button_information_pressed.png')],
        'buttons': {},
        'otherEntities': {},
        'titleImage': new ig['Image']('media/graphics/sprites/title.png'),
        'backgroundImageDesktop': new ig['Image']('media/graphics/backgrounds/desktop/background.jpg'),
        'backgroundImageMobile': new ig['Image']('media/graphics/backgrounds/mobile/background.jpg'),
        'peasantBoyImage': new ig['Image']('media/graphics/sprites/friendlies/peasant_boy.png'),
        'appleImage': new ig['Image']('media/graphics/sprites/fruits/apple.png'),
        'startFix': !0x1,
        'init': function(_0x417080, _0x82c108, _0x3d8c27) {
            this['parent'](_0x417080, _0x82c108, _0x3d8c27);
            _0x25e582 = ig['system']['realWidth'];
            _0x3513de = ig['system']['realHeight'];
            this['backgroundImage'] = ig['ua']['mobile'] ? this['backgroundImageMobile'] : this['backgroundImageDesktop'];
            this['size'] = {
                'x': this['backgroundImage']['width'],
                'y': this['backgroundImage']['height']
            };
            this['animSheet'] = new ig['AnimationSheet'](this['backgroundImage']['path'], this['size']['x'], this['size']['y']);
            this['addAnim']('idle', 0x1, [0x0], !0x0);
            this['spawnUIEntities']();
            this['spawnAndSetupButtons']();
            ig['game']['mainMenu'] = this;
            delete ig['game']['mainGame'];
            ig['game']['agLogo'] = ig['game']['spawnEntity'](EntityAgLogo, 0x0, 0x0);
            ig['game']['agLogo']['pos'] = {
                'x': ig['system']['width'] / 0x2 - ig['game']['agLogo']['size']['x'] / 0x2,
                'y': ig['system']['height'] - 1.5 * ig['game']['agLogo']['size']['y']
            };
            ig['game']['agLogo']['updateDiv']();
        },
        'update': function() {
            this['parent']();
        },
        'draw': function() {
            this['parent']();
            var _0x3eddb6 = 0x0,
                _0x2d885e = 0x0,
                _0x3eddb6 = _0x25e582 / 0x2 - this['peasantBoyImage']['width'] / 0x2 + 0x8c,
                _0x2d885e = _0x3513de - this['peasantBoyImage']['height'] - 0x4b;
            this['peasantBoyImage']['draw'](_0x3eddb6, _0x2d885e);
            this['appleImage']['draw'](_0x3eddb6 + this['peasantBoyImage']['width'] / 0x2 - this['appleImage']['width'] / 0x2, _0x2d885e - this['appleImage']['height'] + 0.08 * this['peasantBoyImage']['height']);
        },
        'spawnUIEntities': function() {
            this['otherEntities'] || (this['otherEntities'] = {});
            this['otherEntities']['title'] = ig['game']['spawnEntity'](EntityGameTitle, 0x0, 0x0, {
                '_parent': this
            });
            this['otherEntities']['player'] = ig['game']['spawnEntity'](EntityPlayer, 0x0, -_0x3513de, {
                '_parent': this,
                'disableTrajectory': !0x0
            });
            this['otherEntities']['title']['pos'] = {
                'x': _0x25e582 / 0x2 - this['otherEntities']['title']['size']['x'] / 0x2,
                'y': 0x14
            };
            this['otherEntities']['title']['floatingTween']();
            this['otherEntities']['player']['pos'] = {
                'x': 0x6e - this['otherEntities']['player']['size']['x'] / 0x2,
                'y': _0x3513de - this['otherEntities']['player']['size']['y'] / 0x2 - 0x78
            };
            this['otherEntities']['player']['onMenuAnimation']();
            this['otherEntities']['settingsPanel'] = ig['game']['spawnEntity'](EntitySettingsPanel, -_0x25e582, 0x0, {
                '_parent': this
            });
        },
        'spawnAndSetupButtons': function() {
            this['buttons'] || (this['buttons'] = {});
            this['buttons']['play'] = ig['game']['spawnEntity'](EntityButton, 0x0, 0x0, {
                '_parent': this,
                'imageFile1': this['buttonImages'][0x0],
                'imageFile2': this['buttonImages'][0x1],
                'onReleased': function() {
                    this['goToGame']();
                } ['bind'](this)
            });
            this['buttons']['play']['pos'] = {
                'x': _0x25e582 / 0x2 - this['buttons']['play']['size']['x'] / 0x2,
                'y': this['titleImage']['height'] + 0x19
            };
            this['buttons']['settings'] = ig['game']['spawnEntity'](EntityButton, 0x0, 0x0, {
                '_parent': this,
                'imageFile1': this['buttonImages'][0x2],
                'imageFile2': this['buttonImages'][0x3],
                'onReleased': function() {
                    ig['game']['agLogo']['hide']();
                    this['otherEntities']['settingsPanel']['show']();
                } ['bind'](this)
            });
            this['buttons']['leaderboard'] = ig['game']['spawnEntity'](EntityButton, _0x25e582 / 0x2 - this['buttons']['settings']['size']['x'] / 0x2 + 0x78, this['titleImage']['height'] + 0xa0, {
                '_parent': this,
                'imageFile1': this['buttonImages'][0x4],
                'imageFile2': this['buttonImages'][0x5],
                'onReleased': function() {
                    AG['showDialog']('scores', {
                        'title': 'Best\x20Scores',
                        'level_key': 'score'
                    });
                }
            });
            this['buttons']['settings']['pos'] = _SETTINGS['MoreGames']['Enabled'] || this['buttons']['leaderboard'] ? {
                'x': _0x25e582 / 0x2 - this['buttons']['settings']['size']['x'] / 0x2 - 0x78,
                'y': this['titleImage']['height'] + 0xa0
            } : {
                'x': _0x25e582 / 0x2 - this['buttons']['settings']['size']['x'] / 0x2,
                'y': this['titleImage']['height'] + 0xaa
            };
            _SETTINGS['MoreGames']['Enabled'] && (this['buttons']['info'] = ig['game']['spawnEntity'](EntityButtonMoreGames, _0x25e582 / 0x2 - this['buttons']['settings']['size']['x'] / 0x2 + 0x78, this['titleImage']['height'] + 0x8c, {
                '_parent': this,
                'imageFile1': this['buttonImages'][0x4],
                'imageFile2': this['buttonImages'][0x5],
                'onReleased': function() {}
            }));
        },
        'goToGame': function() {
            this['startFix'] || (AG['startGame']()['then'](function() {
                ig['game']['director']['jumpTo'](LevelMainGame);
            } ['bind'](this)), this['startFix'] = !0x0);
        },
        'enableButtons': function() {
            for (var _0x33fff6 in this['buttons']) this['buttons'][_0x33fff6]['disable'] = !0x1, this['buttons'][_0x33fff6]['showLink'] && this['buttons'][_0x33fff6]['showLink']();
            this['buttons']['leaderboard'] && (this['buttons']['leaderboard']['enableDiv'] = !0x0);
        },
        'disableButtons': function() {
            for (var _0x5b5095 in this['buttons']) this['buttons'][_0x5b5095]['disable'] = !0x0, this['buttons'][_0x5b5095]['hideLink'] && this['buttons'][_0x5b5095]['hideLink']();
            this['buttons']['leaderboard'] && (this['buttons']['leaderboard']['enableDiv'] = !0x1);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.game.main-game')['requires']('impact.entity')['defines'](function() {
    var _0x225db3 = 0x0,
        _0x54906d = 0x0;
    EntityMainGame = ig['Entity']['extend']({
        'zIndex': 0x1,
        'buttonImages': [new ig['Image']('media/graphics/sprites/pause.png')],
        'playerLevel': 0x1,
        'playerScore': 0x0,
        'playerTotalShotCount': 0x0,
        'playerTotalHitCount': 0x0,
        'playerCurrentConsecutiveHitCount': 0x0,
        'playerCurrentFireArrowHit': 0x0,
        'playerCurrentQuiverCount': 0x3,
        'playerCurrentQuiverMaxCount': 0x3,
        'playerCurrentAngle': 0x0,
        'player4thArrowActive': !0x1,
        'playerBowmanStatus': null,
        'SCORE_PER_HIT': 0x5,
        'CENTER_HIT_MULTIPLIER': 0x5,
        'STREAK_HIT_MULTIPLIER': 0x2,
        'STREAK_ACTIVATION_CONSECUTIVE_HIT_COUNT': 0x2,
        'BONUS_QUIVER_ACTIVATION_FIRE_HIT_COUNT': 0x5,
        'PLAYER_QUIVER_COUNT': 0x3,
        'BONUS_QUIVER_COUNT': 0x1,
        'START_ANGLE': 0x0,
        'MAX_ANGLE': 0x2d,
        'PIVOT_ANGLE_SPEED': 0x23,
        'MESSAGE_DISPLAY_DURATION': 0x5dc,
        'FRUIT_HIT_SCORE_SHOW_DURATION': 0x3e8,
        'PLAYER_DISTANCE_BACKWARD': 0x14,
        'allArrows': [],
        'buttons': {},
        'otherEntities': {},
        'backgroundImageDesktop': new ig['Image']('media/graphics/backgrounds/desktop/background.jpg'),
        'backgroundImageMobile': new ig['Image']('media/graphics/backgrounds/mobile/background.jpg'),
        'init': function(_0x5f137c, _0x4096d9, _0x157d30) {
            this['parent'](_0x5f137c, _0x4096d9, _0x157d30);
            _0x225db3 = ig['system']['realWidth'];
            _0x54906d = ig['system']['realHeight'];
            this['backgroundImage'] = ig['ua']['mobile'] ? this['backgroundImageMobile'] : this['backgroundImageDesktop'];
            this['size'] = {
                'x': this['backgroundImage']['width'],
                'y': this['backgroundImage']['height']
            };
            this['animSheet'] = new ig['AnimationSheet'](this['backgroundImage']['path'], this['size']['x'], this['size']['y']);
            this['addAnim']('idle', 0x1, [0x0], !0x0);
            ig['game']['mainGame'] = this;
            this['spawnAndSetupUIEntities']();
            this['spawnAndSetupButtons']();
            this['startNewGame']();
            this['showTutorial']();
        },
        'update': function() {
            this['parent']();
            ig['game']['sortEntities']();
            this['playerCurrentAngle'] < this['MAX_ANGLE'] && 'nock' == this['playerBowmanStatus'] && (this['playerCurrentAngle'] += this['PIVOT_ANGLE_SPEED'] * ig['system']['tick']);
            this['playerBowmanStatus'] != this['___previousPlayerBowmanStatus'] && !this['_______cancellation'] && ('nock' === this['playerBowmanStatus'] ? this['playerHasNock']() : this['playerHasFire']());
            this['___previousPlayerBowmanStatus'] = this['playerBowmanStatus'];
            this['otherEntities']['player']['updateAngle'](-degreesToRadians(this['playerCurrentAngle']));
        },
        'draw': function() {
            this['parent']();
            this['drawUserInterface']();
        },
        'drawUserInterface': function() {
            var _0x5b4117 = ig['system']['context'];
            _0x5b4117['save']();
            _0x5b4117['restore']();
        },
        'spawnAndSetupUIEntities': function() {
            this['otherEntities'] || (this['otherEntities'] = {});
            this['otherEntities'] = {
                'player': ig['game']['spawnEntity'](EntityPlayer, 0x0, -_0x54906d, {
                    '_parent': this
                }),
                'score-board': ig['game']['spawnEntity'](EntityScoreBoard, 0x0, -_0x54906d, {
                    '_parent': this
                }),
                'tutorial-panel': ig['game']['spawnEntity'](EntityTutorialPanel, 0x0, -_0x54906d, {
                    '_parent': this
                }),
                'pause-panel': ig['game']['spawnEntity'](EntityPausePanel, 0x0, -_0x54906d, {
                    '_parent': this
                }),
                'popup-panel': ig['game']['spawnEntity'](EntityPopUpPanel, 0x0, -_0x54906d, {
                    '_parent': this
                }),
                'score-panel': ig['game']['spawnEntity'](EntityScorePanel, 0x0, -_0x54906d, {
                    '_parent': this
                }),
                'flag': ig['game']['spawnEntity'](EntityFlag, 0x0, -_0x54906d, {
                    '_parent': this
                }),
                'message-display': ig['game']['spawnEntity'](EntityMessageDisplay, 0x0, 0x0, {
                    '_parent': this
                })
            };
            this['playerDefaultPostion']();
        },
        'playerDefaultPostion': function() {
            this['otherEntities']['player']['pos'] = {
                'x': 0x8c - this['otherEntities']['player']['size']['x'] / 0x2,
                'y': _0x54906d - this['otherEntities']['player']['size']['y'] / 0x2 - 0xb4
            };
        },
        'spawnAndSetupButtons': function() {
            var _0x31b063 = this;
            this['buttons'] = {
                'fire': ig['game']['spawnEntity'](EntityButton, 0x0, 0x12c, {
                    '_parent': this,
                    'zIndex': 0x5af3107a3fff,
                    'size': {
                        'x': _0x225db3,
                        'y': _0x54906d - 0x12c
                    },
                    'disableButtonSound': !0x0,
                    'onClicking': function() {
                        ig['game']['io']['mouse']['getPos']();
                        _0x31b063['_______timeIntervalTime'] = 0x5;
                        _0x31b063['_______timeInterval'] || (_0x31b063['_______timeInterval'] = setInterval(function() {
                            _0x31b063['_______timeIntervalTime']--;
                            if (0x0 >= _0x31b063['_______timeIntervalTime'] && !0x0 == _0x31b063['____________isClicked']) {
                                try {
                                    clearInterval(_0x31b063['_______timeInterval']);
                                } catch (_0x5166dc) {}
                                delete _0x31b063['_______timeInterval'];
                                _0x31b063['_______cancellation'] = !0x0;
                                _0x31b063['otherEntities']['player']['changeAnimsTo']('idle');
                                new ig['TweenDef'](_0x31b063)['to']({
                                    'playerCurrentAngle': 0x0
                                }, 0x64)['easing'](ig['Tween']['Easing']['Linear']['EaseNone'])['onComplete'](function() {
                                    _0x31b063['isReadyToFire'] = !0x0;
                                } ['bind'](_0x31b063))['start']();
                                delete _0x31b063['playerBowmanStatus'];
                            } else if (0x0 >= _0x31b063['_______timeIntervalTime']) {
                                try {
                                    clearInterval(_0x31b063['_______timeInterval']);
                                } catch (_0x57760e) {}
                                delete _0x31b063['_______timeInterval'];
                            }
                        } ['bind'](_0x31b063), 0x50));
                    },
                    'onClicked': function() {
                        this['____________isClicked'] = !0x0;
                        this['bowmanNock']();
                    } ['bind'](this),
                    'onReleased': function() {
                        delete this['____________isClicked'];
                        this['bowmanLoose']();
                    } ['bind'](this)
                }),
                'pauseBtn': ig['game']['spawnEntity'](EntityButton, 0x0, 0x0, {
                    '_parent': this,
                    'imageFile1': this['buttonImages'][0x0],
                    'imageFile2': this['buttonImages'][0x0],
                    'onReleased': function() {
                        _0x31b063['otherEntities']['score-board']['_isTweening'] || this['isReadyToFire'] && this['pauseGame']();
                    } ['bind'](this)
                })
            };
            this['buttons']['pauseBtn']['pos'] = {
                'x': _0x225db3 - this['buttons']['pauseBtn']['size']['x'] - 0x1e,
                'y': -this['buttons']['pauseBtn']['size']['y']
            };
        },
        'showTutorial': function() {
            this['disableNock'] = this['gameIsPause'] = !0x0;
            this['otherEntities']['tutorial-panel']['tweenShow']();
        },
        'hideTutorial': function() {
            delete this['gameIsPause'];
            delete this['disableNock'];
            this['otherEntities']['tutorial-panel']['tweenHide']();
            this['buttons']['pauseBtn']['tweenShow']({
                'x': _0x225db3 - this['buttons']['pauseBtn']['size']['x'] - 0x1e,
                'y': 0x1e
            });
            this['otherEntities']['score-board']['tweenShow']();
            ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['gameStart']);
        },
        'bowmanNock': function() {
            !this['disableNock'] && this['isReadyToFire'] && (delete this['_______cancellation'], ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['arrowNock']), this['playerBowmanStatus'] = 'nock', this['otherEntities']['player']['changeAnimsTo']('nock'));
        },
        'bowmanLoose': function() {
            !this['disableNock'] && this['playerBowmanStatus'] && (this['playerCurrentQuiverCount']--, this['playerTotalShotCount']++, this['isReadyToFire'] = !0x1, ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['arrowLoose']), this['otherEntities']['player']['shoot'](), this['otherEntities']['player']['changeAnimsTo']('loose'), new ig['TweenDef'](this)['to']({
                'playerCurrentAngle': 0x0
            }, 0x64)['easing'](ig['Tween']['Easing']['Linear']['EaseNone'])['onComplete'](function() {
                this['otherEntities']['player']['changeAnimsTo']('idle');
            } ['bind'](this))['start'](), delete this['playerBowmanStatus']);
        },
        'startNewGame': function() {
            this['playerLevel'] = 0x1;
            this['playerCurrentFireArrowHit'] = this['playerCurrentConsecutiveHitCount'] = this['playerTotalHitCount'] = this['playerTotalShotCount'] = this['playerScore'] = 0x0;
            this['playerCurrentQuiverMaxCount'] = this['PLAYER_QUIVER_COUNT'];
            this['playerCurrentAngle'] = 0x0;
            this['player4thArrowActive'] = !0x1;
            this['playerBowmanStatus'] = null;
            this['playerDefaultPostion']();
            this['spawnNewTarget']({
                'characterName': 'peasant_boy',
                'fruitName': 'apple'
            });
        },
        'killAllSprites': function() {
            this['otherEntities']['targetCharacter'] && this['otherEntities']['targetCharacter']['killAll']();
            for (var _0x35904c = 0x0; _0x35904c < this['allArrows']['length']; _0x35904c++) this['allArrows'][_0x35904c]['kill']();
            this['allArrows'] = [];
        },
        'spawnNewTarget': function(_0x52f0dc) {
            _0x52f0dc = _0x52f0dc || {};
            this['playerCurrentQuiverCount'] = this['playerCurrentQuiverMaxCount'];
            this['player4thArrowActive'] && (this['playerCurrentQuiverCount'] += this['BONUS_QUIVER_COUNT']);
            this['killAllSprites']();
            this['playerCurrentConsecutiveHitCount'] >= this['STREAK_ACTIVATION_CONSECUTIVE_HIT_COUNT'] ? (!0x0 != this['isFireArrow'] && ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['fireLit']), this['isFireArrow'] = !0x0, this['_hasShowTipNumber2'] || this['showPopUpTips'](0x2)) : this['isFireArrow'] = !0x1;
            setTimeout(function() {
                this['spawnNewPlayersArrow'](this['isFireArrow']);
            } ['bind'](this), 0xa);
            _0x52f0dc['level'] = this['playerLevel'];
            0x3 > _0x52f0dc['level'] ? _0x52f0dc['onRock'] = !0x1 : 0x3 <= _0x52f0dc['level'] && (_0x52f0dc['onRock'] = !0x0);
            _0x52f0dc['dockPos'] = {
                'x': 0x1ae,
                'y': _0x54906d - 0x82
            };
            this['otherEntities']['targetCharacter'] = ig['game']['spawnEntity'](EntityCharacter, -0x3e7, -0x3e7, _0x52f0dc);
        },
        'proceedToNextLevel': function() {
            delete this['isFruitHit'];
            this['playerLevel']++;
            0x5 >= this['playerLevel'] && (this['otherEntities']['player']['pos']['x'] -= this['PLAYER_DISTANCE_BACKWARD']);
            this['spawnNewTarget']();
        },
        'gameOver': function() {
            AG['endGame']()['then'](function() {
                this['disableNock'] = this['gameIsPause'] = !0x0;
                this['buttons']['pauseBtn']['tweenHide']({
                    'dropSpeed': 0x1f4
                });
                this['otherEntities']['score-board']['tweenHide']();
                this['otherEntities']['score-panel']['tweenShow']();
                try {
                    AG['postScore']('score', this['playerScore'], {
                        'confirmation': !0x1
                    }), console['log']('::\x20postScore\x20triggered\x20::');
                } catch (_0x416242) {
                    console['warn']('Error:\x20' + _0x416242);
                }
            } ['bind'](this));
        },
        'pauseGame': function() {
            this['gameIsPause'] || (this['disableNock'] = this['gameIsPause'] = !0x0, this['buttons']['pauseBtn']['tweenHide']({
                'dropSpeed': 0x1f4
            }), this['otherEntities']['score-board']['tweenHide'](), this['otherEntities']['pause-panel']['tweenShow']());
        },
        'unpauseGame': function() {
            this['gameIsPause'] && (delete this['gameIsPause'], delete this['disableNock'], this['buttons']['pauseBtn']['tweenShow']({
                'x': _0x225db3 - this['buttons']['pauseBtn']['size']['x'] - 0x1e,
                'y': 0x1e
            }), this['otherEntities']['score-board']['tweenShow'](), this['otherEntities']['pause-panel']['tweenHide']());
        },
        'goToMenu': function() {
            ig['game']['director']['jumpTo'](LevelMainMenu);
        },
        'showNiceShot': function(_0x3fefc4) {
            ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['applause']);
            this['otherEntities']['flag']['showWithText']({
                'text': _STRINGS['Results']['NiceShoot'],
                'text2': 'x' + this['CENTER_HIT_MULTIPLIER'],
                'seconds': this['MESSAGE_DISPLAY_DURATION'],
                'callback': _0x3fefc4
            });
        },
        'showGoodShot': function(_0x1fe05f) {
            this['otherEntities']['flag']['showWithText']({
                'text': _STRINGS['Results']['Good'],
                'seconds': this['MESSAGE_DISPLAY_DURATION'],
                'callback': _0x1fe05f
            });
        },
        'spawnNewPlayersArrow': function(_0x18ff4e) {
            if (0x1 > this['playerCurrentQuiverCount']) this['gameOver']();
            else {
                var _0x76f41f = this['playerCurrentQuiverMaxCount'];
                this['player4thArrowActive'] && (_0x76f41f += this['BONUS_QUIVER_COUNT']);
                this['playerCurrentQuiverCount'] < _0x76f41f && (this['isFireArrow'] = !0x1);
                this['isReadyToFire'] = !0x0;
                0x1 == this['playerCurrentQuiverCount'] && this['player4thArrowActive'] && (this['playerCurrentFireArrowHit'] = 0x0, this['player4thArrowActive'] = !0x1);
                this['otherEntities']['player']['spawnNewArrow'](_0x18ff4e);
            }
        },
        'scoreFruitHit': function(_0x4a3923, _0x54bce4) {
            var _0x488815 = this['SCORE_PER_HIT'];
            this['isFruitHit'] = !0x0;
            this['playerTotalHitCount']++;
            _0x4a3923 && (ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['critical']), _0x488815 *= this['CENTER_HIT_MULTIPLIER'], this['_hasShowTipNumber1'] || this['showPopUpTips'](0x1));
            this['playerCurrentConsecutiveHitCount'] >= this['STREAK_ACTIVATION_CONSECUTIVE_HIT_COUNT'] && (_0x488815 *= this['STREAK_HIT_MULTIPLIER']);
            this['playerCurrentConsecutiveHitCount']++;
            this['playerCurrentFireArrowHit'] >= this['BONUS_QUIVER_ACTIVATION_FIRE_HIT_COUNT'] && (this['player4thArrowActive'] = !0x0, this['_hasShowTipNumber4'] || this['showPopUpTips'](0x4));
            _0x4a3923 ? this['showNiceShot'](function() {
                this['proceedToNextLevel']();
            } ['bind'](this)) : this['showGoodShot'](function() {
                this['proceedToNextLevel']();
            } ['bind'](this));
            _0x54bce4 && this['otherEntities']['message-display']['displayMsg']('+' + _0x488815, _0x54bce4);
            this['playerScore'] += _0x488815;
        },
        'showPopUpTips': function(_0x1a8319) {
            if (!this['otherEntities']['popup-panel']['isShown']) {
                this['disableNock'] = this['gameIsPause'] = !0x0;
                var _0xb6bddf = '';
                switch (_0x1a8319) {
                    case 0x1:
                        this['_hasShowTipNumber1'] = !0x0;
                        _0xb6bddf = _STRINGS['Tutorial']['Step4'];
                        break;
                    case 0x2:
                        this['_hasShowTipNumber2'] = !0x0;
                        _0xb6bddf = _STRINGS['Tutorial']['Step5'] + '\x20' + _STRINGS['Tutorial']['Step6'];
                        break;
                    case 0x3:
                        this['_hasShowTipNumber3'] = !0x0;
                        _0xb6bddf = '';
                        break;
                    default:
                        this['_hasShowTipNumber4'] = !0x0, _0xb6bddf = _STRINGS['Tutorial']['Step7'];
                }
                this['otherEntities']['popup-panel']['tweenShow']({
                    'message': _0xb6bddf
                });
            }
        },
        'hidePopUpTips': function() {
            delete this['gameIsPause'];
            delete this['disableNock'];
            this['otherEntities']['popup-panel']['tweenHide']();
        },
        'playerHasNock': function() {},
        'playerHasFire': function() {
            setTimeout(function() {
                this['isFruitHit'] || (this['playerCurrentConsecutiveHitCount'] = 0x0, this['spawnNewPlayersArrow']());
            } ['bind'](this), 0x3e8);
        },
        'accumulateFireArrowHit': function() {
            this['playerCurrentFireArrowHit']++;
            this['playerCurrentFireArrowHit'] >= this['BONUS_QUIVER_ACTIVATION_FIRE_HIT_COUNT'] && (this['player4thArrowActive'] = !0x0, this['_hasShowTipNumber4'] || this['showPopUpTips'](0x4));
        }
    });
});

function radianToDegrees(_0x3bcdd6) {
    return _0x3bcdd6 * (0xb4 / Math['PI']);
}

function degreesToRadians(_0xcb8188) {
    return _0xcb8188 * (Math['PI'] / 0xb4);
}
ig['baked'] = !0x0;
ig['module']('game.entities.game.arrow')['requires']('impact.entity')['defines'](function() {
    EntityArrow = ig['Entity']['extend']({
        'zIndex': 0x7,
        'size': {
            'x': 0x4f,
            'y': 0xb
        },
        'type': ig['Entity']['TYPE']['A'],
        'GRAVITY_VEL_X': 9.8,
        'radius': 0x0,
        'speed': 0x4b0,
        'FRICTION_X': 0.001,
        'FRICTION_Y': 0.022,
        'ANGLE_FRICTION': -0.01,
        'hitLevel': {
            'good': [{
                'from': 0.1,
                'to': 0.3
            }, {
                'from': 0.7,
                'to': 0.9
            }],
            'awesome': [{
                'from': 0.31,
                'to': 0.44
            }, {
                'from': 0.56,
                'to': 0.69
            }],
            'perfect': [{
                'from': 0.45,
                'to': 0.55
            }]
        },
        'arrowImage': new ig['Image']('media/graphics/sprites/bill/arrow.png'),
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/bill/arrow.png', 0x4f, 0xb),
        'fireArrowAnimSheet': new ig['AnimationSheet']('media/graphics/sprites/bill/arrow_fire.png', 0x4f, 0xb),
        'fireSheet': new ig['AnimationSheet']('media/graphics/sprites/bill/fire-sprite.png', 0x32, 0x50),
        'init': function(_0xc52192, _0x453a0d, _0x2234b1) {
            this['parent'](_0xc52192, _0x453a0d, _0x2234b1);
            this['isFireArrow'] && (this['animSheet'] = this['fireArrowAnimSheet'], this['fire'] = new ig['Animation'](this['fireSheet'], 0.025, [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7]));
            this['addAnim']('idle', 0x1, [0x0]);
            this['maxVel'] = {
                'x': 0xf423f,
                'y': 0x98967f
            };
        },
        'update': function() {
            this['parent']();
            if (ig['game']['mainGame'])
                if (this['fire'] && this['fire']['update'](), 0x0 < this['vel']['x'] || 0x0 < this['vel']['y']) {
                    0x0 < this['vel']['x'] && (this['vel']['x'] -= this['_velSpeedX'] * this['FRICTION_X']);
                    this['vel']['y'] -= this['_velSpeedY'] * this['FRICTION_Y'];
                    var _0x4bc930 = -0x1 * radianToDegrees(this['currentAnim']['angle']) / 0xf;
                    this['currentAnim']['angle'] -= this['ANGLE_FRICTION'] * _0x4bc930;
                    this['accel']['y'] = this['arrowLanded'] ? 0x64 * this['GRAVITY_VEL_X'] : 0x0;
                    if (this['isLaunched']) {
                        var _0x4bc930 = radianToDegrees(this['currentAnim']['angle']),
                            _0x18bb96 = POINT_XY_ANGLE(this['size']['x'] / 0x2, 0x5a + Math['abs'](_0x4bc930)),
                            _0x4bc930 = this['pos']['x'] + this['size']['x'] / 0x2 + _0x18bb96['x'],
                            _0x18bb96 = this['pos']['y'] + 0.45 * this['size']['y'] + _0x18bb96['y'],
                            _0x30f7ae = ig['game']['mainGame']['otherEntities']['targetCharacter'],
                            _0x219067 = ig['game']['mainGame']['otherEntities']['targetCharacter']['stone'];
                        if (_0x30f7ae && _0x30f7ae['hitByArrow']({
                                'x': _0x4bc930,
                                'y': _0x18bb96
                            })) return _0x30f7ae['charOuch'](), this['stopArrowMovement'](_0x219067);
                        if ((_0x30f7ae = ig['game']['mainGame']['otherEntities']['targetCharacter']['fruit']) && _0x30f7ae['hitByArrow']({
                                'x': _0x4bc930,
                                'y': _0x18bb96
                            })) return ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['fruitHit']), _0x30f7ae['arrowHit'](this['vel']);
                        if (_0x219067 && _0x219067['hitByArrow']({
                                'x': _0x4bc930,
                                'y': _0x18bb96
                            })) return ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['arrowHit1']), this['arrowFallMovement']();
                    }
                } else this['accel']['y'] = 0x0;
        },
        'draw': function() {
            var _0x28ae38 = 0x0,
                _0x2a9a5d = radianToDegrees(this['currentAnim']['angle']);
            this['fire'] && (_0x28ae38 = POINT_XY_ANGLE(this['size']['x'] / 0x2, 0x5a + Math['abs'](_0x2a9a5d)), this['fire']['draw'](this['pos']['x'] + this['size']['x'] / 0x2 + _0x28ae38['x'] - 0.8 * this['fireSheet']['width'] - 0.1 * _0x2a9a5d, this['pos']['y'] + 0.45 * this['size']['y'] + _0x28ae38['y'] - 0.7 * this['fireSheet']['height'] - 0.25 * _0x2a9a5d), this['fire']['angle'] = this['currentAnim']['angle']);
            this['parent']();
        },
        'updateAngle': function(_0x3d8ab0) {
            this['isLaunched'] || (this['currentAnim']['angle'] = _0x3d8ab0);
        },
        'shoot': function() {
            this['isLaunched'] = !0x0;
            var _0x28780b = this['currentAnim']['angle'],
                _0x3e5412 = this['speed'] * Math['cos'](_0x28780b),
                _0x28780b = this['speed'] * Math['sin'](_0x28780b);
            this['vel']['x'] = _0x3e5412;
            this['vel']['y'] = _0x28780b;
            this['_velSpeedX'] = _0x3e5412;
            this['_velSpeedY'] = _0x28780b;
            setTimeout(function() {
                this['vel']['x'] = 0x0;
                this['_velSpeedY'] = this['_velSpeedX'] = this['vel']['y'] = 0x0;
            } ['bind'](this), 0x5dc);
        },
        'stopArrowMovement': function(_0xbc4bbe) {
            this['arrowLanded'] = !0x0;
            this['vel']['x'] = 0x0;
            this['vel']['y'] = 0x0;
            _0xbc4bbe && _0xbc4bbe['addArrowMove'](this);
        },
        'arrowFallMovement': function() {
            this['arrowLanded'] = !0x0;
            this['vel']['x'] = -0x258;
            this['vel']['y'] = 0x384;
            new ig['TweenDef'](this['currentAnim'])['to']({
                'angle': 0xc8
            }, 0x7d0)['easing'](ig['Tween']['Easing']['Cubic']['EaseInOut'])['start']();
        }
    });
});

function radianToDegrees(_0x14cedd) {
    return _0x14cedd * (0xb4 / Math['PI']);
}

function degreesToRadians(_0xc03d2d) {
    return _0xc03d2d * (Math['PI'] / 0xb4);
}

function POINT_XY_ANGLE(_0x3f5785, _0x455eb2) {
    return {
        'x': _0x3f5785 * Math['sin'](0x2 * Math['PI'] * _0x455eb2 / 0x168),
        'y': _0x3f5785 * Math['cos'](0x2 * Math['PI'] * _0x455eb2 / 0x168)
    };
}
ig['baked'] = !0x0;
ig['module']('game.entities.game.score-board')['requires']('impact.entity')['defines'](function() {
    var _0xf4d767 = 0x0;
    EntityScoreBoard = ig['Entity']['extend']({
        'zIndex': 0x5,
        'type': ig['Entity']['TYPE']['A'],
        'PlayerUpperImage': new ig['Image']('media/graphics/sprites/bill/body.png'),
        'PlayerLowerImage': new ig['Image']('media/graphics/sprites/bill/legs.png'),
        'FireImage': new ig['Image']('media/graphics/sprites/fire.png'),
        'QuiverImage': new ig['Image']('media/graphics/sprites/quiver.png'),
        'ProgressBarImage': new ig['Image']('media/graphics/sprites/progress_bar.png'),
        'ProgressBarLightImage': new ig['Image']('media/graphics/sprites/progress_light.png'),
        'size': {
            'x': 0x20a,
            'y': 0x12c
        },
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/score-board.png', 0x20a, 0x12c),
        'fireSheet': new ig['AnimationSheet']('media/graphics/sprites/bill/fire-sprite.png', 0x32, 0x50),
        'init': function(_0x3c0740, _0x484439, _0x465d1e) {
            this['parent'](_0x3c0740, _0x484439, _0x465d1e);
            _0xf4d767 = ig['system']['realWidth'];
            this['addAnim']('idle', 0x1, [0x0]);
            this['fire'] = new ig['Animation'](this['fireSheet'], 0.08, [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7]);
        },
        'update': function() {
            this['parent']();
            this['fire']['update']();
        },
        'draw': function() {
            this['parent']();
            this['drawUIText']();
        },
        'drawUIText': function() {
            var _0x25875d = ig['system']['context'],
                _0x488e10 = _GAME_CONFIGURATION['fontStyles'][0x1],
                _0x332bfd = _GAME_CONFIGURATION['fontColors'][0x0],
                _0x7f093d = 0x0,
                _0x481e9b = 0x0;
            _0x25875d['save']();
            ig['game']['mainGame']['player4thArrowActive'] ? (_0x7f093d = this['pos']['x'] + this['size']['x'] / 0x2 + 0x9b, _0x481e9b = this['pos']['y'] + this['size']['y'] / 0x2 - 0.9 * this['fireSheet']['height'] - 0x1e, this['fire']['draw'](_0x7f093d, _0x481e9b)) : (_0x7f093d = this['pos']['x'] + this['size']['x'] / 0x2 + 0xa7, _0x481e9b = this['pos']['y'] + this['size']['y'] / 0x2 - 0x4a, this['FireImage']['draw'](_0x7f093d, _0x481e9b));
            for (var _0x7f093d = this['pos']['x'] + this['size']['x'] / 0x2 - 0x32, _0x481e9b = this['pos']['y'] + this['size']['y'] / 0x2 - 0x37, _0x2a663 = 0x0; _0x2a663 < ig['game']['mainGame']['playerCurrentQuiverCount']; _0x2a663++) this['QuiverImage']['draw'](_0x7f093d + 0.5 * _0x2a663 * this['QuiverImage']['width'], _0x481e9b);
            _0x7f093d = this['pos']['x'] + this['size']['x'] / 0x2 - 0x91;
            _0x481e9b = this['pos']['y'] + this['size']['y'] / 0x2 + 0x5;
            _0x25875d['textAlign'] = 'center';
            _0x25875d['font'] = '42px\x20' + _0x488e10;
            _0x25875d['fillStyle'] = _0x332bfd;
            _0x25875d['fillText'](ig['game']['mainGame']['playerScore'], _0x7f093d, _0x481e9b);
            _0x7f093d = this['pos']['x'] + this['size']['x'] / 0x2 + 0x69;
            _0x481e9b = this['pos']['y'] + this['size']['y'] / 0x2 + 0x4;
            _0x25875d['textAlign'] = 'center';
            _0x25875d['font'] = '36px\x20' + _0x488e10;
            _0x25875d['fillStyle'] = _0x332bfd;
            0x0 < ig['game']['mainGame']['playerCurrentFireArrowHit'] ? (_0x2a663 = ig['game']['mainGame']['playerCurrentFireArrowHit'], _0x2a663 > ig['game']['mainGame']['BONUS_QUIVER_ACTIVATION_FIRE_HIT_COUNT'] && (_0x2a663 = ig['game']['mainGame']['BONUS_QUIVER_ACTIVATION_FIRE_HIT_COUNT']), _0x25875d['fillText']('+' + _0x2a663, _0x7f093d, _0x481e9b)) : _0x25875d['fillText']('0', _0x7f093d, _0x481e9b);
            var _0x17fb8b = ig['game']['mainGame']['playerCurrentFireArrowHit'] / ig['game']['mainGame']['BONUS_QUIVER_ACTIVATION_FIRE_HIT_COUNT'],
                _0x17fb8b = 0x58 * _0x17fb8b;
            0x58 < _0x17fb8b && (_0x17fb8b = 0x58);
            _0x7f093d = this['pos']['x'] + this['size']['x'] / 0x2 + 0x86;
            _0x481e9b = this['pos']['y'] + this['size']['y'] / 0x2 - 0x1e;
            for (_0x2a663 = 0x0; _0x2a663 < _0x17fb8b; _0x2a663++) this['ProgressBarImage']['draw'](_0x7f093d + _0x2a663, _0x481e9b), this['ProgressBarLightImage']['draw'](_0x7f093d + _0x2a663 + 0x1, _0x481e9b);
            _0x2a663 = ig['game']['mainGame']['playerCurrentConsecutiveHitCount'] - 0x1;
            0x0 > _0x2a663 && (_0x2a663 = 0x0);
            _0x7f093d = this['pos']['x'] + this['size']['x'] / 0x2 + 0x14;
            _0x481e9b = this['pos']['y'] + this['size']['y'] - 0x42;
            _0x25875d['textAlign'] = 'center';
            _0x25875d['font'] = '20px\x20' + _0x488e10;
            _0x25875d['fillStyle'] = _0x332bfd;
            _0x25875d['fillText'](_STRINGS['Game']['Streak'] + '\x20x' + _0x2a663, _0x7f093d, _0x481e9b);
            _0x25875d['restore']();
        },
        'tweenShow': function(_0x13c046) {
            this['pos']['x'] = _0xf4d767 / 0x2 - this['size']['x'] / 0x2;
            this['pos']['y'] = -this['size']['y'];
            this['_isTweening'] = !0x0;
            ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['woodSlide']);
            new ig['TweenDef'](this['pos'])['to']({
                'y': 0x0
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Bounce']['EaseOut'])['onComplete'](function() {
                delete this['_isTweening'];
                _0x13c046 ? _0x13c046() : '';
            } ['bind'](this))['start']();
        },
        'tweenHide': function(_0x1ab5e6) {
            this['_isTweening'] = !0x0;
            ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['woodSlide']);
            new ig['TweenDef'](this['pos'])['to']({
                'y': -this['size']['y']
            }, 0x1f4)['easing'](ig['Tween']['Easing']['Linear']['EaseNone'])['onComplete'](function() {
                delete this['_isTweening'];
                _0x1ab5e6 ? _0x1ab5e6() : '';
            } ['bind'](this))['start']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.game.player')['requires']('impact.entity')['defines'](function() {
    EntityPlayer = ig['Entity']['extend']({
        'zIndex': 0x5,
        'type': ig['Entity']['TYPE']['A'],
        'PlayerUpperImage': new ig['Image']('media/graphics/sprites/bill/body-animation.png'),
        'PlayerLowerImage': new ig['Image']('media/graphics/sprites/bill/legs.png'),
        'PlayerHandImage': new ig['Image']('media/graphics/sprites/bill/hand.png'),
        'PlayerShadowImage': new ig['Image']('media/graphics/sprites/bill/shadow.png'),
        'bowUpImage': new ig['Image']('media/graphics/sprites/bill/bow_up.png'),
        'bowDownImage': new ig['Image']('media/graphics/sprites/bill/bow_down.png'),
        'bowStringUpImage': new ig['Image']('media/graphics/sprites/bill/bowstrings_up.png'),
        'bowStringDownImage': new ig['Image']('media/graphics/sprites/bill/bowstrings_down.png'),
        'trajectoryImage': new ig['Image']('media/graphics/sprites/bill/trajectory.png'),
        'init': function(_0x3c53ba, _0x37b20a, _0xe34a5) {
            this['parent'](_0x3c53ba, _0x37b20a, _0xe34a5);
            this['size'] = {
                'x': 0xd2,
                'y': this['PlayerUpperImage']['height']
            };
            this['animSheet'] = new ig['AnimationSheet'](this['PlayerUpperImage']['path'], 0xd2, this['PlayerUpperImage']['height']);
            this['addAnim']('idle', 0x1, [0x8], !0x0);
            this['addAnim']('nock', 0.12, [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6], !0x0);
            this['addAnim']('loose', 0.06, [0x6, 0x7, 0x8], !0x0);
            this['trajectory'] = ig['game']['spawnEntity'](EntityTrajectory, -0x3e7, 0x0, {});
            try {
                clearTimeout(ig['game']['menuAnimationTimeout']), delete ig['game']['menuAnimationTimeout'];
            } catch (_0x452f07) {}
        },
        'spawnNewArrow': function(_0x5517ea) {
            var _0x5128e5 = 0x0,
                _0x5c4e01 = 0x0,
                _0x5128e5 = this['pos']['x'] + this['size']['x'] / 0x2 + 0x32,
                _0x5c4e01 = this['pos']['y'] + this['size']['y'] / 0x2 - 0x3f;
            this['currentArrow'] = ig['game']['spawnEntity'](EntityArrow, _0x5128e5, _0x5c4e01, {
                '_parent': this,
                'isFireArrow': _0x5517ea
            });
            ig['game']['mainGame'] && ig['game']['mainGame']['allArrows'] && ig['game']['mainGame']['allArrows']['push'](this['currentArrow']);
        },
        'update': function() {
            this['parent']();
            'nock' === this['currentAnimName'] && this['currentArrow'] && (this['currentArrow']['radius'] = 2.5 * this['currentAnim']['frame']);
            if ('nock' === this['currentAnimName'] && !this['disableTrajectory']) {
                var _0x3f93bd = radianToDegrees(this['currentAnim']['angle']),
                    _0x3f93bd = POINT_XY_ANGLE(this['size']['x'] / 0x2 + 0.4 * this['trajectory']['size']['x'], 0x5c - _0x3f93bd);
                this['trajectory']['pos'] = {
                    'x': this['pos']['x'] + this['size']['x'] / 0x2 + _0x3f93bd['x'] - 0.5 * this['trajectory']['size']['x'],
                    'y': this['pos']['y'] + this['size']['y'] / 0x2 + _0x3f93bd['y'] - 0.5 * this['trajectory']['size']['y']
                };
                this['trajectory']['updateAngle'](this['currentAnim']['angle']);
            } else this['trajectory']['pos'] = {
                'x': -0x3e7,
                'y': 0x0
            };
        },
        'draw': function() {
            this['drawOtherBodyPartsBack']();
            this['parent']();
            this['drawOtherBodyPartsFront']();
        },
        'drawOtherBodyPartsBack': function() {
            var _0x3bf779 = 0x0,
                _0xc844e1 = 0x0,
                _0x3bf779 = this['pos']['x'] + this['size']['x'] / 0x2 - this['PlayerLowerImage']['width'] / 0x2 + this['PlayerLowerImage']['width'] / 0x2 - this['PlayerShadowImage']['width'] / 0x2,
                _0xc844e1 = this['pos']['y'] + this['size']['y'] / 0x2 + 0.65 * this['PlayerLowerImage']['height'] - this['PlayerShadowImage']['height'] / 0x2;
            this['PlayerShadowImage']['draw'](_0x3bf779, _0xc844e1);
            _0x3bf779 = this['pos']['x'] + this['size']['x'] / 0x2 - this['PlayerLowerImage']['width'] / 0x2 + 0x1;
            _0xc844e1 = this['pos']['y'] + this['size']['y'] / 0x2;
            this['PlayerLowerImage']['draw'](_0x3bf779 - 0.05 * this['PlayerLowerImage']['width'], _0xc844e1 - 0.32 * this['PlayerLowerImage']['height']);
        },
        'drawOtherBodyPartsFront': function() {},
        'updateAngle': function(_0x2311cf) {
            this['currentAnim']['angle'] = _0x2311cf;
            if (this['currentArrow'] && !this['currentArrow']['isLaunched']) {
                var _0x43b437 = radianToDegrees(_0x2311cf),
                    _0x43b437 = POINT_XY_ANGLE(0x54 - 0.2 * this['currentArrow']['radius'], 0x78 - _0x43b437 + 0.3 * this['currentArrow']['radius']);
                this['currentArrow']['pos'] = {
                    'x': this['pos']['x'] + this['size']['x'] / 0x2 + _0x43b437['x'] - 0.5 * this['currentArrow']['size']['x'],
                    'y': this['pos']['y'] + this['size']['y'] / 0x2 + _0x43b437['y'] - 0.1 * this['currentArrow']['size']['y']
                };
                this['currentArrow']['updateAngle'](_0x2311cf);
            }
        },
        'shoot': function() {
            this['currentArrow'] && this['currentArrow']['shoot']();
        },
        'changeAnimsTo': function(_0xbcee4d) {
            var _0x303360 = this['currentAnim']['angle'];
            this['currentAnim'] = this['anims'][_0xbcee4d];
            this['currentAnimName'] = _0xbcee4d;
            'loose' != _0xbcee4d && this['currentAnim']['rewind']();
            'nock' === _0xbcee4d && this['currentArrow'] && (this['currentArrow']['radius'] = 0x0);
            this['currentAnim']['angle'] = _0x303360;
        },
        'onMenuAnimation': function() {
            var _0x11430d = parseInt(0x14 * Math['random']());
            ig['game']['menuAnimationTimeout'] = !0x0;
            new ig['TweenDef'](this['currentAnim'])['to']({
                'angle': -degreesToRadians(_0x11430d)
            }, 0x1f4)['easing'](ig['Tween']['Easing']['Linear']['EaseNone'])['onComplete'](function() {
                if (ig['game']['menuAnimationTimeout']) {
                    this['spawnNewArrow']();
                    ig['game']['sortEntities']();
                    if (this['currentArrow'] && !this['currentArrow']['isLaunched']) {
                        var _0x2704a1 = radianToDegrees(this['currentAnim']['angle']),
                            _0x2704a1 = POINT_XY_ANGLE(0x54 - 0.2 * this['currentArrow']['radius'], 0x78 - _0x2704a1 + 0.3 * this['currentArrow']['radius']);
                        this['currentArrow']['pos'] = {
                            'x': this['pos']['x'] + this['size']['x'] / 0x2 + _0x2704a1['x'] - 0.5 * this['currentArrow']['size']['x'],
                            'y': this['pos']['y'] + this['size']['y'] / 0x2 + _0x2704a1['y'] - 0.1 * this['currentArrow']['size']['y']
                        };
                        this['currentArrow']['updateAngle'](this['currentAnim']['angle']);
                    }
                    ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['arrowNock']);
                    this['changeAnimsTo']('nock');
                    ig['game']['menuAnimationTimeout'] = setTimeout(function() {
                        ig['game']['menuAnimationTimeout'] && (ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['arrowLoose']), this['changeAnimsTo']('loose'), this['shoot'](), ig['game']['menuAnimationTimeout'] = setTimeout(function() {
                            if (ig['game']['menuAnimationTimeout']) this['onMenuAnimation']();
                        } ['bind'](this), 0x708));
                    } ['bind'](this), 0x12c);
                }
            } ['bind'](this))['start']();
        }
    });
});

function radianToDegrees(_0x5715a0) {
    return _0x5715a0 * (0xb4 / Math['PI']);
}

function degreesToRadians(_0x393be3) {
    return _0x393be3 * (Math['PI'] / 0xb4);
}

function POINT_XY_ANGLE(_0x4f011f, _0x5f4e0d) {
    return {
        'x': _0x4f011f * Math['sin'](0x2 * Math['PI'] * _0x5f4e0d / 0x168),
        'y': _0x4f011f * Math['cos'](0x2 * Math['PI'] * _0x5f4e0d / 0x168)
    };
}
ig['baked'] = !0x0;
ig['module']('game.entities.game.volume-slider')['requires']('impact.entity', 'game.entities.buttons.button')['defines'](function() {
    EntityVolumeSlider = EntityButton['extend']({
        'size': {
            'x': 0xae,
            'y': 0x12
        },
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/slider.png', 0xae, 0x12),
        'sliderImage': new ig['Image']('media/graphics/sprites/apple.png'),
        'sfxImage': new ig['Image']('media/graphics/sprites/sfx-icon.png'),
        'bgmImage': new ig['Image']('media/graphics/sprites/bgm-icon.png'),
        'value': 0x1,
        'init': function(_0x5deb43, _0x133d2d, _0x4e5af6) {
            this['parent'](_0x5deb43, _0x133d2d, _0x4e5af6);
            this['addAnim']('idle', 0x1, [0x0]);
            this['_parent'] && (this['zIndex'] = this['_parent']['zIndex'] + 0xa);
            _0x5deb43 = ig['game']['io']['storage']['get']('fruit-salad-bow-sfxVolume') || 0x1;
            _0x133d2d = ig['game']['io']['storage']['get']('fruit-salad-bow-bgmVolume') || 0x1;
            this['value'] = this['isBgm'] ? _0x133d2d : _0x5deb43;
        },
        'clicking': function() {
            var _0x12e8e8 = ig['game']['io']['getClickPos']()['x'],
                _0x357551 = ig['game']['io']['getClickPos']()['y'];
            _0x12e8e8 >= this['pos']['x'] && _0x12e8e8 <= this['pos']['x'] + this['size']['x'] && (_0x357551 >= this['pos']['y'] && _0x357551 <= this['pos']['y'] + this['size']['y']) && (this['value'] = (_0x12e8e8 - this['pos']['x']) / this['size']['x']);
        },
        'released': function() {
            this['isBgm'] || ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['arrowHit1']);
        },
        'clicked': function() {
            this['isBgm'] || ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['arrowNock']);
        },
        'update': function() {
            this['parent']();
            var _0x23a0ff = Math['round'](0x64 * this['value']) / 0x64;
            0.1 > _0x23a0ff && (_0x23a0ff = 0.000001);
            this['isBgm'] ? (ig['game']['io']['storage']['set']('fruit-salad-bow-bgmVolume', _0x23a0ff), ig['soundHandler']['bgmPlayer']['volume'](_0x23a0ff)) : (ig['game']['io']['storage']['set']('fruit-salad-bow-sfxVolume', _0x23a0ff), ig['soundHandler']['sfxPlayer']['volume'](_0x23a0ff));
        },
        'draw': function() {
            this['parent']();
            var _0x140cb0 = 0x0,
                _0x1c0cde = 0x0,
                _0x140cb0 = this['pos']['x'] + 0.9 * this['size']['x'] * this['value'] - this['sliderImage']['width'] / 0x2,
                _0x1c0cde = this['pos']['y'] - 0.4 * this['sliderImage']['height'];
            this['sliderImage']['draw'](_0x140cb0, _0x1c0cde);
            _0x140cb0 = this['pos']['x'] - 1.3 * this['bgmImage']['width'];
            _0x1c0cde = this['pos']['y'];
            this['isBgm'] ? this['bgmImage']['draw'](_0x140cb0, _0x1c0cde - this['bgmImage']['height'] / 0x2) : this['sfxImage']['draw'](_0x140cb0 - 0x5, _0x1c0cde + this['size']['y'] / 0x2 - this['sfxImage']['height'] / 0x2);
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.game.character')['requires']('impact.entity')['defines'](function() {
    EntityCharacter = ig['Entity']['extend']({
        'zIndex': 0x9,
        'type': ig['Entity']['TYPE']['A'],
        'showHitBoxes': !0x1,
        'hitBoxes': [],
        'characterImages': [new ig['Image']('media/graphics/sprites/friendlies/jester.png'), new ig['Image']('media/graphics/sprites/friendlies/merchant.png'), new ig['Image']('media/graphics/sprites/friendlies/merlin.png'), new ig['Image']('media/graphics/sprites/friendlies/monk.png'), new ig['Image']('media/graphics/sprites/friendlies/peasant_boy.png'), new ig['Image']('media/graphics/sprites/friendlies/princess.png'), new ig['Image']('media/graphics/sprites/friendlies/squire.png')],
        'characterOuchImages': [new ig['Image']('media/graphics/sprites/friendlies/jester_2.png'), new ig['Image']('media/graphics/sprites/friendlies/merchant_2.png'), new ig['Image']('media/graphics/sprites/friendlies/merlin_2.png'), new ig['Image']('media/graphics/sprites/friendlies/monk_2.png'), new ig['Image']('media/graphics/sprites/friendlies/peasant_boy_2.png'), new ig['Image']('media/graphics/sprites/friendlies/princess_2.png'), new ig['Image']('media/graphics/sprites/friendlies/squire_2.png')],
        'rockImage': new ig['Image']('media/graphics/sprites/friendlies/jester_2.png'),
        'extRockImage': new ig['Image']('media/graphics/sprites/friendlies/jester_2.png'),
        'init': function(_0x1ec4c1, _0x93b9d7, _0x5313e0) {
            this['parent'](_0x1ec4c1, _0x93b9d7, _0x5313e0);
            if (this['characterName']) switch (this['characterName']) {
                case 'peasant_boy':
                    this['charIdleImage'] = this['characterImages'][0x4];
                    this['charOuchImage'] = this['characterOuchImages'][0x4];
                    break;
                case 'jester':
                    this['charIdleImage'] = this['characterImages'][0x0];
                    this['charOuchImage'] = this['characterOuchImages'][0x0];
                    break;
                case 'merchant':
                    this['charIdleImage'] = this['characterImages'][0x1];
                    this['charOuchImage'] = this['characterOuchImages'][0x1];
                    break;
                case 'merlin':
                    this['charIdleImage'] = this['characterImages'][0x2];
                    this['charOuchImage'] = this['characterOuchImages'][0x2];
                    break;
                case 'monk':
                    this['charIdleImage'] = this['characterImages'][0x3];
                    this['charOuchImage'] = this['characterOuchImages'][0x3];
                    break;
                case 'princess':
                    this['charIdleImage'] = this['characterImages'][0x5];
                    this['charOuchImage'] = this['characterOuchImages'][0x5];
                    break;
                case 'squire':
                    this['charIdleImage'] = this['characterImages'][0x6], this['charOuchImage'] = this['characterOuchImages'][0x6];
            } else {
                _0x1ec4c1 = parseInt(Math['random']() * this['characterImages']['length']);
                switch (_0x1ec4c1) {
                    case 0x0:
                        this['characterName'] = 'jester';
                        break;
                    case 0x1:
                        this['characterName'] = 'merchant';
                        break;
                    case 0x2:
                        this['characterName'] = 'merlin';
                        break;
                    case 0x3:
                        this['characterName'] = 'monk';
                        break;
                    case 0x5:
                        this['characterName'] = 'princess';
                        break;
                    case 0x6:
                        this['characterName'] = 'squire';
                        break;
                    default:
                        this['characterName'] = 'peasant_boy', _0x1ec4c1 = 0x4;
                }
                this['charIdleImage'] = this['characterImages'][_0x1ec4c1];
                this['charOuchImage'] = this['characterOuchImages'][_0x1ec4c1];
            }
            if (_0x1ec4c1 = _GAME_CONFIGURATION['friendlies'][this['characterName']]) this['hitBoxes'] = _0x1ec4c1['hitBoxes'] ? _0x1ec4c1['hitBoxes']['slice']() : [], this['fruitPosAdjust'] = _0x1ec4c1['fruitPos'], this['charOuchSound'] = _0x1ec4c1['ouchSound'];
            this['switchImageTo'](this['charIdleImage']);
            this['pos'] = {
                'x': this['dockPos']['x'] - this['size']['x'] / 0x2,
                'y': this['dockPos']['y'] - this['size']['y']
            };
            this['onRock'] && this['level'] && (this['dockPos']['y'] -= 0x23, this['stone'] = ig['game']['spawnEntity'](EntityStone, -0x3e7, 0x0, {
                'character': this,
                'level': this['level']
            }), this['stone']['pos'] = {
                'x': this['dockPos']['x'] - 0.37 * this['stone']['stoneBodyImage']['width'],
                'y': this['dockPos']['y'] - 0.3 * this['stone']['stoneBodyImage']['height']
            }, this['pos'] = {
                'x': this['stone']['pos']['x'] + this['stone']['stoneBodyImage']['width'] / 0x2 - this['size']['x'] / 0x2 - this['stone']['headPos']['x'],
                'y': this['stone']['pos']['y'] - this['size']['y'] - 0.5 * this['stone']['stoneHeadImage']['height'] - this['stone']['headPos']['y']
            });
            this['fruit'] = ig['game']['spawnEntity'](EntityFruit, 0x0, 0x0, {
                'fruitName': this['fruitName']
            });
            this['updateFruitPosition']();
        },
        'switchImageTo': function(_0x372ced) {
            this['size'] = {
                'x': _0x372ced['width'],
                'y': _0x372ced['height']
            };
            this['currentImage'] = _0x372ced;
        },
        'update': function() {
            this['parent']();
        },
        'draw': function() {
            this['parent']();
            var _0xe352d1 = ig['system']['context'],
                _0x2da3f9 = 0x0,
                _0x422c21 = 0x0;
            _0xe352d1['save']();
            this['currentImage'] && (_0x2da3f9 = this['pos']['x'], _0x422c21 = this['pos']['y'], this['currentImage']['draw'](_0x2da3f9, _0x422c21));
            if (this['showHitBoxes'])
                for (var _0x51c3cc in this['hitBoxes']) {
                    var _0xb4a20b = this['hitBoxes'][_0x51c3cc],
                        _0x2da3f9 = this['pos']['x'] + _0xb4a20b['x1'],
                        _0x422c21 = this['pos']['y'] + _0xb4a20b['y1'];
                    _0xe352d1['strokeStyle'] = 'yellow';
                    _0xe352d1['beginPath']();
                    _0xe352d1['moveTo'](_0x2da3f9, _0x422c21);
                    _0xe352d1['lineTo'](_0x2da3f9 + _0xb4a20b['x2'], _0x422c21);
                    _0xe352d1['lineTo'](_0x2da3f9 + _0xb4a20b['x2'], _0x422c21 + _0xb4a20b['y2']);
                    _0xe352d1['lineTo'](_0x2da3f9, _0x422c21 + _0xb4a20b['y2']);
                    _0xe352d1['lineTo'](_0x2da3f9, _0x422c21);
                    _0xe352d1['stroke']();
                }
            _0xe352d1['restore']();
        },
        'updatePosition': function(_0x25adc4) {
            this['pos'] = _0x25adc4;
            this['fruit']['isHitted'] || this['updateFruitPosition']();
        },
        'updateFruitPosition': function() {
            this['fruit']['pos'] = {
                'x': this['pos']['x'] + this['size']['x'] / 0x2 - this['fruit']['size']['x'] / 0x2 + this['fruitPosAdjust']['x'],
                'y': this['pos']['y'] - this['fruit']['size']['y'] + 0xa + this['fruitPosAdjust']['y']
            };
        },
        'killAll': function() {
            this['fruit'] && this['fruit']['kill']();
            this['stone'] && this['stone']['kill']();
            this['kill']();
        },
        'charOuch': function() {
            ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList'][this['charOuchSound']]);
            this['switchImageTo'](this['charOuchImage']);
            setTimeout(function() {
                this['switchImageTo'](this['charIdleImage']);
            } ['bind'](this), 0x2bc);
        },
        'hitByArrow': function(_0x37a8c3) {
            for (var _0x5084aa in this['hitBoxes']) {
                var _0x43459f = this['hitBoxes'][_0x5084aa];
                posX = this['pos']['x'] + _0x43459f['x1'];
                posY = this['pos']['y'] + _0x43459f['y1'];
                if (_0x37a8c3['x'] >= posX && _0x37a8c3['x'] <= posX + _0x43459f['x2'] && _0x37a8c3['y'] >= posY && _0x37a8c3['y'] <= posY + _0x43459f['y2']) return !0x0;
            }
            return !0x1;
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.game.fruit')['requires']('impact.entity')['defines'](function() {
    EntityFruit = ig['Entity']['extend']({
        'zIndex': 0xa,
        'type': ig['Entity']['TYPE']['A'],
        'showHitBoxes': !0x1,
        'hitBoxes': [],
        'HIT_CENTER_HEIGHT': 0xa,
        'HIT_SIDE_HEIGHT': 0xd,
        'fruitImages': [new ig['Image']('media/graphics/sprites/fruits/apple.png'), new ig['Image']('media/graphics/sprites/fruits/cherries.png'), new ig['Image']('media/graphics/sprites/fruits/grapes.png'), new ig['Image']('media/graphics/sprites/fruits/lemon.png'), new ig['Image']('media/graphics/sprites/fruits/pear.png'), new ig['Image']('media/graphics/sprites/fruits/pomegranate.png'), new ig['Image']('media/graphics/sprites/fruits/raspberry.png')],
        'fruitSliceImages': [new ig['Image']('media/graphics/sprites/fruits/apple_2.png'), new ig['Image']('media/graphics/sprites/fruits/cherries_2.png'), new ig['Image']('media/graphics/sprites/fruits/grapes_2.png'), new ig['Image']('media/graphics/sprites/fruits/lemon_2.png'), new ig['Image']('media/graphics/sprites/fruits/pear_2.png'), new ig['Image']('media/graphics/sprites/fruits/pomegranate_2.png'), new ig['Image']('media/graphics/sprites/fruits/raspberry_2.png')],
        'init': function(_0xaafd36, _0x56a526, _0xd04c81) {
            this['parent'](_0xaafd36, _0x56a526, _0xd04c81);
            this['fruitName'] || (_0xaafd36 = 'apple\x20cherries\x20grapes\x20lemon\x20pear\x20pomegranate\x20raspberry' ['split']('\x20'), _0x56a526 = parseInt(Math['random']() * _0xaafd36['length']), this['fruitName'] = _0xaafd36[_0x56a526]);
            switch (this['fruitName']) {
                case 'apple':
                    this['fruitIdleImage'] = this['fruitImages'][0x0];
                    this['fruitSplitImage'] = this['fruitSliceImages'][0x0];
                    break;
                case 'cherries':
                    this['fruitIdleImage'] = this['fruitImages'][0x1];
                    this['fruitSplitImage'] = this['fruitSliceImages'][0x1];
                    break;
                case 'grapes':
                    this['fruitIdleImage'] = this['fruitImages'][0x2];
                    this['fruitSplitImage'] = this['fruitSliceImages'][0x2];
                    break;
                case 'lemon':
                    this['fruitIdleImage'] = this['fruitImages'][0x3];
                    this['fruitSplitImage'] = this['fruitSliceImages'][0x3];
                    break;
                case 'pear':
                    this['fruitIdleImage'] = this['fruitImages'][0x4];
                    this['fruitSplitImage'] = this['fruitSliceImages'][0x4];
                    break;
                case 'pomegranate':
                    this['fruitIdleImage'] = this['fruitImages'][0x5];
                    this['fruitSplitImage'] = this['fruitSliceImages'][0x5];
                    break;
                case 'raspberry':
                    this['fruitIdleImage'] = this['fruitImages'][0x6], this['fruitSplitImage'] = this['fruitSliceImages'][0x6];
            }
            this['switchImageTo'](this['fruitIdleImage']);
            _0xaafd36 = _GAME_CONFIGURATION['fruits'][this['fruitName']];
            _0x56a526 = this['fruitIdleImage']['height'] * _0xaafd36['midY'];
            _0xd04c81 = _0xaafd36['midHeight'] || this['HIT_CENTER_HEIGHT'];
            var _0x20d414 = _0xaafd36['topHeight'] || this['HIT_SIDE_HEIGHT'];
            bottomTopHeight = _0xaafd36['bottomHeight'] || this['HIT_SIDE_HEIGHT'];
            this['hitBoxes'][0x0] = {
                'x1': this['pos']['x'],
                'x2': this['fruitIdleImage']['width'],
                'y1': this['pos']['y'] + _0x56a526 - 0.5 * _0xd04c81,
                'y2': _0xd04c81
            };
            this['hitBoxes'][0x1] = {
                'x1': this['pos']['x'],
                'x2': this['fruitIdleImage']['width'],
                'y1': this['pos']['y'] + _0x56a526 - 0.5 * _0xd04c81 - _0x20d414,
                'y2': _0x20d414
            };
            this['hitBoxes'][0x2] = {
                'x1': this['pos']['x'],
                'x2': this['fruitIdleImage']['width'],
                'y1': this['pos']['y'] + _0x56a526 + 0.5 * _0xd04c81,
                'y2': bottomTopHeight
            };
        },
        'switchImageTo': function(_0x19c0d6) {
            this['size'] = {
                'x': _0x19c0d6['width'],
                'y': _0x19c0d6['height']
            };
            this['currentImage'] = _0x19c0d6;
        },
        'arrowHit': function(_0x48cff8) {
            this['isAlreadyHitted'] || (this['isAlreadyHitted'] = !0x0, ig['game']['mainGame']['isFireArrow'] && (ig['game']['spawnEntity'](EntityProgressBar, this['pos']['x'], this['pos']['y'], {}), this['switchImageTo'](this['fruitSplitImage'])), this['tweenToRight'](_0x48cff8));
        },
        'tweenToRight': function(_0x49b791) {
            new ig['TweenDef'](this['pos'])['to']({
                'x': this['pos']['x'] + _0x49b791['x'],
                'y': this['pos']['y'] + _0x49b791['y']
            }, 0x3e8)['easing'](ig['Tween']['Easing']['Linear']['EaseNone'])['onComplete'](function() {
                this['kill']();
            } ['bind'](this))['start']();
        },
        'update': function() {
            this['parent']();
        },
        'draw': function() {
            this['parent']();
            this['currentImage'] && this['currentImage']['draw'](this['pos']['x'], this['pos']['y']);
            this['parent']();
            var _0x3f72c8 = ig['system']['context'],
                _0x4503e8 = 0x0,
                _0x355abe = 0x0;
            _0x3f72c8['save']();
            if (this['showHitBoxes'])
                for (var _0x5c31d0 in this['hitBoxes']) {
                    var _0x4ded52 = this['hitBoxes'][_0x5c31d0],
                        _0x4503e8 = this['pos']['x'] + _0x4ded52['x1'],
                        _0x355abe = this['pos']['y'] + _0x4ded52['y1'];
                    _0x3f72c8['strokeStyle'] = 'yellow';
                    _0x3f72c8['beginPath']();
                    _0x3f72c8['moveTo'](_0x4503e8, _0x355abe);
                    _0x3f72c8['lineTo'](_0x4503e8 + _0x4ded52['x2'], _0x355abe);
                    _0x3f72c8['lineTo'](_0x4503e8 + _0x4ded52['x2'], _0x355abe + _0x4ded52['y2']);
                    _0x3f72c8['lineTo'](_0x4503e8, _0x355abe + _0x4ded52['y2']);
                    _0x3f72c8['lineTo'](_0x4503e8, _0x355abe);
                    _0x3f72c8['stroke']();
                }
            _0x3f72c8['restore']();
        },
        'hitByArrow': function(_0x174eb7) {
            if (!this['isHitted']) {
                var _0x401d27 = this['hitBoxes'][0x0];
                posX = this['pos']['x'] + _0x401d27['x1'];
                posY = this['pos']['y'] + _0x401d27['y1'];
                if (_0x174eb7['x'] >= posX && _0x174eb7['x'] <= posX + _0x401d27['x2'] && _0x174eb7['y'] >= posY && _0x174eb7['y'] <= posY + _0x401d27['y2']) return ig['game']['mainGame']['scoreFruitHit'](!0x0, _0x174eb7), this['isHitted'] = this['isSliced'] = !0x0;
                _0x401d27 = this['hitBoxes'][0x1];
                posX = this['pos']['x'] + _0x401d27['x1'];
                posY = this['pos']['y'] + _0x401d27['y1'];
                if (_0x174eb7['x'] >= posX && _0x174eb7['x'] <= posX + _0x401d27['x2'] && _0x174eb7['y'] >= posY && _0x174eb7['y'] <= posY + _0x401d27['y2']) return ig['game']['mainGame']['scoreFruitHit'](null, _0x174eb7), this['isHitted'] = !0x0;
                _0x401d27 = this['hitBoxes'][0x2];
                posX = this['pos']['x'] + _0x401d27['x1'];
                posY = this['pos']['y'] + _0x401d27['y1'];
                return _0x174eb7['x'] >= posX && _0x174eb7['x'] <= posX + _0x401d27['x2'] && _0x174eb7['y'] >= posY && _0x174eb7['y'] <= posY + _0x401d27['y2'] ? (ig['game']['mainGame']['scoreFruitHit'](null, _0x174eb7), this['isHitted'] = !0x0) : !0x1;
            }
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.game.stone')['requires']('impact.entity')['defines'](function() {
    EntityStone = ig['Entity']['extend']({
        'zIndex': 0x6,
        'type': ig['Entity']['TYPE']['A'],
        'showHitBoxes': !0x1,
        'hitBoxes': [],
        'arrowToMove': [],
        'character': null,
        'headPos': {
            'x': 0x0,
            'y': 0x0
        },
        'isMoving': !0x1,
        'moveSpeed': 0.92,
        'minHeightOnMove': 0x0,
        'maxHeightOnMove': 0x0,
        'MIN_MOVE_SPEED': 0.22,
        'MAX_MOVE_SPEED': 3.2,
        'STONE_MIN_MOVE_DISTANCE': 0x32,
        'STONE_MAX_HEIGHT': 0xb4,
        'stoneHeadImage': new ig['Image']('media/graphics/sprites/stone/stone_head.png'),
        'stoneBodyImage': new ig['Image']('media/graphics/sprites/stone/stone_body.png'),
        'extStoneImage': new ig['Image']('media/graphics/sprites/stone/stone_stretchy.png'),
        'init': function(_0x2b10e5, _0x24b177, _0x34670f) {
            this['parent'](_0x2b10e5, _0x24b177, _0x34670f);
            0x5 <= this['level'] && (this['isMoving'] = !0x0, _0x2b10e5 = this['STONE_MAX_HEIGHT'] - this['STONE_MIN_MOVE_DISTANCE'], _0x24b177 = this['STONE_MIN_MOVE_DISTANCE'] * this['level'], this['maxHeightOnMove'] = parseInt(Math['random']() * _0x2b10e5) + this['STONE_MIN_MOVE_DISTANCE'], _0x2b10e5 = this['maxHeightOnMove'] - _0x24b177, this['minHeightOnMove'] = parseInt(Math['random']() * _0x2b10e5) + this['STONE_MIN_MOVE_DISTANCE'], _0x2b10e5 = this['MIN_MOVE_SPEED'] * this['level'], _0x2b10e5 > this['MAX_MOVE_SPEED'] && (_0x2b10e5 = this['MAX_MOVE_SPEED']), this['moveSpeed'] = _0x2b10e5, this['minHeightOnMove'] = 0x0, this['headPos']['y'] = this['minHeightOnMove']);
            this['hitBoxes'][0x0] = {
                'x1': this['pos']['x'] + 0.28 * this['stoneBodyImage']['width'],
                'y1': this['pos']['y'],
                'x2': 0.45 * this['stoneBodyImage']['width'],
                'y2': 0.7 * this['stoneBodyImage']['height']
            };
            this['hitBoxes'][0x1] = {
                'x1': this['pos']['x'] + 0.23 * this['stoneBodyImage']['width'],
                'y1': this['pos']['y'] + 0.2 * this['stoneBodyImage']['height'],
                'x2': 0.6 * this['stoneBodyImage']['width'],
                'y2': 0.5 * this['stoneBodyImage']['height']
            };
        },
        'update': function() {
            this['parent']();
            this['character'] && this['character']['updatePosition']({
                'x': this['pos']['x'] + this['stoneBodyImage']['width'] / 0x2 - this['character']['size']['x'] / 0x2 - this['headPos']['x'],
                'y': this['pos']['y'] - this['character']['size']['y'] - 0.5 * this['stoneHeadImage']['height'] - this['headPos']['y']
            });
            if (this['isMoving'] && !ig['game']['mainGame']['gameIsPause']) {
                null == this['isMovingUp'] && (this['isMovingUp'] = !0x0);
                this['isMovingUp'] ? this['headPos']['y'] < this['maxHeightOnMove'] ? this['headPos']['y'] += this['moveSpeed'] : this['isMovingUp'] = !0x1 : this['headPos']['y'] > this['minHeightOnMove'] ? this['headPos']['y'] -= this['moveSpeed'] : this['isMovingUp'] = !0x0;
                this['hitBoxes'][0x2] = {
                    'x1': this['headPos']['x'] + 0.6 * this['stoneHeadImage']['width'],
                    'y1': -this['headPos']['y'] - 0.6 * this['stoneHeadImage']['height'],
                    'x2': this['stoneHeadImage']['width'],
                    'y2': this['headPos']['y'] + 0.7 * this['stoneHeadImage']['height']
                };
                for (var _0x2b656a = 0x0; _0x2b656a < this['arrowToMove']['length']; _0x2b656a++) {
                    var _0x256971 = this['arrowToMove'][_0x2b656a];
                    _0x256971['arrow']['pos'] = {
                        'x': _0x256971['orgPos']['x'] + (_0x256971['headPos']['x'] - this['headPos']['x']),
                        'y': _0x256971['orgPos']['y'] + (_0x256971['headPos']['y'] - this['headPos']['y'])
                    };
                }
            }
        },
        'draw': function() {
            this['parent']();
            var _0x418efc = ig['system']['context'],
                _0x3a2633 = 0x0,
                _0x42c99b = 0x0;
            _0x418efc['save']();
            this['stoneBodyImage']['draw'](this['pos']['x'] + 0.01 * this['stoneBodyImage']['width'], this['pos']['y']);
            for (var _0xe845ca = 0x0; _0xe845ca < this['headPos']['y']; _0xe845ca++) this['extStoneImage']['draw'](this['pos']['x'] + 0.58 * this['stoneHeadImage']['width'], this['pos']['y'] - _0xe845ca);
            _0x3a2633 = this['pos']['x'] - this['headPos']['x'] + 0.575 * this['stoneHeadImage']['width'];
            _0x42c99b = this['pos']['y'] - this['headPos']['y'] - 0.9 * this['stoneHeadImage']['height'];
            this['stoneHeadImage']['draw'](_0x3a2633, _0x42c99b);
            if (this['showHitBoxes'])
                for (_0xe845ca in this['hitBoxes']) {
                    var _0x4a9abc = this['hitBoxes'][_0xe845ca],
                        _0x3a2633 = this['pos']['x'] + _0x4a9abc['x1'],
                        _0x42c99b = this['pos']['y'] + _0x4a9abc['y1'];
                    _0x418efc['strokeStyle'] = 'yellow';
                    _0x418efc['beginPath']();
                    _0x418efc['moveTo'](_0x3a2633, _0x42c99b);
                    _0x418efc['lineTo'](_0x3a2633 + _0x4a9abc['x2'], _0x42c99b);
                    _0x418efc['lineTo'](_0x3a2633 + _0x4a9abc['x2'], _0x42c99b + _0x4a9abc['y2']);
                    _0x418efc['lineTo'](_0x3a2633, _0x42c99b + _0x4a9abc['y2']);
                    _0x418efc['lineTo'](_0x3a2633, _0x42c99b);
                    _0x418efc['stroke']();
                }
            _0x418efc['restore']();
        },
        'addArrowMove': function(_0x28ef6d) {
            this['arrowToMove']['push']({
                'arrow': _0x28ef6d,
                'orgPos': {
                    'x': _0x28ef6d['pos']['x'],
                    'y': _0x28ef6d['pos']['y']
                },
                'headPos': {
                    'x': this['headPos']['x'],
                    'y': this['headPos']['y']
                }
            });
        },
        'hitByArrow': function(_0xabacc) {
            for (var _0x19ab32 in this['hitBoxes']) {
                var _0x473335 = this['hitBoxes'][_0x19ab32];
                posX = this['pos']['x'] + _0x473335['x1'];
                posY = this['pos']['y'] + _0x473335['y1'];
                if (_0xabacc['x'] >= posX && _0xabacc['x'] <= posX + _0x473335['x2'] && _0xabacc['y'] >= posY && _0xabacc['y'] <= posY + _0x473335['y2']) return !0x0;
            }
            return !0x1;
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.game.flag')['requires']('impact.entity')['defines'](function() {
    var _0x54cd69 = 0x0,
        _0x3afb13 = 0x0;
    EntityFlag = ig['Entity']['extend']({
        'zIndex': 0xa,
        'flagImage': new ig['Image']('media/graphics/sprites/flag.png'),
        'text1': '',
        'test2': '',
        'init': function(_0x15ac92, _0x168001, _0x466832) {
            this['parent'](_0x15ac92, _0x168001, _0x466832);
            _0x54cd69 = ig['system']['realWidth'];
            _0x3afb13 = ig['system']['realHeight'];
            this['size'] = {
                'x': this['flagImage']['width'],
                'y': this['flagImage']['height']
            };
        },
        'update': function() {},
        'draw': function() {
            this['parent']();
            var _0x5b2b8f = ig['system']['context'],
                _0x2ad598 = _GAME_CONFIGURATION['fontStyles'][0x0],
                _0x2e9bb7 = _GAME_CONFIGURATION['fontStyles'][0x1],
                _0x4d9f59 = 0x0,
                _0x3ba4ab = 0x0;
            _0x5b2b8f['save']();
            _0x5b2b8f['globalAlpha'] = this['opacity'];
            this['flagImage']['draw'](this['pos']['x'], this['pos']['y']);
            _0x4d9f59 = this['pos']['x'] + this['size']['x'] / 0x2 + 0xa;
            _0x3ba4ab = this['pos']['y'] + this['size']['y'] / 0x2 + 0x11;
            _0x5b2b8f['textAlign'] = 'center';
            _0x5b2b8f['font'] = '55px\x20' + _0x2ad598;
            _0x5b2b8f['fillStyle'] = '#fff';
            _0x5b2b8f['fillText'](this['text1'], _0x4d9f59, _0x3ba4ab);
            _0x4d9f59 = this['pos']['x'] + this['size']['x'] / 0x2;
            _0x3ba4ab = this['pos']['y'] + this['size']['y'] / 0x2 + 0x5a;
            _0x5b2b8f['font'] = '65px\x20' + _0x2e9bb7;
            _0x5b2b8f['strokeStyle'] = 'black';
            _0x5b2b8f['lineWidth'] = 0x6;
            _0x5b2b8f['strokeText'](this['text2'], _0x4d9f59, _0x3ba4ab);
            _0x5b2b8f['fillStyle'] = '#fff';
            _0x5b2b8f['fillText'](this['text2'], _0x4d9f59, _0x3ba4ab);
            _0x5b2b8f['restore']();
        },
        'showWithText': function(_0x3b8701) {
            _0x3b8701 = _0x3b8701 || {};
            _0x3b8701['text'] = _0x3b8701['text'] || '';
            _0x3b8701['text2'] = _0x3b8701['text2'] || '';
            _0x3b8701['seconds'] = _0x3b8701['seconds'] || 0xbb8;
            this['text1'] = _0x3b8701['text'];
            this['text2'] = _0x3b8701['text2'];
            this['pos'] = {
                'x': _0x54cd69 / 0x2 - this['flagImage']['width'] / 0x2,
                'y': _0x3afb13 / 0x2 - this['flagImage']['height'] / 0x2 - 0x50
            };
            this['opacity'] = 0x0;
            new ig['TweenDef'](this)['to']({
                'opacity': 0x1
            }, 0xc8)['easing'](ig['Tween']['Easing']['Linear']['EaseNone'])['start']();
            new ig['TweenDef'](this['pos'])['to']({
                'y': this['pos']['y'] + 0x14
            }, _0x3b8701['seconds'])['easing'](ig['Tween']['Easing']['Linear']['EaseNone'])['onComplete'](function() {
                this['pos'] = {
                    'y': -_0x3afb13
                };
                _0x3b8701['callback'] ? _0x3b8701['callback']() : '';
            } ['bind'](this))['start']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.game.bar')['requires']('impact.entity')['defines'](function() {
    EntityProgressBar = ig['Entity']['extend']({
        'zIndex': 0xa,
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/progress_bar_large.png', 0x8, 0x23),
        'init': function(_0x3a2e38, _0x3c2717, _0x4681d9) {
            this['parent'](_0x3a2e38, _0x3c2717, _0x4681d9);
            this['size'] = {
                'x': this['animSheet']['width'],
                'y': this['animSheet']['height']
            };
            this['addAnim']('idle', 0x1, [0x0]);
            this['tweenToScoreBoard']();
        },
        'update': function() {},
        'draw': function() {
            this['parent']();
        },
        'tweenToScoreBoard': function() {
            var _0x2c08e1 = ig['game']['mainGame']['otherEntities']['score-board'];
            if (_0x2c08e1 && 0x5 > ig['game']['mainGame']['playerCurrentFireArrowHit']) {
                var _0x272ca5 = ig['game']['mainGame']['playerCurrentFireArrowHit'] / ig['game']['mainGame']['BONUS_QUIVER_ACTIVATION_FIRE_HIT_COUNT'],
                    _0x272ca5 = 0x58 * _0x272ca5;
                0x58 < _0x272ca5 && (_0x272ca5 = 0x58);
                new ig['TweenDef'](this['pos'])['to']({
                    'x': _0x2c08e1['pos']['x'] + _0x2c08e1['size']['x'] / 0x2 + 0x87 + _0x272ca5,
                    'y': _0x2c08e1['pos']['y'] + _0x2c08e1['size']['y'] / 0x2
                }, 0x12c)['easing'](ig['Tween']['Easing']['Cubic']['EaseInOut'])['onComplete'](function() {
                    this['kill']();
                    ig['game']['mainGame']['accumulateFireArrowHit']();
                } ['bind'](this))['start']();
            } else this['kill']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.game.trajectory')['requires']('impact.entity')['defines'](function() {
    EntityTrajectory = ig['Entity']['extend']({
        'zIndex': 0xa,
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/bill/trajectory.png', 0x161, 0x44),
        'init': function(_0x379d60, _0x3b8914, _0x36a0ed) {
            this['parent'](_0x379d60, _0x3b8914, _0x36a0ed);
            this['size'] = {
                'x': this['animSheet']['width'],
                'y': this['animSheet']['height']
            };
            this['addAnim']('idle', 0x1, [0x0]);
        },
        'update': function() {},
        'updateAngle': function(_0x435681) {
            this['currentAnim']['angle'] = _0x435681;
        },
        'draw': function() {
            this['parent']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.game.message-display')['requires']('impact.entity')['defines'](function() {
    EntityMessageDisplay = ig['Entity']['extend']({
        'zIndex': 0xc,
        'init': function(_0x2c842a, _0x10366c, _0x5d3825) {
            this['parent'](_0x2c842a, _0x10366c, _0x5d3825);
        },
        'update': function() {},
        'displayMsg': function(_0x1bea41, _0x3c649e) {
            this['showFruitHitScore'] = {
                'message': _0x1bea41,
                'pos': _0x3c649e
            };
            setTimeout(function() {
                delete this['showFruitHitScore'];
            } ['bind'](this), ig['game']['mainGame']['FRUIT_HIT_SCORE_SHOW_DURATION']);
        },
        'draw': function() {
            this['parent']();
            var _0x393233 = ig['system']['context'],
                _0x2080a4 = _GAME_CONFIGURATION['fontStyles'][0x0],
                _0xe2e07a = _GAME_CONFIGURATION['fontColors'][0x0],
                _0x59ba81 = 0x0,
                _0x1da08a = 0x0;
            _0x393233['save']();
            this['showFruitHitScore'] && (_0x59ba81 = this['showFruitHitScore']['pos']['x'], _0x1da08a = this['showFruitHitScore']['pos']['y'] - 0x14, _0x393233['textAlign'] = 'center', _0x393233['font'] = '40px\x20' + _0x2080a4, _0x393233['fillStyle'] = _0xe2e07a, _0x393233['fillText'](this['showFruitHitScore']['message'], _0x59ba81, _0x1da08a));
            _0x393233['restore']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.panels.settings-panel')['requires']('impact.entity')['defines'](function() {
    var _0x1419dd = 0x0;
    EntitySettingsPanel = ig['Entity']['extend']({
        'zIndex': 0x1,
        'buttons': {},
        'otherEntities': {},
        'buttonImages1': new ig['Image']('media/graphics/sprites/button_home.png'),
        'buttonImages2': new ig['Image']('media/graphics/sprites/button_home_pressed.png'),
        'peasantBoyImage': new ig['Image']('media/graphics/sprites/friendlies/peasant_boy.png'),
        'appleImage': new ig['Image']('media/graphics/sprites/fruits/apple.png'),
        'windowPos': {
            'x': 0x0,
            'y': -0x270f
        },
        'windowImage': new ig['Image']('media/graphics/sprites/window.png'),
        'titleImage': new ig['Image']('media/graphics/sprites/title.png'),
        'opaqueImage': new ig['Image']('media/graphics/sprites/opaque.png'),
        'init': function(_0x120240, _0x5d0796, _0x4d56e7) {
            this['parent'](_0x120240, _0x5d0796, _0x4d56e7);
            _0x1419dd = ig['system']['realWidth'];
            this['_parent'] && (this['zIndex'] = this['_parent']['zIndex'] + 0x3e8);
            this['backgroundImage'] = this['opaqueImage'];
            this['spawnAndSetupEntities']();
            ig['game']['settingsPanel'] = this;
        },
        'spawnAndSetupEntities': function() {
            this['buttons'] = {
                'homeBtn': ig['game']['spawnEntity'](EntityButton, -_0x1419dd, 0x0, {
                    '_parent': this,
                    'imageFile1': this['buttonImages1'],
                    'imageFile2': this['buttonImages2'],
                    'onReleased': function() {
                        ig['game']['agLogo']['show']();
                        ig['game']['agLogo']['updateDiv']();
                        this['_isTweening'] || this['hide']();
                    } ['bind'](this)
                })
            };
            this['otherEntities'] = {
                'bgmVolume': ig['game']['spawnEntity'](EntityVolumeSlider, -_0x1419dd, 0x0, {
                    'isBgm': !0x0,
                    '_parent': this
                }),
                'sfxVolume': ig['game']['spawnEntity'](EntityVolumeSlider, -_0x1419dd, 0x0, {
                    'isBgm': !0x1,
                    '_parent': this
                })
            };
        },
        'update': function() {
            this['parent']();
        },
        'draw': function() {
            this['parent']();
            var _0x58f436 = ig['system']['context'],
                _0x4b887c = _GAME_CONFIGURATION['fontStyles'][0x0],
                _0x1fafef = _GAME_CONFIGURATION['fontColors'][0x1],
                _0x493d93 = 0x0,
                _0x2a9d20 = 0x0;
            _0x58f436['save']();
            _0x493d93 = this['pos']['x'] + 0x0;
            _0x2a9d20 = this['pos']['y'] + 0x0;
            this['backgroundImage']['draw'](_0x493d93, _0x2a9d20);
            _0x493d93 = this['windowPos']['x'];
            _0x2a9d20 = this['windowPos']['y'];
            this['windowImage']['draw'](_0x493d93, _0x2a9d20);
            _0x58f436['textAlign'] = 'center';
            _0x58f436['font'] = '56px\x20' + _0x4b887c;
            _0x58f436['fillStyle'] = _0x1fafef;
            _0x493d93 = this['windowPos']['x'] + this['windowImage']['width'] / 0x2;
            _0x2a9d20 = this['windowPos']['y'] + 0x78;
            _0x58f436['fillText'](_STRINGS['Game']['Settings'], _0x493d93, _0x2a9d20);
            _0x58f436['restore']();
        },
        'show': function() {
            ig['game']['mainMenu']['disableButtons']();
            this['pos']['x'] = 0x0;
            this['tweenShow']();
        },
        'hide': function() {
            ig['game']['mainMenu']['enableButtons']();
            this['pos']['x'] = -_0x1419dd;
            this['windowPos'] = this['buttons']['homeBtn']['pos'] = this['otherEntities']['bgmVolume']['pos'] = this['otherEntities']['sfxVolume']['pos'] = {
                'x': -_0x1419dd,
                'y': 0x0
            };
        },
        'tweenShow': function() {
            this['windowPos'] = {
                'x': _0x1419dd / 0x2 - this['windowImage']['width'] / 0x2,
                'y': -this['windowImage']['height']
            };
            this['otherEntities']['bgmVolume']['pos'] = {
                'x': this['windowPos']['x'] + this['windowImage']['width'] / 0x2 - 0.2 * this['otherEntities']['bgmVolume']['size']['x'],
                'y': -this['windowImage']['height'] + 0xaf
            };
            this['otherEntities']['sfxVolume']['pos'] = {
                'x': this['windowPos']['x'] + this['windowImage']['width'] / 0x2 - 0.2 * this['otherEntities']['sfxVolume']['size']['x'],
                'y': -this['windowImage']['height'] + 0xff
            };
            this['buttons']['homeBtn']['pos'] = {
                'x': this['windowPos']['x'] + this['windowImage']['width'] / 0x2 - 0.5 * this['buttons']['homeBtn']['size']['x'],
                'y': -this['buttons']['homeBtn']['size']['y']
            };
            ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['woodSlide']);
            this['_isTweening'] = !0x0;
            new ig['TweenDef'](this['windowPos'])['to']({
                'y': 0xc8
            }, 0x190)['easing'](ig['Tween']['Easing']['Cubic']['EaseInOut'])['onComplete'](function() {
                delete this['_isTweening'];
            } ['bind'](this))['start']();
            new ig['TweenDef'](this['otherEntities']['bgmVolume']['pos'])['to']({
                'y': 0x177
            }, 0x190)['easing'](ig['Tween']['Easing']['Cubic']['EaseInOut'])['onComplete'](function() {} ['bind'](this))['start']();
            new ig['TweenDef'](this['otherEntities']['sfxVolume']['pos'])['to']({
                'y': 0x1c7
            }, 0x190)['easing'](ig['Tween']['Easing']['Cubic']['EaseInOut'])['onComplete'](function() {} ['bind'](this))['start']();
            new ig['TweenDef'](this['buttons']['homeBtn']['pos'])['to']({
                'y': 0x20d
            }, 0x190)['easing'](ig['Tween']['Easing']['Cubic']['EaseInOut'])['onComplete'](function() {} ['bind'](this))['start']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.panels.pause-panel')['requires']('impact.entity')['defines'](function() {
    var _0x4fbf15 = 0x0;
    EntityPausePanel = ig['Entity']['extend']({
        'zIndex': 0x1,
        'buttons': {},
        'otherEntities': {},
        'buttonImages': [new ig['Image']('media/graphics/sprites/button_home.png'), new ig['Image']('media/graphics/sprites/button_home_pressed.png'), new ig['Image']('media/graphics/sprites/button_resume.png'), new ig['Image']('media/graphics/sprites/button_resume_pressed.png'), new ig['Image']('media/graphics/sprites/button_restart.png'), new ig['Image']('media/graphics/sprites/button_restart_pressed.png')],
        'backgroundImage': new ig['Image']('media/graphics/sprites/window.png'),
        'init': function(_0xf4db4, _0x1e26c8, _0xfdc8de) {
            this['parent'](_0xf4db4, _0x1e26c8, _0xfdc8de);
            _0x4fbf15 = ig['system']['realWidth'];
            this['_parent'] && (this['zIndex'] = this['_parent']['zIndex'] + 0x3e8);
            this['size'] = {
                'x': this['backgroundImage']['width'],
                'y': this['backgroundImage']['height']
            };
            this['animSheet'] = new ig['AnimationSheet'](this['backgroundImage']['path'], this['size']['x'], this['size']['y']);
            this['addAnim']('idle', 0x1, [0x0], !0x0);
            this['spawnAndSetupEntities']();
            ig['game']['pausePanel'] = this;
        },
        'spawnAndSetupEntities': function() {
            this['buttons'] = {
                'homeBtn': ig['game']['spawnEntity'](EntityButton, -_0x4fbf15, 0x0, {
                    '_parent': this,
                    'imageFile1': this['buttonImages'][0x0],
                    'imageFile2': this['buttonImages'][0x1],
                    'onReleased': function() {
                        this['_isTweening'] || ig['game']['mainGame']['goToMenu']();
                    } ['bind'](this)
                }),
                'resumeBtn': ig['game']['spawnEntity'](EntityButton, -_0x4fbf15, 0x0, {
                    '_parent': this,
                    'imageFile1': this['buttonImages'][0x2],
                    'imageFile2': this['buttonImages'][0x3],
                    'onReleased': function() {
                        this['_isTweening'] || ig['game']['mainGame']['unpauseGame']();
                    } ['bind'](this)
                }),
                'restartBtn': ig['game']['spawnEntity'](EntityButton, -_0x4fbf15, 0x0, {
                    '_parent': this,
                    'imageFile1': this['buttonImages'][0x4],
                    'imageFile2': this['buttonImages'][0x5],
                    'onReleased': function() {
                        this['_isTweening'] || (AG['startGame']()['then'](function() {
                            ig['game']['mainGame']['unpauseGame']();
                            ig['game']['mainGame']['startNewGame']();
                        } ['bind'](this)), ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['gameStart']));
                    } ['bind'](this)
                })
            };
            this['otherEntities'] = {
                'bgmVolume': ig['game']['spawnEntity'](EntityVolumeSlider, -_0x4fbf15, 0x0, {
                    'isBgm': !0x0,
                    '_parent': this
                }),
                'sfxVolume': ig['game']['spawnEntity'](EntityVolumeSlider, -_0x4fbf15, 0x0, {
                    'isBgm': !0x1,
                    '_parent': this
                })
            };
        },
        'update': function() {
            this['parent']();
        },
        'draw': function() {
            this['parent']();
            var _0x47ff53 = ig['system']['context'],
                _0x86ba91 = _GAME_CONFIGURATION['fontStyles'][0x0],
                _0x21ffc0 = _GAME_CONFIGURATION['fontColors'][0x1],
                _0x2566c7 = 0x0,
                _0x4705d5 = 0x0;
            _0x47ff53['save']();
            _0x47ff53['textAlign'] = 'center';
            _0x47ff53['font'] = '50px\x20' + _0x86ba91;
            _0x47ff53['fillStyle'] = _0x21ffc0;
            _0x2566c7 = this['pos']['x'] + this['size']['x'] / 0x2;
            _0x4705d5 = this['pos']['y'] + 0x78;
            _0x47ff53['fillText'](_STRINGS['Game']['Pause'], _0x2566c7, _0x4705d5);
            _0x47ff53['restore']();
        },
        'show': function() {
            ig['game']['mainGame']['disableButtons']();
        },
        'hide': function() {
            ig['game']['mainGame']['enableButtons']();
        },
        'tweenShow': function(_0x2321db) {
            this['pos'] = {
                'x': _0x4fbf15 / 0x2 - this['size']['x'] / 0x2,
                'y': -this['size']['y']
            };
            this['otherEntities']['bgmVolume']['pos'] = {
                'x': this['pos']['x'] + this['backgroundImage']['width'] / 0x2 - 0.2 * this['otherEntities']['bgmVolume']['size']['x'],
                'y': this['pos']['y'] + 0xaf
            };
            this['otherEntities']['sfxVolume']['pos'] = {
                'x': this['pos']['x'] + this['backgroundImage']['width'] / 0x2 - 0.2 * this['otherEntities']['sfxVolume']['size']['x'],
                'y': this['pos']['y'] + 0xff
            };
            this['buttons']['homeBtn']['pos'] = {
                'x': this['pos']['x'] + this['size']['x'] / 0x2 - this['buttons']['homeBtn']['size']['x'] / 0x2 - 0x64,
                'y': -this['buttons']['homeBtn']['size']['y']
            };
            this['buttons']['resumeBtn']['pos'] = {
                'x': this['pos']['x'] + this['size']['x'] / 0x2 - this['buttons']['resumeBtn']['size']['x'] / 0x2,
                'y': -this['buttons']['resumeBtn']['size']['y']
            };
            this['buttons']['restartBtn']['pos'] = {
                'x': this['pos']['x'] + this['size']['x'] / 0x2 - this['buttons']['restartBtn']['size']['x'] / 0x2 + 0x64,
                'y': -this['buttons']['restartBtn']['size']['y']
            };
            ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['woodSlide']);
            this['_isTweening'] = !0x0;
            new ig['TweenDef'](this['pos'])['to']({
                'y': 0xc8
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Bounce']['EaseOut'])['onComplete'](function() {
                delete this['_isTweening'];
                _0x2321db ? _0x2321db() : '';
            } ['bind'](this))['start']();
            new ig['TweenDef'](this['otherEntities']['bgmVolume']['pos'])['to']({
                'y': 0x177
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Bounce']['EaseOut'])['onComplete'](function() {} ['bind'](this))['start']();
            new ig['TweenDef'](this['otherEntities']['sfxVolume']['pos'])['to']({
                'y': 0x1c7
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Bounce']['EaseOut'])['onComplete'](function() {} ['bind'](this))['start']();
            new ig['TweenDef'](this['buttons']['homeBtn']['pos'])['to']({
                'y': 0xc8 + this['size']['y'] - this['buttons']['homeBtn']['size']['y'] - 0x23
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Bounce']['EaseOut'])['start']();
            new ig['TweenDef'](this['buttons']['resumeBtn']['pos'])['to']({
                'y': 0xc8 + this['size']['y'] - this['buttons']['resumeBtn']['size']['y'] - 0x23
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Bounce']['EaseOut'])['start']();
            new ig['TweenDef'](this['buttons']['restartBtn']['pos'])['to']({
                'y': 0xc8 + this['size']['y'] - this['buttons']['restartBtn']['size']['y'] - 0x23
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Bounce']['EaseOut'])['start']();
        },
        'tweenHide': function(_0xad1365) {
            ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['woodSlide']);
            this['_isTweening'] = !0x0;
            new ig['TweenDef'](this['pos'])['to']({
                'y': -this['size']['y']
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Cubic']['EaseInOut'])['onComplete'](function() {
                delete this['_isTweening'];
                _0xad1365 ? _0xad1365() : '';
            } ['bind'](this))['start']();
            new ig['TweenDef'](this['otherEntities']['bgmVolume']['pos'])['to']({
                'y': -this['size']['y'] + 0xaf
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Cubic']['EaseInOut'])['onComplete'](function() {} ['bind'](this))['start']();
            new ig['TweenDef'](this['otherEntities']['sfxVolume']['pos'])['to']({
                'y': -this['size']['y'] + 0xff
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Cubic']['EaseInOut'])['onComplete'](function() {} ['bind'](this))['start']();
            new ig['TweenDef'](this['buttons']['homeBtn']['pos'])['to']({
                'y': -this['buttons']['homeBtn']['size']['y']
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Cubic']['EaseInOut'])['start']();
            new ig['TweenDef'](this['buttons']['resumeBtn']['pos'])['to']({
                'y': -this['buttons']['resumeBtn']['size']['y']
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Cubic']['EaseInOut'])['start']();
            new ig['TweenDef'](this['buttons']['restartBtn']['pos'])['to']({
                'y': -this['buttons']['restartBtn']['size']['y']
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Cubic']['EaseInOut'])['start']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.panels.score-panel')['requires']('impact.entity')['defines'](function() {
    var _0x487c19 = 0x0;
    EntityScorePanel = ig['Entity']['extend']({
        'zIndex': 0x1,
        'buttons': {},
        'otherEntities': {},
        'currentScore': 0x0,
        'isBestScore': !0x1,
        'buttonImages': [new ig['Image']('media/graphics/sprites/button_home.png'), new ig['Image']('media/graphics/sprites/button_home_pressed.png'), new ig['Image']('media/graphics/sprites/button_resume.png'), new ig['Image']('media/graphics/sprites/button_resume_pressed.png'), new ig['Image']('media/graphics/sprites/button_restart.png'), new ig['Image']('media/graphics/sprites/button_restart_pressed.png'), new ig['Image']('media/graphics/sprites/button_lead.png'), new ig['Image']('media/graphics/sprites/button_lead_pressed.png')],
        'windowImage': new ig['Image']('media/graphics/sprites/window.png'),
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/score-board.png', 0x20a, 0x12c),
        'init': function(_0x459668, _0x5e6852, _0x22292c) {
            this['parent'](_0x459668, _0x5e6852, _0x22292c);
            _0x487c19 = ig['system']['realWidth'];
            this['_parent'] && (this['zIndex'] = this['_parent']['zIndex'] + 0x3e8);
            this['size'] = {
                'x': this['windowImage']['width'],
                'y': this['windowImage']['height']
            };
            this['animSheet'] = new ig['AnimationSheet'](this['windowImage']['path'], this['size']['x'], this['size']['y']);
            this['addAnim']('idle', 0x1, [0x0], !0x0);
            this['spawnAndSetupEntities']();
            ig['game']['pausePanel'] = this;
        },
        'spawnAndSetupEntities': function() {
            this['buttons'] = {
                'homeBtn': ig['game']['spawnEntity'](EntityButton, -_0x487c19, 0x0, {
                    '_parent': this,
                    'imageFile1': this['buttonImages'][0x0],
                    'imageFile2': this['buttonImages'][0x1],
                    'onReleased': function() {
                        this['_isTweening'] || ig['game']['mainGame']['goToMenu']();
                    } ['bind'](this)
                }),
                'restartBtn': ig['game']['spawnEntity'](EntityButton, -_0x487c19, 0x0, {
                    '_parent': this,
                    'imageFile1': this['buttonImages'][0x4],
                    'imageFile2': this['buttonImages'][0x5],
                    'onReleased': function() {
                        this['_isTweening'] || (this['tweenHide'](), AG['startGame']()['then'](function() {
                            ig['game']['mainGame']['unpauseGame']();
                            ig['game']['mainGame']['startNewGame']();
                        } ['bind'](this)), ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['gameStart']));
                    } ['bind'](this)
                }),
                'leaderboardBtn': ig['game']['spawnEntity'](EntityButton, -_0x487c19, 0x0, {
                    '_parent': this,
                    'imageFile1': this['buttonImages'][0x6],
                    'imageFile2': this['buttonImages'][0x7],
                    'onReleased': function() {
                        this['_isTweening'] || AG['showDialog']('scores', {
                            'title': 'Best\x20Scores',
                            'level_key': 'score'
                        });
                    } ['bind'](this)
                })
            };
        },
        'update': function() {
            this['parent']();
        },
        'draw': function() {
            this['parent']();
            var _0x3ff5c6 = ig['system']['context'],
                _0x1510a4 = _GAME_CONFIGURATION['fontStyles'][0x0],
                _0x5155ce = _GAME_CONFIGURATION['fontStyles'][0x1],
                _0x24d596 = _GAME_CONFIGURATION['fontColors'][0x0],
                _0x1ecfa4 = _GAME_CONFIGURATION['fontColors'][0x1],
                _0x38679b = 0x0,
                _0x2bda69 = 0x0;
            _0x3ff5c6['save']();
            _0x3ff5c6['textAlign'] = 'center';
            _0x3ff5c6['font'] = '50px\x20' + _0x1510a4;
            _0x3ff5c6['fillStyle'] = _0x1ecfa4;
            _0x38679b = this['pos']['x'] + this['size']['x'] / 0x2;
            _0x2bda69 = this['pos']['y'] + 0x78;
            _0x3ff5c6['fillText'](_STRINGS['Game']['GameOver'], _0x38679b, _0x2bda69);
            _0x3ff5c6['textAlign'] = 'center';
            _0x3ff5c6['font'] = '80px\x20' + _0x5155ce;
            _0x3ff5c6['fillStyle'] = _0x24d596;
            _0x38679b = this['pos']['x'] + this['size']['x'] / 0x2;
            _0x2bda69 = this['pos']['y'] + 0xe6;
            _0x3ff5c6['fillText'](this['currentScore'], _0x38679b, _0x2bda69);
            _0x1510a4 = ig['game']['io']['storage']['get']('fruit-salad-bow-highscore') || 0x0;
            _0x3ff5c6['textAlign'] = 'center';
            _0x3ff5c6['font'] = '27px\x20' + _0x5155ce;
            _0x3ff5c6['fillStyle'] = _0x24d596;
            _0x38679b = this['pos']['x'] + this['size']['x'] / 0x2 + 0x5;
            _0x2bda69 = this['pos']['y'] + 0x122;
            this['isBestScore'] ? _0x3ff5c6['fillText'](_STRINGS['Results']['NewBestScore'], _0x38679b, _0x2bda69) : 0x0 < _0x1510a4 && _0x3ff5c6['fillText'](_STRINGS['Results']['BestScore'] + ':\x20' + _0x1510a4, _0x38679b, _0x2bda69);
            _0x3ff5c6['restore']();
        },
        'checkHighScoring': function() {
            (ig['game']['io']['storage']['get']('fruit-salad-bow-highscore') || 0x0) < this['currentScore'] ? (this['isBestScore'] = !0x0, ig['game']['io']['storage']['set']('fruit-salad-bow-highscore', this['currentScore'])) : this['isBestScore'] = !0x1;
        },
        'show': function() {
            ig['game']['mainGame']['disableButtons']();
        },
        'hide': function() {
            ig['game']['mainGame']['enableButtons']();
        },
        'tweenShow': function(_0x2f8e0c) {
            this['currentScore'] = ig['game']['mainGame']['playerScore'];
            this['checkHighScoring']();
            this['pos'] = {
                'x': _0x487c19 / 0x2 - this['size']['x'] / 0x2,
                'y': -this['size']['y']
            };
            this['buttons']['homeBtn']['pos'] = {
                'x': this['pos']['x'] + this['size']['x'] / 0x2 - this['buttons']['homeBtn']['size']['x'] / 0x2 - 0x64,
                'y': -this['buttons']['homeBtn']['size']['y']
            };
            this['buttons']['leaderboardBtn']['pos'] = {
                'x': this['pos']['x'] + this['size']['x'] / 0x2 - this['buttons']['leaderboardBtn']['size']['x'] / 0x2 + 0x64,
                'y': -this['buttons']['leaderboardBtn']['size']['y']
            };
            this['buttons']['restartBtn']['pos'] = {
                'x': this['pos']['x'] + this['size']['x'] / 0x2 - this['buttons']['restartBtn']['size']['x'] / 0x2,
                'y': -this['buttons']['restartBtn']['size']['y']
            };
            ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['woodSlide']);
            this['_isTweening'] = !0x0;
            new ig['TweenDef'](this['pos'])['to']({
                'y': 0xc8
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Bounce']['EaseOut'])['onComplete'](function() {
                delete this['_isTweening'];
                _0x2f8e0c ? _0x2f8e0c() : '';
            } ['bind'](this))['start']();
            new ig['TweenDef'](this['buttons']['homeBtn']['pos'])['to']({
                'y': 0xc8 + this['size']['y'] - this['buttons']['homeBtn']['size']['y'] - 0x14
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Bounce']['EaseOut'])['start']();
            new ig['TweenDef'](this['buttons']['restartBtn']['pos'])['to']({
                'y': 0xc8 + this['size']['y'] - this['buttons']['restartBtn']['size']['y'] - 0x14
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Bounce']['EaseOut'])['start']();
            new ig['TweenDef'](this['buttons']['leaderboardBtn']['pos'])['to']({
                'y': 0xc8 + this['size']['y'] - this['buttons']['leaderboardBtn']['size']['y'] - 0x14
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Bounce']['EaseOut'])['start']();
        },
        'tweenHide': function(_0x463ef9) {
            ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['woodSlide']);
            this['_isTweening'] = !0x0;
            new ig['TweenDef'](this['pos'])['to']({
                'y': -this['size']['y']
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Cubic']['EaseInOut'])['onComplete'](function() {
                delete this['_isTweening'];
                _0x463ef9 ? _0x463ef9() : '';
            } ['bind'](this))['start']();
            new ig['TweenDef'](this['buttons']['homeBtn']['pos'])['to']({
                'y': -this['buttons']['homeBtn']['size']['y']
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Cubic']['EaseInOut'])['start']();
            new ig['TweenDef'](this['buttons']['restartBtn']['pos'])['to']({
                'y': -this['buttons']['restartBtn']['size']['y']
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Cubic']['EaseInOut'])['start']();
            new ig['TweenDef'](this['buttons']['leaderboardBtn']['pos'])['to']({
                'y': -this['buttons']['leaderboardBtn']['size']['y']
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Cubic']['EaseInOut'])['start']();
        }
    });
});
ig['baked'] = !0x0;
ig['module']('game.entities.panels.tutorial-panel')['requires']('impact.entity')['defines'](function() {
    var _0x4296c1 = 0x0;
    EntityTutorialPanel = ig['Entity']['extend']({
        'zIndex': 0x1,
        'buttons': {},
        'otherEntities': {},
        'buttonImages': [new ig['Image']('media/graphics/sprites/button_home.png'), new ig['Image']('media/graphics/sprites/button_home_pressed.png'), new ig['Image']('media/graphics/sprites/button_resume.png'), new ig['Image']('media/graphics/sprites/button_resume_pressed.png'), new ig['Image']('media/graphics/sprites/button_restart.png'), new ig['Image']('media/graphics/sprites/button_restart_pressed.png')],
        'windowImage': new ig['Image']('media/graphics/sprites/window_tutorial.png'),
        'animSheet': new ig['AnimationSheet']('media/graphics/sprites/score-board.png', 0x20a, 0x12c),
        'init': function(_0x2bb8a7, _0x42df01, _0x425d03) {
            this['parent'](_0x2bb8a7, _0x42df01, _0x425d03);
            _0x4296c1 = ig['system']['realWidth'];
            this['_parent'] && (this['zIndex'] = this['_parent']['zIndex'] + 0x3e8);
            this['size'] = {
                'x': this['windowImage']['width'],
                'y': this['windowImage']['height']
            };
            this['animSheet'] = new ig['AnimationSheet'](this['windowImage']['path'], this['size']['x'], this['size']['y']);
            this['addAnim']('idle', 0x1, [0x0], !0x0);
            this['spawnAndSetupEntities']();
            ig['game']['pausePanel'] = this;
        },
        'spawnAndSetupEntities': function() {
            this['buttons'] = {
                'playButton': ig['game']['spawnEntity'](EntityButton, -_0x4296c1, 0x0, {
                    '_parent': this,
                    'imageFile1': this['buttonImages'][0x2],
                    'imageFile2': this['buttonImages'][0x3],
                    'onReleased': function() {
                        this['_isTweening'] || ig['game']['mainGame']['hideTutorial']();
                    } ['bind'](this)
                })
            };
        },
        'update': function() {
            this['parent']();
        },
        'draw': function() {
            this['parent']();
            var _0x428d99 = ig['system']['context'],
                _0x61cb1c = 0x14,
                _0x7bee81 = _GAME_CONFIGURATION['fontStyles'][0x0],
                _0x4b8ee9 = _GAME_CONFIGURATION['fontColors'][0x0],
                _0x2430a4 = _GAME_CONFIGURATION['fontColors'][0x1],
                _0x24c959 = 0x0,
                _0x572d15 = 0x0;
            _0x428d99['save']();
            _0x428d99['textAlign'] = 'center';
            _0x428d99['font'] = '50px\x20' + _0x7bee81;
            _0x428d99['fillStyle'] = _0x2430a4;
            _0x24c959 = this['pos']['x'] + this['size']['x'] / 0x2;
            _0x572d15 = this['pos']['y'] + 0x96;
            _0x428d99['fillText'](_STRINGS['Tutorial']['HowToPlay'], _0x24c959, _0x572d15);
            _0x61cb1c = 0x1e;
            _0x428d99['textAlign'] = 'center';
            _0x428d99['font'] = _0x61cb1c + 'px\x20' + _0x7bee81;
            _0x428d99['fillStyle'] = _0x2430a4;
            for (var _0x24c959 = this['pos']['x'] + this['size']['x'] / 0x2 + 0x14, _0x572d15 = this['pos']['y'] + 0x104, _0x2430a4 = _FITSTRING(_STRINGS['Tutorial']['Step1'], 0xc), _0x572d15 = _0x572d15 - _0x61cb1c * _0x2430a4['length'] / 0x2, _0x180ea8 = 0x0; _0x180ea8 < _0x2430a4['length']; _0x180ea8++) _0x428d99['fillText'](_0x2430a4[_0x180ea8]['trim'](), _0x24c959, _0x572d15 + _0x180ea8 * _0x61cb1c);
            _0x61cb1c = 0x22;
            _0x428d99['textAlign'] = 'center';
            _0x428d99['font'] = _0x61cb1c + 'px\x20' + _0x7bee81;
            _0x428d99['fillStyle'] = _0x4b8ee9;
            _0x24c959 = this['pos']['x'] + this['size']['x'] / 0x2 + 0xa;
            _0x572d15 = this['pos']['y'] + 0x195;
            _0x2430a4 = _FITSTRING(_STRINGS['Tutorial']['Step2'], 0x12);
            _0x572d15 -= _0x61cb1c * _0x2430a4['length'] / 0x2;
            for (_0x180ea8 = 0x0; _0x180ea8 < _0x2430a4['length']; _0x180ea8++) _0x428d99['fillText'](_0x2430a4[_0x180ea8]['trim'](), _0x24c959, _0x572d15 + _0x180ea8 * _0x61cb1c);
            _0x428d99['textAlign'] = 'center';
            _0x428d99['font'] = _0x61cb1c + 'px\x20' + _0x7bee81;
            _0x428d99['fillStyle'] = _0x4b8ee9;
            _0x24c959 = this['pos']['x'] + this['size']['x'] / 0x2 + 0xa;
            _0x572d15 = this['pos']['y'] + 0x226;
            _0x2430a4 = _FITSTRING(_STRINGS['Tutorial']['Step3'], 0x16);
            _0x572d15 -= _0x61cb1c * _0x2430a4['length'] / 0x2;
            for (_0x180ea8 = 0x0; _0x180ea8 < _0x2430a4['length']; _0x180ea8++) _0x428d99['fillText'](_0x2430a4[_0x180ea8]['trim'](), _0x24c959, _0x572d15 + _0x180ea8 * _0x61cb1c);
            _0x428d99['restore']();
        },
        'show': function() {
            ig['game']['mainGame']['disableButtons']();
        },
        'hide': function() {
            ig['game']['mainGame']['enableButtons']();
        },
        'tweenShow': function(_0x11d8ce) {
            this['pos'] = {
                'x': _0x4296c1 / 0x2 - this['size']['x'] / 0x2,
                'y': -this['size']['y']
            };
            this['buttons']['playButton']['pos'] = {
                'x': this['pos']['x'] + this['size']['x'] / 0x2 - this['buttons']['playButton']['size']['x'] / 0x2,
                'y': -this['buttons']['playButton']['size']['y']
            };
            ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['woodSlide']);
            this['_isTweening'] = !0x0;
            new ig['TweenDef'](this['pos'])['to']({
                'y': 0x64
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Bounce']['EaseOut'])['onComplete'](function() {
                delete this['_isTweening'];
                _0x11d8ce ? _0x11d8ce() : '';
            } ['bind'](this))['start']();
            new ig['TweenDef'](this['buttons']['playButton']['pos'])['to']({
                'y': 0x96 + this['size']['y'] - this['buttons']['playButton']['size']['y'] - 0x46
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Bounce']['EaseOut'])['start']();
        },
        'tweenHide': function(_0x25389b) {
            ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['woodSlide']);
            this['_isTweening'] = !0x0;
            new ig['TweenDef'](this['pos'])['to']({
                'y': -this['size']['y']
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Cubic']['EaseInOut'])['onComplete'](function() {
                delete this['_isTweening'];
                _0x25389b ? _0x25389b() : '';
            } ['bind'](this))['start']();
            new ig['TweenDef'](this['buttons']['playButton']['pos'])['to']({
                'y': -this['buttons']['playButton']['size']['y']
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Cubic']['EaseInOut'])['start']();
        }
    });
});

function _FITSTRING(_0x14ce11, _0x104529) {
    _0x104529 = _0x104529 || 0x14;
    return _0x14ce11['split'](/\s+/)['reduce'](function(_0x86bb2e, _0x5c797b) {
        _0x86bb2e['length'] && (_0x86bb2e[_0x86bb2e['length'] - 0x1] + '\x20' + _0x5c797b)['length'] <= _0x104529 ? _0x86bb2e[_0x86bb2e['length'] - 0x1] += '\x20' + _0x5c797b : _0x86bb2e['push'](_0x5c797b);
        return _0x86bb2e;
    }, []);
}
ig['baked'] = !0x0;
ig['module']('game.entities.panels.popup-panel')['requires']('impact.entity')['defines'](function() {
    var _0x402dc4 = 0x0,
        _0x4757dc = 0x0;
    EntityPopUpPanel = ig['Entity']['extend']({
        'zIndex': 0x1,
        'buttons': {},
        'otherEntities': {},
        'buttonImages': [new ig['Image']('media/graphics/sprites/button_resume.png'), new ig['Image']('media/graphics/sprites/button_resume_pressed.png')],
        'windowImage': new ig['Image']('media/graphics/sprites/window.png'),
        'init': function(_0x388c41, _0x2922ff, _0x4b3d00) {
            this['parent'](_0x388c41, _0x2922ff, _0x4b3d00);
            _0x402dc4 = ig['system']['realWidth'];
            _0x4757dc = ig['system']['realHeight'];
            this['_parent'] && (this['zIndex'] = this['_parent']['zIndex'] + 0x3e8);
            this['size'] = {
                'x': this['windowImage']['width'],
                'y': this['windowImage']['height']
            };
            this['animSheet'] = new ig['AnimationSheet'](this['windowImage']['path'], this['size']['x'], this['size']['y']);
            this['addAnim']('idle', 0x1, [0x0], !0x0);
            this['spawnAndSetupEntities']();
        },
        'spawnAndSetupEntities': function() {
            this['buttons'] = {
                'resumeBtn': ig['game']['spawnEntity'](EntityButton, -_0x4757dc, 0x0, {
                    '_parent': this,
                    'imageFile1': this['buttonImages'][0x0],
                    'imageFile2': this['buttonImages'][0x1],
                    'onReleased': function() {
                        this['_isTweening'] || ig['game']['mainGame']['hidePopUpTips']();
                    } ['bind'](this)
                })
            };
        },
        'update': function() {
            this['parent']();
        },
        'draw': function() {
            this['parent']();
            var _0x3510dc = ig['system']['context'],
                _0x559a48 = 0x14,
                _0x3ff1ce = _GAME_CONFIGURATION['fontStyles'][0x0],
                _0x477c6f = _GAME_CONFIGURATION['fontColors'][0x0],
                _0x559a48 = _GAME_CONFIGURATION['fontColors'][0x1],
                _0xc00609 = 0x0,
                _0x10eab3 = 0x0;
            _0x3510dc['save']();
            _0x3510dc['textAlign'] = 'center';
            _0x3510dc['font'] = '50px\x20' + _0x3ff1ce;
            _0x3510dc['fillStyle'] = _0x559a48;
            _0xc00609 = this['pos']['x'] + this['size']['x'] / 0x2;
            _0x10eab3 = this['pos']['y'] + 0x76;
            _0x3510dc['fillText'](_STRINGS['Tutorial']['HowToPlay'], _0xc00609, _0x10eab3);
            _0x559a48 = 0x1e;
            _0x3510dc['textAlign'] = 'center';
            _0x3510dc['font'] = _0x559a48 + 'px\x20' + _0x3ff1ce;
            _0x3510dc['fillStyle'] = _0x477c6f;
            _0xc00609 = this['pos']['x'] + this['size']['x'] / 0x2;
            _0x10eab3 = this['pos']['y'] + 0xf5;
            _0x3ff1ce = _FITSTRING(this['message'] || '', 0x14);
            _0x10eab3 -= _0x559a48 * _0x3ff1ce['length'] / 0x2;
            for (_0x477c6f = 0x0; _0x477c6f < _0x3ff1ce['length']; _0x477c6f++) _0x3510dc['fillText'](_0x3ff1ce[_0x477c6f]['trim'](), _0xc00609, _0x10eab3 + _0x477c6f * _0x559a48);
            _0x3510dc['restore']();
        },
        'show': function() {
            ig['game']['mainGame']['disableButtons']();
        },
        'hide': function() {
            ig['game']['mainGame']['enableButtons']();
        },
        'tweenShow': function(_0x4a5f14) {
            this['isShown'] = !0x0;
            this['pos'] = {
                'x': _0x402dc4 / 0x2 - this['size']['x'] / 0x2,
                'y': -this['size']['y']
            };
            this['message'] = _0x4a5f14['message'] || '';
            this['buttons']['resumeBtn']['pos'] = {
                'x': this['pos']['x'] + this['size']['x'] / 0x2 - this['buttons']['resumeBtn']['size']['x'] / 0x2,
                'y': -this['buttons']['resumeBtn']['size']['y']
            };
            ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['woodSlide']);
            this['_isTweening'] = !0x0;
            new ig['TweenDef'](this['pos'])['to']({
                'y': 0xc8
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Bounce']['EaseOut'])['onComplete'](function() {
                delete this['_isTweening'];
                _0x4a5f14['callback'] ? _0x4a5f14['callback']() : '';
            } ['bind'](this))['start']();
            new ig['TweenDef'](this['buttons']['resumeBtn']['pos'])['to']({
                'y': 0xc8 + this['size']['y'] - this['buttons']['resumeBtn']['size']['y'] - 0x14
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Bounce']['EaseOut'])['start']();
        },
        'tweenHide': function(_0x3f7df2) {
            delete this['isShown'];
            ig['soundHandler']['sfxPlayer']['play'](ig['soundHandler']['sfxPlayer']['soundList']['woodSlide']);
            this['_isTweening'] = !0x0;
            new ig['TweenDef'](this['pos'])['to']({
                'y': -this['size']['y']
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Cubic']['EaseInOut'])['onComplete'](function() {
                delete this['_isTweening'];
                _0x3f7df2 ? _0x3f7df2() : '';
            } ['bind'](this))['start']();
            new ig['TweenDef'](this['buttons']['resumeBtn']['pos'])['to']({
                'y': -this['buttons']['resumeBtn']['size']['y']
            }, 0x4b0)['easing'](ig['Tween']['Easing']['Cubic']['EaseInOut'])['start']();
        }
    });
});

function _FITSTRING(_0x14f24e, _0x33f63a) {
    _0x33f63a = _0x33f63a || 0x14;
    return _0x14f24e['split'](/\s+/)['reduce'](function(_0x540a1b, _0x6cef8b) {
        _0x540a1b['length'] && (_0x540a1b[_0x540a1b['length'] - 0x1] + '\x20' + _0x6cef8b)['length'] <= _0x33f63a ? _0x540a1b[_0x540a1b['length'] - 0x1] += '\x20' + _0x6cef8b : _0x540a1b['push'](_0x6cef8b);
        return _0x540a1b;
    }, []);
}
ig['baked'] = !0x0;
ig['module']('game.levels.opening')['requires']('impact.image', 'game.entities.opening-kitty')['defines'](function() {
    LevelOpening = {
        'entities': [{
            'type': 'EntityOpeningKitty',
            'x': 0x208,
            'y': 0xd4
        }],
        'layer': []
    };
});
ig['baked'] = !0x0;
ig['module']('game.entities.buttons.button-sound')['requires']('game.entities.buttons.button')['defines'](function() {
    EntityButtonSound = EntityButton['extend']({
        'type': ig['Entity']['TYPE']['A'],
        'gravityFactor': 0x0,
        'logo': new ig['AnimationSheet']('media/graphics/misc/invisible.png', 0x1, 0x1),
        'zIndex': 0x2711,
        'size': {
            'x': 0x32,
            'y': 0x32
        },
        'mutetest': !0x1,
        'name': 'soundtest',
        'init': function(_0x2fa1fc, _0x7b807e, _0x4d8d04) {
            this['parent'](_0x2fa1fc, _0x7b807e, _0x4d8d04);
        },
        'draw': function() {
            this['parent']();
            ig['system']['context']['fillRect'](this['pos']['x'], this['pos']['y'], 0x32, 0x32);
        },
        'clicked': function() {
            console['log']('pressed');
            this['mutetest'] ? (console['log']('unmute'), ig['soundHandler']['unmuteAll'](!0x0), this['mutetest'] = !0x1) : (console['log']('mute'), ig['soundHandler']['muteAll'](!0x0), this['mutetest'] = !0x0);
        },
        'clicking': function() {},
        'released': function() {}
    });
});
ig['baked'] = !0x0;
ig['module']('game.levels.main-menu')['requires']('impact.image', 'game.entities.branding-logo-placeholder', 'game.entities.buttons.button-more-games', 'game.entities.pointer', 'game.entities.buttons.button-sound', 'game.entities.game.main-menu')['defines'](function() {
    LevelMainMenu = {
        'entities': [{
            'type': 'EntityPointerSelector',
            'x': 0x32,
            'y': 0x32
        }, {
            'type': 'EntityMainMenu',
            'x': 0x0,
            'y': 0x0
        }],
        'layer': []
    };
    LevelMainMenuResources = [new ig['Image']('media/graphics/backgrounds/desktop/background.jpg')];
});
ig['baked'] = !0x0;
ig['module']('game.levels.main-game')['requires']('impact.image', 'game.entities.branding-logo-placeholder', 'game.entities.buttons.button-more-games', 'game.entities.pointer', 'game.entities.buttons.button-sound', 'game.entities.game.main-game')['defines'](function() {
    LevelMainGame = {
        'entities': [{
            'type': 'EntityPointerSelector',
            'x': 0x32,
            'y': 0x32
        }, {
            'type': 'EntityMainGame',
            'x': 0x0,
            'y': 0x0
        }],
        'layer': []
    };
    LevelMainGameResources = [new ig['Image']('media/graphics/backgrounds/desktop/background.jpg')];
});
ig['baked'] = !0x0;
ig['module']('game.main')['requires']('impact.game', 'game.entities.ag-logo', 'plugins.patches.webkit-image-smoothing-patch', 'plugins.patches.windowfocus-onMouseDown-patch', 'plugins.handlers.dom-handler', 'plugins.handlers.size-handler', 'plugins.handlers.api-handler', 'plugins.audio.sound-handler', 'plugins.io.io-manager', 'plugins.io.storage-manager', 'plugins.splash-loader', 'plugins.tween', 'plugins.tweens-handler', 'plugins.url-parameters', 'plugins.director', 'plugins.impact-storage', 'plugins.data.vector', 'plugins.data.color-rgb', 'plugins.branding.splash', 'game.entities.branding-logo-placeholder', 'game.entities.buttons.button-more-games', 'game.entities.opening-shield', 'game.entities.opening-kitty', 'game.entities.pointer', 'game.entities.pointer-selector', 'game.entities.select', 'game.entities.game.title', 'game.entities.game.main-menu', 'game.entities.game.main-game', 'game.entities.game.arrow', 'game.entities.game.score-board', 'game.entities.game.player', 'game.entities.game.volume-slider', 'game.entities.game.character', 'game.entities.game.fruit', 'game.entities.game.stone', 'game.entities.game.flag', 'game.entities.game.bar', 'game.entities.game.trajectory', 'game.entities.game.message-display', 'game.entities.panels.settings-panel', 'game.entities.panels.pause-panel', 'game.entities.panels.score-panel', 'game.entities.panels.tutorial-panel', 'game.entities.panels.popup-panel', 'game.levels.opening', 'game.levels.main-menu', 'game.levels.main-game')['defines'](function() {
    this['START_OBFUSCATION'];
    this['FRAMEBREAKER'];
    MyGame = ig['Game']['extend']({
        'name': 'fruit-salad-bow',
        'version': '1.0',
        'sessionData': {},
        'io': null,
        'paused': !0x1,
        'tweens': null,
        'init': function() {
            this['tweens'] = new ig['TweensHandler']();
            this['io'] = new IoManager();
            this['setupUrlParams'] = new ig['UrlParameters']();
            this['removeLoadingWheel']();
            this['setupStorageManager']();
            this['finalize']();
        },
        'initData': function() {
            return this['sessionData'] = {
                'sound': 0.5,
                'music': 0.5,
                'level': 0x1,
                'score': 0x0
            };
        },

        'finalize': function() {
            var _0x3885d2 = ig['domHandler']['getElementById']('#play');
            ig['domHandler']['attr'](_0x3885d2, 'onclick', 'ig.soundHandler.sfxPlayer.play(\x22staticSound\x22);ig.game.splashClick();');
            ig['domHandler']['show'](_0x3885d2);
            ig['sizeHandler']['reorient']();
        },
        'removeLoadingWheel': function() {
            try {
                $('#ajaxbar')['css']('background', 'none');
            } catch (_0x1328a4) {
                console['log'](_0x1328a4);
            }
        },
        'showDebugMenu': function() {
            console['log']('showing\x20debug\x20menu\x20...');
            ig['Entity']['_debugShowBoxes'] = !0x0;
            $('.ig_debug')['show']();
        },
        'start': function() {
            this['resetPlayerStats']();
            this['director'] = new ig['Director'](this, [LevelOpening, LevelMainMenu, LevelMainGame]);
            if (_SETTINGS['Branding']['Splash']['Enabled']) try {
                this['branding'] = new ig['BrandingSplash']();
            } catch (_0x48b9e3) {
                console['log'](_0x48b9e3), console['log']('Loading\x20original\x20levels\x20...'), this['director']['loadLevel'](this['director']['currentLevel']);
            } else this['director']['loadLevel'](this['director']['currentLevel']);
            this['spawnEntity'](EntityPointerSelector, 0x32, 0x32);
            var _0x1d1790 = ig['game']['io']['storage']['get']('fruit-salad-bow-bgmVolume') || 0x1;
            ig['soundHandler']['bgmPlayer']['volume'](_0x1d1790);
            _0x1d1790 = ig['game']['io']['storage']['get']('fruit-salad-bow-sfxVolume') || 0x1;
            ig['soundHandler']['sfxPlayer']['volume'](_0x1d1790);
            ig['soundHandler']['bgmPlayer']['play'](ig['soundHandler']['bgmPlayer']['soundList']['background']);
        },
        'fpsCount': function() {
            this['fpsTimer'] || (this['fpsTimer'] = new ig['Timer'](0x1));
            this['fpsTimer'] && 0x0 > this['fpsTimer']['delta']() ? null != this['fpsCounter'] ? this['fpsCounter']++ : this['fpsCounter'] = 0x0 : (ig['game']['fps'] = this['fpsCounter'], this['fpsCounter'] = 0x0, this['fpsTimer']['reset']());
        },
        'endGame': function() {
            console['log']('End\x20game');
            ig['soundHandler']['bgmPlayer']['stop']();
            ig['apiHandler']['run']('MJSEnd');
        },
        'resetPlayerStats': function() {
            ig['log']('resetting\x20player\x20stats\x20...');
            this['playerStats'] = {
                'id': this['playerStats'] ? this['playerStats']['id'] : null
            };
        },
        'splashClick': function() {
            var _0x4fdc70 = ig['domHandler']['getElementById']('#play');
            ig['domHandler']['hide'](_0x4fdc70);
            ig['apiHandler']['run']('MJSFooter');
            ig['apiHandler']['run']('MJSHeader');
            ig['game']['start']();
        },
        'pauseGame': function() {
            ig['system']['stopRunLoop']['call'](ig['system']);
            ig['game']['tweens']['onSystemPause']();
            console['log']('Game\x20Paused');
        },
        'resumeGame': function() {
            ig['system']['startRunLoop']['call'](ig['system']);
            ig['game']['tweens']['onSystemResume']();
            console['log']('Game\x20Resumed');
        },
        'showOverlay': function(_0x50156f) {
            for (i = 0x0; i < _0x50156f['length']; i++) $('#' + _0x50156f[i]) && $('#' + _0x50156f[i])['show'](), document['getElementById'](_0x50156f[i]) && (document['getElementById'](_0x50156f[i])['style']['visibility'] = 'visible');
        },
        'hideOverlay': function(_0x4a484c) {
            for (i = 0x0; i < _0x4a484c['length']; i++) $('#' + _0x4a484c[i]) && $('#' + _0x4a484c[i])['hide'](), document['getElementById'](_0x4a484c[i]) && (document['getElementById'](_0x4a484c[i])['style']['visibility'] = 'hidden');
        },
        'currentBGMVolume': 0x1,
        'addition': 0.1,
        'update': function() {
            this['fpsCount']();
            this['paused'] ? (this['updateWhilePaused'](), this['checkWhilePaused']()) : (this['parent'](), this['tweens']['update'](this['tweens']['now']()), ig['ua']['mobile'] && ig['soundHandler'] && ig['soundHandler']['forceLoopBGM']());
        },
        'updateWhilePaused': function() {
            for (var _0x2ab2cd = 0x0; _0x2ab2cd < this['entities']['length']; _0x2ab2cd++) this['entities'][_0x2ab2cd]['ignorePause'] && this['entities'][_0x2ab2cd]['update']();
        },
        'checkWhilePaused': function() {
            for (var _0x3f3a8c = {}, _0xdb942d = 0x0; _0xdb942d < this['entities']['length']; _0xdb942d++) {
                var _0x46db93 = this['entities'][_0xdb942d];
                if (_0x46db93['ignorePause'] && !(_0x46db93['type'] == ig['Entity']['TYPE']['NONE'] && _0x46db93['checkAgainst'] == ig['Entity']['TYPE']['NONE'] && _0x46db93['collides'] == ig['Entity']['COLLIDES']['NEVER']))
                    for (var _0xd2c3cf = {}, _0x3d0b32 = Math['floor'](_0x46db93['pos']['y'] / this['cellSize']), _0x467a2d = Math['floor']((_0x46db93['pos']['x'] + _0x46db93['size']['x']) / this['cellSize']) + 0x1, _0xcd6bc = Math['floor']((_0x46db93['pos']['y'] + _0x46db93['size']['y']) / this['cellSize']) + 0x1, _0xe27c0e = Math['floor'](_0x46db93['pos']['x'] / this['cellSize']); _0xe27c0e < _0x467a2d; _0xe27c0e++)
                        for (var _0x2d0f07 = _0x3d0b32; _0x2d0f07 < _0xcd6bc; _0x2d0f07++)
                            if (_0x3f3a8c[_0xe27c0e])
                                if (_0x3f3a8c[_0xe27c0e][_0x2d0f07]) {
                                    for (var _0x1d525f = _0x3f3a8c[_0xe27c0e][_0x2d0f07], _0x57707d = 0x0; _0x57707d < _0x1d525f['length']; _0x57707d++) _0x46db93['touches'](_0x1d525f[_0x57707d]) && !_0xd2c3cf[_0x1d525f[_0x57707d]['id']] && (_0xd2c3cf[_0x1d525f[_0x57707d]['id']] = !0x0, ig['Entity']['checkPair'](_0x46db93, _0x1d525f[_0x57707d]));
                                    _0x1d525f['push'](_0x46db93);
                                } else _0x3f3a8c[_0xe27c0e][_0x2d0f07] = [_0x46db93];
                else _0x3f3a8c[_0xe27c0e] = {}, _0x3f3a8c[_0xe27c0e][_0x2d0f07] = [_0x46db93];
            }
        },
        'draw': function() {
            this['parent']();
            this['dctf']();
        },
        'dctf': function() {
            this['COPYRIGHT'];
        },
        'clearCanvas': function(_0x2dc5ae, _0x19a716, _0x57c5d5) {
            var _0xc28f71 = _0x2dc5ae['canvas'];
            _0x2dc5ae['clearRect'](0x0, 0x0, _0x19a716, _0x57c5d5);
            _0xc28f71['style']['display'] = 'none';
            _0xc28f71['offsetHeight'];
            _0xc28f71['style']['display'] = 'inherit';
        },
        'drawDebug': function() {
            if (!ig['global']['wm'] && (this['debugEnable'](), this['viewDebug'] && (ig['system']['context']['fillStyle'] = '#000000', ig['system']['context']['globalAlpha'] = 0.35, ig['system']['context']['fillRect'](0x0, 0x0, ig['system']['width'] / 0x4, ig['system']['height']), ig['system']['context']['globalAlpha'] = 0x1, this['debug'] && 0x0 < this['debug']['length'])))
                for (i = 0x0; i < this['debug']['length']; i++) ig['system']['context']['font'] = '10px\x20Arial', ig['system']['context']['fillStyle'] = '#ffffff', ig['system']['context']['fillText'](this['debugLine'] - this['debug']['length'] + i + ':\x20' + this['debug'][i], 0xa, 0x32 + 0xa * i);
        },
        'debugCL': function(_0x255ca9) {
            this['debug'] ? (0x32 > this['debug']['length'] || this['debug']['splice'](0x0, 0x1), this['debug']['push'](_0x255ca9), this['debugLine']++) : (this['debug'] = [], this['debugLine'] = 0x1, this['debug']['push'](_0x255ca9));
            console['log'](_0x255ca9);
        },
        'debugEnable': function() {
            ig['input']['pressed']('click') && (this['debugEnableTimer'] = new ig['Timer'](0x2));
            this['debugEnableTimer'] && 0x0 > this['debugEnableTimer']['delta']() ? ig['input']['released']('click') && (this['debugEnableTimer'] = null) : this['debugEnableTimer'] && 0x0 < this['debugEnableTimer']['delta']() && (this['debugEnableTimer'] = null, this['viewDebug'] = this['viewDebug'] ? !0x1 : !0x0);
        }
    });
    ig['domHandler'] = null;
    ig['domHandler'] = new ig['DomHandler']();
    ig['domHandler']['forcedDeviceDetection']();
    ig['domHandler']['forcedDeviceRotation']();
    ig['apiHandler'] = new ig['ApiHandler']();
    ig['sizeHandler'] = new ig['SizeHandler'](ig['domHandler']);
    ig['ua']['mobile'] ? (ig['Sound']['enabled'] = !0x1, ig['main']('#canvas', MyGame, 0x3c, ig['sizeHandler']['mobile']['actualResolution']['x'], ig['sizeHandler']['mobile']['actualResolution']['y'], ig['sizeHandler']['scale'], ig['SplashLoader']), ig['sizeHandler']['resize']()) : ig['main']('#canvas', MyGame, 0x3c, ig['sizeHandler']['desktop']['actualResolution']['x'], ig['sizeHandler']['desktop']['actualResolution']['y'], ig['sizeHandler']['scale'], ig['SplashLoader']);
    ig['soundHandler'] = null;
    ig['soundHandler'] = new ig['SoundHandler']();
    ig['sizeHandler']['reorient']();
    this['DOMAINLOCK_BREAKOUT_ATTEMPT'];
    this['END_OBFUSCATION'];
});