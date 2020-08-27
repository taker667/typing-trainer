# TypingTrainer
## wordsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|spell|string|null: false|
### Association
- belongs_to :lesson

## lessonsテーブル
|Column|Type|Options|
|------|----|-------|
|title|string|null: false|
### Association
- has_many :words