import type { BtnInterface } from "../../types/BtnInterface";

export const Btn: React.FC<BtnInterface> = ({
  label,
  hasIcon,
  iconRight,
  type,
  className,
  Icon,
  isLabelVisible,
  ariaExpanded,  
  ariaExpandedValue,
  onClick,
  id
}) => {
  if (onClick) {
    if (iconRight) {
      return (
        <button
          onClick={onClick}
          {...(ariaExpanded ? { 'aria-expanded': ariaExpandedValue } : {})}
          aria-controls={id}
          className={className + " flex gap-1.5"}
          type={type}
        >
          {hasIcon && isLabelVisible && Icon ? (
            <>
              {label}
              <Icon />
            </>
          ) : !isLabelVisible && Icon ? (
            <>
              <Icon />
              <span className="sr-only">{label}</span>
            </>
          ) : (
            label
          )}
        </button>
      );
    }
    return (
      <button
        onClick={onClick}
        {...(ariaExpanded ? { 'aria-expanded': ariaExpandedValue } : {})}
        aria-controls={id}
        className={className + " flex gap-1.5"}
        type={type}
      >
        {hasIcon && isLabelVisible && Icon ? (
          <>
            <Icon />
            {label}
          </>
        ) : !isLabelVisible && Icon ? (
          <>
            <Icon />
            <span className="sr-only">{label}</span>
          </>
        ) : (
          label
        )}
      </button>
    );
  } else {
    if (iconRight) {
      return (
        <button
          className={className + " flex gap-1.5"}
          type={type}
        >
          {hasIcon && isLabelVisible && Icon ? (
            <>
              {label}
              <Icon />
            </>
          ) : !isLabelVisible && Icon ? (
            <>
              <Icon />
              <span className="sr-only">{label}</span>
            </>
          ) : (
            label
          )}
        </button>
      );
    }
    return (
      <button
        className={className + " flex gap-1.5"}
        type={type}
      >
        {hasIcon && isLabelVisible && Icon ? (
          <>
            <Icon />
            {label}
          </>
        ) : !isLabelVisible && Icon ? (
          <>
            <Icon />
            <span className="sr-only">{label}</span>
          </>
        ) : (
          label
        )}
      </button>
    );
  }
};
