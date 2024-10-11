import type { SchematicOptionObject } from '@o3r/schematics';

export interface GenerateCssSchematicsSchema extends SchematicOptionObject {
  /** Path patterns to the Design Token JSON files */
  designTokenFilePatterns: string | string[];

  /**
   * Path to generate the metadata for CMS
   * The Metadata will be generated only if the file path is specified
   */
  metadataOutput?: string;

  /**
   * Ignore the private variable in the metadata generation
   */
  metadataIgnorePrivate?: boolean;

  /**
   * Output file where generate the CSS
   *
   * If specified, all the generated CSS variable will be generated in the given file.
   * Otherwise, the output file will be determined based on the Variable parameters
   */
  output?: string;

  /** File path to generate the variable if not determined by the specification */
  defaultStyleFile: string;

  /** Enable Watch mode */
  watch?: boolean;

  /** Root path of files where the CSS will be generated */
  rootPath?: string;

  /** Determine if the process should stop in case of Token duplication */
  failOnDuplicate?: boolean;

  /** Prefix to happen to generated variables */
  prefix?: string;

  /** Generate the private variable to the given language */
  renderPrivateVariableTo?: 'sass';

  /** Prefix to happen to generated private variables */
  prefixPrivate?: string;

  /** Determine if the builder should fail if a missing Design Token reference is detected */
  failOnMissingReference?: boolean;

  /** Type of the variables to generate for a Design Token */
  variableType?: 'css' | 'sass';

  /** Path to a template file (or a list of template files) to apply as default configuration to a Design Token extension */
  templateFile?: string | string[];
}
