export const columnDef = [
    {
        accessorKey: 'id',
        header: "STT",
    },
    {
        accessorKey: 'username',
        header: "Username",
    },
    {
        accessorKey: 'firstname',
        header: "First Name"
    },
    {
        accessorKey: 'lastname',
        header: "Last Name"
    },
    {//tạo header kiểu function
        accessorFn: (row) => `${row.firstname} ${row.lastname}`,
        header: "Full Name",  
    },
    {
        accessorKey: 'email',
        header: "Email",
    },
    {
        accessorKey: 'gender',
        header: "Gender",
    },
    {
        accessorKey: 'city',
        header: "City",
    },
    {
        accessorKey: 'job',
        header: "Job",
    },
]

