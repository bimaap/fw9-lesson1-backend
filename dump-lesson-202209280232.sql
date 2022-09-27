--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

-- Started on 2022-09-28 02:32:59

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 3312 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 209 (class 1259 OID 40990)
-- Name: contact_us; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contact_us (
    first_name character varying,
    last_name character varying,
    needed character varying,
    message character varying,
    email character varying,
    phone character varying,
    id integer NOT NULL
);


ALTER TABLE public.contact_us OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 40997)
-- Name: contact_us_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.contact_us ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.contact_us_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3305 (class 0 OID 40990)
-- Dependencies: 209
-- Data for Name: contact_us; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contact_us (first_name, last_name, needed, message, email, phone, id) FROM stdin;
Bima	Armedianto	1	Hallo guys	bima@gmail.com	081516151625	1
Robi	Nawan	2	Tutorial web design dong	robi@gmail.com	0812372167271	7
Dimas	Rendraka	3	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.	dimas@gmail.com	081728783721	8
Romi	Ravael	4	It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.	roni.ravael@mail.com	0876271662	9
Ronaldo	Wati	3	This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.	ronaldo.wati@gmail.com	085162767463	10
\.


--
-- TOC entry 3313 (class 0 OID 0)
-- Dependencies: 210
-- Name: contact_us_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contact_us_id_seq', 10, true);


--
-- TOC entry 3165 (class 2606 OID 41004)
-- Name: contact_us contact_us_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contact_us
    ADD CONSTRAINT contact_us_pk PRIMARY KEY (id);


-- Completed on 2022-09-28 02:32:59

--
-- PostgreSQL database dump complete
--

