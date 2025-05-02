import { useEffect, useState, useRef } from "react";
import { MessageBubble } from "./MessageBubble";
import usImage from "../assets/us.png";

type messageType = {
  id: number;
  message: string;
  sent: boolean;
  loading: boolean;
  image?: boolean;
  interval: number;
};

export const Chat = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0);
  const [messages, setMessages] = useState<messageType[]>([
    {
      id: 1,
      message: "Oi, meu bem!",
      sent: false,
      loading: false,
      interval: 1000,
    },
    {
      id: 2,
      message: "Tá gostando da noite? Kkk",
      sent: false,
      loading: false,
      interval: 1000,
    },
    {
      id: 3,
      message:
        "Nesse último mês nós vivemos muita coisa, né? E tudo sem desgrudar um do outro, do nosso jeitinho, desde o primeiro beijo",
      sent: false,
      loading: false,
      interval: 1000,
    },
    {
      id: 4,
      message:
        "E que beijo kkkk, ainda fico em choque de como encaixou tão bem",
      sent: false,
      loading: false,
      interval: 3000,
    },
    {
      id: 5,
      message:
        "Penso sempre em cada beijo, cada abraço, cada risada, cada chameguinho que me deixa tão relaxado que falto cair no sono kkk, cada momento em que todo o resto deixa de existir e somos só você e eu",
      sent: false,
      loading: false,
      interval: 2000,
    },
    {
      id: 6,
      message: usImage,
      sent: false,
      image: true,
      loading: false,
      interval: 4000,
    },
    {
      id: 7,
      message: "Olho pra essa foto e não consigo não pensar, que casalzão",
      sent: false,
      loading: false,
      interval: 1000,
    },
    {
      id: 8,
      message:
        "Uma vez eu li que o amor não é uma procura, mas sim um encontro",
      sent: false,
      loading: false,
      interval: 3000,
    },
    {
      id: 9,
      message:
        "E eu não me canso de pensar a sorte que eu tenho em ter te encontrado, e de poder viver esse amor com você",
      sent: false,
      loading: false,
      interval: 3000,
    },
    {
      id: 10,
      message:
        "Eu quero poder continuar vivendo cada momento especial contigo e com isso eu quero te perguntar",
      sent: false,
      loading: false,
      interval: 3000,
    },
    {
      id: 11,
      message: "Aceita namorar comigo?",
      sent: false,
      loading: false,
      interval: 2000,
    },
  ]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    // Show first message immediately
    setMessages((prev) =>
      prev.map((msg, idx) => ({
        ...msg,
        loading: idx === 0,
        sent: false,
      }))
    );
    scrollToBottom();

    let timeoutId: number;

    const showNextMessage = () => {
      const nextIndex = currentIndexRef.current + 1;
      if (nextIndex <= messages.length) {
        setMessages((prev) =>
          prev.map((msg, idx) => ({
            ...msg,
            loading: idx === nextIndex,
            sent: idx < nextIndex,
          }))
        );
        scrollToBottom();

        if (nextIndex < messages.length) {
          const nextMessage = messages[nextIndex];
          currentIndexRef.current = nextIndex;
          timeoutId = window.setTimeout(showNextMessage, nextMessage.interval);
        }
      }
    };

    const firstMessage = messages[0];
    timeoutId = window.setTimeout(showNextMessage, firstMessage.interval);

    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array since we're using refs

  return (
    <div
      ref={chatContainerRef}
      className="p-8 h-screen w-screen overflow-y-scroll flex flex-col gap-2 items-start justify-start"
    >
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          message={message.message}
          image={message.image}
          loading={message.loading}
          sent={message.sent}
        />
      ))}
    </div>
  );
};
