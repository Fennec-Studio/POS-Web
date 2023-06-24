function generateTable(entity, data) {
    var table = {}
    switch(entity) {
        case "user": {
            var cols = []
            cols.push({name: "ID"}, {name: "Nome"}, {name: "Email"}, {name: "Role"}, {name: "Status"}, {name: "Acciones"})

            var rows = []
            for(user of data) {
                user = {
                    id: user.ID_U,
                    name: user.NAME_U,
                    email: user.EMAIL_U,
                    role: user.ROLE_U,
                    status: 1,
                    actions: `<a href="/users/details/${user.ID_U}"><i class="fas fa-eye"></i></a>`
                }
                rows.push(user)
            }
            table = {
                cols: cols,
                rows: rows
            }
            break
        }
    }
    return table
}

module.exports = {
    generateTable
}