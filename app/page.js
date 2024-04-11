import Image from "next/image";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src={"/400x600.jpeg"}
        width={600}
        height={600}
        className={styles.img}
        alt="imgLautrec"
      ></Image>
      <div className={styles.description}>
        <h3 className={styles.text}>THE WOMEN AND THE ELLES SERIES</h3>
        <audio
          controls
          src="/THE-WOMEN-AND-THE-ELLES-SERIES.mp3"
          className={styles.audio}
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        <p className={styles.p}>
          Women were one of the main themes of Toulouse-Lautrec's works, through
          which the artist was able to deliver an unprecedented and powerful
          vision of the world of women, looking into its intimacy and exceeding
          the limits of the representation of figures and bodies. His interest
          in the most private aspect of femininity is reflected in the choice of
          subjects: women in the bathroom, lying down women, prostitutes in love
          poses, and even bourgeois women sitting in Parisian cafés, among the
          boulevards, in parks or cabarets. In any case, women were an integral
          part of the world of the night that Lautrec loved so much. The
          author's curious gaze discovered café-concert goddesses and gaudily
          made-up cancan dancers. Among them, there was Jane Avril, with her
          stylish, slim and cheerful figure, never vulgar or provocative, and
          whose friendship with the painter became deep and lasting. And there
          were also Yvette Guilbert, the singer who used to wear long black
          gloves and was equally successful among the general public and the
          intellectuals, and the red-haired Englishwoman May Milton. In 1896
          Toulouse-Lautrec made one of his most popular series, Elles,
          consisting of ten prints with cover by the publisher Gustave Pellet.
          This series of lithographs represents the lesbian women and
          prostitutes he had met during his long stay in a brothel in Rue des
          Moulins. Although the portrayed poses are charming and erotic, Lautrec
          shows us scenes full of intimacy, as well as tender and knowing gazes
          which never suffer the voyeurism that so many other artists had
          imposed before him on the same subject. Lautrec reflects life as he
          saw it, with no judgment or prejudice. He always manages to observe
          changes that many of his contemporaries could not even imagine, and
          the gift of discovering beauty where no one else could see it.
        </p>
      </div>
    </main>
  );
}
