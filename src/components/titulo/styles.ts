import styled from 'styled-components'

// import { ThemeLight } from '../../themes/Light';
import { ThemeDark } from '../../themes/Dark';

import { Props } from '.';

export const Titulo = styled.h3<Props>`
    color: ${(props) => (props.theme as ThemeDark).corPrincipal};
    font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
    font-weight: bold;
    margin-bottom: 16px;
`
