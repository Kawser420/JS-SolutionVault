import React, { useState, useMemo } from "react";
import { Problem, ProblemInput } from "../../types";
import { getExplanation } from "../services/geminiService";
import { MarkdownRenderer } from "./MarkdownRenderer";
import {
  SparklesIcon,
  CodeIcon,
  CopyIcon,
  CheckCircleIcon,
  XCircleIcon,
  ChevronDownIcon,
} from "./icons/Icons";

interface ProblemCardProps {
  problem: Problem;
}

const InputField: React.FC<{
  input: ProblemInput;
  value: string;
  onChange: (id: string, value: string) => void;
}> = ({ input, value, onChange }) => {
  return (
    <div key={input.id}>
      <label
        htmlFor={input.id}
        className="block text-sm font-medium text-[--text-color]/80 mb-1"
      >
        {input.label}
      </label>
      <input
        type={input.type}
        id={input.id}
        name={input.id}
        value={value}
        onChange={(e) => onChange(input.id, e.target.value)}
        placeholder={input.placeholder}
        min={input.min}
        max={input.max}
        step={input.step}
        className="block w-full bg-[--bg-color] border border-[--border-color] rounded-md py-2 px-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[--primary-color] focus:border-[--primary-color]"
      />
    </div>
  );
};

const ProblemCardComponent: React.FC<ProblemCardProps> = ({ problem }) => {
  const initialInputs = useMemo(
    () =>
      problem.inputs.reduce((acc, input) => {
        acc[input.id] = String(input.defaultValue ?? "");
        return acc;
      }, {} as Record<string, string>),
    [problem.inputs]
  );

  const [inputs, setInputs] = useState<Record<string, string>>(initialInputs);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [isExplanationVisible, setIsExplanationVisible] = useState(false);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [isExplanationLoading, setIsExplanationLoading] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");

  const handleInputChange = (id: string, value: string) => {
    setInputs((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult(null);
    try {
      const solverResult = problem.solver(inputs);
      setResult(solverResult);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    }
  };

  const handleExplain = async () => {
    setIsExplanationVisible((prev) => !prev);
    if (explanation || isExplanationLoading) return;

    setIsExplanationLoading(true);
    setError(null);
    try {
      const solverCode = problem.solver.toString();
      const aiExplanation = await getExplanation(
        problem.title,
        problem.solverName || "anonymous",
        solverCode
      );
      setExplanation(aiExplanation);
    } catch (err: any) {
      setExplanation("Failed to load explanation.");
    } finally {
      setIsExplanationLoading(false);
    }
  };

  const handleCopyCode = () => {
    const codeToCopy = problem.solver.toString();
    navigator.clipboard.writeText(codeToCopy).then(
      () => {
        setCopySuccess("Copied!");
        setTimeout(() => setCopySuccess(""), 2000);
      },
      () => {
        setCopySuccess("Failed!");
        setTimeout(() => setCopySuccess(""), 2000);
      }
    );
  };

  const solverCode = useMemo(() => {
    const fnString = problem.solver.toString();
    // Basic formatting to remove the function wrapper
    const bodyMatch = fnString.match(/\{(.*)\}/s);
    if (bodyMatch && bodyMatch[1]) {
      return bodyMatch[1]
        .trim()
        .replace(/(\r\n|\n|\r)/gm, "\n")
        .split("\n")
        .map((line) => line.substring(4))
        .join("\n");
    }
    return fnString;
  }, [problem.solver]);

  return (
    <div className="bg-[--card-bg] border border-[--border-color] rounded-lg shadow-sm flex flex-col transition-all duration-300 animate-[fade-in_0.5s_ease-out]">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-[--text-color]">
          {problem.title}
        </h3>
      </div>
      <div className="p-6 pt-0 flex-grow">
        <form onSubmit={handleSubmit} className="space-y-4">
          {problem.inputs.map((input) => (
            <InputField
              key={input.id}
              input={input}
              value={inputs[input.id] ?? ""}
              onChange={handleInputChange}
            />
          ))}
          <button
            type="submit"
            className="w-full bg-[--primary-color] text-white font-semibold py-2 px-4 rounded-md hover:bg-[--primary-color]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[--card-bg] focus:ring-[--primary-color]"
          >
            {problem.buttonText}
          </button>
        </form>

        {result && (
          <div className="mt-4 p-3 rounded-md bg-green-500/10 text-green-700 dark:text-green-300 flex items-start gap-3">
            <CheckCircleIcon className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <pre className="text-sm whitespace-pre-wrap font-mono">
              {result}
            </pre>
          </div>
        )}
        {error && (
          <div className="mt-4 p-3 rounded-md bg-red-500/10 text-red-700 dark:text-red-300 flex items-start gap-3">
            <XCircleIcon className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <pre className="text-sm whitespace-pre-wrap font-mono">{error}</pre>
          </div>
        )}
      </div>

      <div className="border-t border-[--border-color] mt-auto">
        {(isCodeVisible || isExplanationVisible) && (
          <div className="border-b border-[--border-color] my-0" />
        )}

        {isCodeVisible && (
          <div className="p-4 bg-[--bg-color] relative">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[--text-color]/70">
                Solution Code
              </h4>
              <button
                onClick={handleCopyCode}
                className="text-[--text-color]/60 hover:text-[--primary-color] transition-colors text-xs flex items-center gap-1"
              >
                <CopyIcon className="w-4 h-4" /> {copySuccess || "Copy"}
              </button>
            </div>
            <pre className="text-xs bg-transparent p-0 rounded-md overflow-x-auto">
              <code className="language-js font-mono">{solverCode}</code>
            </pre>
          </div>
        )}

        {isExplanationVisible && (
          <div className="p-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[--text-color]/70 mb-2">
              AI Explanation
            </h4>
            {isExplanationLoading ? (
              <div className="space-y-2">
                <div className="h-4 bg-[--border-color] rounded w-full animate-pulse"></div>
                <div className="h-4 bg-[--border-color] rounded w-5/6 animate-pulse"></div>
                <div className="h-4 bg-[--border-color] rounded w-3/4 animate-pulse"></div>
              </div>
            ) : (
              <div className="text-sm text-[--text-color]/90 prose prose-sm max-w-none">
                {explanation && <MarkdownRenderer content={explanation} />}
              </div>
            )}
          </div>
        )}

        <div className="p-2 flex justify-end gap-2 text-xs">
          <button
            onClick={() => setIsCodeVisible(!isCodeVisible)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-[--border-color] text-[--text-color]/80 transition-colors"
          >
            <CodeIcon className="w-4 h-4" />
            <span>{isCodeVisible ? "Hide" : "Show"} Code</span>
            <ChevronDownIcon
              className={`w-4 h-4 transition-transform ${
                isCodeVisible ? "rotate-180" : ""
              }`}
            />
          </button>
          <button
            onClick={handleExplain}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-[--border-color] text-[--text-color]/80 transition-colors"
          >
            <SparklesIcon className="w-4 h-4 text-[--secondary-color]" />
            <span>{isExplanationVisible ? "Hide" : "Explain"} AI</span>
            <ChevronDownIcon
              className={`w-4 h-4 transition-transform ${
                isExplanationVisible ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export const ProblemCard = React.memo(ProblemCardComponent);
