import { Link } from 'react-router-dom';
import { Typography, Button, Row, Col, Card, Tag } from 'antd';
import { useTheme } from '../contexts/ThemeContext';

const { Title, Paragraph } = Typography;

const Home = () => {
  const { isHobbyMode } = useTheme();

  if (isHobbyMode) {
    return (
      <div>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 32px 80px' }}>
          <div style={{ maxWidth: 900, marginBottom: 120 }}>
            <Tag color="default" style={{ marginBottom: 24, backgroundColor: '#FFA5C9', color: 'white', border: 'none' }}>Creative & Playful Explorer</Tag>
            
            <Title level={1} style={{ fontSize: 64, lineHeight: 1.1, marginBottom: 24 }}>
              Life Through Art,<br />
              <span className="gradient-text">Games & Stories</span>
            </Title>
            
            <Paragraph style={{ fontSize: 20, marginBottom: 24, maxWidth: 800 }}>
              I find joy in creative expression, immersive gaming worlds, captivating stories, and the endless pursuit of self-discovery through hobbies.
            </Paragraph>
            
            <Paragraph style={{ fontSize: 16, marginBottom: 48 }}>
              Painter • Gamer • Poetry Lover • Drama Enthusiast • Polyglot Learner
            </Paragraph>
            
            <div style={{ display: 'flex', gap: 16 }}>
              <Link to="/projects">
                <Button type="primary" size="large" style={{ borderRadius: 24, height: 48, padding: '0 32px', backgroundColor: '#FFA5C9', borderColor: '#FFA5C9' }}>
                  My Creative Works
                </Button>
              </Link>
              <Link to="/about">
                <Button size="large" style={{ borderRadius: 24, height: 48, padding: '0 32px' }}>
                  About My Interests
                </Button>
              </Link>
            </div>
          </div>

        <div style={{ marginBottom: 120 }}>
          <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#FFA5C9', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 48 }}>
            My Passions
          </Paragraph>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Title level={3}>Acrylic Painting</Title>
              <Paragraph>Creating colorful, expressive artwork that captures emotions and moments</Paragraph>
            </Col>
            <Col xs={24} md={8}>
              <Title level={3}>Gaming Adventures</Title>
              <Paragraph>Lost in immersive worlds - from cozy farming in Stardew Valley to epic battles in Dota2</Paragraph>
            </Col>
            <Col xs={24} md={8}>
              <Title level={3}>Poetry & Stories</Title>
              <Paragraph>Exploring the beauty of language and getting lost in captivating dramas and narratives</Paragraph>
            </Col>
          </Row>
        </div>

        <div style={{ marginBottom: 120 }}>
          <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#FFA5C9', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 48 }}>
            Fun & Exploration
          </Paragraph>
          <Link to="/projects">
            <Card hoverable className="glass" style={{ borderRadius: 16 }}>
              <Title level={3}>My Creative Collection</Title>
              <Paragraph>Gallery of paintings, game adventures, and poetic musings</Paragraph>
              <span style={{ color: '#FFA5C9' }}>Explore →</span>
            </Card>
          </Link>
        </div>

        <Card className="glass" style={{ borderRadius: 16, padding: 48 }}>
          <Paragraph style={{ fontSize: 24, textAlign: 'center', maxWidth: 800, margin: '0 auto', lineHeight: 1.6 }}>
            "Life is an adventure waiting to be painted, played, and poetically explored."
          </Paragraph>
        </Card>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 32px 80px' }}>
        <div style={{ maxWidth: 900, marginBottom: 120 }}>
          <Tag color="red" style={{ marginBottom: 24 }}>Research-Driven Systems Builder</Tag>
          
          <Title level={1} style={{ fontSize: 64, lineHeight: 1.1, marginBottom: 24 }}>
            Building AI Systems<br />
            <span className="gradient-text">That Strengthen Thinking</span>
          </Title>
          
          <Paragraph style={{ fontSize: 20, marginBottom: 24, maxWidth: 800 }}>
            Master's-level software engineer designing human-centred AI for education.
            I build learning systems that scaffold metacognition, not replace it.
          </Paragraph>
          
          <Paragraph style={{ fontSize: 16, marginBottom: 48 }}>
            Systems builder • Education researcher • Incoming PhD candidate
          </Paragraph>
          
          <div style={{ display: 'flex', gap: 16 }}>
            <Link to="/projects">
              <Button type="primary" size="large" style={{ borderRadius: 24, height: 48, padding: '0 32px' }}>
                View Research
              </Button>
            </Link>
            <Link to="/about">
              <Button size="large" style={{ borderRadius: 24, height: 48, padding: '0 32px' }}>
                About My Work
              </Button>
            </Link>
          </div>
        </div>

        <div style={{ marginBottom: 120 }}>
          <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#9A0000', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 48 }}>
            Core Focus Areas
          </Paragraph>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Title level={3}>AI-Assisted Learning</Title>
              <Paragraph>Designing systems that support student agency and metacognitive awareness</Paragraph>
            </Col>
            <Col xs={24} md={8}>
              <Title level={3}>Systems Thinking</Title>
              <Paragraph>Building coherent architectures grounded in research and educational theory</Paragraph>
            </Col>
            <Col xs={24} md={8}>
              <Title level={3}>Research-Driven Design</Title>
              <Paragraph>Translating cognitive science into practical, evidence-based tools</Paragraph>
            </Col>
          </Row>
        </div>

        <div style={{ marginBottom: 120 }}>
          <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#9A0000', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 48 }}>
            Selected Work
          </Paragraph>
          <Link to="/projects">
            <Card hoverable className="glass" style={{ borderRadius: 16 }}>
              <Title level={3}>Research Projects</Title>
              <Paragraph>Systems designed to scaffold metacognition in STEM learning contexts</Paragraph>
              <span style={{ color: '#9A0000' }}>View case studies →</span>
            </Card>
          </Link>
        </div>

        <Card className="glass" style={{ borderRadius: 16, padding: 48 }}>
          <Paragraph style={{ fontSize: 24, textAlign: 'center', maxWidth: 800, margin: '0 auto', lineHeight: 1.6 }}>
            "I design systems that amplify human thinking, not automate it away.
            Every architectural decision is grounded in research, every feature serves learning."
          </Paragraph>
        </Card>
      </div>
    </div>
  );
};

export default Home;
