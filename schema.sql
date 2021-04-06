CREATE DATABASE ebay
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;
USE ebay;

CREATE TABLE questions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  text TEXT
);

CREATE TABLE answer_categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category TEXT
);

CREATE TABLE answers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_question INT,
  id_category INT,
  text TEXT,
  FOREIGN KEY (id_question) REFERENCES questions (id),
  FOREIGN KEY (id_category) REFERENCES answer_categories (id)
);

CREATE TABLE user_answers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  question_id INT,
  answer_id INT,
  answer_category_id INT,
  FOREIGN KEY (question_id) REFERENCES questions (id),
  FOREIGN KEY (answer_id) REFERENCES answers (id),
  FOREIGN KEY (answer_category_id) REFERENCES answer_categories (id)
);

INSERT INTO questions (`text`) VALUES 
('Вопрос категории про отдых и увлечения'),
('Вопрос категории про любовь и семья'),
('Вопрос категории про здоровье и внешность');

INSERT INTO answer_categories (`category`) VALUES 
('ДРУЖБА'),
('РАБОТА'),
('САМОРАЗВИТИЕ');

INSERT INTO answers (`text`, `id_question`, `id_category`) VALUES 
('Дружба', 1, 1),
('РАБОТА', 1, 2),
('САМОРАЗВИТИЕ', 1, 3),

('ДРУЖБА', 2, 1),
('РАБОТА', 2, 2),
('САМОРАЗВИТИЕ', 2, 3),
('ДРУЖБА', 2, 1),

('РАБОТА', 3, 2),
('САМОРАЗВИТИЕ', 3, 3),
('ДРУЖБА', 3, 1);
