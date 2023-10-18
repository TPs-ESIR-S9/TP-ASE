/**
 */
package roboML;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.eclipse.emf.common.util.Enumerator;

/**
 * <!-- begin-user-doc -->
 * A representation of the literals of the enumeration '<em><b>Arithmetic Operators</b></em>',
 * and utility methods for working with them.
 * <!-- end-user-doc -->
 * @see roboML.RoboMLPackage#getArithmeticOperators()
 * @model
 * @generated
 */
public enum ArithmeticOperators implements Enumerator {
	/**
	 * The '<em><b>Plus</b></em>' literal object.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #PLUS_VALUE
	 * @generated
	 * @ordered
	 */
	PLUS(0, "Plus", "Plus"),

	/**
	 * The '<em><b>Minus</b></em>' literal object.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #MINUS_VALUE
	 * @generated
	 * @ordered
	 */
	MINUS(1, "Minus", "Minus"),

	/**
	 * The '<em><b>Multiplie</b></em>' literal object.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #MULTIPLIE_VALUE
	 * @generated
	 * @ordered
	 */
	MULTIPLIE(2, "Multiplie", "Multiplie"),

	/**
	 * The '<em><b>Divide</b></em>' literal object.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #DIVIDE_VALUE
	 * @generated
	 * @ordered
	 */
	DIVIDE(3, "Divide", "Divide"),

	/**
	 * The '<em><b>Modulo</b></em>' literal object.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #MODULO_VALUE
	 * @generated
	 * @ordered
	 */
	MODULO(4, "Modulo", "Modulo"),

	/**
	 * The '<em><b>Power</b></em>' literal object.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #POWER_VALUE
	 * @generated
	 * @ordered
	 */
	POWER(5, "Power", "Power");

	/**
	 * The '<em><b>Plus</b></em>' literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #PLUS
	 * @model name="Plus"
	 * @generated
	 * @ordered
	 */
	public static final int PLUS_VALUE = 0;

	/**
	 * The '<em><b>Minus</b></em>' literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #MINUS
	 * @model name="Minus"
	 * @generated
	 * @ordered
	 */
	public static final int MINUS_VALUE = 1;

	/**
	 * The '<em><b>Multiplie</b></em>' literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #MULTIPLIE
	 * @model name="Multiplie"
	 * @generated
	 * @ordered
	 */
	public static final int MULTIPLIE_VALUE = 2;

	/**
	 * The '<em><b>Divide</b></em>' literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #DIVIDE
	 * @model name="Divide"
	 * @generated
	 * @ordered
	 */
	public static final int DIVIDE_VALUE = 3;

	/**
	 * The '<em><b>Modulo</b></em>' literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #MODULO
	 * @model name="Modulo"
	 * @generated
	 * @ordered
	 */
	public static final int MODULO_VALUE = 4;

	/**
	 * The '<em><b>Power</b></em>' literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #POWER
	 * @model name="Power"
	 * @generated
	 * @ordered
	 */
	public static final int POWER_VALUE = 5;

	/**
	 * An array of all the '<em><b>Arithmetic Operators</b></em>' enumerators.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	private static final ArithmeticOperators[] VALUES_ARRAY = new ArithmeticOperators[] { PLUS, MINUS, MULTIPLIE,
			DIVIDE, MODULO, POWER, };

	/**
	 * A public read-only list of all the '<em><b>Arithmetic Operators</b></em>' enumerators.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final List<ArithmeticOperators> VALUES = Collections.unmodifiableList(Arrays.asList(VALUES_ARRAY));

	/**
	 * Returns the '<em><b>Arithmetic Operators</b></em>' literal with the specified literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param literal the literal.
	 * @return the matching enumerator or <code>null</code>.
	 * @generated
	 */
	public static ArithmeticOperators get(String literal) {
		for (int i = 0; i < VALUES_ARRAY.length; ++i) {
			ArithmeticOperators result = VALUES_ARRAY[i];
			if (result.toString().equals(literal)) {
				return result;
			}
		}
		return null;
	}

	/**
	 * Returns the '<em><b>Arithmetic Operators</b></em>' literal with the specified name.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param name the name.
	 * @return the matching enumerator or <code>null</code>.
	 * @generated
	 */
	public static ArithmeticOperators getByName(String name) {
		for (int i = 0; i < VALUES_ARRAY.length; ++i) {
			ArithmeticOperators result = VALUES_ARRAY[i];
			if (result.getName().equals(name)) {
				return result;
			}
		}
		return null;
	}

	/**
	 * Returns the '<em><b>Arithmetic Operators</b></em>' literal with the specified integer value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the integer value.
	 * @return the matching enumerator or <code>null</code>.
	 * @generated
	 */
	public static ArithmeticOperators get(int value) {
		switch (value) {
		case PLUS_VALUE:
			return PLUS;
		case MINUS_VALUE:
			return MINUS;
		case MULTIPLIE_VALUE:
			return MULTIPLIE;
		case DIVIDE_VALUE:
			return DIVIDE;
		case MODULO_VALUE:
			return MODULO;
		case POWER_VALUE:
			return POWER;
		}
		return null;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	private final int value;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	private final String name;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	private final String literal;

	/**
	 * Only this class can construct instances.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	private ArithmeticOperators(int value, String name, String literal) {
		this.value = value;
		this.name = name;
		this.literal = literal;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public int getValue() {
		return value;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String getName() {
		return name;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String getLiteral() {
		return literal;
	}

	/**
	 * Returns the literal value of the enumerator, which is its string representation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String toString() {
		return literal;
	}

} //ArithmeticOperators
