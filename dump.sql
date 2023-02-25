create table users(
id serial primary key,
  name text not null,
  email text not null unique,
  password text not null,
  cpf text not null unique,
  birthdate date,
  phone text,
  address text,
  status text
);

drop table users
drop table transactions

create table category(
id serial primary key,
  description text
);

create table transactions (
id serial primary key,
type text not null,
  description text,
  user_id integer not null,
  category_id integer not null,
  foreign key (user_id) references users (id),
  foreign key (category_id) references category (id)
);

insert into category (description) values
('Alimentação'),
('Assinatura e Serviços'),
('Casa'),
('Mercado'),
('Cuidados Pessoais'),
('Eduacação'),
('Família'),
('Lazer'),
('Pets'),
('Presentes'),
('Roupas'),
('Saúde'),
('Transporte'),
('Salário'),
('Vendas'),
('Outras Receitas'),
('Outras despesas')