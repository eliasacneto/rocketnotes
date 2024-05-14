import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";
import { Container, Links, Content } from "./styles";

export function Details() {
    return (
        <>
            <Container>
                <Header />

                <main>
                    <Content>
                        <ButtonText title="Excluir nota" />

                        <h1>Introdução ao React</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia pariatur provident porro nulla dolore, placeat facilis voluptate, quaerat perspiciatis quo! Vero itaque perspiciatis porro voluptatem quas totam quam blanditiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. At mollitia doloribus possimus eum officiis ipsam, cumque esse et quos, reiciendis vero pariatur! Nulla quis, quaerat porro id consequatur perspiciatis ut.</p>
                        <Section title="Links úteis">
                            <Links>
                                <li><a href="#">https://rocketseat.com.br</a></li>
                                <li><a href="#">https://rocketseat.com.br</a></li>
                            </Links>
                        </Section>

                        <Section title="Marcadores">
                            <Tag title="express" />
                            <Tag title="nodejs" />

                        </Section>
                        <Button title="Voltar" />
                    </Content>
                </main>
            </Container>
        </>
    );
}