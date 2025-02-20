
exports.up = function (knex) {
    return knex.schema.createTable('pantry_ingredients', table => {
        table.increments('pantry_ingredients_id') // no serial
        table.integer('pantry_id')
        table.foreign('pantry_id').references('pantry.pantry_id')
        table.integer('ingredient_id')
        table.foreign('ingredient_id').references('ingredients.ingredient_id')
        table.decimal('amount',4, 2)
        table.string('amount_unit')
        table.date('expiration')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('pantry_ingredients')
};
