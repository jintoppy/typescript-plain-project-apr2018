import {users} from './data';
import IUser from './models/user';

const containerDiv: HTMLDivElement = document.querySelector('#container');
const searchInput: HTMLInputElement = document.querySelector('#myfilter');


const renderList = (users: Array<IUser>) => {
    containerDiv.innerHTML = '';
    const tableEl : HTMLTableElement = document.createElement('table');
    const headerTr : HTMLTableRowElement = document.createElement('tr');
    headerTr.innerHTML = '<th>id</th><th>Login</th>';
    tableEl.appendChild(headerTr);
    users.forEach((user: IUser) => {
        const itemTr : HTMLTableRowElement = document.createElement('tr');
        const loginCellTd : HTMLTableCellElement = document.createElement('td');
        const idCellTd : HTMLTableCellElement = document.createElement('td');
        idCellTd.innerHTML = ''+user.id;
        loginCellTd.innerHTML = user.login;
        itemTr.appendChild(idCellTd);
        itemTr.appendChild(loginCellTd);
        tableEl.appendChild(itemTr);
    });
    containerDiv.appendChild(tableEl);
};

searchInput.addEventListener('keyup', () => {
    const query = searchInput.value;
    const filteredUsers = users
                            .filter((user: IUser) => user.login.includes(query));
    renderList(filteredUsers);

});

renderList(users);
