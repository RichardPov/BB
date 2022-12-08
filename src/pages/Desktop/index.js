import React from "react";

import { Column, Row, Img, Text, Line, Button, Stack } from "components";

const DesktopPage = () => {
  function handleNavigate() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <Column className="flex flex-col font-roboto items-center justify-start mx-[auto] py-[113px] sm:py-[45px] md:py-[58px] w-[100%]">
        <Column
          className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
          style={{ backgroundImage: "url('images/img_1hero.png')" }}
        >
          <Column className="bg-gradient  flex flex-col justify-start md:p-[16px] p-[32px] sm:px-[15px] sm:py-[12px] w-[100%]">
            <Column className="flex flex-col justify-start max-w-[1747px] sm:mx-[0] mx-[auto] my-[12px] sm:my-[4px] md:my-[6px] sm:px-[15px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
                  <Img
                    src="images/img_image5.png"
                    className="flex-shrink-0 max-w-[100%] w-[15%]"
                    alt="imageFive"
                  />
                  <Text
                    className="flex-grow ml-[16px] sm:ml-[6px] md:ml-[8px] text-white_A700 tracking-ls031527093052864075 md:tracking-ls1 sm:tracking-ls1 uppercase"
                    as="h6"
                    variant="h6"
                  >
                    BANSkÁ Štiavnica
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-dmsans items-start mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[3px] md:mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                    <Text
                      className="font-bold text-white_A700 uppercase w-[auto]"
                      variant="body2"
                    >
                      Fotogaléria
                    </Text>
                    <Text
                      className="font-bold text-white_A700 uppercase w-[auto]"
                      variant="body2"
                    >
                      Fakty a zaujímavosti
                    </Text>
                    <Text
                      className="font-bold text-white_A700 uppercase w-[auto]"
                      variant="body2"
                    >
                      videá
                    </Text>
                    <Text
                      className="font-bold text-white_A700 uppercase w-[auto]"
                      variant="body2"
                    >
                      zážitky
                    </Text>
                  </Row>
                  <Img
                    src="images/img_search.svg"
                    className="max-w-[100%] sm:mb-[3px] md:mb-[4px] mb-[9px] sm:ml-[250px] md:ml-[323px] ml-[626px] w-[2%]"
                    alt="search"
                  />
                  <Img
                    src="images/img_menu.svg"
                    className="max-w-[100%] sm:mb-[3px] md:mb-[4px] mb-[9px] sm:ml-[13px] md:ml-[18px] ml-[35px] w-[2%]"
                    alt="menu"
                  />
                </Row>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-dmsans items-start md:ml-[17px] ml-[33px] mt-[166px] sm:mt-[66px] md:mt-[85px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                <Column className="flex flex-col items-end justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[2%]">
                  <Line className="bg-lime_800 h-[100px] sm:h-[40px] md:h-[52px] shadow-bs w-[4px]" />
                  <Column className="flex flex-col justify-start mr-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly w-[100%]">
                      <Text
                        className="mt-[178px] sm:mt-[71px] md:mt-[91px] rotate-[90deg] text-shadow-ts text-white_A700 w-[auto]"
                        variant="body3"
                      >
                        01
                      </Text>
                      <Line className="bg-white_A700 sm:h-[119px] md:h-[153px] h-[296px] w-[2px]" />
                    </Row>
                    <Text
                      className="leading-[normal] mt-[138px] sm:mt-[55px] md:mt-[71px] sm:mx-[0] rotate-[90deg] text-shadow-ts text-white_A700 sm:w-[100%] w-[81%]"
                      variant="body3"
                    >
                      Fb Ig{" "}
                    </Text>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start md:ml-[104px] ml-[202px] sm:mt-[19px] md:mt-[25px] mt-[50px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                  <Text
                    className="font-roboto leading-[120.00px] md:leading-[normal] sm:leading-[normal] text-white_A700 uppercase w-[100%]"
                    variant="body4"
                  >
                    OBJAV KRÁSU
                    <br />
                    Banskej štiavnice
                  </Text>
                  <Button
                    className="cursor-pointer font-bold font-dmsans min-w-[23%] ml-[1px] md:mt-[12px] mt-[24px] sm:mt-[9px] text-[20px] text-center w-[max-content]"
                    shape="CircleBorder41"
                    size="xl"
                    variant="FillLime801"
                  >
                    Začni objavovať
                  </Button>
                </Column>
              </Row>
            </Column>
          </Column>
        </Column>
        <Stack className="font-dmsans h-[3832px] relative w-[100%]">
          <Stack className="absolute bottom-[0] h-[2214px] w-[100%]">
            <Stack className="absolute bottom-[0] h-[2213px] w-[100%]">
              <Img
                src="images/img_ifanbimab04xp.png"
                className="absolute h-[2207px] max-w-[100%] top-[0] w-[100%]"
                alt="ifanbimaB04Xp"
              />
              <Stack
                className="absolute bg-cover bg-no-repeat h-[2213px] p-[130px] sm:p-[15px] md:p-[67px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group8.png')" }}
              >
                <Stack className="absolute h-[403px] inset-x-[0] mx-[auto] top-[6%] sm:w-[100%] w-[75%]">
                  <Column className="absolute flex flex-col inset-x-[5%] items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                    <Column className="flex flex-col items-center justify-start w-[100%]">
                      <Column className="flex flex-col items-center justify-start w-[100%]">
                        <Text
                          className="text-black_900 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Preskúmajte tajomstvá Banskej Štiavnice
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[17px] md:mt-[22px] mt-[43px] w-[100%]">
                          <Img
                            src="images/img_rectangle1258.png"
                            className="max-w-[100%] rounded-radius10 w-[32%]"
                            alt="Rectangle1258"
                          />
                          <Img
                            src="images/img_rectangle1259.png"
                            className="max-w-[100%] rounded-radius10 w-[32%]"
                            alt="Rectangle1259"
                          />
                          <Img
                            src="images/img_rectangle1260.png"
                            className="max-w-[100%] rounded-radius10 w-[32%]"
                            alt="Rectangle1260"
                          />
                        </Row>
                      </Column>
                    </Column>
                    <Img
                      src="images/img_group6.svg"
                      className="max-w-[100%] sm:mt-[11px] md:mt-[14px] mt-[28px] w-[16%]"
                      alt="GroupSix"
                    />
                  </Column>
                  <Img
                    src="images/img_group5.svg"
                    className="absolute bottom-[40%] h-[23px] max-w-[100%] w-[100%]"
                    alt="GroupFive"
                  />
                </Stack>
              </Stack>
            </Stack>
            <Column className="absolute bg-black_900_ab flex flex-col items-center justify-start sm:p-[15px] p-[188px] md:p-[97px] w-[100%]">
              <Column className="flex flex-col items-center justify-start mb-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="sm:ml-[138px] md:ml-[178px] ml-[346px] text-white_A700 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    Fakty a zaujímavosti
                  </Text>
                  <Text
                    className="font-normal sm:ml-[145px] md:ml-[187px] ml-[363px] sm:mt-[10px] md:mt-[13px] mt-[27px] not-italic text-gray_300 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body2"
                  >
                    Historické a prírodné zaujímavosti Banskej Štiavnice a jej
                    okolia
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-end ml-[auto] sm:mt-[24px] md:mt-[32px] mt-[62px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                    <Text
                      className="sm:mt-[2px] md:mt-[3px] mt-[7px] text-lime_800 tracking-ls038626033067703247 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      UNESCO
                    </Text>
                    <Text
                      className="mb-[3px] sm:ml-[108px] md:ml-[140px] ml-[272px] text-lime_800 tracking-ls038626033067703247 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      ZÁCHRANA MESTA
                    </Text>
                    <Text
                      className="mb-[3px] ml-[160px] sm:ml-[63px] md:ml-[82px] text-lime_800 tracking-ls038626033067703247 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      STAVBA MLADÝCH
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[11px] md:mt-[14px] mt-[28px] w-[100%]">
                    <Text
                      className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] not-italic text-center text-gray_300 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[27%]"
                      variant="body2"
                    >
                      Banská Štiavnica a technické pamiatky v jej okolí bola
                      11.12.1993 v kolumbijskej Cartagéne pod položkou 400
                      zapísaná do Zoznamu svetového kultúrneho a prírodného
                      dedičstva.
                    </Text>
                    <Text
                      className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] ml-[108px] md:ml-[55px] mt-[1px] sm:mx-[0] not-italic text-center text-gray_300 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[33%]"
                      variant="body2"
                    >
                      22.2.1978 prijala historické uznesenie č.58/1978 na
                      záchranu a ďalší rozvoj Banskej Štiavnice. Význam vládneho
                      dokumentu spočíval v tom, že úlohy ochrany a rozvoja mesta
                      sa začali chápať komplexne.
                    </Text>
                    <Text
                      className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] md:ml-[37px] ml-[72px] mt-[1px] sm:mx-[0] not-italic text-center text-gray_300 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[27%]"
                      variant="body2"
                    >
                      28.10.1948 bola otvorená premávka na Trati mládeže na
                      ktorej pracovalo 47 162 mladých ľudí z ČSR, Francúzka,
                      Bulharska, Poľska, Ukrajiny, Rakúska, Maďarska, Nórska,
                      Anglicka a Indie.
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Column>
          </Stack>
          <Stack className="absolute bg-black_902 h-[1624px] top-[0] w-[100%]">
            <Stack className="absolute h-[1624px] w-[100%]">
              <Stack className="absolute h-[1624px] w-[100%]">
                <Img
                  src="images/img_rectangle13.png"
                  className="absolute h-[771px] max-w-[100%] top-[0] w-[100%]"
                  alt="RectangleThirteen"
                />
                <Img
                  src="images/img_rectangle11.png"
                  className="absolute bottom-[0] h-[871px] inset-x-[0] max-w-[100%] w-[100%]"
                  alt="RectangleEleven"
                />
              </Stack>
              <Row className="absolute bg-gradient1  bottom-[4%] flex flex-row md:flex-wrap sm:flex-wrap inset-x-[0] items-center justify-center p-[106px] md:p-[54px] sm:px-[15px] sm:py-[42px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mb-[135px] sm:mb-[53px] md:mb-[69px] md:ml-[142px] ml-[277px] mr-[193px] md:mr-[99px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
                  <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                    <Text
                      className="leading-[50.00px] md:leading-[normal] sm:leading-[normal] text-white_A700 w-[100%]"
                      as="h3"
                      variant="h3"
                    >
                      Zážitky pre Vás,
                      <br />
                      Vaše deti a rodinu
                    </Text>
                    <Text
                      className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] mt-[3px] sm:mx-[0] not-italic text-gray_300 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[85%]"
                      variant="body2"
                    >
                      Ideálne miesta pre oddych, zábavu v Banskej štiavnici. Od
                      remeselných prác, wellnesu, ohniská až po planetárium.
                    </Text>
                  </Column>
                  <Img
                    src="images/img_rectangle10.png"
                    className="max-w-[100%] ml-[124px] sm:ml-[49px] md:ml-[64px] rounded-radius10 sm:w-[100%] w-[52%]"
                    alt="RectangleTen"
                  />
                </Row>
              </Row>
            </Stack>
            <Row className="absolute bg-gradient2  flex flex-row md:flex-wrap sm:flex-wrap inset-x-[0] items-center justify-center md:p-[11px] p-[23px] sm:px-[15px] sm:py-[9px] top-[11%] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mb-[29px] md:mb-[38px] mb-[74px] md:ml-[163px] ml-[317px] md:mr-[161px] mr-[313px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                <Img
                  src="images/img_rectangle9.png"
                  className="max-w-[100%] rounded-radius10 sm:w-[100%] w-[51%]"
                  alt="RectangleNine"
                />
                <Column className="flex flex-col justify-start ml-[130px] md:ml-[67px] sm:mt-[22px] md:mt-[29px] mt-[57px] sm:mx-[0] sm:px-[0] rounded-radius32 sm:w-[100%] w-[39%]">
                  <Text
                    className="leading-[50.00px] md:leading-[normal] sm:leading-[normal] text-white_A700 w-[100%]"
                    as="h3"
                    variant="h3"
                  >
                    Bajkom k tajchom
                    <br />
                    výnimočná cyklotrasa
                  </Text>
                  <Text
                    className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] mt-[3px] sm:mx-[0] not-italic text-gray_300 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[85%]"
                    variant="body2"
                  >
                    Web s prehľadom cyklotrás v oblasti <br />
                    Banskej Štiavnice
                  </Text>
                  <Button className="cursor-pointer font-bold min-w-[49%] ml-[1px] sm:mt-[12px] md:mt-[16px] mt-[32px] text-[18px] text-center w-[max-content]">
                    Pokračovať na web
                  </Button>
                </Column>
              </Row>
            </Row>
          </Stack>
        </Stack>
        <Column className="flex flex-col font-dmsans items-center justify-start w-[100%]">
          <Stack className="bg-white_A700 h-[821px] relative w-[100%]">
            <Button
              className="absolute bottom-[29%] cursor-pointer font-bold inset-x-[0] min-w-[11%] mx-[auto] text-[18px] text-center w-[max-content]"
              shape="CircleBorder32"
              size="lg"
            >
              Zistiť Viac
            </Button>
            <Stack className="absolute h-[821px] w-[100%]">
              <Column className="absolute flex flex-col items-center justify-start w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between w-[100%]">
                  <Img
                    src="images/img_whangaehu.png"
                    className="max-w-[100%] w-[29%]"
                    alt="Whangaehu"
                  />
                  <Img
                    src="images/img_whangaehu_495X769.png"
                    className="max-w-[100%] mb-[1px] sm:mt-[129px] md:mt-[167px] mt-[325px] sm:w-[100%] w-[41%]"
                    alt="Whangaehu One"
                  />
                </Row>
              </Column>
              <Column className="absolute flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] sm:px-[0] top-[30%] sm:w-[100%] w-[50%]">
                <Text
                  className="leading-[50.00px] md:leading-[normal] sm:leading-[normal] text-black_904 text-center w-[100%]"
                  as="h3"
                  variant="h3"
                >
                  Chránená krajinná oblasť Štiavnické vrchy sa rozprestiera v
                  okresoch Banská Štiavnica
                </Text>
                <Text
                  className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] not-italic text-bluegray_500 text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[99%]"
                  variant="body2"
                >
                  Majú významnú biogeografickú polohu na rozhraní teplomilných
                  panónskych a chladnomilných karpatských hoských druhov flóry a
                  fauny
                  <br />
                  Na území sa nachádza množstvo historických a technických
                  pamiatok roztrúsených vo voľnej krajine, ale najmä
                  koncentrovaných v centrálnej časti pohoria
                </Text>
              </Column>
            </Stack>
          </Stack>
        </Column>
        <Column className="bg-black_905 flex flex-col font-dmsans items-center justify-start w-[100%]">
          <Column
            className="bg-cover bg-no-repeat flex flex-col items-end justify-start md:p-[107px] sm:p-[15px] p-[209px] w-[100%]"
            style={{ backgroundImage: "url('images/img_group32.png')" }}
          >
            <Column className="flex flex-col items-center justify-start max-w-[1300px] sm:mb-[2px] md:mb-[3px] mb-[6px] md:mr-[31px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
              <Text className="text-white_A700 w-[auto]" as="h3" variant="h3">
                Banská Štiavnica //Cestujem doma
              </Text>
              <Column className="flex flex-col items-center justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                <Text
                  className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] not-italic text-center text-white_A700_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[87%]"
                  variant="body2"
                >
                  Banská Štiavnica je pre mňa možno až na samom vrchole rebríčka
                  najkrajších miest na Slovensku Bývalé banícke mesto je
                  zaradené do zoznamu svetového dedičstva UNESCO a niet sa čomu
                  čudovať.
                </Text>
                <Column
                  className="bg-cover bg-no-repeat flex flex-col items-center justify-end md:mt-[12px] mt-[25px] sm:mt-[9px] md:p-[128px] sm:p-[15px] p-[248px] rounded-radius10 w-[100%]"
                  style={{ backgroundImage: "url('images/img_group7.png')" }}
                >
                  <Button
                    className="flex sm:h-[39px] md:h-[50px] h-[96px] items-center justify-center mt-[1px] rounded-radius50 sm:w-[38px] md:w-[49px] w-[96px]"
                    size="smIcn"
                    variant="icbFillLime800"
                  >
                    <Img
                      src="images/img_play.svg"
                      className="flex items-center justify-center"
                      alt="play"
                    />
                  </Button>
                </Column>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[125px] sm:mt-[49px] md:mt-[64px] rounded-radius5 w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] rounded-radius5 sm:w-[100%] w-[47%]">
                  <Stack
                    className="bg-cover bg-no-repeat h-[151px] sm:p-[15px] md:p-[30px] p-[60px] relative rounded-radius5 w-[39%]"
                    style={{ backgroundImage: "url('images/img_preview.png')" }}
                  >
                    <Img
                      src="images/img_play.svg"
                      className="absolute h-[19px] inset-x-[0] max-w-[100%] mx-[auto] top-[40%] w-[8%]"
                      alt="play One"
                    />
                  </Stack>
                  <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
                    <Text
                      className="font-bold text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      BANSKA STIAVNICA in 5K
                    </Text>
                    <Text
                      className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[10px] md:mt-[13px] mt-[27px] not-italic text-white_A700_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                      variant="body2"
                    >
                      Because of Coronavirus pandemic, there was almost nobody
                      on the street.
                    </Text>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:pb-[1px] md:pb-[2px] pb-[5px] md:pr-[2px] pr-[5px] sm:px-[0] rounded-radius5 sm:w-[100%] w-[48%]">
                  <Stack
                    className="bg-cover bg-no-repeat h-[151px] mb-[3px] sm:p-[15px] md:p-[30px] p-[60px] relative rounded-radius5 w-[39%]"
                    style={{
                      backgroundImage: "url('images/img_preview_151X234.png')",
                    }}
                  >
                    <Img
                      src="images/img_play.svg"
                      className="absolute h-[19px] inset-x-[0] max-w-[100%] mx-[auto] top-[40%] w-[8%]"
                      alt="play Two"
                    />
                  </Stack>
                  <Column className="flex flex-col justify-start mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
                    <Text
                      className="font-bold text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      Juraj Zaujec - Štiavnica |Official Video|
                    </Text>
                    <Text
                      className="font-normal ml-[1px] sm:mt-[13px] md:mt-[17px] mt-[33px] not-italic text-white_A700_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body2"
                    >
                      Juraj Zaujec © 2021 PRmanagement
                    </Text>
                  </Column>
                </Row>
              </Row>
            </Column>
          </Column>
        </Column>
        <Stack className="font-dmsans h-[1206px] mb-[1637px] sm:mb-[653px] md:mb-[844px] relative w-[100%]">
          <Column className="absolute bg-lime_800_07 flex flex-col items-center justify-start p-[100px] sm:p-[15px] md:p-[51px] top-[0] w-[100%]">
            <Column className="flex flex-col justify-start md:mb-[11px] mb-[22px] sm:mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
              <Text
                className="ml-[1px] text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Ako sa dostať do Banskej Štiavnice
              </Text>
              <Stack className="h-[771px] sm:mt-[17px] md:mt-[22px] mt-[44px] relative w-[100%]">
                <Stack className="absolute h-[700px] inset-[0] justify-center m-[auto] sm:w-[100%] w-[99%]">
                  <Line className="absolute bg-gray_900_3f sm:h-[200px] md:h-[259px] h-[500px] left-[3%] top-[0] w-[3px]" />
                  <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mx-[0] p-[10px] sm:p-[3px] md:p-[5px] sm:w-[100%] w-[6%]"
                      style={{
                        backgroundImage: "url('images/img_number.svg')",
                      }}
                    >
                      <Text
                        className="font-medium mb-[1px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        3
                      </Text>
                    </Column>
                    <Column className="flex flex-col justify-start mt-[13px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Plánovanie svojich zážitkov
                      </Text>
                      <Text
                        className="leading-[38.15px] md:leading-[normal] sm:leading-[normal] md:mt-[12px] mt-[25px] sm:mt-[9px] not-italic text-gray_900_b2 w-[100%]"
                        variant="body1"
                      >
                        Podla počtu dní a niekoľkých osobných preferencií, si
                        viete nastaviť, či chcete chodiť rýchlo, alebo sa len
                        tak potulovať, čo preferujete vidieť a podobne. Podľa
                        toho si pripravíme časový harmonogram na každý deň, pri
                        akých pamiatkach stráviť deň, kam sa ísť najesť či
                        napiť.
                      </Text>
                    </Column>
                  </Row>
                </Stack>
                <Button
                  className="absolute bottom-[0] cursor-pointer font-bold left-[9%] min-w-[26%] text-[18px] text-center w-[max-content]"
                  size="sm"
                >
                  Zážitky v Banskej Štiavnici
                </Button>
                <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between top-[33%] w-[100%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mx-[0] p-[10px] sm:p-[3px] md:p-[5px] sm:w-[100%] w-[5%]"
                    style={{ backgroundImage: "url('images/img_number.svg')" }}
                  >
                    <Text
                      className="font-medium mb-[1px] text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      2
                    </Text>
                  </Column>
                  <Column className="flex flex-col justify-start mt-[13px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Vyberte si z množstva ponúk ubytovania
                    </Text>
                    <Text
                      className="leading-[38.15px] md:leading-[normal] sm:leading-[normal] md:mt-[12px] mt-[25px] sm:mt-[9px] not-italic text-gray_900_b2 w-[100%]"
                      variant="body1"
                    >
                      <span className="text-gray_900_b2 text-[23.47px] font-dmsans font-normal sm:text-[19.47px] md:text-[21.47px]">
                        Nájdite ideálnu cenu spomedzi všetkých ponúk ubytovani.
                        Prečítajte si hodnotenie hotelov a vyberte ten najlepší
                        pre váš pobyt. Ubytovanie nájdete napríklad na
                        webstránkach ako{" "}
                      </span>
                      <span className="text-light_blue_700 text-[23.47px] font-dmsans font-normal sm:text-[19.47px] md:text-[21.47px]">
                        booking.com
                      </span>
                      <span className="text-gray_900_b2 text-[23.47px] font-dmsans font-normal sm:text-[19.47px] md:text-[21.47px]">
                        {" "}
                        alebo{" "}
                      </span>
                      <span className="text-light_blue_701 text-[23.47px] font-dmsans font-normal sm:text-[19.47px] md:text-[21.47px]">
                        airbnb.com
                        <br />
                      </span>
                      <span className="text-gray_900_b2 text-[23.47px] font-dmsans font-normal sm:text-[19.47px] md:text-[21.47px]">
                        <br />
                      </span>
                    </Text>
                  </Column>
                </Row>
                <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap inset-x-[0] items-start justify-between sm:mx-[0] mx-[auto] pb-[1px] sm:px-[0] sm:w-[100%] w-[99%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mx-[0] p-[10px] sm:p-[3px] md:p-[5px] sm:w-[100%] w-[6%]"
                    style={{ backgroundImage: "url('images/img_number.svg')" }}
                  >
                    <Text
                      className="font-medium mb-[1px] text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      1
                    </Text>
                  </Column>
                  <Column className="flex flex-col justify-start mt-[13px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Naplánujte si cestu
                    </Text>
                    <Text
                      className="leading-[38.15px] md:leading-[normal] sm:leading-[normal] md:mt-[12px] mt-[25px] sm:mt-[9px] not-italic text-gray_900_b2 w-[100%]"
                      variant="body1"
                    >
                      Skôr než sa vyberiete autom alebo verejnou dopravou domov,
                      do práce alebo na iné miesta, naplánujte si cestu a
                      získajte tak užitočné informácie. Budete tak vedieť, kedy
                      odísť, akú premávku očakávať, ktorou trasou ísť a či vás
                      cestou čakajú nejaké obmedzenia.
                    </Text>
                  </Column>
                </Row>
              </Stack>
            </Column>
          </Column>
          <Stack className="absolute bottom-[0] font-roboto h-[188px] w-[100%]">
            <Row className="absolute bg-black_900 bottom-[0] flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[15px] md:p-[20px] p-[40px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[4px] ml-[9px] sm:mt-[3px] md:mt-[4px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
                  <Img
                    src="images/img_image5.png"
                    className="flex-shrink-0 max-w-[100%] w-[15%]"
                    alt="imageFive One"
                  />
                  <Text
                    className="flex-grow ml-[16px] sm:ml-[6px] md:ml-[8px] text-white_A700 tracking-ls031527093052864075 md:tracking-ls1 sm:tracking-ls1 uppercase"
                    as="h6"
                    variant="h6"
                  >
                    BANSkÁ Štiavnica
                  </Text>
                </Row>
                <Img
                  src="images/img_facebook.svg"
                  className="common-pointer sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] ml-[1071px] sm:ml-[427px] md:ml-[552px] md:w-[12px] w-[24px] sm:w-[9px]"
                  onClick={handleNavigate}
                  alt="facebook"
                />
                <Img
                  src="images/img_camera.svg"
                  className="h-[15px] sm:h-[6px] md:h-[8px] max-w-[100%] md:ml-[12px] ml-[24px] sm:ml-[9px] w-[15px] sm:w-[5px] md:w-[7px]"
                  alt="camera"
                />
                <Column className="flex flex-col font-dmsans items-center md:ml-[34px] ml-[67px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[18%]">
                  <Text
                    className="font-bold text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body2"
                  >
                    Copyright © 2022 l Richard Povýšil
                  </Text>
                </Column>
              </Row>
            </Row>
            <Stack className="absolute bg-lime_800 h-[104px] sm:p-[15px] md:p-[16px] p-[32px] right-[5%] rounded-radius50 shadow-bs1 top-[0] w-[104px] sm:w-[41px] md:w-[53px]">
              <Img
                src="images/img_arrowup.svg"
                className="absolute h-[21px] inset-[0] justify-center m-[auto] max-w-[100%] w-[37%]"
                alt="arrowup"
              />
            </Stack>
          </Stack>
        </Stack>
      </Column>
    </>
  );
};

export default DesktopPage;
