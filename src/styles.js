import { css } from 'glamor'
import glamorous from 'glamorous';

const spinLogoAnimation = css.keyframes({
    '0%': { transform: `rotate(0deg)` },
    '100%': { transform: `rotate(360deg)` }
});

export const MyApp = glamorous.div({
    textAlign: 'center',
});

export const Logo = glamorous.img({
    animation: `${spinLogoAnimation} infinite 20s linear`,
    height: 80
});

export const Header = glamorous.div({
    backgroundColor: '#222',
    height: 150,
    padding: 20,
    color: 'white'
});

export const Intro = glamorous.div({
    fontSize: 'large',
});