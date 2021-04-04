CREATE DATABASE ebay
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;
USE ebay;

CREATE TABLE questions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  text TEXT
);

CREATE TABLE answers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_question INT,
  text TEXT,
  FOREIGN KEY (id_question) REFERENCES questions (id)
);

CREATE TABLE user_answers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  question_id INT,
  answer_id INT,
  FOREIGN KEY (question_id) REFERENCES questions (id),
  FOREIGN KEY (answer_id) REFERENCES answers (id)
);

INSERT INTO questions (`text`) VALUES 
('Вопрос категории про отдых и увлечения'),
('Вопрос категории про любовь и семья'),
('Вопрос категории про здоровье и внешность');

INSERT INTO answers (`text`, `id_question`) VALUES 
('Машина для хот-догов', 1),
('Новые детали для тюнинга авто', 1),
('Велосипеды всей семье', 1),

('Сюрприз в коробке', 2),
('Шуруповерт', 2),
('Усатая кружка', 2),
('Медведь', 2),

('Горшок с мазью', 3),
('Платье', 3),
('Смарт-часы', 3);
