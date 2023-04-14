//a function to load data into frontend
function loadData(id, title, author, subject, publication_date) {
    let tableRow = document.createElement('tr');

    tableRow.innerHTML = `
    <tr>
        <td>
            ${id}
        </td>
        <td>
            ${title}
        </td>
        <td>
            ${author}
        </td>
        <td>
            ${subject}
        </td>
        <td>
            ${publication_date}
        </td>
    </tr>
    `;

    return tableRow;
}

let tableBody = document.getElementById('tableBody')

//fetching data from backend
fetch("http://localhost:3000/books")
    .then(res => res.json())
    .then(json => {
        json.map(
            data => {
                tableBody.append(loadData(data.id, data.title, data.author, data.subject, data.publication_date))
            }
        )
    })

