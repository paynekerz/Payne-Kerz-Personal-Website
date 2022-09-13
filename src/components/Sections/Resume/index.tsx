import {FC, memo} from 'react';

import { SectionId,} from '../../../data/data';
import Section from '../../Layout/Section';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
