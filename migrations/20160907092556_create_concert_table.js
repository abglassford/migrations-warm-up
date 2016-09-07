
exports.up = (knex) => {
  return knex.schema.createTable('concerts', (table) => {
    table.increments()
    table.string('name').notNullable().defaultTo('')
    table.float('price').notNullable().defaultTo(1.00)
    table.timestamps(true, true)
  })
};

exports.down = (knex) => {
  return knex.schema.dropTable('concerts')
};
