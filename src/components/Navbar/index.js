import React from "react";

import { DropdownOption, DropdownProvider, DropdownRoot } from '../Dropdown'
import { Container, DropdownStyles } from './styles';
import { Products, Developers, Company } from '../../components/Content';

function Navbar() {
    return (
        <DropdownProvider>
            <DropdownStyles>
                <Container>
                    <ul>
                        <li>
                            <DropdownOption
                                name='Produtos'
                                content={Products}
                                backgroundHeight={286}
                            />
                        </li>
                        <li>
                            <DropdownOption
                                name='Desenvolvedores'
                                content={Developers}
                                backgroundHeight={150}
                            />
                        </li>
                        <li>
                            <DropdownOption
                                name='Empresa'
                                content={Company}
                                backgroundHeight={200}
                            />
                        </li>
                    </ul>
                </Container>
                <DropdownRoot />
            </DropdownStyles>
        </DropdownProvider>
    )
}

export default Navbar;