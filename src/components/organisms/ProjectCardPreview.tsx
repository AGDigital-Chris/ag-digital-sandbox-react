import React from 'react';
import type { BaseComponentProps } from '../../types';

interface ProjectCardPreviewProps extends BaseComponentProps {
  preview: React.ReactNode;
}

const ProjectCardPreview: React.FC<ProjectCardPreviewProps> = ({ 
  preview, 
  className = '', 
  dataQa 
}) => {
  return (
    <div 
      className={`relative rounded-md border border-dark p-4 bg-surface-elevated ${className}`} 
      data-qa={dataQa || 'project-card--preview'}
    >
      {preview}
    </div>
  );
};

export default ProjectCardPreview;
