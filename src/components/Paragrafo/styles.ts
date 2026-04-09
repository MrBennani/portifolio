import styled from 'styled-components'

// import { ThemeLight } from '../../themes/Light';
import { ThemeDark } from '../../themes/Dark';

import { Props } from '.';

export const P = styled.p<Props>`
    font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
    color: ${(props) => props.tipo === 'principal'
        ? (props.theme as ThemeDark).corPrincipal
        : (props.theme as ThemeDark).corSecundaria};
    line-height: 22px;
`
