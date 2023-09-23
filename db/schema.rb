# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_09_23_005659) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: :cascade do |t|
    t.string "name"
    t.integer "value"
    t.integer "alternate_value"
    t.string "cardable_type", null: false
    t.bigint "cardable_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "table_id"
    t.index ["cardable_type", "cardable_id"], name: "index_cards_on_cardable"
    t.index ["table_id"], name: "index_cards_on_table_id"
  end

  create_table "dealers", force: :cascade do |t|
    t.bigint "table_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["table_id"], name: "index_dealers_on_table_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "username", null: false
    t.bigint "table_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["table_id"], name: "index_players_on_table_id"
    t.index ["username"], name: "index_players_on_username", unique: true
  end

  create_table "shoes", force: :cascade do |t|
    t.bigint "table_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["table_id"], name: "index_shoes_on_table_id"
  end

  create_table "table_types", force: :cascade do |t|
    t.integer "buy_in_max", null: false
    t.integer "buy_in_min", null: false
    t.integer "ante", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tables", force: :cascade do |t|
    t.bigint "table_type_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["table_type_id"], name: "index_tables_on_table_type_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "cards", "tables"
  add_foreign_key "dealers", "tables"
  add_foreign_key "players", "tables"
  add_foreign_key "shoes", "tables"
  add_foreign_key "tables", "table_types"
end
