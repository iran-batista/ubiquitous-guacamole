interface MessageBubbleProps {
  message: string;
  sent: boolean;
  loading?: boolean;
  image?: boolean;
}

export const MessageBubble = ({
  message,
  sent,
  loading,
  image,
}: MessageBubbleProps) => {
  if (!sent && !loading) return null;

  return (
    <div className="bg-primary-300 text-primary-500 font-bold py-3 px-3 rounded-2xl rounded-bl-none relative leading-none max-w-[80%] flex animate-pop">
      <svg
        className="absolute bottom-0 -left-4 z-[-1]"
        width="40"
        height="28"
        viewBox="0 0 40 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M40 28H0L40 0V28Z" fill="#EAA8C3" />
      </svg>
      {loading ? (
        <div className="flex items-center justify-center gap-1 h-4">
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      ) : (
        <>
          {image ? (
            <img src={message} alt="message" className="w-60 rounded-lg" />
          ) : (
            message
          )}
        </>
      )}
    </div>
  );
};
