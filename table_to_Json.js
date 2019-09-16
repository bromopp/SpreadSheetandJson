async function main () {
    const query = cuba('https://docs.google.com/spreadsheets/d/1rfrWYPk0SeByDVfe_kR0Cd6uoj9klSsxAHphDJUMLPA/edit#gid=0')
    const array = await query('select *')
    console.log(array)
    //=> [
    //=>   { id: 1, name: 'foo' },
    //=>   { id: 2, name: 'bar' },
    //=>   { id: 3, name: 'baz' }
    //=> ]
  }
  main()
  