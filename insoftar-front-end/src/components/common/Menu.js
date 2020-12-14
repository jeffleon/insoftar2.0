import React from 'react';
import { Header, Image, Table, Button, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';


const Menu_ = ({users}) => {
    return(
       <Table called>
           <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Nombre</Table.HeaderCell>
                    <Table.HeaderCell>Apellido</Table.HeaderCell>
                    <Table.HeaderCell>Cedula</Table.HeaderCell>
                    <Table.HeaderCell>Telefono</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell/>
               </Table.Row>
            </Table.Header>
            <Table.Body>
                {users.length?
                users.map((element, index)=>{
                    return(
                        <Table.Row key={index}>
                            <Table.Cell>{element.nombre}</Table.Cell>
                            <Table.Cell>{element.apellido}</Table.Cell>
                            <Table.Cell>{element.cedula}</Table.Cell>
                            <Table.Cell>{element.telefono}</Table.Cell>
                            <Table.Cell>{element.email}</Table.Cell>
                            <Table.Cell>
                                <Link to={`/update/user/${element.id}`}>
                                    <Button positive><Icon name="book"/>
                                        Edit User
                                    </Button>
                                </Link>
                            </Table.Cell>
                        </Table.Row>
                    )
                }):null}
            </Table.Body>
            <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell colSpan='6'>
                        <Link to='/create/user'>
                            <Button
                                floated='right'
                                icon
                                labelPosition='left'
                                primary
                                size='small'
                            > 
                                <Icon name='user' /> Add User
                            </Button>
                        </Link>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
       </Table> 
    );
}

export default Menu_;