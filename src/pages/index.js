import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

import {
  HeroTitleBig,
  SubHeader,
  BodyText,
  SmallHeader,
  AlternativeText,
  Titles,
  SubscribeButton,
  Input,
} from "../components/Styles/TextStyles.js"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="ThatGirl Blog" keywords={[]} />
        <PageWrapper>
          <HeroSection>
            <HeroText>
              <HeroTitle>Your 20’s , Your way</HeroTitle>
              <HeroDescription>
                Thoughtful and sophisticated with a side of sass, ThatGirlBlog
                covers topics that are relevant to young women in their 20's.We
                share content on photography, fashion, lifestyle and healthy
                eating.
              </HeroDescription>
            </HeroText>
          </HeroSection>
          <FeaturedSection>
            <FeatureInfo>
              <FeautureTitle>Featured Posts</FeautureTitle>
              <FeautureDescription>
                I picked out these for you to read first
              </FeautureDescription>
            </FeatureInfo>
            <PostSlides>
              <PostTemplate>
                <PostImg>
                  <StaticImage
                    src="../images/Skincare.jpg"
                    loading="eager"
                    width={400}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                  />
                  <PostCategory>
                    <CatText>Categeory</CatText>
                  </PostCategory>
                </PostImg>

                <PostTitle>Blog Post Title</PostTitle>
              </PostTemplate>
              <PostTemplate>
                <PostImg>
                  <StaticImage
                    src="../images/Skincare.jpg"
                    loading="eager"
                    width={400}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                  />
                  <PostCategory>
                    <CatText>Categeory</CatText>
                  </PostCategory>
                </PostImg>

                <PostTitle>Blog Post Title</PostTitle>
              </PostTemplate>
              <PostTemplate>
                <PostImg>
                  <StaticImage
                    src="../images/Skincare.jpg"
                    loading="eager"
                    width={400}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                  />
                  <PostCategory>
                    <CatText>Categeory</CatText>
                  </PostCategory>
                </PostImg>

                <PostTitle>Blog Post Title</PostTitle>
              </PostTemplate>
              <PostTemplate>
                <PostImg>
                  <StaticImage
                    src="../images/Skincare.jpg"
                    loading="eager"
                    width={400}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                  />
                  <PostCategory>
                    <CatText>Categeory</CatText>
                  </PostCategory>
                </PostImg>

                <PostTitle>Blog Post Title</PostTitle>
              </PostTemplate>
            </PostSlides>
          </FeaturedSection>
          <CategorySection>
            <CategoryTitle>
              <DescriptiveText>
                If any of these interest you then you’ll definitely love this
                blog
              </DescriptiveText>
              <DecorativeArrow></DecorativeArrow>
            </CategoryTitle>
            <CategoryCards>
              <CategoryTemplate>
                <CardGiF>
                  {" "}
                  <StaticImage
                    src="../images/73408-deep-breathing-meditation-animation.gif"
                    loading="eager"
                    width={109}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                  />
                </CardGiF>
                <CardTitle>PHOTOGRAPHY</CardTitle>
                <CardTitleLineDecor></CardTitleLineDecor>
                <CardHashTag>#smileyou'reoncamera</CardHashTag>
              </CategoryTemplate>
              <CategoryTemplate>
                <CardGiF>
                  {" "}
                  <StaticImage
                    src="../images/89089-work-and-life-balance.gif"
                    loading="eager"
                    width={109}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                  />
                </CardGiF>
                <CardTitle>SELFCARE</CardTitle>
                <CardTitleLineDecor></CardTitleLineDecor>
                <CardHashTag>#thatgirlhabits</CardHashTag>
              </CategoryTemplate>
              <CategoryTemplate>
                <CardGiF>
                  {" "}
                  <StaticImage
                    src="../images/82624-foodies.gif"
                    loading="eager"
                    width={109}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                  />
                </CardGiF>
                <CardTitle>FOOD & NUTRITION</CardTitle>
                <CardTitleLineDecor></CardTitleLineDecor>
                <CardHashTag>#smileyou'reoncamera</CardHashTag>
              </CategoryTemplate>
            </CategoryCards>
          </CategorySection>
          <AboutBlogSection>
            <AbtContentWrapper>
              <AbtTitle>The girl who’s in her twenties.</AbtTitle>
              <AbtContent>
                <AbtDecorLine></AbtDecorLine>
                <AbtText>
                  <TextBlock>
                    {" "}
                    I’m not sure what the word “gen z” or “millennial” means to
                    you, but it means something different to me. I think of it
                    as a time of transition — a time when you are figuring out
                    who you are and what you want in life.
                  </TextBlock>
                  <TextBlock>
                    {" "}
                    If you’re like me, this will be your first major transition
                    period since high school. You’ve been on a steady path since
                    then and now it’s time to make some changes.
                  </TextBlock>
                  <TextBlock>
                    {" "}
                    It can be scary though… especially if you don’t know where
                    your new path is going to take you I hope that this blog
                    will give insight into navigating your twenties, especially
                    if those around you don’t understand the changes happening
                    within your own life.
                  </TextBlock>
                </AbtText>
                <AbtSidePic>
                  <StaticImage
                    src="../images/art the girl text (1).svg"
                    loading="eager"
                    width={240}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                  />
                </AbtSidePic>
              </AbtContent>
            </AbtContentWrapper>
          </AboutBlogSection>
          <NewsletterSection>
            <NesleterTitle>NEWSLETTER</NesleterTitle>
            <LineDecor></LineDecor>
            <NewsletterText>
              By signing up you'll get the latest posts delivered to your
              inbox--and a friendly reminder of what you've missed if you
              haven't read them yet.
            </NewsletterText>
            <NewsletterForm>
              <Input />
              <SubscribeButton>Subscribe</SubscribeButton>
            </NewsletterForm>
          </NewsletterSection>
        </PageWrapper>
      </Layout>
    )
  }
}

export default IndexPage
const PageWrapper = styled.div`
  width: 100vw;
  margin: 0 auto;
  padding: 0;
`
const HeroSection = styled.div`
  width: 100vw;

  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
    url("../images/Thatgirl lifestyle.jpg");
  height: 800px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin: 0 0 120px 0;
`

const HeroTitle = styled(HeroTitleBig)``
const HeroText = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 360px 000;
  color: #fefefe;
`
const HeroDescription = styled(BodyText)`
  padding: 12px 0 0 0;
`

///////SECTION TWO////////////////////////////

const FeaturedSection = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  display: grid;
  grid-template-columns: 320px auto;
`
const FeatureInfo = styled.div``
const FeautureTitle = styled(SubHeader)``
const FeautureDescription = styled(BodyText)``
const PostSlides = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 48px;
`
const PostTemplate = styled.div`
  width: 400px;
  height: 509px;
`
const PostImg = styled.div`
  height: 480px;
`
const PostCategory = styled.div`
  position: absolute;
  width: 315px;
  height: 46px;
  margin: -46px 0 00;
  background-color: #fefefe;
`
const CatText = styled(AlternativeText)`
  padding: 0px 0px 12px 8px;
`

const PostTitle = styled(SmallHeader)`
  padding: 12px 0 0 8px;
`
////////////////////SECTION THREE/////////

const CategorySection = styled.div`
  margin: 240px auto;
  max-width: 1280px;
`
const CategoryTitle = styled.div`
  padding: 0 0 80px 0;
`

const DescriptiveText = styled(SubHeader)``
const DecorativeArrow = styled.div``

const CategoryCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 48px;
`
const CategoryTemplate = styled.div`
  width: 325px;
  height: 300px;
  border: 1px solid #000;
  border-radius: 8px;
  padding: 24px;
`
const CardGiF = styled.div``
const CardTitle = styled(SmallHeader)`
  padding: 0;
`

const CardTitleLineDecor = styled.div`
  width: 161px;
  height: 4px;
  background-color: #bfd0ca;
  margin: -24px 000;
`
const CardHashTag = styled(BodyText)`
  padding: 48px 000;
`
/////////////////////////////SECTION FOUR///////////////
const AboutBlogSection = styled.div`
  margin: 160px auto;
  padding: 160px 0 160px 0;
  width: 100vw;
  background-color: #194d28;
`
const AbtContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 1280px;
`
const AbtTitle = styled(Titles)`
  padding: 0px 0 80px 0;
  color: #fefefe;
`
const AbtContent = styled.div`
  display: grid;
  grid-template-columns: 12px auto auto;
  grid-gap: 48px;
  padding: 0 0 0 80px;
`
const AbtDecorLine = styled.div`
  width: 8px;
  height: 320px;
  background-color: #fefefe;
`
const AbtText = styled(BodyText)`
  color: #fefefe;
`
const TextBlock = styled(BodyText)``
const AbtSidePic = styled.div``

/////////////////////////////NEWSLETTER SECTION ///////////////////
const NewsletterSection = styled.div`
  margin: 240px auto;
  max-width: 1280px;
`
const NesleterTitle = styled(SubHeader)``
const LineDecor = styled.div``
const NewsletterText = styled(BodyText)``
const NewsletterForm = styled.div`
  display: grid;
  grid-template-columns: 780px 240px;
  grid-gap: 24px;
  margin: 0;
  padding: 0;
`
