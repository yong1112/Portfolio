import { Link } from 'react-router-dom';
import { Typography, Button, Row, Col, Card, Tag } from 'antd';

const { Title, Paragraph } = Typography;

const Home = () => {
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
