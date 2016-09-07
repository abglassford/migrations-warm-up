
exports.up = (knex) => {
  return knex.schema.createTable('attendees', (table) => {
    table.increments()
    table.integer('concert_id').notNullable().defaultTo(0).references('concerts.id')
    table.string('name').notNullable().defaultTo('')
    table.integer('age').notNullable().defaultTo(0)
  })
};

exports.down = (knex) => {
  return knex.schema.dropTable('attendees')
};
