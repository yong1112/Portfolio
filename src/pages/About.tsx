import { Typography, Row, Col, Card } from 'antd';
import { useTheme } from '../contexts/ThemeContext';

const { Title, Paragraph } = Typography;

const About = () => {
  const { isHobbyMode } = useTheme();

  if (isHobbyMode) {
    return (
      <div style={{ minHeight: '100vh', paddingTop: 128, padding: '128px 32px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#FFA5C9', textTransform: 'uppercase', letterSpacing: 2 }}>
            About Me
          </Paragraph>
          <Title level={1} style={{ fontSize: 56, marginTop: 16, marginBottom: 64 }}>
            Creative Spirit,<br />
            <span className="gradient-text">Forever Learning</span>
          </Title>
          
          <Row gutter={[64, 64]}>
            <Col xs={24} md={12}>
              <div style={{ fontSize: 18, lineHeight: 1.8 }}>
                <Paragraph style={{ fontSize: 18 }}>
                  I'm someone who believes life is meant to be experienced through creativity, adventure, and self-expression.
                </Paragraph>
                
                <Paragraph style={{ fontSize: 18 }}>
                  Whether I'm wielding an acrylic brush, losing myself in gaming worlds, or diving deep into poetry and drama, I'm always seeking to learn, grow, and express myself in new ways.
                </Paragraph>
                
                <Paragraph style={{ fontSize: 18 }}>
                  I'm passionate about discovering the magic in everyday moments and sharing the joy of the things I love with others.
                </Paragraph>
              </div>
            </Col>

            <Col xs={24} md={12}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                <Card className="glass" style={{ borderRadius: 16 }}>
                  <Title level={4} className="gradient-text">Creative Interests</Title>
                  <ul style={{ paddingLeft: 20 }}>
                    <li>Acrylic painting & visual art</li>
                    <li>Poetry and poetic expression</li>
                    <li>Reading & drama appreciation</li>
                    <li>Character design & storytelling</li>
                    <li>Creative writing</li>
                  </ul>
                </Card>
                
                <Card className="glass" style={{ borderRadius: 16 }}>
                  <Title level={4} className="gradient-text">Gaming Worlds</Title>
                  <ul style={{ paddingLeft: 20 }}>
                    <li>Stardew Valley (cozy farming)</li>
                    <li>Dota 2 (competitive strategy)</li>
                    <li>Chefs RPG (culinary adventures)</li>
                    <li>Horror & indie games</li>
                    <li>Story-driven experiences</li>
                  </ul>
                </Card>
              </div>
            </Col>
          </Row>

          <div style={{ marginTop: 128, paddingTop: 64, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
            <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#FFA5C9', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 32 }}>
              More About Me
            </Paragraph>
            <Row gutter={[32, 32]}>
              <Col xs={24} md={8}>
                <Card className="glass" style={{ borderRadius: 16, height: '100%' }}>
                  <Title level={4}>Music Lover</Title>
                  <Paragraph>Exploring diverse genres and letting music be the soundtrack to my life</Paragraph>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card className="glass" style={{ borderRadius: 16, height: '100%' }}>
                  <Title level={4}>Drama Enthusiast</Title>
                  <Paragraph>Getting invested in character arcs and beautiful storytelling</Paragraph>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card className="glass" style={{ borderRadius: 16, height: '100%' }}>
                  <Title level={4}>Language Learner</Title>
                  <Paragraph>Endlessly curious about languages and ways to connect across cultures</Paragraph>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', paddingTop: 128, padding: '128px 32px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#9A0000', textTransform: 'uppercase', letterSpacing: 2 }}>
          About
        </Paragraph>
        <Title level={1} style={{ fontSize: 56, marginTop: 16, marginBottom: 64 }}>
          Systems Builder,<br />
          <span className="gradient-text">Education Researcher</span>
        </Title>
        
        <Row gutter={[64, 64]}>
          <Col xs={24} md={12}>
            <div style={{ fontSize: 18, lineHeight: 1.8 }}>
              <Paragraph style={{ fontSize: 18 }}>
                I am a Master's-level software engineer and incoming PhD applicant focused on human-centred AI in education.
              </Paragraph>
              
              <Paragraph style={{ fontSize: 18 }}>
                My work sits at the intersection of software engineering, education, and research. I design and build AI-supported learning systems that strengthen student metacognition, rather than replacing thinking.
              </Paragraph>
              
              <Paragraph style={{ fontSize: 18 }}>
                I aim to pursue a design-based PhD, where I build and evaluate a real system during my research—translating theory into practical tools that serve long-term educational impact.
              </Paragraph>
            </div>
          </Col>

          <Col xs={24} md={12}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <Card className="glass" style={{ borderRadius: 16 }}>
                <Title level={4} className="gradient-text">Core Strengths</Title>
                <ul style={{ paddingLeft: 20 }}>
                  <li>Systems and architecture thinking</li>
                  <li>Human-centred AI design</li>
                  <li>Research-informed frameworks</li>
                  <li>Theory-to-practice translation</li>
                  <li>Disciplined execution</li>
                </ul>
              </Card>
              
              <Card className="glass" style={{ borderRadius: 16 }}>
                <Title level={4} className="gradient-text">Research Interests</Title>
                <ul style={{ paddingLeft: 20 }}>
                  <li>Metacognitive scaffolding</li>
                  <li>Cognitive offloading in AI systems</li>
                  <li>STEM learning contexts</li>
                  <li>Education system design</li>
                </ul>
              </Card>
            </div>
          </Col>
        </Row>

        <div style={{ marginTop: 128, paddingTop: 64, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
          <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#9A0000', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 32 }}>
            What I Offer
          </Paragraph>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Card className="glass" style={{ borderRadius: 16, height: '100%' }}>
                <Title level={4}>PhD Candidate</Title>
                <Paragraph>Design-based research building real systems with measurable impact</Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="glass" style={{ borderRadius: 16, height: '100%' }}>
                <Title level={4}>Research Assistant</Title>
                <Paragraph>Systems development and research-driven prototyping</Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="glass" style={{ borderRadius: 16, height: '100%' }}>
                <Title level={4}>Teaching Assistant</Title>
                <Paragraph>Supporting learning with technical and pedagogical expertise</Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default About;
