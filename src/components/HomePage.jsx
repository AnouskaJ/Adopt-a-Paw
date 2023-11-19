import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div className = "bigbody">
      <header className={isSticky ? 'sticky' : ''}>
        <a href="#" className="logo">Adopt-a-<span>Paw</span></a>
        <div className={`menutoggle ${isMenuActive ? 'active' : ''}`} onClick={toggleMenu}></div>
        <ul className={`navigation ${isMenuActive ? 'active' : ''}`}>
          <li><a href="#banner">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#menu">Adopt</a></li>
          <Link to="/login"><li><a>Login</a></li></Link>
          <Link to="/services"><li><a>Services</a></li></Link>
          <li><a href="#contactus">Contact</a></li>
        </ul>
      </header>

      <section className="banner" id="banner">
        <div className="content"></div>
      </section>

      <section className="about" id="about">
        <div className="row">
          <div className="col50">
            <h2 className="titleText"><span>A</span>bout Us</h2>
            <p className="about-text">Welcome to Adopt-a-Paw, a compassionate platform dedicated to finding forever homes for precious pets. We understand the unconditional love and joy that pets bring to our lives, and we believe that every animal deserves a loving and caring family<br /><br />Our mission is to connect rescue animals with compassionate individuals and families, providing them with a second chance at a happy and fulfilling life.</p>
          </div>
          <div className="col50">
            <div className="imgbx">
              <img src="https://img.freepik.com/free-photo/group-portrait-adorable-puppies_53876-64778.jpg" alt="About Us" />
            </div>
          </div>
        </div>
      </section>

      <section className="menu" id="menu">
        <div className="title">
          <h2 className="titleText">Up for <span>A</span>doption</h2>
          <p> Welcome a furry friend into your heart and home!</p>
        </div>
        <div className="content">
          <div className="box">
            <div className="imgbx">
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhUYGRgaGhoYGhwaGBgYGBwaHBgZGRgaGBgcIS4lHB4rIRoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQhJSs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0PzQ/Pz80NDQ0Mf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQACAwYBB//EADkQAAEDAgMFBwMDAwQDAQAAAAEAAhEDIQQSMQVBUWFxIoGRobHB8AYT0RQy4UJS8SNicoIWF9IV/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDBAAF/8QAJBEAAgICAwACAwADAAAAAAAAAAECERIhAzFBEyIEMlEzYXH/2gAMAwEAAhEDEQA/APsT0HWaN69rV4WLqkpuib2yVA2IXNbUlpJDkyxlUjRKMS+Qoc0k1Q8UDYbEO1KviKZcOaFY+CiHVSoRkpKmO0Y06uU3WzsXNpQxKze0SCuknFaAxrh2yFhicPvWVHEwiGPLjdPSlGjkgF9MjcshRKcfpHPMNB67vFEHZLW/vqQeA/lYZ8ElL6jJWIHggKMrEp23ZtMmczyO4ei1bSpN0pt75JRXD62NgwHDEAK9bEiLIh7WTOTuBIHeFH0WOH7B5grUtRpHYMTuJJleOrQm7MJSH93iPwrHD0N7D1JJUmq9DgxViajS23BL3bQLCIXQ4jZdN7TkJBjiuPxmEdJBsQpScovLozTjKLDNoY51RsLnMU05kxY8tsUPiqjZVoTUrb2LFob7KwTajDm3IPFUm03loVcNtDI2Gqjn5yXQUOSnHXYZN9GVct3K2GwsiVk7DumQEXhnk24KTeKAqTo0GzgRZBvwkJ7QiNULi2BdGWTHeIn+w1REfaHFRVpC3E+pV6+ZeU6xCBfiAN61p1wVscm2GLSK418pVVKPxh4JNXqrLyTqVMtFWQrVlQQghUuiGiUElLoNmoYCsatODqruGVZm6eXVCsIwuHzCSnWF2WIBcSAhdiUwd0xqdwRG1toBmrg0cSqZKMUGMXJmuP2iyi3KP5SqjXdUObQc0pxOJNV7WtMt1nlxlGvrhgDAs+Tk7fRpUFFUNHPAF78EvrY0tvCyxWPDQL3OgQeJxIc0jf6Kc5VpDxiMWYzfO6e5aOxVrHmufwziWgyimPdEjgujN0FxG7ax4KmIdaQEIzEgMmb80O/GyI39d6KkmhaCcNtIseJNkVtbDtezOLHiJXNVqudp1DhccU12LjM7MriTb5ZKnemLyQUonP4kgb0rxESne2cLkfJcIOhuke0YgcVXijieek02g7DYWWAhM2Ma1gSeg94YNV4XvPGEXJLYsnod0riVmyk0yQYK0wDBlibrX9FmmLKb27o5xbpmGGpEk5nRwhVq081p0WrrdkoOu1zNLhCSpaOrRPsc16hPuu5qKdsXFHbVWFUo4kiyJrvEJQ6pdauTkxVoqo7HFQyEA+kjMG+QiHUgU6UZxtlVoSOoLajZE16S8pM5JEkn9TjKoydFbBYYlwHNbuYEVWrtos/3OHfHJNXrDFOToJqVGshjIt4A8TxSPbMuLQADJuXadQN692VXc+SRAB3abt/ugduYoB5cT+xh00E2HUlLN3E0xjToywFcdt2sHKO5F0WC73mALxvXL7IxDy3sCTJJnQEnej9o06tRhYH5eYG9TVIdoXfUP1BRLi1mcubeWSYje7kvdm4kPbIcbibmbrnj9MYlpIA7JntSQTNjPEFdRsHY32g3Nd0CevIKvJGCjp2xYSle+h3hqBDAOIW2Hw/ZcETSwziLgrR+HcNFJQ9GcjjNq4osaWkkEH4UJsT6kbmy1C4F2kjKDwynf1T3bmxzWbBEG8WvK4k/SVbMC5wgQJm4iwF9E/HGGLy0LKTtUdrjCBD2mWm449CVtsOsCHQe/wDK5yqKgYWMJdlvfU8QVr9KYy7wbGdPJTr0Z9UdHtKm57OzdzTMcuS5baFPQwugbispkG2sLzaFJr2ZxA6KkKvZl5eOvsL6NUZLqzqzS1BtGoVnstZI3G6Mcpb0b4bE5TMpg3aVrJG2gVuynCO0dcukE16jnEFXeTEEqjmxBBUfVBGqW2xd2Y5VFaAouxDTO2xWHMSEmqCHJ0/FWSHFu7aPNjjaKu0P9ltBATOrTC5jAYvKYTY47MFXh5IuOx07JVcJhZkwqGdZQ9WsdyOVDjDBjM690p+osV/qEHoEfsmuA+XbvgQ/1Ds4vex7LibrpbVlOJpPZrgewxrYEuueU+65L6rxTgH3sYHUnf3CfFdTn7QbyufL8rj/AKmaalZlO0Gpe0wAJPkUrq0Wj6Ofp7CNbSYAN0k8TvKY4miAJG5Z7OqNgtYLNgIh1Am+7vSNaO9A8E4vfB0bdNcFQlxcR0QtJrW9kG5NzEdyZOrZGGP6QXHuEqkIWgSke4mrl1c1vLee5DN2izQvaD3r5d9TfU9Q1HBptN76nf3TbuSU7bfE71rXDFdsz/Iz7jVbnZ2S1w4tM/4K5Pbb3ggNtmseq5f6O+pqrcRTY4y2o8Md0ccoPcYK7fbjGmq0X7WsceKzc0Mei3HKwXZ2EGQzcxO9IBQLMSco1APh/hdJkyaEhcztDHtdWsbgwfdQjeynoftE5cp4mCPNMsNQz0LJZXpF9uJBTdnYpQOC5JypITmaUaEVVhatKYBgnctqTM7SSEK9pmEI8bjdnnqNKwuqBFlP05c2VQgNFzeFVuJdEDRNF72DKzMOiygZJUoQ43Xtc5NEr7sRypm/6bmog/1hUXZI7M6j7yArkyo2reFcCVkS/pbLIyDuaZYSql9anAVsJUhNGTizo6dDl9Syza6UM+qs21lR8jbK6DXOjRH7NrFzX8A2fwk9J2YwmrGhlF8akifYK3G5Pfg0VbAGvDSXOPEnoFx7K5fWc88THfr3DTuT7GNc85Gz2rSNzd7j598JRVEPcQA0DstHAAQO9NejXHscfTDCKjpPYgmOMI//AMga6qabYtuSvZ2KawgTJ/qtx3Bc3tlraOJbVaHOkyIO8lNBZKhZOnZ9GYzO6VbFvAaQZuCDHMR+V5gMU11MPbvAPiEuxmMGkeyrFYslJ2j5btzBNY9xy5gSbyReSbtSQ3K67bZzO3fLn1SBuUuIBBK1XZBoefSWFZ91ryyAHDKJJJIvPISF3mLrCQ/+3XiOi4vYNTJB8AT7J/U2g3K/M2BlJJ5RdZea26LcejSh9Sse91N19081x2IZke5zr9vv1VdnUC1xeb6kHkd692hUD5DR3KeNOisX6dfggHAEcB+Qi8Q/sEFc5sGu57Whv7hDTy6p1jKZ7V5SxeMqI/kvpomycUwZgVhj3jNYICg0glauqSulO20YpSa7MazyV7QxECCo4hevDYSx7E43s3pPEEhWOzajxnOiX0qhmAuhwW0czC06iyNRTdnNK7E/6RRH5R/cvElIGSLMqStv1EIfCNV69MLMUppWjZ9aQsWVIVS6Ahi+6Ci2CxrScTvWxYgsK9HZ1XJRRaNUWw4IKLdinAQIuhmPVnPCn8rfQcthNMdkujQTYx5pDiKH9Xf3roKrWtpXMF143xuSpzgbGLfLq6b0jfxKo2AYBga1xdvt15IPF0Q/PIsbQia9SXQNB80Wb3AX0j4VROnodxsV7L2nXwxyhudhN2iARwc3wvzK82ntxzj2GOsb5oMf3Cx13L1nbqDKXNMkZhqJBtB15qlLZ1ao9oeWhrTnGVoAtfdAGq2wcJLfZllGUeuhhj/pb7jg9lUlj2hzeGVwkeSBb9FOg9q82Vf/ACPE4dxaGNcyScjg7KCbnIZlvTTktf8A2HViG4dgdxLnEeEe6vUUdlGtinatF+EeGE5szQ6OF4UGLL25RMWJ1vG7og8a2rVd995zOcTJ4DcI3CNFrs+TZZuXHsMNv/Q+2awCx3gxw5hZ4fAjPbQzCmHaRF0zwzMpzbvQrLJmiMQPZFPJXJ3E+qd4p5a4tKUYQE1iRxT3HPaMj3XDbfOSm3uzL+VC42vBQxkuvaSisRhGBsjVZ4zGscRl1WTa2a0qn/Tzm5S0KyTnhE5LKYimc0q5YQEjW9Cu4g1AFrphHuaYkIZr76I1lTspZI5SsDl68RWZRLsOgmi+F5WqIcOVolKol7KOeV61pKsKa0pOhdetE9BGHZCPaUv+5wRFJ8qTV7Y0b8NsyKwRl7REyULCN2Iz/ULuAMJoR2h4puSJt5oJ1MC3VLqVCxKa7RO7hJPulTa24a+nVWlpnqw/WgOvT3D8JViniS0SY1Am5TnEmN9z8lAYQXIAsjGQ7WgBlEsGa868Ey2PthhltQ5XacAUPjTeO5C0tntJkjSXH0CtCVE5RsP2oGP+WKRHCUwbuA+cULicQ9r3BhgDXhKq6g5wlxn5wVrfrIuK/gc+sC0tZcaErPA076BW2RlaYI5eOiPqYfK6Rv8A8KU5eFIxNqVOevzT5uTOg23VBYb5yRrNOvwqTZXEGwtEio7xR20HZqbhx0VGfuJ5LOoZYZ3JWraI8yuLOXp1IcQmFCpzQbKXbMIg4eCtLjSMCjSDhJUIkwsMNUOiIc06qVOyElswquymEI+q8Gwsjq9FxhygJi7VWEclbGjx3tgP338FEb94cF4nwRT44hWVeherxzliRNngeoH3WauAg0gKPoZTeIW1NyXNY5G4ZnFTkkc0EZ002M+HkcQlRCIwNbK8HuTQdUxuN1JMJx7yG1Hb9G+XuSlOH7IA43PQfPNPNoNljiOvnKT5YeOAaD4CPVVkj14NNFMWLElLcPiAJiJPkEyxDc7SBfj3pbRpEuygAAak6Jeii6LN7RtfnuH5WuQAHoiXMDd8893gg6j5uNBbre6ZM4UVsLoI17R71Z9Ds9/smFVw1j+mVZjA5gPH1hHJiuNnOuYWuBHeukwlMPidCEmxLADB7k22QbDkjJ2dWgo4ct7W7U+63cBlMcnDpofXzRzGSI4ylmEOjd4lp6GfwUiFyKtfDZ5KzBLOqHxL7OHSO/8AyiWsIYOirBWyPPKoibDU+2bTdOcZsnK3MRulLGVslSSN8pvjtrZ2ZQNQrycV2YpSpCulRa0Sq1q1rKpaSsS26mqbFilJ7N8NiDoUyaWluiUl4kIsPtZVUktFbXhPsNUWcniouyBaNXuhZZ1KouvCyyx4k6dWz1olE02IRj4KNAkISi30K3qjYPC2al8oumbJHChGmtmzlKDZuvMythiXPDBvICMYgg9jp0Cm2d978JgJVj2Qerco8bJ1jqevASPDRI8SzOwTqLfhWa8PXgqSMNl2zAi/4Me6wxNnkDdHit9gPLpadWmDx1BHur46n2iY/wAqctFov7ADmOfaYbvO/uVa0BuUb7dyjp/n8KzKcC+sLkOwRoNweFlkK+UZTzgratSJAM8/RZVKU9Qicgeq6dRzlG7OfFpsh6Qm2kbuXJE4enDhwSyfgR4XwGnf+dEFVblfm3fl1vP1RYEC+63oQUPiN44+symiRB/tZqkbrEI7FMyvA3ECF7QpHOHLfaTbsPOPL+FTjdSIc24nObTYA4FbMcMq92zTuCq06XZVppXZldelqYlDV2QUXTpxqhsUUqpMS49IGcyUXSMBYsFo3ouhbVJJW9HSjktFIPBREfdUS4yI/FMFeVR71HOhCvJJRKSlo1GqMZW3IJjSrMYZRSJ3sZUWTdEuNkFRlbBynJP0MkUdUhM/pxubEMtvJ8AbpQ/VPvo4RiB/xd6IxjbQeKP2R0e1aUAjl6rmsSIMcfW0Lrcf2jHELncXQkfOKeapnqRehd9PUwK1QjfoOe/1TLaNDfpHrxKpsLBxXfxIBjgNfO/kjNq3Ljo0JZr6jZfY5XEvA3X9UI3E5n5BeAS4+yMxFOSDxuO+Y9z3ITAYftu5kDuFykitFWwmo3QbwPULGo3tAj/K0zzWIHABaPZAHEE+qDDYO7DXkW3j50lF4Vsxb+FcMg8tfNaYdnaHLzCD2BvQZWbDZjqlguTB3jyv4wnddnYN9R/hI8M2/WfwnXRJD7A0hv3j56LLbdKGTwI9QEZh4iOX8obaVQPokbyPSCqQS0QntMRY4AtBKzpXAhaYqn2AsKL4Cfl29GOe9I3xIgIHJO9WxVWVnQdzXRhfYseL+mjWAL17V6aZOijn2g6pVUXRRNLRhlK9Q/3CvU1yDZ6HSvCQFSVk8GUiRHFy6Cm1AvXVIQ7GrYUZTpIaPHQRQxEoxgS+jSgpjTNl0o5FPjTKFi6D6SZ/qOP+w+cBKGU0fs3EFj7f1QPNIo4saMVFnT1Kl+Yt4oB4Fzwn/KYY+jEEfISR9aGu6z4zKaTrs1xNtm1Q0ucDJfoeI3e602myWtb/AHG/RIqbyxxANrkcinlCqHhjuAg8rJMrVBap2c1VGao7g0E95ho8BHiVKTQySeBI6kI3E0MheeP5lJsS8veNzfgHoppley+Gp/seeebqf5K1xD+3HFs/n1UxFmxxk+JIS5uIuDJGU+OoifDwTJBGTakx3T8+ao6i288R6/yCgNmCT2hr73I8Fs7Ewcp1EkdN480jWxZOwhuK7BHI+1ljTEXjoltKtJI5yOh1RdTGNmOHr8gd6atidDitigwdBPeUrw+Ic830ugnve8RreT1m3umFCllCZ9E2rtF8awZEoaRCYYyt2CFz1Go4kqjhX2TMMli7YbVbIXlFkqMO5asphpmU1sKk2ENGUaoSq8G6zxtRx6KmGpyEuouxE1YP908FEd+nUR+ZDWK6j4XtB8leVGWVcIYKKiqLRihiymiqTVk14RDHgoJBohC2YFiWLdlkVo5MLopjsuiHVmD/AHA+F0rpuTn6fE1mngCfJFyTOcl0dNiGZ2O5OjyXG45pYXDmD4FdvVflYI5n8lctj6YdPW/QJeZF+NiZ0O8I/Hsq4faDqTpN26HisKlAi8wb+ZQ76pH7myFFMu1Z01VzKrZBlrrg8DzSLE4UsgRoPEjT281hg8Uac5DLTfKdx4jkmFfFh7Adztx1B5Heg1s5WgGq7MW8h7D3lAsw5c4jQTP+OaZOpAfPBemjlA8gusYlKpEu3A5WjpqluJry8xuB8dERWJHQSfnel9JhJJ42HqSghWeNqEEgfuNzyCJwuFJMaz/KrRpjNPEz4aBN8GwJmLWgzC4MAdQrOG5EsfYjvCAdVF1zEANoCxSrDBNKrwQ+d38pfh3TYKybxRj59NlKj7iEcygS2UK6jdG0C6Y3Izn9TP8AKnoxeA4RvWLGFphMmkMdMSvXsa9wOizTmk+tE5Nt6BJUTX7FLj5r1Z/mj/GNhP8ApzLRYgoX7faRr2rWnTBXoZYmxOkbYanIW4o3WuHoGEazDqcuaKElyIDZSVwxFEQsyguXIjPlfhVjUz2FWiqBxkIAMRux6U1J/tk+RhJGTchYOTkjrqxlgCRYyneOKasf2SegQbWZpPD8rVJWj0oaEOIpD18kHUpT3WKc4mnEd/iUrqvaDm3ae3n7LK40y8ZANbDCARoZjqBPdoruYCGRYRmPVFNYLt/7BZQI4D5dcwlmtGp4wB5wvKlyBvO7r880qxuMcXAM0At88Ud+pgFwu7KI+eKDTOK4umADvAF+u4eRQdSnAjfZvu73RbJOUamQT118oC2FG0nhPzuTdHAVOlGU8v5R9C3n+QvGUsw6CO+BK3NORbgPNpQs5svmJS7FvIlF0yRHmPwhsa4FciTFj3yDO+FpToBoEInZdFry9jhwI81njKRBgKil9aPO/LbTMiLoplaLEIFjHAyStLudCEk8TCtM1qVbrN1Qle1IG9CurCYJSRXjHSbejf7pUS/7vNRPjH+FcJDDEUZ0W2Fo3uiaVGUa3DgBK5WqYz5W4ngdlCGfijK3LJso7ChQcKeyTk2UZUK0puXgocFP0xCpFJAthTQCtsNULHSN9j0m6yothaVXgoqW9Foyo6BjpYeC0YwMYSd6CoVOwBxA9gjdqghgA1ha/LPQi7Obx+Il5E2aJPrC5yq91R4E2Lp6wPzKPxLCA6bkm88UDkyvaf7RPf8ACoN7NMUgzCVjne07jA5gjf3r11IvIZNtXnjvj0QP3oqTpI87j2TLC1bHj+TAQkEwq4UAh0awPEfyh3Nyh5O4ZfMJrjhLQB8I09EtxbxlcD/U2fTd3LkCz3CVmhuYkRfyn/5WFbakh8aR3kmQB4XSVteWFo5x5nxuVg0dnLJ4nmYk+w71RRSFbZ1+xa2Zt9+Z3jp5I5lmnl7Qub2XWLTE6xPfZdE83n+73kpH2AwxjoGYb/XkljahJRdRhkt3a96xNMtMkWXHHuEcGucRvasXVRJVKVS7lnV1SxTs8r8uVyosHSr0RLplVaOxKqDCZ3ZkK46iCQAdUNidmulsORtbENBEi69zZiCCklNp9FVJJA//AOYVE0yv4FRL8jGzYZh0Q5RRF9gXRizVbOUUSTAi9BauUUTeIZdGTtFkNV4olX7HDuj+1nzemu0v29w9lFFuX6now6Rxm0dD1d6JZtDUdAoos7NUQCvoOv8A8ptgdD/1UUXMYNr6t6n3STaP9Hf6qKIrsRiOl+0/8vdWbu7vVqiif04OwP7z/wAh6ro36s/6+hUUSM4u/wDf84rLGfs71FEBRNhf3PXr9VFEyPI/J/yM3d+xZO3KKLjMC47Vb4LUL1RTmOjoFFFFAsf/2Q==" alt="Special Burgers" />
            </div>
            <div className="text">
              <h3>Ace, Golden Retriever</h3>
            </div>
          </div>
          <div className="box">
            <div className="imgbx">
              <img src="data:image/jpeg;base64,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"  />
            </div>
            <div className="text">
              <h3>Luna, British Shorthair</h3>
            </div>
          </div>
          <div className="box">
            <div className="imgbx">
              <img src="https://cdn.shopify.com/s/files/1/0424/4606/1723/files/Syrian-Hamster_grande.jpg?v=1594383125" alt="Tasty Fries" />
            </div>
            <div className="text">
              <h3>Stuart, Syrian Hamster</h3>
            </div>
          </div>
          <div className="box">
            <div className="imgbx">
              <img src="https://cdn.britannica.com/80/29280-050-A3A13277/Beagles-pets.jpg" alt="Special Sandwiches" />
            </div>
            <div className="text">
              <h3>Cooper,Baegle</h3>
            </div>
          </div>
          <div className="box">
            <div className="imgbx">
              <img src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSBoK89oPXwd-GUvs4A04G7ioX984ldGTtkP4BQlsrn-VhjoGCbt6MTgoDKdC8N4r3B8XCZmj6IrQpGKrA" alt="Special Tacos" />
            </div>
            <div className="text">
              <h3>Rosie, Rosella</h3>
            </div>
          </div>
          <div className="box">
            <div className="imgbx">
              <img src="https://www.pawtracks.com/wp-content/uploads/sites/2/2022/10/gray-munchkin-cat-kitten.jpg?p=1" alt="Cat" />
            </div>
            <div className="text">
              <h3>Coco, Munchkin Cat</h3>
            </div>
          </div>
        </div>
        <div className="title">
           <Link to="/Adopt"><a href="#" className="btn">View All</a></Link>
        </div>
      </section>
      <section className="testimonial" id="testimonials">
      <div className="title white">
        <h2 className="titeText">What they <span>s</span>aid about us</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, at.</p>
      </div>
      <div className="content">
        <div className="box">
          <div className="imgbx">
            <div className="imgbx">
              <img src="https://nypost.com/wp-content/uploads/sites/2/2020/06/cat-men-52.jpg?quality=75&strip=all" alt="Customer 1" />
            </div>
            <div className="text">
              <p>I adopted my furry best friend from Adopt-a-Paw, and my life has been forever changed.</p>
              <h2>Sam, Chennai</h2>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="imgbx">
            <div className="imgbx">
              <img src="https://media.istockphoto.com/id/1058255610/photo/indian-woman-with-her-beloved-pet.jpg?s=170667a&w=0&k=20&c=8hswaQzk3xGAK8Syfd4DwgzCoh5GgjSXf6eYlD5EO04=" alt="Customer 2" />
            </div>
            <div className="text">
              <p>
               Adopting a pet has truly enriched my life, and I couldn't imagine it without my beloved furry friend by my side.
              </p>
              <h2>Anvesha,Shimla</h2>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="imgbx">
            <div className="imgbx">
              <img src="https://assets.telegraphindia.com/telegraph/faf3a767-9e7a-4684-ae58-673317231175.jpg" alt="Customer 3" />
            </div>
            <div className="text">
              <p>
               Seeing my pet thrive and knowing that I made a positive impact on their life fills my heart with immense joy and fulfillment
              </p>
              <h2>Sourabh,Jaipur</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    
      <section className="contactus" id="contactus">
  <div className="title">
    <h2 className="titeText"><span>C</span>ontact Us</h2>
    <p>Can't wait to adopt? For further information, contact us!</p>
  </div>
  <form action="https://formspree.io/f/mvojndqe" method="POST">
    <div className="contactform">
      <h3>Send Message</h3>
      <div className="inputbox">
        <input type="text" placeholder="Name" name="name" required />
      </div>
      <div className="inputbox">
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div className="inputbox">
        <textarea placeholder="Message" name="message" required></textarea>
      </div>
      <div className="inputbox">
        <input type="submit" value="Send" />
      </div>
    </div>
  </form>
</section>
<div className="footer">
        <p>Adopt-a-paw</p>
        
      </div>

    </div>
    
  );
};

export default HomePage;
